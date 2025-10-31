import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Layers,       // For the hero badge
  SearchCheck,  // 01 Discovery
  FileText,     // 02 Planning
  Palette,      // 03 Design
  Code2,        // 04 Development
  ClipboardCheck, // 05 Testing
  Rocket,       // 06 Deployment
  LifeBuoy,     // 07 Support
  TrendingUp,   // 08 Improvement
  Sparkles,
  Box,
  Phone
} from "lucide-react";

// Array containing your 8 process steps
const processSteps = [
  { 
    icon: SearchCheck, 
    number: "01", 
    title: "Discovery",
    description: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy."
  },
  { 
    icon: FileText, 
    number: "02", 
    title: "Planning and Strategy",
    description: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision."
  },
  { 
    icon: Palette, 
    number: "03", 
    title: "Design",
    description: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics."
  },
  { 
    icon: Code2, 
    number: "04", 
    title: "Development",
    description: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products."
  },
  { 
    icon: ClipboardCheck, 
    number: "05", 
    title: "Testing and Quality Assurance",
    description: "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks."
  },
  { 
    icon: Rocket, 
    number: "06", 
    title: "Deployment and Launch",
    description: "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment."
  },
  { 
    icon: LifeBuoy, 
    number: "07", 
    title: "Post-Launch Support",
    description: "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally."
  },
  { 
    icon: TrendingUp, 
    number: "08", 
    title: "Continuous Improvement",
    description: "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth."
  }
];

// Card component for each process step
const ProcessStepCard = ({ step }) => {
  const Icon = step.icon;
  return (
    <div className="group bg-card border border-border rounded-xl p-6 h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl">
      {/* Big, faded number in the background */}
      <span className="absolute -top-4 -right-4 text-9xl font-bold text-muted-foreground/5 group-hover:text-primary/10 transition-all duration-300 z-0">
        {step.number}
      </span>
      
      {/* Icon */}
      <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-all">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      
      {/* Content */}
      <h3 className="relative z-10 text-lg font-semibold mb-3 text-foreground">{step.title}</h3>
      <p className="relative z-10 text-sm text-muted-foreground flex-grow">{step.description}</p>
    </div>
  );
};

const Process = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">How We Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At GeminiForge, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStepCard key={index} step={step} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section (Copied from your Services.js for consistency) */}
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

export default Process;