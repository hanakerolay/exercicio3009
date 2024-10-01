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


function calcularSaldo() {
    let saldo = Number(document.getElementById('saldo').value);

    if (isNaN(saldo) || saldo < 0) {
        document.getElementById('resultado').innerText = "Por favor, insira um saldo inicial válido.";
        return;
    }

    for (let i = 1; i <= 5; i++) {
        const tipoOperacao = document.getElementById('tipo' + i).value;
        const valorOperacao = parseFloat(document.getElementById('valor' + i).value);

        if (isNaN(valorOperacao) || valorOperacao < 0) {
            document.getElementById('resultado').innerText = `Por favor, insira um valor válido para a operação ${i}.`;
            return;
        }

        if (tipoOperacao === 'credito') {
            saldo += valorOperacao;
        } else if (tipoOperacao === 'debito') {
            saldo -= valorOperacao;
        }
    }

    document.getElementById('resultadoSaldo').innerText = 'Saldo Final: R$' + saldo.toFixed(2);
}









function gerarRegistros() {
    let totalAulas = Number(document.getElementById('totalAulas').value);
    let registroPresencas = document.getElementById('registroPresencas');

    if (isNaN(totalAulas) || totalAulas <= 0) {
        document.getElementById('resultadoPresen').innerText = "Por favor, insira um número válido de aulas.";
        return;
    }

    registroPresencas.innerHTML = '';
    document.getElementById('resultadoPresen').innerText = '';

    for (let i = 1; i <= totalAulas; i++) {
        registroPresencas.innerHTML += `
            <div class="aula">
                <label for="aula${i}">Aula ${i}:</label>
                <select id="aula${i}">
                    <option value="presente">Presente</option>
                    <option value="ausente">Ausente</option>
                </select>
            </div>
        `;
    }

    document.getElementById('calcularPresen').style.display = 'inline-block';
}

function calcularResultado() {
    let totalAulas = Number(document.getElementById('totalAulas').value);
    let totalPresencas = 0;

    for (let i = 1; i <= totalAulas; i++) {
        const statusAula = document.getElementById(`aula${i}`).value;
        if (statusAula === 'presente') {
            totalPresencas++;
        }
    }

    const percentualPresenca = (totalPresencas / totalAulas) * 100;
    const resultadoPresen = percentualPresenca >= 75
        ? `Aprovado com ${percentualPresenca.toFixed(2)}% de presença`
        : `Reprovado com ${percentualPresenca.toFixed(2)}% de presença`;

    document.getElementById('resultadoPresen').innerText = resultadoPresen;
}