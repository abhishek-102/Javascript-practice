/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var activeplayer=0,round=0;
document.getElementById('current-0').innerHTML='0';
document.getElementById('current-1').innerHTML='0';
document.getElementById('score-0').innerHTML='0';
document.getElementById('score-1').innerHTML='0';
document.querySelector('.dice').style.display='none';

document.querySelector('.btn-roll').addEventListener('click', function() {
    // body
    var x= document.querySelector('.dice');
    x.style.display='block';
    var dice=Math.floor(Math.random()*6)+1;
    x.src='dice-'+dice+'.png';
    if(dice!==1)
    {
        round+=dice;
        document.querySelector('#current-'+activeplayer).innerHTML=round;
    }
    else{
        
        
        activeplayer===0?activeplayer=1:activeplayer=0;
        round=0;
        document.querySelector('#current-0').innerHTML='0';
        document.querySelector('#current-1').innerHTML='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
    }


});
