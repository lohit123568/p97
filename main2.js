var canvas = new fabric.Canvas('mycanvas');
block_w = 40;
block_h = 40;
player_x = 20;
player_y = 20;
var player_object="";
var block_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
    }
    function new_image(get_image){
        fabric.Image.fromURL(get_image, function(Img) {
            block_object = Img;
    
            block_object.scaleToWidth(block_w);
            block_object.scaleToHeight(block_h);
            block_object.set({
                top:player_y,
                left:player_x
            });
            canvas.add(block_object);
        });
        }

        window.addEventListener("keydown", my_keydown);

        function my_keydown(e){
            keypressed = e.keyCode;
            console.log(keypressed);
            if (e.shiftKey == true && keypressed == "80"){
                block_w = block_w + 20;
                block_h = block_h + 20;
                document.getElementById("current_width").innerHTML = block_w;
                document.getElementById("current_height").innerHTML = block_h;
            }
            if (e.shiftKey == true && keypressed == "77"){
                block_w = block_w - 20;
                block_h = block_h - 20;
                document.getElementById("current_width").innerHTML = block_w;
                document.getElementById("current_height").innerHTML = block_h;
            }
            
            if(keypressed == '38'){
                up();
            }
            if(keypressed == '40'){
                down();
            }
            if(keypressed == '37'){
                left();
            }
            if(keypressed == '39'){
                right();
            }
             if(keypressed == '87'){
                 new_image('wall.jpg');
                console.log("w")
             }
             if(keypressed == '71'){
                new_image('ground.png');
               console.log("g")
            }
            if(keypressed == '76'){
                new_image('light_green.png');
               console.log("l")
            }
            if(keypressed == '84'){
                new_image('trunk.jpg');
               console.log("t")
            }
            if(keypressed == '82'){
                new_image('roof.jpg');
               console.log("r")
            }
            if(keypressed == '89'){
                new_image('yellow_wall.png');
               console.log("y")
            }
            if(keypressed == '68'){
                new_image('dark_green.png');
               console.log("d")
            }
            if(keypressed == '85'){
                new_image('unique.png');
               console.log("u")
            }
            if(keypressed == '67'){
                new_image('cloud.jpg');
               console.log("c")
            }
        }

        function up() {
            if (player_y>= 0){
                player_y=player_y-block_h;
                console.log("block image height = "+block_h);
                console.log("when up arrow is pressed, X ="+player_x+",Y = "+player_y);
                canvas.remove(player_object);
                player_update();
            }
        }
        function down() {
            if (player_y<= 650){
                player_y=player_y+block_h;
                console.log("block image height = "+block_h);
                console.log("when down arrow is pressed, X ="+player_x+",Y = "+player_y);
                canvas.remove(player_object);
                player_update();
            }
        }
        function left() {
            if (player_x>= 0){
                player_x=player_x-block_w;
                console.log("block image width = "+block_w);
                console.log("when left arrow is pressed, X ="+player_x+",Y = "+player_y);
                canvas.remove(player_object);
                player_update();
            }
        }
        function right() {
            if (player_x<= 1050){
                player_x=player_x+block_h;
                console.log("block image width = "+block_w);
                console.log("when right arrow is pressed, X ="+player_x+",Y = "+player_y);
                canvas.remove(player_object);
                player_update();
            }
        }
        function back() {
            window.location.replace("start.html");
        }
