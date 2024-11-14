<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projekt Oxido Preview</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>

<header>
    <h1>Preview</h1>
</header>

<div class="container">

    <?php
    $szablonPath = 'szablon.html';
    $artykulPath = 'artykul.html';
    $podgladPath = 'podglad.html';

    try {
        $szablonContent = file_get_contents($szablonPath);
        if ($szablonContent === false) {
            throw new Exception("Błąd podczas wczytywania pliku szablon.html");
        }

        $artykulContent = file_get_contents($artykulPath);
        if ($artykulContent === false) {
            throw new Exception("Błąd podczas wczytywania pliku artykul.html");
        }

        $podgladContent = preg_replace('/<body>\s*<\/body>/', "<body>\n$artykulContent\n</body>", $szablonContent);

        if ($podgladContent === null) {
            throw new Exception("Błąd podczas przetwarzania zawartości szablonu");
        }

        if (file_put_contents($podgladPath, $podgladContent) === false) {
            throw new Exception("Błąd podczas zapisu pliku podglad.html");
        }

        echo "Plik podglad.html został pomyślnie wygenerowany!";
    } catch (Exception $e) {
        echo "Wystąpił błąd: " . $e->getMessage();
    }
    ?> 

    <p><a href="/" class="link-button">Powrót</a></p>
</div>

<footer>
    <p>© 2024 Wszystkie prawa zastrzeżone</p>
</footer>

<script src="assets/js/scripts.js"></script>

</body>
</html>
