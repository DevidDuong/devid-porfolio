import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { aboutPoints } from '@/lib/data'

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="about-title"
          eyebrow="About me"
          title="Engineering the systems money moves through"
          description="I'm a backend developer based in Cambodia who cares about correctness first. In financial systems a duplicated request or a lost event is not a bug — it's someone's money. I build services that are secure, observable, and designed to scale."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {aboutPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08}>
              <article className="glass h-full rounded-2xl p-6 transition-colors hover:border-primary/40">
                <p className="font-mono text-xs text-primary">{`0${i + 1}`}</p>
                <h3 className="mt-2 text-lg font-semibold">{point.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{point.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
