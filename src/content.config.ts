import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional()
  })
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string().optional(),
    order: z.number().default(99)
  })
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(99)
  })
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pages' }),
  schema: z.object({
    hero: z.object({
      variant: z.enum(['simple', 'split-media', 'centered', 'service-led', 'image-full']).default('simple'),
      mediaPosition: z.enum(['left', 'right']).default('right'),
      eyebrow: z.string().optional(),
      title: z.string(),
      intro: z.string(),
      primaryLabel: z.string().optional(),
      primaryUrl: z.string().optional(),
      secondaryLabel: z.string().optional(),
      secondaryUrl: z.string().optional(),
      mediaLabel: z.string().optional(),
      mediaTitle: z.string().optional(),
      mediaText: z.string().optional(),
      highlights: z.array(z.string()).default([]),
      imageUrl: z.string().optional()
    }),
    servicesVariant: z.enum(['grid', 'list', 'featured-first', 'icon-grid']).default('grid'),
    testimonialsVariant: z.enum(['grid', 'stacked', 'carousel']).default('grid'),
    galleryVariant: z.enum(['grid', 'feature-left', 'feature-right', 'portfolio', 'before-after']).default('grid'),
    ctaVariant: z.enum(['band', 'split', 'inline']).default('band'),
    gallery: z.array(z.object({
      title: z.string(),
      description: z.string().optional(),
      imageUrl: z.string()
    })).optional()
  })
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/settings' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
    email: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    abn: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaUrl: z.string().optional(),
    socialLinks: z.array(
      z.object({
        label: z.string(),
        url: z.string()
      })
    ).default([])
  })
});

export const collections = {
  services,
  testimonials,
  faqs,
  pages,
  settings
};
