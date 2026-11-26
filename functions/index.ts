import { localeRedirect } from "../hosting/locale.mjs";

export const onRequestGet = ({ request }: { request: Request }) => localeRedirect(request);
export const onRequestHead = onRequestGet;
