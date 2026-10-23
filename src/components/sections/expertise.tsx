import { Boxes, Braces, Container, CreditCard, ShieldCheck, Workflow } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { expertise } from '@/data/expertise'

const icons = {
  boxes: Boxes,
  braces: Braces,
  shield: ShieldCheck,
  card: CreditCard,
  container: Container,
  workflow: Workflow,
} as const

export function Expertise() {
  return (
    <section aria-labelledby="expertise-title" id="expertise" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="expertise-title"
          eyebrow="Technical expertise"
          title="Depth where it matters"
          description="Core competencies I bring to backend teams building regulated, high-availability products."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.05} className="bg-background">
                <article className="group h-full p-7 transition-colors hover:bg-secondary/50">
                  <Icon className="size-6 text-primary transition-colors group-hover:text-violet" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
