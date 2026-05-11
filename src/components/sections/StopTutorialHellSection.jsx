import Container from "@/components/ui/Container";
import { AlertCircle, CheckCircle2, Save } from "lucide-react";

export default function StopTutorialHellSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              You don&apos;t need more tutorials.<br />
              <span className="text-blue-600">You need intentional learning.</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10">
              The cycle of watching without doing is the biggest obstacle to mastery. 
              YouSearch helps you find exactly what you need to build, not just watch.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-2xl font-bold text-slate-900 mb-1">2,400+</div>
                <div className="text-sm text-slate-400 font-medium">Tutorials searched</div>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-2xl font-bold text-slate-900 mb-1">450h</div>
                <div className="text-sm text-slate-400 font-medium">Hours saved</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 relative z-10">
              <div className="flex items-center space-x-3 mb-6 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                <AlertCircle className="text-amber-500" size={20} />
                <p className="text-sm font-medium text-amber-800">
                  You searched &quot;React tutorials&quot; 12 times this week.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-green-500" size={18} />
                  <span className="text-slate-600 font-medium">Generated cleaner search result</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100 opacity-60">
                  <Save className="text-blue-500" size={18} />
                  <span className="text-slate-600 font-medium">Saved to &quot;Next.js Mastery&quot; path</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Productivity Score: 98%
                </span>
              </div>
            </div>
            
            {/* Abstract shapes behind the card */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-blue-600/5 rounded-3xl -z-10 transform rotate-3" />
          </div>
        </div>
      </Container>
    </section>
  );
}
