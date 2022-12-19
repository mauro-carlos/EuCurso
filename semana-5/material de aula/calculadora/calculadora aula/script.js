
function soma(){
let valor1=document.getElementById("valor1").value;
let valor2=document.getElementById("valor2").value;
let resposta=document.getElementById("resposta")
valor1=Number(valor1);
valor2=Number(valor2);
resposta.innerHTML = valor1 + valor2;
}

function subtracao(){
    let valor1=document.getElementById("valor1").value;
    let valor2=document.getElementById("valor2").value;
    let resposta=document.getElementById("resposta")
    valor1=Number(valor1);
    valor2=Number(valor2);
    resposta.innerHTML = valor1 - valor2;
    }

    function divicao(){
        let valor1=document.getElementById("valor1").value;
        let valor2=document.getElementById("valor2").value;
        let resposta=document.getElementById("resposta")
        valor1=Number(valor1);
        valor2=Number(valor2);
        resposta.innerHTML = valor1 / valor2;
        }

        function multiplicacao(){
            let valor1=document.getElementById("valor1").value;
            let valor2=document.getElementById("valor2").value;
            let resposta=document.getElementById("resposta")
            valor1=Number(valor1);
            valor2=Number(valor2);
            resposta.innerHTML = valor1 * valor2;
            }
    