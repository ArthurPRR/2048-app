Plan
Itération avec MCP server
Chrome Dev Tools MCP


Toujours documenter (meilleur endroit : au même niveau que le code pour ne pas avoir de dépendance avec un doc externe et pour l'utilisation de l'IA)

awesome copilot fait par github pour avoir un bon readME à partir de prompts réutilisables

Taper /create-readme pour envoyer le prompt préfait
Utilisable aussi pour tache répétitives génériques

Génération de message de commit disponible (conventional commit, assez répandu pour normaliser les messages)
Possible d'ajouter dans les user settings (utilisation automatique par l'IA)


Installer des MCP pour aider même sans utiliser les IA -> Brainstorm, compréhension, recherche dans la doc ...

Dépendance : code externe au projet dont ce dernier dépend pour fonctionner

Dépendance externe / interne (au sens de l'entreprise)

Important de connaître les dépendances et pouvoir les mettre à jour -> Gestionnaire de dépendances (pnmp, nmp, maven, conda, pip ...) fichier package.json par exemple avec pnpm
--> Recherche, Délégation (installation / maintenance), Gérer versions et compatibilité, Détecter vulnérabilités

dependencies / devDependencies (avec -D : local)


merge / pull request -> branche à durée de vie courte (3 jours) pour implémenter une fonctionnalité, vérification, revue de code à l'intégration
Conserver une base stable (livrable à n'importe quel moment), fonctionnelle et cohérente (standards de code, compil, tests)

Solution : Intégration Continue (CI)
automatisation de la compilation, du testing et du packaging à chaque changement apporté

Etapes d'un pipeline CI (pas d'exécution du code)
Récupération des dépendances
Compilation
Tests
Analyse statique
Publication du package/artifact
...

Centralisation du pipeline, serveur dédié (rien en local)

git rebase pour réécrire l'historique des commits (à faire sur sa branche), modif, rename ...

Si problème d'ordi : dans github : codespace -> environnement à distance personnalisable (possible aussi en local pour install / uninstall rapidement)

Notion de remotes : dépôts distants centralisés, pull effectué sur un remote (par défaut origin) -> possibilité d'avoir plusieurs versions sur des remotes différents
Par habitude upstream, dépôt de base du fork

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