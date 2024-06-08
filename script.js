const squareContainer = document.querySelector("#square_container");

function createGrid(squaresNumber){

    squareContainer.innerHTML = '';
    

    for(let i = 1; i <= squaresNumber; i++){
    
        const div = document.createElement("div");
        div.setAttribute("id", `div ${i}`);
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.flexGrow = "1";
        div.style.flexShrink = "1";
        squareContainer.appendChild(div);
    
        for(let j = 1; j <= squaresNumber; j++){
            const div2 = document.createElement("div");
            div2.setAttribute("id", `square`);
            div2.style.flexBasis = "3.5rem";
            div2.style.border = "1px solid gray";
            div2.style.backgroundColor = "white";
            div2.style.flexGrow = "1";
            div2.style.flexShrink = "1";

            let opacity = 0;
    
            div2.addEventListener("mouseover", () => {
                div2.style.backgroundColor = "black";
                opacity += 0.10;
                div2.style.opacity =+ opacity;
            });
            div.appendChild(div2);
        }
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

createGrid(16);

const cleanButton = document.querySelector("#clean_button");

cleanButton.addEventListener("click", () => {
    const squares = document.querySelectorAll("#square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
        square.style.opacity = "1";
    });
})

const newButton = document.querySelector("#create_button");

newButton.addEventListener("click", () => {

    let desiredSquares;

    while(!(desiredSquares <= 100)){
        desiredSquares = +(prompt("How many squares would you like this etch a sketch be? (no more than 100)"));
    }
    
    createGrid(desiredSquares);
})