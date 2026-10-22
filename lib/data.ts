export const profile = {
  name: 'Duong Devid',
  role: 'Backend Software Engineer',
  location: 'Phnom Penh, Cambodia',
  email: 'duongdevid.dev@gmail.com',
  github: 'https://github.com/duongdevid',
  linkedin: 'https://www.linkedin.com/in/duongdevid',
  summary:
    'I design and build secure, high-throughput backend systems for Open Banking, payment processing, and FinTech APIs — from transaction-safe services in Java and NestJS to containerized infrastructure on Linux.',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#contact', label: 'Contact' },
] as const

export const stats = [
  { value: '4+', label: 'Years in backend engineering' },
  { value: '20+', label: 'Production APIs shipped' },
  { value: '99.95%', label: 'Payment service uptime' },
  { value: '1M+', label: 'Transactions processed / month' },
]

export const aboutPoints = [
  {
    title: 'Backend Engineering',
    description:
      'Clean, layered services with domain-driven boundaries, strong typing, and thorough test coverage across Spring Boot and NestJS codebases.',
  },
  {
    title: 'FinTech Systems',
    description:
      'Open Banking consent flows, card management, settlement and reconciliation — built with idempotency, auditability, and regulatory compliance in mind.',
  },
  {
    title: 'API Development',
    description:
      'Contract-first REST APIs with OpenAPI specs, versioning strategies, OAuth 2.0 security, and predictable error models partners can rely on.',
  },
  {
    title: 'Scalability',
    description:
      'Horizontally scalable stateless services, connection pooling, query optimization, caching, and orchestration with Docker Swarm.',
  },
]

export const skillGroups = [
  {
    category: 'Backend',
    skills: ['Java 17', 'Spring Boot', 'Spring Security', 'NestJS', 'TypeScript', 'Node.js', 'JPA / Hibernate', 'REST'],
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Query Optimization', 'Indexing', 'Transactions & Locking', 'Flyway', 'Redis'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'Docker Swarm', 'Linux', 'Nginx', 'GitHub Actions', 'GitLab CI', 'Bash'],
  },
  {
    category: 'Cloud',
    skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'Load Balancing', 'Secrets Management', 'Monitoring'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Postman', 'IntelliJ IDEA', 'Swagger / OpenAPI', 'Grafana', 'Jira'],
  },
]

export const experience = [
  {
    role: 'Backend Developer — Open Banking',
    company: 'Financial Technology Company',
    period: '2023 — Present',
    location: 'Phnom Penh, Cambodia',
    highlights: [
      'Built Open Banking APIs for account information and payment initiation with OAuth 2.0 consent management.',
      'Led the CardConnect V2 enhancement, cutting card-operation latency by ~40% through query and caching improvements.',
      'Designed an append-only transaction logging service powering audits and reconciliation.',
    ],
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker Swarm'],
  },
  {
    role: 'Backend Developer — Payments',
    company: 'Digital Payments Provider',
    period: '2021 — 2023',
    location: 'Phnom Penh, Cambodia',
    highlights: [
      'Developed a payment gateway integrating local banks and wallets behind a unified merchant API.',
      'Implemented idempotency keys, webhook retries with backoff, and signature verification for partners.',
      'Migrated services to Docker and standardized CI pipelines, reducing release time from hours to minutes.',
    ],
    stack: ['NestJS', 'TypeScript', 'MySQL', 'Docker'],
  },
  {
    role: 'Junior Software Engineer',
    company: 'Software Solutions Agency',
    period: '2020 — 2021',
    location: 'Phnom Penh, Cambodia',
    highlights: [
      'Built RESTful services and admin back-offices for enterprise clients.',
      'Wrote integration tests and Postman collections that became the team testing standard.',
    ],
    stack: ['Java', 'Spring', 'MySQL', 'Linux'],
  },
]

export type ProjectCategory = 'Open Banking' | 'Payments' | 'Infrastructure' | 'Observability'

export type Project = {
  title: string
  category: ProjectCategory
  description: string
  stack: string[]
  architecture: string[]
  github: string
  demo: string
}

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'Open Banking',
  'Payments',
  'Infrastructure',
  'Observability',
]

