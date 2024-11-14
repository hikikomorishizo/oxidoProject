<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (isset($_POST['html_content'])) {
        $htmlContent = $_POST['html_content'];

        $filePath = 'szablon.html';

        if (file_put_contents($filePath, $htmlContent)) {
            echo "Plik został pomyślnie zapisany!";
        } else {
            echo "Wystąpił błąd podczas zapisywania pliku.";
        }
    } else {
        echo "Brak danych 'html_content' w żądaniu POST!"; 
    }
} else {
    echo "Niepoprawne zapytanie!";
}
?>
