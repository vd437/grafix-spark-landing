import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد محمود",
    role: "مصمم جرافيك",
    content: "دورة رائعة غيرت حياتي المهنية بالكامل. الآن أعمل كمصمم مستقل وأحقق دخل ممتاز!",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    name: "سارة العلي",
    role: "طالبة جامعية",
    content: "شرح واضح ومبسط، والمشاريع العملية ساعدتني كثيراً في فهم التصميم بشكل أعمق.",
    rating: 5,
    avatar: "👩‍🎓",
  },
  {
    name: "خالد السعيد",
    role: "رائد أعمال",
    content: "استطعت تصميم هوية بصرية كاملة لمشروعي بنفسي بفضل هذه الدورة الاحترافية.",
    rating: 5,
    avatar: "👨‍💻",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 gradient-soft">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ماذا يقول <span className="text-gradient">طلابنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            انضم لآلاف الطلاب الذين غيروا حياتهم المهنية معنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-slide-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-creative flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-accent text-accent" />
            <span className="font-semibold text-accent-foreground">
              معدل رضا الطلاب 98% | أكثر من 2,500 طالب
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
