import { useEffect, useRef, useState } from "react";
import "@/App.css";

/* ===========================================================
   DOCUMATCH.EU — Premium B2B Lead Generation Landing Page
   - Single-component, vanilla feel, no external nav, no redirects
   - Form submits to Formspree (info@documatch.eu)
   - FR / ES / EN switcher + 9 sector tabs
   =========================================================== */

const LEX = {
  fr: {
    tagline: "Comparateur indépendant GED & DMS",
    nav_cta: "Analyse gratuite",
    badge: "Plateforme européenne · IA + Expertise humaine",
    hero_title: "Réduisez jusqu'à 70% le temps de gestion documentaire de vos équipes",
    hero_sub: "Documatch.eu compare gratuitement les meilleures solutions GED & DMS adaptées à votre entreprise.",
    bullet_1: "Analyse indépendante",
    bullet_2: "Résultats sous 48h",
    bullet_3: "Sans engagement",
    bullet_4: "Expertise européenne",
    social_proof: "+120 entreprises accompagnées",
    form_title: "Pré-analyse gratuite",
    form_sub: "Recevez votre rapport personnalisé en 48h",
    lbl_name: "Nom complet",
    lbl_company: "Société",
    lbl_email: "Email professionnel",
    lbl_phone: "Téléphone",
    ph_name: "Marie Dupont",
    ph_company: "Votre entreprise",
    ph_email: "marie@entreprise.com",
    ph_phone: "+33 6 12 34 56 78",
    gdpr: "J'accepte la politique de confidentialité et le traitement de mes données conformément au RGPD.",
    submit: "Recevoir mon analyse gratuite",
    submitting: "Envoi en cours…",
    privacy_note: "Aucun démarchage commercial. Données chiffrées, jamais revendues.",
    success_title: "Votre demande est en cours d'analyse",
    success_text: "Notre équipe prépare actuellement votre pré-analyse GED personnalisée. Vous serez recontacté sous 48 heures.",
    success_back: "Soumettre une autre demande",
    error_msg: "Une erreur est survenue. Merci de réessayer dans quelques instants.",
    trust_title: "La confiance des décideurs européens",
    sectors_title: "Une expertise adaptée à votre secteur",
    sectors_sub: "Sélectionnez votre activité pour personnaliser l'analyse",
    why_title: "Pourquoi les entreprises choisissent Documatch.eu",
    why_sub: "Une approche consultative, neutre et orientée résultats",
    why_1_t: "Analyse indépendante",
    why_1_d: "Aucun partenariat commercial avec les éditeurs. Notre recommandation est strictement neutre.",
    why_2_t: "Comparatif objectif",
    why_2_d: "Méthodologie d'évaluation rigoureuse sur 47 critères techniques et fonctionnels.",
    why_3_t: "Expertise métier",
    why_3_d: "Une équipe de consultants spécialisés par secteur (BTP, Santé, Juridique, Industrie…).",
    why_4_t: "Accompagnement humain",
    why_4_d: "Un interlocuteur dédié vous guide de l'analyse initiale jusqu'au choix final.",
    eco_title: "Écosystème GED & DMS",
    eco_sub: "Tous les piliers d'une gestion documentaire performante",
    eco_1_t: "GED documentaire",
    eco_1_d: "Centralisation, indexation et recherche full-text de l'ensemble de vos documents.",
    eco_2_t: "Workflows",
    eco_2_d: "Automatisation des circuits de validation, signature et approbation.",
    eco_3_t: "Conformité",
    eco_3_d: "Archivage à valeur probante, RGPD, normes sectorielles et coffre-fort numérique.",
    eco_4_t: "API & ERP",
    eco_4_d: "Connecteurs natifs vers Sage, SAP, Cegid, Salesforce et 200+ outils métiers.",
    ai_badge: "DOCUMATCH AI",
    ai_title: "Découvrez en moins de 5 minutes la solution GED adaptée à votre entreprise",
    ai_sub: "Analyse IA propriétaire combinée à l'expertise de nos consultants",
    ai_cta: "Démarrer l'analyse",
    test_title: "Ce qu'en disent les décideurs",
    test_1_q: "Documatch nous a fait gagner 3 mois de benchmark interne. La méthodologie est rigoureuse et les recommandations parfaitement alignées avec nos enjeux.",
    test_1_a: "Directrice des Systèmes d'Information · Groupe industriel, 850 collaborateurs",
    test_2_q: "L'approche indépendante change tout. Nous avons enfin un comparatif sans biais commercial pour challenger nos éditeurs.",
    test_2_a: "DAF · Cabinet d'expertise comptable, 12 associés",
    test_3_q: "Le rapport reçu en 48h était plus complet que les études payantes que nous avions commandées auparavant.",
    test_3_a: "Responsable Transformation Digitale · Promoteur immobilier, 320 collaborateurs",
    faq_title: "Questions fréquentes",
    faq: [
      {q: "Combien coûte Documatch ?", a: "Le service de pré-analyse et de comparaison est entièrement gratuit pour les entreprises. Documatch est rémunéré par les éditeurs uniquement après validation finale du client, sans impact sur la neutralité de la recommandation."},
      {q: "L'analyse est-elle vraiment indépendante ?", a: "Oui. Nous appliquons une grille d'évaluation propriétaire sur 47 critères mesurables. Aucune entente commerciale préalable ne peut influencer le classement. Notre crédibilité repose sur cette neutralité."},
      {q: "Quels logiciels comparez-vous ?", a: "Nous évaluons plus de 80 solutions GED/DMS européennes et internationales : DocuWare, M-Files, Therefore, Zeendoc, Open Bee, Alfresco, SharePoint, Box, Nuxeo, et bien d'autres."},
      {q: "Combien de temps prend l'analyse ?", a: "Vous recevez un premier rapport personnalisé sous 48 heures ouvrées. Un consultant vous contacte ensuite pour affiner les critères et présenter la short-list finale."},
      {q: "Est-ce adapté aux PME ?", a: "Absolument. 60% de nos accompagnements concernent des PME de 20 à 250 salariés. Notre méthodologie s'adapte à votre taille, votre budget et votre niveau de maturité digitale."}
    ],
    footer_desc: "Plateforme européenne indépendante d'aide à la décision pour la sélection de solutions GED, DMS et de gestion documentaire d'entreprise.",
    footer_gdpr: "Conforme RGPD · Données hébergées en Europe · ISO 27001",
    footer_cond: "Conditions d'utilisation",
    footer_priv: "Politique de confidentialité",
    footer_legal: "Mentions légales",
    footer_copy: "© 2026 Documatch.eu — Tous droits réservés",
    mobile_cta: "Analyse gratuite GED",
    legal_close: "Fermer",
  },
  es: {
    tagline: "Comparador independiente GED & DMS",
    nav_cta: "Análisis gratuito",
    badge: "Plataforma europea · IA + Experiencia humana",
    hero_title: "Reduce hasta un 70% el tiempo de gestión documental de tus equipos",
    hero_sub: "Documatch.eu compara gratuitamente las mejores soluciones GED & DMS adaptadas a tu empresa.",
    bullet_1: "Análisis independiente",
    bullet_2: "Resultados en 48h",
    bullet_3: "Sin compromiso",
    bullet_4: "Experiencia europea",
    social_proof: "+120 empresas acompañadas",
    form_title: "Pre-análisis gratuito",
    form_sub: "Recibe tu informe personalizado en 48h",
    lbl_name: "Nombre completo",
    lbl_company: "Empresa",
    lbl_email: "Email profesional",
    lbl_phone: "Teléfono",
    ph_name: "María García",
    ph_company: "Tu empresa",
    ph_email: "maria@empresa.com",
    ph_phone: "+34 612 345 678",
    gdpr: "Acepto la política de privacidad y el tratamiento de mis datos conforme al RGPD.",
    submit: "Recibir mi análisis gratis",
    submitting: "Enviando…",
    privacy_note: "Sin prospección comercial. Datos cifrados, jamás revendidos.",
    success_title: "Tu solicitud está siendo analizada",
    success_text: "Nuestro equipo está preparando tu pre-análisis GED personalizado. Te contactaremos en un plazo de 48 horas.",
    success_back: "Enviar otra solicitud",
    error_msg: "Ha ocurrido un error. Por favor, inténtalo de nuevo en unos instantes.",
    trust_title: "La confianza de los decisores europeos",
    sectors_title: "Una experiencia adaptada a tu sector",
    sectors_sub: "Selecciona tu actividad para personalizar el análisis",
    why_title: "Por qué las empresas eligen Documatch.eu",
    why_sub: "Un enfoque consultivo, neutral y orientado a resultados",
    why_1_t: "Análisis independiente",
    why_1_d: "Sin acuerdos comerciales con los fabricantes. Nuestra recomendación es estrictamente neutral.",
    why_2_t: "Comparativa objetiva",
    why_2_d: "Metodología rigurosa de evaluación sobre 47 criterios técnicos y funcionales.",
    why_3_t: "Experiencia sectorial",
    why_3_d: "Un equipo de consultores especializados por sector (Construcción, Salud, Legal, Industria…).",
    why_4_t: "Acompañamiento humano",
    why_4_d: "Un interlocutor dedicado te guía desde el análisis inicial hasta la decisión final.",
    eco_title: "Ecosistema GED & DMS",
    eco_sub: "Todos los pilares de una gestión documental de alto rendimiento",
    eco_1_t: "GED documental",
    eco_1_d: "Centralización, indexación y búsqueda full-text de todos tus documentos.",
    eco_2_t: "Workflows",
    eco_2_d: "Automatización de circuitos de validación, firma y aprobación.",
    eco_3_t: "Cumplimiento",
    eco_3_d: "Archivo con valor probatorio, RGPD, normas sectoriales y caja fuerte digital.",
    eco_4_t: "API & ERP",
    eco_4_d: "Conectores nativos hacia Sage, SAP, Cegid, Salesforce y 200+ herramientas.",
    ai_badge: "DOCUMATCH AI",
    ai_title: "Descubre en menos de 5 minutos la solución GED adaptada a tu empresa",
    ai_sub: "Análisis IA propietario combinado con la experiencia de nuestros consultores",
    ai_cta: "Iniciar el análisis",
    test_title: "Lo que dicen los decisores",
    test_1_q: "Documatch nos hizo ganar 3 meses de benchmark interno. La metodología es rigurosa y las recomendaciones perfectamente alineadas con nuestros retos.",
    test_1_a: "Directora de Sistemas · Grupo industrial, 850 empleados",
    test_2_q: "El enfoque independiente lo cambia todo. Por fin tenemos una comparativa sin sesgo comercial para retar a nuestros proveedores.",
    test_2_a: "Director Financiero · Asesoría, 12 socios",
    test_3_q: "El informe recibido en 48h era más completo que estudios de pago que habíamos contratado antes.",
    test_3_a: "Responsable de Transformación Digital · Promotora inmobiliaria, 320 empleados",
    faq_title: "Preguntas frecuentes",
    faq: [
      {q: "¿Cuánto cuesta Documatch?", a: "El servicio de pre-análisis y comparación es totalmente gratuito para las empresas. Documatch se remunera con los fabricantes únicamente tras la validación final del cliente, sin impacto en la neutralidad."},
      {q: "¿El análisis es realmente independiente?", a: "Sí. Aplicamos una rúbrica propietaria sobre 47 criterios medibles. Ningún acuerdo comercial previo puede influir en la clasificación. Nuestra credibilidad descansa sobre esta neutralidad."},
      {q: "¿Qué softwares comparáis?", a: "Evaluamos más de 80 soluciones GED/DMS europeas e internacionales: DocuWare, M-Files, Therefore, Zeendoc, Open Bee, Alfresco, SharePoint, Box, Nuxeo, entre otras."},
      {q: "¿Cuánto tarda el análisis?", a: "Recibes un primer informe personalizado en 48 horas laborables. Un consultor te contacta después para afinar criterios y presentar la short-list final."},
      {q: "¿Es adecuado para PYMES?", a: "Absolutamente. El 60% de nuestros acompañamientos son PYMES de 20 a 250 empleados. Nuestra metodología se adapta a tu tamaño, presupuesto y madurez digital."}
    ],
    footer_desc: "Plataforma europea independiente de ayuda a la decisión para la selección de soluciones GED, DMS y gestión documental empresarial.",
    footer_gdpr: "Conforme RGPD · Datos alojados en Europa · ISO 27001",
    footer_cond: "Condiciones de uso",
    footer_priv: "Política de privacidad",
    footer_legal: "Avisos legales",
    footer_copy: "© 2026 Documatch.eu — Todos los derechos reservados",
    mobile_cta: "Análisis gratis GED",
    legal_close: "Cerrar",
  },
  en: {
    tagline: "Independent DMS & ECM comparator",
    nav_cta: "Free analysis",
    badge: "European platform · AI + Human expertise",
    hero_title: "Cut up to 70% of your team's document management time",
    hero_sub: "Documatch.eu compares the best DMS & ECM solutions tailored to your enterprise — for free.",
    bullet_1: "Independent analysis",
    bullet_2: "Results within 48h",
    bullet_3: "No commitment",
    bullet_4: "European expertise",
    social_proof: "+120 enterprises supported",
    form_title: "Free pre-analysis",
    form_sub: "Get your personalized report within 48h",
    lbl_name: "Full name",
    lbl_company: "Company",
    lbl_email: "Business email",
    lbl_phone: "Phone",
    ph_name: "Mary Johnson",
    ph_company: "Your company",
    ph_email: "mary@company.com",
    ph_phone: "+44 7700 900123",
    gdpr: "I agree to the privacy policy and the processing of my data in compliance with GDPR.",
    submit: "Get my free analysis",
    submitting: "Sending…",
    privacy_note: "No sales harassment. Encrypted data, never resold.",
    success_title: "Your request is being analyzed",
    success_text: "Our team is preparing your personalized DMS pre-analysis. You will be contacted within 48 hours.",
    success_back: "Submit another request",
    error_msg: "Something went wrong. Please try again in a few moments.",
    trust_title: "Trusted by European decision makers",
    sectors_title: "Expertise tailored to your industry",
    sectors_sub: "Select your activity to personalize the analysis",
    why_title: "Why companies choose Documatch.eu",
    why_sub: "A consultative, neutral and results-driven approach",
    why_1_t: "Independent analysis",
    why_1_d: "No commercial partnership with vendors. Our recommendation remains strictly neutral.",
    why_2_t: "Objective comparison",
    why_2_d: "Rigorous evaluation methodology covering 47 technical and functional criteria.",
    why_3_t: "Industry expertise",
    why_3_d: "A team of consultants specialized by sector (Construction, Healthcare, Legal, Industry…).",
    why_4_t: "Human guidance",
    why_4_d: "A dedicated advisor guides you from initial analysis to final decision.",
    eco_title: "DMS & ECM ecosystem",
    eco_sub: "All the pillars of high-performance document management",
    eco_1_t: "Document management",
    eco_1_d: "Centralization, indexing and full-text search across all your documents.",
    eco_2_t: "Workflows",
    eco_2_d: "Automation of validation, signature and approval circuits.",
    eco_3_t: "Compliance",
    eco_3_d: "Legally-binding archiving, GDPR, industry standards and digital vault.",
    eco_4_t: "API & ERP",
    eco_4_d: "Native connectors to Sage, SAP, Cegid, Salesforce and 200+ business tools.",
    ai_badge: "DOCUMATCH AI",
    ai_title: "Discover in under 5 minutes the DMS solution tailored to your enterprise",
    ai_sub: "Proprietary AI analysis combined with our consultants' expertise",
    ai_cta: "Start the analysis",
    test_title: "What decision makers say",
    test_1_q: "Documatch saved us 3 months of internal benchmarking. The methodology is rigorous and recommendations perfectly aligned with our challenges.",
    test_1_a: "CIO · Industrial group, 850 employees",
    test_2_q: "The independent approach changes everything. We finally have a bias-free comparison to challenge our vendors.",
    test_2_a: "CFO · Accounting firm, 12 partners",
    test_3_q: "The report received in 48h was more comprehensive than the paid studies we had commissioned before.",
    test_3_a: "Digital Transformation Lead · Real estate developer, 320 employees",
    faq_title: "Frequently asked questions",
    faq: [
      {q: "How much does Documatch cost?", a: "The pre-analysis and comparison service is completely free for enterprises. Documatch is compensated by vendors only after final client validation, with no impact on recommendation neutrality."},
      {q: "Is the analysis truly independent?", a: "Yes. We apply a proprietary scoring grid across 47 measurable criteria. No prior commercial agreement can influence the ranking. Our credibility relies on this neutrality."},
      {q: "Which software do you compare?", a: "We evaluate over 80 European and international DMS/ECM solutions: DocuWare, M-Files, Therefore, Zeendoc, Open Bee, Alfresco, SharePoint, Box, Nuxeo, and many more."},
      {q: "How long does the analysis take?", a: "You receive a first personalized report within 48 business hours. A consultant then contacts you to refine the criteria and present the final shortlist."},
      {q: "Is it suitable for SMEs?", a: "Absolutely. 60% of our engagements concern SMEs of 20 to 250 employees. Our methodology adapts to your size, budget and digital maturity."}
    ],
    footer_desc: "Independent European decision-making platform for selecting DMS, ECM and enterprise document management solutions.",
    footer_gdpr: "GDPR compliant · Data hosted in Europe · ISO 27001",
    footer_cond: "Terms of use",
    footer_priv: "Privacy policy",
    footer_legal: "Legal notice",
    footer_copy: "© 2026 Documatch.eu — All rights reserved",
    mobile_cta: "Free DMS analysis",
    legal_close: "Close",
  },
};

