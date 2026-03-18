Utilisation du cache pour exécuter la pipeline plus rapidement
--> Réutilisation des fichers entre les jobs ou exécution de pipelines. Souvent basé sur *-lock (ici pnpm-lock) (Manuel sur Gitlab CI, lié aux actions sur Github Actions)
Sauvegarde des Artifacts (sortie d'un job)
--> Stocker les builds / tests, propre à un environnement

Pour le parallèle, mise en place de dépendances avec (needs: [jobs])

Variables prédéfinies utilisables dans la pipeline (comme des os, des tags, ...)
Variables définies par l'utilisateur (variables: sur GitlabCI, env: sur Github Actions) (possible de définir dans le projet hors code, nommées secrets), secrets dans les settings ou dans des vaults

Conditions avec if: (dans rules: pour Gitlab CI) peuvent être utilisés sur les branches ...

Triggers pour déclencher une pipeline : manuel, planifié (à une heure donnée...), lié à l'activité d'une branche, lié à une Pull Request, via l'achèvement d'une autre pipeline, via un appel API

Les actions préfixées par actions/ sont faites par Github

Ne push que certains commits : git push {hash de commit}:{branch}
Pour forcer le push après un rebase : git push --force-with-lease
Pour les autres, git reset {branch}


Notre job futur sera peut-être de manager des agents IA, les bases sont fondamentales
Squad : Un des outils qui permettent d'avoir une team d'agents IA

Extensions activables uniquement sur certains dossiers avec "enable (workspace)"
Possibilités d'avoir des profils avec des paramètres et extensions prédéfinis

différence github Actions / gitlab :
github action est plus orienté actions réutilisable et intégration
gitlab est plus orienté pipeline globale.
Gitlab demande plus de code pour une logique équivalente mais laisse plus de contrôle 
logique de stage dans gitlab