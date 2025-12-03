"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DATA } from "@/data/resume";

type Project = (typeof DATA.projects)[number];

interface CaseStudy {
  title: string;
  projectTitle: string;
  problem: React.ReactNode;
  solution: React.ReactNode;
  outcome: readonly React.ReactNode[];
}

interface Props {
  caseStudies: readonly CaseStudy[];
  projects: readonly Project[];
}

export function CaseStudyCarousel({ caseStudies, projects }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex(
      (prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length
    );
  };

  // const goToSlide = (slideIndex: number) => {
  //   setDirection(slideIndex > index ? 1 : -1);
  //   setIndex(slideIndex);
  // };

  const variants = {
    enter: (direction: number) => {
      if (direction > 0) {
        // Next slide: Enter from back (scale up)
        return {
          scale: 0.9,
          opacity: 0,
          zIndex: 0,
          x: 0,
          rotate: 0,
        };
      } else {
        // Prev slide: Enter from left (fly in)
        return {
          scale: 1,
          opacity: 0,
          zIndex: 2,
          x: -100,
          rotate: -5,
        };
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    exit: (direction: number) => {
      if (direction > 0) {
        // Next slide: Exit to left (fly out)
        return {
          zIndex: 2,
          x: -100,
          opacity: 0,
          rotate: -5,
        };
      } else {
        // Prev slide: Exit to back (scale down)
        return {
          zIndex: 0,
          scale: 0.9,
          opacity: 0,
          x: 0,
          rotate: 0,
        };
      }
    },
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto space-y-4">
      <div className="flex justify-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border hover:bg-card h-8 w-8"
          onClick={prevSlide}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border hover:bg-card h-8 w-8"
          onClick={nextSlide}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="relative w-full">
        {/* Dynamic background cards for stack effect */}
        {caseStudies.length > 1 && (
          <>
            {Array.from({ length: Math.min(caseStudies.length - 1 - index, 5) })
              .map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full border rounded-xl bg-card/50 -z-10 transition-all duration-300"
                  style={{
                    top: `${(i + 1) * 4}px`,
                    left: `${(i + 1) * 4}px`,
                    transform: `translate(${(i + 1) * 4}px, ${(i + 1) * 4}px)`,
                    zIndex: -10 - i,
                    opacity: 1 - i * 0.15, // Fade out deeper cards slightly
                  }}
                />
              ))
              .reverse()}
          </>
        )}

        <div className="grid grid-cols-1 relative min-h-[300px]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
                rotate: { duration: 0.2 },
              }}
              className="w-full p-6 border rounded-xl bg-background shadow-lg col-start-1 row-start-1"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  {caseStudies[index].title}
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">
                      The Challenge
                    </h4>
                    <div className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {caseStudies[index].problem}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      My Solution
                    </h4>
                    <div className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {caseStudies[index].solution}
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Key Takeaways</h4>
                  <ul className="space-y-2">
                    {caseStudies[index].outcome.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
        {caseStudies.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={cn(
              "w-2 h-2 rounded-full",
              i === index ? "bg-primary" : "bg-muted-foreground/50"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
}
