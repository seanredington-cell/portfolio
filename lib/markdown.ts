import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function getProjectBySlug(slug: string) {
  // Try index.md first (for folders), then slug.md (for files)
  const folderPath = path.join(projectsDirectory, slug, 'index.md');
  const filePath = path.join(projectsDirectory, `${slug}.md`);

  let fullPath;
  if (fs.existsSync(folderPath)) {
    fullPath = folderPath;
  } else if (fs.existsSync(filePath)) {
    fullPath = filePath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Process markdown content to HTML
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  let contentHtml = processedContent.toString();

  // Add IDs to H2 headings in the HTML
  let h2Index = 0;
  contentHtml = contentHtml.replace(/<h2>/g, () => {
    const id = `section-${h2Index}`;
    h2Index++;
    return `<h2 id="${id}">`;
  });

  // Add lazy loading + async decode to every image — baked in at build time
  // so it's present before any JS runs, preventing simultaneous decode on fast scroll
  contentHtml = contentHtml.replace(
    /<img(?![^>]*loading=)([^>]*?)>/g,
    '<img loading="lazy" decoding="async"$1>'
  );


  // Add class to specific images to remove styling
  contentHtml = contentHtml.replace(
    /<img src="\/projects\/bua\/competitor-analysis\.png"/g,
    '<img class="no-shadow" src="/projects/bua/competitor-analysis.png"'
  );

  return {
    slug,
    content: contentHtml,
    ...data,
  };
}

export function getAllProjectSlugs() {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}
