
const rolls = [10,2,8,5,5,4,2,3,4,9,0,0,10,2,8,4,3,10,5,2]

let rollIndex=0, score=0
for(frameIndex=0; frameIndex<10; frameIndex++){
    if(rolls[rollIndex]===10){
        score +=10+rolls[rollIndex+1]+rolls[rollIndex+2]
        rollIndex++
    }else{
        if((rolls[rollIndex]+rolls[rollIndex+1]) ===10)
            score+=10+rolls[rollIndex+2]
        else
            score+=rolls[rollIndex]+rolls[rollIndex+1]
        rollIndex+=2
    }
}

console.log(score)