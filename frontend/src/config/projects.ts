import type { Project } from '../models/types'

export const projects: Project[] = [
  {
    id: 'datarig',
    name: 'ORYXLABS - Datarig360 (UAE)',
    summary: 'A Data-as-a-Service (DaaS) threat intelligence platform for large-scale domain and certificate data. Users can see a dashboard to inspect the data, and can subscribe to feeds of DNS and Certificates data, which are sent to a configured S3 bucket.',
    duration: '6 Months',
    responsibilities: [
      'Led the development of the API.',
      'Owned the development of the scheduler service.',
    ],
    architectureSummary:
      'Python FastAPI as the backend API, a Python scheduler service to replicate data from other services to a single database, and a React frontend.',
    backendFocus: 'API design, ',
    capabilityIds: ['api-design', 'cli-dev', 'automation'],
  },
  {
    id: 'rps',
    name: 'Advania - RPS (Sweden)',
    summary: 'A platform to support the Logistic department of Advania business, of hardware resale.',
    duration: '1 month',
    responsibilities: [
      'Owned the migration from Apache Drill to PostgreSQL, in a project that was being developed for two years.',
      'The migration drastically reduced query run times and simplified development.',
    ],
    architectureSummary: 'Python FastAPI backend API, React frontend, Kafka.',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
  {
    id: 'recommerce',
    name: 'Advania - Recommerce (Sweden)',
    summary: 'A platform to support the Logistic department of Advania business, of hardware resale.',
    duration: '6 months',
    responsibilities: [
      'Helped shape data model.',
      'Worked on the API implementation',
    ],
    architectureSummary: 'Java Spring Boot backend API, React frontend, Kafka.',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
  {
    id: 'neom',
    name: 'NEOM - The Line (Saudi Arabia)',
    summary: 'A platform to review CAD files in 3D representing modules of The Line, the Saudi Arabia megaproject. It allowed to calculate several KPIs regarding organization and comfort.',
    duration: '1.5 years',
    responsibilities: [
      'Helped shape platform architecture and data model.',
      'Worked on the API implementation.',
      'Implemented KPI computations by reading IFC files.',
      'Configured server and CI/CD pipeline.'
    ],
    architectureSummary: 'Python Flask backend API, Celery for background tasks to calculate KPIs, React frontend with Three.js',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
  {
    id: 'bankee',
    name: 'Bankee (Kuwait)',
    summary: 'A mock banking system with a responsive web app for students in Kuwait, to teach them money management and finances.',
    duration: '6 months',
    responsibilities: [
      'Helped shape product requirements with the client.',
      'Led the software development team.',
      'Led the API development.',
    ],
    architectureSummary: 'Python Flask backend API, React frontend, Websockets for real-time updates.',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
  {
    id: 'beacon',
    name: 'Beacon Red - CVA (UAE)',
    summary: 'A virtual assistant for a cybersecurity platform.',
    duration: '1 year',
    responsibilities: [
      'Worked on the frontend and different backend services.',
      'Helped to shape the data model.'
    ],
    architectureSummary: 'Python Flask microservices, React widget, Websockets.',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
  {
    id: 'beacon',
    name: 'Beacon Red - Training Extensions (UAE)',
    summary: 'A platform to help in cybersecurity training.',
    duration: '1 year',
    responsibilities: [
      'Worked on the backend services.',
      'Helped to shape the data model.'
    ],
    architectureSummary: 'Python Flask microservices, React frontend.',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
  {
    id: 'lsi',
    name: 'Labour Services International (USA)',
    summary: 'A US based platform to streamline the complex H2-A visa process, automatically filling pdf documents with form data.',
    duration: '4 months',
    responsibilities: [
      'Joined the project in a difficult stage with a very tight deadline, but led the team to complete it with minimal delay.',
      'Worked on the API and frontend.',
    ],
    architectureSummary: 'Node.js and Express.js for the backend API and React frontend.',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
]
