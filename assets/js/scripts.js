document.getElementById('processArticleButton').addEventListener('click', async function() {
    const button = document.getElementById('processArticleButton');
    
    button.disabled = true;
    button.style.backgroundColor = "#d3d3d3";
    button.innerText = "Przetwarzanie...";
    button.style.cursor = 'wait'; 
    document.body.style.cursor = 'wait'; 

    try {
        const articleResponse = await axios.get('assets/article.txt');
        const articleText = articleResponse.data;

        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: `Przekształć ten tekst na HTML, przestrzegając poniższych wymagań:
                    - Użyj tylko tagów HTML wewnątrz <body>, bez dodawania tagów <html>, <head> i <body>.
                    - Uporządkuj tekst, stosując odpowiednie tagi HTML.
                    - W miejscach, gdzie pasują obrazy, dodaj tag <img> z atrybutem src='image_placeholder.jpg' oraz atrybutem alt, zawierającym dokładny opis obrazu, który posłuży do jego wygenerowania.
                    - Dodaj podpisy pod obrazami, używając tagu <figcaption>.
                    - Nie dodawaj kodu CSS ani JavaScript.

                    Tekst do przekształcenia:
                    \n\n${articleText}`
                }
            ],
            max_tokens: 1000,
            temperature: 0.5
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer CHATGPT-3.5-turbo-APIKEY` 
            }
        });

        if (response.data && response.data.choices && response.data.choices[0].message.content) {
            const generatedHTML = response.data.choices[0].message.content;

            const saveResponse = await axios.post('save_article.php', new URLSearchParams({
                html_content: generatedHTML
            }));

            if (saveResponse.data.includes("pomyślnie zapisany")) {
                alert("Plik został pomyślnie zapisany!");
            } else {
                alert("Wystąpił błąd podczas zapisywania pliku.");
            }
        } else {
            alert('Błąd: Brak danych w odpowiedzi API');
        }
    } catch (error) {
        console.error('Błąd podczas komunikacji:', error);
        alert('Wystąpił błąd!');
    } finally {
        button.disabled = false;
        button.style.backgroundColor = "#4CAF50"; 
        button.innerText = "Przetwarzanie Artykułu";
        button.style.cursor = 'default'; 
        document.body.style.cursor = 'pointer'; 
    }
});
