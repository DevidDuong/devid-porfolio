import { Cloud, Database, Server, Wrench, Container } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/data'

const icons = {
  Backend: Server,
  Database: Database,
  DevOps: Container,
  Cloud: Cloud,
  Tools: Wrench,
} as const

export function Skills() {
  return (
    <section aria-labelledby="skills-title" id="skills" className="relative py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="A pragmatic backend toolkit"
          description="Technologies I use daily to design, ship, and operate production services."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.category as keyof typeof icons]
            return (
              <Reveal key={group.category} delay={i * 0.06} className={i === 0 ? 'lg:row-span-1' : ''}>
                <article className="glass h-full rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-violet/20 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold">{group.category}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
          <Reveal delay={0.3}>
            <article className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-primary to-violet p-6 text-primary-foreground">
              <h3 className="text-lg font-semibold">Currently exploring</h3>
              <p className="mt-3 leading-relaxed opacity-90">
                Event-driven architecture with Kafka, Kubernetes, and distributed tracing with OpenTelemetry.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
