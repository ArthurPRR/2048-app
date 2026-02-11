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
