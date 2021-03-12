var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle, turn = 0, gamestate="play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


    for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
   

  }
 
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  //mousePressed();
  
   for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
   }
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {  
    divisions[k].display();
   }
   text("400",20,650);
   text("400",100,650);
   text("400",180,650);
   text("200",260,650);
   text("200",340,650);
   text("200",420,650);
   text("500",500,650);
   text("500",580,650);
   text("500",660,650);
   text("600",740,650);
   push();
   stroke("yellow");
   strokeWeight(5);
   line(0, 475, 800, 475);
   pop();

   if(particle!=null)
   {
     particle.display();
     if(particle.body.position.y>750)
     {
       //console.log("ughh");
       if(particle.body.position.x<240 && particle.body.position.x>0)
       {
         score=score+400;
         particle=null;
       }
       else if(particle.body.position.x<480 && particle.body.position.x>240)
       {
          score=score+200;
          particle=null;
       }
       else if(particle.body.position.x<720 && particle.body.position.x>480)
       {
         score=score+500;
         particle=null;
       }
       else if(particle.body.position.x<800 && particle.body.position.x>720)
       {
         score=score+600;
         particle=null;
       }
     }
   }
   if(turn>=5 && particle==null)
     {
       gamestate="end";
       textSize(20);
       fill("white");
       text("Game Over!",50,225);
     }
  }
function mousePressed()
{
  if(gamestate!="end")
  {
    turn++;
    particle = new Particle(mouseX, 10, 10);
  }
}
