import React, { JSX } from "react";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Compass, Eye, Headset } from "lucide-react";  // Changed Microphone to Headset

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  gradient: string;
  shadowColor: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Compass className="h-7 w-7" />,
    title: "Navigation Assistée",
    description:
      "Obtenez des instructions vocales en temps réel pour vous aider à vous orienter et à naviguer de manière autonome.",
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
    shadowColor: "group-hover:shadow-blue-500/20",
  },
  {
    icon: <Eye className="h-7 w-7" />,
    title: "Reconnaissance d'Objets",
    description:
      "Les lunettes intelligentes identifient et décrivent les objets dans votre environnement pour vous guider dans votre quotidien.",
    gradient: "from-indigo-500/20 via-indigo-500/10 to-transparent",
    shadowColor: "group-hover:shadow-indigo-500/20",
  },
  {
    icon: <Headset className="h-7 w-7" />,
    title: "Interaction Vocale",
    description:
      "Interagissez avec votre environnement en utilisant des commandes vocales pour recevoir des informations instantanées sur ce qui vous entoure.",
    gradient: "from-teal-500/20 via-teal-500/10 to-transparent",
    shadowColor: "group-hover:shadow-teal-500/20",
  },
];

const Services = () => {
  return (
    <Section className="min-h-screen flex items-center justify-center py-12">
      <div className="not-prose relative px-8 md:px-16">
        <div className="flex flex-col gap-8">
          {/* Title badge */}
          <div className="inline-flex items-center w-fit px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-500 text-white border border-blue-500 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 animate-pulse" />
            Nos Services
          </div>
          
          <h3 className="text-4xl text-white font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 bg-clip-text text-transparent">
            <Balancer >
              Naviguez en toute autonomie, avec assistance
            </Balancer>
          </h3>
          
          <h4 className="text-xl text-white text-gray-600 dark:text-gray-300 mb-8">
            <Balancer>
              Une solution AI pour aider les personnes malvoyantes à se déplacer en toute sécurité
            </Balancer>
          </h4>

          <div className="grid gap-8 md:grid-cols-3">
            {featureText.map(({ icon, title, description, gradient, shadowColor }, index) => (
              <div
                className={`group flex flex-col gap-6 p-6 rounded-xl 
                  bg-white dark:bg-black border border-gray-200 dark:border-gray-800
                  hover:border-transparent dark:hover:border-transparent
                  transition-all duration-500 relative overflow-hidden
                  ${shadowColor} hover:shadow-2xl`}
                key={index}
              >
                {/* Icon div */}
                <div className={`relative z-10 w-14 h-14 rounded-lg flex items-center justify-center
                  ${index === 0 ? 'bg-blue-100 text-blue-500 dark:bg-blue-950/50' : 
                    index === 1 ? 'bg-indigo-100 text-indigo-500 dark:bg-indigo-950/50' : 
                    'bg-teal-100 text-teal-500 dark:bg-teal-950/50'}
                  transform group-hover:scale-110 transition-transform duration-300`}>
                  {icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <h4 className={`text-xl font-semibold
                    ${index === 0 ? 'text-blue-500 dark:text-blue-400' : 
                      index === 1 ? 'text-indigo-500 dark:text-indigo-400' : 
                      'text-teal-500 dark:text-teal-400'}`}>
                    {title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {description}
                  </p>
                </div>
                
                {/* Decorative arrow */}
                <div className={`absolute bottom-4 right-4 w-6 h-6 rounded-full
                  ${index === 0 ? 'bg-blue-500/10' : 
                    index === 1 ? 'bg-indigo-500/10' : 
                    'bg-teal-500/10'}
                  flex items-center justify-center opacity-0 group-hover:opacity-100
                  transform translate-x-4 group-hover:translate-x-0
                  transition-all duration-300`}>
                  <span className="text-lg">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
