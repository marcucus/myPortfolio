# Portfolio Adrien Marques

Portfolio professionnel développé avec Next.js, TypeScript et Tailwind CSS, avec un thème liquid glass moderne et élégant.

## 🎨 Caractéristiques

- **Design Liquid Glass** : Effets de glassmorphisme magnifiques avec arrière-plans dégradés animés
- **Navbar Intelligente** : Barre de navigation qui se rétracte avec animation de boule liquid glass
- **Sections Complètes** : Hero, À propos, Stack Technique, Projets, Contact
- **Cartes 3D Interactives** : Projets présentés avec effet de rotation 3D
- **Stack Technique Interactive** : Filtrage par catégorie avec indicateurs de niveau de compétence
- **Utilitaires Interactifs** : Barre de progression de défilement, effet curseur personnalisé, bouton retour en haut
- **Design Responsive** : Optimisé pour tous les appareils

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Démarrer le serveur de production
npm start
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le portfolio.

## 🛠️ Technologies

- **Next.js 15.5.6** - Framework React
- **React 19.1.0** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **React Icons** - Bibliothèque d'icônes

## 📁 Structure du Projet

```
myPortfolio/
├── app/                    # Pages et layouts Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux avec thème liquid glass
├── components/            # Composants React
│   ├── Navbar.tsx        # Navigation avec animation
│   ├── Hero.tsx          # Section héro
│   ├── About.tsx         # À propos
│   ├── TechStack.tsx     # Stack technique
│   ├── Projects.tsx      # Projets avec cartes 3D
│   ├── Contact.tsx       # Contact
│   ├── ScrollProgress.tsx    # Barre de progression
│   ├── ScrollToTop.tsx       # Bouton retour en haut
│   └── CursorEffect.tsx      # Effet curseur
├── public/               # Assets statiques
└── Profile.txt          # Informations du profil
```

## ✨ Fonctionnalités Clés

### Navbar avec Animation Liquid Glass
- Se rétracte au scroll avec une animation de boule liquid glass
- Passe en mode icônes uniquement après 100px de scroll
- Navigation fluide entre les sections

### Section Stack Technique
- 12 technologies avec icônes et niveaux
- Filtrage par catégorie (Frontend, Backend, Mobile, etc.)
- Barres de progression animées au survol
- Statistiques récapitulatives

### Section Projets Innovante
- Cartes 3D avec effet de rotation
- Cliquez pour révéler les détails
- 4 projets majeurs présentés
- Informations détaillées sur les réalisations

## 🔒 Sécurité

- ✅ Analyse CodeQL : Aucune vulnérabilité
- ✅ Vérification des dépendances : Toutes les dépendances sont sécurisées
- ✅ Aucun secret dans le code

## 📝 Personnalisation

Les informations du portfolio sont extraites de `Profile.txt`. Pour personnaliser :

1. Modifiez les composants dans `/components`
2. Ajustez les styles dans `/app/globals.css`
3. Mettez à jour les informations dans chaque composant

## 🚀 Déploiement

Le moyen le plus simple de déployer votre application Next.js est d'utiliser la [plateforme Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

## 📄 Licence

© 2025 Adrien Marques. Tous droits réservés.
