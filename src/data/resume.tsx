/* eslint-disable react/no-unescaped-entities */
import { Icons } from "@/components/icons";
import {
  HomeIcon,
  //  NotebookIcon
} from "lucide-react";

export const DATA = {
  name: "Hasan Afzal",
  initials: "HA",
  url: "https://hasanafzal.dev",
  location: "Lahore, Pakistan",
  description:
    "Senior Software Engineer & Full-Stack Architect. Specialist in modernizing legacy systems, AI integration, and scalable SaaS infrastructure.",
  summary:
    "Senior Software Engineer with 5+ years of experience architecting high-performance SaaS platforms and leading engineering teams. Expert in modernizing legacy systems, implementing AI/LLM solutions, and building scalable cloud infrastructure. Proven track record of reducing operational costs by up to 60% and launching products that acquire thousands of active users.",
  avatarUrl: "/me.png",
  skills: {
    languages: ["Ruby", "Python", "Typescript"],
    frameworks: ["Ruby on Rails", "FastApi", "React", "Next.js", "Node.js"],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "Vector DBs",
    ],
    infrastructure: [
      "Docker",
      "AWS (EC2, RDS, S3, Lambda, VPC)",
      "Nginx",
      "Cloudflare Workers",
      "CI/CD Pipelines",
      "Jenkins",
      "Digital Ocean",
    ],
    ai: [
      "LLM Fine-tuning",
      "RAG Systems",
      "LangChain",
      "Prompt chaining",
      "OpenAI API",
      "AI Agents",
    ],
    tools: [
      "Stripe Connect",
      "Sidekiq",
      "Prisma",
      "Shadcn UI",
      "TailwindCSS",
      "FFmpeg",
      "Sentry",
      "Google Search Console",
      "Segment Analytics",
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hasan.devpreneur@gmail.com",
    tel: "+923026255627",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hasan-devpreneur",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hasan-devpreneur",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hasanDevpreneur",
        icon: Icons.x,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:hasan.devpreneur@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "3Ssolutions",
      badges: [],
      href: "https://3ssolutions.com",
      location: "Remote",
      title: "Team Lead & Senior Software Engineer",
      logoUrl: "/3s.webp",
      start: "April 2022",
      end: "Present",
      description: (
        <>
          As the Technical Lead, I architected and executed modernization
          strategies for multiple SaaS platforms. This involved leading a
          full-stack team of <strong>10+ engineers</strong> through complex,
          multi-quarter migrations and high-scale optimizations. For the
          <strong>Piqosity</strong> platform, I owned the end-to-end strategy to
          migrate from a costly, high-latency Neo4j database to a performant
          PostgreSQL architecture, which is a high-risk endeavor with a
          significant industry failure rate. The solution included designing a
          dynamic assessment engine, implementing a repository pattern to
          decouple business logic, and orchestrating a zero-downtime cutover.
          The result was a
          <strong> 60% reduction in monthly infrastructure costs</strong> (from
          $1,000 to $400) and a performance improvement from 8-15s to 1-2s page
          loads. For <strong>Upcoming Events</strong>, I architected the system
          to handle unpredictable traffic surges of{" "}
          <strong>2+ million monthly users</strong> by implementing
          multi-layered caching (Redis, CloudFront CDN) and a robust,
          multi-provider payment orchestration layer (Stripe, Apple Pay,
          PayPal). I also led the integration of AI capabilities for products
          like <strong>Evyai</strong> and <strong>Elftapes</strong>,
          establishing architectural patterns for RAG systems and cross-platform
          media pipelines.
        </>
      ),
    },
    {
      company: "Southville Solutions",
      href: "https://southvillesol.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/southville.png",
      start: "July 2021",
      end: "April 2023",
      description: (
        <>
          I engineered scalable backend services and{" "}
          <strong>microservices</strong> for enterprise B2B applications,
          focusing on domains requiring high integrity, such as fintech and HR.
          I developed core financial infrastructure for{" "}
          <strong>QuickCard</strong>, implementing secure checkout and batch
          settlement logic. For the <strong>Etyme</strong> workforce management
          platform, I built real-time features and complex multi-state
          compliance workflows. I contributed to the{" "}
          <strong>microservices-based architecture</strong> for the{" "}
          <strong>Fazier</strong> community platform, collaborating with product
          teams to translate business requirements into robust technical
          solutions. A key part of my role involved fostering team growth; I
          provided hands-on mentorship and{" "}
          <strong>training for 3 interns</strong>, guiding them on development
          workflows, system design principles, and coding best practices.
        </>
      ),
    },
    {
      company: "TeachCreatix",
      href: "teachcreatix.svg",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/teachcreatix.svg",
      start: "January 2021",
      end: "July 2021",
      description: (
        <>
          I contributed to full-stack feature development for educational
          technology products, working with <strong>React</strong> on the
          frontend and <strong>Ruby on Rails</strong> on the backend. I
          collaborated within an agile team environment, participating in daily
          stand-ups, sprint planning, and code reviews to deliver user-facing
          features and maintain application functionality. This role provided
          foundational experience in RESTful API integration, database
          management, and responsive UI development within a production SaaS
          environment.
        </>
      ),
    },
  ],
  education: [
    {
      school: "Comsats University",
      href: "https://www.comsats.edu.pk/",
      degree: "Bachelor's in Software Engineering",
      logoUrl: "/comsats.png",
      start: "2016",
      end: "2020",
    },
    {
      school: "Punjab College",
      href: "https://pgc.edu/",
      degree: "FSC Pre-Engineering",
      logoUrl: "/pgc.png",
      start: "2014",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Upcoming Events",
      href: "https://www.upcomingevents.com/",
      active: true,
      description:
        "Event-discovery and ticketing / registration platform that scales to large traffic and supports organizers in listing events, ticket sales, and event management.",
      technologies: [
        "Ruby on Rails",
        "ECS/Fargate",
        "PostgreSQL",
        "Redis",
        "Docker",
        "CloudFront (CDN)",
        "Payments (Apple Pay, PayPal, Stripe)",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.upcomingevents.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/upcomingevents.png",
      video: "",
    },
    {
      title: "Piqosity",
      href: "https://www.piqosity.com/",
      active: true,
      description:
        "Adaptive online learning & test-prep platform offering personalized math/English lessons and full-length practice tests (ISEE, SAT, ACT) with virtual tutoring, adaptive exercises, and analytics-driven learning paths.",
      technologies: [
        "Ruby on Rails",
        "React",
        "Neo4j (Legacy Migration)",
        "Microservices",
        "Elasticsearch",
        "PostgreSQL",
        "Node.js",
        "AWS EC2",
        "Nginx",
        "Redis",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.piqosity.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/piqosity.png",
      video: "",
    },
    {
      title: "QuickCard",
      href: "https://quickcard.me/",
      active: true,
      description:
        "QuickCard offers a “cashless checkout” / payment-infrastructure solution with blockchain-secure checkout, batch settlement, and support for multiple payment flows (ACH, Push-to-Card, E-Check).",
      technologies: [
        "Ruby on Rails",
        "Microservices",
        "Elasticsearch",
        "PostgreSQL",
        "Blockchain",
        "Stripe Connect (ACH/P2C/E-CHECK)",
        "Redis",
      ],
      links: [
        {
          type: "Website",
          href: "http://quickcard.me/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/quickcard.png",
      video: "",
    },

    {
      title: "Etyme",
      href: "https://www.etyme.com/",
      active: true,
      description:
        "An enterprise B2B staff-agency / workforce-management platform — digitizes HR workflows, multi-state compliance, payroll and staffing operations into unified interface (ideal for agencies and staffing firms).",
      technologies: [
        "Ruby on Rails",
        "MySQL",
        "Real-time Sockets",
        "Multi-State Compliance Logic",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.etyme.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/etyme.png",
      video: "",
    },
    {
      title: "Evyai",
      href: "https://evyai.com/",
      active: true,
      description:
        "EvyAI is an AI-powered content / social-posting assistant (web + extension) helping users generate posts, comments, and manage social-media / networking content.",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "RAG Architecture",
        "LLM Fine-tuning",
        "LangChain",
        "Pinecone",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://evyai.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Extension",
          href: "https://chromewebstore.google.com/detail/evyai/jlbkchlojnnifmpgnlomjjdpbmphlmnh",
          icon: <Icons.chrome className="size-3" />,
        },
      ],
      image: "/evyai.png",
      video: "",
    },
    {
      title: "Draftr",
      href: "https://draftr.com/",
      active: true,
      description:
        "Draftr is a no-code website builder for solopreneurs: a simple platform to launch a personal / content site (blog / link-in-bio / newsletter) aimed at writers, creators, bloggers, schools, and small orgs.",
      technologies: [
        "Next.js",
        "Ruby on Rails",
        "MySQL",
        "LangChain",
        "RAG",
        "Vector DBs",
      ],
      links: [
        {
          type: "Website",
          href: "https://draftr.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/draftr.png",
      video: "",
    },
    {
      title: "Elftapes",
      href: "https://elftapes.com/",
      active: true,
      description:
        "Elftapes is a self-tape / audition-media platform: a “self-tape sidekick” built for actors, helping record, rehearse, and submit audition tapes — using AI tools to simplify the self-tape process.",
      technologies: [
        "Next.js",
        "NodeJs",
        "FFmpeg (Server-side Synthesis)",
        "ElevenLabs API",
        "OpenAI",
        "Tesseract/Textract (OCR)",
        "Cloudinary",
        "CI/CD Pipelines",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://elftapes.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/elftapes.png",
      video: "",
    },
    {
      title: "Fazier",
      href: "http://fazier.com/",
      active: true,
      description:
        "A product launch community platform for indie developers. Built for real-time engagement with nested discussions, voting logic, and a scalable Kubernetes backend.",
      technologies: [
        "Next.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "AWS Lambda",
        "Nginx",
        "EC2",
        "CI/CD Pipelines",
      ],
      links: [
        {
          type: "Website",
          href: "http://fazier.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fazier-web.png",
      video: "",
    },
    // {
    //   title: "Meetrics Ai",
    //   href: "https://chromewebstore.google.com/detail/meetrics-prepare-excellen/nddolgdejkdipjdjmafjliljackcambn?hl=en",
    //   active: true,
    //   description:
    //     "A smart meeting assistant integrated with Google Calendar. Uses can generate context-aware agendas and analytics based on meeting history.",
    //   technologies: [
    //   "Next.js",
    //   "Typescript",
    //   "LangChain",
    //   "RAG",
    //   "Google Calendar API",
    // ],
    //   links: [
    //     {
    //       type: "Extension",
    //       href: "https://chromewebstore.google.com/detail/meetrics-prepare-excellen/nddolgdejkdipjdjmafjliljackcambn?hl=en",
    //       icon: <Icons.chrome className="size-3" />,
    //     },
    //   ],
    //   image: "/meetrics.png",
    //   video: "",
    // },
  ],
  caseStudies: [
    {
      title:
        "The Piqosity Modernization: Incremental Rewrite, 60% Cost Reduction",
      projectTitle: "Piqosity",
      problem: (
        <>
          The legacy platform (built on <strong>Neo4j</strong>) faced critical
          constraints: high infrastructure costs ($1,000/mo) and cripplingly
          slow response times (8s-15s latency). Additionally, the system lacked
          a flexible <strong>assessment engine</strong>; teachers and
          organizations needed a way to create dynamic, custom quizzes with
          version control, which the rigid legacy schema could not support.
        </>
      ),
      solution: (
        <>
          As the <strong>Technical Architect</strong>, I owned the multi-quarter
          rewrite and migration strategy. Beyond the infrastructure overhaul, I
          engineered a core <strong>Dynamic Assessment Engine</strong>:
          <br />
          <br />
          <strong>1. Dynamic Quiz & Form Engine:</strong> Designed a complex
          relational schema allowing organizations to build custom quizzes with
          dynamic question types, logic jumps, and versioning. This engine
          supports millions of student attempts, handling state management for
          in-progress tests and instant auto-grading.
          <br />
          <br />
          <strong>2. Parallel Migration Strategy:</strong> Orchestrated an
          incremental switchover using <strong>Nginx</strong> as a traffic
          proxy. Managed the strategic database migration from
          <strong>Neo4j to PostgreSQL</strong>, ensuring schema compatibility
          and data integrity during the transition.
          <br />
          <br />
          <strong>3. Database Decoupling (Query Pattern):</strong> Implemented a
          centralized <strong>Query Pattern (Repository Layer)</strong> to
          decouple application logic from the database, simplifying the complex
          joins required for the new analytics dashboards.
          <br />
          <br />
          <strong>4. Performance & Scale:</strong> Integrated{" "}
          <strong>Redis</strong> to efficiently handle non-runtime calculations
          (e.g., daily student progress updates) and{" "}
          <strong>Elasticsearch</strong> for full-text search across the vast
          library of assessment content.
        </>
      ),
      outcome: [
        <>
          <strong>Business Impact:</strong> Reduced monthly infrastructure cost
          by <strong>60%</strong> (from $1,000 to $400) while unlocking B2B
          revenue streams through the new Organization/Teacher quiz creation
          tools.
        </>,
        <>
          <strong>User Experience:</strong> Cut median page load time from{" "}
          <strong>8s-15s to 1s-2s</strong>, directly improving key retention
          metrics.
        </>,
        <>
          <strong>Technical Feat:</strong> Executed a{" "}
          <strong>zero-downtime, incremental migration</strong> over a
          multi-quarter period, successfully managing parallel authentication
          and data consistency.
        </>,
      ],
    },
    {
      title:
        "Upcoming Events: Scaling to Millions and Orchestrating Complex Payments",
      projectTitle: "Upcoming Events",
      problem: (
        <>
          The platform experienced massive, unpredictable traffic spikes (up to
          3 million monthly users) around major ticket sales, causing frequent
          database bottlenecks. Furthermore, the fragmented payment system
          lacked modern, high-conversion options, directly hindering revenue
          potential and requiring robust financial integrity.
        </>
      ),
      solution: (
        <>
          As the <strong>Technical Lead</strong>, I led the architecture and
          execution of a full-stack solution focused on system resilience and
          transaction reliability:
          <br />
          <br />
          <strong>1. High-Scale Caching & Performance:</strong> Implemented a
          multi-layered caching strategy using <strong>Redis</strong> for hot
          data and <strong>CDN (Cloudflare)</strong> for edge delivery.
          Specifically, I utilized <strong>AWS CloudFront</strong> for image
          caching, implementing <strong>versioning</strong> to ensure immediate
          cache invalidation and delivery of updated image assets.
          <br />
          <br />
          <strong>2. Query Optimization:</strong> Led a systematic campaign to
          identify and rewrite critical N+1 queries and slow joins, reducing
          average database response time by over 60%.
          <br />
          <br />
          <strong>3. Financial Integrity & Orchestration:</strong> Designed and
          built a robust payment gateway layer to integrate multiple providers,
          including <strong>Stripe, Apple Pay, and PayPal</strong>. Ensured
          transaction integrity using strict <strong>idempotency checks</strong>{" "}
          and developed the full lifecycle logic for automated{" "}
          <strong>refund processing</strong>, dispute management, and settlement
          reporting.
        </>
      ),
      outcome: [
        <>
          <strong>Scalability Achieved:</strong> Successfully scaled the
          platform to reliably handle <strong>2+ million monthly users</strong>,
          stabilizing performance during peak traffic events.
        </>,
        <>
          <strong>Revenue Impact:</strong> The unified payment orchestration
          system increased conversion rates and diversified revenue streams.
        </>,
        <>
          <strong>System Reliability:</strong> Delivered robust, auditable
          transaction management and refund processing, establishing the
          necessary financial integrity for sustained growth.
        </>,
      ],
    },
    {
      title: "Evyai: Full-Stack AI Architecture for Social Engagement",
      projectTitle: "Evyai",
      problem: (
        <>
          The product required a unified, low-latency architecture to provide
          contextual AI across two distinct environments: a primary web
          application and a Chrome extension. The core technical challenges
          involved supporting secure <strong>Single Sign-On (SSO)</strong> and
          operationalizing <strong>Retrieval-Augmented Generation (RAG)</strong>{" "}
          at scale while maintaining sub-second latency.
        </>
      ),
      solution: (
        <>
          As the <strong>Principal Engineer and Systems Owner</strong>, I led
          the architecture, infra choices, and product integration with the
          founder team. My focus was on <strong>cross-product cohesion</strong>:
          <br />
          <br />
          <strong>1. Unified Authentication:</strong> Defined the
          cross-environment authentication strategy, implementing{" "}
          <strong>Firebase Authentication</strong> with custom token
          verification for seamless{" "}
          <strong>SSO and session reconciliation</strong> across the web app and
          extension.
          <br />
          <br />
          <strong>2. Contextual AI Engine:</strong> Architected a central
          intelligence service using <strong>RAG</strong>, designing the vector
          store, relevance tuning, and custom persona plumbing so that{" "}
          <strong>LLM outputs were tightly contextualized</strong>.
          <br />
          <br />
          <strong>3. Performance & Integration:</strong> Built an event-driven
          API with careful rate limiting to maintain sub-second response targets
          for interactive features.
          <br />
          <br />
          <strong>4. Leadership:</strong> Led the Chrome extension integration,
          defining secure <strong>DOM interaction patterns</strong> and
          mentoring junior engineers on prompt chaining best practices.
        </>
      ),
      outcome: [
        <>
          <strong>Seamless UX:</strong> Delivered unified authentication and
          persistent state across all environments, critical for user trust and
          productivity.
        </>,
        <>
          <strong>Scale & Adoption:</strong> Scaled the platform to thousands of
          active users while maintaining interaction-level latency targets.
        </>,
        <>
          <strong>Institutional Impact:</strong> Established internal best
          practices for model integration and prompt chaining, raising the
          team's AI delivery standard.
        </>,
      ],
    },
    {
      title: "Elftapes: Cross-Platform Media Synchronization & AI Pipeline",
      projectTitle: "Elftapes",
      problem: (
        <>
          The product required a real-time rehearsal playground and reliable
          media output with AI-driven dialogue mixed into user recordings.
          Browsers and mobile platforms (specifically iOS) block simultaneous
          capture and internal audio mixing, creating a critical technical
          limitation for final video delivery.
        </>
      ),
      solution: (
        <>
          As the <strong>Lead Engineer for media systems</strong>, I focused on
          system design, data pipeline reliability, and platform integration to
          bypass fundamental platform limitations:
          <br />
          <br />
          <strong>1. Script Ingestion Pipeline:</strong> Built an{" "}
          <strong>OCR ingestion pipeline</strong> to convert uploaded scripts
          into structured role and dialogue JSON via <strong>Tesseract</strong>{" "}
          and a validation stage.
          <br />
          <br />
          <strong>2. Rehearsal Engine:</strong> Designed a rehearsal engine that
          captured the clean <strong>user video/audio stream</strong> and
          accurately <strong>timestamped</strong> events for AI cues during
          sessions.
          <br />
          <br />
          <strong>3. Cross-Platform Fix (FFmpeg):</strong> Implemented a robust,{" "}
          <strong>server-side media synthesis pipeline</strong> using{" "}
          <strong>FFmpeg</strong> to splice and mix the AI audio tracks with the
          user recordings, achieving deterministic synchronization and solving
          the cross-platform limitation.
          <br />
          <br />
          <strong>4. Scalable Delivery:</strong> Used{" "}
          <strong>S3 multipart uploads</strong> with resumable pre-signed URLs
          and lifecycle policies to handle large files and control storage cost.
        </>
      ),
      outcome: [
        <>
          <strong>Technical Feat:</strong> Solved the critical cross-platform
          audio mixing limitation by moving synchronization to a robust
          server-side pipeline.
        </>,
        <>
          <strong>Institutional Impact:</strong> Created automated testing for
          media timing, and created <strong>runbooks</strong> for failure modes
          in encoding and upload.
        </>,
        <>
          <strong>Data Pipeline:</strong> Delivered a reliable production flow
          from unstructured script images to actionable AI input.
        </>,
      ],
    },
  ],
} as const;
