// Self Logic
// Computer Logic
function VScomp() {
    var Boxes = document.querySelectorAll('.box')
    var info = document.getElementById('info')
    let reset = document.getElementById('reset')
    var a = "X"
    let gameover = false
    info.innerText = `Player X Turn`

    Boxes.forEach(box => {
        box.addEventListener('click', () => {
            if (box.innerHTML == "" && !gameover) {

                box.innerHTML = a
                checkWins()
                compchoice()

                if (gameover) {
                    Boxes.forEach((box) => {
                        box.style.cursor = "not-allowed"
                    })
                }
            }
        })
    })
    // Check Wins
    const checkWins = () => {
        let wins = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ]
        wins.forEach(i => {
            if (Boxes[i[0]].innerHTML == Boxes[i[1]].innerHTML && Boxes[i[1]].innerHTML == Boxes[i[2]].innerHTML && Boxes[i[0]].innerHTML != "") {
                info.innerText = `${Boxes[i[0]].innerHTML} Won`
                gameover = true
                i.forEach(y => {
                    Boxes[y].classList.add("winner")
                })

            }
        })
    }
    reset.addEventListener('click', () => {
        Boxes.forEach(box => {
            box.innerHTML = ""
            gameover = false
            a = "X"
            info.innerText = `Player X Turn`
            Boxes.forEach((box) => {
                box.classList.remove("winner")
                box.style.cursor = "pointer"
            })
        })
    })

    function compchoice() {
        if (!gameover) {
            let flag = false;

            while (!flag) {
                let nums = Math.floor(Math.random() * 8);
                let box = Boxes[nums];

                if (box.innerHTML === "") {
                    box.innerHTML = "O";
                    flag = true;
                    checkWins();
                }
            }
        }
    }
}

// // VS player Logic
function VSplayer() {
    let Boxes = document.querySelectorAll('.box')
    let info = document.getElementById('info')
    let reset = document.getElementById('reset')
    var a = "O"
    let gameover = false
    info.innerText = `X Turn`

    Boxes.forEach(box => {
        box.addEventListener('click', () => {
            if (box.innerHTML == "" && !gameover) {
                if (a === "O") {
                    info.innerText = `${a} Turn`
                    a = "X"
                }
                else if (a === "X") {
                    info.innerText = `${a} Turn`
                    a = "O"
                }
                box.innerHTML = a
                checkWins()

                if (gameover) {
                    Boxes.forEach((box) => {
                        box.style.cursor = "not-allowed"
                    })
                }
            }
        })
    })

    // Check Wins
    const checkWins = () => {
        let wins = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ]
        wins.forEach(i => {
            if (Boxes[i[0]].innerHTML == Boxes[i[1]].innerHTML && Boxes[i[1]].innerHTML == Boxes[i[2]].innerHTML && Boxes[i[0]].innerHTML != "") {
                info.innerText = `${Boxes[i[0]].innerHTML} Won`
                gameover = true

                i.forEach(y => {
                    Boxes[y].classList.add("winner")
                })
            }
        })
    }
    reset.addEventListener('click', () => {
        Boxes.forEach(box => {
            box.innerHTML = ""
            gameover = false
            a = "O"
            info.innerText = `X Turn`
            Boxes.forEach((box) => {
                box.classList.remove("winner")
                box.style.cursor = "pointer"
            })
        })
    })
}
