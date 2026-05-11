import { cn } from "@/lib/utils";

export default function StepCard({ number, title, description, isLast }) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/10 to-transparent" />
      )}
      <div className="w-20 h-20 rounded-full bg-white shadow-xl shadow-primary/5 flex items-center justify-center text-2xl font-bold text-primary mb-8 border border-slate-100">
        {number}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-500 max-w-xs">{description}</p>
    </div>
  );
}
