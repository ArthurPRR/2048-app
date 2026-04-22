# Lab 06 - Reponses et Notes (GitHub Actions)

## 0. Prise en main d'Azure

### Reponses

1. Connexion au portail Azure: OK (https://portal.azure.com).
2. Souscription active a verifier dans "Subscriptions" (ex: Azure for Students).
3. Azure CLI installee et authentification possible depuis le terminal.

### Commandes utiles


# Connexion interactive
az login

# Voir la souscription active
az account show --output table

# Lister toutes les souscriptions
az account list --output table

# Fixer la souscription a utiliser
az account set --subscription "<SUBSCRIPTION_ID>"


---

## 1. Provisionner un environnement de production

### Choix de nommage
- Groupe de ressources production: `rg-lab6-prod`
- Static Web App production: `stapp-lab6-prod`
- Region exemple: `France Centrale`

Convention: `<type>-<projet>-<env>`

### Commandes Azure CLI 

az group create \
	--name rg-lab6-prod \
	--location France Centrale

az staticwebapp create \
	--name stapp-lab6-prod \
	--resource-group rg-lab6-prod \
	--location France Central \
	--sku Free


### Notes pour cette partie

Controlleur d'accès IAM pour la gestion des droits

---

## 2. Strategie build + deploiement local

### Reponses aux questions

1. Installer la Static Web App CLI.
2. Commande de build adaptee au projet: `pnpm generate`.
3. Artifact a deployer: `.output/public/`.
4. Faire un deploiement manuel preview.
5. Faire un deploiement manuel production et comparer.

### Pourquoi `pnpm generate` ici

- Dans ce projet Nuxt, `generate` produit un site statique.
- Le dossier attendu par le lab est `.output/public/`.

### Commandes locales


# Installer la CLI (global)
pnpm add -g @azure/static-web-apps-cli

# Installer deps projet
pnpm install

# Build statique
pnpm generate

# Verifier artifact
ls -la .output/public


### Deploiement manuel preview vs production


# Preview (slot de preprod)
swa deploy .output/public \
	--deployment-token "<SWA_TOKEN_QA_OR_PREVIEW>"

# Production (live)
swa deploy .output/public \
	--deployment-token "<SWA_TOKEN_PROD>" \
	--env production


### Difference preview / production

- Preview: URL de previsualisation, non exposee comme site principal.
- Production: URL principale de l'app, version visible publiquement.

### Notes
Il est possible d'utiliser l'extension azure CLI pour exécuter des scripts liés à la CLI

---

## 3. Creer un environnement QA

### Reponses

En reprenant la meme convention de nommage:

- Groupe de ressources QA: `rg-lab6-qae`
- Static Web App QA: `stapp-lab6-qa`

### Commandes


az group create \
	--name rg-lab6-qa-we \
	--location westeurope

az staticwebapp create \
	--name stapp-lab6-qa-we \
	--resource-group rg-lab6-qa-we \
	--location westeurope \
	--sku Free

# Recuperer URL publique QA
az staticwebapp show \
	--name stapp-lab6-qa-we \
	--resource-group rg-lab6-qa-we \
	--query "defaultHostname" -o tsv

---