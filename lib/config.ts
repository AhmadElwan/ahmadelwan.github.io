/**
 * Deployment settings read from environment variables (see .env.example).
 * Nothing here is secret: the Web3Forms access key is designed to be public.
 */
import { profile } from "@/data/profile";

const clean = (v?: string) => (v ?? "").trim();

/** Public address of the site, without a trailing slash. */
export const siteUrl = (clean(process.env.SITE_URL) || profile.siteUrl).replace(/\/+$/, "");

/**
 * Search engines may index the site only when SITE_URL is set (a real domain) and this
 * is not a preview deployment. Everything else (local, previews, unset) is noindex.
 */
export const isIndexable =
  clean(process.env.SITE_URL) !== "" && process.env.VERCEL_ENV !== "preview" && process.env.ALLOW_INDEXING !== "false";

/** Contact form keys: environment first, then data/profile.ts. */
export const web3formsKey = clean(process.env.WEB3FORMS_KEY) || profile.form.web3formsKey;
export const formEndpoint = clean(process.env.FORM_ENDPOINT) || profile.form.formEndpoint;
