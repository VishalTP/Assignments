const button = document.querySelector("button"),
      table = document.querySelector("table")

let diceRollHistory = [],
  flag = 0,
  f2 = 0,
  winner

let positionHistory = []

const addTd = (tr, i)=>{
    let td = document.createElement("td")
    td.innerHTML = i
    tr.appendChild(td)
}

const addTr = (players, diceRollHistory, positionHistory)=>{
    for(let i=0; i<players; i++){
        let tr = document.createElement("tr")
        addTd(tr,i+1)
        addTd(tr, diceRollHistory[i][diceRollHistory[i].length-1])
   
        addTd(tr, diceRollHistory[i])
        
        addTd(tr, positionHistory[i])

        td = document.createElement("td")

        if(i==winner)
            addTd(tr, 'winner')
        else
            addTd(tr, " ")
    
        table.appendChild(tr)
      }
}

const startGame = (gridSize, players, grids)=>{

    for (let i = 0; i < players; i++){ 
        diceRollHistory[i] = [];
        positionHistory[i] = []
      }
    for (let i = 0; ; i++) {
      for (let j = 0; j < players; j++) {
        let rN = Math.ceil(Math.random() * 6);
        diceRollHistory[j].push(rN);
  
        if (diceRollHistory[j]) {
          let sum = 0;
          for (let k = 0; k < diceRollHistory[j].length; k++) {
            sum += diceRollHistory[j][k];
          }
          if(sum<=grids)
              positionHistory[j].push(sum)
          if (sum === grids) {
            flag = 1;
            winner =j
            break;
          } else if (sum > grids) {
            diceRollHistory[j].pop();
            break;
          }
        }
      }
      if (flag == 1) break;
    }

}

button.addEventListener("click", (e) => {
  const gridSize = document.querySelector(".grid-size").value,
        players = document.querySelector(".players").value,
        grids = gridSize * gridSize

  e.preventDefault();

  startGame(gridSize, players, grids)

  

  addTr(players, diceRollHistory, positionHistory)
});
