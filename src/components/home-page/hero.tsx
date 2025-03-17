// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import { AlertTriangle, CloudRain } from "lucide-react";

// Local component imports
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center text-white">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-800 text-blue-200 mb-8">
          Transforming Lives Through AI
        </span>

        <div className="space-y-4">
          <h1 className="bg-gradient-to-br from-blue-400 to-blue-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            See the World Differently
            <br />
            with NavAI
          </h1>
          <p className="mx-auto max-w-[42rem] leading-normal text-gray-300 sm:text-xl sm:leading-8">
            NavAI smart glasses use cutting-edge artificial intelligence to empower the visually impaired. 
            From identifying objects to navigating new environments, experience the freedom to explore the world 
            around you like never before.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transform hover:scale-105 transition-all text-white"
            asChild
          >
            <Link href="/features">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Learn About NavAI
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-500 hover:bg-blue-800 transform hover:scale-105 transition-all text-blue-200"
            asChild
          >
            <Link href="/contact">
              <CloudRain className="mr-2 h-5 w-5" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

