import shophub from './assets/shophub.png'
import couponManagement from './assets/coupon-management.png'

export const profile = {
  name: 'Catlin Jane',
  initials: 'CJ',
  role: 'Full Stack Developer',
  roles: ['Full Stack Developer', 'API Architect', 'React Engineer', 'Clean Code Advocate'],
  tagline:
    'I design and build fast, scalable web products end to end, from database schemas and APIs to polished, accessible interfaces.',
  location: 'Remote · Worldwide',
  email: 'hello@catlinjane.dev',
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'X', href: 'https://x.com/' },
  ],
}

export const about = {
  paragraphs: [
    "I'm a full stack developer who enjoys owning a feature from the first whiteboard sketch to the production deploy. I care about clean boundaries in the backend and clear, usable experiences in the frontend.",
    'My work spans e-commerce storefronts, content-driven marketing sites, technical writing on software architecture, and digital media releases. Whatever the project, I aim for code that is easy to change and products that are easy to love.',
  ],
  stats: [
    { value: '5+', label: 'Years building for the web' },
    { value: '30+', label: 'Projects shipped' },
    { value: '100%', label: 'Remote-ready' },
  ],
}

export const skills = [
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / Sass', 'Tailwind CSS', 'Vite'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL', 'WebSockets', 'Auth / OAuth'],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'SQL', 'Data Modeling'],
  },
  {
    group: 'DevOps & Practices',
    items: ['Docker', 'CI/CD', 'AWS', 'Render', 'Git', 'Clean Architecture', 'Testing', 'SEO'],
  },
]

export const projects = [
  {
    title: 'ShopHub.com',
    category: 'E-commerce · Brand Landing',
    image: shophub,
    description:
      'Brand landing page for the ShopHub.com e-commerce domain: a bold logo hero, partner promotion block, legal and privacy notices, and social follow integration in a lightweight, fast-loading layout.',
    highlights: ['Responsive brand layout', 'Affiliate partner integration', 'Legal & privacy pages'],
    tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    live: 'https://shophub.com',
  },
  {
    title: 'Coupon Code Management',
    category: 'Marketing Site · Content Page',
    image: couponManagement,
    description:
      'Long-form glossary page for a product experience (PXM) platform explaining coupon code management, with a vibrant gradient hero, breadcrumb navigation, a demo-request CTA, and readability-first typography.',
    highlights: ['Gradient hero & sticky nav', 'SEO-optimized content structure', 'Conversion-focused CTA'],
    tags: ['React', 'CMS', 'Responsive UI', 'SEO'],
    live: null,
  },
]

export const work = [
  {
    type: 'spotify',
    title: 'Hmurij Potok',
    category: 'Digital Media · Spotify Release',
    description:
      'A single released on Spotify, streamable right here. Hit play and listen while you scroll.',
    href: 'https://open.spotify.com/album/4M9LAcnc9sMHAiMNbV7Gat',
    embed: 'https://open.spotify.com/embed/album/4M9LAcnc9sMHAiMNbV7Gat?utm_source=generator&theme=0',
  },
  {
    type: 'architecture',
    title: 'Clean Architecture',
    category: 'Technical Writing · algoroq.io',
    description:
      'A concept guide on Clean Architecture: separating entities, use cases, adapters, and frameworks so business rules stay independent, testable, and easy to evolve.',
    href: 'https://algoroq.io/concepts/clean-architecture/',
    layers: ['Frameworks & Drivers', 'Interface Adapters', 'Use Cases', 'Entities'],
  },
]
