# Lab 05

## Définitions

### Livraison Continue
Automatisation de la livraison d'une application à chaque changement de code. Les tests sont automatisés, et les déploiements peuvent être automatiques ou manuels.

### Déploiement en Preview
Déploiement automatique d'une version test de l'application lors de chaque Pull Request. Permet de tester les changements avant la fusion dans `main`.

### Déploiement en Production
Déploiement de la version stable à accès public. Nécessite une validation humaine.

### Blue-Green Deployment
Stratégie de déploiement où deux environnements identiques existent :
- Blue : version actuelle en production
- Green : version nouvelle en préparation

Autre alternative : Ring Deployment

## Configuration Vercel

### 1. Token d'accès personnel
- Récupérer sur https://vercel.com/account/tokens
- Stocker de manière sécurisée (environnement github par ex)

### 2. Identifiants Vercel
- VERCEL_ORG_ID : ID de l'organisation
- VERCEL_PROJECT_ID : ID du projet (récupérable dans les settings du projet Vercel)
- VERCEL_TOKEN : Token d'authentification personnel

### 3. Création du projet Vercel
en ligne de commande :
vercel project add <project-name>  # Créer le projet
vercel project list                # Lister et récupérer l'ID


---

## Configuration GitHub Actions

### Secrets Repository
Ajouter dans `Settings > Secrets and variables > Actions > Repository secrets` :
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `VERCEL_TOKEN`

### Environment Secrets (Optionnel mais recommandé)
Créer deux environnements :
- preview : pas d'approbation
- production : avec approbation requise

Ajouter les secrets dans chaque environnement.

---

## Structuration du Pipeline

### Workflow Dispatch
Trigger manuel pour les déploiements de production dans le yaml :

on:
  workflow_dispatch:
    inputs:
      # Paramètres optionnels

### Pull Request Trigger
Déclenche les déploiements de preview :

on:
  pull_request:
    branches: [ main, lab05 ]


### Push Trigger
Déclenche les builds/tests sur chaque commit :

on:
  push:
    branches: [ main, lab05 ]

---

## Étapes du Job de Déploiement

### 1. Build
- Installer les dépendances (`pnpm install`)
- Builder l'application (`pnpm build`)
- Créer un artifact ZIP

### 2. Upload Artifact

- uses: actions/upload-artifact@v4
  with:
    name: build-output
    path: .nuxt/


### 3. Download Artifact (dans job de déploiement)

- uses: actions/download-artifact@v4
  with:
    name: build-output
    path: .nuxt/


### 4. Déploiement Vercel
Utiliser la CLI Vercel pour déployer (ligne de commande) :

#### En Preview
vercel deploy --token ${{ secrets.VERCEL_TOKEN }}

#### En Prod
vercel --prod --token ${{ secrets.VERCEL_TOKEN }}


---

## Environment Protection Rules (Production)

### Configuration dans GitHub
`Settings > Environments > production > Deployment branches and secrets`

- Required reviewers : cocher "Require deployment to be approved by selected teams or users"
- Deployment branches : restreindre à `main` ou `lab05` uniquement
- Secrets : ajouter `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

---

## Commandes Vercel CLI Principales


pnpm add -g vercel

### Authentification
vercel login

### Vérifier l'authentification
vercel whoami

### Lister les projets
vercel project list

### Créer un projet
vercel project add <name>

### Déployer en preview
vercel deploy --token <TOKEN>

### Déployer en production
vercel --prod --token <TOKEN>

### Avec variables d'environnement
VERCEL_ORG_ID=<ID> VERCEL_PROJECT_ID=<ID> vercel deploy --token <TOKEN>


---

## Variables d'Environnement pour Vercel

Dans le workflow, exporter avant les commandes Vercel :

env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}


---

## Gestion des branches

### Features
Branches features ou fix de bug -> pull request
Branches à partir du main pour les releases releases

### Démarche Gitflow
Une branche main, une develop, une release
Lors de production pull request de release sur le main

---

## Artefacts et Réutilisation

### Passer le build entre jobs
1. Utiliser actions/upload-artifact après le build
2. Utiliser actions/download-artifact avant le déploiement
3. Les artifacts ont une durée de vie de 90 jours par défaut

évite de rebuild à chaque étape

## URLs Vercel

- Production : https://vercel.com/benjamindnds-projects/2048-app/9uYZHWExQ3g2N8xZCp5ycA9ypGhb


---

