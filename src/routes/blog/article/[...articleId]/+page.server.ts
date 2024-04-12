import { marked } from 'marked';
import fm from 'front-matter';
import type { EntryGenerator, PageServerLoad } from './$types';
import { readFile, readdir } from 'node:fs/promises';

const blogRoute = './blog/';

export const entries: EntryGenerator = async () => {
  const d = await readdir(blogRoute, { recursive: true });
  const markdownFiles = d.filter((f) => f.endsWith('.md'));
  const result = markdownFiles.map((f) => ({
    articleId: f.slice(0, -3)
  }));
  return result;
};

export const load: PageServerLoad = async ({ params }) => {
  const buffer = await readFile(blogRoute + params.articleId + '.md');
  const { attributes, body } = fm<{ title?: string; createdAt?: string }>(buffer.toString());
  const articleHtml = marked.parse(body);
  return {
    attributes,
    articleHtml
  };
};

export const prerender = true;
