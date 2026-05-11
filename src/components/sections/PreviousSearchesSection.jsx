import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SearchHistoryCard from "@/components/ui/SearchHistoryCard";

const recentSearches = [
  {
    query: "Next.js 15 Authentication with Auth.js",
    tags: ["Intermediate", "Project Based", "Crash Course"],
    timestamp: "2 hours ago"
  },
  {
    query: "React Performance Optimization Guide",
    tags: ["Advanced", "Technical", "Deep Dive"],
    timestamp: "5 hours ago"
  },
  {
    query: "Docker for Frontend Developers",
    tags: ["Beginner", "Playlist", "Zero to Hero"],
    timestamp: "Yesterday"
  },
  {
    query: "Tailwind CSS Layout Masterclass",
    tags: ["Intermediate", "Hands-on", "Tutorial"],
    timestamp: "2 days ago"
  },
  {
    query: "TypeScript Fundamentals for React",
    tags: ["Beginner", "Full Course", "Essentials"],
    timestamp: "3 days ago"
  },
  {
    query: "Node.js Backend Architecture",
    tags: ["Advanced", "Design Patterns", "Series"],
    timestamp: "1 week ago"
  }
];

export default function PreviousSearchesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionHeading 
          title="Pick Up Where You Left Off"
          subtitle="Your personal learning library, organized and ready whenever you are."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentSearches.map((search, index) => (
            <SearchHistoryCard 
              key={index}
              query={search.query}
              tags={search.tags}
              timestamp={search.timestamp}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
