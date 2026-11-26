// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Ambrish Srivastav",
  roles: [".NET Developer", "Microservices Engineer", "Backend Specialist"],
  tagline:
    "I build secure, scalable backends with C#, ASP.NET Core, Kafka and Redis.",
  location: "Navi Mumbai, Maharashtra, India",
  email: "srivastavambrish63@gmail.com",
  phone: "+91-9315190787",
  linkedin: "https://www.linkedin.com/in/ambrish-s-a32093223/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdkzXh4n8QWKAMZV2CoxxlQ%3D%3D",
  resumeUrl: "", // e.g. "/Ambrish_Srivastav_Resume.pdf" (put the PDF in /public)
  about: [
    "Backend-focused .NET developer with 2+ years of experience building secure, scalable enterprise applications in C# and ASP.NET Core.",
    "I'm currently designing microservices for a multi-tenant SaaS platform using Kafka, Redis, HashiCorp Vault, JWT, RBAC and ABAC, with a React.js front end. Before that, I delivered three production platforms end to end, including an attendance system that cut manual HR reporting by 60%.",
  ],
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { to: 2, suffix: "+", label: "Years of Experience" },
  { to: 5, suffix: "+", label: "Platforms Developed" },
  { to: 60, suffix: "%", label: "Reduction in Reporting Effort" },
  { to: 100, suffix: "%", label: "On-Time Project Delivery" },
];

export const skills = [
  { group: "Backend", icon: "⚙️", items: ["C#", "ASP.NET Core Web API", ".NET MVC", "Microservices", "Clean Architecture", "Repository Pattern", "Dependency Injection"] },
  { group: "Data Access", icon: "🗄️", items: ["SQL Server", "T-SQL", "Entity Framework Core", "Dapper", "ADO.NET", "LINQ", "Stored Procedures"] },
  { group: "Messaging & Caching", icon: "⚡", items: ["Apache Kafka", "Redis", "In-Memory Cache", "Distributed Caching"] },
  { group: "Security", icon: "🔐", items: ["JWT", "RBAC", "ABAC", "HashiCorp Vault", "OWASP Basics"] },
  { group: "Frontend", icon: "🎨", items: ["React.js", "TypeScript", "JavaScript", "jQuery", "Bootstrap 5", "HTML5", "CSS3"] },
  { group: "Cloud & Tools", icon: "☁️", items: ["AWS S3", "Git", "GitHub", "Swagger", "Postman", "Unit Testing"] },
];

export const experience = [
  {
    role: "Software Developer (.NET)",
    company: "Saarvika Technology Pvt. Ltd.",
    place: "Vashi, Navi Mumbai",
    period: "Nov 2026 – Present",
    points: [
      "Developing microservices in C# and ASP.NET Core for a multi-tenant SaaS application with a React.js front end.",
      "Built event-driven communication between services with Apache Kafka producers and consumers.",
      "Applied two-level caching (Redis + local in-memory) to cut database round trips and API response times.",
      "Implemented JWT flows with RBAC and ABAC policies across services.",
      "Integrated HashiCorp Vault to keep secrets, connection strings and signing keys out of config files.",
      "Designed an idempotent startup routine that auto-registers API endpoints without creating duplicates.",
      "Created a centralized media service (shared storage + AWS S3) reused by all services.",
      "Used Dapper with a custom connection pool for efficient data access under load.",
    ],
  },
  {
    role: "Junior Software Developer (.NET)",
    company: "Apsidata Solutions Pvt. Ltd.",
    place: "Sector 63, Noida",
    period: "Oct 2024 – Oct 2026",
    points: [
      "Built and maintained RESTful APIs with ASP.NET Core Web API, Repository Pattern and DI, backed by unit tests.",
      "Delivered TechPro, a hiring platform with JWT auth, four-role RBAC and multi-round interview scheduling.",
      "Led CASPS, a multi-region assessment platform with adaptive question routing and three-stage approvals.",
      "Built the Employee Attendance Management System, cutting manual reporting effort by 60%.",
      "Developed role-based dashboards with TypeScript, JavaScript and Bootstrap 5.",
      "Integrated IVR APIs into client workflows to automate call handling.",
    ],
  },
];

// Add github / demo URLs to show buttons on a project card.
export const projects = [
  {
    name: "B2B SaaS Platform",
    tag: "Client project",
    stack: ["Microservices", "Kafka", "Redis", "React.js", "Vault","Api Pooling"],
    desc: "Backend microservices with Kafka event streaming, layered caching and JWT with RBAC/ABAC, serving multiple tenants from one platform. Includes auto endpoint registration and a unified file service on shared storage / AWS S3.",
    github: "",
    demo: "",
  },
  {
    name: "TechPro",
    tag: "Hiring platform",
    stack: ["ASP.NET Core", "JWT", "RBAC", "TypeScript"],
    desc: "Centralized hiring platform for Admin, HR, Interviewer and Candidate roles, with multi-round interview scheduling, panel assignment and feedback.",
    github: "",
    demo: "",
  },
  {
    name: "CASPS",
    tag: "Assessment platform",
    stack: [".NET MVC", "ADO.NET", "EF Core", "SMTP"],
    desc: "Capability Assessment Strategic and Planning Solution: multi-region assessments with adaptive routing, dynamic scoring and a three-stage approval workflow with email notifications.",
    github: "",
    demo: "",
  },
  {
    name: "Employee Attendance System",
    tag: "HR tool",
    stack: ["ASP.NET Core", "SQL Server", "Bootstrap 5"],
    desc: "Attendance tracking, shift scheduling and admin overrides for 200+ employees, with automated Excel/PDF payroll-ready reports saving about 60% of manual effort.",
    github: "",
    demo: "",
  },
];

export const education = [
  {
    degree: "B.Tech, Information Technology",
    school: "ABES Institute of Technology, Ghaziabad",
    period: "2020 – 2024",
  },
];
