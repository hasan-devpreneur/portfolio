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
    "Senior Software & AI Engineer with 5+ years of experience. Expert in building SaaS platforms, architecting LLM pipelines, and building scalable, high-performance solutions",
  summary:
    "Senior Software Engineer with 5+ years of experience, specializing in end-to-end SaaS design, development, and delivery. I architect AI-driven platforms, including LLM pipelines, RAG systems, and scalable cloud infrastructure, from concept to production. I combine strategic system design with disciplined execution, delivering complex projects on schedule, cutting costs by up to 60%, and scaling to millions of users. I’ve led multi-quarter modernizations, designed high-volume payment systems, and built AI features that boost engagement and revenue.",
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
      "AWS (EC2, RDS, S3, Lambda, VPC, CloudFront)",
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
          strategies for multiple SaaS platforms, transitioning legacy monoliths
          into scalable <strong>microservices architectures</strong>. This
          involved leading a full-stack team of <strong>15+ engineers</strong>{" "}
          through complex, multi-quarter migrations and high-scale
          optimizations.
          <br />
          <br />
          For a major <strong>EdTech platform</strong>, I replaced a legacy
          system suffering from critical scalability issues with a modern{" "}
          <strong>React and Ruby on Rails</strong> architecture. I implemented
          an incremental migration strategy, routing traffic{" "}
          <strong>route-by-route</strong> to the new application while handling{" "}
          <strong>unified authentication</strong> across both repositories
          simultaneously. I introduced a <strong>Query Pattern</strong> to
          decouple business logic, allowing us to refactor the schema and
          migrations seamlessly after the shift. The result was a{" "}
          <strong>60% reduction in infrastructure costs</strong> and a
          performance improvement from 15s to 1-2s page loads.
          <br />
          <br />
          For a high-traffic <strong>event management system</strong>, I
          designed a robust <strong>Ticket Inventory System</strong> to handle
          concurrency during massive traffic surges of{" "}
          <strong>million monthly users</strong>. I led a campaign to{" "}
          <strong>optimize database queries</strong> and page loading speeds.
          <br />
          <br />
          Additionally, I integrated <strong>Elasticsearch</strong> to power{" "}
          <strong>Natural Language and Full-Text Search</strong>, optimizing it
          to query <strong>millions of records at snap speed</strong>. I also
          architected advanced <strong>AI pipelines</strong>—including{" "}
          <strong>LLM fine-tuning</strong> and <strong>RAG systems</strong>—and
          implemented <strong>FFmpeg</strong> to power robust{" "}
          <strong>cross-platform media pipelines</strong>.
        </>
      ),
    },
    {
      company: "Southville Solutions",
      href: "https://southvillesol.com/",
      badges: [],
      location: "Lahore, Pakistan",
      title: "Software Engineer",
      logoUrl: "/southville.png",
      start: "July 2021",
      end: "April 2023",
      description: (
        <>
          I engineered scalable backend services for enterprise B2B
          applications, focusing on domains requiring high integrity, such as
          fintech and HR. I utilized <strong>Docker</strong> for containerized
          environments and managed persistent storage using{" "}
          <strong>AWS EBS</strong> to ensure system reliability.
          <br />
          <br />I developed core financial infrastructure for a{" "}
          <strong>fintech solution</strong>, implementing secure checkout and
          batch settlement logic. For a{" "}
          <strong>workforce management platform</strong>, I built real-time
          features and complex multi-state compliance workflows.
          <br />
          <br />I contributed to the backend architecture for a{" "}
          <strong>community engagement platform</strong>, collaborating with
          product teams to translate business requirements into robust technical
          solutions. Additionally, I implemented{" "}
          <strong>CloudFront versioning strategies</strong> to ensure instant
          updates and efficient content delivery. A key part of my role involved
          fostering team growth; I provided{" "}
          <strong> hands-on mentorship to juniors</strong> and{" "}
          <strong>training for interns</strong>, guiding them on development
          workflows and coding best practices.
        </>
      ),
    },
    {
      company: "TeachCreatix",
      href: "teachcreatix.svg",
      badges: [],
      location: "Lahore, Pakistan",
      title: "Associate Software Engineer",
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
          features and maintain application functionality.
          <br />
          <br />
          This role provided foundational experience in RESTful API integration,{" "}
          <strong>webhook implementation</strong>, database management, and
          configuring <strong>Nginx</strong> servers on <strong>AWS</strong>{" "}
          within a production SaaS environment.
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
  ],
  caseStudies: [
    {
      title:
        "The Piqosity Modernization: Incremental Rewrite & 40% Cost Reduction",
      projectTitle: "Piqosity",
      problem: (
        <>
          The legacy platform was built on an outdated stack that could not
          scale. It faced critical constraints including high infrastructure
          costs and cripplingly slow response times (8s-15s latency). the old
          architecture prevented the development of flexible features like
          dynamic assessments, and the code was too brittle to maintain
          efficiently.
        </>
      ),
      solution: (
        <>
          As the <strong>Technical Architect</strong>, I owned the modernization
          strategy, moving from the legacy monolith to a modern
          <strong> React and Ruby on Rails</strong> ecosystem:
          <br />
          <br />
          <strong>1. Route-by-Route Migration (Strangler Fig):</strong> Instead
          of a "big bang" rewrite, I orchestrated an incremental switchover. We
          moved traffic <strong>route-by-route</strong> to the new app, ensuring
          zero downtime. I architected a bridge to handle
          <strong> unified authentication</strong> on both repos simultaneously,
          keeping user sessions synced across the legacy and new systems.
          <br />
          <br />
          <strong>2. Query Pattern & Schema Optimization:</strong> I implemented
          a strict <strong>Query Pattern</strong> to decouple business logic
          from the database early on. Once all routes were shifted, this allowed
          us to cleanly update the{" "}
          <strong>database schema and migrations</strong>
          to a modern standard without breaking the application logic.
          <br />
          <br />
          <strong>3. Dynamic Assessment Engine:</strong> Leveraged the new
          schema flexibility to design a complex relational engine allowing
          organizations to build custom quizzes with dynamic question types and
          versioning.
          <br />
          <br />
          <strong>4. Performance & Scale:</strong> Integrated{" "}
          <strong>Redis</strong> for non-runtime calculations and optimized all
          data-access layers, resulting in massive speed gains.
        </>
      ),
      outcome: [
        <>
          <strong>Business Impact:</strong> Reduced monthly infrastructure cost
          by <strong>40%</strong> while unlocking B2B revenue streams through
          the new Organization/Teacher tools.
        </>,
        <>
          <strong>User Experience:</strong> Cut median page load time from{" "}
          <strong>15s to 1-2s</strong>, directly improving key retention
          metrics.
        </>,
        <>
          <strong>Technical Feat:</strong> Executed a risk-free, incremental
          migration while maintaining data consistency and auth across two live
          production environments.
        </>,
      ],
    },
    {
      title:
        "Upcoming Events: Scaling Tickets Inventory & Optimizing Performance",
      projectTitle: "Upcoming Events",
      problem: (
        <>
          The platform experienced massive, unpredictable traffic spikes (up to
          million monthly users) around major ticket sales. The legacy queries
          were unoptimized, leading to slow page loads, and the system lacked a
          robust inventory manager to handle race conditions during flash sales.
        </>
      ),
      solution: (
        <>
          As the <strong>Technical Lead</strong>, I led a full-stack
          optimization strategy:
          <br />
          <br />
          <strong>1. Ticket Inventory System:</strong> I architected and
          designed a high-performance <strong>Ticket Inventory System</strong>{" "}
          capable of handling high concurrency. This ensured data integrity and
          prevented over-selling during intense traffic spikes.
          <br />
          <br />
          <strong>2. Query Optimization & Page Load Speed:</strong> Led a
          systematic campaign to identify and rewrite critical N+1 queries and
          slow joins. I optimized the database indexing strategy and payload
          sizes, reducing average database response time by over 40% and
          drastically improving page load speeds.
          <br />
          <br />
          <strong>3. High-Scale Caching:</strong> Implemented a multi-layered
          caching strategy using <strong>Redis</strong> for hot data and{" "}
          <strong>CDN (Cloudflare)</strong> for edge delivery, specifically
          focusing on versioning for immediate cache invalidation.
          <br />
          <br />
          <strong>4. Financial Integrity:</strong> Designed a robust payment
          gateway layer (Stripe, Apple Pay, PayPal) with strict{" "}
          <strong> idempotency checks</strong> to ensure transaction
          reliability.
        </>
      ),
      outcome: [
        <>
          <strong>Scalability Achieved:</strong> Successfully scaled the
          platform to reliably handle <strong>million monthly users</strong>,
          stabilizing performance during peak traffic events.
        </>,
        <>
          <strong>Performance Wins:</strong> Drastically reduced page load times
          through deep query optimization and efficient caching strategies.
        </>,
        <>
          <strong>System Reliability:</strong> The new Inventory System
          eliminated race conditions, ensuring 100% accurate ticket allocations
          during flash sales.
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
