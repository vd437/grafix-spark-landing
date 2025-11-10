import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft, Zap, CreditCard, Smartphone, Building2 } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl gradient-creative opacity-10 blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ابدأ رحلتك <span className="text-gradient">الإبداعية</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            استثمر في مستقبلك المهني اليوم
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-elevated hover:shadow-glow transition-all duration-300 relative overflow-hidden animate-scale-in bg-card">
            {/* Popular Badge */}
            <div className="absolute top-0 left-0 right-0 gradient-hero py-2">
              <div className="flex items-center justify-center gap-2 text-primary-foreground font-semibold">
                <Zap className="w-4 h-4" />
                <span>الأكثر طلباً</span>
              </div>
            </div>

            <CardContent className="p-8 md:p-12 pt-16">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-bold text-gradient">499</span>
                  <div className="text-right">
                    <div className="text-2xl font-semibold text-foreground">ريال</div>
                    <div className="text-sm text-muted-foreground line-through">999 ريال</div>
                  </div>
                </div>
                <div className="inline-block bg-accent/20 text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold mt-2">
                  🎉 خصم 50% - عرض لفترة محدودة
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {[
                  "50+ درس فيديو عالي الجودة",
                  "مشاريع تطبيقية واقعية",
                  "شهادة إتمام معتمدة",
                  "وصول غير محدود مدى الحياة",
                  "دعم فني متواصل",
                  "مجتمع خاص للطلاب",
                  "تحديثات مجانية",
                  "ملفات التصميم القابلة للتحميل",
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="w-full gradient-hero text-lg py-6 shadow-glow hover:scale-105 transition-transform font-bold"
              >
                سجل الآن
                <ArrowLeft className="mr-2 w-5 h-5" />
              </Button>

              {/* Guarantee */}
              <div className="mt-6 text-center text-sm text-muted-foreground">
                ✅ ضمان استرداد المبلغ خلال 30 يوم
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">طرق الدفع المتاحة</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-muted px-5 py-3 rounded-lg flex items-center gap-2 font-medium hover:bg-muted/80 transition-colors">
                <CreditCard className="w-5 h-5 text-primary" />
                <span>بطاقة ائتمان</span>
              </div>
              <div className="bg-muted px-5 py-3 rounded-lg flex items-center gap-2 font-medium hover:bg-muted/80 transition-colors">
                <CreditCard className="w-5 h-5 text-secondary" />
                <span>مدى</span>
              </div>
              <div className="bg-muted px-5 py-3 rounded-lg flex items-center gap-2 font-medium hover:bg-muted/80 transition-colors">
                <Smartphone className="w-5 h-5 text-foreground" />
                <span>Apple Pay</span>
              </div>
              <div className="bg-muted px-5 py-3 rounded-lg flex items-center gap-2 font-medium hover:bg-muted/80 transition-colors">
                <Building2 className="w-5 h-5 text-accent-foreground" />
                <span>تحويل بنكي</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
