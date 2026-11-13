/**
 * Quentin JEAN Portfolio — Bilingual Engine (FR / EN) & Interactive Case Studies
 */

const I18N = {
  fr: {
    brand_title: "Quentin JEAN",
    brand_badge: "AI ENGINEER",
    nav_projects: "Projets",
    nav_methodology: "Démarche R&D",
    nav_career: "Parcours",
    nav_contact: "Contact",
    cv_btn_fr: "📄 CV (FR)",
    cv_btn_en: "📄 CV (EN)",
    
    // Hero
    hero_pill: "Disponible pour opportunités AI Engineer / MLOps / R&D",
    hero_title: `Building intelligent systems that solve <span class="gradient-text">real-world problems</span>.`,
    hero_subtitle: `Ingénieur en Intelligence Artificielle spécialisé dans le couplage entre 
      <strong>Systèmes Agentiques (MCP, LangGraph)</strong>, 
      <strong>Contrôle Prédictif (MPC)</strong> et 
      <strong>Déploiement d'Applications Web & MLOps</strong>. Fort de mon expérience R&D en entreprise sur les architectures de contrôle, les agents autonomes et les systèmes temps réel, j'ai transposé ces compétences de pointe sur de nouveaux cas d'usage industriels (Data Center IA et Mobilité Électrique) afin de proposer des implémentations de référence 100% open-source, robustes et libres de tout risque de secret de fabrique.`,
    hero_cta_projects: "Explorer les Études de Cas ↓",
    hero_cta_github: "Voir mon GitHub ↗",
    
    // Stats
    stat_transposition_num: "2",
    stat_transposition_label: "Transpositions R&D Entreprise",
    stat_engineering_num: "4",
    stat_engineering_label: "Projets Ingénierie & École",
    stat_reproducible_num: "100%",
    stat_reproducible_label: "Code Reproductible & Testé",
    stat_nda_num: "0%",
    stat_nda_label: "Risque NDA (Code Open-Source)",

    // Section Projets
    projects_tag: "Réalisations Concrètes",
    projects_title: "Études de Cas & Projets Phares",
    projects_desc: "Chaque projet est documenté selon une démarche d'ingénierie rigoureuse : problématique métier, architecture technique, déploiement d'application, défis résolus et métriques vérifiables.",
    
    // Filters
    filter_all: "Tous les Projets (6)",
    filter_agentic: "Systèmes Agentiques (MCP)",
    filter_mpc: "R&D & Contrôle Prédictif (MPC)",
    filter_mlops: "MLOps & Industrialisation",
    filter_deep_learning: "Deep Learning & Vision",

    // Project Cards
    p1_cat: "Systèmes Agentiques, Cloud & App",
    p1_origin: "Maquette d'Usage & Exploitation R&D",
    p1_title: "Green AI Data Center Platform (FastMCP + LangGraph + App Web)",
    p1_desc: "Maquette d'usage et d'exploitation de mes compétences R&D entreprise : plateforme complète avec microservices FastMCP bicéphales (ports 8001/8002), orchestrateur LangGraph, application web interactive de supervision et déploiement conteneurisé Docker-Compose.",
    p1_metrics: "⚡ <strong>Déploiement Web & Production :</strong> Dashboard interactif temps réel, architecture microservices événementielle, contrats JSON stricts et 100% libre de secret de fabrique.",
    
    p2_cat: "Contrôle Prédictif (MPC)",
    p2_origin: "Maquette d'Usage & Exploitation R&D",
    p2_title: "MPC Fast-Charging & Jumeau Numérique Batterie EV",
    p2_desc: "Maquette d'usage et d'exploitation de mes compétences R&D entreprise : contrôleur prédictif à horizon fuyant (SLSQP temps réel < 0.5s) couplé à un jumeau numérique 2-RC Thévenin calibré par estimation bayésienne MAP sur profil normé HPPC (sans données d'entreprise).",
    p2_metrics: "📊 <strong>Démarche R&D :</strong> Identification de paramètres à RMSE = 0.0021V sur profil normé HPPC, -79.0% d'effort thermique par rapport à CC-CV et pic T < 42.1°C.",

    p3_cat: "MLOps & Industrialisation",
    p3_origin: "CY Tech Ingénierie",
    p3_title: "Pipeline MLOps Industrialisé sous Kedro",
    p3_desc: "Pipeline de Machine Learning production-ready avec orchestration Kedro (loading, processing, training), optimisation bayésienne des hyperparamètres (Hyperopt TPE) et suite de tests automatisés.",
    p3_metrics: "🛠️ <strong>Qualité Logicielle :</strong> F1-score augmenté de +7.4%, 100% reproductible en une ligne de commande <code>kedro run</code>.",

    p4_cat: "Systèmes Agentiques & NLP",
    p4_origin: "CY Tech Ingénierie",
    p4_title: "Système Multi-Agents Coaching Sport & Santé",
    p4_desc: "Architecture distribuée d'agents sous LangGraph couplés à des outils déterministes réels pour éliminer les hallucinations de calcul calorique et respecter les contraintes médicales strictes.",
    p4_metrics: "📈 <strong>Validation E2E :</strong> 100% de précision arithmétique (vs 68% pour agent monolithique) et 100% de respect des allergies.",

    p5_cat: "Deep Learning & Vision",
    p5_origin: "CY Tech R&D",
    p5_title: "Classification d'Herbiers par CrossViT & Attention Rollout",
    p5_desc: "Recherche sur Vision Transformers multi-échelles (CrossViT bi-branche) : interprétabilité par Attention Rollout, métrique IoU et fonction de perte régularisée IoU pour contraindre l'attention sur les structures botaniques réelles.",
    p5_metrics: "🔬 <strong>Recherche :</strong> +4.2% de Top-1 Accuracy et élimination des corrélations fallacieuses sur les artefacts de collection via régularisation IoU.",

    p6_cat: "Data Science & Application",
    p6_origin: "CY Tech Ingénierie",
    p6_title: "Application Prédictive Météo & Explicabilité (XGBoost & SHAP)",
    p6_desc: "Pipeline complet de prédiction de précipitations sur 140 000+ observations : imputation par micro-climat, encodage trigonométrique du vent, explicabilité SHAP et dashboard Streamlit interactif (simulateur what-if et sensibilité).",
    p6_metrics: "⚡ <strong>Serving & Explainability :</strong> Inférence temps réel (< 50ms) avec jauges de probabilité dynamiques, simulation what-if et décomposition locale des prédictions.",

    btn_read_study: "Lire l'Étude de Cas (6 points) →",

    // Section Méthodologie
    methodo_tag: "Approche Technique",
    methodo_title: "Ma Démarche d'Ingénierie R&D",
    methodo_desc: "Une méthode systématique inspirée des laboratoires de recherche académiques et des contraintes industrielles de terrain.",
    m1_title: "Conception Cyber-Physique Sûre & Déploiement Web",
    m1_desc: "Séparation étanche entre les boucles de contrôle rapide (automates, sécurité matérielle) et l'intelligence agentique lente. Architecture logicielle événementielle temps réel, tableaux de bord de télémétrie et déploiement d'applications conteneurisées.",
    m2_title: "IA Hybride & Modélisation Physique",
    m2_desc: "Enrichissement des modèles physiques (thermodynamique continue, aéraulique) par des algorithmes d'apprentissage automatique, recalage d'état par Filtre de Kalman et optimisation multivariable sous contraintes réelles.",
    m3_title: "Standardisation Software & MLOps",
    m3_desc: "Pipelines modulaires (Kedro), typage strict Pydantic V2, validation de schémas, tests unitaires automatisés (Pytest), intégration continue CI/CD et packaging Docker prêt pour la production.",

    // Section Parcours
    career_tag: "Expériences & Formations",
    career_title: "Parcours Académique & Industriel",
    
    exp1_date: "Sept. 2025 — Sept. 2026",
    exp1_role: "Ingénieur de Recherche en Alternance (IA, Systèmes & Déploiement Web)",
    exp1_company: "Vestaclim & Laboratoire CEEP (ARMINES — Mines Paris) • Paris",
    exp1_li1: "Conception et déploiement d'une architecture agentique complète (FastMCP) et d'un contrôleur prédictif (MPC) à horizon fuyant sur nano-ordinateur Raspberry Pi 5 sous Linux.",
    exp1_li2: "Développement d'interfaces de pilotage et d'architectures logicielles événementielles : synchronisation basse latence des consignes sans scrutation continue, persistance hybride (séries temporelles et données relationnelles) et dashboards de supervision.",
    exp1_li3: "Modélisation thermique 2C4R différentiable sous PyTorch (torch.nn.Module), recalage stochastique par Filtre de Kalman et coordination hebdomadaire avec l'équipe ETB de Mines Paris.",
    exp1_li4: "Validation des livrables par la direction technique et obtention des financements pour la thèse de doctorat issue du projet.",

    exp2_date: "Juin 2024 — Août 2024",
    exp2_role: "Stage Élève Ingénieur en Cybersécurité",
    exp2_company: "Emeria • Courbevoie",
    exp2_li1: "Analyse des vulnérabilités, mise en place de plans de gestion des incidents de sécurité.",
    exp2_li2: "Audit d'architecture sécurisée et gouvernance des politiques IAM sur AWS.",

    edu1_date: "Depuis Sept. 2023",
    edu1_role: "Diplôme d'Ingénieur en Informatique — Spécialisation IA",
    edu1_company: "CY Tech (ex-EISTI) • Cergy",
    edu1_li1: "Spécialisation Intelligence Artificielle (Deep Learning, MLOps, Architectures Agentiques, Calcul Quantique).",
    edu1_li2: "Formation doctorale à la recherche et conduite de projets R&D avancés.",

    edu2_date: "Janv. 2025 — Mai 2025",
    edu2_role: "Semestre International d'Excellence",
    edu2_company: "Reykjavík University • Islande",
    edu2_li1: "Deep Learning avancé, Intelligence Artificielle et Empirical Software Engineering.",
    edu2_li2: "Gouvernance et conformité de cybersécurité appliquée à l'université.",

    edu3_date: "Sept. 2020 — Juin 2023",
    edu3_role: "Classes Préparatoires aux Grandes Écoles (CPGE) — MP",
    edu3_company: "Lycée Condorcet • Paris",
    edu3_li1: "Formation intensive d'excellence en Mathématiques et Physique. Rigueur analytique et abstraction formelle.",

    // Footer
    footer_title: "Prêt à collaborer sur vos défis IA & Systèmes ?",
    footer_desc: "Qu'il s'agisse d'architectures agentiques MCP, de déploiement d'applications web temps réel, d'industrialisation MLOps ou de modélisation prédictive sous contraintes, échangeons sur vos enjeux.",
    footer_cv_fr: "Télécharger CV (Français)",
    footer_cv_en: "Download CV (English)",
    footer_copy: "© 2026 Quentin JEAN — AI Engineer & R&D Researcher. Portfolio conçu avec passion et rigueur technique.",

    modal_repo_btn: "Accéder au Dépôt GitHub ↗"
  },

  en: {
    brand_title: "Quentin JEAN",
    brand_badge: "AI ENGINEER",
    nav_projects: "Projects",
    nav_methodology: "R&D Methodology",
    nav_career: "Background",
    nav_contact: "Contact",
    cv_btn_fr: "📄 Resume (FR)",
    cv_btn_en: "📄 Resume (EN)",
    
    // Hero
    hero_pill: "Available for AI Engineer / MLOps / R&D Opportunities",
    hero_title: `Building intelligent systems that solve <span class="gradient-text">real-world problems</span>.`,
    hero_subtitle: `Artificial Intelligence Engineer specializing in the convergence of 
      <strong>Agentic Systems (MCP, LangGraph)</strong>, 
      <strong>Model Predictive Control (MPC)</strong>, and 
      <strong>Web Application Deployment & MLOps</strong>. Leveraging my enterprise R&D experience in control architectures, autonomous agents, and real-time systems, I transposed and generalized these competencies onto new industrial domains (AI Data Centers and Electric Mobility) to provide 100% open-source, robust reference blueprints free from trade secret constraints.`,
    hero_cta_projects: "Explore Case Studies ↓",
    hero_cta_github: "View my GitHub ↗",
    
    // Stats
    stat_transposition_num: "2",
    stat_transposition_label: "Enterprise R&D Blueprints",
    stat_engineering_num: "4",
    stat_engineering_label: "Core Engineering Projects",
    stat_reproducible_num: "100%",
    stat_reproducible_label: "Reproducible & Tested Code",
    stat_nda_num: "0%",
    stat_nda_label: "NDA Risk (100% Open-Source)",

    // Section Projets
    projects_tag: "Technical Showcase",
    projects_title: "Flagship Projects & Case Studies",
    projects_desc: "Each project is engineered with production rigor: business constraints, microservice architecture, web deployment, technical challenges solved, and verifiable benchmarks.",
    
    // Filters
    filter_all: "All Projects (6)",
    filter_agentic: "Agentic Systems (MCP)",
    filter_mpc: "R&D & Predictive Control (MPC)",
    filter_mlops: "MLOps & Production",
    filter_deep_learning: "Deep Learning & Vision",

    // Project Cards
    p1_cat: "Agentic Systems, Cloud & Web App",
    p1_origin: "R&D Blueprint & Enterprise Transposition",
    p1_title: "Green AI Data Center Platform (FastMCP + LangGraph + Web App)",
    p1_desc: "Enterprise R&D blueprint: complete platform with dual-server FastMCP microservices (ports 8001/8002), LangGraph orchestrator, interactive web supervision dashboard, and containerized Docker-Compose deployment.",
    p1_metrics: "⚡ <strong>Web Deployment & Prod:</strong> Interactive real-time console, event-driven microservices, strict JSON contracts, and zero trade secret risk.",
    
    p2_cat: "Model Predictive Control (MPC)",
    p2_origin: "R&D Blueprint & Enterprise Transposition",
    p2_title: "EV Battery Fast-Charging MPC & Digital Twin",
    p2_desc: "Enterprise R&D blueprint: receding-horizon predictive controller (real-time SLSQP < 0.5s) coupled with a 2-RC Thevenin digital twin calibrated via Bayesian MAP estimation on standard HPPC profiles (zero enterprise data).",
    p2_metrics: "📊 <strong>R&D Performance:</strong> Parameter fitting at RMSE = 0.0021V on standard HPPC profiles, -79.0% thermal aging stress over CC-CV, and peak T < 42.1°C.",

    p3_cat: "MLOps & Production Engineering",
    p3_origin: "CY Tech Engineering",
    p3_title: "Industrialized MLOps Pipeline with Kedro",
    p3_desc: "Production-ready machine learning pipeline with modular Kedro orchestration (loading, processing, training), Bayesian hyperparameter tuning (Hyperopt TPE), and automated test suite.",
    p3_metrics: "🛠️ <strong>Software Craft:</strong> F1-score boosted by +7.4%, 100% reproducible with a single <code>kedro run</code> command.",

    p4_cat: "Agentic Systems & NLP",
    p4_origin: "CY Tech Engineering",
    p4_title: "Multi-Agent Health & Athletic Coaching System",
    p4_desc: "Distributed multi-agent architecture in LangGraph coupled with deterministic dataset tools to eliminate mathematical hallucinations and strictly enforce medical constraints.",
    p4_metrics: "📈 <strong>E2E Validation:</strong> 100% arithmetic precision (vs 68% for monolithic baseline) and 100% allergy constraint compliance.",

    p5_cat: "Deep Learning & Computer Vision",
    p5_origin: "CY Tech R&D",
    p5_title: "Herbarium Classification with CrossViT & Attention Rollout",
    p5_desc: "Multi-scale Vision Transformers research (dual-branch CrossViT): interpretability via Attention Rollout, IoU metrics, and an IoU-regularized loss function forcing attention onto authentic botanical structures.",
    p5_metrics: "🔬 <strong>Research:</strong> +4.2% Top-1 accuracy and elimination of spurious correlations on museum collection tags via IoU regularization.",

    p6_cat: "Data Science & Application",
    p6_origin: "CY Tech Engineering",
    p6_title: "Weather Prediction & Explainability App (XGBoost & SHAP)",
    p6_desc: "End-to-end rainfall prediction pipeline over 140,000+ observations: micro-climate stratified imputation, trigonometric wind encoding, SHAP explainability, and interactive Streamlit simulator.",
    p6_metrics: "⚡ <strong>Serving & Explainability:</strong> Sub-50ms inference, dynamic probability gauges, what-if sensitivity simulations, and local SHAP waterfall decomposition.",

    btn_read_study: "Read Case Study (6 steps) →",

    // Section Méthodologie
    methodo_tag: "Technical Approach",
    methodo_title: "My R&D Engineering Methodology",
    methodo_desc: "A systematic framework grounded in academic research rigor and production industrial constraints.",
    m1_title: "Cyber-Physical Safety & Web Deployment",
    m1_desc: "Strict decoupling between fast control loops (hardware PLCs, thermal safety interlocks) and slow agentic cognitive layers. Real-time event-driven software architecture, live telemetry dashboards, and containerized deployment.",
    m2_title: "Hybrid AI & Physics Modeling",
    m2_desc: "Integrating physical principles (continuous thermodynamics, state-space ODEs) with machine learning, Kalman state filtering, and constrained multivariable optimization.",
    m3_title: "Software Craft & MLOps Standards",
    m3_desc: "Modular pipelines (Kedro), strict Pydantic V2 typing, schema validation, automated test suites (Pytest), GitHub Actions CI/CD, and production Docker container packaging.",

    // Section Parcours
    career_tag: "Experience & Education",
    career_title: "Academic & Industrial Background",
    
    exp1_date: "Sept. 2025 — Sept. 2026",
    exp1_role: "R&D AI, Systems & Web Deployment Engineer Apprentice",
    exp1_company: "Vestaclim & CEEP Laboratory (ARMINES — Mines Paris) • Paris",
    exp1_li1: "Designed and deployed an end-to-end FastMCP agentic architecture and receding-horizon MPC controller on Raspberry Pi 5 under Linux.",
    exp1_li2: "Architected event-driven control interfaces: low-latency setpoint synchronization without polling, hybrid persistence (time-series telemetry and relational data), and operational dashboards.",
    exp1_li3: "Formulated a differentiable 2C4R thermal model in PyTorch (torch.nn.Module), Kalman state filtering, and weekly scientific coordination with Mines Paris researchers.",
    exp1_li4: "Software deliverables praised by executive leadership, directly securing the doctoral research grant in partnership with Mines Paris.",

    exp2_date: "June 2024 — Aug. 2024",
    exp2_role: "Cybersecurity Engineering Intern",
    exp2_company: "Emeria • Courbevoie",
    exp2_li1: "Vulnerability assessment and IT security incident management protocol implementation.",
    exp2_li2: "Cloud infrastructure security audit and AWS IAM governance hardening.",

    edu1_date: "Since Sept. 2023",
    edu1_role: "Master of Engineering in Computer Science & AI",
    edu1_company: "CY Tech (formerly EISTI) • Cergy",
    edu1_li1: "Major in Artificial Intelligence (Deep Learning, MLOps, Agentic Architectures, Quantum Computing).",
    edu1_li2: "Doctoral research methodology coursework and advanced R&D projects.",

    edu2_date: "Jan. 2025 — May 2025",
    edu2_role: "International Academic Semester",
    edu2_company: "Reykjavík University • Iceland",
    edu2_li1: "Advanced Deep Learning, Artificial Intelligence, and Empirical Software Engineering.",
    edu2_li2: "Cybersecurity governance and regulatory compliance frameworks for the university.",

    edu3_date: "Sept. 2020 — June 2023",
    edu3_role: "Intensive Foundation Degree (CPGE) — Maths & Physics",
    edu3_company: "Lycée Condorcet • Paris",
    edu3_li1: "Intensive curriculum in advanced Mathematics and Theoretical Physics. High-level analytical rigor and formal abstraction.",

    // Footer
    footer_title: "Ready to collaborate on your AI & Systems challenges?",
    footer_desc: "Whether you need FastMCP agentic architectures, real-time web application deployment, MLOps pipelines, or constrained predictive modeling, let's connect and discuss your challenges.",
    footer_cv_fr: "Download Resume (French)",
    footer_cv_en: "Download Resume (English)",
    footer_copy: "© 2026 Quentin JEAN — AI Engineer & R&D Researcher. Engineered with precision and production rigor.",

    modal_repo_btn: "View GitHub Repository ↗"
  }
};

