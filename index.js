let buttonElement=document.getElementById("btn");
let question1 = document.getElementById("d1");
let question2 = document.getElementById("d2");
let question3 = document.getElementById("d3");
let scoreElement = document.getElementById("score");
let answerElement1 = document.getElementById("a1");
let answerElement2 = document.getElementById("a2");
let answerElement3 = document.getElementById("a3");
let answerElement4 = document.getElementById("b1");
let answerElement5 = document.getElementById("b2");
let answerElement6 = document.getElementById("b3");
let answerElement7 = document.getElementById("c1");
let answerElement8 = document.getElementById("c2");
let answerElement9 = document.getElementById("c3");
let restartButton = document.getElementById("res");
let timeContainerEl1 = document.getElementById("k1");
let timeContainerEl2 = document.getElementById("k2");
let timeContainerEl3 = document.getElementById("k3");
let timeEl1 = document.getElementById("w1");
let timeEl2 = document.getElementById("w2");
let timeEl3 = document.getElementById("w3");
let count = 0;
let list = [];
let s = 0;
let s1 = null;
let s2 = null;
let s3 = null;
let clt1 = null;
let clt2 = null;
let clt3 = null;
let ob = {
    answer1: null,
    answer2: null,
    answer3: null
};

function statusEl() {
    for (let n of list) {
        let m= document.getElementById(n);
        m.checked = false;
    }
}

function result() {
    if (ob.answer1 === "saffron") {
        count = count + 1;
    }
    if (ob.answer2 === "white") {
        count = count + 1;
    }
    if (ob.answer3 === "green") {
        count = count + 1;
    }
}

function visible() {
    let s = 0;
    buttonElement.classList.toggle("hide");
    question1.classList.toggle("a");
    clt1 = setInterval(function() {
        s = s + 1;
        timeEl1.textContent = s;
        if (s === 10) {
            visible1();
        }
    }, 1000);
}

function objectInsertion1(a) {
    ob.answer1 = a;
}

function objectInsertion2(b) {
    ob.answer2 = b;
}

function objectInsertion3(c) {
    ob.answer3 = c;
}

function visible1(e) {
    clearInterval(clt1);
    try {
        if (e.type === "click") {
            objectInsertion1(s1);
        }
    } catch (error) {
        console.log(error);
    } finally {
        let s = 0;
        question2.classList.toggle("a");
        question1.classList.toggle("a");
        clt2 = setInterval(function() {
            s = s + 1;
            timeEl2.textContent = s;
            if (s === 10) {
                visible2();
            }
        }, 1000);
    }
}

function visible2(e) {
    clearInterval(clt2);
    try {
        if (e.type === "click") {
            objectInsertion2(s2);
        }
    } catch (error) {
        console.log(error);
    } finally {
        let s = 0;
        question2.classList.toggle("a");
        question3.classList.toggle("a");
        clt3 = setInterval(function() {
            s = s + 1;
            timeEl3.textContent = s;
            if (s === 10) {
                visible3();
            }
        }, 1000);
    }
}

function visible3(e) {
    clearInterval(clt3);
    question3.classList.toggle("a");
    scoreElement.classList.toggle("a");
    restartButton.classList.toggle("a");
    try {
        if (e.type === "click") {
            objectInsertion3(s3);
        }
    } catch (error) {
        console.log(error);
    } finally {
        result();
        scoreElement.textContent = "your score is:" + count + "/3";
    }
}

function p1(e) {
    s1 = e.target.value;
    list.push(e.target.id);
}

function t1(e) {
    s2 = e.target.value;
    list.push(e.target.id);
}

function r1(e) {
    s3 = e.target.value;
    list.push(e.target.id);
}

function play() {
    scoreElement.classList.toggle("a");
    restartButton.classList.toggle("a");
    buttonElement.classList.toggle("hide");
    count = 0;
    s1 = null;
    s2 = null;
    s3 = null;
    ob.answer1 = null;
    ob.answer2 = null;
    ob.answer3 = null;
    statusEl();
    list = [];
}