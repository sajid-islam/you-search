import Container from '@/components/ui/Container';
import CTAButton from '@/components/ui/CTAButton';
import { useSearchDialog } from "@/context/SearchDialogContext";

export default function FinalCTASection() {
  const { openDialog } = useSearchDialog();

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="bg-primary relative overflow-hidden rounded-[3rem] px-8 py-20 text-center md:py-28">
          {/* Decorative background elements */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
            <div className="absolute top-[-20%] left-[-10%] h-[50%] w-[50%] rounded-full bg-white/5 blur-[120px]" />
            <div className="bg-secondary/10 absolute right-[-10%] bottom-[-20%] h-[50%] w-[50%] rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Learn with intention
            </h2>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              Join 15,000+ builders who have escaped the algorithmic loop and started mastering
              their craft.
            </p>
            <div className="pt-4">
              <CTAButton
                variant="secondary"
                size="lg"
                className="text-primary border-none bg-white shadow-xl shadow-black/10 hover:bg-slate-50"
                onClick={() => openDialog()}
              >
                Start Your Focus Session
              </CTAButton>
            </div>
            <p className="text-sm font-medium text-white/40">No Account Required, Free For Ever!</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
