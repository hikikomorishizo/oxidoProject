# Oxido Project PL

Projekt **Oxido** to aplikacja internetowa, która umożliwia przekształcenie tekstu na HTML i wygenerowanie responsywnego szablonu do artykułów. Użytkownicy mogą łatwo konwertować artykuły do formatu HTML oraz przeglądać wygenerowane szablony i treść.

## Funkcjonalności

- **Przekształcenie artykułu na HTML**: Aplikacja wczytuje treść artykułu i formatuje ją w HTML, używając odpowiednich nagłówków oraz obrazów.
- **Generowanie szablonu HTML i CSS**: Tworzenie responsywnego szablonu do podglądu artykułu.
- **Automatyczne łączenie zawartości**: Generowanie końcowego podglądu strony poprzez połączenie wygenerowanego szablonu i treści artykułu.

## Technologie

Projekt został zbudowany z wykorzystaniem:
- **HTML/CSS**: Do struktury i stylizacji generowanych stron.
- **JavaScript (Axios)**: Do przetwarzania zapytań API oraz interakcji z użytkownikiem.
- **PHP**: Do przetwarzania i generowania podglądu oraz zarządzania plikami. W zadaniu nie określono języka dla części serwerowej, a ponieważ JavaScript nie działa po stronie serwera, wybór był między PHP, Node.js i Pythonem. Ostatecznie wybrano PHP.
- **OpenAI API**: Do przekształcania tekstu na HTML i generowania szablonu.

## Instalacja

1. **Sklonowanie repozytorium**:
    ```bash
    git clone https://github.com/hikikomorishizo/oxidoProject.git
    cd oxidoProject
    ```

2. **Konfiguracja OpenAI API**:
    - W pliku `scripts.js` dodaj klucz API OpenAI, przypisując go do zmiennej `apiKey` na pierwszej linii. Produkt testowano z użyciem modelu GPT-3.5-turbo.

3. **Uruchomienie projektu**:
    - Projekt można umieścić na dowolnym serwerze (np. **XAMPP**). Do testów używano serwera XAMPP.
    - Przejdź na stronę główną projektu, aby uruchomić aplikację.

## Struktura plików

- `index.php`: Główna strona aplikacji.
- `szablon.html`: Plik z wygenerowanym szablonem HTML dla artykułu.
- `artykul.html`: Plik z treścią artykułu.
- `podglad.html`: Plik, który dynamicznie generuje końcowy podgląd, łącząc szablon i artykuł.
- `generate_preview.php`: Skrypt PHP do generowania końcowego podglądu.
- `scripts.js`: Kod JavaScript obsługujący aplikację oraz interakcję z OpenAI API.
- `prev-szab.js`: Skrypty do podglądu szablonu i artykułów.
- `styles.css`: Główny plik stylów.
- `save_article.php`: Plik do zapisu artykułu.
- `save_szablon.php`: Plik do zapisu szablonu.

## Użycie

1. **Przekształcenie artykułu**:
    - Naciśnij przycisk „Przekształć artykuł”, aby wczytać tekst z `article.txt` i przekształcić go na HTML.
    - Wynikowy HTML zostanie zapisany w pliku `artykul.html`.

2. **Generowanie szablonu**:
    - Naciśnij przycisk „Generuj szablon HTML”, aby stworzyć szablon HTML i CSS do podglądu.
    - Szablon zostanie zapisany w pliku `szablon.html`.

3. **Końcowy podgląd**:
    - Naciśnij przycisk „Stwórz podgląd”, aby połączyć szablon i zawartość artykułu w pliku `podglad.html`.



# Oxido Project EN

The **Oxido** project is a web application that allows users to convert text into HTML and generate a responsive template for articles. Users can easily convert articles into HTML format and view the generated templates and content.

## Features

- **Convert article to HTML**: The application loads the article content and formats it into HTML using appropriate headings and images.
- **Generate HTML and CSS template**: Creating a responsive template for previewing the article.
- **Automatic content merging**: Generating the final page preview by combining the generated template and article content.

## Technologies

The project is built using the following technologies:
- **HTML/CSS**: For structuring and styling the generated pages.
- **JavaScript (Axios)**: For handling API requests and interacting with the user.
- **PHP**: For processing and generating the preview and managing files. Since no language was specified for the server-side, and because JavaScript doesn't work on the server-side, the choice was between PHP, Node.js, and Python. PHP was ultimately chosen.
- **OpenAI API**: For converting text into HTML and generating the template.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/hikikomorishizo/oxidoProject.git
    cd oxidoProject
    ```

2. **Configure OpenAI API**:
    - In the `scripts.js` file, add your OpenAI API key by assigning it to the `apiKey` variable on the first line. The product was tested with the GPT-3.5-turbo model.

3. **Run the project**:
    - The project can be hosted on any server (e.g., **XAMPP**). The XAMPP server was used for testing.
    - Visit the homepage of the project to run the application.

## File Structure

- `index.php`: The main page of the application.
- `template.html`: The file with the generated HTML template for the article.
- `article.html`: The file containing the article content.
- `preview.html`: The file that dynamically generates the final preview by combining the template and article.
- `generate_preview.php`: PHP script for generating the final preview.
- `scripts.js`: JavaScript code for handling the application and interaction with the OpenAI API.
- `prev-template.js`: Scripts for previewing the template and articles.
- `styles.css`: The main stylesheet.
- `save_article.php`: File for saving the article.
- `save_template.php`: File for saving the template.

## Usage

1. **Convert the article**:
    - Click the "Convert article" button to load the text from `article.txt` and convert it to HTML.
    - The resulting HTML will be saved in the `article.html` file.

2. **Generate template**:
    - Click the "Generate HTML template" button to create the HTML and CSS template for previewing.
    - The template will be saved in the `template.html` file.

3. **Final preview**:
    - Click the "Create preview" button to combine the template and article content into the `preview.html` file.
