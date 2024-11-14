window.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await axios.get('szablon.html');

        document.getElementById('codePreview').textContent = response.data;
    } catch (error) {
        console.error('Błąd podczas ładowania szablonu:', error);
        alert('Wystąpił błąd podczas ładowania szablonu!');
    }
});