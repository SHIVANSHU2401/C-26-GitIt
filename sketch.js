var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
 
var engine;
var world;

var Box1;
var ground;
var gSlider;

var list1 = [];
 
function setup() {
    createCanvas(1200, 400);


    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200,20);
 
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
}
 
function mousePressed() {
    if (mouseY < 350) {
        Box1 = new Box(mouseX,mouseY,33,33);
        list1.push(Box1);
        console.log(list1[0]);
    }
}

 
function draw() {
   
    background("black");
    Engine.update(engine);

    ground.display();

    var fVal = gSlider.value();

     if (list1 != undefined){

        for(var i = 0;i < list1.length; i ++){
            list1[i].display();
         }
    }
}