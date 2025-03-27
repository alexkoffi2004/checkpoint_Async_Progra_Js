async function concurrentRequests() {
    try {
        const [response1, response2] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/2')
        ]);

        const data1 = await response1.json();
        const data2 = await response2.json();

        console.log('Réponse 1:', data1);
        console.log('Réponse 2:', data2);
    } catch (error) {
        console.log('Erreur lors des requêtes simultanées:', error);
    }
}

concurrentRequests();