const SECTORS = {
  btp: { fr: "BTP", es: "Construcción", en: "Construction" },
  immo: { fr: "Immobilier", es: "Inmobiliaria", en: "Real Estate" },
  sante: { fr: "Santé", es: "Sanidad", en: "Healthcare" },
  compta: { fr: "Comptabilité", es: "Asesorías", en: "Accounting" },
  legal: { fr: "Juridique", es: "Legal", en: "Legal" },
  industrie: { fr: "Industrie", es: "Industria", en: "Manufacturing" },
  rh: { fr: "RH", es: "RRHH", en: "HR" },
  retail: { fr: "Retail", es: "Retail", en: "Retail" },
  transport: { fr: "Transport", es: "Transporte", en: "Logistics" },
};

const SECTOR_CONTENT = {
  btp: {
    title: {
      fr: "La gestion des factures sous-traitants sur papier ralentit vos chantiers",
      es: "La gestión de facturas de subcontratas en papel frena tus obras",
      en: "Paper-based subcontractor invoicing slows your construction sites",
    },
    sub: {
      fr: "Centralisez plans, devis et situations. Automatisez la validation des factures fournisseurs et sécurisez la conformité légale.",
      es: "Centraliza planos, presupuestos y certificaciones. Automatiza la validación de facturas y asegura el cumplimiento legal.",
      en: "Centralize blueprints, quotes and progress reports. Automate supplier invoice validation and secure legal compliance.",
    },
  },
  immo: {
    title: {
      fr: "Gagnez des jours de gestion sur vos dossiers de vente et de location",
      es: "Gana días en la gestión de tus expedientes de venta y alquiler",
      en: "Save days managing your sales and rental files",
    },
    sub: {
      fr: "Simplifiez la collecte des pièces justificatives et sécurisez la signature de vos mandats et baux.",
      es: "Simplifica la recogida de documentos y asegura la firma de mandatos y contratos.",
      en: "Simplify document collection and secure mandate and lease signatures.",
    },
  },
  sante: {
    title: {
      fr: "Sécurisez les données patients avec une GED hautement certifiée",
      es: "Protege los datos de tus pacientes con una GED altamente certificada",
      en: "Secure patient data with a highly certified DMS",
    },
    sub: {
      fr: "Centralisez le parcours de soins, garantissez le secret médical et accélérez le traitement administratif.",
      es: "Centraliza el historial, garantiza el secreto médico y agiliza el trámite administrativo.",
      en: "Centralize care pathways, ensure medical secrecy and speed up administrative processing.",
    },
  },
  compta: {
    title: {
      fr: "La relance permanente des justificatifs use vos collaborateurs",
      es: "La reclamación constante de justificantes quema a tu equipo",
      en: "Constant chasing for receipts drains your staff",
    },
    sub: {
      fr: "OCR avancé, collecte automatisée et injection directe dans vos outils de production comptable.",
      es: "OCR avanzado, recogida automatizada e inyección directa en tus herramientas contables.",
      en: "Advanced OCR, automated collection and direct injection into your accounting tools.",
    },
  },
  legal: {
    title: {
      fr: "Sécurisez et accélérez la gestion de vos actes et procédures",
      es: "Asegura y acelera la gestión de tus actas y procedimientos",
      en: "Secure and accelerate your legal acts and case proceedings",
    },
    sub: {
      fr: "Versioning strict, recherche full-text et signature électronique certifiée pour vos contrats sensibles.",
      es: "Versionado estricto, búsqueda full-text y firma electrónica certificada para contratos sensibles.",
      en: "Strict versioning, full-text search and certified e-signature for sensitive contracts.",
    },
  },
  industrie: {
    title: {
      fr: "Sécurisez vos processus qualité et votre documentation technique",
      es: "Asegura tus procesos de calidad y tu documentación técnica",
      en: "Secure your quality processes and technical documentation",
    },
    sub: {
      fr: "Maîtrisez la diffusion des procédures ISO, fiches techniques et modes opératoires sur vos lignes de production.",
      es: "Controla la difusión de normas ISO, fichas técnicas y manuales en tus líneas de producción.",
      en: "Govern ISO procedures, spec sheets and SOPs distribution across your production lines.",
    },
  },
  rh: {
    title: {
      fr: "Simplifiez la gestion des dossiers collaborateurs du recrutement au départ",
      es: "Simplifica la gestión de expedientes, del alta a la baja",
      en: "Simplify employee files from onboarding to offboarding",
    },
    sub: {
      fr: "Distribution sécurisée des bulletins, signature des contrats et suivi conforme au RGPD.",
      es: "Distribución segura de nóminas, firma de contratos y seguimiento conforme al RGPD.",
      en: "Secure payslip distribution, contract e-signature and GDPR-compliant tracking.",
    },
  },
  retail: {
    title: {
      fr: "Centralisez vos catalogues, contrats fournisseurs et factures",
      es: "Centraliza catálogos, contratos de proveedores y facturas",
      en: "Centralize catalogs, vendor contracts and invoices",
    },
    sub: {
      fr: "Rapprochement automatique commandes/factures et accès mobile pour vos équipes terrain multisites.",
      es: "Cotejo automático pedidos/facturas y acceso móvil para tus equipos de campo multitienda.",
      en: "Automatic PO/invoice matching and mobile access for your multi-store field teams.",
    },
  },
  transport: {
    title: {
      fr: "Zéro papier en cabine : numérisez vos bons de livraison et CMR",
      es: "Cero papel en cabina: digitaliza tus albaranes y CMR",
      en: "Zero paper in the cabin: digitize delivery notes and CMR",
    },
    sub: {
      fr: "Accélérez la facturation en centralisant les preuves de livraison dès la fin de tournée.",
      es: "Acelera la facturación centralizando las pruebas de entrega al terminar la ruta.",
      en: "Accelerate billing by centralizing proof of delivery as soon as the route ends.",
    },
  },
};

