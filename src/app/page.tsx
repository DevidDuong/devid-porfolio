import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Experience } from '@/components/sections/experience'
import { Expertise } from '@/components/sections/expertise'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Navbar } from '@/components/layout/navbar'
import { PageLoader } from '@/components/layout/page-loader'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'

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
    </>
  )
}
