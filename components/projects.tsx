'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Layers } from 'lucide-react'
import { Github } from '@/components/brand-icons'
import { useState } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { projectCategories, projects, type Project } from '@/lib/data'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass group flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-primary/40">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs text-primary">
          {project.category}
        </span>
      </div>
      <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mt-5 rounded-xl border border-border bg-background/40 p-4">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <Layers className="size-3.5" aria-hidden="true" />
          Architecture
        </p>
        <ul className="mt-3 flex flex-col gap-2 text-sm">
          {project.architecture.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span aria-hidden="true" className="font-mono text-violet">{'>'}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-3 pt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          <Github className="size-4" aria-hidden="true" />
          GitHub
          <span className="sr-only">{`repository for ${project.title}`}</span>
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <ExternalLink className="size-4" aria-hidden="true" />
          Live Demo
          <span className="sr-only">{`of ${project.title}`}</span>
        </a>
      </div>
    </article>
  )
}

export function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section aria-labelledby="projects-title" id="projects" className="relative py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="projects-title"
          eyebrow="Featured projects"
          title="Systems built for production"
          description="A selection of FinTech and infrastructure work, with the architecture decisions behind each."
        />

        <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((category) => {
            const selected = active === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(category)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selected ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-violet"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{category}</span>
              </button>
            )
          })}
        </div>

        <motion.ul layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.li
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}
