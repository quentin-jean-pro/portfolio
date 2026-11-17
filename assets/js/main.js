/**
 * Quentin JEAN Portfolio — Bilingual Engine (FR / EN), Theme Engine (Light / Dark)
 * & STAR Methodology Interactive Case Studies with Zero-NDA Open Architecture Diagrams.
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
      <strong>Déploiement d'Applications Web & MLOps</strong>. Fort de mon expérience R&D en entreprise sur les architectures de contrôle et les agents autonomes, je conçois des systèmes d'IA robustes, testés et déployables en production.`,
    hero_cta_projects: "Explorer les Études de Cas ↓",
    hero_cta_github: "Voir mon GitHub ↗",
    
    // Stats
    stat_projects_label: "Projets Clés Documentés",
    stat_repos_label: "Dépôts GitHub Publics",
    stat_reproducible_label: "Code Reproductible & Testé",
    stat_exp_label: "Expérience R&D & Systèmes",

    // Section Projets
    projects_tag: "Réalisations Concrètes",
    projects_title: "Études de Cas & Projets Phares",
    projects_desc: "Chaque projet est documenté selon la méthode d'ingénierie STAR : Situation métier, Tâche & contraintes, Action & architecture système, Résultats chiffrés et vérifiables.",
    
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
    p2_desc: "Maquette d'usage et d'exploitation de mes compétences R&D entreprise : identification de paramètres physiques (résistances, conductivités thermiques) sous bornes réalistes et contrôleur prédictif à horizon fuyant (SLSQP temps réel < 0.5s) couplé à un jumeau numérique 2-RC Thévenin sur profil normé HPPC.",
    p2_metrics: "📊 <strong>Démarche R&D :</strong> Identification physique bornée (RMSE = 0.0021V sur HPPC), -79.0% d'effort thermique par rapport à CC-CV et pic T < 42.1°C.",

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

    btn_read_study: "Étude de Cas STAR (Détails & Architecture) →",

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
    exp1_role: "Apprenti Ingénieur R&D IA, Systèmes & Déploiement Web",
    exp1_company: "Vestaclim & Laboratoire CEEP (ARMINES — Mines Paris) • Paris",
    exp1_li1: "Conception et déploiement d'une architecture agentique FastMCP et d'un contrôleur prédictif MPC sous Linux embarqué (Raspberry Pi 5) : découplage strict entre la boucle rapide de contrôle machine (100% autonome et déterministe) et l'agent cognitif distant, interdisant toute altération non vérifiée des registres physiques.",
    exp1_li2: "Développement de l'interface de pilotage et du pont web applicatif : gestion sécurisée de l'authentification avec renouvellement automatique des tokens (JWT), résilience de la télémétrie InfluxDB (détection des capteurs défaillants avec passage en mode dégradé si la donnée est trop ancienne) et persistance PostgreSQL robuste lors des changements de modèles d'embeddings.",
    exp1_li3: "Modélisation physique compacte (modèles entraînés hors cible, inférence et solveur différentiable 2C4R sous PyTorch adaptés aux capacités de calcul de l'embarqué), recalage par Filtre de Kalman et coordination hebdomadaire avec Mines Paris.",
    exp1_li4: "Validation des livrables par la direction technique et obtention des financements pour la thèse de doctorat issue du projet.",

    exp2_date: "Juin 2024 — Août 2024",
    exp2_role: "Stagiaire Ingénieur Cybersécurité",
    exp2_company: "Emeria • Courbevoie",
    exp2_li1: "Analyse de vulnérabilités et mise en œuvre de protocoles de gestion des incidents de sécurité IT.",
    exp2_li2: "Audit de conformité de l'infrastructure Cloud et durcissement des politiques de gouvernance IAM AWS.",

    edu1_date: "Depuis Sept. 2023",
    edu1_role: "Diplôme d'Ingénieur en Informatique — Spécialisation IA",
    edu1_company: "CY Tech (ex-EISTI) • Cergy",
    edu1_li1: "Majeure Intelligence Artificielle (Deep Learning, MLOps, Architectures Agentiques, Informatique Quantique).",
    edu1_li2: "Formation doctorale à la démarche de recherche et projets d'ingénierie avancés.",

    edu2_date: "Janv. 2025 — Mai 2025",
    edu2_role: "Semestre Académique International",
    edu2_company: "Reykjavík University • Islande",
    edu2_li1: "Advanced Deep Learning, Artificial Intelligence et Empirical Software Engineering.",
    edu2_li2: "Gouvernance cybersécurité et conformité réglementaire pour l'université.",

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
    nav_methodology: "R&D Approach",
    nav_career: "Career",
    nav_contact: "Contact",
    cv_btn_fr: "📄 Resume (FR)",
    cv_btn_en: "📄 Resume (EN)",
    
    // Hero
    hero_pill: "Available for AI Engineer / MLOps / R&D Opportunities",
    hero_title: `Building intelligent systems that solve <span class="gradient-text">real-world problems</span>.`,
    hero_subtitle: `Artificial Intelligence Engineer specializing in the convergence of 
      <strong>Agentic Systems (MCP, LangGraph)</strong>, 
      <strong>Model Predictive Control (MPC)</strong>, and 
      <strong>Web Application Deployment & MLOps</strong>. Leveraging my enterprise R&D experience in control architectures and autonomous agents, I build robust, tested, and production-grade AI systems.`,
    hero_cta_projects: "Explore Case Studies ↓",
    hero_cta_github: "View my GitHub ↗",
    
    // Stats
    stat_projects_label: "Flagship Projects Documented",
    stat_repos_label: "Public GitHub Repositories",
    stat_reproducible_label: "Tested & Reproducible Code",
    stat_exp_label: "R&D & Systems Experience",

    // Section Projets
    projects_tag: "Technical Showcase",
    projects_title: "Flagship Projects & Case Studies",
    projects_desc: "Every project is documented using the STAR engineering framework: business Situation, Task & constraints, Action & system architecture, quantified Results & benchmarks.",
    
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
    p2_desc: "Enterprise R&D blueprint: physical parameter identification (resistances, thermal conductivities) under realistic physical bounds and receding-horizon predictive controller (real-time SLSQP < 0.5s) coupled with a 2-RC Thevenin digital twin calibrated on standard HPPC profiles.",
    p2_metrics: "📊 <strong>R&D Performance:</strong> Physically bounded parameter fitting (RMSE = 0.0021V on HPPC), -79.0% thermal aging stress over CC-CV, and peak T < 42.1°C.",

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

    btn_read_study: "STAR Case Study (Details & Architecture) →",

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
    exp1_li1: "Designed and deployed a FastMCP agentic architecture and receding-horizon MPC controller on embedded Linux (Raspberry Pi 5): enforced a strict boundary decoupling the autonomous deterministic control loop from high-level distant agent requests, prohibiting unverified register writes.",
    exp1_li2: "Architected the web supervision bridge and real-time event pipeline: resilient InfluxDB telemetry handling dropped packets with safety fallback when sensor data goes stale, automated JWT token refresh, and robust PostgreSQL migrations across embedding model changes.",
    exp1_li3: "Formulated compact physics-informed representations (models trained offline, lightweight differentiable 2C4R inference in PyTorch on the edge device), Kalman state filtering, and scientific collaboration with Mines Paris researchers.",
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
          star: "S",
          starLabel: "Situation & Contexte Industriel",
          title: "Le Défi : Deux Échelles de Temps Incompatibles",
          content: `Cette plateforme est une <strong>maquette d'usage et d'exploitation directe de mes compétences acquises en entreprise</strong> : j'ai réappliqué l'intégralité du savoir-faire développé en R&D sur une architecture agentique moderne pour répondre à l'arbitrage énergétique et thermique des clusters de supercalculateurs IA (GPU H100/A100).
          Il existe une rupture fondamentale entre deux échelles :
          1. La <strong>boucle physique rapide</strong> (télémétrie thermique GPU, puissance absorbée TDP, bridage dynamique de fréquence, indicateur PUE et intensité carbone gCO2/kWh du réseau).
          2. La <strong>boucle humaine et contractuelle lente</strong> (requêtes des équipes R&D : <em>"Besoin de 8 GPU H100 pour benchmarker CrossViT d'ici demain 8h"</em>, SLAs stricts, priorités de livraison).
          Les API monolithiques exposent des risques d'emballement thermique ou de non-respect des contrats sans auditabilité.`
        },
        {
          num: "Étape 02",
          star: "T",
          starLabel: "Tâche & Spécifications",
          title: "Objectifs & Spécifications Clés",
          content: `Conception, développement et conteneurisation intégrale d'une solution autonome sécurisée :
          • <strong>Séparation Étanche :</strong> Isoler le hardware de télémétrie critique de la mémoire sémantique pour empêcher qu'une hallucination LLM n'endommage un nœud de calcul.
          • <strong>Application Web Interactive (Streamlit) :</strong> Console de pilotage temps réel permettant aux ingénieurs de soumettre des jobs en langage naturel, d'ajuster le power-capping et de visualiser l'état du cluster.
          • <strong>Architecture Événementielle Réactive :</strong> Mécanisme de notification asynchrone temps réel, propageant les consignes utilisateur en mémoire vive en moins de 15 ms sans scrutation continue énergivore.
          • <strong>Déploiement Conteneurisé Production :</strong> Multi-stage <code>Dockerfile</code>, orchestration multi-conteneurs <code>docker-compose.yml</code> et pipeline GitHub Actions CI.`
        },
        {
          num: "Étape 03",
          star: "A",
          starLabel: "Action & Architecture Système",
          title: "Architecture Microservices FastMCP Bi-Serveur & Diagramme",
          content: `L'architecture découple strictement le hardware de calcul de la mémoire sémantique à travers deux microservices FastMCP asynchrones :
          • <strong>Serveur 1 (Port 8001 - FastMCP) :</strong> Télémétrie cluster GPU et actionneurs sécurisés (power-capping 200W-450W, clock throttling, dispatch de jobs).
          • <strong>Serveur 2 (Port 8002 - FastMCP) :</strong> Mémoire sémantique vectorielle des SLAs équipes (SentenceTransformers <code>all-MiniLM-L6-v2</code> + DuckDB vectoriel par équipe).
          • <strong>Orchestrateur LangGraph :</strong> Extraction structurée Pydantic et raisonnement multimodal sur transport SSE.`,
          diagram: `┌────────────────────────────────────────────────────────┐
│               Green AI Data Center Platform            │
└────────────────────────────────────────────────────────┘
          │ (User Request / Natural Language Job)
          ▼
┌──────────────────┐       ┌─────────────────────────────┐
│ Streamlit Web App│ ◄───► │   LangGraph StateGraph      │
│ (Live Dashboard) │       │ (Structured Pydantic Intent)│
└──────────────────┘       └──────────────┬──────────────┘
                                          │
                  ┌───────────────────────┴───────────────────────┐
                  ▼                                               ▼
     ┌─────────────────────────┐                     ┌─────────────────────────┐
     │  FastMCP Telemetry Svc  │                     │  FastMCP Vector DB Svc  │
     │       (Port 8001)       │                     │       (Port 8002)       │
     │ • Thermal Clamping      │                     │ • SentenceTransformers  │
     │ • Power Capping (W)     │                     │ • DuckDB Multi-Tenant   │
     │ • Clock Throttling      │                     │ • SLA Context Match     │
     └────────────┬────────────┘                     └────────────┬────────────┘
                  │                                               │
                  ▼                                               ▼
       [ Prometheus / GPUs ]                             [ Isolated Vector DB ]`
        },
        {
          num: "Étape 04",
          star: "A",
          starLabel: "Action & Implémentation Logicielle",
          title: "Garde-Fous Matériels, Résilience Télémétrique & Contrats d'Interface",
          content: `• <strong>Découplage Temporel & Invariants Matériels :</strong> Découplage strict entre la boucle rapide de contrôle machine (100% autonome et déterministe) et l'agent cognitif distant : aucune dépendance temporelle envers le LLM (dont les temps d'inférence peuvent atteindre plusieurs minutes sur cible contrainte) pour assurer la sécurité machine.
          • <strong>Résilience aux Pannes de Télémétrie InfluxDB :</strong> Gestion robuste des coupures de capteurs : interpolation sur micro-coupures de quelques secondes, et bascule immédiate en mode dégradé sécurisé si une mesure est trop ancienne (> TTL maximal), interdisant de piloter le système sur des métriques périmées.
          • <strong>Contrats d'Interface Immuables :</strong> Enveloppes JSON strictes validées par Pydantic (<code>execution_status</code>, <code>system_context</code>, <code>db_trace</code>) garantissant zéro plantage du dashboard en cas de microservice indisponible.
          • <strong>Gestion & Migration des Embeddings :</strong> Pipeline de ré-indexation propre des bases de données lors des changements de dimensions ou de modèles d'embeddings, sans rupture de schéma ni corruption de données.`
        },
        {
          num: "Étape 05",
          star: "R",
          starLabel: "Résultats & Benchmarks",
          title: "Métriques Chiffrées & Validation E2E",
          content: `• <strong>Temps de réponse de bout en bout :</strong> &lt; 380 ms pour la boucle de récupération vectorielle et l'audit de télémétrie.
          • <strong>Déploiement Clé en Main :</strong> Déploiement reproductible en une commande <code>docker compose up</code>.
          • <strong>Robustesse :</strong> 100% des erreurs matérielles ou timeouts interceptés par des directives sémantiques de repli (fallback).
          • <strong>Couverture de tests :</strong> Suite de tests unitaires automatisés validant la sérialisation des contrats, les bornes de sécurité et la similarité cosinus.`
        },
        {
          num: "Étape 06",
          star: "R",
          starLabel: "Impact & Enseignements",
          title: "Enseignements Techniques & Démarche d'Ingénierie",
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
          star: "S",
          starLabel: "Situation & Contexte Industriel",
          title: "Le Défi : Concilier Vitesse de Recharge et Dégradation Physique",
          content: `Cette plateforme est une <strong>maquette d'usage et d'exploitation directe de mes compétences acquises en entreprise</strong> sur l'identification de systèmes physiques et le contrôle prédictif (MPC). J'ai transposé ces méthodes formelles sur un enjeu critique de la transition énergétique : la charge ultra-rapide des packs batteries de véhicules électriques (borne DC haute puissance).
          La vitesse de charge doit composer avec deux barrières physiques critiques :
          1. <strong>Le risque de placage de lithium métallique</strong> en cas de surtension ($V > 4.20\\text{V}$).
          2. <strong>L'emballement thermique et le vieillissement accéléré</strong> dès que la température interne de cellule dépasse $45.0^\\circ\\text{C}$.
          Les protocoles industriels classiques (CC-CV) sont purement réactifs, conduisent à des surchauffes et obligent à brider la charge trop tardivement.`
        },
        {
          num: "Étape 02",
          star: "T",
          starLabel: "Tâche & Spécifications",
          title: "Identification Physique & Modélisation Sans Données Privées",
          content: `Conception intégrale de la chaîne d'identification physique et d'optimisation :
          • <strong>Modèle Physique Thévenin 2-RC :</strong> Modélisation d'état continue couplant dynamique électrique (résistance ohmique $R_0$, résistance de polarisation $R_1$, capacité $C_1$) et thermique (résistances thermiques de conduction cœur-surface $R_{cs}$ et de convection $R_{sc}$).
          • <strong>Courbe OCV Ouverte de Référence :</strong> Intégration de la courbe expérimentale de titrage galvanostatique à très bas régime (C/20) issue de la littérature scientifique ouverte (NMC 21700, 3.0V à 4.20V).
          • <strong>Démarche d'Identification HPPC :</strong> Implémentation du test automobile normé HPPC (Hybrid Pulse Power Characterization) avec injection de bruit capteur réaliste.
          • <strong>Estimation Sous Contraintes Physiques :</strong> Identification des paramètres par calibration bayésienne MAP (Maximum A Posteriori) pour borner strictement le domaine admissible.`
        },
        {
          num: "Étape 03",
          star: "A",
          starLabel: "Action & Architecture Système",
          title: "Contrôleur MPC à Horizon Fuyant & Schéma Boucle Fermée",
          content: `• <strong>Horizon Fuyant Prédictif (3 minutes) :</strong> Minimisation en temps réel de $J = W_{\\text{soc}} \\cdot (\\text{SoC}_{\\text{cible}} - \\text{SoC})^2 + W_{\\text{therm}} \\cdot \\max(0, T_{\\text{cœur}} - 40)^2 + W_{\\text{cool}} \\cdot P_{\\text{cool}} + W_{\\text{rate}} \\cdot (\\Delta I)^2$.
          • <strong>Intégration Numérique RK4 :</strong> Résolution différentielle Runge-Kutta d'ordre 4 des 4 variables d'état couplées ($\text{SoC}$, $V_{\\text{rc}}$, $T_{\\text{cœur}}$, $T_{\\text{surface}}$).
          • <strong>Optimisation Sous Contraintes :</strong> Méthode SLSQP temps réel garantissant une convergence stable en moins de 45 ms grâce au warm-start et au pré-conditionnement d'état.`,
          diagram: `┌──────────────────────────────────────────────────────────────────┐
│              Closed-Loop Battery Fast-Charging MPC               │
└──────────────────────────────────────────────────────────────────┘
       ┌──────────────────────────────────────────────────┐
       │     Reference Trajectory (0% -> 80% Fast SoC)    │
       └────────────────────────┬─────────────────────────┘
                                │
                                ▼
       ┌──────────────────────────────────────────────────┐
       │   Receding-Horizon MPC Controller (SLSQP Solver) │
       │   min J = W_soc·(ΔSoC)² + W_therm·(T-40)² + W_cool│
       └────────────────────────┬─────────────────────────┘
                                │ Optimal Command u* = [I*, P_cool*]
                                ▼
       ┌──────────────────────────────────────────────────┐
       │         Actuation: DC Charger & Chiller          │
       └────────────────────────┬─────────────────────────┘
                                │ Current I(t), Cooling P(t)
                                ▼
       ┌──────────────────────────────────────────────────┐
       │  2-RC Thevenin + Lumped Thermal Digital Twin     │
       │  • State-Space ODEs (V_rc1, V_rc2, T_core, T_surf│
       │  • Parameter Calibration (MAP Bayesian on HPPC)  │
       └────────────────────────┬─────────────────────────┘
                                │ Real-Time Feedback (V_term, T_core)
                                └──────► [ T_core < 45°C Hard Safety Guard ]`
        },
        {
          num: "Étape 04",
          star: "A",
          starLabel: "Action & Implémentation Logicielle",
          title: "Identification Bornée des Paramètres Physiques & Résolution SLSQP",
          content: `• <strong>Le Défi Central de l'Identification Physique :</strong> En pratique industrielle, ajuster des paramètres de résistance ($R$) et de conductivité/capacité thermique ($C$) sur des signaux bruités sans bornage strict conduit invariablement à des aberrations : les optimiseurs sans contrainte convergent vers des optima mathématiques absurdes (résistances négatives $R < 0$, conductivités infinies) qui violent le second principe de la thermodynamique et font diverger le simulateur prédictif dès qu'il quitte le jeu de calibration.
          • <strong>La Solution d'Ingénieur (Bornage Physique Strict & Priors MAP) :</strong> J'ai encadré l'identification par des bornes d'admissibilité physique dures ($R_0 \in [10, 50]\\,\\text{m}\\Omega$, $R_{cs} > 0$, conductivités bornées par les limites physiques des matériaux) et une régularisation bayésienne MAP avec distribution a priori log-normale. Le solveur est forcé dans un espace de paramètres physiquement cohérent, garantissant un ajustement stable à $\\text{RMSE} = 0.0021\\,\\text{V}$.
          • <strong>Convergence Robuste du Contrôleur SLSQP :</strong> Pour éliminer les oscillations numériques du solveur prédictif face aux fronts thermiques abrupts, remplacement des contraintes dures par des pénalités quadratiques douces asymétriques ($\\Phi_{\\text{therm}} = \\max(0, T_{\\text{cœur}} - 40)^2$) couplées à des bornes strictes de tension ($V \\le 4.20\\,\\text{V}$) et de dérivée de courant ($\\Delta I$), assurant une convergence déterministe en $< 45\\,\\text{ms}$.
          • <strong>Refroidissement Anticipatoire :</strong> Le contrôleur enclenche l'étage de refroidissement liquide actif 90 secondes avant le pic de dissipation thermique de Joule, maintenant le cœur sous 39.5°C et évitant le bridage d'urgence.`
        },
        {
          num: "Étape 05",
          star: "R",
          starLabel: "Résultats & Benchmarks",
          title: "Métriques Chiffrées & Comparatif CC-CV",
          content: `• <strong>Effort Thermique Global :</strong> Réduit de <strong>-79.0%</strong> par rapport au protocole industriel standard CC-CV.
          • <strong>Pic de Température Cœur :</strong> Maintenu à <strong>39.5°C</strong> contre 45.8°C en CC-CV (qui violait la zone critique des 45°C).
          • <strong>Précision du Jumeau Numérique (RMSE) :</strong> <strong>RMSE = 0.0021 V</strong> sur la tension aux bornes lors du profil HPPC.
          • <strong>Validation Logicielle :</strong> 100% des tests unitaires validés (7/7 passés).`
        },
        {
          num: "Étape 06",
          star: "R",
          starLabel: "Impact & Enseignements",
          title: "Enseignements Techniques & Perspectives Industrielles",
          content: `• Démontre la supériorité du recalage physique borné et de l'optimisation prédictive sous contraintes sur les heuristiques industrielles statiques pour fiabiliser les jumeaux numériques et prolonger la durée de vie des cellules.
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
          star: "S",
          starLabel: "Situation & Contexte Industriel",
          title: "Le Défi : La Dette Technique des Modèles de ML",
          content: `Beaucoup de modèles de Machine Learning restent au stade de notebooks exploratoires et échouent en production par manque de reproductibilité, de validation de données et de tests automatisés. L'objectif était de construire un pipeline de prédiction d'achat e-commerce complet, auditable et résilient aux variations de schéma.`
        },
        {
          num: "Étape 02",
          star: "T",
          starLabel: "Tâche & Spécifications",
          title: "Objectifs & Responsabilités Clés",
          content: `• Mise en place de l'architecture logicielle modulaire avec Kedro.
          • Implémentation des nœuds de feature engineering et de gestion des valeurs manquantes.
          • Intégration de l'optimisation bayésienne des hyperparamètres (Hyperopt TPE).
          • Configuration du linter strict Ruff, des hooks de pre-commit et de la suite de tests Pytest.`
        },
        {
          num: "Étape 03",
          star: "A",
          starLabel: "Action & Architecture Système",
          title: "Pipeline Modulaire Kedro DAG & Diagramme de Flux",
          content: `• <strong>Orchestrateur :</strong> Kedro (séparation Data Catalog, Paramètres, Pipelines).
          • <strong>Pipelines modulaires :</strong> <code>loading</code> (validation), <code>processing</code> (LabelEncoding, partitionnement stratifié), <code>training</code> (LightGBM + CV).
          • <strong>Optimisation :</strong> Hyperopt avec Tree-structured Parzen Estimator (TPE) sur validation croisée répétée.`,
          diagram: `┌──────────────────────────────────────────────────────────────────┐
│              Industrialized Kedro MLOps Pipeline                 │
└──────────────────────────────────────────────────────────────────┘
      [ Raw Transaction Data ]
                 │
                 ▼
     ┌────────────────────────┐
     │ 1. Data Processing Node│ (Imputation, One-Hot, Schema Validation)
     └───────────┬────────────┘
                 ▼
     ┌────────────────────────┐
     │ 2. Bayesian Tuning Node│ (Hyperopt TPE Optimization over 50 Trials)
     └───────────┬────────────┘
                 ▼
     ┌────────────────────────┐
     │ 3. Model Training Node │ (LightGBM Classifier + Cross-Validation)
     └───────────┬────────────┘
                 │
                 ├───────────────────────────────┐
                 ▼                               ▼
     ┌────────────────────────┐      ┌────────────────────────┐
     │ Automated Pytest Suite │      │  Production Artifacts  │
     │ (Coverage & CI Checks) │      │ (Joblib Model + Metrics)│
     └────────────────────────┘      └────────────────────────┘`
        },
        {
          num: "Étape 04",
          star: "A",
          starLabel: "Action & Implémentation Logicielle",
          title: "Prévention du Data Leakage & Rigueur Software",
          content: `• <strong>Prévention du Data Leakage :</strong> Ajustement strict des transformateurs (LabelEncoders) uniquement sur le jeu d'entraînement avant projection sur le test.
          • <strong>Qualité du code :</strong> Configuration de règles de linting strictes avec <code>ruff.toml</code> et typage statique Python rigoureux.`
        },
        {
          num: "Étape 05",
          star: "R",
          starLabel: "Résultats & Benchmarks",
          title: "Gains de Performance & Reproductibilité",
          content: `• <strong>Performance F1-score :</strong> Amélioration de <strong>+7.4%</strong> par rapport au modèle LightGBM avec hyperparamètres par défaut.
          • <strong>Automatisation :</strong> 100% du pipeline reproductible en une commande <code>kedro run</code>.`
        },
        {
          num: "Étape 06",
          star: "R",
          starLabel: "Impact & Enseignements",
          title: "Enseignements Techniques",
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
          star: "S",
          starLabel: "Situation & Contexte Industriel",
          title: "Le Défi : Les Hallucinations Arithmétiques des LLMs",
          content: `Les modèles de langage (LLM) souffrent de deux faiblesses majeures : les hallucinations dans les calculs arithmétiques complexes (besoins caloriques, calculs de macronutriments) et l'incapacité à respecter des contraintes médicales strictes (allergies, carences).`
        },
        {
          num: "Étape 02",
          star: "T",
          starLabel: "Tâche & Spécifications",
          title: "Objectifs & Décomposition Spécialisée",
          content: `• Concevoir une architecture multi-agents coordonnée où chaque agent possède un rôle restreint et auditable.
          • Intégrer des outils de calcul déterministes (Python) pour déléguer les équations mathématiques (Harris-Benedict, Mifflin-St Jeor).
          • Raccorder les agents à une base de données nutritionnelle réelle pour les recommandations d'aliments.`
        },
        {
          num: "Étape 03",
          star: "A",
          starLabel: "Action & Architecture Système",
          title: "Architecture Multi-Agents LangGraph & Diagramme d'État",
          content: `• <strong>Orchestrateur :</strong> LangGraph StateGraph gérant les transitions d'états et le passage de messages.
          • <strong>Agents spécialisés :</strong> Agent Profil / Santé (anamnèse), Agent Calculateur (dépense énergétique), Agent Nutritionnel (composition des repas), Agent Validateur (vérification des allergies).
          • <strong>Outils déterministes :</strong> Fonctions Python typées exécutant les calculs sans hallucination.`,
          diagram: `┌──────────────────────────────────────────────────────────────────┐
│           Multi-Agent Nutrition & Health System (LangGraph)      │
└──────────────────────────────────────────────────────────────────┘
                 [ User Health & Caloric Prompt ]
                                │
                                ▼
                 ┌─────────────────────────────┐
                 │    Supervisor Agent Node    │
                 │   (Intent & Goal Parsing)   │
                 └──────────────┬──────────────┘
                                │
              ┌─────────────────┴─────────────────┐
              ▼                                   ▼
 ┌────────────────────────┐          ┌────────────────────────┐
 │   Caloric Agent Node   │          │   Macronutrient Agent  │
 │ (BMR / TDEE Calculator)│          │ (Protein / Carb Splits)│
 └────────────┬───────────┘          └────────────┬───────────┘
              │                                   │
              └─────────────────┬─────────────────┘
                                ▼
                 ┌─────────────────────────────┐
                 │   Deterministic Tool Call   │
                 │   (USDA Dataset Queries)    │
                 └──────────────┬──────────────┘
                                ▼
                 ┌─────────────────────────────┐
                 │  Medical Guardrails & Allergen Validator  │
                 │   (100% Zero Hallucination) │
                 └─────────────────────────────┘`
        },
        {
          num: "Étape 04",
          star: "A",
          starLabel: "Action & Implémentation Logicielle",
          title: "Élimination des Hallucinations Arithmétiques & Validation Déterministe",
          content: `• <strong>Élimination de la Dérive Arithmétique :</strong> Les tests initiaux sur prompt LLM monolithique révélaient des dérives de calcul de plus de 250 kcal sur un plan journalier (erreurs d'addition cumulative et calculs de métabolisme approximatifs).
          • <strong>Délégation à des Fonctions Python Typées :</strong> Remplacement intégral des calculs mathématiques génératifs par des nœuds de code déterministes (formule de Mifflin-St Jeor en Python, requêtes SQL/Pandas sur les tables officielles de l'USDA), ramenant le taux d'erreur de calcul de 32% à 0%.
          • <strong>Validation Médicale en Boucle Fermée :</strong> L'Agent Validateur vérifie formellement chaque ingrédient contre la liste d'allergies du patient avant toute restitution à l'utilisateur, rejetant toute proposition non conforme.`
        },
        {
          num: "Étape 05",
          star: "R",
          starLabel: "Résultats & Benchmarks",
          title: "Précision Arithmétique & Respect des Contraintes",
          content: `• <strong>Précision des calculs :</strong> <strong>100% de calculs corrects</strong> (vs 68% pour un LLM monolithique standard).
          • <strong>Sécurité médicale :</strong> <strong>100% des contraintes d'allergies</strong> respectées sur un jeu d'évaluation de 50 profils complexes.`
        },
        {
          num: "Étape 06",
          star: "R",
          starLabel: "Impact & Enseignements",
          title: "Enseignements Techniques",
          content: `• La décomposition agentique avec outillage déterministe est la seule voie viable pour déployer des LLMs sur des cas d'usage à haute criticité (santé, ingénierie, finance).`
        }
      ],
      github: "../4-multiagent-nutrition-nlp"
    },

    "crossvit-vision": {
      title: "Classification d'Herbiers par Vision Transformers Multi-Échelles (CrossViT)",
      category: "Deep Learning & Vision par Ordinateur",
      origin: "Projet de Recherche Appliquée & Deep Learning (CY Tech)",
      steps: [
        {
          num: "Étape 01",
          star: "S",
          starLabel: "Situation & Contexte Industriel",
          title: "Le Défi : Artefacts Parasites & Biais sur les Spécimens de Muséum",
          content: `La numérisation de collections botaniques patrimoniales (planches d'herbiers scannées en très haute résolution) pose un défi de robustesse majeur : les planches comportent de nombreux artefacts humains non végétaux (timbres de muséum, étiquettes manuscrites, bandes de colle, bordures de papier). Les Vision Transformers classiques (ViT) ont tendance à sur-apprendre ces indices fallacieux plutôt que la morphologie végétale réelle (nervures, folioles, calices).`
        },
        {
          num: "Étape 02",
          star: "T",
          starLabel: "Tâche & Spécifications",
          title: "Architecture Multi-Échelles & Contrainte Mémoire VRAM",
          content: `• Adapter l'architecture CrossViT (Vision Transformer multi-échelles) pour capturer simultanément les micro-textures (nervures) et la morphologie macroscopique.
          • Développer un pipeline d'interprétabilité par Attention Rollout pour quantifier la proportion d'attention allouée au végétal vs aux artefacts.
          • Concevoir un pipeline de recadrage intelligent pour traiter les images haute résolution sans saturer la VRAM GPU et formuler une fonction de perte régularisée IoU.`
        },
        {
          num: "Étape 03",
          star: "A",
          starLabel: "Action & Architecture Système",
          title: "Architecture CrossViT Bi-Branche & Diagramme",
          content: `• <strong>Branche Petits Patchs (Fine-grained, patchs 12x12) :</strong> Haute résolution spatiale extrayant les textures fines (nervures, pilosité).
          • <strong>Branche Grands Patchs (Coarse-grained, patchs 16x16) :</strong> Basse résolution extrayant la silhouette et la morphologie globale.
          • <strong>Échange par Cross-Attention :</strong> Fusion bidirectionnelle des représentations visuelles via des modules de cross-attention légers.`,
          diagram: `┌──────────────────────────────────────────────────────────────────┐
│            CrossViT Botanical Herbarium Classification           │
└──────────────────────────────────────────────────────────────────┘
             [ High-Resolution Herbarium Sheet Scan ]
                                │
        ┌───────────────────────┴───────────────────────┐
        ▼                                               ▼
 ┌──────────────────────────────┐        ┌──────────────────────────────┐
 │ Small Patch Branch (Fine)    │        │ Large Patch Branch (Coarse)  │
 │ • High spatial resolution    │        │ • Broad structural context   │
 │ • Extracts leaf venation     │        │ • Plant morphology patterns  │
 └──────────────┬───────────────┘        └──────────────┬───────────────┘
                │                                       │
                └───────────► ◄─────────────────────────┘
                   Cross-Attention Token Exchange
                                │
                                ▼
                 ┌─────────────────────────────┐
                 │   Attention Rollout & IoU   │
                 │     Regularization Loss     │
                 │  (Forces Focus on Plant)    │
                 └──────────────┬──────────────┘
                                ▼
                 ┌─────────────────────────────┐
                 │ Fine-Grained Taxon Predict  │
                 │   (+4.2% Top-1 Accuracy)    │
                 └─────────────────────────────┘`
        },
        {
          num: "Étape 04",
          star: "A",
          starLabel: "Action & Implémentation Logicielle",
          title: "Rognage Ciblé VRAM & Régularisation d'Attention IoU en PyTorch",
          content: `• <strong>Rognage Spécimen & Gestion de la Mémoire VRAM :</strong> Les planches d'herbiers scannées brutes dépassent souvent 4000x3000px. Pour éviter d'exploser la mémoire GPU lors du calcul des matrices d'auto-attention tout en conservant les détails de nervation, j'ai conçu un pipeline de prétraitement avec recentrage et rognage serré (bounding box) du spécimen végétal, éliminant les marges parasites de papier beige.
          • <strong>Perte Régularisée IoU en PyTorch :</strong> Malgré le rognage, l'attention dérivait encore sur les étiquettes manuscrites collées contre les tiges. J'ai implémenté une fonction de perte hybride pénalisant explicitement la fuite d'attention en dehors du masque de segmentation de la plante : $\\mathcal{L} = \\mathcal{L}_{CE} + \\lambda \\cdot (1 - \\text{IoU}(\\text{AttentionMap}, \\text{PlantMask}))$.
          • <strong>Résultat :</strong> L'attention du modèle est mathématiquement canalisée sur les structures botaniques discriminantes, éliminant les corrélations fallacieuses muséales (+4.2% de Top-1 Accuracy).`
        },
        {
          num: "Étape 05",
          star: "R",
          starLabel: "Résultats & Benchmarks",
          title: "Gains en Précision & Interprétabilité",
          content: `• <strong>Top-1 Accuracy :</strong> Gain de <strong>+4.2%</strong> par rapport à un ViT-B/16 standard.
          • <strong>Focalisation de l'attention :</strong> L'IoU entre les cartes d'attention et les masques de segmentation réels des plantes est passé de 0.31 à 0.68.`
        },
        {
          num: "Étape 06",
          star: "R",
          starLabel: "Impact & Enseignements",
          title: "Enseignements Scientifiques",
          content: `• Les architectures multi-échelles couplées à des contraintes d'attention régularisée sont indispensables pour éliminer les biais fallacieux en vision industrielle et scientifique.`
        }
      ],
      github: "../5-crossvit-botanical-vision"
    },

    "weather-app": {
      title: "Application Web Prédictive Météo & Explicabilité SHAP",
      category: "Data Science, Machine Learning & Web App",
      origin: "Projet Ingénierie Data Science (CY Tech)",
      steps: [
        {
          num: "Étape 01",
          star: "S",
          starLabel: "Situation & Contexte Industriel",
          title: "Le Défi : Prédiction Multi-Stations & Hétérogénéité Climatique",
          content: `Prédire les précipitations à J+1 sur un continent entier (Australie, 140 000+ observations réparties sur 49 stations) à partir de capteurs météorologiques hétérogènes présentant de fortes proportions de valeurs manquantes et un déséquilibre naturel de classe (~22% de jours pluvieux).`
        },
        {
          num: "Étape 02",
          star: "T",
          starLabel: "Tâche & Spécifications",
          title: "Prévention du Data Leakage & Pipeline Complet",
          content: `• Découpage chronologique strict évitant toute fuite temporelle ou spatiale.
          • Imputation stratifiée par micro-climat (médiane et mode calculés par station et par saison exclusivement sur le train split).
          • Feature engineering atmosphérique : encodage trigonométrique continu du vent ($\sin$, $\cos$), amplitude thermique diurne, chute barométrique.
          • Benchmark de modèles (Régression Logistique, Random Forest, XGBoost) et analyse d'explicabilité globale/locale avec SHAP.
          • Déploiement d'une application Streamlit interactive avec inférence en temps réel sous 50ms.`
        },
        {
          num: "Étape 03",
          star: "A",
          starLabel: "Action & Architecture Système",
          title: "Architecture Pipeline & Application Web Streamlit",
          content: `• <strong>Data Pipeline :</strong> Scikit-Learn Pipeline étanche avec standardisation et imputation robuste sans data leakage.
          • <strong>Modèle :</strong> XGBoost calibré sur la courbe Precision-Recall pour optimiser le trade-off faux positifs / faux négatifs.
          • <strong>Explicabilité :</strong> TreeSHAP summary plots et waterfall plots pour l'audit instantané des prédictions individuelles.
          • <strong>UI / Serving :</strong> Streamlit avec caching mémoire et visualisations interactives Plotly.`,
          diagram: `┌──────────────────────────────────────────────────────────────────┐
│          Weather Prediction & Explainability Application         │
└──────────────────────────────────────────────────────────────────┘
          [ 140,000+ Raw Multi-Station Climate Observations ]
                                │
                                ▼
          ┌───────────────────────────────────────────────┐
          │ Micro-Climate Imputation & Cyclic Wind Encode │
          └─────────────────────┬─────────────────────────┘
                                ▼
          ┌───────────────────────────────────────────────┐
          │    Scikit-Learn / XGBoost Predictive Engine   │
          │    (Sub-50ms Inference Latency per Sample)    │
          └─────────────────────┬─────────────────────────┘
                                │
        ┌───────────────────────┴───────────────────────┐
        ▼                                               ▼
 ┌──────────────────────────────┐        ┌──────────────────────────────┐
 │ Interactive Streamlit App    │        │ SHAP Explainability Engine   │
 │ • Real-time probability dial │        │ • Local feature impact       │
 │ • Dynamic what-if simulator  │        │ • Global feature importance  │
 └──────────────────────────────┘        └──────────────────────────────┘`
        },
        {
          num: "Étape 04",
          star: "A",
          starLabel: "Action & Implémentation Logicielle",
          title: "Split Chronologique, Encodage Cyclique & Décomposition SHAP",
          content: `• <strong>Prévention Absolue du Data Leakage :</strong> Sur des séries météorologiques, un découpage aléatoire (random split) classique fausse complètement l'évaluation en raison de la forte autocorrélation temporelle et spatiale. J'ai instauré un split temporel chronologique strict (entraînement sur les années antérieures, test sur les années futures) et une imputation par station/saison calculée exclusivement sur le jeu d'entraînement.
          • <strong>Encodage Trigonométrique & Gestion de l'Imbalance :</strong> Conversion continue des directions de vent en composantes $(\\sin(2\\pi \\theta / 360), \\cos(2\\pi \\theta / 360))$ pour éliminer la discontinuité artificielle entre $0^\\circ$ et $360^\\circ$. Face au déséquilibre de classe (~22% de pluie), j'ai optimisé le seuil de décision sur la courbe PR-AUC plutôt que sur une accuracy trompeuse.
          • <strong>Auditabilité & Serving en Cache :</strong> Caching du pipeline sous Streamlit (\`@st.cache_resource\`) assurant une inférence instantanée ($< 50\\,\\text{ms}$), couplé à une décomposition TreeSHAP expliquant précisément pourquoi une probabilité grimpe (chute barométrique + pic d'humidité à 15h).`
        },
        {
          num: "Étape 05",
          star: "R",
          starLabel: "Résultats & Benchmarks",
          title: "Latence Temps Réel & Tests Automatisés",
          content: `• Dashboard fluide avec temps de calcul &lt; 50ms pour une prédiction temps réel basée sur des curseurs dynamiques.
          • Suite de tests unitaires automatisée validant les transformations trigonométriques et le vecteur de features.`
        },
        {
          num: "Étape 06",
          star: "R",
          starLabel: "Impact & Enseignements",
          title: "Enseignements Techniques",
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
          star: "S",
          starLabel: "Situation & Industrial Context",
          title: "The Challenge: Two Incompatible Time Scales",
          content: `This platform is an <strong>open reference blueprint transposing my enterprise R&D expertise</strong>: I applied the methodologies developed in industrial R&D toward the thermal and energy arbitration of AI supercomputer clusters (GPU H100/A100).
          There is a critical tension across two time horizons:
          1. The <strong>fast physical loop</strong> (GPU junction temperatures, power capping TDP, dynamic frequency throttling, PUE metrics, and grid carbon intensity in gCO2/kWh).
          2. The <strong>slow cognitive and contractual loop</strong> (engineer natural language requests: <em>"Need 8x H100 GPUs to benchmark CrossViT before tomorrow 8 AM"</em>, strict SLAs, priority queues).
          Monolithic APIs risk thermal hardware throttling and contract violations without auditability.`
        },
        {
          num: "Step 02",
          star: "T",
          starLabel: "Task & Specifications",
          title: "Key Objectives & Technical Specifications",
          content: `End-to-end design, implementation, and containerization:
          • <strong>Strict Boundary Decoupling:</strong> Separate telemetry hardware actuators from semantic context memory to prevent any LLM hallucination from causing thermal hardware damage.
          • <strong>Interactive Web Application:</strong> Real-time Streamlit dashboard allowing engineers to submit NLP compute requests, simulate hardware overheating, and tune power capping.
          • <strong>Reactive Event-Driven Architecture:</strong> Designed a low-latency asynchronous event-notification pattern, pushing user setpoints into controller RAM in under 15 ms without polling.
          • <strong>Production Containerized Deployment:</strong> Multi-stage <code>Dockerfile</code>, multi-service <code>docker-compose.yml</code> orchestration, and automated GitHub Actions CI.`
        },
        {
          num: "Step 03",
          star: "A",
          starLabel: "Action & System Architecture",
          title: "Dual-Server FastMCP Microservices & Topology Diagram",
          content: `Strict separation of hardware telemetry from semantic context memory:
          • <strong>Server 1 (Port 8001 - FastMCP):</strong> GPU cluster telemetry and safety actuators (power capping 200W-450W, clock throttling, job dispatch).
          • <strong>Server 2 (Port 8002 - FastMCP):</strong> Multi-tenant SLA vector memory (SentenceTransformers <code>all-MiniLM-L6-v2</code> + isolated per-team DuckDB databases).
          • <strong>LangGraph Orchestrator:</strong> Pydantic structured extraction and multi-step reasoning over SSE transport.`,
          diagram: `┌────────────────────────────────────────────────────────┐
│               Green AI Data Center Platform            │
└────────────────────────────────────────────────────────┘
          │ (User Request / Natural Language Job)
          ▼
┌──────────────────┐       ┌─────────────────────────────┐
│ Streamlit Web App│ ◄───► │   LangGraph StateGraph      │
│ (Live Dashboard) │       │ (Structured Pydantic Intent)│
└──────────────────┘       └──────────────┬──────────────┘
                                          │
                  ┌───────────────────────┴───────────────────────┐
                  ▼                                               ▼
     ┌─────────────────────────┐                     ┌─────────────────────────┐
     │  FastMCP Telemetry Svc  │                     │  FastMCP Vector DB Svc  │
     │       (Port 8001)       │                     │       (Port 8002)       │
     │ • Thermal Clamping      │                     │ • SentenceTransformers  │
     │ • Power Capping (W)     │                     │ • DuckDB Multi-Tenant   │
     │ • Clock Throttling      │                     │ • SLA Context Match     │
     └────────────┬────────────┘                     └────────────┬────────────┘
                  │                                               │
                  ▼                                               ▼
       [ Prometheus / GPUs ]                             [ Isolated Vector DB ]`
        },
        {
          num: "Step 04",
          star: "A",
          starLabel: "Action & Implementation",
          title: "Hardware Safety Guards, Telemetry Resilience & Schema Contracts",
          content: `• <strong>Temporal Decoupling & Hardware Invariants:</strong> Strict architectural separation between the local fast control loop (100% autonomous and deterministic) and the high-level distant agent: zero time-critical dependency on the LLM (which can take several minutes on resource-constrained targets) to guarantee machine safety.
          • <strong>Telemetry Dropout Resilience & Stale Data Guard:</strong> Robust fault handling for dropped InfluxDB telemetry packets: interpolation over transient dropouts, and automatic fallback to a safe degraded state if sensor data goes stale (> maximum TTL threshold), preventing obsolete control commands.
          • <strong>Immutable Interface Contracts:</strong> Rigid Pydantic JSON contract envelopes (<code>execution_status</code>, <code>system_context</code>, <code>db_trace</code>) guaranteeing zero dashboard crashes even under microservice timeouts.
          • <strong>Embedding Model Migration Pipeline:</strong> Clean re-indexing and schema migration workflows ensuring database vector integrity across embedding model and dimension updates.`
        },
        {
          num: "Step 05",
          star: "R",
          starLabel: "Results & Benchmarks",
          title: "Numerical Metrics & End-to-End Validation",
          content: `• <strong>End-to-End Latency:</strong> &lt; 380 ms for semantic retrieval and telemetry audit.
          • <strong>Turnkey Deployment:</strong> Fully reproducible in a single <code>docker compose up</code> command.
          • <strong>Fault Tolerance:</strong> 100% of hardware communication errors intercepted with deterministic fallback messages.
          • <strong>Test Coverage:</strong> Automated unit test suite verifying schema serialization, safety boundaries, and cosine similarity.`
        },
        {
          num: "Step 06",
          star: "R",
          starLabel: "Impact & Takeaways",
          title: "Engineering Takeaways & Cloud Perspectives",
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
          star: "S",
          starLabel: "Situation & Industrial Context",
          title: "The Challenge: Reconciling Charging Speed with Battery Degradation",
          content: `This platform is an <strong>open reference blueprint transposing my enterprise R&D expertise</strong> in physical system identification and predictive control (MPC). I applied these formal methods toward a critical clean tech challenge: fast-charging electric vehicle lithium-ion battery packs.
          Charging rate is constrained by two critical physical boundaries:
          1. <strong>Lithium metal plating</strong> triggered by overvoltage ($V > 4.20\\text{V}$).
          2. <strong>Thermal runaway and accelerated aging</strong> whenever internal cell core temperature exceeds $45.0^\\circ\\text{C}$.
          Standard industrial CC-CV profiles are purely reactive, cause severe overheating, and throttle too late.`
        },
        {
          num: "Step 02",
          star: "T",
          starLabel: "Task & Specifications",
          title: "Physical System Identification & Zero-NDA Modeling",
          content: `End-to-end design of the physical identification and optimization pipeline:
          • <strong>2-RC Thevenin Physical Model:</strong> Continuous state-space dynamics coupling electrical states (ohmic resistance $R_0$, charge transfer resistance $R_1$, capacitance $C_1$) with thermal dynamics (core-to-surface conduction resistance $R_{cs}$ and surface convection resistance $R_{sc}$).
          • <strong>Open Experimental OCV:</strong> Calibrated against standard laboratory low-rate (C/20) galvanostatic titration curves from open literature (NMC 21700, 3.0V to 4.20V).
          • <strong>HPPC Identification Protocol:</strong> Implemented the standardized automotive Hybrid Pulse Power Characterization test with realistic sensor noise injection.
          • <strong>Estimation Under Physical Constraints:</strong> Parameter identification via Bayesian MAP (Maximum A Posteriori) calibration enforcing strict physical parameter admissibility.`
        },
        {
          num: "Step 03",
          star: "A",
          starLabel: "Action & System Architecture",
          title: "Receding-Horizon MPC Controller & Closed-Loop Diagram",
          content: `• <strong>Predictive Receding Horizon (3 minutes):</strong> Real-time minimization of multi-objective cost $J = W_{\\text{soc}} \\cdot (\\text{SoC}_{\\text{ref}} - \\text{SoC})^2 + W_{\\text{thermal}} \\cdot \\max(0, T - 40)^2 + W_{\\text{cool}} \\cdot P + W_{\\text{rate}} \\cdot (\\Delta I)^2$.
          • <strong>RK4 Numerical Integration:</strong> 4th-Order Runge-Kutta differential state solver for all 4 coupled state variables ($\text{SoC}$, $V_{\\text{rc}}$, $T_{\\text{core}}$, $T_{\\text{surface}}$).
          • <strong>Constrained SLSQP Solver:</strong> Real-time deterministic convergence in under 45 ms leveraging state warm-starts and preconditioning.`,
          diagram: `┌──────────────────────────────────────────────────────────────────┐
│              Closed-Loop Battery Fast-Charging MPC               │
└──────────────────────────────────────────────────────────────────┘
       ┌──────────────────────────────────────────────────┐
       │     Reference Trajectory (0% -> 80% Fast SoC)    │
       └────────────────────────┬─────────────────────────┘
                                │
                                ▼
       ┌──────────────────────────────────────────────────┐
       │   Receding-Horizon MPC Controller (SLSQP Solver) │
       │   min J = W_soc·(ΔSoC)² + W_therm·(T-40)² + W_cool│
       └────────────────────────┬─────────────────────────┘
                                │ Optimal Command u* = [I*, P_cool*]
                                ▼
       ┌──────────────────────────────────────────────────┐
       │         Actuation: DC Charger & Chiller          │
       └────────────────────────┬─────────────────────────┘
                                │ Current I(t), Cooling P(t)
                                ▼
       ┌──────────────────────────────────────────────────┐
       │  2-RC Thevenin + Lumped Thermal Digital Twin     │
       │  • State-Space ODEs (V_rc1, V_rc2, T_core, T_surf│
       │  • Parameter Calibration (MAP Bayesian on HPPC)  │
       └────────────────────────┬─────────────────────────┘
                                │ Real-Time Feedback (V_term, T_core)
                                └──────► [ T_core < 45°C Hard Safety Guard ]`
        },
        {
          num: "Step 04",
          star: "A",
          starLabel: "Action & Implementation",
          title: "Physically Bounded Identification & SLSQP Solver Stabilization",
          content: `• <strong>The Core Physical Identification Challenge:</strong> In real-world engineering, fitting resistance ($R$) and thermal capacitance/conductivity ($C$) parameters on noisy telemetry without strict physical boundaries inevitably leads to numerical failure: unconstrained optimizers drift toward absurd values (negative resistances $R < 0$, infinite heat conductivities) that minimize mathematical fitting error but violate the second law of thermodynamics and cause predictive simulations to blow up outside calibration windows.
          • <strong>Engineering Solution (Strict Physical Box Bounds & MAP Priors):</strong> I bounded the parameter space with hard physical constraints ($R_0 \in [10, 50]\\,\\text{m}\\Omega$, $R_{cs} > 0$, material-bound thermal conductances) combined with log-normal Bayesian MAP prior distributions. The optimizer is strictly confined to thermodynamically valid territory, achieving reliable identification at $\\text{RMSE} = 0.0021\\,\\text{V}$.
          • <strong>SLSQP Controller Stabilization:</strong> To resolve solver stalling on steep thermal gradients, replaced brittle hard constraints with smooth asymmetric quadratic penalties ($\\Phi_{\\text{therm}} = \\max(0, T_{\\text{core}} - 40)^2$) paired with hard clamps on terminal voltage ($V \\le 4.20\\,\\text{V}$) and current slew rate ($\\Delta I$), guaranteeing deterministic convergence in $< 45\\,\\text{ms}$.
          • <strong>Anticipatory Active Cooling:</strong> The predictive controller activates the liquid chiller pump 90 seconds before the peak Joule heating transient, maintaining core temperature at 39.5°C and eliminating reactive throttling.`
        },
        {
          num: "Step 05",
          star: "R",
          starLabel: "Results & Benchmarks",
          title: "Comparative Benchmarks vs Industry Standard CC-CV",
          content: `• <strong>Total Thermal Degradation Effort:</strong> Reduced by <strong>-79.0%</strong> compared to standard industrial CC-CV.
          • <strong>Core Peak Temperature:</strong> Maintained at <strong>39.5°C</strong> vs 45.8°C for CC-CV (which violated the safety limit).
          • <strong>Digital Twin Accuracy (RMSE):</strong> <strong>RMSE = 0.0021 V</strong> on terminal voltage during standard HPPC verification.
          • <strong>Automated Testing:</strong> 100% of unit tests verified (7/7 passed).`
        },
        {
          num: "Step 06",
          star: "R",
          starLabel: "Impact & Takeaways",
          title: "Technical Takeaways & Industrial Deployment",
          content: `• Proves that physically bounded system identification coupled with predictive control significantly outperforms static industrial charging heuristics in preserving cell health.
          • Perspectives: Embedded deployment on automotive Battery Management Systems (BMS) via ANSI C code generation.`
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
          star: "S",
          starLabel: "Situation & Industrial Context",
          title: "The Challenge: Production ML Technical Debt",
          content: `Too many Machine Learning models remain stuck in messy exploratory Jupyter notebooks, failing in production due to lack of schema validation, data leakage, and automated testing. The objective was to build a complete, reproducible e-commerce purchase intention pipeline.`
        },
        {
          num: "Step 02",
          star: "T",
          starLabel: "Task & Specifications",
          title: "Project Scope & Software Quality Objectives",
          content: `• Establish a clean modular pipeline architecture using Kedro.
          • Engineer automated data processing and stratified feature transformation nodes.
          • Integrate Bayesian hyperparameter optimization (Hyperopt TPE).
          • Configure strict Ruff linting, pre-commit hooks, and a comprehensive Pytest suite.`
        },
        {
          num: "Step 03",
          star: "A",
          starLabel: "Action & System Architecture",
          title: "Kedro Modular Pipeline DAG & Diagram",
          content: `• <strong>Orchestrator:</strong> Kedro (decoupled Data Catalog, Parameters, and Node Pipelines).
          • <strong>Modular Stages:</strong> <code>loading</code> (schema validation), <code>processing</code> (LabelEncoding, stratified split), <code>training</code> (LightGBM + cross-validation).
          • <strong>Optimization:</strong> Hyperopt with Tree-structured Parzen Estimator (TPE) over repeated cross-validation folds.`,
          diagram: `┌──────────────────────────────────────────────────────────────────┐
│              Industrialized Kedro MLOps Pipeline                 │
└──────────────────────────────────────────────────────────────────┘
      [ Raw Transaction Data ]
                 │
                 ▼
     ┌────────────────────────┐
     │ 1. Data Processing Node│ (Imputation, One-Hot, Schema Validation)
     └───────────┬────────────┘
                 ▼
     ┌────────────────────────┐
     │ 2. Bayesian Tuning Node│ (Hyperopt TPE Optimization over 50 Trials)
     └───────────┬────────────┘
                 ▼
     ┌────────────────────────┐
     │ 3. Model Training Node │ (LightGBM Classifier + Cross-Validation)
     └───────────┬────────────┘
                 │
                 ├───────────────────────────────┐
                 ▼                               ▼
     ┌────────────────────────┐      ┌────────────────────────┐
     │ Automated Pytest Suite │      │  Production Artifacts  │
     │ (Coverage & CI Checks) │      │ (Joblib Model + Metrics)│
     └────────────────────────┘      └────────────────────────┘`
        },
        {
          num: "Step 04",
          star: "A",
          starLabel: "Action & Implementation",
          title: "Leakage Prevention & Strict Software Craft",
          content: `• <strong>Strict Leakage Prevention:</strong> Fitted transformations exclusively on the training split before projecting onto validation sets.
          • <strong>Code Standards:</strong> Configured strict linting rules via <code>ruff.toml</code> and static type checking.`
        },
        {
          num: "Step 05",
          star: "R",
          starLabel: "Results & Benchmarks",
          title: "Quantitative Metrics & Reproducibility",
          content: `• <strong>F1-Score Gain:</strong> Improved by <strong>+7.4%</strong> over the baseline default LightGBM classifier.
          • <strong>Single Command Reproducibility:</strong> 100% of pipeline stages executable with a single <code>kedro run</code> command.`
        },
        {
          num: "Step 06",
          star: "R",
          starLabel: "Impact & Takeaways",
          title: "Engineering Takeaways",
          content: `• Applying disciplined software engineering standards to machine learning workflows is mandatory for production reliability.`
        }
      ],
      github: "../3-mlops-purchase-pipeline"
    },

    "nlp-nutrition": {
      title: "Multi-Agent System (MAS) Health & Nutrition Coaching in LangGraph",
      category: "Agentic Systems & Advanced NLP",
      origin: "CY Tech Advanced NLP & Multi-Agent Project",
      steps: [
        {
          num: "Step 01",
          star: "S",
          starLabel: "Situation & Industrial Context",
          title: "The Challenge: LLM Mathematical Hallucinations",
          content: `General-purpose Large Language Models suffer from frequent hallucinations when performing complex multi-step arithmetic calculations (caloric targets, macronutrient splits) and fail to adhere to strict medical allergy boundaries.`
        },
        {
          num: "Step 02",
          star: "T",
          starLabel: "Task & Specifications",
          title: "Decoupled Architecture & Verification Guardrails",
          content: `• Design a specialized multi-agent architecture with auditable responsibilities.
          • Connect deterministic Python tools to handle all mathematical formulas (Harris-Benedict, Mifflin-St Jeor).
          • Integrate authentic nutritional datasets for meal recommendation queries.`
        },
        {
          num: "Step 03",
          star: "A",
          starLabel: "Action & System Architecture",
          title: "LangGraph Multi-Agent Architecture & Flow Diagram",
          content: `• <strong>Orchestrator:</strong> LangGraph StateGraph managing inter-agent message passing and state transitions.
          • <strong>Specialized Agents:</strong> Profiling Agent (anamnesis), Calculator Agent (energy formulas), Nutrition Agent (meal synthesis), Validator Agent (allergen guardrails).
          • <strong>Deterministic Tools:</strong> Typed Python functions executing arithmetic without mathematical hallucinations.`,
          diagram: `┌──────────────────────────────────────────────────────────────────┐
│           Multi-Agent Nutrition & Health System (LangGraph)      │
└──────────────────────────────────────────────────────────────────┘
                 [ User Health & Caloric Prompt ]
                                │
                                ▼
                 ┌─────────────────────────────┐
                 │    Supervisor Agent Node    │
                 │   (Intent & Goal Parsing)   │
                 └──────────────┬──────────────┘
                                │
              ┌─────────────────┴─────────────────┐
              ▼                                   ▼
 ┌────────────────────────┐          ┌────────────────────────┐
 │   Caloric Agent Node   │          │   Macronutrient Agent  │
 │ (BMR / TDEE Calculator)│          │ (Protein / Carb Splits)│
 └────────────┬───────────┘          └────────────┬───────────┘
              │                                   │
              └─────────────────┬─────────────────┘
                                ▼
                 ┌─────────────────────────────┐
                 │   Deterministic Tool Call   │
                 │   (USDA Dataset Queries)    │
                 └──────────────┬──────────────┘
                                ▼
                 ┌─────────────────────────────┐
                 │  Medical Guardrails & Allergen Validator  │
                 │   (100% Zero Hallucination) │
                 └─────────────────────────────┘`
        },
        {
          num: "Step 04",
          star: "A",
          starLabel: "Action & Implementation",
          title: "Arithmetic Hallucination Elimination & Deterministic Guardrails",
          content: `• <strong>Eliminating Cumulative Caloric Drift:</strong> Initial baseline testing with a monolithic LLM revealed arithmetic drift exceeding 250 kcal across a daily meal plan due to cumulative summing errors and approximated BMR formulas.
          • <strong>Delegation to Typed Python Code:</strong> Replaced all generative math with deterministic Python function tools (Mifflin-St Jeor equation, structured SQL/Pandas queries against official USDA datasets), dropping mathematical failure rates from 32% to exactly 0%.
          • <strong>Closed-Loop Medical Validation:</strong> The Validator Agent formally checks every recommended ingredient against patient allergens before returning recommendations, automatically rejecting and routing back non-compliant options.`
        },
        {
          num: "Step 05",
          star: "R",
          starLabel: "Results & Benchmarks",
          title: "Arithmetic Accuracy & Allergen Safety Benchmarks",
          content: `• <strong>Calculation Accuracy:</strong> <strong>100% exact arithmetic calculations</strong> (vs 68% for a standard monolithic LLM prompt).
          • <strong>Allergen Compliance:</strong> <strong>100% compliance</strong> on an evaluation benchmark of 50 complex medical test profiles.`
        },
        {
          num: "Step 06",
          star: "R",
          starLabel: "Impact & Takeaways",
          title: "Engineering Takeaways",
          content: `• Combining agentic graph orchestration with deterministic calculation tools is the gold standard for high-stakes AI applications.`
        }
      ],
      github: "../4-multiagent-nutrition-nlp"
    },

    "crossvit-vision": {
      title: "Botanical Herbarium Classification with Multi-Scale CrossViT",
      category: "Deep Learning & Computer Vision",
      origin: "CY Tech R&D Applied Deep Learning Project",
      steps: [
        {
          num: "Step 01",
          star: "S",
          starLabel: "Situation & Industrial Context",
          title: "The Challenge: Spurious Museum Artifacts & Archival Tag Correlates",
          content: `Digitized natural history museum herbarium specimen sheets (ultra-high resolution scans) contain non-botanical archival artifacts: museum accession stamps, glue strips, handwritten collector cards, and paper mounting borders. Standard Vision Transformers (ViT) tend to overfit to these spurious shortcut clues rather than authentic morphological plant features (vein patterns, folioles, petal textures).`
        },
        {
          num: "Step 02",
          star: "T",
          starLabel: "Task & Specifications",
          title: "Multi-Scale Attention Architecture & VRAM Constraints",
          content: `• Adapt dual-branch Vision Transformers (CrossViT) to simultaneously capture fine vein textures and overall macroscopic silhouette.
          • Formulate an Attention Rollout interpretability framework to quantify plant vs artifact attention allocation.
          • Engineer a smart specimen cropping pipeline to handle ultra-high resolution inputs without GPU VRAM exhaustion, coupled with an IoU-regularized loss function.`
        },
        {
          num: "Step 03",
          star: "A",
          starLabel: "Action & System Architecture",
          title: "Dual-Branch CrossViT Architecture & Exchange Diagram",
          content: `• <strong>Fine Branch (Small Patches, 12x12):</strong> High-resolution spatial feature extraction capturing fine leaf venation and hair patterns.
          • <strong>Coarse Branch (Large Patches, 16x16):</strong> Broad receptive field capturing macroscopic morphological silhouettes.
          • <strong>Cross-Attention Exchange:</strong> Bidirectional feature exchange via lightweight cross-attention modules.`,
          diagram: `┌──────────────────────────────────────────────────────────────────┐
│            CrossViT Botanical Herbarium Classification           │
└──────────────────────────────────────────────────────────────────┘
             [ High-Resolution Herbarium Sheet Scan ]
                                │
        ┌───────────────────────┴───────────────────────┐
        ▼                                               ▼
 ┌──────────────────────────────┐        ┌──────────────────────────────┐
 │ Small Patch Branch (Fine)    │        │ Large Patch Branch (Coarse)  │
 │ • High spatial resolution    │        │ • Broad structural context   │
 │ • Extracts leaf venation     │        │ • Plant morphology patterns  │
 └──────────────┬───────────────┘        └──────────────┬───────────────┘
                │                                       │
                └───────────► ◄─────────────────────────┘
                   Cross-Attention Token Exchange
                                │
                                ▼
                 ┌─────────────────────────────┐
                 │   Attention Rollout & IoU   │
                 │     Regularization Loss     │
                 │  (Forces Focus on Plant)    │
                 └──────────────┬──────────────┘
                                ▼
                 ┌─────────────────────────────┐
                 │ Fine-Grained Taxon Predict  │
                 │   (+4.2% Top-1 Accuracy)    │
                 └─────────────────────────────┘`
        },
        {
          num: "Step 04",
          star: "A",
          starLabel: "Action & Implementation",
          title: "VRAM-Aware Cropping & PyTorch IoU-Regularized Attention Loss",
          content: `• <strong>Specimen Cropping & VRAM Management:</strong> Raw museum scans frequently exceed 4000x3000px. To prevent GPU out-of-memory errors during self-attention computation while preserving subtle leaf structures, I engineered a preprocessing pipeline performing tight bounding-box cropping on the botanical specimen, discarding empty beige margins and archival borders.
          • <strong>PyTorch IoU-Regularized Loss:</strong> Even after cropping, self-attention occasionally leaked onto glued accession tags. I formulated a hybrid loss penalizing attention leaking outside the biological plant silhouette: $\\mathcal{L} = \\mathcal{L}_{CE} + \\lambda \\cdot (1 - \\text{IoU}(\\text{AttentionMap}, \\text{PlantMask}))$.
          • <strong>Result:</strong> Self-attention is mathematically forced onto discriminant biological organs (veins, stems, petal contours), eliminating spurious archival correlations (+4.2% Top-1 accuracy).`
        },
        {
          num: "Step 05",
          star: "R",
          starLabel: "Results & Benchmarks",
          title: "Top-1 Accuracy & Attention Localization Gains",
          content: `• <strong>Top-1 Accuracy:</strong> Boosted by <strong>+4.2%</strong> over standard ViT-B/16 baseline.
          • <strong>Attention Localization:</strong> Attention IoU overlap with true botanical segmentation masks rose from 0.31 to 0.68.`
        },
        {
          num: "Step 06",
          star: "R",
          starLabel: "Impact & Takeaways",
          title: "Scientific Takeaways",
          content: `• Multi-scale token exchange coupled with explicit attention regularization is vital to eliminate spurious correlations in scientific computer vision.`
        }
      ],
      github: "../5-crossvit-botanical-vision"
    },

    "weather-app": {
      title: "Weather Prediction & SHAP Explainability Web App",
      category: "Data Science, Machine Learning & Web App",
      origin: "CY Tech Data Science Engineering Project",
      steps: [
        {
          num: "Step 01",
          star: "S",
          starLabel: "Situation & Industrial Context",
          title: "The Challenge: Multi-Station Continental Rain Prediction",
          content: `Predicting next-day rainfall across Australia (140,000+ observations spanning 49 stations) across heterogeneous weather sensors characterized by missing telemetry and natural class imbalance (~22% rainy days).`
        },
        {
          num: "Step 02",
          star: "T",
          starLabel: "Task & Specifications",
          title: "Zero Data Leakage Pipeline & Multi-Climate Modeling",
          content: `• Strict chronological train/test split preventing temporal or spatial leakage.
          • Stratified geographic data imputation using micro-climate statistics (median/mode computed per station and season exclusively on the training split).
          • Atmospheric feature engineering: cyclic trigonometric wind direction encoding ($\\sin$, $\\cos$), diurnal temperature range, barometric pressure drop.
          • Model benchmarking (Logistic Regression, Random Forest, XGBoost) and global/local SHAP explainability analysis.
          • Interactive Streamlit deployment delivering real-time predictions in under 50ms.`
        },
        {
          num: "Step 03",
          star: "A",
          starLabel: "Action & System Architecture",
          title: "Scikit-Learn Pipeline & Interactive Streamlit Dashboard",
          content: `• <strong>Data Pipeline:</strong> Fully hermetic Scikit-Learn Pipeline with robust scaling and micro-climate imputation.
          • <strong>Model:</strong> Tuned XGBoost classifier calibrated on Precision-Recall curves to balance false alarms vs misses.
          • <strong>Explainability:</strong> TreeSHAP summary and waterfall plots for instantaneous sample auditability.
          • <strong>Serving / UI:</strong> Streamlit with in-memory caching and Plotly interactive gauge widgets.`,
          diagram: `┌──────────────────────────────────────────────────────────────────┐
│          Weather Prediction & Explainability Application         │
└──────────────────────────────────────────────────────────────────┘
          [ 140,000+ Raw Multi-Station Climate Observations ]
                                │
                                ▼
          ┌───────────────────────────────────────────────┐
          │ Micro-Climate Imputation & Cyclic Wind Encode │
          └─────────────────────┬─────────────────────────┘
                                ▼
          ┌───────────────────────────────────────────────┐
          │    Scikit-Learn / XGBoost Predictive Engine   │
          │    (Sub-50ms Inference Latency per Sample)    │
          └─────────────────────┬─────────────────────────┘
                                │
        ┌───────────────────────┴───────────────────────┐
        ▼                                               ▼
 ┌──────────────────────────────┐        ┌──────────────────────────────┐
 │ Interactive Streamlit App    │        │ SHAP Explainability Engine   │
 │ • Real-time probability dial │        │ • Local feature impact       │
 │ • Dynamic what-if simulator  │        │ • Global feature importance  │
 └──────────────────────────────┘        └──────────────────────────────┘`
        },
        {
          num: "Step 04",
          star: "A",
          starLabel: "Action & Implementation",
          title: "Chronological Split, Cyclic Encoding & SHAP Decomposition",
          content: `• <strong>Rigorous Prevention of Temporal & Spatial Data Leakage:</strong> A naive random split severely biases weather evaluation due to strong auto-correlation. I implemented a strict chronological temporal split (training on historical years, testing on future unseen years) and micro-climate imputation fitted strictly on training data.
          • <strong>Trigonometric Encoding & Class Imbalance Calibration:</strong> Converted angular compass directions into continuous $(\\sin(2\\pi \\theta / 360), \\cos(2\\pi \\theta / 360))$ coordinates, eliminating artificial $0^\\circ / 360^\\circ$ boundary jumps. Due to class imbalance (~22% rain), decision thresholds were optimized against PR-AUC curves rather than misleading accuracy.
          • <strong>Serving Caching & SHAP Auditing:</strong> Cached the pipeline in Streamlit (\`@st.cache_resource\`) achieving $< 50\\,\\text{ms}$ slider response, coupled with local TreeSHAP waterfall decompositions explaining why storm likelihood spikes (barometric pressure drop + 3pm humidity surge).`
        },
        {
          num: "Step 05",
          star: "R",
          starLabel: "Results & Benchmarks",
          title: "Sub-50ms Inference & Unit Test Suite",
          content: `• Sub-50ms inference latency during real-time interactive slider tuning on Streamlit.
          • Automated Pytest test suite verifying feature preprocessing and trigonometric encoding invariance.`
        },
        {
          num: "Step 06",
          star: "R",
          starLabel: "Impact & Takeaways",
          title: "Engineering Takeaways",
          content: `• Visual interactivity and explainable AI interfaces are critical for trust and adoption by non-technical domain stakeholders.`
        }
      ],
      github: "../6-weather-prediction-app"
    }
  }
};

// --- Global State ---
let currentLang = localStorage.getItem("portfolio_lang") || "fr";
let currentTheme = localStorage.getItem("portfolio_theme") || "dark";

// --- DOM Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initThemeEngine();
  initLanguageSwitcher();
  initFilters();
  initModals();
  applyLanguage(currentLang);
});

// --- Theme Engine (Dark / Light) ---
function initThemeEngine() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  const applyTheme = (theme) => {
    currentTheme = theme;
    localStorage.setItem("portfolio_theme", currentTheme);
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      if (themeIcon) themeIcon.textContent = "🌙";
      if (themeToggle) themeToggle.setAttribute("title", currentLang === "fr" ? "Activer le mode sombre" : "Switch to dark mode");
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeIcon) themeIcon.textContent = "☀️";
      if (themeToggle) themeToggle.setAttribute("title", currentLang === "fr" ? "Activer le mode clair" : "Switch to light mode");
    }
  };

  // Initial apply
  applyTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }
}

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

  const openStudy = (studyKey) => {
    const langStudies = CASE_STUDIES[currentLang] || CASE_STUDIES["fr"];
    const study = langStudies[studyKey];
    if (!study) return;

    modalTitle.textContent = study.title;
    modalSubtitle.textContent = `${study.category} • ${study.origin}`;
    modalGithubLink.setAttribute("href", study.github);

    // Render STAR steps
    let html = "";
    study.steps.forEach(step => {
      const starClass = step.star ? `star-pill-${step.star.toLowerCase()}` : "star-pill-s";
      const starBadge = step.star ? `<span class="star-pill ${starClass}">${step.star} · ${step.starLabel}</span>` : "";
      const diagramHtml = step.diagram ? `<pre class="diagram-box"><code>${step.diagram}</code></pre>` : "";

      html += `
        <div class="study-step">
          <div class="star-header-wrap">
            ${starBadge}
            <span class="study-step-num">${step.num}</span>
          </div>
          <h4 class="study-step-title">${step.title}</h4>
          <div class="study-step-content">${step.content}</div>
          ${diagramHtml}
        </div>
      `;
    });

    // Add open-source reference note for industry R&D projects
    if (studyKey === "datacenter-mcp" || studyKey === "mpc-battery") {
      const ndaText = currentLang === "en" 
        ? `💡 <strong>Open Reference Implementation:</strong> I designed and implemented this open-source architecture to showcase and apply my R&D background (agentic systems, predictive control) on public, reproducible engineering problems.`
        : `💡 <strong>Projet de Référence Open-Source :</strong> J'ai conçu et développé cette architecture ouverte pour valoriser et mettre en pratique mes compétences R&D (systèmes agentiques, contrôle prédictif) sur des cas d'usage publics et reproductibles.`;

      html += `
        <div class="nda-notice">
          ${ndaText}
        </div>
      `;
    }

    modalStepsContainer.innerHTML = html;
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  // 1. Click on .btn-study
  document.querySelectorAll(".btn-study").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const studyKey = btn.getAttribute("data-study");
      openStudy(studyKey);
    });
  });

  // 2. Click anywhere on .project-card opens modal (UX Rule: full card clickable)
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Do not trigger if clicking an external link (like GitHub button)
      if (e.target.closest("a.btn-secondary")) {
        return;
      }
      const btn = card.querySelector(".btn-study");
      if (btn) {
        const studyKey = btn.getAttribute("data-study");
        openStudy(studyKey);
      }
    });
  });

  // Prevent GitHub buttons inside cards from triggering card click
  document.querySelectorAll(".project-card a.btn-secondary").forEach(link => {
    link.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "auto";
  };

  if (modalClose) modalClose.addEventListener("click", closeModal);
  
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });
}
