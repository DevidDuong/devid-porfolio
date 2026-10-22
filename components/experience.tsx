import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/lib/data'

export function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Professional timeline"
          description="From building REST services to owning critical payment infrastructure."
        />
        <ol className="relative border-l border-border md:ml-4">
          {experience.map((job, i) => (
            <li key={job.role} className="relative pb-12 pl-8 last:pb-0 md:pl-10">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[7px] size-3.5 rounded-full border-2 border-background bg-gradient-to-br from-primary to-violet ring-4 ring-primary/15"
              />
              <Reveal delay={i * 0.08}>
                <article className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <span className="font-mono text-xs text-primary">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.company} · {job.location}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                    {job.stack.map((tech) => (
                      <li key={tech} className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
