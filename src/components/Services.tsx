import { Layers, Paintbrush, Palette, Puzzle, Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
const services = [
  {
    icon: Paintbrush,
    title: "App Development",
    description:
      "We build modern, high-performance mobile and web applications with clean architecture, scalable code, and intuitive interfaces that deliver seamless user experiences.",
  },
  {
    icon: Puzzle,
    title: "Web Development",
    description:
      "We deliver fast, secure, and scalable websites tailored to your business needs—using modern technologies to create responsive, visually appealing, and high-performing digital products.",
  },
  {
    icon: Zap,
    title: "Custom Software",
    description:
      "We develop fully customized software solutions designed around your unique requirements—automating workflows, improving efficiency, and supporting long-term scalability.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "We improve your website’s ranking, visibility, and performance using modern SEO techniques—ensuring better traffic, faster load times, and stronger online presence.",
  },
  {
    icon: Layers,
    title: "Integrations",
    description:
      "We connect your systems, apps, and third-party platforms to work seamlessly together—streamlining your workflows and enabling smooth data synchronization.",
  },
  {
    icon: Palette,
    title: "Designs",
    description:
      "We create modern UI/UX designs, brand elements, and visual identities that make your product look stunning and feel intuitive for users.",
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
