import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Expertise } from '@/components/expertise'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { PageLoader } from '@/components/page-loader'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { profile } from '@/lib/data'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: { '@type': 'PostalAddress', addressCountry: 'KH' },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ['Open Banking', 'Payment Systems', 'Java', 'Spring Boot', 'NestJS', 'PostgreSQL', 'Docker Swarm'],
}

export default function Page() {
  return (
    <>
      <PageLoader />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Expertise />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
