var gun1
var gun1Img
var gun2
var gun2Img
var gun3
var gun3Img
var gun4
var gun4Img
var zombieRunGroup
var zombie2RunGroup
var zombie4RunGroup
var zombie5RunGroup
var battlefieldImg
var zombie1Img
var zombie1DeadImg
var zombie1AttackImg
var zombie1
var zombie2
var zombie2Img
var zombie2DeadImg
var zombie2AttackImg
var zombie4
var zombie4Img
var zombie4DeadImg
var zombie4AttackImg
var zombie5
var zombie5Img
var zombie5DeadImg
var zombie5AttackImg
var bullet
var bulletImg
var bulletGroup
var counter = 0

function preload(){
  battlefieldImg = loadImage("IMAGES/battlefield.jpeg")
  zombie1Img = loadAnimation("IMAGES/zombie_run_1-removebg-preview.png","IMAGES/zombie_run_2-removebg-preview.png","IMAGES/zombie_run_3-removebg-preview.png","IMAGES/zombie_run_4-removebg-preview.png","IMAGES/zombie_run_5-removebg-preview.png")
  zombie1DeadImg = loadAnimation("IMAGES/zombie_dead_1-removebg-preview.png","IMAGES/zombie_dead_2-removebg-preview.png","IMAGES/zombie_dead_3-removebg-preview.png")
  zombie1AttackImg = loadAnimation("IMAGES/zombie_attack_1-removebg-preview.png","IMAGES/zombie_attack_2-removebg-preview.png","IMAGES/zombie_attack_3-removebg-preview.png","IMAGES/zombie_attack_4-removebg-preview.png","IMAGES/zombie_attack_5-removebg-preview.png","IMAGES/zombie_attack_6-removebg-preview.png")

  zombie2Img = loadAnimation("IMAGES/zombie_2_run_1-removebg-preview.png","IMAGES/zombie_2_run_2-removebg-preview.png","IMAGES/zombie_2_run_3-removebg-preview.png","IMAGES/zombie_2_run_4-removebg-preview.png","IMAGES/zombie_2_run_5-removebg-preview.png")
  zombie2DeadImg = loadAnimation("IMAGES/zombie_2_dead_1-removebg-preview.png","IMAGES/zombie_2_dead_2-removebg-preview.png","IMAGES/zombie_2_dead_3-removebg-preview.png")
  zombie2AttackImg = loadAnimation("IMAGES/zombie_2_attack_1-removebg-preview.png","IMAGES/zombie_2_attack_2-removebg-preview.png","IMAGES/zombie_2_attack_3-removebg-preview.png","IMAGES/zombie_2_attack_4-removebg-preview.png","IMAGES/zombie_2_attack_5-removebg-preview.png","IMAGES/zombie_2_attack_6-removebg-preview.png")

  zombie4Img = loadAnimation("IMAGES/zombie_4_run_1-removebg-preview.png","IMAGES/zombie_4_run_2-removebg-preview.png","IMAGES/zombie_4_run_3-removebg-preview.png","IMAGES/zombie_4_run_4-removebg-preview.png","IMAGES/zombie_4_run_5-removebg-preview.png")
  zombie4DeadImg = loadAnimation("IMAGES/zombie_4_dead_1-removebg-preview.png","IMAGES/zombie_4_dead_2-removebg-preview.png","IMAGES/zombie_4_dead_3-removebg-preview.png")
  zombie4AttackImg = loadAnimation("IMAGES/zombie_4_attack_1-removebg-preview.png","IMAGES/zombie_4_attack_2-removebg-preview.png","IMAGES/zombie_4_attack_3-removebg-preview.png","IMAGES/zombie_4_attack_4-removebg-preview.png","IMAGES/zombie_4_attack_5-removebg-preview.png","IMAGES/zombie_4_attack_601-removebg-preview.png")

  zombie5Img = loadAnimation("IMAGES/zombie_5_run_1-removebg-preview.png","IMAGES/zombie_5_run_2-removebg-preview.png","IMAGES/zombie_5_run_3-removebg-preview.png","IMAGES/zombie_5_run_4-removebg-preview.png","IMAGES/zombie_5_run_5-removebg-preview.png")
  zombie5DeadImg = loadAnimation("IMAGES/zombie_5_dead_1-removebg-preview.png","IMAGES/zombie_5_dead_2-removebg-preview.png","IMAGES/zombie_5_dead_3-removebg-preview.png")
  zombie5AttackImg = loadAnimation("IMAGES/zombie_5_attack_1-removebg-preview.png","IMAGES/zombie_5_attack_2-removebg-preview.png","IMAGES/zombie_5_attack_3-removebg-preview.png","IMAGES/zombie_5_attack_4-removebg-preview.png","IMAGES/zombie_5_attack_5-removebg-preview.png","IMAGES/zombie_5_attack_6-removebg-preview.png")

  gun1Img = loadImage("IMAGES/gun_1-removebg-preview.png")
  gun2Img = loadImage("IMAGES/gun_2-removebg-preview.png")
  gun3Img = loadImage("IMAGES/gun_3-removebg-preview.png")
  gun4Img = loadImage("IMAGES/gun_4-removebg-preview.png")

  bulletImg = loadImage("IMAGES/bullet-removebg-preview.png")
}



