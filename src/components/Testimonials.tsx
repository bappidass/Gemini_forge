import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "GeminiForge has been instrumental in transforming our online presence.",
    detail:
      "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    author: "",
    role: "CEO of Chic Boutique",
  },
  {
    quote: "Working with GeminiForge was a breeze.",
    detail:
      "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. GeminiForge is a trusted partner we highly recommend.",
    author: "Sarah Johnson",
    role: "Founder of HungryBites.",
  },

];

const Testimonials = () => {
  return (
    <section id="work" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What our Clients say About us</h2>
          <p className="text-xl text-muted-foreground">
            At GeminiForge, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3 text-accent">{testimonial.quote}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.detail}
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-accent/20 text-accent">
                      {testimonial.author.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Open Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
