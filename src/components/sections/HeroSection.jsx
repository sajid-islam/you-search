import CTAButton from '@/components/ui/CTAButton';
import Container from '@/components/ui/Container';
import HeroSearchBox from '@/components/ui/HeroSearchBox';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -z-10 h-full w-full max-w-7xl -translate-x-1/2">
        <div className="bg-primary/10 absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full blur-[120px]" />
        <div className="bg-secondary/10 absolute top-[20%] right-[-5%] h-[30%] w-[30%] rounded-full blur-[100px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-accent text-accent-foreground border-primary/10 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              Stop tutorial hell today
            </span>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
              Search YouTube Without Falling Into{' '}
              <span className="text-primary">Tutorial Hell</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-slate-500">
              Generate cleaner YouTube searches and stay focused on learning. Less noise, more
              progress.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HeroSearchBox />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#how-it-works">
              <CTAButton variant="outline" size="md">
                How it works
              </CTAButton>
            </a>
          </motion.div>
        </div>
      </Container>

      {/* Grid Background Effect */}
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-1/2 w-full bg-[linear-gradient(to_bottom,transparent,#F8FAFC)]" />
      <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
    </section>
  );
}