function setup() {
  createCanvas(1520,690);
  zombieRunGroup = new Group()
  zombie2RunGroup = new Group()
  zombie4RunGroup = new Group()
  zombie5RunGroup = new Group()
  bulletGroup = new Group()
  gun1 = createSprite(1400,150,10,10)
  gun1.addImage("gun",gun1Img)
  gun1.scale = 0.5
  gun2 = createSprite(1400,300,10,10)
  gun2.addImage("gun2",gun2Img)
  gun2.scale = 0.8
  gun3 = createSprite(1400,450,10,10)
  gun3.addImage("gun3",gun3Img)
  gun3.scale = 0.4
  gun4 = createSprite(1400,600,10,10)
  gun4.addImage("gun4",gun4Img)
  gun4.scale = 0.3
  for(var i = 1;i <= 7; i++){
   
    zombie1 = createSprite(i*100,random(100,600),20,20)
   
    zombie1.addAnimation("run",zombie1Img)
    zombie1.debug = true
    zombie1.setCollider("rectangle",0,0,40,80)
    zombie1.velocityX = 1
    zombieRunGroup.add(zombie1)
    
  }
  if(counter === 7){
  for(var i = 1;i <= 7; i++){
   
    zombie2 = createSprite(i*100,random(100,600),20,20)
   
    zombie2.addAnimation("run2",zombie2Img)
    zombie2.debug = true
    zombie2.setCollider("rectangle",0,0,40,80)
    zombie2.velocityX = 1
    zombie2RunGroup.add(zombie2)
    
  }
}
 /*for(var i = 1;i <= 7; i++){
   
    zombie4 = createSprite(i*100,random(100,600),20,20)
   
    zombie4.addAnimation("run4",zombie4Img)
    zombie4.debug = true
    zombie4.setCollider("rectangle",0,0,40,80)
    zombie4.velocityX = 1
    zombie4RunGroup.add(zombie4)
    
  }*/
 /* for(var i = 1;i <= 7; i++){
   
    zombie5 = createSprite(i*100,random(100,600),20,20)
   
    zombie5.addAnimation("run5",zombie5Img)
    zombie5.debug = true
    zombie5.setCollider("rectangle",0,0,40,80)
    zombie5.velocityX = 1
    zombie5RunGroup.add(zombie5)
    
  }*/
  

  //if(keyDown (SPACE)){
   // bullet = createSprite(1400,100,5,5)
    //bullet.addImage("shell",bulletImg)
  //  bullet.scale = 0.04
   // bullet.velocityX = -2
  //}

  //setTimeout(gunShoot(gun1),500)
}

function draw() {
  background(battlefieldImg);  
  

  if(bulletGroup.isTouching(zombieRunGroup)){
    zombieRunGroup[0].destroy()
    counter = counter+1
    bulletGroup[0].destroy()
  }
  if(bulletGroup.isTouching(zombie2RunGroup)){
    zombie2RunGroup[0].destroy()
    counter = counter+1
    bulletGroup[0].destroy()
  }
  if(bulletGroup.isTouching(zombie4RunGroup)){
    zombie4RunGroup[0].destroy()
    counter = counter+1
    bulletGroup[0].destroy()
  }
  if(bulletGroup.isTouching(zombie5RunGroup)){
    zombie5RunGroup[0].destroy()
    counter = counter+1
    bulletGroup[0].destroy()
  }

 

 
console.log(counter)
  
  
 // zombiesTeam()
  //zombies2Team()
  //zombies4Team()
  //zombies5Team()
  gunShoot(gun1)
  gunShoot(gun2)
  gunShoot(gun3)
  gunShoot(gun4)
  drawSprites();
}

function zombiesTeam(){
  //for(var i = 1;i <= 15; i++){
  if(frameCount%100 === 0){
    zombie1 = createSprite(random(20,750),random(100,600),20,20)
    zombie1.addAnimation("run",zombie1Img)
    zombie1.velocityX = 1
    zombieRunGroup.add(zombie1)
  }
//}
}

function zombies2Team(){
  if(frameCount%300 === 0){
    zombie2 = createSprite(random(20,750),random(100,600),20,20)
    zombie2.addAnimation("run2",zombie2Img)
    zombie2.velocityX = 1
    zombie2RunGroup.add(zombie2)
    zombie2.scale = 0.8
  }
}

function zombies4Team(){
  if(frameCount%500 === 0){
    zombie4 = createSprite(random(20,750),random(100,600),20,20)
    zombie4.addAnimation("run4",zombie4Img)
    zombie4.velocityX = 1
    zombie4RunGroup.add(zombie4)
  }
}

function zombies5Team(){
  if(frameCount%700 === 0){
    zombie5 = createSprite(random(20,750),random(100,600),20,20)
    zombie5.addAnimation("run5",zombie5Img)
    zombie5.velocityX = 1
    zombie5RunGroup.add(zombie5)
    zombie5.scale = 1.5
  }
}

/*function keyPressed() {
  if(keyCode === 32){
    bullet = createSprite(1350,80,5,5)
    bullet.addImage("shell",bulletImg)
    bullet.scale = 0.06
    bullet.velocityX = -5
  }
}*/

  function gunShoot(gun){

    if(mousePressedOver(gun)){
      bullet = createSprite(gun.x-60,gun.y-20,5,5)
      bullet.addImage("shell",bulletImg)
      bullet.scale = 0.06
      bullet.velocityX = -5
      bullet.debug = true
      bulletGroup.add(bullet)
    }

  }