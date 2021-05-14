let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");
let hasWin = false;
let score = 100;
let bet = 0;
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let whitchCar = "";

document.querySelector(".score").innerHTML = score;

plus.onclick = () => {
    if (bet>=score){
        plus.disabled = true
    }
    else {
        minus.disabled = false;
        bet += 10;
        document.querySelector(".bet").innerHTML = bet;
    }
}

minus.onclick = () => {
    if (bet <= 0){
        minus.disabled = true
    }
    else{
        minus.disabled = false;
        bet -= 10;
        document.querySelector(".bet").innerHTML = bet;
    }
}


let speedCar = (car, color) =>{
    let margin = 0;
    let interval = setInterval(()=>{
            let speed = Math.random()*0.2;
            margin += speed;
            car.style.marginLeft = margin + "%";
            if (margin > 100){
                hasWin = true;
                if(whitchCar==color){
                    score += bet * 2;
                    document.querySelector(".score").innerHTML = score;
                    console.log("U WIN")
                }
                else{
                    console.log("U LOST")
                }
            }
            if (hasWin){
                clearInterval(interval);
            }
        },5
    )
}

let properlyWinner = (color) => {
    if (bet <= 0 || score <=0){
        alert("Ты не сделал ставку или твой счет равен нулю")
    }
    else{
        hasWin = false
        speedCar(car1, "white");
        speedCar(car2, "black");
        whitchCar = color;
        score -= bet;
        document.querySelector(".score").innerHTML = score;
    }
    
}



