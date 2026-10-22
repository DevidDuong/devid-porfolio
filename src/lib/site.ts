// Accepts "https://example.com/", "example.com" or "http://localhost:3000" and returns a clean origin,
// or undefined when the value cannot be parsed as a URL.
function toOrigin(raw: string) {
  try {
    return new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`).origin
  } catch {
    return undefined
  }
}

export const siteUrl = (() => {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) {
    const origin = toOrigin(explicit)
    if (origin) return origin
    console.warn(`NEXT_PUBLIC_SITE_URL is not a valid URL ("${explicit}"); falling back to the default site URL.`)
  }
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL
  if (vercel) return `https://${vercel}`
  return `http://localhost:${process.env.PORT ?? 7776}`
})()
