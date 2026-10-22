'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import Image from 'next/image'
import { profile, stats } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.75 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }),
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/25 to-violet/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open to senior backend roles
          </motion.div>

          <motion.h1
            id="hero-title"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
          >
            Building reliable <span className="text-gradient">payment & Open Banking</span> backends.
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show" className="mt-4 font-mono text-sm text-primary">
            {`${profile.name} · ${profile.role}`}
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            {profile.summary}
          </motion.p>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-opacity hover:opacity-90"
            >
              View projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Download className="size-4" aria-hidden="true" />
              Get in touch
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass relative overflow-hidden rounded-2xl p-2 shadow-2xl shadow-primary/10">
            <div className="flex items-center gap-1.5 px-2 pb-2" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
              <span className="ml-3 font-mono text-[11px] text-muted-foreground">payments-cluster / overview</span>
            </div>
            <Image
              src="/images/hero-architecture.png"
              alt="Illustration of a distributed payment system architecture with API gateway, services, and databases"
              width={1536}
              height={960}
              priority
              className="aspect-[16/10] w-full rounded-xl object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 -left-4 hidden rounded-xl px-4 py-3 font-mono text-xs sm:block">
            <p className="text-muted-foreground">POST /v2/payments</p>
            <p className="mt-1 text-emerald-500">{'201 Created · 84ms'}</p>
          </div>
        </motion.div>
      </div>

      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4 md:px-6"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-xl p-5">
            <dt className="text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">{stat.value}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}