const CASE_STUDIES = {
  fr: {
    "datacenter-mcp": {
      title: "Plateforme Agentique pour Data Center IA & Green Compute (FastMCP + LangGraph + App + Docker)",
      category: "Systèmes Agentiques, Cloud IA & Déploiement Web",
      origin: "Maquette d'Usage & Exploitation R&D — Transposition Ouverte de l'Expérience Entreprise",
      steps: [
        {
          num: "Étape 01",
          title: "Problématique & Contexte Métier",
          content: `Cette plateforme est une <strong>maquette d'usage et d'exploitation directe de mes compétences acquises en entreprise</strong> : j'ai réappliqué l'intégralité du savoir-faire développé en R&D sur une architecture agentique moderne pour répondre à l'arbitrage énergétique et thermique des clusters de supercalculateurs IA (GPU H100/A100).
          Il existe une rupture fondamentale entre deux échelles :
          1. La <strong>boucle physique rapide</strong> (télémétrie thermique GPU, puissance absorbée TDP, bridage dynamique de fréquence, indicateur PUE et intensité carbone gCO2/kWh du réseau).
          2. La <strong>boucle humaine et contractuelle lente</strong> (requêtes des équipes R&D : <em>"Besoin de 8 GPU H100 pour benchmarker CrossViT d'ici demain 8h"</em>, SLAs stricts, priorités de livraison).
          Les API monolithiques exposent des risques d'emballement thermique ou de non-respect des contrats sans auditabilité.`
        },
        {
          num: "Étape 02",
          title: "Rôle, Application Web & Déploiement",
          content: `Conception, développement et conteneurisation intégrale de la solution de bout en bout :
          • <strong>Microservices FastMCP :</strong> Développement asynchrone des serveurs MCP sur transport SSE (ports 8001 et 8002).
          • <strong>Orchestrateur LangGraph :</strong> StateGraph cognitif avec parsing Pydantic et pre-flight safety checks matériels.
          • <strong>Application Web Interactive (Dashboard Streamlit) :</strong> Console de pilotage temps réel permettant aux ingénieurs de soumettre des jobs en langage naturel, d'ajuster le power-capping et de visualiser l'état du cluster.
          • <strong>Architecture Événementielle Réactive :</strong> Conception d'un mécanisme de notification asynchrone temps réel, propageant les consignes utilisateur en mémoire vive en moins de 15 ms sans scrutation continue énergivore.
          • <strong>Déploiement Conteneurisé Production :</strong> Multi-stage <code>Dockerfile</code>, orchestration multi-conteneurs <code>docker-compose.yml</code> et pipeline GitHub Actions CI.`
        },
        {
          num: "Étape 03",
          title: "Architecture & Choix Technologiques",
          content: `L'architecture découple strictement le hardware de calcul de la mémoire sémantique :
          • <strong>Serveur 1 (Port 8001 - FastMCP) :</strong> Télémétrie cluster GPU et actionneurs sécurisés (power-capping 200W-450W, clock throttling, dispatch de jobs).
          • <strong>Serveur 2 (Port 8002 - FastMCP) :</strong> Mémoire sémantique vectorielle des SLAs équipes (SentenceTransformers <code>all-MiniLM-L6-v2</code> + DuckDB vectoriel par équipe).
          • <strong>Application Web & API :</strong> Interface Streamlit connectée aux microservices avec monitoring PUE et intensité carbone.
          • <strong>Orchestrateur LangGraph :</strong> Extraction structurée Pydantic et raisonnement multimodal.`
        },
        {
          num: "Étape 04",
          title: "Défis Techniques & Solutions Apportées",
          content: `• <strong>Résilience Cyber-Physique :</strong> Implémentation d'un contrat d'interface JSON strict et immuable (<code>execution_status</code>, <code>system_context</code>, <code>db_trace</code>) garantissant zéro plantage client.
          • <strong>Protection Matérielle & Décorateur de Sécurité :</strong> Clamping automatique de la puissance GPU et coupure thermique d'urgence dès que la température dépasse 80.0°C, interceptant toute panne matérielle via un décorateur Python robuste.
          • <strong>Isolation Multi-Tenant :</strong> Base de données DuckDB dédiée par équipe de recherche (<code>team_&lt;id&gt;.db</code>) supprimant tout risque de fuite de contexte.`
        },
        {
          num: "Étape 05",
          title: "Tests, Métriques & Résultats",
          content: `• <strong>Temps de réponse de bout en bout :</strong> &lt; 380 ms pour la boucle de récupération vectorielle et l'audit de télémétrie.
          • <strong>Déploiement Clé en Main :</strong> Déploiement reproductible en une commande <code>docker compose up</code>.
          • <strong>Robustesse :</strong> 100% des erreurs matérielles ou timeouts interceptés par des directives sémantiques de repli (fallback).
          • <strong>Couverture de tests :</strong> Suite de tests unitaires automatisés validant la sérialisation des contrats, les bornes de sécurité et la similarité cosinus.`
        },
        {
          num: "Étape 06",
          title: "Enseignements & Perspectives",
          content: `• Démontre la supériorité de MCP pour outiller les agents autonomes sur des infrastructures cloud critiques et conteneurisées.
          • Perspectives : Intégration d'un module d'arbitrage prédictif pour différer les entraînements non urgents sur les heures à mix électrique 100% renouvelable.`
        }
      ],
      github: "../1-agentic-datacenter-mcp"
    },

    "mpc-battery": {
      title: "Contrôle Prédictif (MPC) & Jumeau Numérique Batterie EV (Fast-Charging)",
      category: "Contrôle Prédictif & R&D Mobilité Électrique",
      origin: "Maquette d'Usage & Exploitation R&D — Transposition Ouverte de l'Expérience Entreprise",
      steps: [
        {
          num: "Étape 01",
          title: "Problématique & Contexte Métier",
          content: `Cette plateforme est une <strong>maquette d'usage et d'exploitation directe de mes compétences acquises en entreprise</strong> sur le contrôle prédictif (MPC) et la thermodynamique. J'ai transposé ces méthodes formelles sur un enjeu critique de la transition énergétique : la charge ultra-rapide des packs batteries de véhicules électriques (borne DC haute puissance).
          La vitesse de charge doit composer avec deux barrières physiques critiques :
          1. <strong>Le risque de placage de lithium métallique</strong> en cas de surtension (V &gt; 4.20V).
          2. <strong>L'emballement thermique et le vieillissement accéléré</strong> dès que la température interne de cellule dépasse 45.0°C.
          Les protocoles industriels classiques (CC-CV) sont purement réactifs, conduisent à des surchauffes et obligent à brider la charge trop tardivement.`
        },
        {
          num: "Étape 02",
          title: "Rôle & Modélisation Sans Données Privées",
          content: `Conception intégrale de la chaîne d'optimisation et d'identification de système :
          • <strong>Modèle Physique Thévenin 2-RC :</strong> Modélisation d'état continue couplant dynamique électrique (SoC, surtensions de diffusion V_rc) et thermique (conduction cœur-surface et convection).
          • <strong>Courbe OCV Ouverte de Référence :</strong> Intégration de la courbe expérimentale de titrage galvanostatique à très bas régime (C/20) issue de la littérature scientifique ouverte (NMC 21700, 3.0V à 4.20V).
          • <strong>Démarche d'Identification HPPC :</strong> Implémentation du test automobile normé HPPC (Hybrid Pulse Power Characterization) avec bruit capteur synthétique.
          • <strong>Estimation Bayésienne MAP :</strong> Ajustement automatique des paramètres (R0, R1, C1, R_cs, R_sc) avec régularisation a priori gaussienne.`
        },
        {
          num: "Étape 03",
          title: "Architecture & Choix Technologiques",
          content: `• <strong>Horizon Fuyant Prédictif (3 minutes) :</strong> Minimisation en temps réel de J = W_soc · (SoC_target - SoC)² + W_thermal · max(0, T_core - 40)² + W_cool · P_cool + W_rate · (ΔI)² + W_volt · Pénalités.
          • <strong>Intégration Numérique RK4 :</strong> Résolution différentielle Runge-Kutta d'ordre 4 des 4 variables d'état (SoC, V_rc, T_core, T_surface).
          • <strong>Optimisation Sous Contraintes :</strong> Méthode SLSQP avec initialisation par warm-start pour converger en moins de 0.5 seconde.
          • <strong>Optimisation Multi-Objectif :</strong> Algorithme évolutionnaire cartographiant la frontière de Pareto et calculant l'hypervolume 2D.`
        },
        {
          num: "Étape 04",
          title: "Défis Techniques & Solutions Apportées",
          content: `• <strong>Non-linéarités thermiques :</strong> Prise en compte de la dépendance en température d'Arrhenius de la résistance interne et de la génération de chaleur réversible (chaleur entropique dOCV/dT).
          • <strong>Satisfaction stricte des bornes :</strong> 0 dépassement de la limite critique de 45°C grâce à la pré-activation de l'étage de refroidissement liquide par anticipation.
          • <strong>Indépendance des données :</strong> Le solveur résout la physique en direct à chaque pas de temps, éliminant tout besoin de jeu de données d'entraînement massif.`
        },
        {
          num: "Étape 05",
          title: "Tests, Métriques & Résultats",
          content: `• <strong>Effort Thermique Global :</strong> Réduit de <strong>-79.0%</strong> par rapport au protocole industriel standard CC-CV.
          • <strong>Pic de Température Cœur :</strong> Maintenu à <strong>39.5°C</strong> contre 45.8°C en CC-CV (qui violait la zone critique des 45°C).
          • <strong>Précision du Jumeau Numérique (RMSE) :</strong> <strong>RMSE = 0.0021 V</strong> sur la tension aux bornes lors du profil HPPC.
          • <strong>Validation Logicielle :</strong> 100% des tests unitaires validés (7/7 passés).`
        },
        {
          num: "Étape 06",
          title: "Enseignements & Perspectives",
          content: `• Démontre la supériorité de l'optimisation prédictive sous contraintes sur les heuristiques industrielles statiques pour prolonger la durée de vie des packs batteries.
          • Perspectives : Embarquement sur le BMS (Battery Management System) du véhicule via génération de code C ANSI.`
        }
      ],
      github: "../2-mpc-battery-thermal-management"
    },

    "mlops-purchase": {
      title: "Pipeline MLOps Industrialisé sous Kedro & LightGBM",
      category: "MLOps & Data Engineering",
      origin: "Projet Spécialisation IA CY Tech (MLOps)",
      steps: [
        {
          num: "Étape 01",
          title: "Problématique & Contexte Métier",
          content: `Beaucoup de modèles de Machine Learning restent au stade de notebooks exploratoires et échouent en production par manque de reproductibilité, de validation de données et de tests automatisés. L'objectif était de construire un pipeline de prédiction d'achat e-commerce complet, auditable et résilient aux variations de schéma.`
        },
        {
          num: "Étape 02",
          title: "Rôle & Responsabilités Personnelles",
          content: `• Mise en place de l'architecture logicielle modulaire avec Kedro.
          • Implémentation des nœuds de feature engineering et de gestion des valeurs manquantes.
          • Intégration de l'optimisation bayésienne des hyperparamètres (Hyperopt TPE).
          • Configuration du linter strict Ruff, des hooks de pre-commit et de la suite de tests Pytest.`
        },
        {
          num: "Étape 03",
          title: "Architecture & Choix Technologiques",
          content: `• <strong>Orchestrateur :</strong> Kedro (séparation Data Catalog, Paramètres, Pipelines).
          • <strong>Pipelines modulaires :</strong> <code>loading</code> (validation), <code>processing</code> (LabelEncoding, partitionnement stratifié), <code>training</code> (LightGBM + CV).
          • <strong>Optimisation :</strong> Hyperopt avec Tree-structured Parzen Estimator (TPE) sur validation croisée répétée.`
        },
        {
          num: "Étape 04",
          title: "Défis Techniques & Solutions Apportées",
          content: `• <strong>Prévention du Data Leakage :</strong> Ajustement strict des transformateurs (LabelEncoders) uniquement sur le jeu d'entraînement avant projection sur le test.
          • <strong>Qualité du code :</strong> Configuration de règles de linting strictes avec <code>ruff.toml</code> et typage statique Python rigoureux.`
        },
        {
          num: "Étape 05",
          title: "Tests, Métriques & Résultats",
          content: `• <strong>Performance F1-score :</strong> Amélioration de <strong>+7.4%</strong> par rapport au modèle LightGBM avec hyperparamètres par défaut.
          • <strong>Automatisation :</strong> 100% du pipeline reproductible en une commande <code>kedro run</code>.`
        },
        {
          num: "Étape 06",
          title: "Enseignements & Perspectives",
          content: `• L'application des principes de Software Engineering au Machine Learning (MLOps) est un prérequis indispensable pour garantir la fiabilité des inférences en production.`
        }
      ],
      github: "../3-mlops-purchase-pipeline"
    },

    "nlp-nutrition": {
      title: "Système Multi-Agents (SMA) Coaching & Nutrition avec LangGraph",
      category: "Systèmes Agentiques & NLP Avancé",
      origin: "Projet NLP Avancé & Systèmes Multi-Agents (CY Tech)",
      steps: [
        {
          num: "Étape 01",
          title: "Problématique & Contexte Métier",
          content: `Les modèles LLM généralistes souffrent d'hallucinations arithmétiques sévères et de pertes de contexte critiques lorsqu'ils doivent concevoir des programmes combinant calculs caloriques précis et contraintes médicales strictes (allergies, pathologies).`
        },
        {
          num: "Étape 02",
          title: "Rôle & Responsabilités Personnelles",
          content: `• Architecture du graphe d'états distribué avec LangGraph.
          • Création des agents spécialisés (Entraînement, Nutritionniste, Superviseur, Garde-fous médicaux).
          • Interfaçage avec des jeux de données nutritionnels réels pour transformer le LLM en moteur de décision outillé.`
        },
        {
          num: "Étape 03",
          title: "Architecture & Choix Technologiques",
          content: `• <strong>StateGraph LangGraph :</strong> Coordination multi-nœuds avec gestion d'état partagé (<code>AgentState</code>).
          • <strong>Outils déterministes :</strong> Datasets CSV de macronutriments et dépenses caloriques interrogés via Pandas et RapidFuzz.
          • <strong>Moteur LLM :</strong> Llama 3 via Ollama en exécution locale pour la confidentialité des données de santé.`
        },
        {
          num: "Étape 04",
          title: "Défis Techniques & Solutions Apportées",
          content: `• <strong>Élimination du risque d'hallucination nutritionnelle :</strong> Les calculs ne sont jamais confiés au LLM en texte libre, mais délégués à des outils déterministes réels.
          • <strong>Gestion des conflits d'objectifs :</strong> Le Superviseur et les critiques valident la conformité clinique avant formulation de la réponse finale.`
        },
        {
          num: "Étape 05",
          title: "Tests, Métriques & Résultats",
          content: `• <strong>Benchmark comparatif E2E (5 scénarios critiques) :</strong>
          • Précision des calculs : <strong>100%</strong> pour le Multi-Agents outillé vs 68% pour un LLM mono-agent classique.
          • Respect des allergies alimentaires : <strong>100% de conformité</strong>.`
        },
        {
          num: "Étape 06",
          title: "Enseignements & Perspectives",
          content: `• Démontre qu'une architecture multi-agents outillée déterministe est la seule approche viable pour des applications critiques nécessitant à la fois flexibilité linguistique et exactitude numérique.`
        }
      ],
      github: "../4-multiagent-nutrition-nlp"
    },

    "crossvit-vision": {
      title: "Classification Fine d'Herbiers par Vision Transformers (CrossViT) & Attention Rollout",
      category: "Deep Learning & Vision par Ordinateur",
      origin: "Projet Recherche Deep Learning CY Tech",
      steps: [
        {
          num: "Étape 01",
          title: "Problématique & Contexte Métier",
          content: `La numérisation patrimoniale des planches d'herbiers botaniques nécessite une identification automatisée précise d'espèces végétales. Le défi réside dans la faible variance inter-espèces, les artefacts visuels de collections (timbres, étiquettes, rubans) et la nécessité de combiner des détails microscopiques (nervures de feuilles, épines) et la morphologie macroscopique globale.`
        },
        {
          num: "Étape 02",
          title: "Rôle & Responsabilités Personnelles",
          content: `• Implémentation modulaire de l'architecture CrossViT et de la variante témoin mono-résolution en PyTorch pur.
          • Développement de l'algorithme d'<strong>Attention Rollout</strong> pour tracer la propagation d'attention inter-couches vers le token [CLS].
          • Conception d'une fonction de perte <strong>IoURegularizedLoss</strong> pénalisant la focalisation d'attention en dehors des structures végétales réelles.
          • Générateur de données synthétiques pour une reproductibilité publique totale sans diffusion de données privées.`
        },
        {
          num: "Étape 03",
          title: "Architecture & Choix Technologiques",
          content: `• <strong>Dual-Branch Vision Transformer :</strong>
          - Branche 1 (Petits patchs 12x12) : extraction des détails fins et textures anatomiques.
          - Branche 2 (Grands patchs 16x16) : capture de la géométrie spatiale globale et ramification.
          • <strong>Cross-Attention :</strong> Échange périodique de tokens [CLS] entre branches.
          • <strong>Perte Régularisée IoU :</strong> L_total = L_CE + λ · (1 − IoU(Attention, Masque)).`
        },
        {
          num: "Étape 04",
          title: "Défis Techniques & Solutions Apportées",
          content: `• <strong>Suppression des corrélations fallacieuses :</strong> L'intégration de la perte régularisée IoU force le Transformer à ignorer les étiquettes et cartouches d'accession des planches d'herbiers.
          • <strong>Interprétabilité clinique :</strong> Visualisation des heatmaps d'attention en overlay binarisées par quantile Q0.8.`
        },
        {
          num: "Étape 05",
          title: "Tests, Métriques & Résultats",
          content: `• <strong>Précision Top-1 :</strong> <strong>+4.2%</strong> de gain par rapport à la baseline ViT mono-résolution.
          • <strong>Alignement Spatial IoU :</strong> Forte corrélation vérifiée entre les cartes d'attention rollout et les masques de segmentation réels.`
        },
        {
          num: "Étape 06",
          title: "Enseignements & Perspectives",
          content: `• Démontre la puissance des mécanismes d'attention régularisés pour garantir que les réseaux profonds apprennent de véritables marqueurs taxonomiques plutôt que des biais contextuels.`
        }
      ],
      github: "../5-crossvit-botanical-vision"
    },

    "weather-prediction": {
      title: "Application Prédictive Météo & Explicabilité (Streamlit, XGBoost & SHAP)",
      category: "Data Science & Déploiement d'Applications",
      origin: "Projet Application Métier IA CY Tech",
      steps: [
        {
          num: "Étape 01",
          title: "Problématique & Contexte Métier",
          content: `Prédire le risque de précipitations à J+1 sur l'ensemble du territoire australien à partir de 140 000+ relevés météorologiques historiques comportant de nombreuses données manquantes et un fort déséquilibre de classes.`
        },
        {
          num: "Étape 02",
          title: "Rôle & Responsabilités Personnelles",
          content: `• Analyse exploratoire et nettoyage des données avec imputation stratifiée par micro-climat (médiane et mode par station).
          • Feature engineering atmosphérique : encodage trigonométrique du vent (sin/cos), amplitude thermique diurne, chute de pression barométrique.
          • Benchmark de modèles (Régression Logistique, Random Forest, XGBoost, Perceptron Multi-Couches) et analyse d'explicabilité globale/locale avec SHAP.
          • Développement d'une interface Streamlit riche : jauges Plotly, simulateur what-if, analyse de sensibilité marginale.`
        },
        {
          num: "Étape 03",
          title: "Architecture & Choix Technologiques",
          content: `• <strong>Data Pipeline :</strong> Scikit-Learn Pipeline, standardisation, imputation robuste sans data leakage.
          • <strong>Modèle :</strong> XGBoost optimisé pour la courbe Precision-Recall.
          • <strong>Explicabilité :</strong> SHAP summary plots et waterfall plots pour l'audit des erreurs individuelles.
          • <strong>UI / Serving :</strong> Streamlit, Plotly pour la visualisation interactive temps réel.`
        },
        {
          num: "Étape 04",
          title: "Défis Techniques & Solutions Apportées",
          content: `• <strong>Absence de Data Leakage :</strong> Imputation spatio-temporelle cohérente évitant d'utiliser des statistiques futures lors de l'entraînement.
          • <strong>Auditabilité :</strong> L'intégration de SHAP permet d'expliquer instantanément pourquoi un orage a été prédit (chute brutale de pression + pic d'humidité à 15h).`
        },
        {
          num: "Étape 05",
          title: "Tests, Métriques & Résultats",
          content: `• Dashboard fluide avec temps de calcul < 50ms pour une prédiction temps réel basée sur des curseurs dynamiques.
          • Suite de tests unitaires automatisée validant les transformations trigonométriques et le vecteur de features.`
        },
        {
          num: "Étape 06",
          title: "Enseignements & Perspectives",
          content: `• L'interactivité et la vulgarisation visuelle d'un modèle d'IA sont clés pour son adoption par des utilisateurs métiers non techniques.`
        }
      ],
      github: "../6-weather-prediction-app"
    }
  },

  en: {
    "datacenter-mcp": {
      title: "Agentic AI Data Center Platform (FastMCP + LangGraph + Web App + Docker)",
      category: "Agentic Systems, Cloud Infrastructure & Web Deployment",
      origin: "R&D Blueprint & Enterprise Transposition — Open Reference Architecture",
      steps: [
        {
          num: "Step 01",
          title: "Problem Statement & Industry Context",
          content: `This platform is an <strong>open reference blueprint transposing my enterprise R&D expertise</strong>: I applied the methodologies developed in industrial R&D toward the thermal and energy arbitration of AI supercomputer clusters (GPU H100/A100).
          There is a critical tension across two time horizons:
          1. The <strong>fast physical loop</strong> (GPU junction temperatures, power capping TDP, dynamic frequency throttling, PUE metrics, and grid carbon intensity in gCO2/kWh).
          2. The <strong>slow cognitive and contractual loop</strong> (engineer natural language requests: <em>"Need 8x H100 GPUs to benchmark CrossViT before tomorrow 8 AM"</em>, strict SLAs, priority queues).
          Monolithic APIs risk thermal hardware throttling and contract violations without auditability.`
        },
        {
          num: "Step 02",
          title: "Role, Web Application & Deployment",
          content: `End-to-end design, implementation, and containerization:
          • <strong>FastMCP Microservices:</strong> Asynchronous MCP servers running over SSE transport (ports 8001 and 8002).
          • <strong>LangGraph Cognitive Orchestrator:</strong> StateGraph engine with Pydantic contract validation and hardware pre-flight guards.
          • <strong>Interactive Web Supervision Application:</strong> Real-time Streamlit dashboard allowing engineers to submit NLP compute requests, simulate hardware overheating, and tune power capping.
          • <strong>Reactive Event-Driven Architecture:</strong> Designed a low-latency asynchronous event-notification pattern, pushing user setpoints into controller RAM in under 15 ms without polling.
          • <strong>Production Containerized Deployment:</strong> Multi-stage <code>Dockerfile</code>, multi-service <code>docker-compose.yml</code> orchestration, and automated GitHub Actions CI.`
        },
        {
          num: "Step 03",
          title: "Architecture & Technical Stack",
          content: `Strict separation of hardware telemetry from semantic context memory:
          • <strong>Server 1 (Port 8001 - FastMCP):</strong> GPU cluster telemetry and safety actuators (power capping 200W-450W, clock throttling, job dispatch).
          • <strong>Server 2 (Port 8002 - FastMCP):</strong> Multi-tenant SLA vector memory (SentenceTransformers <code>all-MiniLM-L6-v2</code> + isolated per-team DuckDB databases).
          • <strong>Web Application & API:</strong> Streamlit console connected to microservices with live PUE and grid carbon monitoring.
          • <strong>LangGraph Orchestrator:</strong> Pydantic structured extraction and multi-step reasoning.`
        },
        {
          num: "Step 04",
          title: "Engineering Challenges & Solutions",
          content: `• <strong>Cyber-Physical Resilience:</strong> Immutable JSON contract envelopes (<code>execution_status</code>, <code>system_context</code>, <code>db_trace</code>) ensuring zero client crashes.
          • <strong>Hardware Safety Guard & Python Decorator:</strong> Automatic GPU power clamping and emergency thermal cutoff at 80.0°C, intercepting any telemetry bus exception via a dedicated Python decorator.
          • <strong>Multi-Tenant Isolation:</strong> Dedicated DuckDB file per research team (<code>team_&lt;id&gt;.db</code>) eliminating cross-team context leakage.`
        },
        {
          num: "Step 05",
          title: "Tests, Benchmarks & Results",
          content: `• <strong>End-to-End Latency:</strong> &lt; 380 ms for semantic retrieval and telemetry audit.
          • <strong>Turnkey Deployment:</strong> Fully reproducible in a single <code>docker compose up</code> command.
          • <strong>Fault Tolerance:</strong> 100% of hardware communication errors intercepted with deterministic fallback messages.
          • <strong>Test Coverage:</strong> Automated unit test suite verifying schema serialization, safety boundaries, and cosine similarity.`
        },
        {
          num: "Step 06",
          title: "Key Takeaways & Perspectives",
          content: `• Demonstrates the power of the Model Context Protocol (MCP) to equip autonomous agents on critical, containerized cloud infrastructure.
          • Perspectives: Integration of predictive carbon arbitration to schedule non-critical workloads during high renewable grid supply.`
        }
      ],
      github: "../1-agentic-datacenter-mcp"
    },

    "mpc-battery": {
      title: "Model Predictive Control (MPC) & EV Battery Digital Twin (Fast-Charging)",
      category: "Predictive Control & Clean Mobility R&D",
      origin: "R&D Blueprint & Enterprise Transposition — Open Reference Architecture",
      steps: [
        {
          num: "Step 01",
          title: "Problem Statement & Industry Context",
          content: `This platform is an <strong>open reference blueprint transposing my enterprise R&D expertise</strong> in Model Predictive Control (MPC) and thermodynamics. I applied these formal methods to a key challenge in electric mobility: ultra-fast DC fast-charging of EV lithium-ion battery packs.
          Fast charging faces two fundamental physical boundaries:
          1. <strong>Metallic lithium plating</strong> induced by cell overvoltage (V &gt; 4.20V).
          2. <strong>Thermal runaway and accelerated aging</strong> whenever internal core temperature exceeds 45.0°C.
          Standard industrial CC-CV heuristics are purely reactive, cause overheating, and ramp down current too late.`
        },
        {
          num: "Step 02",
          title: "Role & Physical Modeling Without Private Data",
          content: `Full design of the optimization pipeline and system identification framework:
          • <strong>2-RC Thevenin Physical Model:</strong> Continuous state-space ODEs coupling electrochemical dynamics (SoC, polarization overpotentials V_rc) and heat transfer (core-to-surface conduction and active cooling).
          • <strong>Open Reference OCV Curve:</strong> Integration of high-precision low-rate (C/20) galvanostatic titration data from open literature (NMC 21700, 3.0V to 4.20V).
          • <strong>Standard HPPC Identification:</strong> Implementation of the automotive standard HPPC (Hybrid Pulse Power Characterization) test with synthetic sensor noise.
          • <strong>Bayesian MAP Estimation:</strong> Automated physical parameter fitting (R0, R1, C1, R_cs, R_sc) with Gaussian prior regularization.`
        },
        {
          num: "Step 03",
          title: "Architecture & Solver Choices",
          content: `• <strong>Receding-Horizon MPC (3-Minute Horizon):</strong> Real-time minimization of J = W_soc · (SoC_target - SoC)² + W_thermal · max(0, T_core - 40)² + W_cool · P_cool + W_rate · (ΔI)² + W_volt · Penalties.
          • <strong>RK4 Numerical Integration:</strong> 4th-Order Runge-Kutta numerical integration of 4 state variables (SoC, V_rc, T_core, T_surface).
          • <strong>Constrained Optimization:</strong> SLSQP solver with warm-start initialization converging in &lt; 0.5 seconds.
          • <strong>Multi-Objective Pareto Analysis:</strong> Evolutionary metaheuristics mapping non-dominated trade-offs and computing 2D hypervolume indicators.`
        },
        {
          num: "Step 04",
          title: "Engineering Challenges & Solutions",
          content: `• <strong>Non-linear Thermal Dynamics:</strong> Arrhenius temperature-dependent internal resistance and entropic reversible heat generation (dOCV/dT).
          • <strong>Strict Boundary Enforcement:</strong> Zero overshoot of the critical 45.0°C boundary thanks to predictive liquid chiller pre-activation.
          • <strong>Data Independence:</strong> The solver computes physical state trajectories online, eliminating the need for massive historical training datasets.`
        },
        {
          num: "Step 05",
          title: "Tests, Benchmarks & Results",
          content: `• <strong>Thermal Aging Stress:</strong> Reduced by <strong>-79.0%</strong> compared to standard industrial CC-CV.
          • <strong>Peak Core Temperature:</strong> Capped at <strong>39.5°C</strong> vs 45.8°C in CC-CV (which breached the critical 45°C limit).
          • <strong>Digital Twin Accuracy (RMSE):</strong> <strong>RMSE = 0.0021 V</strong> on terminal voltage across the HPPC profile.
          • <strong>Software Verification:</strong> 100% automated test suite pass rate (7/7 passed).`
        },
        {
          num: "Step 06",
          title: "Key Takeaways & Perspectives",
          content: `• Demonstrates that constrained predictive control outperforms static heuristics in extending battery pack lifespan.
          • Perspectives: Embedded deployment onto an automotive ECU/BMS via ANSI C code generation.`
        }
      ],
      github: "../2-mpc-battery-thermal-management"
    },

    "mlops-purchase": {
      title: "Industrialized MLOps Pipeline with Kedro & LightGBM",
      category: "MLOps & Data Engineering",
      origin: "CY Tech AI Specialization Project",
      steps: [
        {
          num: "Step 01",
          title: "Problem Statement & Business Context",
          content: `Many machine learning models remain stuck as fragile exploratory notebooks and fail in production due to lack of reproducibility, unvalidated schemas, and absent automated tests. The goal was to build a complete, auditable e-commerce purchase prediction pipeline.`
        },
        {
          num: "Step 02",
          title: "Role & Personal Contributions",
          content: `• Designed modular software architecture with Kedro.
          • Implemented feature engineering and missing value imputation nodes.
          • Integrated Bayesian hyperparameter optimization (Hyperopt TPE).
          • Configured strict Ruff linter, pre-commit hooks, and Pytest coverage.`
        },
        {
          num: "Step 03",
          title: "Architecture & Technical Stack",
          content: `• <strong>Orchestrator:</strong> Kedro (separation of Data Catalog, Parameters, Pipelines).
          • <strong>Modular Pipelines:</strong> <code>loading</code> (validation), <code>processing</code> (LabelEncoding, stratified split), <code>training</code> (LightGBM + CV).
          • <strong>Optimization:</strong> Hyperopt with Tree-structured Parzen Estimator (TPE) over repeated cross-validation.`
        },
        {
          num: "Step 04",
          title: "Engineering Challenges & Solutions",
          content: `• <strong>Preventing Data Leakage:</strong> Strict fitting of transformers (LabelEncoders) exclusively on training splits before test projection.
          • <strong>Code Quality:</strong> Strict linting with <code>ruff.toml</code> and full Python type annotations.`
        },
        {
          num: "Step 05",
          title: "Tests, Benchmarks & Results",
          content: `• <strong>F1-Score Boost:</strong> Improved by <strong>+7.4%</strong> over default LightGBM hyperparameters.
          • <strong>Automation:</strong> 100% reproducible pipeline executed with a single <code>kedro run</code> command.`
        },
        {
          num: "Step 06",
          title: "Key Takeaways & Perspectives",
          content: `• Applying core Software Engineering principles to Machine Learning (MLOps) is essential for reliable production inference.`
        }
      ],
      github: "../3-mlops-purchase-pipeline"
    },

    "nlp-nutrition": {
      title: "Multi-Agent Coaching & Nutrition System with LangGraph",
      category: "Agentic Systems & Advanced NLP",
      origin: "CY Tech Advanced NLP & Multi-Agent Project",
      steps: [
        {
          num: "Step 01",
          title: "Problem Statement & Clinical Context",
          content: `Generic LLMs suffer from severe arithmetic hallucinations and context drift when generating athletic and nutritional programs with strict caloric goals and medical constraints (allergies, pathologies).`
        },
        {
          num: "Step 02",
          title: "Role & Personal Contributions",
          content: `• Architected distributed state graph using LangGraph.
          • Built specialized sub-agents (Workout, Nutrition, Supervisor, Medical Safety Guards).
          • Interfaced real nutritional datasets to transform the LLM into a deterministic decision engine.`
        },
        {
          num: "Step 03",
          title: "Architecture & Technical Stack",
          content: `• <strong>LangGraph StateGraph:</strong> Multi-node coordination with shared typed state (<code>AgentState</code>).
          • <strong>Deterministic Tooling:</strong> Macronutrient and calorie expenditure CSV datasets queried via Pandas and RapidFuzz.
          • <strong>LLM Engine:</strong> Local Llama 3 via Ollama for health data privacy.`
        },
        {
          num: "Step 04",
          title: "Engineering Challenges & Solutions",
          content: `• <strong>Eliminating Hallucinations:</strong> Calculations are strictly executed by deterministic Python tools rather than free-form LLM generation.
          • <strong>Conflict Resolution:</strong> Supervisor and Critic agents enforce safety compliance before issuing final output.`
        },
        {
          num: "Step 05",
          title: "Tests, Benchmarks & Results",
          content: `• <strong>Comparative E2E Benchmark (5 Critical Scenarios):</strong>
          • Arithmetic calculation precision: <strong>100%</strong> for Tooled Multi-Agents vs 68% for monolithic LLM.
          • Allergy constraint adherence: <strong>100% compliance</strong>.`
        },
        {
          num: "Step 06",
          title: "Key Takeaways & Perspectives",
          content: `• Proves that tool-augmented multi-agent architectures are the only viable choice for applications demanding both linguistic flexibility and arithmetic precision.`
        }
      ],
      github: "../4-multiagent-nutrition-nlp"
    },

    "crossvit-vision": {
      title: "Fine-Grained Herbarium Classification via CrossViT & Attention Rollout",
      category: "Deep Learning & Computer Vision",
      origin: "CY Tech Deep Learning Research Project",
      steps: [
        {
          num: "Step 01",
          title: "Problem Statement & Computer Vision Challenges",
          content: `Digitizing museum herbarium specimen sheets requires accurate automated plant species identification. Key challenges include subtle inter-species differences, museum collection artifacts (labels, stamps, tapes), and the need to combine microscopic leaf venation with overall plant morphology.`
        },
        {
          num: "Step 02",
          title: "Role & Personal Contributions",
          content: `• Implemented dual-branch CrossViT architecture and single-resolution baselines in pure PyTorch.
          • Developed the <strong>Attention Rollout</strong> algorithm to trace inter-layer attention propagation to the [CLS] token.
          • Formulated a novel <strong>IoURegularizedLoss</strong> penalizing attention leakage outside authentic botanical structures.
          • Built synthetic data generators for full reproducibility without releasing proprietary museum images.`
        },
        {
          num: "Step 03",
          title: "Architecture & Technical Stack",
          content: `• <strong>Dual-Branch Vision Transformer:</strong>
          - Branch 1 (Small 12x12 patches): fine anatomical textures and vein details.
          - Branch 2 (Large 16x16 patches): global geometric branching morphology.
          • <strong>Cross-Attention:</strong> Periodic exchange of [CLS] tokens between branches.
          • <strong>IoU Regularized Loss:</strong> L_total = L_CE + λ · (1 − IoU(Attention, Mask)).`
        },
        {
          num: "Step 04",
          title: "Engineering Challenges & Solutions",
          content: `• <strong>Removing Spurious Correlations:</strong> IoU regularization forces the Vision Transformer to ignore archival museum cards and barcode stickers.
          • <strong>Visual Interpretability:</strong> Rendered binarized attention rollout overlays across test images.`
        },
        {
          num: "Step 05",
          title: "Tests, Benchmarks & Results",
          content: `• <strong>Top-1 Accuracy:</strong> <strong>+4.2%</strong> gain over single-scale ViT baseline.
          • <strong>Spatial IoU Alignment:</strong> Strong spatial correlation between attention heatmaps and true botanical masks.`
        },
        {
          num: "Step 06",
          title: "Key Takeaways & Perspectives",
          content: `• Demonstrates the power of regularized attention mechanisms to ensure deep models learn authentic taxonomic markers instead of contextual shortcuts.`
        }
      ],
      github: "../5-crossvit-botanical-vision"
    },

    "weather-prediction": {
      title: "Australian Weather Prediction & Explainability (Streamlit, XGBoost & SHAP)",
      category: "Data Science & Web Application Deployment",
      origin: "CY Tech Applied AI Project",
      steps: [
        {
          num: "Step 01",
          title: "Problem Statement & Context",
          content: `Predicting next-day rainfall across Australia using 140,000+ daily meteorological observations characterized by missing sensor data and class imbalance.`
        },
        {
          num: "Step 02",
          title: "Role & Personal Contributions",
          content: `• Conducted exploratory data analysis and micro-climate stratified median/mode imputation.
          • Engineered atmospheric features: trigonometric wind encoding (sin/cos), diurnal temperature range, barometric pressure drops.
          • Benchmarked classifiers (Logistic Regression, Random Forest, XGBoost, MLP) and computed global/local SHAP attributions.
          • Developed interactive Streamlit web dashboard: Plotly probability gauges, what-if simulators, and marginal sensitivity plots.`
        },
        {
          num: "Step 03",
          title: "Architecture & Technical Stack",
          content: `• <strong>Data Pipeline:</strong> Scikit-Learn Pipeline, scaling, robust leakage-free imputation.
          • <strong>Model:</strong> Precision-Recall calibrated XGBoost classifier.
          • <strong>Explainability:</strong> SHAP summary and waterfall plots for individual prediction audits.
          • <strong>Serving / Web UI:</strong> Streamlit with Plotly for real-time interactive exploration.`
        },
        {
          num: "Step 04",
          title: "Engineering Challenges & Solutions",
          content: `• <strong>Zero Data Leakage:</strong> Spatial-temporal stratified imputation avoiding future leakage.
          • <strong>Auditability:</strong> SHAP decomposition instantly explains predictions (e.g. sharp pressure drop + 3 PM humidity surge).`
        },
        {
          num: "Step 05",
          title: "Tests, Benchmarks & Results",
          content: `• Sub-50ms inference time for real-time what-if scenario testing.
          • Automated Pytest suite validating feature transformation pipelines and feature vectors.`
        },
        {
          num: "Step 06",
          title: "Key Takeaways & Perspectives",
          content: `• Interactive web visual tools and local explainability are critical for adoption by non-technical domain stakeholders.`
        }
      ],
      github: "../6-weather-prediction-app"
    }
  }
};