export const projects: Project[] = [
  {
    title: 'Open Banking Platform',
    category: 'Open Banking',
    description:
      'A PSD2-style platform exposing account information and payment initiation APIs to licensed third-party providers with explicit customer consent.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Docker'],
    architecture: [
      'API Gateway with OAuth 2.0 + mTLS client authentication',
      'Consent service managing scopes, expiry, and revocation',
      'Account & payment microservices backed by PostgreSQL',
    ],
    github: 'https://github.com/duongdevid/open-banking-platform',
    demo: 'https://github.com/duongdevid/open-banking-platform#readme',
  },
  {
    title: 'CardConnect V2 Enhancement',
    category: 'Payments',
    description:
      'Re-engineered the card management service: card issuance, activation, limits, and freeze/unfreeze with faster responses and stronger audit trails.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
    architecture: [
      'Modular service layer with versioned v2 REST endpoints',
      'Redis read-through cache for card profile lookups',
      'Optimistic locking to prevent concurrent limit updates',
    ],
    github: 'https://github.com/duongdevid/cardconnect-v2',
    demo: 'https://github.com/duongdevid/cardconnect-v2#readme',
  },
  {
    title: 'Payment Gateway API',
    category: 'Payments',
    description:
      'Unified merchant API that routes payments to multiple bank and wallet providers with idempotent requests and reliable webhooks.',
    stack: ['NestJS', 'TypeScript', 'MySQL', 'Docker'],
    architecture: [
      'Provider adapter pattern for pluggable bank integrations',
      'Idempotency-key middleware and HMAC request signing',
      'Webhook dispatcher with exponential backoff retries',
    ],
    github: 'https://github.com/duongdevid/payment-gateway-api',
    demo: 'https://github.com/duongdevid/payment-gateway-api#readme',
  },
  {
    title: 'Transaction Logging System',
    category: 'Observability',
    description:
      'Append-only, tamper-evident transaction log used for audits, dispute resolution, and daily reconciliation reports.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Grafana'],
    architecture: [
      'Async log ingestion decoupled from the payment hot path',
      'Partitioned PostgreSQL tables by month for fast queries',
      'Hash-chained records to detect tampering',
    ],
    github: 'https://github.com/duongdevid/transaction-logging-system',
    demo: 'https://github.com/duongdevid/transaction-logging-system#readme',
  },
  {
    title: 'Docker Swarm Infrastructure',
    category: 'Infrastructure',
    description:
      'Production container orchestration for FinTech services with rolling deployments, secrets management, and zero-downtime releases.',
    stack: ['Docker', 'Docker Swarm', 'Linux', 'Nginx', 'GitHub Actions'],
    architecture: [
      'Multi-node Swarm cluster with manager quorum',
      'Overlay networks isolating public and internal services',
      'CI pipeline building, scanning, and rolling out images',
    ],
    github: 'https://github.com/duongdevid/docker-swarm-infrastructure',
    demo: 'https://github.com/duongdevid/docker-swarm-infrastructure#readme',
  },
]

export const expertise = [
  {
    title: 'Microservices',
    description: 'Service decomposition by domain, inter-service contracts, resilience patterns, and independent deployments.',
    icon: 'boxes',
  },
  {
    title: 'REST APIs',
    description: 'Contract-first design, OpenAPI documentation, pagination, versioning, and consistent error handling.',
    icon: 'braces',
  },
  {
    title: 'Authentication & Authorization',
    description: 'OAuth 2.0, JWT, mTLS, role- and scope-based access control with Spring Security and NestJS guards.',
    icon: 'shield',
  },
  {
    title: 'Payment Integration',
    description: 'Bank and wallet integrations, idempotency, webhook reliability, reconciliation, and settlement flows.',
    icon: 'card',
  },
  {
    title: 'Containerization',
    description: 'Minimal Docker images, Docker Swarm orchestration, secrets, health checks, and rolling updates.',
    icon: 'container',
  },
  {
    title: 'CI/CD',
    description: 'Automated build, test, and deploy pipelines with GitHub Actions and GitLab CI for safe, frequent releases.',
    icon: 'workflow',
  },
] as const
