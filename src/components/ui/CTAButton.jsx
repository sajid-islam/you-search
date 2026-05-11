import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function CTAButton({ 
  children, 
  className, 
  variant = "primary", 
  size = "md",
  ...props 
}) {
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90",
    secondary: "bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-50",
    outline: "bg-transparent text-primary border border-primary/20 hover:bg-primary/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all duration-200",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
