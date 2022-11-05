let score1 = document.getElementById("counter1")
let score2 = document.getElementById("counter2")


let count = 0
let count2 =0

function plus1() {

    count+=1
    score1.textContent = count
}

function plus2() {

    count+=2
    score1.textContent = count
}


function plus3() {

    count+=3
    score1.textContent = count
}


function pluss1() {

    count2+=1
    score2.textContent = count2
}

function pluss2() {

    count2+=2
    score2.textContent = count2
}


function pluss3() {

    count2+=3
    score2.textContent = count2
}

function reset() {

    count = 0
    count2 = 0
    score1.textContent = count
    score2.textContent = count2
}