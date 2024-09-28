<?php
function importHTML($filePath) {
    // Check if the file exists
    if (file_exists($filePath)) {
        // Get the contents of the file
        $htmlContent = file_get_contents($filePath);
        // Output the content
        echo $htmlContent;
    } else {
        echo "Error: File not found at $filePath";
    }
}
// Example usage
$indexhtml = 'home.html';
importHTML($indexhtml);


?>