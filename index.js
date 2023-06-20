let sum=0
let cards=[]  //created array to store all drawed cards
let hasblackjack = false//jst saying all cond hasblackjack is false expt u got blackjck condtn
let isAlive= true//jst saying isalive is true for all cond excpt wen out of game
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")//both getelemnt nd querysel serves same purpose
let cardsEl=document.getElementById("cards-el")
let player ={
    Name:"Misbah",
    Chips: 145
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.Name+": $ "+player.Chips

function getRandomCard(){
    let randomnum=Math.floor(Math.random()*13)+1
    if(randomnum>10){
        return 10
    }else if(randomnum===1){
        return 10
    }else{
     return randomnum
    }  
    
}

function startgame(){
    isAlive=true
  let firstcard=getRandomCard()
  let secondcard=getRandomCard()
   sum=firstcard+secondcard
   cards=[firstcard,secondcard]
    
 rendergame()
}

function rendergame(){
if(sum <=20) {
    message="do u want to draw a new card?"
} else if( sum===21 ) {
    message="wahoo! you got blackjack!"
    hasblackjack=true//drawing new card
} else{
    message="you are out of game"
    isAlive=false//used for drawing new card
}
messageEl.textContent= message
sumEl.textContent="Sum:"+" "+sum
cardsEl.textContent="Cards:"
for( let i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" "
}
}

function newcard(){
    if(hasblackjack === false && isAlive=== true){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        rendergame()
    } 
    
}



   