const LEGAL = {
  cond: {
    fr: {
      title: "Conditions d'utilisation",
      body: `L'accès et l'utilisation de la plateforme Documatch.eu impliquent l'acceptation pleine et entière des présentes conditions générales. Le service de pré-analyse et de comparaison de solutions GED/DMS est entièrement gratuit pour les entreprises utilisatrices.

Documatch agit en qualité de tiers de confiance indépendant et neutre. Aucune commission n'est perçue sur le choix final de l'utilisateur, garantissant ainsi l'objectivité de nos recommandations.

L'utilisateur s'engage à fournir des informations exactes lors de la soumission du formulaire. Documatch se réserve le droit de refuser toute demande manifestement abusive ou non professionnelle.

Les contenus présents sur la plateforme (analyses, comparatifs, méthodologies) sont protégés par le droit de la propriété intellectuelle et restent la propriété exclusive de Documatch.`,
    },
    es: {
      title: "Condiciones de uso",
      body: `El acceso y uso de la plataforma Documatch.eu implica la aceptación plena de las presentes condiciones generales. El servicio de preanálisis y comparación de soluciones GED/DMS es totalmente gratuito para las empresas usuarias.

Documatch actúa como tercero de confianza independiente y neutral. No se percibe ninguna comisión sobre la elección final del usuario, garantizando así la objetividad de nuestras recomendaciones.

El usuario se compromete a facilitar información exacta al cumplimentar el formulario. Documatch se reserva el derecho de rechazar cualquier solicitud manifiestamente abusiva o no profesional.

Los contenidos de la plataforma (análisis, comparativas, metodologías) están protegidos por el derecho de propiedad intelectual y son propiedad exclusiva de Documatch.`,
    },
    en: {
      title: "Terms of use",
      body: `Access to and use of the Documatch.eu platform implies full acceptance of these general terms. The pre-analysis and comparison service for DMS/ECM solutions is entirely free for enterprise users.

Documatch acts as an independent and neutral trusted third party. No commission is collected on the user's final choice, ensuring the objectivity of our recommendations.

The user agrees to provide accurate information when submitting the form. Documatch reserves the right to refuse any manifestly abusive or non-professional request.

Content present on the platform (analyses, comparatives, methodologies) is protected by intellectual property law and remains the exclusive property of Documatch.`,
    },
  },
  priv: {
    fr: {
      title: "Politique de confidentialité",
      body: `Documatch collecte uniquement les données strictement nécessaires à la fourniture de son service de comparaison de solutions GED, notamment lors de l'utilisation de l'analyseur IA ou de la soumission du formulaire de pré-analyse.

Les données sont utilisées exclusivement pour fournir des recommandations personnalisées, améliorer notre méthodologie et répondre aux demandes des utilisateurs. Aucune donnée n'est revendue ni transmise à des tiers à des fins commerciales.

Conformément au Règlement Général sur la Protection des Données (RGPD - UE 2016/679), des mesures de sécurité techniques et organisationnelles sont mises en œuvre pour garantir la confidentialité, l'intégrité et la disponibilité des données collectées.

Vous disposez d'un droit d'accès, de rectification, de suppression, de portabilité, de limitation et d'opposition concernant vos données personnelles, exerçable à tout moment à l'adresse info@documatch.eu. Les données sont conservées pendant une durée maximale de 36 mois après le dernier contact, conformément aux recommandations de la CNIL.`,
    },
    es: {
      title: "Política de privacidad",
      body: `Documatch recoge únicamente los datos estrictamente necesarios para la prestación de su servicio de comparación de soluciones GED, especialmente durante el uso del analizador IA o el envío del formulario de preanálisis.

Los datos se utilizan exclusivamente para ofrecer recomendaciones personalizadas, mejorar nuestra metodología y responder a las solicitudes de los usuarios. Ningún dato se revende ni se transmite a terceros con fines comerciales.

Conforme al Reglamento General de Protección de Datos (RGPD - UE 2016/679), se aplican medidas de seguridad técnicas y organizativas para garantizar la confidencialidad, integridad y disponibilidad de los datos recogidos.

Dispones de derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición sobre tus datos personales, ejercitables en cualquier momento en info@documatch.eu. Los datos se conservan durante un máximo de 36 meses tras el último contacto, conforme a las recomendaciones de las autoridades de protección.`,
    },
    en: {
      title: "Privacy policy",
      body: `Documatch collects only the data strictly necessary to provide its DMS solution comparison service, notably when using the AI analyzer or submitting the pre-analysis form.

Data is used exclusively to deliver personalized recommendations, improve our methodology and respond to user requests. No data is resold or transmitted to third parties for commercial purposes.

In compliance with the General Data Protection Regulation (GDPR - EU 2016/679), technical and organizational security measures are implemented to guarantee the confidentiality, integrity and availability of the data collected.

You have the right to access, rectify, delete, port, restrict and oppose the processing of your personal data, exercisable at any time at info@documatch.eu. Data is retained for a maximum of 36 months after the last contact, in line with regulatory recommendations.`,
    },
  },
  legal: {
    fr: {
      title: "Mentions légales",
      body: `Éditeur du site
Documatch — service européen de comparaison de solutions de gestion électronique de documents destiné aux entreprises.
Contact : info@documatch.eu

Directeur de la publication : Documatch.
SIREN : 992 752 980 — société immatriculée en France.
TVA non applicable, article 293 B du Code Général des Impôts.

Hébergement
Le site Documatch.eu est hébergé en Europe par OVH SAS, 2 rue Kellermann, 59100 Roubaix, France. Téléphone : +33 9 72 10 10 07.

Propriété intellectuelle
L'ensemble des contenus du site Documatch.eu (textes, visuels, éléments graphiques, méthodologies) est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive de Documatch ou de ses partenaires. Toute reproduction, représentation ou exploitation non autorisée est strictement interdite.

Responsabilité
Documatch s'efforce de fournir des informations fiables et régulièrement mises à jour. Toutefois, aucune garantie n'est apportée quant à l'exactitude ou l'exhaustivité absolue des informations présentées. L'utilisateur reconnaît utiliser ces informations sous sa seule responsabilité.`,
    },
    es: {
      title: "Avisos legales",
      body: `Editor del sitio
Documatch — servicio europeo de comparación de soluciones de gestión documental electrónica destinado a empresas.
Contacto: info@documatch.eu

Director de publicación: Documatch.
SIREN: 992 752 980 — sociedad inscrita en Francia.
IVA no aplicable, artículo 293 B del Código General Tributario.

Alojamiento
El sitio Documatch.eu está alojado en Europa por OVH SAS, 2 rue Kellermann, 59100 Roubaix, Francia. Teléfono: +33 9 72 10 10 07.

Propiedad intelectual
Todos los contenidos del sitio Documatch.eu (textos, imágenes, elementos gráficos, metodologías) están protegidos por el derecho de propiedad intelectual y son propiedad exclusiva de Documatch o de sus colaboradores. Cualquier reproducción, representación o explotación no autorizada queda estrictamente prohibida.

Responsabilidad
Documatch se esfuerza por proporcionar información fiable y actualizada con regularidad. No obstante, no se ofrece ninguna garantía sobre la exactitud o exhaustividad absoluta de la información presentada. El usuario reconoce utilizar dicha información bajo su exclusiva responsabilidad.`,
    },
    en: {
      title: "Legal notice",
      body: `Publisher
Documatch — European service for comparing electronic document management solutions for enterprises.
Contact: info@documatch.eu

Publication director: Documatch.
SIREN: 992 752 980 — company registered in France.
VAT not applicable, article 293 B of the French General Tax Code.

Hosting
The Documatch.eu website is hosted in Europe by OVH SAS, 2 rue Kellermann, 59100 Roubaix, France. Phone: +33 9 72 10 10 07.

Intellectual property
All content on the Documatch.eu website (texts, visuals, graphics, methodologies) is protected by intellectual property law and remains the exclusive property of Documatch or its partners. Any reproduction, representation or unauthorized use is strictly prohibited.

Liability
Documatch strives to provide reliable and regularly updated information. However, no guarantee is given as to the absolute accuracy or completeness of the information presented. The user acknowledges using such information under their sole responsibility.`,
    },
  },
};

