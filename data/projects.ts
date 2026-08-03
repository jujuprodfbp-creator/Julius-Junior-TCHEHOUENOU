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
  {
    id: 'artisan360',
    title: 'Artisan360',
    description: {
      fr: "Plateforme de mise en relation avec des artisans locaux : recherche, réservation et avis. Backend NestJS et frontend Next.js.",
      en: 'Platform for finding and booking local artisans, with reviews. NestJS backend and Next.js frontend.',
    },
    image: '/images/projects/artisan360.svg',
    technologies: ['Next.js', 'React', 'NestJS', 'TypeScript'],
    isOnline: false,
    category: 'fullstack',
  },
  {
    id: 'jusenger',
    title: 'Jusenger',
    description: {
      fr: 'Application de messagerie mobile en temps réel. Monorepo Turborepo : API NestJS + Prisma et application mobile React Native.',
      en: 'Real-time mobile messaging app. Turborepo monorepo: NestJS + Prisma API and React Native mobile app.',
    },
    image: '/images/projects/jusenger.svg',
    technologies: ['React Native', 'NestJS', 'Prisma', 'TypeScript'],
    isOnline: false,
    category: 'fullstack',
  },
  {
    id: 'schoolpay-africa',
    title: 'SchoolPay Africa',
    description: {
      fr: 'Plateforme de paiement des frais scolaires pour l\'Afrique, en monorepo Turborepo (application web et mobile).',
      en: 'School fee payment platform for Africa, built as a Turborepo monorepo (web and mobile apps).',
    },
    image: '/images/projects/schoolpay-africa.svg',
    technologies: ['Next.js', 'React Native', 'TypeScript', 'Turborepo'],
    isOnline: false,
    category: 'fullstack',
  },
  {
    id: 'talentmatch',
    title: 'TalentMatch',
    description: {
      fr: "Plateforme d'opportunités pour jeunes diplômés : stages, emplois et missions freelance. Projet en équipe, spécifications rédigées, développement en cours.",
      en: 'Opportunities platform for young graduates: internships, jobs and freelance gigs. Team project, requirements written, development in progress.',
    },
    image: '/images/projects/talentmatch.svg',
    technologies: [],
    isOnline: false,
    category: 'fullstack',
  },
  {
    id: 'afri-antivirus',
    title: 'AfriAntivirus',
    description: {
      fr: "Maquette d'application antivirus et de protection contre les menaces numériques. Cahier des charges rédigé et interface Next.js prototype.",
      en: 'Prototype antivirus and digital-threat protection app. Requirements document written up with a Next.js interface mockup.',
    },
    image: '/images/projects/afri-antivirus.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    isOnline: false,
    category: 'frontend',
  },
  {
    id: 'afri-crowdfund',
    title: 'AfriCrowdfund',
    description: {
      fr: 'Maquette de plateforme de financement participatif pour projets locaux. Cahier des charges rédigé et interface Next.js prototype.',
      en: 'Prototype crowdfunding platform for local projects. Requirements document written up with a Next.js interface mockup.',
    },
    image: '/images/projects/afri-crowdfund.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    isOnline: false,
    category: 'frontend',
  },
  {
    id: 'afri-freelance',
    title: 'AfriFreelance',
    description: {
      fr: 'Maquette de marketplace freelance mettant en relation clients et prestataires. Cahier des charges rédigé et interface Next.js prototype.',
      en: 'Prototype freelance marketplace connecting clients and service providers. Requirements document written up with a Next.js interface mockup.',
    },
    image: '/images/projects/afri-freelance.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    isOnline: false,
    category: 'frontend',
  },
  {
    id: 'afri-library',
    title: 'AfriLibrary',
    description: {
      fr: "Maquette de bibliothèque numérique pour l'accès aux ressources éducatives. Cahier des charges rédigé et interface Next.js prototype.",
      en: 'Prototype digital library for access to educational resources. Requirements document written up with a Next.js interface mockup.',
    },
    image: '/images/projects/afri-library.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    isOnline: false,
    category: 'frontend',
  },
  {
    id: 'budget-watch',
    title: 'BudgetWatch',
    description: {
      fr: 'Maquette de suivi budgétaire avec cartographie interactive (Leaflet) pour visualiser des dépenses géolocalisées. Cahier des charges rédigé et interface Next.js prototype.',
      en: 'Prototype budget-tracking app with an interactive map (Leaflet) to visualize geolocated spending. Requirements document written up with a Next.js interface mockup.',
    },
    image: '/images/projects/budget-watch.svg',
    technologies: ['Next.js', 'React', 'Leaflet', 'TypeScript'],
    isOnline: false,
    category: 'frontend',
  },
  {
    id: 'clean-city',
    title: 'CleanCity',
    description: {
      fr: 'Maquette d\'application de signalement de dépôts sauvages et de propreté urbaine. Cahier des charges rédigé et interface Next.js prototype.',
      en: 'Prototype app for reporting illegal dumping and urban cleanliness issues. Requirements document written up with a Next.js interface mockup.',
    },
    image: '/images/projects/clean-city.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    isOnline: false,
    category: 'frontend',
  },
  {
    id: 'health-map',
    title: 'HealthMap',
    description: {
      fr: 'Maquette de carte interactive des établissements de santé à proximité. Cahier des charges rédigé et interface Next.js prototype.',
      en: 'Prototype interactive map of nearby healthcare facilities. Requirements document written up with a Next.js interface mockup.',
    },
    image: '/images/projects/health-map.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    isOnline: false,
    category: 'frontend',
  },
  {
    id: 'link-shield',
    title: 'LinkShield',
    description: {
      fr: 'Maquette d\'outil de vérification de liens suspects et de protection contre le phishing. Cahier des charges rédigé et interface Next.js prototype.',
      en: 'Prototype tool for checking suspicious links and phishing protection. Requirements document written up with a Next.js interface mockup.',
    },
    image: '/images/projects/link-shield.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    isOnline: false,
    category: 'frontend',
  },
  {
    id: 'market-price',
    title: 'MarketPrice',
    description: {
      fr: 'Maquette de comparateur de prix du marché pour produits agricoles et de consommation. Cahier des charges rédigé et interface Next.js prototype.',
      en: 'Prototype price-comparison app for agricultural and consumer goods. Requirements document written up with a Next.js interface mockup.',
    },
    image: '/images/projects/market-price.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    isOnline: false,
    category: 'frontend',
  },
  {
    id: 'rain-guard',
    title: 'RainGuard',
    description: {
      fr: "Maquette d'application d'alertes météo et de prévisions de pluie. Cahier des charges rédigé et interface Next.js prototype.",
      en: 'Prototype weather-alert app with rain forecasts. Requirements document written up with a Next.js interface mockup.',
    },
    image: '/images/projects/rain-guard.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    isOnline: false,
    category: 'frontend',
  },
  {
    id: 'safe-alert',
    title: 'SafeAlert',
    description: {
      fr: "Maquette d'application d'alerte d'urgence et de sécurité communautaire. Cahier des charges rédigé et interface Next.js prototype.",
      en: 'Prototype emergency and community-safety alert app. Requirements document written up with a Next.js interface mockup.',
    },
    image: '/images/projects/safe-alert.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    isOnline: false,
    category: 'frontend',
  },
  {
    id: 'smart-move',
    title: 'SmartMove',
    description: {
      fr: "Maquette d'application de mobilité et de transport intelligent. Cahier des charges rédigé et interface Next.js prototype.",
      en: 'Prototype smart mobility and transport app. Requirements document written up with a Next.js interface mockup.',
    },
    image: '/images/projects/smart-move.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    isOnline: false,
    category: 'frontend',
  },
];

export const categories = ['all', 'fullstack', 'frontend', 'backend'] as const;
export type Category = (typeof categories)[number];
