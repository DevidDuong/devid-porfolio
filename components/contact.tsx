import { ArrowUpRight, Mail } from 'lucide-react'
import { Github, Linkedin } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/data'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github, icon: Github },
  { label: 'LinkedIn', value: profile.linkedin.replace('https://www.', ''), href: profile.linkedin, icon: Linkedin },
]

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-14">
            <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-gradient-to-br from-primary/30 to-violet/30 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Contact</p>
                <h2 id="contact-title" className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  {"Let's build something reliable together."}
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  {"I'm open to senior backend, platform, and FinTech engineering roles — remote or on-site. Reach out and I'll reply within 24 hours."}
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {channels.map(({ label, value, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-colors hover:border-primary/50"
                    >
                      <span className="flex size-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-violet/20 text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm text-muted-foreground">{label}</span>
                        <span className="block truncate font-medium">{value}</span>
                      </span>
                      <ArrowUpRight
                        className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
