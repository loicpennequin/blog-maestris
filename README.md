# Projet de blog pour l'Ecole Maestris Cambrai

## Prerequis
  MySQL
  NodeJS
  npm
  Bower

## Installation

### Installation des Dépendances :
  ```
  npm install
  cd vendor
  bower install
  ```
### Configuration
  Creer un fichier .env dans le repertoire config, et le compléter à l'aide du fichier .env_sample

### Installation de la base de données :
```
cd data
mysql -u root -p < blog_maestris.sql
```

## Lancement de l'application
```
node server.js
```

## Auteur

* **Loïc Pennequin** [GitHub](https://github.com/loicpennequin)

## Licence

MIT
