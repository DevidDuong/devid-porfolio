import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  id: string
}

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>}
    </Reveal>
  )
}
