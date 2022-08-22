const palavrasValidas =
    ["sagaz", "amora", "pinto", "amago", "negro", "exito", "mexer", "termo", "nobre", "senso",
        "arder", "bolha", "rolha", "ciirco", "falir", "pedir", "afeto", "plena", "etica", "mutua",
        "tenue", "sutil", "vigor", "aquem", "fazer", "porem", "audaz", "assim", "sanar", "seçao",
        "inato", "cerne", "fosse", "ideia", "poder", "moral", "desde", "torpe", "muito", "justo",
        "honra", "futil", "sobre", "anexo", "quiça", "razao", "etnia", "icone", "sonho", "tange",
        "egide", "lapso", "amigo", "mutuo", "expor", "haver", "habil", "tempo", "seara", "dengo",
        "entao", "pesar", "avido", "posse", "genro", "boçal", "coser", "ardil", "causa", "corja",
        "dizer", "paria", "prole", "detem", "tenaz", "dever", "graça", "saber", "obice", "crivo",
        "digno", "apice", "animo", "ansia", "ceder", "brado", "comum", "sendo", "temor", "gleba",
        "culto", "assaz", "atroz", "mundo", "pauta", "censo", "fugaz", "ainda", "cozer", "valha",
        "denso", "nenem", "vicio", "estar", "forte", "vulgo", "reves", "pudor", "regra", "dogma",
        "louco", "criar", "banal", "round", "impor", "saude", "jeito", "atras", "ordem", "tenro",
        "pifio", "desse", "apraz", "pedir", "merce", "reaça", "clava", "usura", "prosa", "feliz",
        "juizo", "servo", "viril", "sabio", "coisa", "manso", "ontem", "presa", "falar", "cunho",
        "forma", "devir", "mesmo", "meiga", "afago", "fluir", "ebrio", "plato", "vendo", "limbo",
        "serio", "guisa", "magoa", "posso", "visar", "heroi", "temer", "acaso", "pleno", "puder",
        "valor", "cisma", "bruma", "lugar", "impio", "exodo", "afins", "obvio", "certo", "gerar",
        "obter", "crise", "matiz", "praxe", "senil", "havia", "todos", "venia", "fluxo", "enfim",
        "abrir", "tedio", "ritmo", "alibi", "falso", "uniao", "tomar", "garbo", "visao", "parvo",
        "facil", "valia", "reter", "pulha", "vital", "favor", "bravo", "grato", "prumo", "vivaz",
        "legal", "parco", "genio", "laico", "burro", "olhar", "possa", "levar", "ameno", "reles",
        "tecer", "casta", "obito", "prime", "selar", "morte", "ranço", "anelo", "fator", "noçao",
        "sabia", "rogar", "noite", "façam", "citar", "farsa", "cabal", "achar", "falta", "adiar",
        "nicho", "coeso", "epico", "cisao", "ouvir", "fardo", "brega", "viver", "ativo", "força",
        "sinto", "gente", "exato", "imune", "passo", "sonso", "amplo", "dubio", "linda", "tendo",
        "cesta", "unico", "sulco", "lavra", "leigo", "sesta", "calma", "revel", "deter", "labor",
        "vemos", "rever", "gesto", "humor", "arduo", "atuar", "pobre", "feixe", "ciume", "carma",
        "ajuda", "tende", "outro", "otica", "igual", "velho", "ponto", "claro", "toada", "hiato",
        "ideal", "sonsa", "debil", "vacuo", "terno", "ambos", "remir", "fusao", "probo", "senao",
        "fonte", "marco", "jovem", "leito", "advem", "capaz", "inata", "terra", "doido", "horda",
        "xeque", "relva", "tenra", "ficar", "algum", "velar", "caçar", "serie", "farao", "lider",
        "apoio", "coçar", "vazio", "anuir", "tanto", "vimos", "rigor", "verso", "entre", "dorso",
        "botar", "frase", "pouco", "signo", "sente", "massa", "coesa", "cruel", "raiva", "moçao",
        "prece", "ambas", "virus", "feito", "fauna", "morar", "peste", "minha", "papel", "casto",
        "covil", "credo", "preso", "torço", "ciclo", "impar", "faina", "lazer", "furor", "brisa",
        "docil", "flora", "chata", "maior", "vetor", "trama", "arido", "blase", "houve", "pegar",
        "nossa", "aceso", "beata", "adeus", "banzo", "manha", "setor", "vulto", "liame", "breve",
        "senda", "seita", "vasto", "salvo", "ardor", "livro", "peixe", "morro", "visse", "chuva",
        "pecha", "sorte", "atomo", "comer", "antro", "prado", "reger", "plano", "saiba", "ocaso",
        "segue", "rezar", "avaro", "carro", "pajem", "nunca", "alias", "saida", "otimo", "aureo",
        "junto", "mudar", "ancia", "acima", "chulo", "serao", "opçao", "fitar", "parar", "jazia",
        "fruir", "treta", "fugir", "naçao", "andar", "grupo", "bando", "prazo", "leite", "gerir",
        "lenda", "motim", "norma", "tosco", "alude", "rapaz", "brava", "parte", "epoca", "campo",
        "sinha", "tenso", "exame", "idolo", "aviao", "arcar", "psico", "tirar", "reino", "malta",
        "venal", "agora", "vilao", "praga", "soldo", "praia", "quota", "risco", "aonde", "indio",
        "corpo", "antes", "logro", "sumir", "preto", "virao", "traga", "voraz", "fixar", "pompa",
        "cheio", "quase", "texto", "exijo", "filho", "certa", "turba", "copia", "nodoa", "oasis",
        "apego", "prova", "alado", "solto", "caixa", "turva", "acesa", "estao", "messe", "conta",
        "grave", "ligar", "atrio", "verbo", "nivel", "doido", "verve", "parva", "apelo", "tocar",
        "aurea", "lindo", "trupe", "pardo", "festa", "livre", "fenda", "fraco", "dessa", "sabia",
        "opaco", "afora", "alçar", "oxala", "viria", "navio", "parca", "jirau", "retem", "ficha",
        "astro", "manha", "fatos", "faixa", "etico", "elite", "lidar", "mente", "fatal", "glosa",
        "supra", "tinha", "autor", "firme", "magia", "grata", "verba", "cioso", "bater", "reses",
        "pique", "calda", "cousa", "junco", "salve", "deixa", "prive", "irmao", "pagao", "douto",
        "macio", "atual", "molho", "abriu", "posto", "light", "supor", "torso", "sexta", "vezes",
        "turvo", "sarça", "longe", "asilo", "extra", "igneo", "judeu", "curso", "orfao", "caber",
        "drops", "locus", "porta", "ossos", "latir", "galho", "canoa", "lagoa", "arara", "cinco",
        "besta", "cinza", "lilas", "crase", "touca", "botao", "rouca", "radio", "desta", "ruina",
        "corsa", "palio", "palha", "video", "zelar", "combo", "vosso", "nosso", "vinha", "culpa",
        "bioma", "menos", "ereto", "finda", "paira", "bonus", "agudo", "feudo", "facto", "advir",
        "urgia", "cutis", "traço", "meigo", "surja", "tetra", "sitio", "super", "julia", "facho",
        "suave", "autos", "amena", "rumor", "tento", "pilar", "turma", "cocho", "clean", "museu",
        "chama", "açoes", "louça", "lasso", "geral", "mosto", "lapis", "local", "hobby", "acola",
        "optar", "podio", "boato", "medir", "rubro", "pacto", "crime", "refem", "folga", "brabo",
        "penta", "pareo", "letal", "ponha", "drama", "poema", "aluno", "mesma", "movel", "cacho",
        "feroz", "vigia", "aroma", "metie", "hoste", "chato", "avida", "cover", "golpe", "vetar",
        "pasmo", "monte", "rival", "teste", "fazia", "piada", "finjo", "coral", "ecoar", "axila",
        "forum", "limao", "daqui", "forem", "riste", "verde", "poeta", "carta", "monge", "miolo",
        "tente", "plebe", "clima", "artur", "passa", "lesse", "sucia", "cetro", "ebano", "tacha",
        "escol", "ateia", "calmo", "briga", "falha", "venha", "roupa", "macro", "busca", "conto",
        "sarau", "idoso", "plumo", "cargo", "viram", "aviso", "tribo", "plaga", "perco", "fruto",
        "tarde", "legua", "atimo", "farta", "chefe", "berro", "vento", "grama", "virar", "civil",
        "catre", "arado", "corso", "surto", "seixo", "ornar", "saldo", "assar", "traje", "unica",
        "bruta", "pedra", "manga", "beijo", "nuvem", "amiga", "fosso", "recem", "troca", "manga",
        "deste", "casar", "giria", "uteis", "trato", "magna", "porte", "vedar", "sosia", "depor",
        "arfar", "deram", "canso", "tiver", "itens", "amado", "tutor", "ambar", "silvo", "irado",
        "grota", "bazar", "cifra", "vazao", "gabar", "renda", "pinho", "perto", "bruto", "rural", "jejum", "laudo", "pasma", "midia", "pavor", "regio", "inter", "feita", "tchau", "segar", "nesse", "fossa", "orgao", "minar", "odiar", "troco", "vagar", "vadio", "molde", "clero", "pomar", "sotao", "lesto", "stand", "aviar", "amada", "negar", "mamae", "cenho", "canto", "rocha", "lesao", "cinto", "largo", "paiol", "visto", "bolsa", "horto", "close", "proto", "ruido", "ileso", "morfo", "densa", "xucro", "pugna", "inves", "marca", "jogar", "podar", "vista", "urdir", "chula", "ufano", "penso", "vasta", "mocho", "frota", "civel", "cheia", "bulir", "umido", "piche", "ubere", "linha", "esgar", "peita", "resto", "apear", "tenha", "santo", "misto", "fundo", "agape", "volta", "manto", "cerca", "narco", "logos", "nessa", "natal", "monta", "velha", "demao", "simio", "jazer", "fazes", "findo", "barao", "campa", "ferpa", "verao", "prego", "chaga", "ardis", "polis", "mover", "album", "letra", "cosmo", "etapa", "balao", "tropa", "calvo", "lindo", "poste", "pingo", "polir", "retro", "nesta", "seiva", "banto", "matar", "folia", "coroa", "venho", "trago", "alamo", "troco", "punha", "ceita", "audio", "final", "sabor", "barro", "redor", "louro", "rente", "calma", "sigla", "salva", "bolso", "firma", "arroz", "queda", "farol", "torna", "coevo", "folha", "enjoo", "lutar", "solta", "lousa", "tumba", "miope", "mimar", "burra", "baixa", "neste", "salmo", "fugiu", "ousar", "todas", "veloz", "corar", "zumbi", "nacar", "calor", "longo", "reler", "forro", "vasco", "obtem", "justa", "vazia", "fatuo", "penca", "quero", "ilhas", "cacto", "calvo", "gueto", "bedel", "feliz", "vario", "farto", "chave", "limao", "meiao", "logia", "mania", "lucro", "quite", "repor", "sugar", "sexto", "puido", "custo", "subir", "staff", "ultra", "urgir", "passe", "sadio", "refil", "viger", "valer", "versa", "hifen", "lento", "louca", "usual", "cardo", "redea", "nariz", "socio", "corte", "mouro", "aereo", "ceifa", "modal", "ferir", "garra", "voilà", "anzol", "abade", "nesga", "pluma", "sofia", "outra", "patio", "dados", "grife", "labil", "diabo", "raiar", "pavio", "sabia", "trair", "skate", "pagar", "roubo", "pazes", "dique", "xampu", "tacho", "podre", "disso", "surra", "tibio", "filme", "abono", "caibo", "cisco", "farei", "dobro", "jeova", "domar", "digna", "couve", "quais", "posta", "regia", "notar", "bruxa", "barra", "regem", "volto", "toque", "buril"].toUpperCase

// const randomElement = Math.floor(Math.random() * palavrasValidas.length)

const palavraDoDia = 'MORTO';

let fimDeJogo = false
let linha = 1;
let resultado = '';
let entrada = [];

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
    // console.log("validar se " + resultado + " é igual " + palavraDoDia);
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

function validarEntrada() {
    // if (!palavrasValidas.includes(entrada)) {
    //     let palavraInvalida = "<p> Palavra inválida</p>"
    //     palavraInvalida.innerHTML
    // }
    for (var i = 1; i <= 5; i++) {
        let elId = `l${linha}c${i}`;
        const el = document.getElementById(elId);
        if (palavraDoDia[i - 1] == el.textContent) {
            el.classList.add('fullcorrect')
            debugger
        } else if (palavraDoDia.includes(el.textContent)) {
            el.classList.add('correct')
        } else {
            el.classList.add('incorrect')
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
