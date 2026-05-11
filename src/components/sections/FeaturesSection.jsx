import Container from '@/components/ui/Container';
import FeatureCard from '@/components/ui/FeatureCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { Layout, Rocket, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Optimized Searches',
    description:
      'Our algorithm rewrites your queries to prioritize educational content over entertainment.',
  },
  // {
  //   icon: Shield,
  //   title: "Avoid Clickbait",
  //   description: "Filter out low-value thumbnails and exaggerated titles that steal your attention."
  // },
  {
    icon: Target,
    title: 'Stay Focused',
    description: 'Minimal interface designed to keep you on the path of intentional learning.',
  },
  // {
  //   icon: History,
  //   title: "Search History",
  //   description: "Keep track of your best learning paths and jump back in whenever you're ready."
  // },
  {
    icon: Zap,
    title: 'Faster Learning',
    description:
      'Spend less time searching and more time building. Accelerate your skill acquisition.',
  },
  {
    icon: Layout,
    title: 'Simple & Minimal',
    description: 'A clean, distraction-free environment built for modern developers and students.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-24">
      <Container>
        <SectionHeading
          title="Designed for Focused Learners"
          subtitle="Everything you need to master new skills without the usual YouTube distractions."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
