import { defineCollection, z } from 'astro:content';

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    abn: z.string().optional(),
    ctaLabel: z.string(),
    ctaUrl: z.string(),
    socialLinks: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })).optional(),
  }),
});

const pages = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      variant: z.string().optional(),
      eyebrow: z.string().optional(),
      title: z.string(),
      intro: z.string(),
      primaryLabel: z.string().optional(),
      primaryUrl: z.string().optional(),
      secondaryLabel: z.string().optional(),
      secondaryUrl: z.string().optional(),
      imageUrl: z.string().optional(),
    }).optional(),
    servicesVariant: z.string().optional(),
    testimonialsVariant: z.string().optional(),
    galleryVariant: z.string().optional(),
    ctaVariant: z.string().optional(),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string().optional(),
    order: z.number().default(99),
  }),
});

const faqs = defineCollection({
  type: 'data',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { settings, pages, services, testimonials, faqs };
