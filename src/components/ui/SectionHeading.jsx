import { cn } from "@/lib/utils";

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  className 
}) {
  return (
    <div className={cn(
      "mb-12 space-y-4", 
      centered ? "text-center" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
