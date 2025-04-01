let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset-btn");
let newGameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");
let turno = true; 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (box.innerText !== "") return;
        box.innerText = turno ? "O" : "X";
        box.disabled = true;
        checkWinner();
        turno = !turno;
    });
});
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () => {
    boxes.forEach((box) => (box.disabled = true));
};
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let pos1Val = boxes[a].innerText;
        let pos2Val = boxes[b].innerText;
        let pos3Val = boxes[c].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            return;
        }
    }
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
    turno = true;
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
