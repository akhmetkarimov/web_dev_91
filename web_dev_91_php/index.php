<!--
    XAMPP 
    localhost/web_dev_91_php 

    MAMP
    localhost:8888/web_dev_91_php
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First Page</title>
</head>
<body>

    <?php
        // let first = 'Привет Decode'
        // document.write(first)

        $first = '<p>Привет Decode</p>';
        echo $first;

        echo "PHP" . " Decode";

        $name = 'Decode';
        echo "<p>Для проверки $name</p>";
        
    ?>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis voluptate perferendis alias repellat nemo expedita quibusdam nam rerum iusto a quaerat numquam, provident explicabo inventore ullam molestiae incidunt minima!</p>


    <form action="save-first.php">
        <h3>GET запрос</h3>
        <div>
            <input type="text" placeholder="Введите имя" name="first-name">
        </div>
        <div>
            <input type="text" placeholder="Введите фамилию" name="last-name">
        </div>
        <button>Отправить</button>
    </form>


    <form action="save-first.php" method="post">
        <h3>POST запрос</h3>
        <div>
            <input type="text" placeholder="Введите имя" name="first-name">
        </div>
        <div>
            <input type="text" placeholder="Введите фамилию" name="last-name">
        </div>
        <button>Отправить</button>
    </form>


    <form action="cv.php" method="post">
        <h3>CV домашка</h3>
        <div>
            <input type="text" placeholder ="Имя" name="Name">
        </div>       
        <div>
            <input type="text" placeholder ="Фамилия" name="Sur-Name">
        </div>
        <div>
            <textarea name="description" cols="30" rows="10"></textarea>
        </div>
        <button>отправить</button>
    </form>
    
    <?php
    
        echo "<p>Другой php</p>"
    ?>

    <!--
        MERN - Mongo Express React Node
    -->

</body>
</html>