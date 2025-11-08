import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Target, 
  Code2,
  ShoppingBag,
  Smartphone,
  Monitor,
  Layers,
  Sparkles,
  Square,
  Shield,
  Box,
  TrendingUp,
  Phone
} from "lucide-react";

const Services = () => {
  const websiteServices = [
    { 
      icon: ShoppingBag, 
      title: "E-Commerce Websites",
      description: "Powerful online stores with secure payment gateways, inventory management, and seamless checkout experience",
      category: "e-commerce"
    },
    { 
      icon: FileText, 
      title: "Educational Platforms",
      description: "Interactive learning management systems, course portals, and student engagement platforms",
      category: "education"
    },
    { 
      icon: Shield, 
      title: "Healthcare Solutions",
      description: "HIPAA-compliant patient portals, appointment systems, and telemedicine platforms",
      category: "health"
    },
    { 
      icon: Square, 
      title: "Custom Business Websites",
      description: "Tailored web solutions for your unique business needs with scalable architecture",
      category: "custom"
    }
    ,{ 
      icon: FileText, 
      title: "AI & Automation",
      description: "Integrating intelligent systems that enhance decision-making and efficiency",
      category: "AI-automation"
    } ,{ 
      icon: Square, 
      title: "Cloud Transformation ",
      description: "Secure and scalable cloud migration and modernization.",
      category: "Cloud-Transformation "
    } ,{ 
      icon: ShoppingBag, 
      title: "Product Engineering ",
      description: "End-to-end SaaS and digital product development services.",
      category: "Product-Engineering "
    },{ 
      icon: FileText, 
      title: "Digital Consulting ",
      description: "Guiding enterprises through digital transformation and modernization.",
      category: "Digital-Consulting "
    }
  ];

  const appServices = [
    { 
      icon: Smartphone, 
      title: "Android Apps",
      description: "Native Android applications optimized for performance and user experience",
      category: "android"
    },
    { 
      icon: Monitor, 
      title: "iOS Apps",
      description: "Beautiful iOS applications following Apple's design guidelines and best practices",
      category: "ios"
    },
    { 
      icon: ShoppingBag, 
      title: "E-Commerce Apps",
      description: "Mobile shopping experiences with push notifications and in-app payments",
      category: "e-commerce-app"
    },
    { 
      icon: FileText, 
      title: "Educational Apps",
      description: "Mobile learning platforms with offline capabilities and progress tracking",
      category: "education-app"
    },
    { 
      icon: Shield, 
      title: "Healthcare Apps",
      description: "Secure health tracking, appointment booking, and telemedicine mobile solutions",
      category: "health-app"
    },
    { 
      icon: Layers, 
      title: "Custom Mobile Apps",
      description: "Cross-platform apps built with React Native or Flutter for your specific requirements",
      category: "custom-app"
    }
  ];

  const getWhatsAppLink = (category: string) => {
    const phoneNumber = "916026072045"; // Using first number without + and spaces
    const messages: Record<string, string> = {
      "e-commerce": "Hi! I'm interested in developing an E-Commerce website. Can you provide more details?",
      "education": "Hi! I'm interested in developing an Educational platform. Can you provide more details?",
      "health": "Hi! I'm interested in developing a Healthcare solution. Can you provide more details?",
      "custom": "Hi! I'm interested in developing a custom website for my business. Can you provide more details?",
      "android": "Hi! I'm interested in developing an Android app. Can you provide more details?",
      "ios": "Hi! I'm interested in developing an iOS app. Can you provide more details?",
      "e-commerce-app": "Hi! I'm interested in developing an E-Commerce mobile app. Can you provide more details?",
      "education-app": "Hi! I'm interested in developing an Educational mobile app. Can you provide more details?",
      "health-app": "Hi! I'm interested in developing a Healthcare mobile app. Can you provide more details?",
      "custom-app": "Hi! I'm interested in developing a custom mobile app. Can you provide more details?"
    };
    const message = encodeURIComponent(messages[category] || "Hi! I'm interested in your services.");
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const ServiceCard = ({ service }: { service: { icon: any; title: string; description: string; category: string } }) => {
    const Icon = service.icon;
    return (
      <div className="group h-full">
        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-all">
            <Icon className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-lg font-semibold mb-3 text-foreground">{service.title}</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">{service.description}</p>
          <a 
            href={getWhatsAppLink(service.category)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-background hover:bg-accent/90 px-6 py-3 rounded-lg font-medium transition-all group-hover:shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            Get Started
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      

      {/* Website Development Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Web Development</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Website Development</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional, responsive websites tailored to your industry. Built with cutting-edge technology for optimal performance and user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {websiteServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Development Services */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Mobile Development</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Mobile App Development</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Native and cross-platform mobile applications for Android and iOS. Engaging experiences that keep your users connected on-the-go.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose GeminiForge?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine technical excellence with creative innovation to deliver exceptional digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
              <p className="text-muted-foreground">Specialized experience in E-Commerce, Education, Healthcare, and custom business solutions</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Full-Stack Development</h3>
              <p className="text-muted-foreground">End-to-end development from design to deployment and ongoing maintenance</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
              <p className="text-muted-foreground">Built to grow with your business using modern, scalable architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Box className="w-10 h-10 text-background" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Let's discuss your project and create a digital solution that drives real results. Our team is ready to bring your vision to life with cutting-edge technology and creative expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/916026072045?text=Hi!%20I%27m%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-background hover:bg-accent/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Sparkles className="w-5 h-5" />
                Start Your Project
              </a>
              <div className="flex gap-3">
                <a
                  href="tel:+916026072045"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 6026072045
                </a>
                <span className="text-muted-foreground">or</span>
                <a
                  href="tel:+919957703382"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 9957703382
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;