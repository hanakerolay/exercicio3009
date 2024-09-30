function gerarTabuada() {
    let numero = document.getElementById("numero").value;
    let resultadotabu = document.getElementById("resultadotabu");
    if (numero == "") {
        resultadotabu.innerHTML = "Por favor, insira um número válido.";
        return;
    }
    let tabuada = "<table>";
    for (let i = 1; i <= 10; i++) {
        tabuada += `<tr><td>${numero} x ${i}= </td><td>${numero * i}</td></tr>`;
    }
    tabuada += "</table>";
    resultadotabu.innerHTML = tabuada;
}


let soma = 0;

function adicionarValor() {
    // Pega o valor do input
    let valor = document.getElementById('valor').value;

    // Converte para número e soma ao total
    soma += Number(valor);

    // Limpa o campo para o próximo valor
    document.getElementById('valor').value = "";

    // Atualiza o resultado parcial na tela
    document.getElementById('somaResultado').textContent = 'Soma atual: ' + soma;
}





        