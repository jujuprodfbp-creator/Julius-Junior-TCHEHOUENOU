// data/projects.ts — Données de tous les projets

export interface Project {
  id: string;
  title: string;
  description: { fr: string; en: string };
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isOnline: boolean;
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'salleup',
    title: 'SalleUP',
    description: {
      fr: "Application PWA de gestion des salles, emplois du temps et séances pour l'Université de Parakou. Backend Django REST Framework avec PostgreSQL, JWT et tâches asynchrones Celery ; frontend React 19 + Vite installable en PWA. Tests automatisés et CI sur chaque push.",
      en: "PWA for managing rooms, timetables and class sessions at the University of Parakou. Django REST Framework backend with PostgreSQL, JWT and Celery background tasks; installable React 19 + Vite PWA frontend. Automated tests and CI on every push.",
    },
    image: '/images/projects/salleup.svg',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Django REST Framework', 'PostgreSQL', 'Celery'],
    isOnline: false,
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'stopscam',
    title: 'StopScam',
    description: {
      fr: 'Plateforme anti-arnaque nationale développée en équipe : signalement de liens, numéros et profils frauduleux, historique et statistiques de modération. Backend Django REST Framework (comptes, signalements, commentaires) et frontend React + Vite.',
      en: 'National anti-scam platform built with a team: reporting fraudulent links, phone numbers and profiles, with history and moderation statistics. Django REST Framework backend (accounts, reports, comments) and React + Vite frontend.',
    },
    image: '/images/projects/stopscam.svg',
    technologies: ['React', 'Vite', 'Django REST Framework', 'SQLite'],
    isOnline: false,
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'depannage-express',
    title: 'DépannageExpress',
    description: {
      fr: 'Projet de fin d\'études mettant en relation conducteurs et mécaniciens. Coordination du projet en binôme, analyse des besoins des deux profils utilisateurs, géolocalisation et paiement sécurisé.',
      en: 'Final-year project connecting drivers and mechanics. Paired-project coordination, needs analysis for both user profiles, geolocation and secure payment.',
    },
    image: '/images/projects/depannage-express.svg',
    technologies: ['React Native', 'Django REST Framework', 'PostgreSQL'],
    githubUrl: 'https://github.com/jujuprodfbp-creator',
    isOnline: false,
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'monbudget-plus',
    title: 'MonBudget+',
    description: {
      fr: 'Application de gestion budgétaire développée en équipe. Coordination de la répartition des tâches entre les membres et développement d\'interfaces React connectées à une API Django REST.',
      en: 'Budget management app built as a team. Coordinated task distribution among team members and developed React interfaces connected to a Django REST API.',
    },
    image: '/images/projects/monbudget-plus.svg',
    technologies: ['React', 'Django REST Framework', 'PostgreSQL'],
    githubUrl: 'https://github.com/jujuprodfbp-creator',
    isOnline: false,
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'gestion-stock',
    title: 'App Gestion de Stock',
    description: {
      fr: 'Application web de gestion de stock et d\'inventaire pour PME. Tableau de bord en temps réel, alertes de rupture, historique des mouvements et rapports PDF.',
      en: 'Web-based stock and inventory management app for SMEs. Real-time dashboard, low-stock alerts, movement history and PDF reports.',
    },
    image: '/images/projects/stock-app.svg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/jujuprodfbp-creator',
    liveUrl: 'https://gestion-stock.vercel.app',
    isOnline: true,
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio Personnel v1',
    description: {
      fr: 'Première version de mon portfolio personnel développée avec React et Vite. Design minimaliste avec animations CSS et formulaire de contact fonctionnel.',
      en: 'First version of my personal portfolio built with React and Vite. Minimalist design with CSS animations and working contact form.',
    },
    image: '/images/projects/portfolio-v1.svg',
    technologies: ['React', 'Vite', 'CSS3', 'EmailJS'],
    githubUrl: 'https://github.com/jujuprodfbp-creator',
    liveUrl: 'https://julius-portfolio-v1.vercel.app',
    isOnline: true,
    category: 'frontend',
    featured: true,
  },
  {
    id: 'todo-app',
    title: 'Todo App Full Stack',
    description: {
      fr: 'Application de gestion de tâches avec authentification JWT, partage de listes, étiquettes colorées et notifications en temps réel via WebSockets.',
      en: 'Task management app with JWT auth, list sharing, colored tags and real-time notifications via WebSockets.',
    },
    image: '/images/projects/todo-app.svg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    githubUrl: 'https://github.com/jujuprodfbp-creator',
    liveUrl: 'https://todo-julius.vercel.app',
    isOnline: false,
    category: 'fullstack',
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: {
      fr: 'Application météo avec prévisions sur 7 jours, géolocalisation, cartes interactives et graphiques de température. Données fournies par OpenWeatherMap.',
      en: '7-day weather forecasts, geolocation, interactive maps and temperature charts. Data powered by OpenWeatherMap.',
    },
    image: '/images/projects/weather-app.svg',
    technologies: ['React', 'TypeScript', 'OpenWeatherMap API', 'Chart.js'],
    githubUrl: 'https://github.com/jujuprodfbp-creator',
    liveUrl: 'https://weather-julius.vercel.app',
    isOnline: true,
    category: 'frontend',
  },
  {
    id: 'api-rest-express',
    title: 'REST API Express',
    description: {
      fr: 'API RESTful complète avec Express.js, documentation Swagger, authentification JWT, rate limiting et tests unitaires Jest. Déployée sur Railway.',
      en: 'Full RESTful API with Express.js, Swagger docs, JWT authentication, rate limiting and Jest unit tests. Deployed on Railway.',
    },
    image: '/images/projects/api-rest.svg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Swagger', 'Jest'],
    githubUrl: 'https://github.com/jujuprodfbp-creator',
    isOnline: false,
    category: 'backend',
  },
  {
    id: 'ecommerce-ui',
    title: 'E-Commerce UI Kit',
    description: {
      fr: 'Interface complète d\'une boutique en ligne : pages produits, panier, checkout, espace compte. Design system cohérent avec Tailwind CSS.',
      en: 'Complete e-commerce store UI: product pages, cart, checkout, account area. Consistent design system with Tailwind CSS.',
    },
    image: '/images/projects/ecommerce.svg',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    githubUrl: 'https://github.com/jujuprodfbp-creator',
    liveUrl: 'https://ecommerce-julius.vercel.app',
    isOnline: true,
    category: 'frontend',
    featured: true,
  },
];

export const categories = ['all', 'fullstack', 'frontend', 'backend'] as const;
export type Category = (typeof categories)[number];
