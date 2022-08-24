let fimDeJogo = false
let linha = 1;
let resultado = '';
let entrada = [];

data()
function data() {
    listDate = []
    const dateIntervalGenerator = (() => {
        const _generateInterval = (startDate, endDate) => {
            const date = new Date(startDate.getTime());
            const dates = [];
            while (date <= endDate) {
                dates.push(new Date(date));
                date.setDate(date.getDate() + 1);
            }
            return dates;
        };
        return {
            generateIn: _generateInterval,
        };
    })();
    let data1 = new Date("2022-08-22")
    let data2 = new Date("2026-12-01")
    let intervalo = dateIntervalGenerator.generateIn(data1, data2)

    intervalo.forEach(element => {
        listDate.push(element.toLocaleDateString())
    })

    let indice = listDate.indexOf(new Date().toLocaleDateString())
    let dia = palavrasValidas[indice]
    palavraDoDia = dia.toLocaleUpperCase()
}

const trataTecla = (tecla) => {
    if (fimDeJogo) {
        return
    }

    let char = tecla.toUpperCase();
    let alfabeto = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "ENTER", "BACKSPACE",];

    if (!alfabeto.includes(char)) {
        console.log("tecla inválida", char);
        return null;
    }

    resultado = gerarPalavra()
    if (char == "ENTER") {
        if (entrada.length == 5) {
            validarEntrada();
        }
        return;
    }

    if (char == "BACKSPACE") {
        entrada.pop();
        console.log(entrada);
        deletar();
        document.getElementById('invalidar').innerHTML = ""
        return;
    }

    if (entrada.length < 5) {
        entrada.push(char);
        console.log(entrada);

        exibeLetra(char);
    }
};

const ouvinteDeTeclas = (evento) => {
    trataTecla(evento.key)
};

function exibeLetra(letra) {
    let elId = `l${linha}c${entrada.length}`;
    const el = document.getElementById(elId);
    el.textContent = letra;
}

function gerarPalavra() {
    return entrada[0] + entrada[1] + entrada[2] + entrada[3] + entrada[4]
}

function checaResultado(resultado) {
    //  console.log(resultado)
    // localStorage.setItem('word1', resultado)
    // console.log(localStorage.word1)
    if (resultado == palavraDoDia) {
        startConfetti()
        // soltaRojao()
        fimDeJogo = true;
    } else if (linha >= 6) {
        document.getElementById('invalidar').innerHTML = `A palavra é: ${palavraDoDia}`
    } else {
        linha += 1;
        entrada = [];
    }
    return
}

function validarEntrada() {
    if (!palavrasValidas.includes(resultado)) {
        document.getElementById('invalidar').innerHTML = "Palavra inválida"
        return
    } else {
        for (var i = 1; i <= 5; i++) {
            let elId = `l${linha}c${i}`;
            const el = document.getElementById(elId);
            const tecladoColorido = document.getElementById(el.textContent)
            if (palavraDoDia[i - 1] == el.textContent) {
                el.classList.add('fullcorrect')
                tecladoColorido.classList.add('fullcorrect')
            } else if (palavraDoDia.includes(el.textContent)) {
                el.classList.add('correct')
                tecladoColorido.classList.add('correct')
            } else {
                el.classList.add('incorrect')
                tecladoColorido.classList.add('incorrect')
            }
        }
    }
    checaResultado(resultado)
}
// function soltaRojao() {
//     //usado para renderizar o fullcorrect antes do alert, mas pode melhorar
//     setTimeout(() => { window.alert('pow pow pow tey tey'); }, 200);

// }

function deletar() {
    let elId = `l${linha}c${entrada.length + 1}`;
    const el = document.getElementById(elId);
    el.textContent = '';
}

document.body.addEventListener("keydown", ouvinteDeTeclas);

document.querySelectorAll(".tecla").forEach((el) => {
    el.addEventListener("click", function (el) {
        let letra = el.srcElement.textContent;
        if (letra == "") {
            letra = "BACKSPACE";
        }
        trataTecla(letra);
    });
});
