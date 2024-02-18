// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'MaNikhilHo', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Emerging Threats - Logpoint',
          description:
            'Research with detection queries in Logpoint about past CVEs, Malware and Security Threats',
          link: 'https://www.logpoint.com/en/?s=nilaa+maharjan&post_type[]=any&fs=1&lang=en',
        },
        {
          title: 'Additional Independent Research',
          description:
            'Will continue to research and post about Life as a Security Researcher - Medium',
          link: 'https://medium.com/@realnikhiljyapu',
        }, 
      ],
    },
  },
  seo: {
    title: 'Portfolio of Nilaa Maharjan',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'manikhilho',
    twitter: 'manikhilho',
    instagram: 'manikhilho',
    medium: 'manikhilho',
    website: 'https://www.manikhilho.wordpress.com',
    phone: '',
    email: 'nilaamhr@gmail.com',
  },
  resume: {
    fileUrl:
      'Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Blue Teaming',
    'Threat Intelligence',
    'Digital Forensics',
    'SOC',
    'Incidence Response',
    'Red Teaming',
    'Penetration Testing',
    'Vulnerability Management',
    'Git',
    'Docker'
  ],
  experiences: [
    {
      company: 'SCHWARZ IT, Heilbronn, Germany',
      position: 'Security Analytics Engineer, Research and Development (Studentwerker)',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://it.schwarz/',
      tasks: 'Tuning existing Use Cases and Runbooks and creating new ones where necessary based on the needs of the company and threat model. <br/>- Researching and developing in-house malicious macro detection tool. <br/>- Incident Detection and Response.'
    },
    {
      company: 'LOGPOINT PVT. LTD, Lalitpur, Nepal',
      position: 'Associate Security Analytics Engineer',
      from: 'February 2022',
      to: 'March 2023',
      companyLink: 'https://www.logpoint.com/en/?s=nilaa+maharjan&post_type%5B%5D=any&fs=1&lang=en',
      tasks: 'Demonstrated research capabilities by analyzing, and creating content based on a wide variety of commodity and APT-based malware and techniques. <br/>- Led Emerging Threat Protection Services and published blogs, papers, and reports. <br/>- Interpret Threat intelligence’s IOCs and use them efficiently for creating and distributing alert queries, dashboards, and other data visualizations. <br/>- Translated research and analytical findings into security use. <br/>- Built defensive, highly customized security playbooks using the LogPoint SOAR platform. <br/>- Create technical documentation, end-of-the-year reports from Security Team, and research papers around the content deployed to the SIEM. <br/>-'
    },    
    {
      company: 'DIGITAL NETWORK SOLUTIONS (DNS), Kathmandu, Nepal',
      position: 'Application Security Engineer',
      from: 'August 2020',
      to: 'November 2021',
      companyLink: 'https://digitalnetwork.com.np/',
      tasks: 'Deployed and provided support for BIG-IP F5 Web Application Firewall at various reputed institutions. <br/>- Planned and implemented Network Design and Architecture for Network and Application Security (Firewall, DNS, DHCP, VPN, NAT Routing, Load Balancing, TCP/IP, Packet Capture, and Analysis). <br/>- Created reports drafts, Proof of Concepts, deployment scenarios, Support reports, and Root Cause Analysis Reports. <br/>- Deployed and provided support for Global Server Load Balancing (GSLB) services. <br/>- Provided customer support on HCI’s, Cloudflare DNS, and WAF for quick deployments and product support.'
    },
    {
      company: 'NCELL PVT. LTD, Kathmandu, Nepal',
      position: 'Information Security Analyst',
      from: 'December 2020',
      to: 'February 2021',
      companyLink: 'https://digitalnetwork.com.np/',
      tasks: 'Tested the company web portal for bugs, issues, and vulnerabilities and reported them immediately. <br/>-  Took a hands-on approach with network security operations. <br/>- Conducted System/Network scanning and auditing for monthly threat and security vulnerability assessment. <br/>- Ran, administered and reported on monthly Nessus scans, compliance checks, and general reports. <br/>- Created report drafts, Proof of Concepts, attack scenarios for the tests, and immediate disclosures. <br/>- Localized, set up, and ran Minimum Baseline Security Standard checks provided by the parent company. <br/>- Created awareness content as training materials for employees to be used within the entire corporation. <br/>- Identified and presented the performance of proactive all-source research to identify and characterize new threats, vulnerabilities, and risks to the customer security context.'
    },
    {
      company: 'EMINENCE WAYS, Kathmandu, Nepal',
      position: 'Web Security Researcher (Intern)',
      from: 'August 2019',
      to: 'November 2019',
    },
  ],
  certifications: [
    {
      name: 'Blue Team Level 1',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Saarland University',
      degree: 'Masters in Cybersecurity',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'London Metropolitan University',
      degree: 'Bachelors in Networking and IT Security',
      from: '2017',
      to: '2020',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@realnikhiljyapu', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
    enablePWA: true,
};

export default CONFIG;
