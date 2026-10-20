export const categories = ['Essay', 'Engineering', 'Personal'] as const;
export type Category = (typeof categories)[number];

export interface Writing {
	slug: string;
	title: string;
	date: string; // ISO string, e.g. 2026-09-12
	category: Category;
	excerpt: string;
	body: string;
}

const modules = import.meta.glob<string>('/src/lib/content/writings/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!match) return { data: {}, body: raw };

	const data: Record<string, string> = {};
	for (const line of match[1].split(/\r?\n/)) {
		const i = line.indexOf(':');
		if (i === -1) continue;
		const key = line.slice(0, i).trim();
		const value = line
			.slice(i + 1)
			.trim()
			.replace(/^["']|["']$/g, ''); // strip optional quotes
		if (key) data[key] = value;
	}
	return { data, body: match[2] };
}

function isCategory(value: string | undefined): value is Category {
	return (categories as readonly string[]).includes(value ?? '');
}

export const writings: Writing[] = Object.entries(modules)
	.map(([path, raw]) => {
		const { data, body } = parseFrontmatter(raw);
		const slug = path.split('/').pop()!.replace(/\.md$/, '');

		return {
			slug,
			title: data.title ?? slug,
			date: data.date ?? '',
			category: isCategory(data.category) ? data.category : 'Essay',
			excerpt: data.excerpt ?? '',
			body
		};
	})
	.sort((a, b) => b.date.localeCompare(a.date)); // newest first
