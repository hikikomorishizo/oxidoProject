window.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await axios.get('szablon.html');
        document.getElementById('codePreviewSzablon').textContent = response.data;

        const response2 = await axios.get('artykul.html');
        document.getElementById('codePreviewArt').textContent = response2.data;
    } catch (error) {
        console.error('Błąd podczas ładowania:', error);
        alert('Wystąpił błąd podczas ładowania!');
    }

});