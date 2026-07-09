"use client";

import { useEffect } from "react";
import { syncSectionFromHash, useSection } from "@/lib/section-store";
import { Hero } from "./sections/hero";
import { ProjectsSection } from "./sections/projects-section";
import { AboutSection } from "./sections/about-section";
import { ContactSection } from "./sections/contact-section";

export function SectionPanels() {
  const active = useSection();

  useEffect(() => {
    window.addEventListener("hashchange", syncSectionFromHash);
    return () => window.removeEventListener("hashchange", syncSectionFromHash);
  }, []);

  return (
    <>
      <div className="section-panel" hidden={active !== "home"}>
        <Hero />
      </div>
      <div className="section-panel" hidden={active !== "projects"}>
        <ProjectsSection />
      </div>
      <div className="section-panel" hidden={active !== "about"}>
        <AboutSection />
      </div>
      <div className="section-panel" hidden={active !== "contact"}>
        <ContactSection />
      </div>
    </>
  );
}
