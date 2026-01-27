import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MessageCircle,
  MapPin,
  ExternalLink
} from 'lucide-react';

export function ContactSection() {
  const contactInfo = {
    email: 'rohan.patel@example.com',
    linkedin: 'https://linkedin.com/in/rohanpatel',
    github: 'https://github.com/rohan',
    location: 'Gujarat, India'
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: contactInfo.linkedin,
      color: 'hover:text-[#0077b5] hover:border-[#0077b5]',
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: contactInfo.github,
      color: 'hover:text-white hover:border-gray-400',
      description: 'View my code'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${contactInfo.email}`,
      color: 'hover:text-primary hover:border-primary',
      description: 'Send me an email'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Contact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and projects
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Get in Touch Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Get In Touch</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you have a question, want to start a project, or simply want to connect,
                feel free to reach out. I'm open to discussing new opportunities, creative ideas,
                or potential collaborations.
              </p>

              {/* Email Display */}
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground mb-2">Email me at</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg font-semibold text-primary hover:underline break-all focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <p className="text-sm">{contactInfo.location}</p>
              </div>

              {/* Primary CTA with Enhanced Effects */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="w-full mt-6 group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  asChild
                >
                  <a href={`mailto:${contactInfo.email}`}>
                    {/* Ripple Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" aria-hidden="true" />

                    {/* Button Content */}
                    <span className="relative flex items-center justify-center">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                      </motion.div>
                      Send Me an Email
                      <motion.div
                        className="ml-2"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Send className="w-4 h-4" aria-hidden="true" />
                      </motion.div>
                    </span>
                  </a>
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          {/* Right Column - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Connect With Me</h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Find me on social media and platforms where I share my work and knowledge
              </p>

              {/* Enhanced Social Links Grid */}
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${link.name} profile (opens in new tab)`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`relative block p-4 border rounded-lg overflow-hidden transition-all duration-300 ${link.color} hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-primary rounded`}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" aria-hidden="true" />

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${link.color.replace('hover:text-', 'from-').replace(' hover:border-', ' to-')} blur-xl`} aria-hidden="true" />

                    <div className="relative flex items-center gap-4">
                      <motion.div
                        className="p-2 bg-background rounded-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <link.icon className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="font-semibold group-hover:text-primary transition-colors duration-300">{link.name}</p>
                        <p className="text-xs text-muted-foreground">{link.description}</p>
                      </div>
                      <motion.div
                        className="p-2 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        aria-hidden="true"
                      >
                        <Send className="w-4 h-4 text-primary" />
                      </motion.div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-center text-muted-foreground">
                  💡 Quick response guaranteed within 24 hours
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-background">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm available for freelance work and full-time opportunities.
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded" asChild>
                  <a href={`mailto:${contactInfo.email}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" aria-hidden="true" />
                    <span className="relative flex items-center">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                      </motion.div>
                      Hire Me
                      <Send className="w-4 h-4 ml-2 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </span>
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded" asChild>
                  <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="View my GitHub profile (opens in new tab)">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" aria-hidden="true" />
                    <span className="relative flex items-center">
                      <motion.div
                        whileHover={{ rotate: [0, 360] }}
                        transition={{ duration: 0.6 }}
                      >
                        <Github className="w-5 h-5 mr-2" aria-hidden="true" />
                      </motion.div>
                      View My Work
                      <ExternalLink className="w-4 h-4 ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
