
let vscomp = document.getElementById('VScomp');
let vsplayer = document.getElementById('VSplayer');
let deleteofplayer = true
let deleteofcomp = true
function VScomp() {

    if (deleteofcomp || deleteofplayer) {
        vsplayer.classList.remove('active');
        vscomp.classList.add('active');
    }
    deleteofplayer = false
    deleteofcomp = false

    var Boxes = document.querySelectorAll('.box')
    var info = document.getElementById('info')
    let reset = document.getElementById('reset')
    let delete1 = document.getElementById('delete1')
    var a = "X"
    let gameover = false
    info.innerText = `Player X Turn`

    Boxes.forEach(box => {
        box.addEventListener('click', () => {

            if (box.innerHTML == "" && !gameover) {

                box.innerHTML = a
                checkWins()
                compchoice()
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
        // Check for draw
        var isDraw = Array.from(Boxes).every(box => box.innerHTML !== "" && !gameover);
        if (isDraw) {
            gameover = true;
            info.innerText = "It's a Draw!";
        }
    }
    reset.addEventListener('click', () => {
        deleteofplayer = true
        Boxes.forEach(box => {
            box.innerHTML = ""
            gameover = false
            a = "X"
            info.innerText = `Player X Turn`
            box.classList.remove("winner")
            box.style.cursor = "pointer"
            VScomp()
        })

    })

    delete1.addEventListener('click', () => {
        deleteofcomp = true
        vscomp.classList.remove('active');
        vsplayer.classList.remove('active');
        Boxes.forEach(box => {
            box.innerHTML = ""
            gameover = false
            a = "X"
            info.innerText = `Player X Turn`
            box.classList.remove("winner")
            box.style.cursor = "pointer"

            if (box && box.parentNode) {
                var clonedElement = box.cloneNode(true);
                box.parentNode.replaceChild(clonedElement, box);
            }


        })

    })

    function compchoice() {

        setTimeout(() => {



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

        }, 100);

    }
}

// // VS player Logic
function VSplayer() {

    if (deleteofcomp || deleteofplayer) {
        vscomp.classList.remove('active');
        vsplayer.classList.add('active');
    }

    deleteofplayer = false
    deleteofcomp = false

    let Boxes = document.querySelectorAll('.box')
    let info = document.getElementById('info')
    let reset = document.getElementById('reset')
    var a = "O"
    let gameover = false
    info.innerText = `Player X Turn`

    Boxes.forEach(box => {
        box.addEventListener('click', () => {
            if (box.innerHTML == "" && !gameover) {
                if (a === "O") {
                    info.innerText = `Player  ${a} Turn`
                    a = "X"
                }
                else if (a === "X") {
                    info.innerText = `Player  ${a} Turn`
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
        // Check for draw
        var isDraw = Array.from(Boxes).every(box => box.innerHTML !== "" && !gameover);
        if (isDraw) {
            gameover = true;
            info.innerText = "It's a Draw!";
        }
    }
    reset.addEventListener('click', () => {
        deleteofcomp = true
        Boxes.forEach(box => {
            box.innerHTML = ""
            gameover = false
            a = "O"
            info.innerText = `X Turn`

            box.classList.remove("winner")
            box.style.cursor = "pointer"
            VSplayer()

        })
    })

    delete1.addEventListener('click', () => {
        deleteofplayer = true

        vscomp.classList.remove('active');
        vsplayer.classList.remove('active');
        Boxes.forEach(box => {
            box.innerHTML = ""
            gameover = false
            a = "O"
            info.innerText = `X Turn`

            box.classList.remove("winner")
            box.style.cursor = "pointer"
            if (box && box.parentNode) {
                var clonedElement = box.cloneNode(true);
                box.parentNode.replaceChild(clonedElement, box);
            }

        })
    })


}


