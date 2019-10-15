let pedchoziCislo;
let prvniCislo;
let operace;
let operativ;

let dis;
let dis2;

function abc()
{
    dis = document.getElementById("display");
    dis2 = document.getElementById("display2");
    dis3 = document.getElementById("display3");
}

function cisla(x)
{
    if (dis.innerHTML.includes(".",1))
    dis.innerHTML = dis.innerHTML + x;
    else if (Number(dis.innerHTML) == 0)
    dis.innerHTML = x;
    else
    dis.innerHTML = dis.innerHTML + x;
}

function negace()
{
    let c = dis.innerHTML.includes("-",0)
    if (c){
        dis.innerHTML = dis.innerHTML.substring(1);
    }
    else{
        if (Number(dis.innerHTML) == 0){
        }
        else{            
            dis.innerHTML = "-" + dis.innerHTML;
        }
    }
}

function desCarka()
{
    let c = dis.innerHTML.includes(".")
    if (c){
    }
    else {
        dis.innerHTML = dis.innerHTML + ".";
    }
}

function odmocnina()
{
    dis.innerHTML = Math.sqrt(Number(dis.innerHTML));
}

function mocnina()
{
    dis.innerHTML = Number(dis.innerHTML) * Number(dis.innerHTML);
}

function IDKHowToCallIt()
{
    dis.innerHTML = 1 / Number(dis.innerHTML);
}

function procento() 
{
    dis.innerHTML = Number(prvniCislo) * Number(dis.innerHTML) / 100;    
}

function minus()
{
    dis3.innerHTML = "";
    pedchoziCislo = Number(dis.innerHTML);
    vykonOperace();
    prvniCislo = Number(dis.innerHTML);
    operace = "-";
    dis.innerHTML = 0;
    konecOperace();
}

function plus()
{
    dis3.innerHTML = "";
    pedchoziCislo = Number(dis.innerHTML);
    vykonOperace();
    prvniCislo = Number(dis.innerHTML);
    operace = "+";
    dis.innerHTML = 0;
    konecOperace();
}

function krat()
{
    dis3.innerHTML = "";
    pedchoziCislo = Number(dis.innerHTML);
    vykonOperace();
    prvniCislo = Number(dis.innerHTML);
    operace = "×";
    dis.innerHTML = 0;
    konecOperace();
}

function deleno()
{
    dis3.innerHTML = "";
    pedchoziCislo = Number(dis.innerHTML);
    vykonOperace();
    prvniCislo = Number(dis.innerHTML);
    operace = "÷";
    dis.innerHTML = 0;
    konecOperace();
}

function rovnase()
{
    pedchoziCislo = Number(dis.innerHTML);
    vykonOperace();
    prvniCislo = Number(dis.innerHTML);
    operace = "";
    dis.innerHTML = 0;
    konecOperace()
    konecOperaceKonec();
}

function vykonOperace()
{   
    if(operace == "-"){
        dis.innerHTML = Number(prvniCislo) - Number(dis.innerHTML);
    }
    else if(operace == "+"){
        dis.innerHTML = Number(prvniCislo) + Number(dis.innerHTML);
    }
    else if(operace == "×"){
        dis.innerHTML = Number(prvniCislo) * Number(dis.innerHTML);
    }
    else if(operace == "÷"){
        dis.innerHTML = Number(prvniCislo) / Number(dis.innerHTML);
    } 
}

function konecOperace()
{   
    dis2.innerHTML = dis2.innerHTML + " " + pedchoziCislo + " " + operace; 
}

function konecOperaceKonec()
{   
    dis3.innerHTML = dis2.innerHTML + " = " + prvniCislo; 
    dis2.innerHTML = "";
}

function clearAll()
{
    dis.innerHTML = "0";
    dis2.innerHTML = "";
    dis3.innerHTML = "";
    pedchoziCislo = "";
    prvniCislo = "";
    operace = "";
}

function clearDisplay()
{    
    dis.innerHTML = "0";
}

function backspace()
{
    dis.innerHTML = dis.innerHTML.substring(0, dis.innerHTML.length - 1);
    if (dis.innerHTML == "")
    dis.innerHTML = "0";
}