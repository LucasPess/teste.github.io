const imagem=document.querySelector("img");

imagem.onclick = () =>{
    const msrc = imagem.getAttribute("src");
    if (msrc === "imagens/gatenho.webp"){
        imagem.setAttribute("src", "imagens/gatenho.jpg");
    } else{
        imagem.setAttribute("src", "imagens/gatenho.webp")
    }
    };

let butao = document.querySelector("button");
let cabecalho = document.querySelector("h1");

function setUserName() {
    const meuNome = prompt("Por favor, digite seu nome!");
    if(!meuNome){
        setUserName()
    }else{
        localStorage.setItem("name", meuNome);
        cabecalho.textContent=`Gatos são legais, ${meuNome}`;
        }
};

if(!localStorage.getItem("name")){
    setUserName();
} else{
    const nomeGuardado = localStorage.getItem("name");
    cabecalho.textContent= `Gatos são legais, ${nomeGuardado}`;
}

butao.onclick = () =>{
    setUserName();
};