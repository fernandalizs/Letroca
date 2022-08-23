// let palavraDoDia = palavrasValidas[1];

let fimDeJogo = false
let linha = 1;
let resultado = '';
let entrada = [];
let listaPalavras
for (palavra of palavrasValidas) {
    let listaPalavras = palavra.toUpperCase
}

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
    let data2 = new Date("2025-09-11")
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

    if (char == "ENTER") {
        if (entrada.length == 5) {
            validarEntrada();
            resultado = gerarPalavra()
            checaResultado(resultado)
        }
        return;
    }


    if (char == "BACKSPACE") {
        entrada.pop();
        console.log(entrada);
        deletar()
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
    if (resultado == palavraDoDia) {
        soltaRojao()
        fimDeJogo = true;
    } else {
        linha += 1;
        entrada = [];
    }
    return
}

// function invalidarEntrada() {
//     let invalidar = document.getElementById('invalidar')

//     if (!listaPalavras.includes(entrada)) {
//         let palavraInvalida = "<p> Palavra inválida </p>"
//         let $aviso = document.createElement('div')
//         $aviso.innerHTML = palavraInvalida
//         invalidar.appendChild($aviso)
//         return true
//     }

// }

function validarEntrada() {
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
function soltaRojao() {
    //usado para renderizar o fullcorrect antes do alert, mas pode melhorar
    setTimeout(() => { window.alert('pow pow pow tey tey'); }, 200);

}

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
