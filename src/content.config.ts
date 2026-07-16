import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writeups = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/writeups' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		category: z.string().default('Lab'),
		difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']).default('Intermediate'),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { writeups };
