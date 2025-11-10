import { Palette, Rocket, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import toolsIcon from "@/assets/feature-tools.png";
import projectsIcon from "@/assets/feature-projects.png";
import certificateIcon from "@/assets/feature-certificate.png";

const features = [
  {
    icon: toolsIcon,
    title: "تعلم الأدوات الأساسية",
    description: "احترف استخدام أدوات التصميم الاحترافية مثل Photoshop و Illustrator و Figma",
    color: "from-primary to-primary-light",
  },
  {
    icon: projectsIcon,
    title: "مشاريع تطبيقية واقعية",
    description: "طبق ما تتعلمه من خلال مشاريع حقيقية تضاف لمعرض أعمالك",
    color: "from-secondary to-secondary-light",
  },
  {
    icon: certificateIcon,
    title: "شهادة معتمدة",
    description: "احصل على شهادة إتمام معتمدة تضيفها لسيرتك الذاتية",
    color: "from-accent to-accent-light",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            لماذا تختار <span className="text-gradient">دورتنا؟</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم لك تجربة تعليمية متكاملة تجمع بين النظرية والتطبيق العملي
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-slide-up bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} p-1`}>
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <img src={feature.icon} alt={feature.title} className="w-14 h-14" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "دعم مباشر", value: "24/7" },
            { label: "مدة الوصول", value: "غير محدودة" },
            { label: "لغة الدورة", value: "عربي كامل" },
            { label: "المستوى", value: "من الصفر" },
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{item.value}</div>
              <div className="text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
