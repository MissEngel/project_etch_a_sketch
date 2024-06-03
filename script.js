const squareContainer = document.querySelector("#square_container");

for(let i = 1; i <= 16; i++){

    const div = document.createElement("div");
    div.setAttribute("id", `div${i}`);
    squareContainer.appendChild(div);
    document.querySelector(`#div${i}`).style.display = "flex";
    document.querySelector(`#div${i}`).style.flexDirection = "column";
    document.querySelector(`#div${i}`).style.flexGrow = "1";
    document.querySelector(`#div${i}`).style.flexShrink = "1";

    for(let j = 1; j <= 16; j++){
        const div2 = document.createElement("div");
        div2.setAttribute("id", `div${i}_${j}`);
        div.appendChild(div2);
        document.querySelector(`#div${i}_${j}`).style.flexBasis = "3.5rem";
        document.querySelector(`#div${i}_${j}`).style.border = "1px solid gray";
        document.querySelector(`#div${i}_${j}`).style.backgroundColor = "white";
        document.querySelector(`#div${i}_${j}`).style.flexGrow = "1";
        document.querySelector(`#div${i}_${j}`).style.flexShrink = "1";

        div2.addEventListener("mouseover", () => {
            div2.style.backgroundColor = "black";
        });
    }
}

function createGrid(squaresNumber){

}

