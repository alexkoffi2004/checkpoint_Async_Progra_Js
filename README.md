# Projet Async/Await - Tâches Asynchrones

Ce projet présente des solutions utilisant `async/await` pour résoudre différentes tâches asynchrones. Le but est d'apprendre à itérer avec `async/await`, gérer les erreurs et effectuer des requêtes simultanées. Vous trouverez ci-dessous des explications détaillées et le code nécessaire pour chaque tâche.

## Prérequis

Avant de commencer, vous devez avoir une version récente de **Node.js** installée sur votre machine pour exécuter les fichiers JavaScript.

1. Téléchargez et installez [Node.js](https://nodejs.org/) si ce n'est pas déjà fait.
2. Cloner le repos via la commande `git clone "lien du repos"`
3. Une fois Node.js installé, vous pouvez exécuter des fichiers `.js` via la commande `node`. 

## Tâche 01 : Itérer avec Async/Await

### Objectif

La fonction `iterateWithAsyncAwait` prend un tableau de valeurs et enregistre chaque valeur avec un délai de 1 seconde entre chaque enregistrement.

### Explication

Nous utilisons un `for...of` pour itérer sur le tableau. À chaque itération, nous attendons 1 seconde avant de passer à la suivante en utilisant `await` et `setTimeout`.

### Exécution

- Sauvegardez le code de la tache 01 dans un fichier que tu nommera toi même avec l'extension `.js`.
- Ouvrez un terminal et exécutez la commande suivante :
    - `node nom de ton fichier suivi de l'extension ".js"`
- Vous verrez chaque valeur imprimée dans la console avec un délai d'une seconde entre chaque.

## Tâche 03 : Gérer les erreurs avec Async/Await

### Objectif

Cette tâche modifie la fonction précédente pour gérer les erreurs de manière élégante. Si l'appel à une API échoue, nous attrapons l'erreur et affichons un message d'erreur convivial.

### Explication

Nous utilisons try...catch pour gérer les erreurs lors de l'appel API. Si une erreur se produit (comme une URL invalide), nous capturons l'erreur et affichons un message d'erreur approprié.


### Exécution

- Sauvegardez le code de la tache 01 dans un fichier que tu nommera toi même avec l'extension `.js`.

- Exécutez-le via la commande :
    - `node nom de ton fichier suivi de l'extension ".js"`
- En raison de l'URL invalide, vous recevrez un message d'erreur convivial et les détails de l'erreur dans la console.

## Tâche 04 : Attente de requêtes simultanées

### Objectif

Dans cette tâche, vous devez effectuer deux appels API simultanément en utilisant Promise.all(). Une fois les deux requêtes résolues, leurs résultats sont enregistrés.

### Explication

Nous utilisons `Promise.all()` pour effectuer plusieurs appels API en parallèle. Une fois que toutes les promesses sont résolues, nous traitons les résultats ensemble.

## Exécution

- Sauvegardez ce code dans un fichier concurrentRequests.js.

- Exécutez-le via la commande :
    - node concurrentRequests.js
- Vous verrez les résultats des deux appels API s'afficher simultanément dans la console.

# AUTHOR

fait par kouadio jean alex koffi
- [github](https://github.com/)