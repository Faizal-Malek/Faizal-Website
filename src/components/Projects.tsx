
import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  repo?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
  repo,
  index,
}) => {
  return (
    <FadeIn delay={index * 100} direction={index % 2 === 0 ? "right" : "left"}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg border card-hover group " >
        <div className="aspect-video bg-muted relative overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-white/30 to-gray-100/30">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-4xl font-bold opacity-20">
              {title.substring(0, 2).toUpperCase()}
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-foreground rounded-full p-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:bg-white hover:text-gray-800 hover:shadow-lg"
                aria-label={`View ${title} live`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-foreground rounded-full p-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 hover:bg-white hover:text-gray-800 hover:shadow-lg"
                aria-label={`View ${title} repository`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Tourist Guide Application",
      description:
        "A mobile app leveraging Google Maps API to provide intuitive navigation with features like landmark history and favorites.",
      image: "/asset/tourist-guide.png",
      tags: ["Java", "Android", "Google Maps API", "Firebase"],
      link: "#",
      repo: "#",
    },
    {
      title: "Sah Cut & Edge Website",
      description:
        "Dynamic website showcasing company products, services, and portfolio with integrated contact management system.",
      image: "/asset/web-app.png",
      tags: ["PHP", "JavaScript", "Firebase", "Responsive Design"],
      link: "#",
      
    },
    {
      title: "Image Generator Tool",
      description:
        "Tool for design teams to generate and manipulate images, improving design workflows and efficiency.",
      image: "/asset/image-generator.png",
      tags: ["Python", ],
      link: "#",
      repo: "#",
    },
    {
      title: "Client Management Portal",
      description:
        "Comprehensive web application for client interactions and management with user authentication and data tracking.",
      image: "/asset/client-portal.png",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
      link: "#",
      
    },
  ];

  return (
    <Section id="projects" className="">
    <div className="">
          <SectionTitle subtitle="MY WORK">Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
          ))}
          </div>

          <FadeIn className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
          These projects showcase my skills and experience in developing real-world applications using various technologies
          </p>
          </FadeIn>
      </div>
    </Section>
  );
};

export default Projects;
