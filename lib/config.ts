import { profile } from "@/data/profile";

const clean = (value?: string) => (value ?? "").trim();

export const siteUrl = (clean(process.env.SITE_URL) || profile.siteUrl).replace(/\/+$/, "");

export const isIndexable =
  clean(process.env.SITE_URL) !== "" &&
  process.env.VERCEL_ENV !== "preview" &&
  process.env.ALLOW_INDEXING !== "false";

export const web3formsKey = clean(process.env.WEB3FORMS_KEY) || profile.form.web3formsKey;
export const formEndpoint = clean(process.env.FORM_ENDPOINT) || profile.form.formEndpoint;

export const formConfig = {
  endpoint: web3formsKey ? "https://api.web3forms.com/submit" : formEndpoint,
  key: web3formsKey,
  to: profile.contact.email,
};
