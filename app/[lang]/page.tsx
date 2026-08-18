import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { getContent, toLang } from "@/content";

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = toLang((await params).lang);
  const content = getContent(lang);

  return (
    <>
      <Hero content={content} />
      <Services content={content} />
      <Work content={content} />
      <Experience content={content} />
      <HowIWork content={content} />
      <Contact content={content} />
    </>
  );
}
