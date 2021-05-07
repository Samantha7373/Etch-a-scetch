
const gridContainer = document.querySelector("#gridContainer")


let numOfCells = 150**2;

for (let i = 0; i < numOfCells; i++){
    const singleCell = document.createElement("div")
    singleCell.textContent = " . ";
    singleCell.style.color ="white";
    singleCell.classList.add("bg-black");
    singleCell.addEventListener('mouseover', () => {
        singleCell.textContent = "   ";
        
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor =  `rgb( ${x}, ${y}, ${z} )`;
    
        singleCell.style.background = bgColor;
        
    });
    gridContainer.appendChild(singleCell);
}

function makeRows(rows, cols){
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    
        clearInterval.innerText = (i + 1);
        clearInterval.classList.add("grid-item");
};
makeRows(150 , 150);
function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor =  `rgb( ${x}, ${y}, ${z} )`;
    document.body.innerText = bgColor;

    document.body.style.background = bgColor;
}
