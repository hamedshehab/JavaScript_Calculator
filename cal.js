function fun(number)
{
    onclick = document.getElementById("output").innerHTML += number
}

function clr()
{
    onclick = document.getElementById("output").innerHTML = ""
}

function solve()
{
    onclick = document.getElementById("output").innerHTML = eval(document.getElementById("output").innerHTML)
}