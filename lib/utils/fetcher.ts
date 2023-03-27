export const fetcher = (
  url: RequestInfo | URL,
  init?: RequestInit | undefined
) => fetch(url, init).then((res) => res.json());
