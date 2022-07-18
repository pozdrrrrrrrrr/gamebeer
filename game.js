
/*
window.onload = function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var x =250;
    var y = 150;
    var score=0;
    var coin = new Image();
    coin.src = "https://catherineasquithgallery.com/uploads/posts/2021-03/1614588093_49-p-pivo-na-belom-fone-64.jpg";
    var ship = new Image();
    ship.src = "https://avatars.mds.yandex.net/i?id=a1dff2b0b9cd8ce765d3d384fff34e55-4077679-images-thumbs&n=13";
    var coinx=Math.random()*(600-50);
    var coiny=Math.random()*(400-50);
    let speed = 300;
    let dir =0;
    let up=document.getElementById("up");
    let down=document.getElementById("down");
    let left=document.getElementById("left");
    let right=document.getElementById("right");
    up.onmousedown = function() {dir=4};
    down.onmousedown = function() {dir=3};
    left.onmousedown = function() {dir=2};
    right.onmousedown = function() {dir=1};
    up.ontouchstart = function() {dir=4};
    down.ontouchstart = function() {dir=3};
    left.ontouchstart = function() {dir=2};
    right.ontouchstart = function() {dir=1};
    up.onmouseup = function() {dir=0};
    down.onmouseup = function() {dir=0};
    left.onmouseup = function() {dir=0};
    right.onmouseup = function() {dir=0};
    up.ontouchend = function() {dir=0};
    down.ontouchend = function() {dir=0};
    left.ontouchend = function() {dir=0};
    right.ontouchend = function() {dir=0};
    function draw(){
        var timePassed=(Date.now()-t)/1000;
        t=Date.now();
        context.clearRect(0,0, 600,400);
        context.fillStyle="white";
        context.fillText("Градусы:"+score, 20, 30);
        context.beginPath();
        context.drawImage(ship, x , y, 100,100);
        context.beginPath();
        context.drawImage(coin, coinx , coiny, 50,50);
        window.requestAnimationFrame(draw);
    }

    draw();
}
*/

window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;
    var coin = new Image();
    coin.src = "https://media.discordapp.net/attachments/772164370406965271/997568855973044254/IMG_9082.png?width=543&height=586";

    var ship = new Image();
    ship.src = "https://images-ext-2.discordapp.net/external/aabvbtUJgl-HmrBFWWdh30XmqjcLIjQx84bjEL9jlVU/https/catherineasquithgallery.com/uploads/posts/2021-02/1614528466_6-p-bravo-stars-na-belom-fone-6.png?width=814&height=587"


    var cig = new Image();
    cig.src = "https://images.squarespace-cdn.com/content/5c65956894d71ac4b16937e8/1584115140769-TMYMZDKE9H2VZL6FD17A/90.jpg?content-type=image%2Fjpeg";
    var cigx = Math.random() * (600-50);
    var cigy = Math.random() * (400-50);


    var coinx = Math.random() * (600-50);
    var coiny = Math.random() * (400-50);

    var t = Date.now();
    let speed = 300;
    let dir = 0;
    let score = 0;

    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    up.onmousedown = function() { dir = 4;}
    down.onmousedown = function() { dir = 3;}
    left.onmousedown = function() { dir = 2;}
    right.onmousedown = function() { dir = 1;}

    up.ontouchstart = function() { dir = 4;}
    down.ontouchstart = function() { dir = 3;}
    left.ontouchstart = function() { dir = 2;}
    right.ontouchstart = function() { dir = 1;}

    up.onmouseup = function() { dir = 0;}
    down.onmouseup = function() { dir = 0;}
    left.onmouseup = function() { dir = 0;}
    right.onmouseup = function() { dir = 0;}

    up.ontouchend = function() { dir = 0;}
    down.ontouchend = function() { dir = 0;}
    left.ontouchend = function() { dir = 0;}
    right.ontouchend = function() { dir = 0;}

    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();

        context.clearRect(0, 0, 600, 400);

        context.font = '25px Arial';
        context.fillStyle = 'white';
        context.fillText("Градусы: " + score, 20, 30);
        context.beginPath();
        context.drawImage(ship, x, y, 100, 100);

        context.beginPath();
        context.drawImage(coin, coinx, coiny, 50, 50);
        context.beginPath();
        context.drawImage(cig, cigx, cigy, 50, 50);
        if(dir == 1) {
            if(x+100 < 600) {
                x += (speed * timePassed );
            }
        }
        else if(dir == 2) {
            if(x > 0) {
                x -= (speed * timePassed);
            }
        }
        else if(dir == 3) {
            if(y+100 < 400) {
                y += (speed * timePassed);
            }
        }
        else if(dir == 4) {
            if(y > 0) {
                y -= (speed * timePassed);
            }
        }

        if (coinx <= x+100 && x <= coinx+50 && coiny <= y+100 && y <= coiny+50) {
            score++;
            coinx = Math.random() * (600-50);
            coiny = Math.random() * (400-50);
        }
        if (cigx <= x+100 && x <= cigx+50 && cigy <= y+100 && y <= cigy+50) {
            score++;
            cigx = Math.random() * (600-50);
            cigy = Math.random() * (400-50);
        }

        window.requestAnimationFrame(draw);
    }
    draw();
    function draw1() {
        context.clearRect(0, 0, 600, 400);
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();



        window.requestAnimationFrame(draw);
    }
    draw1();
}