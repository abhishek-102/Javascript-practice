/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

document.querySelector('.dice').style.display="none";
var activeplayer=0,round=0;
var score=[0,0];
document.querySelector('#current-0').innerHTML='0';
document.querySelector('#current-1').innerHTML='0';
document.querySelector('#score-0').innerHTML='0';
document.querySelector('#score-1').innerHTML='0';

document.querySelector('.btn-roll').addEventListener('click',function()
{
    var dice=Math.floor(Math.random()*6)+1;
    var dicedom= document.querySelector('.dice');
        document.querySelector('.dice').style.display="block";
        dicedom.src='dice-'+dice+'.png';
        
    
    if(dice!==1)
    {
        round+=dice;
        document.querySelector('#current-'+activeplayer).innerHTML=round;
    }
    else{
        round=0;
        document.querySelector('#current-0').innerHTML='0';
        document.querySelector('#current-1').innerHTML='0';
        activeplayer===0? activeplayer=1:activeplayer=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');


    }
});
document.querySelector('.btn-hold').addEventListener('click',function()
{
    if(score[activeplayer]>=20)
    {
     document.querySelector("#name-"+activeplayer).textContent='Winner';
     document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
    }
    else{
        score[activeplayer]+=round;
        round=0;
        document.querySelector('.dice').style.display="none";
        document.querySelector('#score-'+activeplayer).innerHTML=score[activeplayer];
        document.querySelector('#current-'+activeplayer).innerHTML=score[activeplayer];
        activeplayer===0? activeplayer=1:activeplayer=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
    }
    
    


});