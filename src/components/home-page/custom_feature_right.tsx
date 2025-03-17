import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { Compass, Eye, ArrowRight, ChevronRight } from "lucide-react";
import farmerImage from "../../../public/farmer.png"; 

const ModernFeatureRight = () => {
  return (
      <div className="relative grid items-stretch md:grid-cols-2 md:gap-16 py-24 px-8 md:px-16">
        <div className="flex flex-col gap-8 py-8 md:py-12">
          {/* Badge */}
          <div className="inline-flex items-center w-fit px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-500 text-white border border-blue-500">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
            Assistance en Temps Réel
          </div>

          {/* Heading with gradient */}
          <h3 className="!my-0 text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
            Navigation Assistée et Reconnaissance d'Objets
          </h3>

          {/* Description with better typography */}
          <p className=" text-white text-lg leading-relaxed ">
            NavAI transforme la mobilité des personnes malvoyantes grâce à des lunettes intelligentes et une assistance vocale. 
            Notre technologie d'IA vous guide à travers le monde, en reconnaissant les objets et en vous fournissant des informations en temps réel.
          </p>

          {/* Feature list */}
          <div className="grid gap-4 mt-2">
            {['Reconnaissance d\'objets', 'Navigation en temps réel', 'Assistance vocale continue'].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-gray-300">
                <ChevronRight className="h-5 w-5 text-white-500" />
                <span className='text-white'>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons with modern styling */}
          <div className="flex items-center gap-4 mt-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transform hover:scale-105 transition-all outline"
              asChild
            >
              <Link href="/demo">
                <Eye className="mr-2 h-5 w-5" />
                Essayer maintenant
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="ghost"
              className="group text-blue-500"
              asChild
            >
              <Link href="/solutions" className='text-white outline'>
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform text-black" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Image div with modern styling */}
        <div className="relative h-[500px] md:h-auto mt-8 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl z-10" />
          <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl transform md:hover:scale-[1.02] transition-all duration-700">
            <Image
              src={farmerImage}
              alt="Technologie AI pour la navigation des malvoyants"
              className="object-cover object-center rounded-xl"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Floating stats card */}
          <div className="absolute bottom-6 right-6 z-20 bg-white/90 dark:bg-black/90 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-white/20 transform hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                <Compass className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Précision de la navigation</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ModernFeatureRight;
