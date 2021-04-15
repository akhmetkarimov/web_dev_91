<?php
    $name = $_POST['Name'];
    $surname = $_POST['Sur-Name'];
    $about = $_POST['description'];

    echo "
    <h3>$name $surname</h3>
    <hr>
    <img src='https://pbs.twimg.com/profile_images/860132866453381120/VPBwbmkr.jpg'>

    <h3>О Себе</h3>
    <p>$about</p>
    ";
