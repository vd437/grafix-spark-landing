import { Button } from "@/components/ui/button";
import { Sparkles, ArrowLeft } from "lucide-react";
import heroImage from "@/assets/hero-design.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-soft">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent-foreground">دورة احترافية متكاملة</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-foreground">أطلق العنان</span>
              <span className="block text-gradient">لإبداعك</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              تعلم التصميم الجرافيكي من الصفر حتى الاحتراف مع مشاريع عملية وشهادة معتمدة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button 
                size="lg" 
                className="gradient-hero text-lg px-8 py-6 shadow-glow hover:scale-105 transition-transform"
              >
                سجل الآن
                <ArrowLeft className="mr-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-muted"
              >
                تعرف على المزيد
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-end pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">+2,500</div>
                <div className="text-sm text-muted-foreground">طالب مسجل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">4.9/5</div>
                <div className="text-sm text-muted-foreground">تقييم الدورة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">درس فيديو</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 gradient-creative rounded-3xl blur-2xl opacity-30" />
            <img 
              src={heroImage} 
              alt="دورة التصميم الجرافيكي" 
              className="relative rounded-3xl shadow-elevated w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