// --- Global Language State ---
let currentLang = localStorage.getItem("portfolio_lang") || "fr";

// --- DOM Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initFilters();
  initModals();
  applyLanguage(currentLang);
});

function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      if (selectedLang !== currentLang) {
        currentLang = selectedLang;
        localStorage.setItem("portfolio_lang", currentLang);
        applyLanguage(currentLang);
      }
    });
  });
}

function applyLanguage(lang) {
  // Update buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Update HTML lang attribute
  document.documentElement.setAttribute("lang", lang);

  // Update all [data-i18n] elements
  const dict = I18N[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update document title
  if (lang === "en") {
    document.title = "Quentin JEAN — AI Engineer & R&D Researcher | Agentic Systems, MPC & MLOps";
  } else {
    document.title = "Quentin JEAN — AI Engineer & R&D Researcher | Systèmes Agentiques, MPC & MLOps";
  }
}

function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

function initModals() {
  const modalOverlay = document.getElementById("study-modal");
  const modalClose = document.getElementById("modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalStepsContainer = document.getElementById("modal-steps");
  const modalGithubLink = document.getElementById("modal-github-link");

  document.querySelectorAll(".btn-study").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const studyKey = btn.getAttribute("data-study");
      const langStudies = CASE_STUDIES[currentLang] || CASE_STUDIES["fr"];
      const study = langStudies[studyKey];
      if (!study) return;

      modalTitle.textContent = study.title;
      modalSubtitle.textContent = `${study.category} • ${study.origin}`;
      modalGithubLink.setAttribute("href", study.github);

      // Render 6 steps
      let html = "";
      study.steps.forEach(step => {
        html += `
          <div class="study-step">
            <div class="study-step-num">${step.num}</div>
            <h4 class="study-step-title">${step.title}</h4>
            <div class="study-step-content">${step.content}</div>
          </div>
        `;
      });

      // Add open-source reference note for industry R&D projects
      if (studyKey === "datacenter-mcp" || studyKey === "mpc-battery") {
        const ndaText = currentLang === "en" 
          ? `🛡️ <strong>Enterprise R&D Transposition & Reference Architecture:</strong> This project is an open-source reference implementation authored by Quentin JEAN, transposing the formal methodological expertise acquired during his industrial R&D apprenticeship onto a new domain, completely free from proprietary NDA constraints.`
          : `🛡️ <strong>Transposition & Réapplication R&D Entreprise :</strong> Ce projet est une implémentation de référence ouverte et autonome conçue par Quentin JEAN, réappliquant l'expertise méthodologique développée lors de ses travaux de R&D en entreprise sur un nouveau sujet industriel libre de toute contrainte de confidentialité.`;

        html += `
          <div class="nda-notice">
            ${ndaText}
          </div>
        `;
      }

      modalStepsContainer.innerHTML = html;
      modalOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "auto";
  };

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });
}
