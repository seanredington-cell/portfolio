import React from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/markdown";
import ProjectDetailClient from "./client-page";

export function generateStaticParams() {
  return [
    { slug: "getmee" },
    { slug: "registration-crisis" },
    { slug: "bua" },
    { slug: "regulatory-reporting" },
    { slug: "workday-help" },
  ];
}

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const markdownProject = await getProjectBySlug(params.slug);

  if (markdownProject) {
    // Extract only H2 headings from HTML string (main sections only)
    const h2Regex = /<h2 id="(section-\d+)">(.*?)<\/h2>/g;
    const headings: Array<{ id: string; text: string; level: number }> = [];
    let match;
    while ((match = h2Regex.exec(markdownProject.content)) !== null) {
      headings.push({
        id: match[1],
        text: match[2].replace(/<[^>]*>/g, ''),
        level: 2,
      });
    }

    // Calculate read time (avg 230 wpm, strip HTML tags)
    const plainText = markdownProject.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
    const wordCount = plainText.trim().split(' ').filter(Boolean).length;
    const readTime = Math.max(1, Math.round(wordCount / 230));

    return <ProjectDetailClient params={params} markdownContent={markdownProject.content} frontMatter={markdownProject} headings={headings} readTime={readTime} />;
  }

  notFound();
}
