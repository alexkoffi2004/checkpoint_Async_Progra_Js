async function awaitCallWithErrorHandling() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
        if (!response.ok) {
            throw new Error('Erreur de réseau');
        }
        const data = await response.json();
        console.log('Données de l\'API:', data);
    } catch (error) {
        console.log('Oups, quelque chose a mal tourné. Veuillez réessayer plus tard.');
        console.error('Détails de l\'erreur:', error);
    }
}

awaitCallWithErrorHandling();
