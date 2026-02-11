## Apprentissage

- Utilisation de MCP Servers pour avoir des informations à jour sur les technos et adopter les bonnes pratiques
- Découverte du MCP Server Chrome Dev Tools
- Découverte de simpleBrowser dans vscode

## Méthodologie adoptée

- Utilisation de l'agent "Plan" pour concevoir l'application avant de l'implémenter
- Debug de l'application via Chrome Dev Tools MCP pour identifier et corriger les erreurs

## Dificultés rencontrées:

- Tailwind CSS: difficulté à configurer correctement le fichier de configuration pour que les styles soient appliqués
  - Résolu via l'utilisation de Nuxt UI MCP pour avoir la configuration correcte
- Bug sur l'affichage du score
  - Résolu en utilisant Chrome Dev Tools MCP pour inspecter les éléments et identifier le problème


  01 notes

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