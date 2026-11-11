import { Career } from "@/components/career";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        <Hero />
        <Skills />
        <Career />
        <Projects />
        <Contact />
      </main>
      <footer className="border-border border-t py-8 text-center font-mono text-muted text-xs">
        © {profile.name}
      </footer>
    </>
  );
}
