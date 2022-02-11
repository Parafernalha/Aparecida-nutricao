
var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i<pacientes.length;i++)
{
  var paciente = pacientes[i];

  var tdpeso = paciente.querySelector(".info-peso");
  var peso = tdpeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido)
  {
      console.log("peso invalido!");
      pesoValido = false;
      tdImc.textContent = "peso invalido!";
      paciente.classList.add("paciente-invalido");
  }
  if (!validaAltura)
  {
      console.log("altura invalida!");
      alturaValida = false;
      tdImc.textContent = "altura invalida!";
      paciente.classList.add("paciente-invalido");
    //  paciente.style.color = "red"; // deixa o que é de CSS em CSS e o que é de Js em Js.
    //  paciente.style.backgroundColor="yellow";
  }
if ( pesoValido==true && alturaValida==true)
{
       var imc = calculaImc(peso, altura);
       tdImc.textContent = imc;
}
}


function validaPeso(peso)
{

    if (peso >= 0 && peso <= 1000)
     {
        return true;
     }
    else
     {
        return false;
     }
}



function validaAltura(altura)
 {

    if (altura >= 0 && altura <= 3.0)
     {
        return true;
     }
    else
     {
        return false;
     }
}



   function calculaImc(peso, altura)
   {
       var imc = 0;

       imc = peso / (altura * altura);

       return imc.toFixed(2);
   }
