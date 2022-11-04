"use strict"
/*CONTADORES INDIVIDUALES*/
let c_gem = 0;
let c_coin = 0;
let c_glimmer = 0;
let score = 0;

/*PUNTUACION PARA GENERAR DURUMS Y PUNTUACION GENERAL*/
let score_durum = 0;
let durums = 0;

/*VALOR DE LAS DIVISAS*/
const gem_value = 100;
const coin_value = 10;
const glimmer_value = 1000;

/*CONTADORES EN EL HTML*/
const count_gem = document.getElementById("count_gem");
const count_coin = document.getElementById("count_coin");
const count_glimmer = document.getElementById("count_glimmer");

/*BOTONES EN EL HTML*/
const gem = document.getElementById("btn_gem");
const coin = document.getElementById("btn_coin");
const glimmer = document.getElementById("btn_glimmer");

/* MARCADOR DE PUNTUACION TOTAL */
const sc = document.getElementById("sc_num");

/*CONTENEDOR DE DURUMS*/
const durum_wrapper = document.getElementById("durum_wrapper");

/*FUNCION PARA COMPROBAR SI SE AÑADE UN DURUM */
function sumar_durum (units){
    if(units >= 1000)
    {
        score_durum = 0;
        alert("YOU GOT A DURUM!! CONGRATS!!")
        durum_wrapper.innerHTML += `<img src="img/durum.png" class="durum_token">`;
    }
}

/* EVENTOS DE GEMA */
gem.addEventListener("mouseover",
    ()=>{
            gem.innerText = "Catch me!"
            let col = Math.floor(Math.random()*4+1);        
            let fin = col +1; 
            while(gem.style.gridColumn === `${col}/${fin}`)
            {
                let col = Math.floor(Math.random()*4+1);        
                let fin = col +1; 
            }
            gem.style.gridColumn = `${col}/${fin}`;
    });
gem.addEventListener("click",
()=>{
        c_gem++;
        count_gem.innerText= c_gem;
        gem.innerText = "COUGHT ME!!";
        score += gem_value;
        score_durum += gem_value;
        sc.innerText = score;
        let col = Math.floor(Math.random()*4+1);        
        let fin = col +1; 
        sumar_durum(score_durum);
        while(gem.style.gridColumn === `${col}/${fin}`)
        {
            let col = Math.floor(Math.random()*4+1);        
            let fin = col +1; 
        }
        gem.style.gridColumn = `${col}/${fin}`;
});

/*EVENTOS DE MONEDA */
coin.addEventListener("click",
    ()=>{
        c_coin++;
        count_coin.innerText = c_coin;
        score += coin_value;
        score_durum += coin_value;
        sc.innerText = score;
        sumar_durum(score_durum);
    }
)

/*EVENTOS DE GLIMMER*/

/*SI QUIERES PROBAR QUE EL GLIMMER FUNCIONA, COMENTA ESTE BLOQUE*/

/*-------sin comentarlo, es poco posible que se pueda pulsar----------*/
glimmer.addEventListener("mouseover",
    ()=>{
        glimmer.innerText = "Good Luck";
        glimmer.classList.add("btn_glimmer");
        let top = Math.floor(Math.random()*95+5);
        let left = Math.floor(Math.random()*95+5);         
        glimmer.style.top = `${top}%`;
        glimmer.style.left = `${left}%`;
    }
);
/*-------------------------------------------------------------------*/

glimmer.addEventListener("click",
    ()=>{
        c_glimmer++;
        count_glimmer.innerText= c_glimmer;
        glimmer.innerText = "HOW DID YOU CATCH ME?";
        score += glimmer_value;
        score_durum += glimmer_value;
        sc.innerText = score;
        sumar_durum(score_durum);
        
        let top = Math.floor(Math.random()*97+3);
        let left = Math.floor(Math.random()*97+3);         
        glimmer.style.top = `${top}%`;
        glimmer.style.left = `${left}%`;
        
    }
);


