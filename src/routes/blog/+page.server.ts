import fm from 'front-matter';
import type { PageServerLoad } from './$types';
import { readdir, readFile } from 'node:fs/promises';

const blogRoute = './blog/';

export const load: PageServerLoad = async () => {
  const d = await readdir(blogRoute, { recursive: true });
  const markdownFiles = d.filter((f) => f.endsWith('.md'));
  const result = await Promise.all(
    markdownFiles.map(async (f) => {
      const buffer = await readFile(blogRoute + f);
      const { attributes } = fm<{ title?: string; createdAt?: string }>(buffer.toString());
      return {
        articleId: f.slice(0, -3),
        attributes
      };
    })
  );
  return {
    // sort newest to oldest
    articles: result.toSorted((a, b) =>
      new Date(a.attributes?.createdAt ?? 0).toISOString() <
      new Date(b.attributes?.createdAt ?? 0).toISOString()
        ? 1
        : -1
    )
  };
};

export const prerender = true;
