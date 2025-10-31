import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Briefcase, 
  User, 
  Mail, 
  Phone, 
  X, 
  Send,
  Building,
  Palette,
  Code2
} from "lucide-react";

const JobCard = ({ job, onApplyClick }) => {
  const Icon = job.icon;
  return (
    <div className="group h-full">
      <div className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-all">
          <Icon className="w-7 h-7 text-accent" />
        </div>
        <h3 className="text-lg font-semibold mb-3 text-foreground">{job.title}</h3>
        <p className="text-sm text-muted-foreground mb-6 flex-grow">{job.description}</p>
        <button 
          onClick={() => onApplyClick(job.title)}
          className="inline-flex items-center justify-center gap-2 bg-accent text-background hover:bg-accent/90 px-6 py-3 rounded-lg font-medium transition-all group-hover:shadow-lg"
        >
          <Send className="w-4 h-4" />
          Apply Now
        </button>
      </div>
    </div>
  );
};

const ApplicationModal = ({ jobTitle, isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-card border border-border rounded-xl p-8 w-full max-w-md m-4 relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-semibold mb-2 text-foreground">Apply for</h2>
        <h3 className="text-lg font-medium text-primary mb-6">{jobTitle}</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="John Doe"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-medium text-muted-foreground mb-1">Phone Number</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="tel"
                name="number"
                id="number"
                required
                value={formData.number}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="+91 12345 67890"
              />
            </div>
          </div>
          
          <button 
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-accent text-background hover:bg-accent/90 px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
          >
            <Send className="w-4 h-4" />
            Send Application
          </button>
        </form>
      </div>
    </div>
  );
};


const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const jobListings = [
    { 
      icon: Code2, 
      title: "Software Development Intern",
      description: "Work on real-world projects, learn from senior developers, and contribute to our codebase using modern technologies."
    },
    { 
      icon: Building, 
      title: "Management Intern",
      description: "Learn the fundamentals of project management, client relations, and team coordination in a fast-paced tech environment."
    },
    { 
      icon: Palette, 
      title: "Designer",
      description: "Create stunning UI/UX designs for our web and mobile applications, working closely with our development team."
    }
  ];

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };


  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedJob("");
  };


  const handleFormSubmit = (formData) => {
    const { name, email, number } = formData;
    
    // Using the phone number from your Services.js file
    const phoneNumber = "916026072045"; 
    
    // Create the message
    const messageLines = [
      "*New Job Application*",
      "-------------------------",
      `*Position:* ${selectedJob}`,
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      `*Number:* ${number}`
    ];
    const message = messageLines.join("\n"); // Use newline for formatting
    
    // Encode the message for a URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Close the modal
    handleModalClose();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
  

      {/* Open Positions Section */}
      <section className="py-20 bg-muted/20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find your fit. We're currently hiring for the following roles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {jobListings.map((job, index) => (
              <JobCard 
                key={index} 
                job={job} 
                onApplyClick={handleApplyClick} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section from your file (optional, but good for consistency) */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We're always looking for talented people. If you believe you'd be a great fit for our team, get in touch and tell us why.
            </p>
            <a 
              href="https://wa.me/916026072045?text=Hi!%20I%27m%20interested%20in%20a%20career%20at%20GeminiForge."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-background hover:bg-accent/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* The Modal itself */}
      <ApplicationModal 
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleFormSubmit}
        jobTitle={selectedJob}
      />
    </div>
  );
};

export default Careers;