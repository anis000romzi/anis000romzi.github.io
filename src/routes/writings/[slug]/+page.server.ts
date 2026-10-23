import { error } from '@sveltejs/kit';
import MarkdownIt from 'markdown-it';
import { writings } from '$lib/content/writings/writings';
import type { EntryGenerator, PageServerLoad } from './$types';

// Writings are trusted, repository-authored content; preserve embedded HTML.
const markdown = new MarkdownIt({ html: true });

export const entries: EntryGenerator = () => writings.map(({ slug }) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
	const writing = writings.find((writing) => writing.slug === params.slug);
	if (!writing) error(404, 'Writing not found');
	return { writing, html: markdown.render(writing.body) };
};
