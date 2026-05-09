export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  thumbnail: string;
  shortDescription: string;
  problem: string;
  process: string;
  result: string;
  tools: string[];
  year: number;
  featured: boolean;
  certificate?: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  duration: string;
  description: string;
  impact: string;
  skills: string[];
  logo?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "Technical" | "Tools" | "Domain";
  level: "Beginner" | "Intermediate" | "Advanced";
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  certificateUrl: string;
}

const thumbnailMagang = new URL('./attachments/thumbnail magang.png', import.meta.url).href;
const thumbnailIoT = new URL('./attachments/thumbnail IoT.jpeg', import.meta.url).href;
const thumbnailDigitalMarketing = new URL('./attachments/Digital Marketing.jpeg', import.meta.url).href;
const pictureSanjaya = new URL('./attachments/pict.jpeg', import.meta.url).href;

const certificateMagang = new URL('./attachments/certificates/SERTIKASI_MAGANG_SANJAYA.pdf', import.meta.url).href;
const certificateSkL = new URL('./attachments/certificates/SKL (surat keterangan lulus).pdf', import.meta.url).href;
const certificateDigitalMarketing = new URL('./attachments/certificates/Digital Marketing Sertifikat Kelulusan - Sanjaya.pdf', import.meta.url).href;
const certificateToefl = new URL('./attachments/certificates/Toefl-10121186.pdf', import.meta.url).href;
const certificateBnsp = new URL('./attachments/certificates/SERTIKASI_BNSP_SANJAYA.pdf', import.meta.url).href;

export const projects: Project[] = [
  {
    id: "1",
    title: "Traffic Monitoring System",
    slug: "traffic-monitoring-system",
    category: "Web / System",
    thumbnail: thumbnailMagang,
    shortDescription: "Real-time traffic monitoring system for operational visibility",
    problem: "Difficulty in monitoring traffic conditions in real-time and centralized systems",
    process: "Developed a web-based system to display and manage traffic data",
    result: "Improved monitoring efficiency and supported decision-making",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    year: 2024,
    featured: true,
    certificate: certificateMagang,
    demoUrl: thumbnailMagang,
  },
  {
    id: "2",
    title: "IoT-Based Fertilizer Recommendation System",
    slug: "iot-fertilizer-system",
    category: "IoT / Data",
    thumbnail: thumbnailIoT,
    shortDescription: "Smart system to recommend fertilizer usage based on environmental data",
    problem: "Farmers struggle with proper fertilization timing and dosage",
    process: "Designed an IoT-based recommendation system using environmental inputs",
    result: "Helped improve efficiency and accuracy in fertilization decisions",
    tools: ["IoT", "Python", "Data Processing"],
    year: 2024,
    featured: true,
    certificate: certificateSkL,
    demoUrl: "https://sirepadi.netlify.app/",
  },
  {
    id: "3",
    title: "Digital Marketing & SEO Strategy",
    slug: "digital-marketing-seo",
    category: "Marketing",
    thumbnail: thumbnailDigitalMarketing,
    shortDescription: "SEO optimization and digital marketing strategy for Jajan Kuy to increase online visibility, traffic, and keyword rankings.",
    problem: "Jajan Kuy needed to improve its online presence, increase website traffic, and optimize search engine visibility to attract more customers.",
    process: "Conducted keyword research and competitor analysis, optimized on-page SEO (content, meta tags, and structure), created SEO-friendly content, monitored performance using Google Search Console, and continuously improved rankings through data-driven strategies.",
    result: "Achieved 57.1% CTR increase, 11.9K impressions, 16 total clicks within 28 days, and reached Top 10 ranking for primary keywords on Google Search.",
    tools: ["Google Search Console","Yoast SEO","WordPress","Canva","SEO Analytics"],
    year: 2024,
    featured: true,
    certificate: certificateDigitalMarketing,
    demoUrl: thumbnailDigitalMarketing,
  },
];

export const experiences: Experience[] = [
  {
    id: "e1",
    company: "Jasa Marga Tollroad Operator (JMTO)",
    role: "Traffic Monitoring Staff",
    type: "Internship",
    duration: "2023 - 2024",
    description: "Monitored real-time traffic conditions and assisted in daily reporting",
    impact: "Ensured accurate traffic information and supported toll road operations",
    skills: ["Monitoring", "Data Analysis", "Reporting"],
  },
  {
    id: "e2",
    company: "MSIB Digital Marketing Program",
    role: "Digital Marketing Participant",
    type: "Program",
    duration: "2023",
    description: "Learned and implemented digital marketing strategies including content creation and market analysis",
    impact: "Improved ability to design effective digital promotion strategies",
    skills: ["Marketing Strategy", "Content Creation", "Analysis"],
  },
];

export const skills: Skill[] = [
  { id: "s1", name: "Web Development", category: "Technical", level: "Intermediate" },
  { id: "s2", name: "Backend Basic (PHP/Laravel)", category: "Technical", level: "Beginner" },
  { id: "s3", name: "Database Management", category: "Technical", level: "Intermediate" },
  { id: "s4", name: "HTML", category: "Tools", level: "Intermediate" },
  { id: "s5", name: "CSS", category: "Tools", level: "Intermediate" },
  { id: "s6", name: "JavaScript", category: "Tools", level: "Intermediate" },
  { id: "s7", name: "MySQL", category: "Tools", level: "Intermediate" },
  { id: "s8", name: "Excel", category: "Tools", level: "Advanced" },
  { id: "s9", name: "Python", category: "Tools", level: "Beginner" },
  { id: "s10", name: "Data Analysis", category: "Domain", level: "Intermediate" },
  { id: "s11", name: "Information Systems", category: "Domain", level: "Intermediate" },
  { id: "s12", name: "IoT Systems", category: "Domain", level: "Beginner" },
];

export const certificates: Certificate[] = [
  {
    id: "cert1",
    name: "TOEFL",
    issuer: "ETS",
    certificateUrl: certificateToefl,
  },
  {
    id: "cert2",
    name: "BNSP",
    issuer: "Badan Nasional Sertifikasi Profesi",
    certificateUrl: certificateBnsp,
  },
];
