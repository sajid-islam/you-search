import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description, className }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn(
        "p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6 text-primary">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}
