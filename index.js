const scoreP1 = document.querySelector(".score_P1");
const scoreP2 = document.querySelector(".score_P2");
const btns = document.querySelectorAll("button")
const btnNewGame = document.querySelector(".btn-New_Game");
const scoreBox = document.querySelector('.score-box')
let totalP1 = 0;
let totalP2 = 0;

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const count = btn.classList[0].split('-')[1];
         if(btn.parentElement.classList.contains('box--add_Score1')){
            const btnClicked = btn.classList[0].split('-')[1];
            totalP1+=Number(count);  
            scoreP1.textContent = totalP1 ;
            checkWinner(btn)
            
          
                    
        
    }
    else{
        totalP2+= Number(count);
        scoreP2.textContent = totalP2;

      
    }
    
    
        
    }) 
   
})

btnNewGame.addEventListener("click",()=>{
    totalP1 = 0;
    totalP2 = 0;
    scoreP1.textContent = totalP1;
    scoreP2.textContent = totalP2;
})