function App() {
  const [lang, setLang] = useState("fr");
  const [sector, setSector] = useState("btp");
  const [formState, setFormState] = useState("idle"); // idle | submitting | success | error
  const [openFaq, setOpenFaq] = useState(0);
  const [legalKey, setLegalKey] = useState(null);
  const formRef = useRef(null);
  const formSectionRef = useRef(null);

  const t = LEX[lang];
  const sec = SECTOR_CONTENT[sector];

  useEffect(() => {
    document.title = `Documatch.eu — ${t.tagline}`;
    document.documentElement.lang = lang;
  }, [lang, t.tagline]);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formState === "submitting") return;
    setFormState("submitting");
    try {
      const data = new FormData(formRef.current);
      const response = await fetch("https://formspree.io/f/mpqndldg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch (err) {
      setFormState("error");
    }
  };

  const resetForm = () => {
    formRef.current?.reset();
    setFormState("idle");
  };

  return (
    <div className="dm-root">
      <style>{CSS}</style>

      {/* ============== STICKY NAVBAR ============== */}
      <header className="dm-nav" data-testid="dm-navbar">
        <div className="dm-nav-inner">
          <div className="dm-brand" data-testid="dm-brand">
            <div className="dm-brand-mark">D</div>
            <div className="dm-brand-text">
              <div className="dm-brand-name">DOCUMATCH<span className="dm-brand-tld">.EU</span></div>
              <div className="dm-brand-tag">{t.tagline}</div>
            </div>
          </div>
          <div className="dm-nav-actions">
            <div className="dm-lang" role="tablist" aria-label="Language switcher">
              {["fr", "es", "en"].map((l) => (
                <button
                  key={l}
                  data-testid={`lang-btn-${l}`}
                  className={`dm-lang-btn ${lang === l ? "active" : ""}`}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="dm-nav-cta" data-testid="nav-cta-btn" onClick={scrollToForm}>
              {t.nav_cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* ============== HERO ============== */}
      <section className="dm-hero" ref={formSectionRef}>
        <div className="dm-hero-bg" aria-hidden="true">
          <div className="dm-orb dm-orb-1"></div>
          <div className="dm-orb dm-orb-2"></div>
          <div className="dm-grid-pattern"></div>
        </div>
        <div className="dm-container">
          <div className="dm-hero-grid">
            <div className="dm-hero-left">
              <div className="dm-badge" data-testid="hero-badge">
                <span className="dm-badge-dot"></span>
                {t.badge}
              </div>
              <h1 className="dm-h1" data-testid="hero-title">{sec.title[lang]}</h1>
              <p className="dm-hero-sub" data-testid="hero-sub">{sec.sub[lang]}</p>

              <ul className="dm-bullets" data-testid="hero-bullets">
                {[t.bullet_1, t.bullet_2, t.bullet_3, t.bullet_4].map((b, i) => (
                  <li key={i} className="dm-bullet">
                    <span className="dm-bullet-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="dm-social-proof" data-testid="hero-social-proof">
                <div className="dm-avatars" aria-hidden="true">
                  <span className="dm-av" style={{background: "#0087d1"}}>JL</span>
                  <span className="dm-av" style={{background: "#0f172a"}}>MC</span>
                  <span className="dm-av" style={{background: "#475569"}}>SR</span>
                  <span className="dm-av" style={{background: "#0087d1"}}>+</span>
                </div>
                <div className="dm-social-text">{t.social_proof}</div>
              </div>
            </div>

            {/* FORM CARD */}
            <div className="dm-form-wrapper">
              <div className={`dm-form-card ${formState === "success" ? "is-success" : ""}`} data-testid="form-card">
                {formState !== "success" ? (
                  <>
                    <div className="dm-form-head">
                      <h2 className="dm-form-title">{t.form_title}</h2>
                      <p className="dm-form-sub">{t.form_sub}</p>
                    </div>
                    <form
                      ref={formRef}
                      id="lead-form"
                      action="https://formspree.io/f/mpqndldg"
                      method="POST"
                      onSubmit={handleSubmit}
                      noValidate
                      data-testid="lead-form"
                    >
                      <input type="hidden" name="_subject" value="Nouveau lead Documatch.eu" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      <input type="hidden" name="language" value={lang} />
                      <input type="hidden" name="sector" value={sector} />
                      <input type="hidden" name="utm_source" value="landing_documatch" />

                      <div className="dm-field">
                        <label htmlFor="f-name">{t.lbl_name}</label>
                        <input
                          id="f-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder={t.ph_name}
                          data-testid="input-name"
                        />
                      </div>
                      <div className="dm-field">
                        <label htmlFor="f-company">{t.lbl_company}</label>
                        <input
                          id="f-company"
                          name="company"
                          type="text"
                          required
                          autoComplete="organization"
                          placeholder={t.ph_company}
                          data-testid="input-company"
                        />
                      </div>
                      <div className="dm-field">
                        <label htmlFor="f-email">{t.lbl_email}</label>
                        <input
                          id="f-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder={t.ph_email}
                          data-testid="input-email"
                        />
                      </div>
                      <div className="dm-field">
                        <label htmlFor="f-phone">{t.lbl_phone}</label>
                        <input
                          id="f-phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder={t.ph_phone}
                          data-testid="input-phone"
                        />
                      </div>

                      <label className="dm-gdpr" data-testid="gdpr-check">
                        <input type="checkbox" name="gdpr" required />
                        <span className="dm-gdpr-box" aria-hidden="true">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span className="dm-gdpr-text">{t.gdpr}</span>
                      </label>

                      {formState === "error" && (
                        <div className="dm-form-error" data-testid="form-error" role="alert">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                          {t.error_msg}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="dm-submit"
                        disabled={formState === "submitting"}
                        data-testid="form-submit"
                      >
                        {formState === "submitting" ? (
                          <>
                            <span className="dm-spinner" aria-hidden="true"></span>
                            {t.submitting}
                          </>
                        ) : (
                          <>
                            {t.submit}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                          </>
                        )}
                      </button>

                      <p className="dm-privacy-note">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        {t.privacy_note}
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="dm-success" data-testid="form-success">
                    <div className="dm-success-icon" aria-hidden="true">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 className="dm-success-title">{t.success_title}</h3>
                    <p className="dm-success-text">{t.success_text}</p>
                    <button className="dm-success-back" onClick={resetForm} data-testid="success-reset">
                      {t.success_back}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TRUST BAR ============== */}
      <section className="dm-trust" data-testid="trust-bar">
        <div className="dm-container">
          <div className="dm-trust-grid">
            <div className="dm-trust-item">
              <div className="dm-trust-num">+120</div>
              <div className="dm-trust-lbl">{lang === "fr" ? "entreprises accompagnées" : lang === "es" ? "empresas acompañadas" : "enterprises supported"}</div>
            </div>
            <div className="dm-trust-item">
              <div className="dm-trust-num">80+</div>
              <div className="dm-trust-lbl">{lang === "fr" ? "solutions évaluées" : lang === "es" ? "soluciones evaluadas" : "solutions assessed"}</div>
            </div>
            <div className="dm-trust-item">
              <div className="dm-trust-num">48h</div>
              <div className="dm-trust-lbl">{lang === "fr" ? "délai d'analyse" : lang === "es" ? "plazo de análisis" : "analysis turnaround"}</div>
            </div>
            <div className="dm-trust-item">
              <div className="dm-trust-num">100%</div>
              <div className="dm-trust-lbl">{lang === "fr" ? "indépendant" : lang === "es" ? "independiente" : "independent"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SECTOR TABS ============== */}
      <section className="dm-section dm-sectors-section">
        <div className="dm-container">
          <div className="dm-section-head">
            <h2 className="dm-h2">{t.sectors_title}</h2>
            <p className="dm-section-sub">{t.sectors_sub}</p>
          </div>
          <div className="dm-sector-tabs" role="tablist" data-testid="sector-tabs">
            {Object.keys(SECTORS).map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={sector === k}
                data-testid={`sector-tab-${k}`}
                className={`dm-sector-tab ${sector === k ? "active" : ""}`}
                onClick={() => setSector(k)}
              >
                {SECTORS[k][lang]}
              </button>
            ))}
          </div>
          <div className="dm-sector-preview" data-testid="sector-preview">
            <div className="dm-sector-preview-label">
              {lang === "fr" ? "Cas d'usage" : lang === "es" ? "Caso de uso" : "Use case"} · <strong>{SECTORS[sector][lang]}</strong>
            </div>
            <h3 className="dm-sector-preview-title">{sec.title[lang]}</h3>
            <p className="dm-sector-preview-sub">{sec.sub[lang]}</p>
            <button className="dm-link-cta" onClick={scrollToForm} data-testid="sector-cta">
              {t.nav_cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ============== WHY US (4 cards) ============== */}
      <section className="dm-section">
        <div className="dm-container">
          <div className="dm-section-head">
            <h2 className="dm-h2">{t.why_title}</h2>
            <p className="dm-section-sub">{t.why_sub}</p>
          </div>
          <div className="dm-cards">
            {[
              { i: <PathIcon d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>, t: t.why_1_t, d: t.why_1_d },
              { i: <PathIcon d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>, t: t.why_2_t, d: t.why_2_d },
              { i: <PathIcon d="M12 2L4 7v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V7l-8-5z"/>, t: t.why_3_t, d: t.why_3_d },
              { i: <PathIcon d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>, t: t.why_4_t, d: t.why_4_d },
            ].map((c, i) => (
              <div key={i} className="dm-card" data-testid={`why-card-${i}`}>
                <div className="dm-card-icon">{c.i}</div>
                <h3 className="dm-card-title">{c.t}</h3>
                <p className="dm-card-desc">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ECOSYSTEM ============== */}
      <section className="dm-section dm-section-alt">
        <div className="dm-container">
          <div className="dm-section-head">
            <h2 className="dm-h2">{t.eco_title}</h2>
            <p className="dm-section-sub">{t.eco_sub}</p>
          </div>
          <div className="dm-cards">
            {[
              { tag: "GED", i: <PathIcon d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8"/>, t: t.eco_1_t, d: t.eco_1_d },
              { tag: "FLOW", i: <PathIcon d="M3 3h6v6H3zM15 3h6v6h-6zM9 6h6M3 15h6v6H3zM15 15h6v6h-6zM6 9v6M18 9v6M9 18h6"/>, t: t.eco_2_t, d: t.eco_2_d },
              { tag: "GDPR", i: <PathIcon d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, t: t.eco_3_t, d: t.eco_3_d },
              { tag: "API", i: <PathIcon d="M16 18l6-6-6-6 M8 6l-6 6 6 6 M14 4l-4 16"/>, t: t.eco_4_t, d: t.eco_4_d },
            ].map((c, i) => (
              <div key={i} className="dm-card dm-card-eco" data-testid={`eco-card-${i}`}>
                <div className="dm-eco-head">
                  <div className="dm-card-icon">{c.i}</div>
                  <span className="dm-eco-tag">{c.tag}</span>
                </div>
                <h3 className="dm-card-title">{c.t}</h3>
                <p className="dm-card-desc">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== AI SECTION ============== */}
      <section className="dm-ai">
        <div className="dm-ai-bg" aria-hidden="true">
          <div className="dm-ai-orb dm-ai-orb-1"></div>
          <div className="dm-ai-orb dm-ai-orb-2"></div>
          <div className="dm-ai-orb dm-ai-orb-3"></div>
        </div>
        <div className="dm-container">
          <div className="dm-ai-inner" data-testid="ai-section">
            <div className="dm-ai-badge">
              <span className="dm-ai-badge-dot"></span>
              {t.ai_badge}
            </div>
            <h2 className="dm-ai-title">{t.ai_title}</h2>
            <p className="dm-ai-sub">{t.ai_sub}</p>
            <button className="dm-ai-cta" onClick={scrollToForm} data-testid="ai-cta">
              {t.ai_cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <section className="dm-section">
        <div className="dm-container">
          <div className="dm-section-head">
            <h2 className="dm-h2">{t.test_title}</h2>
          </div>
          <div className="dm-test-grid">
            {[
              { q: t.test_1_q, a: t.test_1_a },
              { q: t.test_2_q, a: t.test_2_a },
              { q: t.test_3_q, a: t.test_3_a },
            ].map((tt, i) => (
              <figure className="dm-test-card" key={i} data-testid={`test-card-${i}`}>
                <svg className="dm-quote" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
                <blockquote className="dm-test-quote">{tt.q}</blockquote>
                <figcaption className="dm-test-author">— {tt.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section className="dm-section dm-section-alt">
        <div className="dm-container dm-container-narrow">
          <div className="dm-section-head">
            <h2 className="dm-h2">{t.faq_title}</h2>
          </div>
          <div className="dm-faq" data-testid="faq-list">
            {t.faq.map((item, i) => (
              <div
                key={i}
                className={`dm-faq-item ${openFaq === i ? "open" : ""}`}
                data-testid={`faq-item-${i}`}
              >
                <button
                  className="dm-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span>{item.q}</span>
                  <span className="dm-faq-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </button>
                <div className="dm-faq-a"><p>{item.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="dm-footer" data-testid="dm-footer">
        <div className="dm-container">
          <div className="dm-footer-top">
            <div className="dm-footer-brand">
              <div className="dm-brand">
                <div className="dm-brand-mark dm-brand-mark-dark">D</div>
                <div className="dm-brand-text">
                  <div className="dm-brand-name dm-brand-name-dark">DOCUMATCH<span className="dm-brand-tld">.EU</span></div>
                  <div className="dm-brand-tag dm-brand-tag-dark">{t.tagline}</div>
                </div>
              </div>
              <p className="dm-footer-desc">{t.footer_desc}</p>
              <div className="dm-footer-badges">
                <span className="dm-footer-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  {t.footer_gdpr}
                </span>
              </div>
            </div>
            <div className="dm-footer-links">
              <button className="dm-footer-link" onClick={() => setLegalKey("cond")} data-testid="legal-cond">{t.footer_cond}</button>
              <button className="dm-footer-link" onClick={() => setLegalKey("priv")} data-testid="legal-priv">{t.footer_priv}</button>
              <button className="dm-footer-link" onClick={() => setLegalKey("legal")} data-testid="legal-legal">{t.footer_legal}</button>
            </div>
          </div>
          <div className="dm-footer-bottom">
            <span>{t.footer_copy}</span>
            <span className="dm-footer-seo">
              {lang === "fr" ? "Comparateur indépendant GED et DMS" : lang === "es" ? "Comparador independiente GED y DMS" : "Independent DMS & ECM comparator"} · {SECTORS[sector][lang]}
            </span>
          </div>
        </div>
      </footer>

      {/* ============== MOBILE STICKY CTA ============== */}
      <button className="dm-mobile-cta" onClick={scrollToForm} data-testid="mobile-sticky-cta">
        {t.mobile_cta}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </button>

      {/* ============== LEGAL MODAL ============== */}
      {legalKey && (
        <div className="dm-modal-overlay" role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) setLegalKey(null); }} data-testid="legal-modal">
          <div className="dm-modal">
            <button className="dm-modal-close" onClick={() => setLegalKey(null)} aria-label="Close" data-testid="legal-modal-close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 className="dm-modal-title">{LEGAL[legalKey][lang].title}</h2>
            <div className="dm-modal-body">
              {LEGAL[legalKey][lang].body.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <button className="dm-modal-cta" onClick={() => setLegalKey(null)}>{t.legal_close}</button>
          </div>
        </div>
      )}
    </div>
  );
}

function PathIcon({ d }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

/* ============== STYLES (inline) ============== */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

.dm-root, .dm-root *, .dm-root *::before, .dm-root *::after { box-sizing: border-box; }
.dm-root {
  --blue: #0087d1;
  --blue-soft: #e0f2fe;
  --blue-hover: #006fa8;
  --dark: #0f172a;
  --dark-2: #1e293b;
  --bg: #f8fafc;
  --border: #e2e8f0;
  --text: #0f172a;
  --muted: #475569;
  --muted-2: #64748b;
  --white: #ffffff;
  --radius: 14px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--white);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  font-feature-settings: "ss01", "cv11";
}
.dm-root h1, .dm-root h2, .dm-root h3 { font-family: 'Manrope', sans-serif; letter-spacing: -0.02em; }
.dm-root button { font-family: inherit; }

.dm-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.dm-container-narrow { max-width: 800px; }

/* ===== NAVBAR ===== */
.dm-nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(255,255,255,0.78);
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  border-bottom: 1px solid rgba(226,232,240,0.7);
}
.dm-nav-inner {
  max-width: 1200px; margin: 0 auto; padding: 14px 24px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
}
.dm-brand { display: flex; align-items: center; gap: 12px; }
.dm-brand-mark {
  width: 38px; height: 38px; border-radius: 10px;
  background: var(--white);
  border: 1px solid var(--border);
  box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(0,135,209,0.08);
  display: grid; place-items: center;
  font-family: 'Manrope', sans-serif; font-weight: 800; font-size: 20px; color: var(--blue);
  letter-spacing: -0.02em;
}
.dm-brand-mark-dark {
  background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.12);
  box-shadow: none; color: #38bdf8;
}
.dm-brand-name {
  font-family: 'Manrope', sans-serif; font-weight: 800; font-size: 16px;
  letter-spacing: 0.04em; color: var(--dark); line-height: 1.1;
}
.dm-brand-tld { color: var(--blue); font-weight: 700; }
.dm-brand-name-dark { color: #fff; }
.dm-brand-tag { font-size: 11.5px; color: var(--muted); margin-top: 2px; letter-spacing: 0.01em; }
.dm-brand-tag-dark { color: #94a3b8; }

.dm-nav-actions { display: flex; align-items: center; gap: 14px; }
.dm-lang { display: inline-flex; background: var(--bg); border: 1px solid var(--border); border-radius: 10px; padding: 3px; }
.dm-lang-btn {
  border: none; background: transparent; padding: 6px 11px; font-size: 12.5px; font-weight: 600;
  color: var(--muted); cursor: pointer; border-radius: 7px; letter-spacing: 0.04em;
  transition: all 0.18s ease;
}
.dm-lang-btn:hover { color: var(--dark); }
.dm-lang-btn.active { background: var(--white); color: var(--dark); box-shadow: 0 1px 2px rgba(15,23,42,0.06); }
.dm-nav-cta {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 9px 16px; background: var(--dark); color: #fff;
  border: none; border-radius: 10px; font-size: 13.5px; font-weight: 600;
  cursor: pointer; transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(15,23,42,0.06), 0 6px 16px rgba(15,23,42,0.12);
}
.dm-nav-cta:hover { transform: translateY(-1px); background: #1e293b; box-shadow: 0 2px 4px rgba(15,23,42,0.08), 0 12px 24px rgba(15,23,42,0.18); }

/* ===== HERO ===== */
.dm-hero { position: relative; padding: 70px 0 90px; overflow: hidden; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); }
.dm-hero-bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
.dm-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.45; }
.dm-orb-1 { width: 480px; height: 480px; background: #bae6fd; top: -100px; right: -150px; }
.dm-orb-2 { width: 360px; height: 360px; background: #e0f2fe; bottom: -120px; left: -100px; opacity: 0.6; }
.dm-grid-pattern {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%);
}

.dm-hero-grid {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 60px; align-items: start;
}
.dm-hero-left { animation: dm-fade-up 0.7s ease both; }
.dm-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 12px; background: var(--white); border: 1px solid var(--border);
  border-radius: 999px; font-size: 12px; font-weight: 500; color: var(--muted);
  margin-bottom: 24px;
  box-shadow: 0 1px 2px rgba(15,23,42,0.04);
}
.dm-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: #10b981; box-shadow: 0 0 0 3px rgba(16,185,129,0.18); animation: dm-pulse 2s infinite; }
@keyframes dm-pulse { 0%,100% { box-shadow: 0 0 0 3px rgba(16,185,129,0.18); } 50% { box-shadow: 0 0 0 6px rgba(16,185,129,0.08); } }

.dm-h1 {
  font-size: clamp(2rem, 4.4vw, 3.4rem); line-height: 1.08; font-weight: 800;
  color: var(--dark); margin: 0 0 18px;
}
.dm-hero-sub { font-size: 1.1rem; color: var(--muted); margin: 0 0 32px; max-width: 560px; }

.dm-bullets { list-style: none; padding: 0; margin: 0 0 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 18px; }
.dm-bullet { display: flex; align-items: center; gap: 10px; font-size: 14.5px; font-weight: 500; color: var(--dark); }
.dm-bullet-icon { width: 22px; height: 22px; border-radius: 7px; background: var(--blue-soft); color: var(--blue); display: grid; place-items: center; flex-shrink: 0; }

.dm-social-proof { display: flex; align-items: center; gap: 14px; padding: 14px 18px; background: var(--white); border: 1px solid var(--border); border-radius: 12px; width: fit-content; box-shadow: 0 1px 2px rgba(15,23,42,0.04); }
.dm-avatars { display: flex; }
.dm-av { width: 32px; height: 32px; border-radius: 50%; color: #fff; font-size: 11px; font-weight: 700; display: grid; place-items: center; border: 2px solid #fff; margin-left: -8px; box-shadow: 0 1px 2px rgba(15,23,42,0.1); }
.dm-av:first-child { margin-left: 0; }
.dm-social-text { font-size: 13.5px; font-weight: 600; color: var(--dark); }

/* ===== FORM CARD (glass) ===== */
.dm-form-wrapper { animation: dm-fade-up 0.8s 0.1s ease both; }
.dm-form-card {
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(226,232,240,0.9);
  border-radius: 18px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(15,23,42,0.04), 0 20px 50px -12px rgba(15,23,42,0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.dm-form-card:hover { transform: translateY(-2px); box-shadow: 0 2px 6px rgba(15,23,42,0.05), 0 24px 60px -12px rgba(15,23,42,0.16); }
.dm-form-card.is-success { background: #fff; }
.dm-form-head { margin-bottom: 22px; padding-bottom: 18px; border-bottom: 1px solid var(--border); }
.dm-form-title { font-size: 1.45rem; font-weight: 700; margin: 0 0 4px; color: var(--dark); }
.dm-form-sub { font-size: 14px; color: var(--muted); margin: 0; }

.dm-field { margin-bottom: 14px; }
.dm-field label { display: block; font-size: 12.5px; font-weight: 600; color: var(--dark); margin-bottom: 6px; letter-spacing: 0.01em; }
.dm-field input {
  width: 100%; padding: 11px 14px;
  background: var(--white); border: 1px solid var(--border); border-radius: 10px;
  font-size: 14.5px; color: var(--dark); font-family: inherit;
  transition: all 0.2s ease;
}
.dm-field input::placeholder { color: #94a3b8; }
.dm-field input:focus { outline: none; border-color: var(--blue); box-shadow: 0 0 0 4px rgba(0,135,209,0.12); }

.dm-gdpr { display: flex; gap: 10px; align-items: flex-start; margin: 14px 0 18px; cursor: pointer; }
.dm-gdpr input { position: absolute; opacity: 0; pointer-events: none; }
.dm-gdpr-box {
  width: 18px; height: 18px; border-radius: 5px; border: 1.5px solid var(--border);
  background: #fff; display: grid; place-items: center; flex-shrink: 0; margin-top: 1px;
  color: transparent; transition: all 0.18s ease;
}
.dm-gdpr input:checked + .dm-gdpr-box { background: var(--blue); border-color: var(--blue); color: #fff; }
.dm-gdpr-text { font-size: 12.5px; color: var(--muted); line-height: 1.45; }

.dm-submit {
  width: 100%; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 14px 20px; background: var(--blue); color: #fff;
  border: none; border-radius: 11px; font-size: 14.5px; font-weight: 600;
  cursor: pointer; transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0,135,209,0.18), 0 8px 24px rgba(0,135,209,0.22);
}
.dm-submit:hover:not(:disabled) { background: var(--blue-hover); transform: translateY(-1px); box-shadow: 0 2px 4px rgba(0,135,209,0.22), 0 14px 32px rgba(0,135,209,0.28); }
.dm-submit:disabled { opacity: 0.7; cursor: not-allowed; }
.dm-spinner { width: 14px; height: 14px; border: 2px solid rgba(255,255,255,0.35); border-top-color: #fff; border-radius: 50%; animation: dm-spin 0.7s linear infinite; }
@keyframes dm-spin { to { transform: rotate(360deg); } }

.dm-privacy-note { display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 11.5px; color: var(--muted-2); margin: 12px 0 0; text-align: center; }

.dm-form-error { display: flex; align-items: center; gap: 8px; padding: 11px 14px; background: #fef2f2; border: 1px solid #fecaca; color: #b91c1c; border-radius: 10px; font-size: 13px; font-weight: 500; margin-bottom: 12px; }

.dm-success { text-align: center; padding: 20px 8px; animation: dm-fade-up 0.5s ease both; }
.dm-success-icon { width: 64px; height: 64px; border-radius: 50%; background: #d1fae5; color: #059669; display: grid; place-items: center; margin: 0 auto 18px; box-shadow: 0 0 0 8px rgba(16,185,129,0.08); }
.dm-success-title { font-size: 1.4rem; font-weight: 700; color: var(--dark); margin: 0 0 10px; }
.dm-success-text { font-size: 14.5px; color: var(--muted); margin: 0 0 22px; line-height: 1.55; }
.dm-success-back { background: transparent; color: var(--blue); border: 1px solid var(--blue); padding: 10px 18px; border-radius: 9px; font-size: 13.5px; font-weight: 600; cursor: pointer; transition: all 0.18s; }
.dm-success-back:hover { background: var(--blue); color: #fff; }

/* ===== TRUST BAR ===== */
.dm-trust { padding: 36px 0; background: var(--dark); color: #fff; }
.dm-trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.dm-trust-item { text-align: center; }
.dm-trust-num { font-family: 'Manrope', sans-serif; font-size: 2rem; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
.dm-trust-lbl { font-size: 12.5px; color: #94a3b8; margin-top: 4px; letter-spacing: 0.02em; }

/* ===== SECTIONS ===== */
.dm-section { padding: 90px 0; background: var(--white); }
.dm-section-alt { background: var(--bg); }
.dm-section-head { text-align: center; max-width: 720px; margin: 0 auto 50px; }
.dm-h2 { font-size: clamp(1.7rem, 3vw, 2.4rem); font-weight: 800; color: var(--dark); margin: 0 0 12px; letter-spacing: -0.025em; line-height: 1.15; }
.dm-section-sub { font-size: 1.05rem; color: var(--muted); margin: 0; }

/* ===== SECTOR TABS ===== */
.dm-sector-tabs { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 40px; }
.dm-sector-tab {
  padding: 9px 18px; background: var(--white); border: 1px solid var(--border); color: var(--muted);
  border-radius: 999px; font-size: 13.5px; font-weight: 600; cursor: pointer; transition: all 0.2s ease;
}
.dm-sector-tab:hover { color: var(--dark); border-color: #cbd5e1; transform: translateY(-1px); }
.dm-sector-tab.active { background: var(--dark); color: #fff; border-color: var(--dark); box-shadow: 0 1px 2px rgba(15,23,42,0.08), 0 8px 20px rgba(15,23,42,0.18); }

.dm-sector-preview {
  max-width: 760px; margin: 0 auto;
  background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 32px;
  box-shadow: 0 1px 2px rgba(15,23,42,0.03), 0 12px 32px -8px rgba(15,23,42,0.08);
  text-align: center;
  animation: dm-fade-up 0.4s ease;
}
.dm-sector-preview-label { font-size: 11.5px; font-weight: 600; color: var(--blue); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; }
.dm-sector-preview-title { font-size: 1.5rem; font-weight: 700; color: var(--dark); margin: 0 0 10px; line-height: 1.25; }
.dm-sector-preview-sub { font-size: 1rem; color: var(--muted); margin: 0 0 22px; }

.dm-link-cta { display: inline-flex; align-items: center; gap: 6px; background: transparent; border: 1px solid var(--dark); color: var(--dark); padding: 10px 20px; border-radius: 10px; font-size: 13.5px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
.dm-link-cta:hover { background: var(--dark); color: #fff; transform: translateY(-1px); }

/* ===== CARDS ===== */
.dm-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.dm-card {
  background: var(--white); border: 1px solid var(--border); border-radius: 14px;
  padding: 26px; transition: all 0.25s ease;
}
.dm-section-alt .dm-card { background: #fff; }
.dm-card:hover { transform: translateY(-4px); border-color: #cbd5e1; box-shadow: 0 4px 6px rgba(15,23,42,0.04), 0 20px 40px -10px rgba(15,23,42,0.12); }
.dm-card-icon { width: 44px; height: 44px; border-radius: 11px; background: var(--blue-soft); color: var(--blue); display: grid; place-items: center; margin-bottom: 18px; }
.dm-card-title { font-size: 1.05rem; font-weight: 700; color: var(--dark); margin: 0 0 8px; }
.dm-card-desc { font-size: 13.5px; color: var(--muted); margin: 0; line-height: 1.55; }

.dm-card-eco { background: var(--white); }
.dm-eco-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.dm-eco-head .dm-card-icon { margin-bottom: 0; }
.dm-eco-tag { font-size: 10.5px; font-weight: 700; color: var(--blue); background: var(--blue-soft); padding: 3px 8px; border-radius: 5px; letter-spacing: 0.08em; }

/* ===== AI SECTION ===== */
.dm-ai { position: relative; padding: 100px 0; background: linear-gradient(135deg, #0a0f1e 0%, #0f172a 55%, #111827 100%); color: #fff; overflow: hidden; }
.dm-ai-bg { position: absolute; inset: 0; pointer-events: none; }
.dm-ai-orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: 0.35; animation: dm-float 14s ease-in-out infinite; }
.dm-ai-orb-1 { width: 340px; height: 340px; background: #0087d1; top: -80px; left: 15%; }
.dm-ai-orb-2 { width: 280px; height: 280px; background: #38bdf8; bottom: -100px; right: 10%; animation-delay: -4s; }
.dm-ai-orb-3 { width: 220px; height: 220px; background: #7c3aed; top: 30%; right: 30%; opacity: 0.18; animation-delay: -8s; }
@keyframes dm-float { 0%,100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-20px) translateX(10px); } }

.dm-ai-inner { position: relative; z-index: 1; text-align: center; max-width: 760px; margin: 0 auto; }
.dm-ai-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; background: rgba(0,135,209,0.18); border: 1px solid rgba(56,189,248,0.35); border-radius: 999px; font-size: 11.5px; font-weight: 700; color: #38bdf8; letter-spacing: 0.12em; margin-bottom: 22px; }
.dm-ai-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #38bdf8; box-shadow: 0 0 8px #38bdf8; animation: dm-pulse 2s infinite; }
.dm-ai-title { font-size: clamp(1.7rem, 3.5vw, 2.7rem); font-weight: 800; color: #fff; margin: 0 0 16px; line-height: 1.15; letter-spacing: -0.025em; }
.dm-ai-sub { font-size: 1.1rem; color: #94a3b8; margin: 0 0 36px; }
.dm-ai-cta { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background: #fff; color: var(--dark); border: none; border-radius: 11px; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.18), 0 18px 36px rgba(56,189,248,0.18); }
.dm-ai-cta:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.22), 0 22px 48px rgba(56,189,248,0.28); }

/* ===== TESTIMONIALS ===== */
.dm-test-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.dm-test-card { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 26px; margin: 0; transition: all 0.25s ease; }
.dm-test-card:hover { transform: translateY(-3px); box-shadow: 0 4px 6px rgba(15,23,42,0.04), 0 20px 40px -10px rgba(15,23,42,0.12); }
.dm-quote { color: var(--blue-soft); margin-bottom: 14px; }
.dm-test-quote { font-size: 14.5px; color: var(--dark); margin: 0 0 16px; line-height: 1.6; font-weight: 500; }
.dm-test-author { font-size: 12.5px; color: var(--muted); font-style: normal; }

/* ===== FAQ ===== */
.dm-faq { display: flex; flex-direction: column; gap: 10px; }
.dm-faq-item { background: var(--white); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; transition: all 0.2s ease; }
.dm-faq-item.open { border-color: #cbd5e1; box-shadow: 0 4px 12px rgba(15,23,42,0.04); }
.dm-faq-q { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 22px; background: transparent; border: none; cursor: pointer; text-align: left; font-size: 15px; font-weight: 600; color: var(--dark); transition: color 0.18s; }
.dm-faq-q:hover { color: var(--blue); }
.dm-faq-icon { display: inline-flex; transition: transform 0.25s ease; color: var(--muted); }
.dm-faq-item.open .dm-faq-icon { transform: rotate(180deg); color: var(--blue); }
.dm-faq-a { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }
.dm-faq-item.open .dm-faq-a { max-height: 280px; }
.dm-faq-a p { padding: 0 22px 20px; margin: 0; font-size: 14px; color: var(--muted); line-height: 1.65; }

/* ===== FOOTER ===== */
.dm-footer { background: var(--dark); color: #94a3b8; padding: 60px 0 30px; border-top: 4px solid var(--blue); }
.dm-footer-top { display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; padding-bottom: 36px; border-bottom: 1px solid #1e293b; align-items: start; }
.dm-footer-brand .dm-brand { margin-bottom: 16px; }
.dm-footer-desc { font-size: 13.5px; line-height: 1.6; margin: 0 0 16px; max-width: 460px; color: #94a3b8; }
.dm-footer-badges { display: flex; flex-wrap: wrap; gap: 10px; }
.dm-footer-badge { display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 999px; font-size: 11.5px; color: #cbd5e1; }
.dm-footer-links { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
.dm-footer-link { background: transparent; border: none; color: #94a3b8; cursor: pointer; font-size: 13.5px; padding: 4px 0; transition: color 0.18s; font-family: inherit; }
.dm-footer-link:hover { color: #fff; }
.dm-footer-bottom { padding-top: 22px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; font-size: 12px; color: #64748b; }
.dm-footer-seo { text-transform: uppercase; letter-spacing: 0.06em; font-size: 11px; font-weight: 600; }

/* ===== MOBILE STICKY CTA ===== */
.dm-mobile-cta {
  display: none;
  position: fixed; bottom: 16px; left: 16px; right: 16px; z-index: 40;
  padding: 14px 18px; background: var(--blue); color: #fff;
  border: none; border-radius: 12px; font-size: 14.5px; font-weight: 700;
  cursor: pointer; align-items: center; justify-content: center; gap: 8px;
  box-shadow: 0 4px 12px rgba(0,135,209,0.22), 0 16px 32px rgba(0,135,209,0.28);
}

/* ===== LEGAL MODAL ===== */
.dm-modal-overlay {
  position: fixed; inset: 0; z-index: 100;
  background: rgba(15,23,42,0.55); backdrop-filter: blur(8px);
  display: grid; place-items: center; padding: 20px;
  animation: dm-fade 0.18s ease both;
}
@keyframes dm-fade { from { opacity: 0; } to { opacity: 1; } }
.dm-modal {
  background: #fff; max-width: 720px; width: 100%; max-height: 85vh; overflow-y: auto;
  border-radius: 18px; padding: 36px; position: relative;
  box-shadow: 0 24px 60px rgba(15,23,42,0.32);
  animation: dm-fade-up 0.3s ease both;
}
.dm-modal-close {
  position: absolute; top: 18px; right: 18px;
  width: 36px; height: 36px; border-radius: 10px;
  background: var(--bg); border: 1px solid var(--border); color: var(--dark);
  cursor: pointer; display: grid; place-items: center; transition: all 0.18s;
}
.dm-modal-close:hover { background: var(--border); }
.dm-modal-title { font-size: 1.6rem; font-weight: 800; color: var(--dark); margin: 0 0 22px; padding-right: 40px; padding-bottom: 14px; border-bottom: 2px solid var(--blue); letter-spacing: -0.02em; }
.dm-modal-body p { font-size: 14px; color: var(--muted); line-height: 1.7; margin: 0 0 14px; white-space: pre-line; }
.dm-modal-body p:last-child { margin-bottom: 0; }
.dm-modal-cta { margin-top: 22px; padding: 11px 22px; background: var(--dark); color: #fff; border: none; border-radius: 10px; font-size: 13.5px; font-weight: 600; cursor: pointer; transition: all 0.18s; }
.dm-modal-cta:hover { background: var(--blue); }

@keyframes dm-fade-up {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 980px) {
  .dm-hero-grid { grid-template-columns: 1fr; gap: 40px; }
  .dm-cards { grid-template-columns: repeat(2, 1fr); }
  .dm-test-grid { grid-template-columns: 1fr; }
  .dm-footer-top { grid-template-columns: 1fr; }
  .dm-footer-links { align-items: flex-start; flex-direction: row; flex-wrap: wrap; gap: 18px; }
  .dm-trust-grid { grid-template-columns: repeat(2, 1fr); gap: 28px; }
}
@media (max-width: 640px) {
  .dm-nav-inner { padding: 12px 16px; }
  .dm-brand-tag { display: none; }
  .dm-nav-cta { display: none; }
  .dm-container { padding: 0 18px; }
  .dm-hero { padding: 50px 0 70px; }
  .dm-bullets { grid-template-columns: 1fr; }
  .dm-form-card { padding: 24px; }
  .dm-cards { grid-template-columns: 1fr; }
  .dm-section { padding: 60px 0; }
  .dm-ai { padding: 70px 0; }
  .dm-mobile-cta { display: inline-flex; }
  .dm-footer-bottom { flex-direction: column; align-items: flex-start; text-align: left; }
  body { padding-bottom: 80px; }
  .dm-modal { padding: 28px 22px; }
  .dm-trust-grid { grid-template-columns: repeat(2, 1fr); }
  .dm-trust-num { font-size: 1.6rem; }
}
`;

export default App;
