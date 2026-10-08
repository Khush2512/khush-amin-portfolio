const fs = require('fs');
const path = require('path');

function escapePdf(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function createValidPDF(title, subtitle, contact, summary, sections) {
  let streamLines = [];

  // Header Title
  streamLines.push('BT');
  streamLines.push('/F1 18 Tf');
  streamLines.push('40 745 Td');
  streamLines.push(`(${escapePdf(title)}) Tj`);
  streamLines.push('ET');

  // Subtitle
  streamLines.push('BT');
  streamLines.push('/F1 11 Tf');
  streamLines.push('40 728 Td');
  streamLines.push(`(${escapePdf(subtitle)}) Tj`);
  streamLines.push('ET');

  // Contact info
  streamLines.push('BT');
  streamLines.push('/F2 9 Tf');
  streamLines.push('40 714 Td');
  streamLines.push(`(${escapePdf(contact)}) Tj`);
  streamLines.push('ET');

  // Horizontal separator line drawing
  // Draw line at y=704
  streamLines.push('0.2 g');
  streamLines.push('40 704 532 1 re f');

  // Summary box
  let currentY = 685;
  streamLines.push('BT');
  streamLines.push('/F1 11 Tf');
  streamLines.push(`40 ${currentY} Td`);
  streamLines.push(`(${escapePdf('PROFESSIONAL SUMMARY')}) Tj`);
  streamLines.push('ET');

  currentY -= 16;
  streamLines.push('BT');
  streamLines.push('/F2 9.5 Tf');
  streamLines.push(`40 ${currentY} Td`);
  streamLines.push(`(${escapePdf(summary)}) Tj`);
  streamLines.push('ET');

  currentY -= 24;

  sections.forEach((sec) => {
    // Section Header
    streamLines.push('BT');
    streamLines.push('/F1 11 Tf');
    streamLines.push(`40 ${currentY} Td`);
    streamLines.push(`(${escapePdf(sec.heading.toUpperCase())}) Tj`);
    streamLines.push('ET');

    currentY -= 4;
    streamLines.push('0.3 g');
    streamLines.push(`40 ${currentY} 532 0.75 re f`);

    currentY -= 16;

    sec.items.forEach((item) => {
      if (typeof item === 'string') {
        streamLines.push('BT');
        streamLines.push('/F2 9.5 Tf');
        streamLines.push(`50 ${currentY} Td`);
        streamLines.push(`(${escapePdf('•  ' + item)}) Tj`);
        streamLines.push('ET');
        currentY -= 15;
      } else if (item.title) {
        streamLines.push('BT');
        streamLines.push('/F1 10 Tf');
        streamLines.push(`50 ${currentY} Td`);
        streamLines.push(`(${escapePdf(item.title)}) Tj`);
        if (item.date) {
          streamLines.push(`/F2 9 Tf`);
          streamLines.push(`400 0 Td`);
          streamLines.push(`(${escapePdf(item.date)}) Tj`);
        }
        streamLines.push('ET');

        currentY -= 14;

        if (item.desc) {
          streamLines.push('BT');
          streamLines.push('/F2 9 Tf');
          streamLines.push(`60 ${currentY} Td`);
          streamLines.push(`(${escapePdf(item.desc)}) Tj`);
          streamLines.push('ET');
          currentY -= 15;
        }
      }
    });

    currentY -= 10;
  });

  const streamText = streamLines.join('\n');
  const streamLength = Buffer.byteLength(streamText, 'utf-8');

  const obj1 = `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`;
  const obj2 = `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`;
  const obj3 = `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n`;
  const obj4 = `4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`;
  const obj5 = `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`;
  const obj6 = `6 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamText}\nendstream\nendobj\n`;

  const header = `%PDF-1.4\n%\xFF\xFF\xFF\xFF\n`;
  const bodyObjects = [obj1, obj2, obj3, obj4, obj5, obj6];

  let currentOffset = Buffer.byteLength(header, 'binary');
  let xrefEntries = ['0000000000 65535 f \n'];

  bodyObjects.forEach((obj) => {
    let offsetStr = currentOffset.toString().padStart(10, '0');
    xrefEntries.push(`${offsetStr} 00000 n \n`);
    currentOffset += Buffer.byteLength(obj, 'binary');
  });

  const xrefOffset = currentOffset;
  const xrefTable = `xref\n0 ${bodyObjects.length + 1}\n` + xrefEntries.join('');
  const trailer = `trailer\n<< /Size ${bodyObjects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const fullPdf = header + bodyObjects.join('') + xrefTable + trailer;
  return Buffer.from(fullPdf, 'binary');
}

const publicDir = path.join(__dirname, '..', 'public');

// 1. Software Engineer CV
const pdfSE = createValidPDF(
  'KHUSH AMIN',
  'Graduate Software Engineer | Junior .NET Developer | Full-Stack Specialist',
  'Email: khushpatel0344@gmail.com | Phone: +44 7733908167 | Location: Leicester, UK | GitHub: github.com/Khush2512',
  'First-Class Honours Computer Science Graduate (70% overall average) from De Montfort University with dual Oracle Cloud certifications. Specialized in C#, ASP.NET Core MVC, SQL Server 3NF relational database design, parameterized query security, and Agile software engineering practices.',
  [
    {
      heading: 'Academic Qualifications & Honors',
      items: [
        {
          title: 'BSc (Hons) Computer Science — First Class Honours (70% Overall Average)',
          date: 'De Montfort University, 2021 - 2024',
          desc: 'Graduated with 1st Class Honours. Module honors in Enterprise Software Engineering & Web Architecture.'
        }
      ]
    },
    {
      heading: 'Featured Engineering Projects',
      items: [
        {
          title: 'Enterprise E-Commerce & Staff Management Subsystem (C#, ASP.NET Core, SQL Server)',
          date: '82% First Class Mark',
          desc: 'Architected Staff Management Subsystem within 5-person Agile team. Engineered 3NF SQL schemas and RBAC authorization.'
        },
        {
          title: 'Full-Stack Software Capstone Development Project (TypeScript, Node, REST APIs)',
          date: '78% First Class Mark',
          desc: 'Scored 100% on Phase 1 specification. Built decoupled REST endpoints and robust integration test suites.'
        },
        {
          title: 'Student Course Management Hub (PHP PDO, MySQL, WCAG Accessibility)',
          date: 'First Class Mark',
          desc: 'Designed parameterized PDO queries, CSRF token defenses, and WCAG AA accessible user interface.'
        }
      ]
    },
    {
      heading: 'Technical Core Competencies',
      items: [
        'Languages & Frameworks: C#, ASP.NET Core, TypeScript, JavaScript, React, Next.js, Node.js, PHP, HTML5/CSS3',
        'Database & Security: Microsoft SQL Server, MySQL, 3NF Normalization, Parameterized Queries, RBAC, CSRF Defenses',
        'Developer Tools: Git, GitHub, Visual Studio, VS Code, Postman, Jest, Azure DevOps, Agile Scrum methodology'
      ]
    },
    {
      heading: 'Professional Certifications',
      items: [
        'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional (Oracle University)',
        'Oracle Cloud Data Management 2023 Certified Foundations Associate (Oracle University)'
      ]
    }
  ]
);

// 2. Cloud & Infrastructure CV
const pdfCloud = createValidPDF(
  'KHUSH AMIN',
  'Cloud & Infrastructure Specialist | Junior System Administrator | Oracle Cloud Certified',
  'Email: khushpatel0344@gmail.com | Phone: +44 7733908167 | Location: Leicester, UK | Portfolio: khush-amin-portfolio3d.vercel.app',
  'First-Class Honours Computer Science Graduate from De Montfort University holding dual Oracle Cloud certifications with 2 years of commercial IT infrastructure and sysadmin experience managing 50+ enterprise workstations, Active Directory policy provisioning, and customer-facing IT services.',
  [
    {
      heading: 'Commercial IT Infrastructure Experience',
      items: [
        {
          title: 'Junior System Administrator — TruSkills Solutions Pvt. Ltd.',
          date: '2021 - 2023 (2 Years)',
          desc: 'Administered 50+ Windows/Linux workstations. Provisioned Active Directory users, GPOs, and maintained 99%+ operational uptime.'
        },
        {
          title: 'Commercial Operations Specialist — One Stop & Tesco Operations',
          date: 'UK Commercial Experience',
          desc: 'Managed retail POS hardware, inventory databases, customer resolution, and network availability across shift operations.'
        }
      ]
    },
    {
      heading: 'Oracle Cloud & Industry Certifications',
      items: [
        {
          title: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
          date: 'Oracle University (Verified Credential)',
          desc: 'Certified expertise in OCI GenAI services, LLM deployment, vector embeddings, and cloud AI infrastructure architecture.'
        },
        {
          title: 'Oracle Cloud Data Management 2023 Certified Foundations Associate',
          date: 'Oracle University (Verified Credential)',
          desc: 'Certified in OCI Autonomous Database, Relational Data Lakes, automated backup strategies, and cloud security.'
        }
      ]
    },
    {
      heading: 'Education & Technical Skillset',
      items: [
        {
          title: 'BSc (Hons) Computer Science — First Class Honours (70% Average)',
          date: 'De Montfort University',
          desc: 'Focus on Enterprise Networks, Cloud Systems Architecture, Cybersecurity, and Relational Database Systems.'
        },
        'Infrastructure Tools: Active Directory, Group Policy (GPO), LAN/WAN Diagnostics, DNS/DHCP, Windows Server, Linux CLI',
        'Cloud Platform Expertise: Oracle Cloud Infrastructure (OCI), Oracle Autonomous DB, Cloud Security Architecture, IAM'
      ]
    }
  ]
);

fs.writeFileSync(path.join(publicDir, 'Khush_Amin_CV_new.pdf'), pdfSE);
fs.writeFileSync(path.join(publicDir, 'Khush_Amin_Cloud_Infrastructure_CV.pdf'), pdfCloud);
fs.writeFileSync(path.join(publicDir, 'Khush_Amin_CV.pdf'), pdfSE);

console.log('Successfully generated valid PDF files in public/ directory!');
