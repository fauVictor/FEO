Author: FAU Victor

Contact: fau.victor@outlook.com

# feo

## Prérequis

Le seul prérequis pour se projet est npm ou yarn

## Installation

Pour installer l'application sur un serveur les étapes sont les suivantes : 

- Créer un clone du projet
- installer les dépendances
- compiler le projet
- pointer les la configuration apache ou ngnix sur le dossier ```dist```

```bash
git clone https://github.com/fauVictor/FEO.git
cd feo/
npm install
npm run build
```

## Changement de la typographie

Pour modifier la typographie utilisée dans le projet, il faut changer le fichier
```FEO/public/Rene Bieder Milliard Medium.woff```. 

### Changement rapide

Le moyen le plus rapide pour modifier la typographie utilisée, est de mettre à 
jour le fichier ```Rene Bieder Milliard Medium.woff```sans modifier le nom.

### Changement complet 

Pour ajouter une nouvelle typographie, il faut l'ajouter au dossier ```FEO/public/```
Puis dans le fichier ```FEO/public/index.html``` il faut faire la modification suivante :

```html
<style>
        @font-face {
            font-family: 'Milliard Medium';
            font-style: normal;
            font-weight: normal;
            src: local('Milliard Medium'), url('Rene Bieder  Milliard Medium.woff') format('woff');
    }
        @font-face {
            font-family: 'Nouvelle font';
            font-style: normal;
            font-weight: normal;
            src: local('Font Type'), url('Nom du fichier.woff') format('woff');
    }
        *{
            font-family: 'Proxima Nova' , 'Milliard Medium';
            font-weight: 550 !important;

        }
        body{
            margin: 0;
            padding: 0
        }
    </style>
```

Puis dans les composants, il faudra éditer ajouter une ligne de CSS pour mettre à jour la typographie
utilisée.
