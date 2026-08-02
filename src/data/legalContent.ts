export interface LegalSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDocument {
  slug: string;
  title: string;
  shortDescription: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const legalDocuments: LegalDocument[] = [
  {
    slug: "privacy-policy",
    title: "Website Privacy Policy",
    shortDescription:
      "Explains what information Tempo's website collects, how it is used, and the choices visitors have.",
    effectiveDate: "August 1, 2026",
    lastUpdated: "August 1, 2026",
    sections: [
      {
        heading: "Welcome",
        paragraphs: [
          'TEMPO Applied Behavior Analysis, PLLC ("TEMPO," "we," "our," or "us") is committed to protecting your privacy and earning your trust.',
          'This Website Privacy Policy explains how we collect, use, disclose, and protect information when you visit www.tempoaba.com ("Website").',
          "This policy applies only to information collected through our Website. If you become a client of TEMPO, the collection, use, and protection of your Protected Health Information is governed by our Notice of Privacy Practices, which is available separately.",
          "By using our Website, you agree to the practices described in this Privacy Policy.",
        ],
      },
      {
        heading: "Information We Collect",
        paragraphs: ["Depending on how you interact with our Website, we may collect the following information."],
      },
      {
        heading: "Information You Voluntarily Provide",
        paragraphs: ["You may choose to provide information when you:"],
        bullets: [
          "Complete a contact form",
          "Request additional information",
          "Schedule a consultation",
          "Subscribe to updates (if offered)",
          "Communicate with us by email",
        ],
      },
      {
        paragraphs: ["This information may include:"],
        bullets: ["Name", "Email address", "Telephone number", "General information about the services you are seeking"],
      },
      {
        paragraphs: [
          "Please do not include confidential medical or highly sensitive personal information when using general contact forms unless the form specifically states that it is secure and HIPAA compliant.",
        ],
      },
      {
        heading: "Information Collected Automatically",
        paragraphs: [
          "Like many websites, we automatically collect certain technical information to help improve the Website and better understand how visitors use it.",
          "This may include:",
        ],
        bullets: [
          "IP address",
          "Browser type",
          "Device type",
          "Operating system",
          "Pages viewed",
          "Date and time of your visit",
          "Referring website",
          "General geographic region",
          "Website usage statistics",
        ],
      },
      {
        paragraphs: [
          "This information is generally collected in an aggregated format and is not used to personally identify you.",
        ],
      },
      {
        heading: "Cookies and Similar Technologies",
        paragraphs: ["Our Website may use cookies and similar technologies to:"],
        bullets: [
          "Improve Website performance",
          "Remember user preferences",
          "Analyze Website traffic",
          "Enhance the user experience",
        ],
      },
      {
        paragraphs: [
          "Most web browsers allow you to manage or disable cookies through your browser settings.",
          "Please note that disabling cookies may affect certain Website features.",
        ],
      },
      {
        heading: "How We Use Information",
        paragraphs: ["Information collected through our Website may be used to:"],
        bullets: [
          "Respond to inquiries",
          "Schedule consultations",
          "Communicate with prospective clients",
          "Improve Website functionality",
          "Monitor Website performance",
          "Maintain Website security",
          "Comply with legal obligations",
        ],
      },
      {
        paragraphs: [
          "We only collect information that is reasonably necessary to operate and improve our Website and services.",
        ],
      },
      {
        heading: "Analytics",
        paragraphs: [
          "TEMPO may use analytics tools, such as Google Analytics or similar services, to better understand how visitors interact with our Website.",
          "Analytics services help us evaluate:",
        ],
        bullets: [
          "Which pages are most frequently visited",
          "How visitors navigate the Website",
          "Overall Website performance",
        ],
      },
      {
        paragraphs: ["These services may use cookies or similar technologies to collect information."],
      },
      {
        heading: "Third-Party Services",
        paragraphs: [
          "To support our Website and business operations, we may work with trusted third-party service providers, including:",
        ],
        bullets: [
          "Website hosting providers",
          "Website developers",
          "Analytics providers",
          "Scheduling platforms",
          "Secure contact form providers",
          "Email communication services",
        ],
      },
      {
        paragraphs: [
          "These providers are permitted to access information only as necessary to perform services on our behalf and are expected to maintain appropriate safeguards.",
        ],
      },
      {
        heading: "Links to Other Websites",
        paragraphs: [
          "Our Website may include links to third-party websites for your convenience or additional information.",
          "TEMPO is not responsible for the privacy practices, content, or security of external websites. We encourage you to review the privacy policies of any website you visit.",
        ],
      },
      {
        heading: "Children's Privacy",
        paragraphs: [
          "Our Website is intended for parents, guardians, caregivers, educators, and other adults seeking information about our services.",
          "We do not knowingly collect personal information directly from children through our Website.",
          "If you believe a child has provided personal information through our Website, please contact us so we may remove the information when appropriate.",
        ],
      },
      {
        heading: "Data Security",
        paragraphs: [
          "Protecting your information is important to us.",
          "TEMPO maintains reasonable administrative, technical, and physical safeguards designed to protect information collected through our Website from unauthorized access, disclosure, alteration, or destruction.",
          "While we strive to protect your information, no method of internet transmission or electronic storage can be guaranteed to be completely secure.",
        ],
      },
      {
        heading: "Email Communications",
        paragraphs: [
          "If you contact us by email, please understand that standard email may not be a secure method of communication.",
          "For your privacy, we recommend avoiding the transmission of confidential medical information through unsecured email unless instructed otherwise by a member of our team.",
        ],
      },
      {
        heading: "Your Choices",
        paragraphs: ["You may choose to:"],
        bullets: [
          "Decline to provide personal information through our Website.",
          "Disable cookies through your browser settings.",
          "Contact us to update information you have voluntarily provided.",
        ],
      },
      {
        paragraphs: [
          "Please note that choosing not to provide certain information may limit our ability to respond to your request.",
        ],
      },
      {
        heading: "Changes to This Privacy Policy",
        paragraphs: [
          "TEMPO may update this Website Privacy Policy from time to time to reflect changes in technology, legal requirements, or our business practices.",
          "The revised policy will be posted on this page with an updated effective date.",
          "We encourage you to review this page periodically.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "If you have questions about this Website Privacy Policy, please contact:",
          "TEMPO Applied Behavior Analysis, PLLC",
          "Cesia Maldonado, Privacy Officer",
          "TEMPO Applied Behavior Analysis, PLLC",
          "Phone: 929-810-8648",
          "Email: cmaldonado@tempoaba.com",
          "Website: www.tempoaba.com",
          "© 2026 TEMPO Applied Behavior Analysis, PLLC. All rights reserved.",
        ],
      },
    ],
  },
  {
    slug: "notice-of-privacy-practices",
    title: "Notice of Privacy Practices",
    shortDescription:
      "Explains TEMPO's HIPAA obligations and your rights regarding your protected health information.",
    effectiveDate: "August 1, 2026",
    lastUpdated: "August 1, 2026",
    sections: [
      {
        heading: "Our Commitment to Your Privacy",
        paragraphs: [
          'At TEMPO Applied Behavior Analysis, PLLC ("TEMPO," "we," "our," or "us"), protecting your privacy is an essential part of the care we provide. We understand that the information you share with us is personal, and we are committed to treating it with the highest level of confidentiality, respect, and professionalism.',
          'This Notice of Privacy Practices explains how we may use and disclose your Protected Health Information ("PHI"), your rights regarding your information, and our responsibilities under the Health Insurance Portability and Accountability Act (HIPAA) and other applicable laws.',
          "Please read this notice carefully. If you have any questions, we are happy to discuss it with you.",
        ],
      },
      {
        heading: "Our Responsibilities",
        paragraphs: ["TEMPO is required by law to:"],
        bullets: [
          "Protect the privacy and security of your Protected Health Information (PHI).",
          "Provide you with this Notice of Privacy Practices.",
          "Follow the privacy practices described in this notice.",
          "Notify you if a breach occurs that may have compromised the privacy or security of your information.",
          "Comply with all applicable federal and state privacy laws.",
        ],
      },
      {
        paragraphs: [
          "Our commitment to privacy extends to every interaction we have with the individuals and families we serve.",
        ],
      },
      {
        heading: "How We May Use and Share Your Information",
        paragraphs: [
          "Federal law allows us to use and disclose your health information for certain purposes without obtaining your written authorization.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "We use your health information to provide high-quality Applied Behavior Analysis (ABA) services and coordinate your care.",
          "Examples include:",
        ],
        bullets: [
          "Conducting assessments and evaluations.",
          "Developing individualized treatment plans.",
          "Supervising Registered Behavior Technicians (RBTs) and Board Certified Behavior Analysts (BCBAs).",
          "Coordinating care with physicians, psychologists, speech-language pathologists, occupational therapists, educators, and other healthcare professionals involved in your care.",
          "Communicating with parents, guardians, or legally authorized representatives regarding treatment.",
        ],
      },
      {
        heading: "Payment",
        paragraphs: ["We may use or disclose your information to obtain payment for services provided.", "Examples include:"],
        bullets: [
          "Verifying insurance eligibility and benefits.",
          "Obtaining prior authorizations.",
          "Submitting claims to insurance companies.",
          "Responding to insurance requests for documentation.",
          "Collecting payment for services rendered.",
        ],
      },
      {
        heading: "Healthcare Operations",
        paragraphs: ["We may use your information to support the operation and improvement of our practice.", "Examples include:"],
        bullets: [
          "Quality assurance and program evaluation.",
          "Staff training and supervision.",
          "Clinical consultation.",
          "Licensing and accreditation activities.",
          "Compliance reviews and audits.",
          "Risk management.",
          "Business planning and administrative activities.",
        ],
      },
      {
        paragraphs: [
          "Whenever possible, we limit access to your information to those who need it to perform their responsibilities.",
        ],
      },
      {
        heading: "Other Situations Where We May Share Information",
        paragraphs: ["We may disclose your information when permitted or required by law, including:"],
        bullets: [
          "Reporting suspected child abuse or neglect.",
          "Preventing or reducing a serious threat to health or safety.",
          "Public health reporting.",
          "Health oversight activities.",
          "Court orders or legal proceedings.",
          "Certain law enforcement requests.",
          "Workers' compensation claims.",
          "Coroners, medical examiners, or funeral directors, when applicable.",
          "As otherwise required by federal or New York State law.",
        ],
      },
      {
        heading: "Uses That Require Your Written Authorization",
        paragraphs: [
          "Except as described in this notice, we will obtain your written authorization before using or disclosing your Protected Health Information.",
          "Examples include:",
        ],
        bullets: ["Marketing communications.", "Sale of Protected Health Information.", "Certain disclosures not otherwise permitted by law."],
      },
      {
        paragraphs: [
          "You may revoke your authorization at any time by submitting a written request, except to the extent that we have already relied on your authorization.",
        ],
      },
      {
        heading: "Your Rights",
        paragraphs: ["You have important rights regarding your health information."],
      },
      {
        heading: "Right to Access",
        paragraphs: ["You have the right to inspect and obtain a copy of your health records, subject to applicable legal requirements."],
      },
      {
        heading: "Right to Request an Amendment",
        paragraphs: [
          "If you believe your health information is incomplete or inaccurate, you may request that we amend your records.",
          "While we may deny certain requests as permitted by law, we will provide a written explanation if we do so.",
        ],
      },
      {
        heading: "Right to Request Confidential Communications",
        paragraphs: [
          "You may request that we communicate with you in a specific way or at a specific location.",
          "For example, you may ask us to contact you only by email, only by phone, or at a different mailing address.",
          "Whenever reasonable, we will accommodate these requests.",
        ],
      },
      {
        heading: "Right to Request Restrictions",
        paragraphs: [
          "You may ask us to limit how we use or disclose your information.",
          "Although we are not required to agree to every request, we will carefully consider each one.",
        ],
      },
      {
        heading: "Right to Receive an Accounting of Disclosures",
        paragraphs: [
          "You have the right to request a list of certain disclosures we have made of your Protected Health Information, as permitted by law.",
        ],
      },
      {
        heading: "Right to Receive a Paper Copy",
        paragraphs: [
          "You may request a paper copy of this Notice of Privacy Practices at any time, even if you previously agreed to receive it electronically.",
        ],
      },
      {
        heading: "Right to Designate a Personal Representative",
        paragraphs: ["You may authorize another individual to receive information or make decisions on your behalf, when permitted by law"],
      },
      {
        heading: "Electronic Communication",
        paragraphs: [
          "TEMPO recognizes that many families prefer to communicate electronically.",
          "While we take reasonable steps to protect your privacy, standard email and text messaging may not always be secure. We encourage families to avoid sending sensitive medical or personal information through unsecured methods unless instructed otherwise.",
          "When available, we encourage the use of secure, HIPAA-compliant communication platforms.",
        ],
      },
      {
        heading: "Changes to This Notice",
        paragraphs: [
          "TEMPO reserves the right to revise this Notice of Privacy Practices at any time.",
          "Any updates will apply to all Protected Health Information maintained by TEMPO and will be posted on our website. Updated copies will also be available upon request.",
        ],
      },
      {
        heading: "Questions or Privacy Concerns",
        paragraphs: [
          "If you have questions about this notice or believe your privacy rights have been violated, please contact:",
          "Cesia Maldonado, Privacy Officer",
          "TEMPO Applied Behavior Analysis, PLLC",
          "Phone: 929-810-8648",
          "Email: cmaldonado@tempoaba.com",
          "You may also file a complaint with the U.S. Department of Health and Human Services, Office for Civil Rights.",
          "TEMPO will never retaliate against you for filing a complaint or exercising your privacy rights.",
        ],
      },
      {
        heading: "Website Privacy",
        paragraphs: [
          "If you contact TEMPO through our website, please avoid submitting confidential medical information through general contact forms unless the form specifically states that it is secure and HIPAA compliant.",
          "Our website may collect limited technical information—such as browser type, device information, IP address, and website usage statistics—to improve website functionality and user experience. This information is used only for website administration and analytics unless you voluntarily provide identifying information through a secure communication method.",
        ],
      },
      {
        paragraphs: ["© 2026 TEMPO Applied Behavior Analysis, PLLC. All rights reserved."],
      },
    ],
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    shortDescription:
      "Sets out the rules for using Tempo's website, including intellectual property, acceptable use, and limits on liability.",
    effectiveDate: "August 2, 2026",
    lastUpdated: "August 2, 2026",
    sections: [
      {
        heading: "Welcome",
        paragraphs: [
          'Welcome to the website of TEMPO Applied Behavior Analysis, PLLC ("TEMPO," "we," "our," or "us").',
          'By accessing or using www.tempoaba.com ("Website"), you agree to be bound by these Terms & Conditions. If you do not agree with these terms, please discontinue use of the Website.',
        ],
      },
      {
        heading: "Purpose of This Website",
        paragraphs: [
          "Our Website is intended to provide general information about TEMPO, our services, and Applied Behavior Analysis (ABA).",
          "The information provided is for educational and informational purposes only and should not be considered medical, psychological, behavioral, or legal advice.",
          "Use of this Website does not establish a provider-client relationship with TEMPO.",
        ],
      },
      {
        heading: "No Emergency Services",
        paragraphs: [
          "TEMPO does not provide emergency medical or crisis intervention services through this Website.",
          "If you or someone else is experiencing a medical emergency, call 911 immediately or go to the nearest emergency department.",
        ],
      },
      {
        heading: "Intellectual Property",
        paragraphs: [
          "Unless otherwise noted, all content on this Website—including text, graphics, logos, photographs, icons, videos, downloadable resources, and design elements—is the property of TEMPO Applied Behavior Analysis, PLLC and is protected by applicable copyright, trademark, and intellectual property laws.",
          "You may view, download, or print materials for your personal, non-commercial use only.",
          "You may not reproduce, modify, distribute, publish, or create derivative works without prior written permission from TEMPO.",
        ],
      },
      {
        heading: "Acceptable Use",
        paragraphs: ["You agree not to:"],
        bullets: [
          "Use the Website for unlawful purposes.",
          "Attempt to gain unauthorized access to the Website or its systems.",
          "Upload malicious software or harmful code.",
          "Interfere with the Website's functionality or security.",
          "Misrepresent your identity when communicating with TEMPO.",
        ],
      },
      {
        heading: "Accuracy of Information",
        paragraphs: [
          "We strive to ensure that the information on our Website is accurate and current.",
          "However, healthcare information changes over time, and we cannot guarantee that all content will always be complete, accurate, or up to date.",
          "TEMPO reserves the right to modify Website content without prior notice.",
        ],
      },
      {
        heading: "Third-Party Links",
        paragraphs: [
          "Our Website may include links to third-party websites for your convenience.",
          "TEMPO does not control or endorse the content, products, or services provided by third-party websites and is not responsible for their privacy practices or content.",
        ],
      },
      {
        heading: "Disclaimer of Warranties",
        paragraphs: [
          'This Website is provided on an "as is" and "as available" basis.',
          "TEMPO makes no warranties, express or implied, regarding the availability, accuracy, reliability, or completeness of Website content.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          "To the fullest extent permitted by law, TEMPO shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of, or inability to use, this Website.",
        ],
      },
      {
        heading: "Governing Law",
        paragraphs: [
          "These Terms & Conditions are governed by the laws of the State of New York, without regard to its conflict of law principles.",
        ],
      },
      {
        heading: "Changes to These Terms",
        paragraphs: [
          "TEMPO may update these Terms & Conditions at any time.",
          "Updated versions will be posted on this page with a revised effective date.",
          "Your continued use of the Website constitutes acceptance of any revisions.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "Questions regarding these Terms & Conditions may be directed to:",
          "TEMPO Applied Behavior Analysis, PLLC",
          "Email: cmartinez@tempoaba.com and ikim@tempoaba.com",
          "Website: www.tempoaba.com",
          "© 2026 TEMPO Applied Behavior Analysis, PLLC. All rights reserved.",
        ],
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility Statement",
    shortDescription:
      "Describes Tempo's commitment to an accessible website and how to request help or alternative formats.",
    effectiveDate: "August 2, 2026",
    lastUpdated: "August 2, 2026",
    sections: [
      {
        paragraphs: [
          'At TEMPO Applied Behavior Analysis, PLLC ("TEMPO," "we," "our," or "us"), we believe every individual deserves equal access to information and services.',
          "We are committed to providing a website that is accessible to all users, including individuals with disabilities. We strive to design and maintain our website in accordance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA whenever reasonably possible.",
          "Our ongoing efforts include improving website navigation, readability, compatibility with assistive technologies, and overall user experience.",
          "If you experience difficulty accessing any part of our Website or need information in an alternative format, we encourage you to contact us.",
          "We value your feedback and will make reasonable efforts to improve accessibility.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "TEMPO Applied Behavior Analysis, PLLC",
          "Email: cmartinez@tempoaba.com and ikim@tempoaba.com",
          "Website: www.tempoaba.com",
          "© 2026 TEMPO Applied Behavior Analysis, PLLC. All rights reserved.",
        ],
      },
    ],
  },
  {
    slug: "nondiscrimination",
    title: "Nondiscrimination Statement",
    shortDescription:
      "States Tempo's commitment to nondiscrimination and inclusive, respectful care for every individual and family.",
    effectiveDate: "August 2, 2026",
    lastUpdated: "August 2, 2026",
    sections: [
      {
        paragraphs: [
          'At TEMPO Applied Behavior Analysis, PLLC ("TEMPO," "we," "our," or "us"), we believe every individual deserves to be treated with dignity, respect, and compassion.',
          "TEMPO complies with all applicable federal and New York State civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, sex, religion, gender identity, gender expression, sexual orientation, marital status, veteran status, or any other characteristic protected by law.",
          "We are committed to creating an inclusive environment where every individual and family feels welcomed, valued, and respected.",
          "Reasonable accommodations and language assistance services are available upon request.",
          "If you believe you have experienced discrimination while receiving services from TEMPO, please contact us so we may address your concerns promptly and respectfully.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "Questions regarding these Terms & Conditions may be directed to:",
          "TEMPO Applied Behavior Analysis, PLLC",
          "Email: cmartinez@tempoaba.com and ikim@tempoaba.com",
          "Website: www.tempoaba.com",
          "© 2026 TEMPO Applied Behavior Analysis, PLLC. All rights reserved.",
        ],
      },
    ],
  },
  {
    slug: "text-messaging",
    title: "SMS and Text Messaging Policy",
    shortDescription: "Explains when and how Tempo may text clients, what texts are used for, and how to opt out.",
    effectiveDate: "August 2, 2026",
    lastUpdated: "August 2, 2026",
    sections: [
      {
        paragraphs: [
          'TEMPO Applied Behavior Analysis, PLLC ("TEMPO," "we," "our," or "us") may communicate with clients and prospective clients by text message when appropriate and with the recipient\'s consent.',
          "Text messages may be used for:",
        ],
        bullets: [
          "Appointment reminders",
          "Scheduling or rescheduling appointments",
          "Service updates",
          "General administrative communication",
          "Requests to contact our office",
        ],
      },
      {
        paragraphs: [
          "Text messaging is not intended for emergencies or urgent clinical concerns.",
          "Because text messaging is not always a secure method of communication, we ask that you avoid sending confidential medical information, insurance information, or other sensitive personal information by text unless specifically instructed to do so through a secure platform.",
          "Message frequency may vary.",
          "Message and data rates may apply based on your mobile carrier.",
          "You may opt out of receiving text messages at any time by replying STOP or by contacting our office.",
          "For assistance, reply HELP or contact TEMPO directly.",
        ],
      },
      {
        heading: "Contact Information",
        paragraphs: [
          "Questions regarding these Terms & Conditions may be directed to:",
          "TEMPO Applied Behavior Analysis, PLLC",
          "Email: cmartinez@tempoaba.com and ikim@tempoaba.com",
          "Website: www.tempoaba.com",
          "© 2026 TEMPO Applied Behavior Analysis, PLLC. All rights reserved.",
        ],
      },
    ],
  },
  {
    slug: "telehealth",
    title: "Telehealth Policy",
    shortDescription: "Covers how Tempo delivers telehealth ABA services, session expectations, privacy, and emergencies.",
    effectiveDate: "August 2, 2026",
    lastUpdated: "August 2, 2026",
    sections: [
      {
        paragraphs: [
          'TEMPO Applied Behavior Analysis, PLLC ("TEMPO," "we," "our," or "us") may provide telehealth services when clinically appropriate, requested by the family, and permitted under applicable federal and New York State laws and payer requirements.',
          "Telehealth services allow certain ABA services to be delivered using secure, HIPAA-compliant technology while maintaining the same commitment to quality, collaboration, and individualized care.",
        ],
      },
      {
        heading: "Preparing for Your Appointment",
        paragraphs: ["To help ensure a successful telehealth session, we ask that families:"],
        bullets: [
          "Participate from a quiet, private location whenever possible.",
          "Use a reliable internet connection and a compatible device.",
          "Minimize distractions during the session.",
          "Ensure a parent or caregiver is available when appropriate.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "TEMPO uses HIPAA-compliant technology to protect the confidentiality of telehealth sessions.",
          "Families are encouraged to participate from a private location and to avoid recording sessions without prior written consent from all participants.",
        ],
      },
      {
        heading: "Emergencies",
        paragraphs: [
          "Telehealth services are not appropriate for medical or behavioral emergencies.",
          "If an emergency occurs, call 911 immediately or seek assistance from your nearest emergency department.",
        ],
      },
      {
        heading: "Consent",
        paragraphs: [
          "Prior to receiving telehealth services, clients or their legal representatives will be asked to review and sign a separate Telehealth Consent Form outlining the benefits, risks, limitations, and expectations of virtual care.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "TEMPO Applied Behavior Analysis, PLLC",
          "Email: cmartinez@tempoaba.com and ikim@tempoaba.com",
          "Website: www.tempoaba.com",
          "© 2026 TEMPO Applied Behavior Analysis, PLLC. All rights reserved.",
        ],
      },
    ],
  },
];

export const getLegalDocument = (slug?: string): LegalDocument | undefined =>
  legalDocuments.find((doc) => doc.slug === slug);
