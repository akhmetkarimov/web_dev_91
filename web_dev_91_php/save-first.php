<?php

    if (isset($_GET['first-name']) && 
        isset($_GET['last-name'])) {

        $first = $_GET['first-name'];
        $last = $_GET['last-name'];

        echo "<p>Полученные данные(GET): $first, $last</p>";
    } else {
        $first = $_POST['first-name'];
        $last = $_POST['last-name'];
    
        echo "<p>Полученные данные(POST): $first, $last</p>";
    }

