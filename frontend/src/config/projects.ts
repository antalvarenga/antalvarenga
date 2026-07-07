import type { Project } from '../models/types'

export const projects: Project[] = [
  {
    id: 'datarig',
    name: 'ORYXLABS - Datarig360 (UAE)',
    summary:
      'A Data-as-a-Service (DaaS) threat intelligence platform for large-scale domain and certificate data. Users can see a dashboard to inspect the data, and can subscribe to feeds of DNS and Certificates data, which are sent to a configured S3 bucket.',
    duration: '6 Months',
    responsibilities: [
      'Worked with the client to refine product requirements and architecture.',
      'Led backend API development.',
      'Designed scheduler service synchronizing DNS and certificate datasets',
      'Configured Kubernetes helm charts and manifests and used ArgoCD for deployments.',
    ],
    architectureSummary: 'Python, FastAPI, React, PostgreSQL, Docker, Kubernetes, ArgoCD.',
    backendFocus: 'API design, ',
    capabilityIds: ['api-design', 'cli-dev', 'automation'],
  },
  {
    id: 'rps',
    name: 'Advania - RPS (Sweden)',
    summary:
      'A platform to support the Logistic department of Advania business, of hardware resale.',
    duration: '1 month',
    responsibilities: [
      'Tasked to migrate from Apache Drill to PostgreSQL, in a brownfield project.',
      'The migration drastically reduced query run times and simplified development.',
    ],
    architectureSummary: 'Python, FastAPI, React, PostgreSQL, Kafka, Docker, Azure',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
  {
    id: 'recommerce',
    name: 'Advania - Recommerce (Sweden)',
    summary:
      'A platform to support the Logistic department of Advania business, of hardware resale.',
    duration: '6 months',
    responsibilities: [
      "Contributed to the design of the platform's data model.",
      'Designed and implemented REST APIs following best practices for maintainability and performance.',
    ],
    architectureSummary: 'Java, Spring Boot, React, PostgreSQL, Kafka, Docker, Azure.',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
  {
    id: 'neom',
    name: 'NEOM - The Line (Saudi Arabia)',
    summary:
      "A platform for reviewing 3D CAD models of modular components for The Line, NEOM's flagship megaproject in Saudi Arabia. The platform enabled users to visualize models and calculate KPIs related to planning, organization, and occupant comfort.",
    duration: '1.5 years',
    responsibilities: [
      "Contributed to the design of the platform's data model and architecture.",
      'Designed and implemented REST APIs following best practices for maintainability and performance.',
      'Implemented asynchronous background jobs with Celery to compute KPIs — including views, sunlight exposure, and distances — by analyzing IFC/CAD models.',
      'Configured application servers and implemented CI/CD pipelines to automate deployment.',
    ],
    architectureSummary: 'Python, Flask, React, PostgreSQL, Docker, Linode',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
  {
    id: 'bankee',
    name: 'Bankee (Kuwait)',
    summary:
      'A responsive web platform that simulated a banking system for schools in Kuwait, helping students develop financial literacy and money management skills.',
    duration: '6 months',
    responsibilities: [
      "Collaborated directly with the client to define and refine product requirements, including an initial week of discovery in person in the client's office.",
      "Led the software development team, coordinating delivery and technical decisions, including the platform's architecture and data model.",
      'Led the design and development of the backend API.',
    ],
    architectureSummary: 'Python, Flask, React, Websockets, Planetscale, MySQL, Docker, Linode.',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
  {
    id: 'beacon',
    name: 'Beacon Red - CVA (UAE)',
    summary: 'A virtual assistant for a cybersecurity platform.',
    duration: '1 year',
    responsibilities: [
      'Collaborated directly with the client to refine product requirements',
      'Worked as a Full-stack developer, contributing to the development of different backend services and the frontend.',
      "Contributed to the design of the platform's data model.",
    ],
    architectureSummary: 'Python, Flask, React, Websockets, PostgreSQL.',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
  {
    id: 'beacon-training',
    name: 'Beacon Red - Training Extensions (UAE)',
    summary: 'A platform to help in cybersecurity training.',
    duration: '1 year',
    responsibilities: [
      'Collaborated directly with the client to refine product requirements',
      'Worked as a Back-end developer, contributing to the development of different backend services.',
      "Contributed to the design of the platform's data model.",
    ],
    architectureSummary: 'Python, Flask, React, PostgreSQL.',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
  {
    id: 'lsi',
    name: 'Labour Services International (USA)',
    summary:
      'A US based platform to streamline the complex H2-A visa process, automatically filling pdf documents with form data.',
    duration: '4 months',
    responsibilities: [
      'Collaborated directly with the client to refine product requirements',
      'Joined the project in a difficult stage with a very tight deadline, but led the team to complete it with minimal delay.',
      'Worked as a Full-stack developer, contributing to the development of the backend service and the frontend.',
    ],
    architectureSummary: 'Node.js, Express.js, React, Planetscale, MySQL.',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
]
