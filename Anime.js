<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anime Effect</title>
    <script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
    <style>
        .anime-box {
            width: 100px;
            height: 100px;
            background-color: #f4f4f4;
            position: absolute;
            top: 50%;
            left: 50%;
  transform: translate(-50%, -50%);
        }
    </style>
</head>
<body>
    <div class="anime-box"></div>

    <script>
        anime({
            targets: '.anime-box',
            translateX: 250,
            rotate: '1turn',
            duration: 2000,
            easing: 'easeInOutQuad'
        });
    </script>
</body>
</html>
