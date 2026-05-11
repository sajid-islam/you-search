import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import StepCard from '@/components/ui/StepCard';

const steps = [
  {
    number: '01',
    title: 'Type what you want to learn',
    description: "Enter your topic, whether it's a specific framework or a broad concept.",
  },
  {
    number: '02',
    title: 'Generate a cleaner search',
    description: 'Instantly generate a direct YouTube search link tailored to your topic.',
  },
  {
    number: '03',
    title: 'Learn without distractions',
    description: 'Go straight to the best resources and stay focused on your learning goals.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <Container>
        <SectionHeading
          title="Master Any Topic in 3 Steps"
          subtitle="Stop wandering aimlessly through YouTube's algorithm and start learning with precision."
        />

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
