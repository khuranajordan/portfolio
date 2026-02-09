import { ProfessionalJourney } from "@/components/professional-journey";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export function AboutSection() {
  const education = [
    {
      degree: "Full Stack Development",
      field: "Professional Training",
      institution: "Masai School",
      location: "Remote",
      year: "2022 - 2023",
      gpa: "Intensive Bootcamp",
    },
    {
      degree: "B.Tech in Computer Science",
      field: "Computer Science & Engineering",
      institution: "Bundelkhand Institute of Engineering & Technology",
      location: "Jhansi, India",
      year: "2018 - 2022",
      gpa: "Bachelor's Degree",
    },
  ];

  const careerSummary = [
    {
      icon: Briefcase,
      title: "Professional Experience",
      items: [
        "3+ years of experience in frontend development",
        "Currently Team Lead – Frontend Systems at Ink In Caps",
        "Specializing in real-time systems, Socket.IO, and high-traffic architecture",
      ],
    },
    {
      icon: GraduationCap,
      title: "Educational Background",
      items: [
        "Full Stack Development from Masai School (2022-2023)",
        "B.Tech in Computer Science from Bundelkhand Institute (2018-2022)",
        "Strong foundation in computer science principles",
      ],
    },
    {
      icon: MapPin,
      title: "Location",
      items: [
        "Based in Mumbai, India",
        "Open to remote opportunities worldwide",
        "Flexible with relocation for the right opportunity",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get To Know Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer dedicated to building exceptional web
            experiences
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-4">Hi, I'm Rohan 👋</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I'm a Team Lead – Frontend Systems Engineer with a passion for
                building real-time systems at scale. I lead teams architecting
                high-traffic applications with Socket.IO, WebSockets, and modern
                frontend infrastructure. Currently serving thousands of
                concurrent users with sub-100ms latency.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                My journey started with intensive training at Masai School,
                followed by rapid progression from Software Engineer to Team
                Lead across three companies. I specialize in real-time
                architecture, performance engineering, and building reliable
                frontend systems that scale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about engineering leadership, technical debt
                reduction, and mentoring teams to deliver exceptional user
                experiences. When I'm not architecting real-time features or
                optimizing performance, I'm contributing to open source and
                sharing knowledge with the developer community.
              </p>
            </Card>
          </motion.div>

          {/* Right Column - Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              {education.map((edu, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-3">
                      {edu.year}
                    </Badge>
                    <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-1">{edu.field}</p>
                    <p className="text-sm text-muted-foreground mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      📍 {edu.location}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      📊 {edu.gpa}
                    </p>
                  </div>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>

        {/* Career Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {careerSummary.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <section.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-bold mb-3">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Professional Journey Timeline */}
        <ProfessionalJourney />
      </div>
    </section>
  );
}
