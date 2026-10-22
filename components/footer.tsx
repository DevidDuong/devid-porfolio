import { Mail } from 'lucide-react'
import { Github, Linkedin } from '@/components/brand-icons'
import { navLinks, profile } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-2">
          {[
            { href: `mailto:${profile.email}`, label: 'Email', icon: Mail },
            { href: profile.github, label: 'GitHub', icon: Github },
            { href: profile.linkedin, label: 'LinkedIn', icon: Linkedin },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center font-mono text-xs text-muted-foreground md:px-6">
          {`© ${new Date().getFullYear()} ${profile.name}. Built with Next.js, TypeScript & Tailwind CSS.`}
        </p>
      </div>
    </footer>
  )
}
