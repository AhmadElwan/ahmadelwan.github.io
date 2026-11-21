/**
 * Shared contact-form behaviour used by every design.
 * Markup contract: <form id="contact-form" data-endpoint data-key data-to> with fields
 * name, email, message, a honeypot checkbox "botcheck", a submit button, and an element
 * with id="form-status". If a form service is configured the message is posted there
 * (and emailed to the owner); otherwise it falls back to opening the visitor's email app.
 */
import { profile } from "@/data/profile";
import { web3formsKey, formEndpoint } from "@/lib/config";

export const formScript = `
(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;
  var status = document.getElementById("form-status");
  var button = form.querySelector("button[type=submit]");
  var to = form.getAttribute("data-to") || "";

  function say(msg, kind) {
    status.textContent = msg;
    status.setAttribute("data-kind", kind || "");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var endpoint = form.getAttribute("data-endpoint") || "";
    var key = form.getAttribute("data-key") || "";
    var f = form.elements;
    if (f.botcheck && f.botcheck.checked) { say("Thanks, your message is in. I will reply by email.", "ok"); form.reset(); return; }
    var name = f.name.value.trim(), email = f.email.value.trim(), message = f.message.value.trim();
    if (!name || !email || !message) { say("Please fill in all fields.", "error"); return; }
    var subject = "Portfolio message from " + name;

    if (!endpoint) {
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(message + "\\n\\n" + name + " (" + email + ")");
      say("Opening your email app…", "");
      return;
    }

    var payload = { name: name, email: email, message: message, subject: subject, from_name: "Portfolio contact form" };
    if (key) payload.access_key = key;
    button.disabled = true;
    say("Sending…", "");
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (data) {
        if (res.ok && data.success !== false) { say("Thanks, your message is in. I will reply by email.", "ok"); form.reset(); }
        else throw new Error("failed");
      });
    }).catch(function () {
      say("Something went wrong. Please email me directly at " + to + ".", "error");
    }).then(function () { button.disabled = false; });
  });
})();
`;

export function formConfig() {
  return {
    endpoint: web3formsKey ? "https://api.web3forms.com/submit" : formEndpoint,
    key: web3formsKey,
    to: profile.contact.email,
  };
}
