// เนื้อหาทั้งเว็บ (EN / TH) — แก้ข้อความที่ไฟล์นี้ไฟล์เดียว
import profilePic from './assets/profile-pic.jpg';
import happySave from './assets/portfolio/portfolio-1.jpg';
import webInternship from './assets/portfolio/portfolio-5.jpg';
import certDev from './assets/portfolio/portfolio-4.jpg';
import certBigData from './assets/portfolio/portfolio-3.jpg';

export const profile = {
  name: 'Sufian Maseng',
  photo: profilePic,
  email: 'sufian94150@gmail.com',
  phone: '+66 96 637 5261',
  phoneHref: 'tel:+66966375261',
  line: '', // ใส่ลิงก์ LINE เช่น https://line.me/ti/p/~yourid — เว้นว่างจะไม่แสดง
  socials: [
    { key: 'github', label: 'GitHub', href: 'https://github.com/sufian1429' },
    { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sufian-maseng-ba2567259/' },
    { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/sufian.maseng.3/' },
    { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/shxorsm?igsh=cHdhYjFnMXU1aG1u' },
  ],
};

// mock: ชนิดภาพจำลองหน้าจอ (ดู components/Mock.js) — ใส่ image แทนเมื่อมีภาพจริง
export const projects = [
  { id: 'bravocuts', mock: 'booking', url: 'https://www.bravocuts.com/', tags: ['React', 'Supabase', 'TH / EN'],
    en: { title: 'BravoCuts', desc: 'Online queue & booking for a professional barbershop, with a Thai/English switch for tourists.' },
    th: { title: 'BravoCuts', desc: 'ระบบจองคิวออนไลน์สำหรับร้านตัดผม รองรับภาษาไทย/อังกฤษสำหรับลูกค้าต่างชาติ' } },
  { id: 'restaurant', mock: 'pos', tags: ['Web app', 'Dashboard'],
    en: { title: 'Restaurant system', desc: 'Orders, tables and daily sales in one place.' },
    th: { title: 'ระบบจัดการร้านอาหาร', desc: 'รับออร์เดอร์ จัดการโต๊ะ และสรุปยอดขายรายวันในที่เดียว' } },
  { id: 'attendance', mock: 'attendance', tags: ['Web app', 'Reports'],
    en: { title: 'Student attendance', desc: 'Online check-in for classes with attendance reports.' },
    th: { title: 'ระบบเช็คชื่อนักเรียน', desc: 'เช็คชื่อเข้าเรียนออนไลน์ พร้อมรายงานการเข้าเรียน' } },
  { id: 'dashboard', mock: 'dashboard', tags: ['Dashboard', 'Data'],
    en: { title: 'Executive dashboard', desc: 'Expense reports for two companies that executives can read at a glance.' },
    th: { title: 'แดชบอร์ดผู้บริหาร', desc: 'รายงานค่าใช้จ่ายของ 2 บริษัท ให้ผู้บริหารดูสรุปได้ทันที' } },
  { id: 'happysave', image: happySave, tags: ['Flutter', 'Mobile'],
    en: { title: 'Happy Save app', desc: 'Mobile app to record income and expenses with photos.' },
    th: { title: 'แอป Happy Save', desc: 'แอปบันทึกรายรับ-รายจ่ายพร้อมรูปภาพ' } },
  { id: 'nebula', image: webInternship, tags: ['React', 'Internship'],
    en: { title: 'NFT marketplace (internship)', desc: 'Front-end for a website where users buy and sell NFT cards.' },
    th: { title: 'เว็บซื้อขาย NFT (ฝึกงาน)', desc: 'พัฒนาหน้าเว็บสำหรับซื้อขายการ์ด NFT' } },
];

export const certificates = [
  { image: certDev, en: 'Certificate — Developer', th: 'ใบประกาศ — Developer' },
  { image: certBigData, en: 'Big Data Experience — Software Park Thailand', th: 'Big Data Experience — Software Park Thailand' },
];

export const tech = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Node.js', 'Flutter', 'Dart', 'Supabase', 'Firebase', 'MySQL', 'MongoDB', 'SQL', 'Git', 'Postman', 'Power BI'];

export const experience = [
  { years: '2026 — Now',
    en: { role: 'Admin Officer', org: 'Quiet Force', desc: 'Manage documents and expenses for two companies; built a web dashboard so executives can track company data.' },
    th: { role: 'Admin Officer', org: 'Quiet Force', desc: 'ดูแลเอกสารและค่าใช้จ่ายของ 2 บริษัท และพัฒนาเว็บแดชบอร์ดให้ผู้บริหารติดตามข้อมูล' } },
  { years: '2024 — Now',
    en: { role: 'Freelance Web & App Developer', org: 'Self-employed', desc: 'Build websites and apps for clients end to end — barbershop, restaurant and student attendance systems.' },
    th: { role: 'ฟรีแลนซ์ Web & App Developer', org: 'รับงานอิสระ', desc: 'รับพัฒนาเว็บและแอปตั้งแต่ต้นจนจบ — ระบบร้านตัดผม ร้านอาหาร และเช็คชื่อนักเรียน' } },
  { years: '2024 — 2026',
    en: { role: 'IT Operations & System Support', org: 'Southern Information Technology Co., Ltd.', desc: 'Tier 1–2 support, monitored 170+ CCTV cameras 24/7, and kept LAN/Wi-Fi healthy.' },
    th: { role: 'IT Operations & System Support', org: 'Southern Information Technology Co., Ltd.', desc: 'ซัพพอร์ตผู้ใช้ระดับ 1–2 ดูแลกล้อง CCTV กว่า 170 ตัวตลอด 24 ชม. และดูแลเครือข่าย LAN/Wi-Fi' } },
  { years: '2023',
    en: { role: 'Front-end Developer Intern', org: 'Nebula Venture Co., Ltd.', desc: 'Built web interfaces with HTML, CSS, JavaScript and React.' },
    th: { role: 'นักศึกษาฝึกงาน Front-end Developer', org: 'Nebula Venture Co., Ltd.', desc: 'พัฒนาหน้าเว็บด้วย HTML, CSS, JavaScript และ React' } },
  { years: '2018 — 2024',
    en: { role: 'B.Eng. Computer Engineering', org: 'Prince of Songkla University, Phuket', desc: '' },
    th: { role: 'วศ.บ. วิศวกรรมคอมพิวเตอร์', org: 'มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต', desc: '' } },
];

export const skills = {
  en: [
    ['IT Support & Infrastructure', 'Hardware/software troubleshooting, network & CCTV monitoring, daily IT operations'],
    ['Programming & Databases', 'HTML, CSS, JavaScript, React, Flutter/Dart, SQL, MongoDB, Supabase'],
    ['IT Documentation', 'Technical records, system documentation, IT compliance'],
    ['Soft skills', 'Service-minded, clear communication, teamwork, problem-solving'],
  ],
  th: [
    ['IT Support & Infrastructure', 'แก้ปัญหา Hardware/Software, มอนิเตอร์ CCTV, ดูแลงานระบบไอที'],
    ['Programming & Databases', 'HTML, CSS, JavaScript, React, Flutter/Dart, SQL, MongoDB, Supabase'],
    ['IT Documentation', 'บันทึกข้อมูลทางเทคนิค, ทำเอกสารระบบ, ดูแลมาตรฐานไอที'],
    ['Soft skills', 'ใจรักบริการ, สื่อสารและประสานงานดี, ทำงานเป็นทีม, ชอบแก้ปัญหา'],
  ],
};

export const t = {
  en: {
    nav: { home: 'Home', about: 'About', portfolio: 'Portfolio', contact: 'Contact' },
    welcome: ['Welcome to my', 'Portfolio'],
    avail: 'Available for freelance projects',
    roles: ['Developer', 'Freelancer', 'IT Support'],
    heroP: 'Freelance developer in Phuket. I design and build booking sites, shop systems and dashboards for small businesses — and support them after launch.',
    cta1: 'View projects', cta2: 'Contact me',
    float: ['CCTV monitored', 'client systems'],
    aboutEyebrow: 'About me', aboutTitle: 'Turning ideas into working products',
    hello: "Hello, I'm",
    aboutP: 'Computer Engineer from Prince of Songkla University, Phuket. I specialise in IT operations and technical support — I have managed a network of 170+ CCTV cameras — and I build web and mobile apps for businesses as a freelancer.',
    stats: ['Projects', 'Certificates', 'Years in IT'],
    expTitle: 'Experience', skillsTitle: 'Skills & expertise',
    pfEyebrow: 'Portfolio showcase', pfTitle: "Things I've built", pfSub: 'Real client projects, certificates and the tools I use every day.',
    tabs: ['Projects', 'Certificates', 'Tech stack'],
    live: 'Live site', preview: 'Preview',
    ctEyebrow: 'Contact me', ctTitle: 'Have a project in mind?', ctSub: "Tell me about your business — I'll get back to you within 24 hours.",
    form: { title: 'Get in touch', sub: 'Send me a message.', name: 'Your name', email: 'Email', subject: 'Subject', message: 'Tell me about your project', send: 'Send message', sending: 'Sending…', ok: 'Message sent — thank you!', fail: 'Could not send. Please email me directly.' },
    connect: 'Connect with me', connectSub: 'Prefer chat? Pick a channel.',
    footer: 'Phuket, Thailand',
  },
  th: {
    nav: { home: 'หน้าแรก', about: 'เกี่ยวกับ', portfolio: 'ผลงาน', contact: 'ติดต่อ' },
    welcome: ['ยินดีต้อนรับสู่', 'Portfolio'],
    avail: 'พร้อมรับงานฟรีแลนซ์',
    roles: ['Developer', 'Freelancer', 'IT Support'],
    heroP: 'นักพัฒนาฟรีแลนซ์ในภูเก็ต ออกแบบและสร้างเว็บจองคิว ระบบร้านค้า และแดชบอร์ดให้ธุรกิจขนาดเล็ก พร้อมดูแลหลังส่งมอบ',
    cta1: 'ดูผลงาน', cta2: 'ติดต่อฉัน',
    float: ['กล้อง CCTV ที่ดูแล', 'ระบบให้ลูกค้า'],
    aboutEyebrow: 'เกี่ยวกับฉัน', aboutTitle: 'เปลี่ยนไอเดียให้เป็นระบบที่ใช้งานได้จริง',
    hello: 'สวัสดีครับ ผม',
    aboutP: 'ซูเฟียน มะเซ็ง (โอม) วิศวกรคอมพิวเตอร์ ม.สงขลานครินทร์ ภูเก็ต ถนัดงาน IT Operations และ Technical Support เคยดูแลกล้อง CCTV กว่า 170 ตัว และรับพัฒนาเว็บและแอปให้ธุรกิจแบบฟรีแลนซ์',
    stats: ['ผลงาน', 'ใบประกาศ', 'ปีในสายไอที'],
    expTitle: 'ประสบการณ์', skillsTitle: 'ทักษะและความเชี่ยวชาญ',
    pfEyebrow: 'ผลงาน', pfTitle: 'สิ่งที่ผมสร้าง', pfSub: 'ผลงานจริงให้ลูกค้า ใบประกาศ และเครื่องมือที่ใช้ทุกวัน',
    tabs: ['ผลงาน', 'ใบประกาศ', 'เครื่องมือ'],
    live: 'เว็บจริง', preview: 'ภาพจำลอง',
    ctEyebrow: 'ติดต่อ', ctTitle: 'มีโปรเจกต์ในใจไหม?', ctSub: 'เล่าเรื่องธุรกิจของคุณให้ฟัง แล้วผมจะตอบกลับภายใน 24 ชั่วโมง',
    form: { title: 'ส่งข้อความ', sub: 'กรอกข้อมูลด้านล่าง', name: 'ชื่อของคุณ', email: 'อีเมล', subject: 'หัวข้อ', message: 'รายละเอียดโปรเจกต์', send: 'ส่งข้อความ', sending: 'กำลังส่ง…', ok: 'ส่งข้อความแล้ว ขอบคุณครับ!', fail: 'ส่งไม่สำเร็จ กรุณาอีเมลหาผมโดยตรง' },
    connect: 'ช่องทางอื่น', connectSub: 'สะดวกแชท? เลือกช่องทางได้เลย',
    footer: 'ภูเก็ต ประเทศไทย',
  },
};
