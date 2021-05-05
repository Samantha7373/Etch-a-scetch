
const gridContainer = document.querySelector("#gridContainer")


let numOfCells = 16**2;

for (let i = 0; i < numOfCells; i++){
    const singleCell = document.createElement("div")
    singleCell.textContent = "hello";
    singleCell.style.color ="white";
    singleCell.classList.add("bg-red");
    singleCell.addEventListener('mouseover', () => {
        singleCell.textContent = "goodbye";
        singleCell.classList.toggle("bg-purple");
    });
    gridContainer.appendChild(singleCell);
}
