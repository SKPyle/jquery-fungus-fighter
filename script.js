$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHP = 100;  //application state
let heroAP = 100;    //application state

function onReady() {

    $('.arcane-sceptre').on('click', launchArcaneSceptre);
    $('.entangle').on('click', launchEntangle);
    $('.dragon-blade').on('click', launchDragonBlade);
    $('.star-fire').on('click', launchStarFire);
    $('.attack-btn').on('click', LaunchRenderedAttack);

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


function launchArcaneSceptre(){
    heroAP -= 12;
    fungusHP -= 14;
    $('.hp-text').html(`
    
          ${heroAP}
     
    
        `)
    LaunchRenderedAttack();
console.log(heroAP);
console.log(fungusHP);

}
//
function launchEntangle(){
    heroAP -= 23;
    fungusHP -= 9;
    $('.hp-text').html(`
    
          ${heroAP}
     
    
        `)
    
    LaunchRenderedAttack();

}
//
function launchDragonBlade(){
    heroAP -= 38;
    fungusHP -= 47;
    $('.hp-text').html(`
    
          ${heroAP}
     
    
        `)
    LaunchRenderedAttack();
}
//

function launchStarFire(){
    heroAP -= 33;
    fungusHP -= 25;
    $('.hp-text').html(`
    
          ${heroAP}
     
    
        `)

}
//
function LaunchRenderedAttack(){
$('.ap-text').html
(`
    ${heroAP}
`)
$('.hp-text').html
(`
    ${fungusHP}
`)
    

if (fungusHP <= 0){
        fungusHP = 0;
        
      }
      if(heroAP <= 0 ){
        heroAP = 0;
      }
   
}   

//render1();
//render2();

/*

launchArcaneSceptre

- **AP Cost:** 12
- **HP Damage:** 14


launchEntangle

- **AP Cost:** 23
- **HP Damage:** 9

launchDragonBlade
### ![dragon blade](./images/dragon-blade-3.png) Dragon Blade

- **AP Cost:** 38
- **HP Damage:** 47

launchStarFire

### ![star fire](./images/star-fire.png) Star Fire

- **AP Cost:** 33
- **HP Damage:** 25 
*/