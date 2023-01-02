class Game {
constructor (exportRoot, stage) {
    this.root = exportRoot
    this.stage = stage
    this.str1 = "start"
    this.strOp1 = "1"
    this.strOp2 = "2"
    this.init()
    this.setstate
    this.randomNumber
        
} 
    
    init () {
    const game = this
    this.main_Txt = this.root.main_Txt
    this.op_1 = this.root.op_1
    this.op_2 = this.root.op_2
    this.root.start_bt.on('click', function () { game.update() })
    this.setstate = 0
}; 
 update () {
    if (this.setstate == 0) {
    this.str1 = 'You have had a really big weekend camping.  In fact as you are driving home through the dark forest you can hardly keep you eyes open.  The stereo is playing your favourite song but suddenly it cuts out.  There is a huge bright purple light in the sky and your car sputters to a stop.  The stereo is dead and all the lights are out.'
        this.strOp1 = 'Try to fix your car'
        this.strOp2 = 'Start walking'
        this.root.start_bt.visible = 0
        this.root.mc_2.visible = false
        this.root.mc_3.visible = false
        this.root.mc_4.visible = false
        this.root.mc_5.visible = false
        this.root.mc_6.visible = false
        this.root.death_mc.visible = false
        this.root.btn_1.on('click', function () { game.setstate1()})
        this.root.btn_2.on('click', function () { game.setstate2()})
        
    } else if (this.setstate == 1) {
       this.str1 = 'You get out and open the hood, its hard to see but there is still some purple glow in the sky.  You wonder what that big light came from and what is going on.  All of a sudden there is some moaning and some noises from the underbrush and a zombie stumbles out onto the road.'
        this.strOp1 = 'Fight the zombie'
        this.strOp2 = 'Ask him to help fix the car'
        this.root.mc_1.visible = false
        this.root.mc_2.visible = true
        this.root.mc_3.visible = false
        this.root.mc_4.visible = false
        this.root.mc_5.visible = false
        this.root.mc_6.visible = false
        this.root.death_mc.visible = false
        this.root.btn_1.removeAllEventListeners('click');
        this.root.btn_2.removeAllEventListeners('click');
        this.root.btn_1.on('click', function() { game.setstate5() })
        this.root.btn_2.on("click", function() { game.setstate7(); }) 
        
    } else if (this.setstate == 2) {
        this.str1 = 'You walk into the along the road for what seems like forever. There doesn’t seem to be any cars coming along the road at all.  As your eyes start to get used to the dark you can see a purple light coming towards you on the road'
        this.strOp1 = 'Run away'
        this.strOp2 = 'Follow the light'
        this.root.mc_1.visible = false
        this.root.mc_2.visible = false
        this.root.mc_3.visible = true
        this.root.mc_4.visible = false
        this.root.mc_5.visible = false
        this.root.mc_6.visible = false
        this.root.death_mc.visible = false
        this.root.btn_1.removeAllEventListeners('click');
        this.root.btn_2.removeAllEventListeners('click');
        this.root.btn_1.on('click', function() { game.setstate3() })
        this.root.btn_2.on("click", function() { game.setstate4() })
        
     } else if (this.setstate == 3) {
        this.str1 = 'You start to run, but as you start to run the light gets brighter and follows you even faster.  You start to freak out and scream as you crash through the bush at full speed.  Unfortunately you can’t really see where you are going, you fall down and impale yourself on a sharp branch and die'
        this.strOp1 = 'dead'
        this.strOp2 = 'dead'
        this.root.mc_1.visible = false
        this.root.mc_2.visible = false
        this.root.mc_3.visible = false
        this.root.mc_4.visible = false
        this.root.mc_5.visible = false
        this.root.mc_6.visible = false
        this.root.death_mc.visible = true
        this.root.btn_1.removeAllEventListeners('click');
        this.root.btn_2.removeAllEventListeners('click');
        
     } else if (this.setstate == 4) {
        this.str1 = 'The light moves past you and you start to follow it.  It bobs and weaves through the trees and its glow is mesmerising.  You feel happy and safe as you follow it along, then suddenly the light speeds up and you try to keep up, before you know it the light is gone and you are lost and alone in the dark forest'
        this.strOp1 = 'Keep walking in the dark'
        this.strOp2 = 'Sit down and wait quietly'
        this.root.mc_1.visible = false
        this.root.mc_2.visible = false
        this.root.mc_3.visible = false
        this.root.mc_4.visible = true
        this.root.mc_5.visible = false
        this.root.mc_6.visible = false
        this.root.death_mc.visible = false
        this.root.btn_1.removeAllEventListeners('click');
        this.root.btn_2.removeAllEventListeners('click');
        this.root.btn_1.on('click', function() { game.setstate11() })
        this.root.btn_2.on("click", function() { game.setstate4() })
         
     }  else if (this.setstate == 5) {
        this.str1 = 'You try to fight but the zombie overpowers you and eats your brain'
        this.strOp1 = 'dead'
        this.strOp2 = 'dead'
        this.root.mc_1.visible = false
        this.root.mc_2.visible = false
        this.root.mc_3.visible = false
        this.root.mc_4.visible = false
        this.root.mc_5.visible = false
        this.root.mc_6.visible = false
        this.root.death_mc.visible = true
        this.root.btn_1.removeAllEventListeners('click');
        this.root.btn_2.removeAllEventListeners('click');
        
     } else if (this.setstate == 6) {
        this.str1 = 'You start trying to fight off the Zombie but he grabs you and you end up wrestling with each other.  Its dark and somewhere in all the turmoil you slip, tumble down a steep bank and hit your head. When you wake up the Zombie is nowhere to be seen but you are totally lost in the forest'
        this.strOp1 = 'Keep walking in the dark'
        this.strOp2 = 'Sit down and wait quietly'
        this.root.mc_1.visible = false
        this.root.mc_2.visible = false
        this.root.mc_3.visible = false
        this.root.mc_4.visible = true
        this.root.mc_5.visible = false
        this.root.mc_6.visible = false
        this.root.death_mc.visible = false
        this.root.btn_1.removeAllEventListeners('click');
        this.root.btn_2.removeAllEventListeners('click');
        this.root.btn_1.on('click', function() { game.setstate11() })
        this.root.btn_2.on("click", function() { game.setstate10() })
         
    } else if (this.setstate == 7) {
        this.str1 = 'Turns out the Zombie used to be a mechanic and he is quite friendly despite being dead.  He helps you to get the car going but then he asks you for a lift to town'
        this.strOp1 = 'Let him get in the car'
        this.strOp2 = 'Tell him no'
        this.root.mc_1.visible = false
        this.root.mc_2.visible = false
        this.root.mc_3.visible = false
        this.root.mc_4.visible = false
        this.root.mc_5.visible = true
        this.root.mc_6.visible = false
        this.root.death_mc.visible = false
        this.root.btn_1.removeAllEventListeners('click');
        this.root.btn_2.removeAllEventListeners('click');
        this.root.btn_1.on('click', function() { game.setstate8() })
        this.root.btn_2.on("click", function() { game.setstate5() })
        
    } else if (this.setstate == 8) {
        this.str1 = 'You agree to let the Zombie get into the car but as soon as you get in and close the door he attacks you.  You are so surprised by his sudden change that he overpowers you and eats your brain.'
        this.strOp1 = 'Dead'
        this.strOp2 = 'Dead'
        this.root.mc_1.visible = false
        this.root.mc_2.visible = false
        this.root.mc_3.visible = false
        this.root.mc_4.visible = false
        this.root.mc_5.visible = false
        this.root.mc_6.visible = false
        this.root.death_mc.visible = true
        this.root.btn_1.removeAllEventListeners('click');
        this.root.btn_2.removeAllEventListeners('click');
        
             }else if (this.setstate == 9) {
        this.str1 = 'You manage to find your way back to the car and to your suprise, when you get in it and try the key, the car starts and the stereo starts to play loudly.  You dont hang around to wonder about it, you drive straight home and have a lie down in your warm bed'
        this.strOp1 = 'Yay'
        this.strOp2 = 'Yay'
        this.root.mc_1.visible = false
        this.root.mc_2.visible = false
        this.root.mc_3.visible = false
        this.root.mc_4.visible = false
        this.root.mc_5.visible = false
        this.root.mc_6.visible = true
        this.root.death_mc.visible = false
        this.root.btn_1.removeAllEventListeners('click');
        this.root.btn_2.removeAllEventListeners('click');
                 
             } else if (this.setstate == 10) {
        this.str1 = 'You sit quietly and try to slow your breathing down, you keep telling yourself the most important thing is not to panic.  As you calm down and adjust to the darkness and the sounds of the forest you can hear music playing and see a feint white glow through the trees.  You walk towards the sound and light and to your total joy you see your car with the lights on the stereo playing.  You dont hang around to wonder, you jump straight in drive straight home'
        this.strOp1 = 'Yay'
        this.strOp2 = 'Yay'
        this.root.mc_1.visible = false
        this.root.mc_2.visible = false
        this.root.mc_3.visible = false
        this.root.mc_4.visible = false
        this.root.mc_5.visible = false
        this.root.mc_6.visible = true
        this.root.death_mc.visible = false
        this.root.btn_1.removeAllEventListeners('click');
        this.root.btn_2.removeAllEventListeners('click');
                 
             } else if (this.setstate == 11) {
        this.str1 = 'You keep walking in the dark, trying to work out where you are, but you slip and fall down a deep ravine, hit your head on a rock and die'
        this.strOp1 = 'dead'
        this.strOp2 = 'dead'
        this.root.mc_1.visible = false
        this.root.mc_2.visible = false
        this.root.mc_3.visible = false
        this.root.mc_4.visible = false
        this.root.mc_5.visible = false
        this.root.mc_6.visible = false
        this.root.death_mc.visible = true
        this.root.btn_1.removeAllEventListeners('click');
        this.root.btn_2.removeAllEventListeners('click');
                 
             }
    this.setText();
}
    chooseNumber () {
	this.randomNumber = Math.floor(Math.random() * 10) + 1
}
    setText () {
    this.main_Txt.text = this.str1;
    this.op_1.text = this.strOp1;
    this.op_2.text = this.strOp2;
}
    setstate1 () {  
    console.log('setstate1')
    this.setstate = 1
    this.update();    
}
     setstate2 () {  
    console.log('setstate2')
    this.setstate = 2
    this.update();    
}
     setstate3 () {  
    console.log('setstate3')
    this.setstate = 3
    this.update();    
}
     setstate4 () {  
    this.chooseNumber();
        if (this.randomNumber >= 5) {
    console.log('setstate4');
    this.setstate = 4;
    this.update();   
         
    } else {
    console.log('setstate9');
    this.setstate = 9
    this.update()  
    }     
}
    setstate5 () {
        this.chooseNumber();
        if (this.randomNumber >= 5) {
    console.log('setstate5');
    this.setstate = 5;
    this.update();   
         
    } else {
    console.log('setstate6');
    this.setstate = 6
    this.update()  
    }    
  }
    setstate7 () {  
    console.log('setstate7')
    this.setstate = 7
    this.update();    
}
    setstate8 () {  
    console.log('setstate3')
    this.setstate = 8
    this.update();    
}
    setstate9 () {  
    console.log('setstate9')
    this.setstate = 9
    this.update();    
}
    setstate10 () {  
    console.log('setstate10')
    this.setstate = 10
    this.update();    
}
    setstate11 () {  
    console.log('setstate11')
    this.setstate = 11
    this.update();    
}
}
