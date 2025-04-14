let MenuItens = document.getElementById("MenuItens");

MenuItens.style.maxHeight = "0px";

function menucelular(){
    if(MenuItens.style.maxHeight == "0px"){
        MenuItens.style.maxHeight = "200px";
    }else{
        MenuItens.style.maxHeight = "0px";
    }
}

let EntrarPainel = document.getElementById("EntrarPainel");
let CadastroSite = document.getElementById("CadastroSite");
let Indicador = document.getElementById("Indicador");

function Cadastro(){
    CadastroSite.style.transform = "translateX(0px)";
    EntrarPainel.style.transform = "translateX(0px)";
    Indicador.style.transform = "translateX(100px)";
}

function Entrar(){
    EntrarPainel.style.transform = "translateX(300px)";
    CadastroSite.style.transform = "translateX(300px)";
    Indicador.style.transform = "translateX(0px)";
}
