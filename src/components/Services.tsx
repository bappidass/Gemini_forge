import { Paintbrush, Puzzle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
const services = [
  {
    icon: Paintbrush,
    title: "App Development",
    description:
      "We build modern, high-performance mobile and web applications designed to deliver seamless user experiences. Our team focuses on clean architecture, scalable code, and intuitive interfaces that bring your ideas to life.",
  },
  {
    icon: Puzzle,
    title: "Web Development",
    description:
      "We create fast, secure, and scalable websites tailored to your business goals. From front-end design to full-stack solutions, we use the latest technologies to deliver reliable and high-quality digital products.",
  },
  {
    icon: Zap,
    title: "Custom Software",
    description:
      "We develop custom software solutions built around your exact requirements. Whether automating workflows or creating enterprise-level systems, our team ensures efficiency, performance, and long-term scalability.",
  },
];


const Services = () => {
  const navigate = useNavigate();
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            Transform your brand with our innovative digital solutions that captivate and engage your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" onClick={()=>navigate('/services')} className="w-full border-foreground/20 hover:border-foreground/40">
                     More Details
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
