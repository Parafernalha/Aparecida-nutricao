var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");



//extraindo informações do paciente do form

                            //  var nome = form.nome.value;
                            //  var peso = form.peso.value;
                            //  var altura = form.altura.value;
                            //  var gordura = form.gordura.value;

      var paciente =  obtemPacienteDoFormulario(form);

  // Cria a Tr e a Td do paciente

      var pacienteTr = montaTr(paciente);

      var erros = validaPaciente(paciente);

      console.log(erros);
      if (erros.length > 0)
      {
        exibeMensagensDeErro(erros);
        return;
      }


                            //  var pacienteTr = document.createElement("tr");

                            //    var nomeTd = document.createElement("td");
                            //    var pesoTd = document.createElement("td");
                            //    var alturaTd = document.createElement("td");
                            //    var gorduraTd = document.createElement("td");
                            //    var imcTd = document.createElement("td");


                            //    nomeTd.textContent = nome;
                            //    pesoTd.textContent = peso;
                            //    alturaTd.textContent = altura;
                            //    gorduraTd.textContent = gordura;
                            //    imcTd.textContent = calculaImc(peso,altura);

                            //    pacienteTr.appendChild(nomeTd);
                            //    pacienteTr.appendChild(pesoTd);
                            //    pacienteTr.appendChild(alturaTd);
                            //    pacienteTr.appendChild(gorduraTd);
                            //    pacienteTr.appendChild(imcTd);

// adicionando o paciente na tabela

    if (!validaPaciente(paciente))
     {
        console.log("Paciente inválido");
        return;
     }


    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});




function obtemPacienteDoFormulario(form)
{

    var paciente =
    {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}





function montaTr(paciente)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}




function montaTd(dado,classe)
{
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}



function validaPaciente(paciente)
{
    if(paciente.altura < 3.0 && paciente.altura >= 0)
    {
        return true;
    }

}


function validaPaciente(paciente)
 {
   var erros = [];

   if (paciente.nome.length == 0)
    {
       erros.push("O nome não pode ser em branco");
    }
    if (paciente.gordura.length == 0)
    {
       erros.push("A gordura não pode ser em branco");
    }
    if (paciente.peso.length == 0)
    {
        erros.push("O peso não pode ser em branco");
    }
    if (paciente.altura.length == 0)
    {
        erros.push("A altura não pode ser em branco");
    }
    if (!validaPeso(paciente.peso))
    {
       erros.push("Peso é inválido");
    }
    if (!validaAltura(paciente.altura))
    {
       erros.push("Altura é inválida");
    }
    return erros;

}

function adicionaPacienteNaTabela(paciente)
 {
var pacienteTr = montaTr(paciente);
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
 }


function exibeMensagensDeErro(erros)
{
    var ol = document.querySelector("#mensagens-erro");
    ol.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ol.appendChild(li);
   });
}
