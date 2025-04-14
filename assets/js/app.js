let MenuItens = document.getElementById("MenuItens");

MenuItens.style.maxHeight = "0px";

function menucelular(){
    if(MenuItens.style.maxHeight == "0px"){
        MenuItens.style.maxHeight = "200px";
    }else{
        MenuItens.style.maxHeight = "0px";
    }
}

let produtoImg = document.getElementById("produtoImg");
let produtosMiniatura =document.getElementsByClassName("produtosMiniatura");

produtosMiniatura[0].onclick = function(){
    produtoImg.src = produtosMiniatura[0].src;
}

produtosMiniatura[1].onclick = function(){
    produtoImg.src = produtosMiniatura[1].src;
}

produtosMiniatura[2].onclick = function(){
    produtoImg.src = produtosMiniatura[2].src;
}

produtosMiniatura[3].onclick = function(){
    produtoImg.src = produtosMiniatura[3].src;
}

produtosMiniatura[4].onclick = function(){
    produtoImg.src = produtosMiniatura[4].src;
}

produtosMiniatura[5].onclick = function(){
    produtoImg.src = produtosMiniatura[5].src;
}