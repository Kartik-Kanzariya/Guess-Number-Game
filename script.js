// let secretNumber = math.trunk(math.random()*100)+1;
let secretNumber = Math.trunc(Math.random() * 100) + 1;


let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener('click' , 
function(){

    const guess = Number(document.querySelector('.guess').value)
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!'

    }
   
    // console.log('hii')
    // console.log(document.querySelector('.guess').value)
    if(guess===secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉 Correct Number!'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore= score;
            document.querySelector('.highscore').textContent = highscore
        }
    }
    else if(guess > secretNumber){
        
        if(score > 1){
            document.querySelector('.message').textContent = ' Your Guessing Number Is Too High!'
            score = score -1;
            document.querySelector('.score').textContent = score

        }
        else{
            document.querySelector('.message').textContent = 'Lost The Game'
        }
       
    }
    else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Your Guessing Number Is Too Low!'
            score = score -1;
            document.querySelector('.score').textContent = score

        }
        else{
            document.querySelector('.message').textContent = 'Lost The Game'
        }
    }
})


document.querySelector('.again').addEventListener('click' , 
function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score

    
    
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})