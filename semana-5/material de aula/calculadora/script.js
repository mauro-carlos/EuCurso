function soma() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res");

    num1 = Number(num1);
    num2 = Number(num2);

    res.innerHTML = num1 + num2;
}

function menos() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res");

    num1 = Number(num1);
    num2 = Number(num2);

    res.innerHTML = num1 - num2;
}

function dividir() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res");

    num1 = Number(num1);
    num2 = Number(num2);

    res.innerHTML = num1 / num2;
}

function vezes() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res");

    num1 = Number(num1);
    num2 = Number(num2);

    res.innerHTML = num1 * num2;
}