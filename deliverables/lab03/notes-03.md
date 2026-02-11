03-notes
Slidev : faire des slides avec Markdown

Quelques plateformes CI / CD :
- Open Source : Jenkins (très populaire), GitLab (Open Core)
- Closed Source : Azur Pipelines, GitHub Actions (Microsoft)

Open Core : code open source sauf fonctionnalités premium

Avantage pipeline : Sécuriser (gestion des secrets), Indépendance (environnement de build), Tracabilité, Versionnement, Hook/Triggers (build, tests, agent IA lors de la création d'une issue ...), Gestion des artifacts (package, rapports de tests, de vulnérabilités ...)

Similitudes des plateformes :
- Triggers
- Agents d'exécution (exécute le code de la pipeline, parallélise, choix d'agents)
- Découpage en stages (grosses étapes souvent liées à l'environnement), jobs (ex : test sur Android ou sur IOS), steps (étapes d'un job sur une task ou un script)
- Artifacts (Représentent un fichier, consommables, publiables, versionnables)
- Séparation en sous scripts
- Demande d'approbation
- Feeds / Flux

---

Séance 4

Utilisation intelligente de Copilot

Création d'instructions personnalisées dans .github/instructions/{name}.instructions.md
Possibilité de spécifier quand appliquer les instructions avec applyTo.

Création de prompts réutilisables dans .github/prompts/{name}.prompts.md

crontab.guru (site pour gérer les dates/horaires)
