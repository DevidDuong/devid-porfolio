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
