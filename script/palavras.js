let palavrasValidas =
    ["SAGAZ", "AMORA", "PINTO", "AMAGO", "NEGRO", "EXITO", "MEXER", "TERMO", "NOBRE", "SENSO",
        "ARDER", "BOLHA", "ROLHA", "CIRCO", "FALIR", "PEDIR", "AFETO", "PLENA", "ETICA", "MUTUA",
        "TENUE", "SUTIL", "VIGOR", "AQUEM", "FAZER", "POREM", "AUDAZ", "ASSIM", "SANAR", "SECAO",
        "INATO", "CERNE", "FOSSE", "IDEIA", "PODER", "MORAL", "DESDE", "TORPE", "MUITO", "JUSTO",
        "HONRA", "FUTIL", "SOBRE", "ANEXO", "QUICA", "RAZAO", "ETNIA", "ICONE", "SONHO", "TANGE",
        "EGIDE", "LAPSO", "AMIGO", "MUTUO", "EXPOR", "HAVER", "HABIL", "TEMPO", "SEARA", "DENGO",
        "ENTAO", "PESAR", "AVIDO", "POSSE", "GENRO", "BOCAL", "COSER", "ARDIL", "CAUSA", "CORJA",
        "DIZER", "PARIA", "PROLE", "DETEM", "TENAZ", "DEVER", "GRACA", "SABER", "OBICE", "CRIVO",
        "DIGNO", "APICE", "ANIMO", "ANSIA", "CEDER", "BRADO", "COMUM", "SENDO", "TEMOR", "GLEBA",
        "CULTO", "ASSAZ", "ATROZ", "MUNDO", "PAUTA", "CENSO", "FUGAZ", "AINDA", "COZER", "VALHA",
        "DENSO", "NENEM", "VICIO", "ESTAR", "FORTE", "VULGO", "REVES", "PUDOR", "REGRA", "DOGMA",
        "LOUCO", "CRIAR", "BANAL", "DUELO", "IMPOR", "SAUDE", "JEITO", "ATRAS", "ORDEM", "TENRO",
        "PIFIO", "DESSE", "APRAZ", "PEDIR", "MERCE", "REACA", "CLAVA", "USURA", "PROSA", "FELIZ",
        "JUIZO", "SERVO", "VIRIL", "SABIO", "COISA", "MANSO", "ONTEM", "PRESA", "FALAR", "CUNHO",
        "FORMA", "DEVIR", "MESMO", "MEIGA", "AFAGO", "FLUIR", "EBRIO", "PLATO", "VENDO", "LIMBO",
        "SERIO", "GUISA", "MAGOA", "POSSO", "VISAR", "HEROI", "TEMER", "ACASO", "PLENO", "PUDER",
        "VALOR", "CISMA", "BRUMA", "LUGAR", "IMPIO", "EXODO", "AFINS", "OBVIO", "CERTO", "GERAR",
        "OBTER", "CRISE", "MATIZ", "PRAXE", "SENIL", "HAVIA", "TODOS", "VENIA", "FLUXO", "ENFIM",
        "ABRIR", "TEDIO", "RITMO", "ALIBI", "FALSO", "UNIAO", "TOMAR", "GARBO", "VISAO", "PARVO",
        "FACIL", "VALIA", "RETER", "PULHA", "VITAL", "FAVOR", "BRAVO", "GRATO", "PRUMO", "VIVAZ",
        "LEGAL", "PARCO", "GENIO", "LAICO", "BURRO", "OLHAR", "POSSA", "LEVAR", "AMENO", "RELES",
        "TECER", "CASTA", "OBITO", "PRIME", "SELAR", "MORTE", "RANCO", "ANELO", "FATOR", "NOCAO",
        "SABIA", "ROGAR", "NOITE", "FACAM", "CITAR", "FARSA", "CABAL", "ACHAR", "FALTA", "ADIAR",
        "NICHO", "COESO", "EPICO", "CISAO", "OUVIR", "FARDO", "BREGA", "VIVER", "ATIVO", "FORCA",
        "SINTO", "GENTE", "EXATO", "IMUNE", "PASSO", "SONSO", "AMPLO", "DUBIO", "LINDA", "TENDO",
        "CESTA", "UNICO", "SULCO", "LAVRA", "LEIGO", "SESTA", "CALMA", "REVEL", "DETER", "LABOR",
        "VEMOS", "REVER", "GESTO", "HUMOR", "ARDUO", "ATUAR", "POBRE", "FEIXE", "CIUME", "CARMA",
        "AJUDA", "TENDE", "OUTRO", "OTICA", "IGUAL", "VELHO", "PONTO", "CLARO", "TOADA", "HIATO",
        "IDEAL", "SONSA", "DEBIL", "VACUO", "TERNO", "AMBOS", "REMIR", "FUSAO", "PROBO", "SENAO",
        "FONTE", "MARCO", "JOVEM", "LEITO", "ADVEM", "CAPAZ", "INATA", "TERRA", "DOIDO", "HORDA",
        "XEQUE", "RELVA", "TENRA", "FICAR", "ALGUM", "VELAR", "CACAR", "SERIE", "FARAO", "LIDER",
        "APOIO", "COCAR", "VAZIO", "ANUIR", "TANTO", "VIMOS", "RIGOR", "VERSO", "ENTRE", "DORSO",
        "BOTAR", "FRASE", "POUCO", "SIGNO", "SENTE", "MASSA", "COESA", "CRUEL", "RAIVA", "MOCAO",
        "PRECE", "AMBAS", "VIRUS", "FEITO", "FAUNA", "MORAR", "PESTE", "MINHA", "PAPEL", "CASTO",
        "COVIL", "CREDO", "PRESO", "TORCO", "CICLO", "IMPAR", "FAINA", "LAZER", "FUROR", "BRISA",
        "DOCIL", "FLORA", "CHATA", "MAIOR", "VETOR", "TRAMA", "ARIDO", "BLASE", "HOUVE", "PEGAR",
        "NOSSA", "ACESO", "BEATA", "ADEUS", "BANZO", "MANHA", "SETOR", "VULTO", "LIAME", "BREVE",
        "SENDA", "SEITA", "VASTO", "SALVO", "ARDOR", "LIVRO", "PEIXE", "MORRO", "VISSE", "CHUVA",
        "PECHA", "SORTE", "ATOMO", "COMER", "ANTRO", "PRADO", "REGER", "PLANO", "SAIBA", "OCASO",
        "SEGUE", "REZAR", "AVARO", "CARRO", "PAJEM", "NUNCA", "ALIAS", "SAIDA", "OTIMO", "AUREO",
        "JUNTO", "MUDAR", "ANCIA", "ACIMA", "CHULO", "SERAO", "OPCAO", "FITAR", "PARAR", "JAZIA",
        "FRUIR", "TRETA", "FUGIR", "NACAO", "ANDAR", "GRUPO", "BANDO", "PRAZO", "LEITE", "GERIR",
        "LENDA", "MOTIM", "NORMA", "TOSCO", "ALUDE", "RAPAZ", "BRAVA", "PARTE", "EPOCA", "CAMPO",
        "SINHA", "TENSO", "EXAME", "IDOLO", "AVIAO", "ARCAR", "PSICO", "TIRAR", "REINO", "MALTA",
        "VENAL", "AGORA", "VILAO", "PRAGA", "SOLDO", "PRAIA", "QUOTA", "RISCO", "AONDE", "INDIO",
        "CORPO", "ANTES", "LOGRO", "SUMIR", "PRETO", "VIRAO", "TRAGA", "VORAZ", "FIXAR", "POMPA",
        "CHEIO", "QUASE", "TEXTO", "EXIJO", "FILHO", "CERTA", "TURBA", "COPIA", "NODOA", "OASIS",
        "APEGO", "PROVA", "ALADO", "SOLTO", "CAIXA", "TURVA", "ACESA", "ESTAO", "MESSE", "CONTA",
        "GRAVE", "LIGAR", "ATRIO", "VERBO", "NIVEL", "DOIDO", "VERVE", "PARVA", "APELO", "TOCAR",
        "AUREA", "LINDO", "TRUPE", "PARDO", "FESTA", "LIVRE", "FENDA", "FRACO", "DESSA", "SABIA",
        "OPACO", "AFORA", "ALCAR", "OXALA", "VIRIA", "NAVIO", "PARCA", "JIRAU", "RETEM", "FICHA",
        "ASTRO", "MANHA", "FATOS", "FAIXA", "ETICO", "ELITE", "LIDAR", "MENTE", "FATAL", "GLOSA",
        "SUPRA", "TINHA", "AUTOR", "FIRME", "MAGIA", "GRATA", "VERBA", "CIOSO", "BATER", "RESES",
        "PIQUE", "CALDA", "COUSA", "JUNCO", "SALVE", "DEIXA", "PRIVE", "IRMAO", "PAGAO", "DOUTO",
        "MACIO", "ATUAL", "MOLHO", "ABRIU", "POSTO", "LIGHT", "SUPOR", "TORSO", "SEXTA", "VEZES",
        "TURVO", "SARCA", "LONGE", "ASILO", "EXTRA", "IGNEO", "JUDEU", "CURSO", "ORFAO", "CABER",
        "DROPS", "LOCUS", "PORTA", "OSSOS", "LATIR", "GALHO", "CANOA", "LAGOA", "ARARA", "CINCO",
        "BESTA", "CINZA", "LILAS", "CRASE", "TOUCA", "BOTAO", "ROUCA", "RADIO", "DESTA", "RUINA",
        "CORSA", "PALIO", "PALHA", "VIDEO", "ZELAR", "COMBO", "VOSSO", "NOSSO", "VINHA", "CULPA",
        "BIOMA", "MENOS", "ERETO", "FINDA", "PAIRA", "BONUS", "AGUDO", "FEUDO", "FACTO", "ADVIR",
        "URGIA", "CUTIS", "TRACO", "MEIGO", "SURJA", "TETRA", "SITIO", "SUPER", "JULIA", "FACHO",
        "SUAVE", "AUTOS", "AMENA", "RUMOR", "TENTO", "PILAR", "TURMA", "COCHO", "CLEAN", "MUSEU",
        "CHAMA", "ACOES", "LOUCA", "LASSO", "GERAL", "MOSTO", "LAPIS", "LOCAL", "HOBBY", "ACOLA",
        "OPTAR", "PODIO", "BOATO", "MEDIR", "RUBRO", "PACTO", "CRIME", "REFEM", "FOLGA", "BRABO",
        "PENTA", "PAREO", "LETAL", "PONHA", "DRAMA", "POEMA", "ALUNO", "MESMA", "MOVEL", "CACHO",
        "FEROZ", "VIGIA", "AROMA", "METIE", "HOSTE", "CHATO", "AVIDA", "COVER", "GOLPE", "VETAR",
        "PASMO", "MONTE", "RIVAL", "TESTE", "FAZIA", "PIADA", "FINJO", "CORAL", "ECOAR", "AXILA",
        "FORUM", "LIMAO", "DAQUI", "FOREM", "RISTE", "VERDE", "POETA", "CARTA", "MONGE", "MIOLO",
        "TENTE", "PLEBE", "CLIMA", "ARTUR", "PASSA", "LESSE", "SUCIA", "CETRO", "EBANO", "TACHA",
        "ESCOL", "ATEIA", "CALMO", "BRIGA", "FALHA", "VENHA", "ROUPA", "MACRO", "BUSCA", "CONTO",
        "SARAU", "IDOSO", "PLUMO", "CARGO", "VIRAM", "AVISO", "TRIBO", "PLAGA", "PERCO", "FRUTO",
        "TARDE", "LEGUA", "ATIMO", "FARTA", "CHEFE", "BERRO", "VENTO", "GRAMA", "VIRAR", "CIVIL",
        "CATRE", "ARADO", "CORSO", "SURTO", "SEIXO", "ORNAR", "SALDO", "ASSAR", "TRAJE", "UNICA",
        "BRUTA", "PEDRA", "MANCA", "BEIJO", "NUVEM", "AMIGA", "FOSSO", "RECEM", "TROCA", "MANGA",
        "DESTE", "CASAR", "GIRIA", "UTEIS", "TRATO", "MAGNA", "PORTE", "VEDAR", "SOSIA", "DEPOR",
        "ARFAR", "DERAM", "CANSO", "TIVER", "ITENS", "AMADO", "TUTOR", "AMBAR", "SILVO", "IRADO",
        "GROTA", "BAZAR", "CIFRA", "VAZAO", "GABAR", "RENDA", "PINHO", "PERTO", "BRUTO", "RURAL",
        "JEJUM", "LAUDO", "PASMA", "MIDIA", "PAVOR", "REGIO", "INTER", "FEITA", "TCHAU", "SEGAR",
        "NESSE", "FOSSA", "ORGAO", "MINAR", "ODIAR", "TROCO", "VAGAR", "VADIO", "MOLDE", "CLERO",
        "POMAR", "SOTAO", "LESTO", "STAND", "AVIAR", "AMADA", "NEGAR", "MAMAE", "CENHO", "CANTO",
        "ROCHA", "LESAO", "CINTO", "LARGO", "PAIOL", "VISTO", "BOLSA", "HORTO", "CLOSE", "PROTO",
        "RUIDO", "ILESO", "MORFO", "DENSA", "XUCRO", "PUGNA", "INVES", "MARCA", "JOGAR", "PODAR",
        "VISTA", "URDIR", "CHULA", "UFANO", "PENSO", "VASTA", "MOCHO", "FROTA", "CIVEL", "CHEIA",
        "BULIR", "UMIDO", "PICHE", "UBERE", "LINHA", "ESGAR", "PEITA", "RESTO", "APEAR", "TENHA",
        "SANTO", "MISTO", "FUNDO", "AGAPE", "VOLTA", "MANTO", "CERCA", "NARCO", "LOGOS", "NESSA",
        "NATAL", "MONTA", "VELHA", "DEMAO", "SIMIO", "JAZER", "FAZES", "FINDO", "BARAO", "CAMPA",
        "FERPA", "VERAO", "PREGO", "CHAGA", "ARDIS", "POLIS", "MOVER", "ALBUM", "LETRA", "COSMO",
        "ETAPA", "BALAO", "TROPA", "CALVO", "LINDO", "POSTE", "PINGO", "POLIR", "RETRO", "NESTA",
        "SEIVA", "BANTO", "MATAR", "FOLIA", "COROA", "VENHO", "TRAGO", "ALAMO", "TROCO", "PUNHA",
        "CEITA", "AUDIO", "FINAL", "SABOR", "BARRO", "REDOR", "LOURO", "RENTE", "CALMA", "SIGLA",
        "SALVA", "BOLSO", "FIRMA", "ARROZ", "QUEDA", "FAROL", "TORNA", "COEVO", "FOLHA", "ENJOO",
        "LUTAR", "SOLTA", "LOUSA", "TUMBA", "MIOPE", "MIMAR", "BURRA", "BAIXA", "NESTE", "SALMO",
        "FUGIU", "OUSAR", "TODAS", "VELOZ", "CORAR", "ZUMBI", "NACAR", "CALOR", "LONGO", "RELER",
        "FORRO", "VASCO", "OBTEM", "JUSTA", "VAZIA", "FATUO", "PENCA", "QUERO", "ILHAS", "CACTO",
        "CALVO", "GUETO", "BEDEL", "FELIZ", "VARIO", "FARTO", "CHAVE", "LIMAO", "MEIAO", "LOGIA",
        "MANIA", "LUCRO", "QUITE", "REPOR", "SUGAR", "SEXTO", "PUIDO", "CUSTO", "SUBIR", "STAFF",
        "ULTRA", "URGIR", "PASSE", "SADIO", "REFIL", "VIGER", "VALER", "VERSA", "HIFEN", "LENTO",
        "LOUCA", "USUAL", "CARDO", "REDEA", "NARIZ", "SOCIO", "CORTE", "MOURO", "AEREO", "CEIFA",
        "MODAL", "FERIR", "GARRA", "VOILà", "ANZOL", "ABADE", "NESGA", "PLUMA", "SOFIA", "OUTRA",
        "PATIO", "DADOS", "GRIFE", "LABIL", "DIABO", "RAIAR", "PAVIO", "SABIA", "TRAIR", "SKATE",
        "PAGAR", "ROUBO", "PAZES", "DIQUE", "XAMPU", "TACHO", "PODRE", "DISSO", "SURRA", "TIBIO",
        "FILME", "ABONO", "CAIBO", "CISCO", "FAREI", "DOBRO", "JEOVA", "DOMAR", "DIGNA", "COUVE",
        "QUAIS", "POSTA", "REGIA", "NOTAR", "BRUXA", "BARRA", "REGEM", "VOLTO", "TOQUE", "BURIL",
        "BRUNO", "SERIA", "ESTOU", "SAIAS", "MORTO", "MORTA", "BRENO", "TINTO", "PISTA", "SERRA",
        "MOITA", "LOIRA", "LOIRO", "POUCA", "LENCO", "LENTE", "LOTAR", "CASAM", "FACAM", "FACAO",
        "FINGE", "ADORO", "CILIO", "DOLAR", "CURTO", "CURTA", "LIGAS", "CEGAS", "CEGOS", "CEGAR",
        "CAGAR", "GOTAS", "GATAS", "GATOS", "MANCO", "SINTA", "SORRI", "OLHOS", "OLHAM", "FEIOS",
        "FEIAS", "CELTA", "COUBE", "TRAVE", "TINTA", "LERDA", "LENTA", "LERDO", "COURO", "LUXAR",
        "LESAR", "TORTO", "TORTA", "TOTEM", "TRACO", "DUNAS", "JEGUE", "CARPA", "ARTES", "FACAS",
        "FACES", "CENTO", "SENTA", "SENTO", "SUCOS", "TACOS", "ZEBRA", "HARPA", "DOIDA", "LINCE",
        "TIGRE", "CACAU", "COCOS", "CHOVE", "BIRRA", "BANHO", "BALDE", "BRITA", "BANHA", "CAMAS",
        "CAFES", "GIRAR", "GRITO", "GRITA", "PIRAR", "POUPA", "POLPA", "POUPE", "TRAEM", "TIROU",
        "FOTOS", "FULGA", "SURGE", "UNHAS", "TROTE", "DENTE", "TRUCO", "DICAS", "SACAR", "SOLTE",
        "CESTO", "CORTA", "TRIGO", "BANCO", "BOLAS", "TAMPA", "BANCA", "BEIJA", "BREJO", "SAPOS",
        "LATAS", "LATIM", "LUPAS", "LORDE", "VENTA", "VAPOR", "LIXOS", "PONTE", "PRATA", "PRATO",
        "PATOS", "PANDA", "PUDIM", "PENTE", "JOGOS", "JARRA", "JARRO", "TETOS", "CUBOS", "CALCA",
        "PERDA", "PALCO", "TALCO", "TABUA", "CORRE", "CORRA", "MENTA", "BALAS", "LOJAS", "BANDA",
        "COLAR", "CALOS", "ZIPER", "VAGEM", "PASTO", "PARTO", "MAMAO", "BOMBA", "PATAS", "LIVRA",
        "LICOR", "MEDIA", "RONDA", "TECLA", "TRUFA", "PRIMA", "PRIMO", "NOVAS", "FILHA", "FADAS",
        "FUSCA", "PODIA", "NAVES", "ROTAS", "TREVO", "MOSCA", "PONTA", "SOUBE", "DEDOS", "DORME",
        "LIMPO", "RESTA", "DURAR", "VIDAS", "CAPAS", "TENDA", "BARCO", "VEADO", "COBRA", "PORCO",
        "TIMAO", "AGUIA", "ACARO", "CERVO", "CHITA", "FORCA", "LUVAS", "LULAS", "ALGAS", "TRENA",
        "NORTE", "LESTE", "LABIA", "NOCAO", "VESTE", "CHALE", "CHULE", "PASTA", "GREVE", "FURTO",
        "ROUBA", "LOTES", "MINAS", "MATOS", "MOTOS", "CERCO", "LAJES", "JACAS", "CEDRO", "GARFO",
        "GOLFE", "CHINA", "TRONO", "TORCE", "TORCA", "VINTE", "VESGO", "PURES", "PRUMA", "CORDA",
        "COBRE", "CUBRA", "NASCE", "LONGA", "GRAUS", "GASTO", "GASTA", "GANSO", "AGUDA", "OLHEM",
        "FILAS", "FOGEM", "POCOS", "LARGA", "LIRIO", "LITIO", "MUSGO", "VESPA", "CINTA", "SOLOS",
        "SANTA", "POUSO", "POUSA", "OBRAS", "PREGA", "LIMAS", "RATOS", "RATAS", "PISOS", "MACAS",
        "VOLTE", "TENTA", "CHIPA", "XEROX", "CASCA", "CASCO", "CASPA", "SOPAS", "MINTA", "BRIGO",
        "ELEVA", "MITOS", "MICOS", "SOMAS", "CASOS", "CASAS", "ROMPE", "FIGOS", "PERAS", "DITAR",
        "MESES", "MESAS", "TIARA", "MORSA", "FERRO", "TESTA", "TENIS", "CIPOS", "METAS", "SETAS",
        "BOCAS", "BINGO", "PINGA", "PENAS", "PENAL", "LAGOS", "GOLAS", "FINOS", "CALAR", "FORME",
        "MORDE", "MUDOS", "MUDAS", "MOFAR", "FUNGO", "LHAMA", "FOCAR", "FOCAS", "FOFOS", "FOFAS",
        "CHORA", "BAMBA", "BONDE", "TOTAL", "SIRIS", "TREVA", "LESMA", "LACOS", "BOTES", "DIZEM",
        "PERDE", "LAMBE", "GRADE", "TIRAM", "FOICE", "VIAJA", "TELAS", "PISAR", "CLONE", "CLONA",
        "DANCA", "PRECO", "POLAR", "CRAVO", "FUROS", "RASGO", "RASGA", "FALAM", "FITAS", "COPOS",
        "NADAR", "CHUTE", "CURVA", "CENAS", "FECHA", "FLAMA", "SALTO", "DESCE", "SONDA", "NEVAR",
        "BEBER", "RIMAR", "RUGIR", "LITRO", "METRO", "MOLHA", "SOMAR", "HELIO", "PILHA", "RISOS",
        "REMOS", "REMAR", "ACRES", "LISTA", "LISTE", "VINCO", "POTES", "COPAS", "PIPAS", "LANCE",
        "LANCA", "COFRE", "TORNO", "RODAR", "RODAS", "PNEUS", "CABOS", "SABAO", "SALAS", "MISSA",
        "URSOS", "HIPER", "MELAO", "LUZES", "PINHA", "FUMAR", "DROGA", "BRASA", "CORES", "JULGA",
        "COCAR", "MANTA", "FRIOS", "DEUSA", "GREGO", "GREGA", "SAQUE", "SURFE", "PLANA", "POSES",
        "CASAL", "TIMES", "MARTE", "DORES", "SECAR", "VAGAS", "CONTE", "JURAR", "JUROU", "VIDRO",
        "CORNO", "CORNA", "PULAR", "EXATA", "DEVIA", "MUDOU", "SURTE", "PROVE", "HOMEM", "EDITA",
        "TELAO", "HORAS", "PIZZA", "PAUSA", "PAUSE", "MILHO", "MILHA", "SINOS", "BOTAS", "VARRE",
        "MACOM", "CUECA", "ARMAS", "CULTA", "LUPUS", "VALHO", "REGUA", "VALEU", "PECAS", "PECAR",
        "CALDO", "CAUDA", "CREME", "VIOLA", "LACRE", "REDUZ", "SEDUZ", "TRATA", "ALHOS", "ADOCA",
        "SAMBA", "DUROU", "SUJOS", "SUJAS", "TANGO", "CETIM", "OPCAO", "MACIA", "PISOU", "DOCES",
        "DOCAS", "MOEDA", "MOELA", "NACAO", "ROSTO", "GRACA", "FARRA", "CURAR", "CUROU", "CURTE",
        "CHORO", "MOROU", "SECAO", "FRUTA", "PORCA", "GIROU", "PEGOU", "TREZE", "MOLAS", "MOLES",
        "TRUTA", "GRUTA", "FALHO", "FEMUR", "COLAS", "FILES", "TRAVA", "FOGAO", "GELAR", "RELAR",
        "ASTRO", "ENTRA", "PLACA", "GEMAS", "GEMEA", "GEMEO", "TUNEL", "LOTUS", "MEDOS", "SIRIO",
        "SIRIA", "HOTEL", "NINHO", "QUINA", "BAMBU", "SUECO", "SUECA", "SALAO", "GRAVA", "TONEL",
        "VACAS", "SACOS", "SACAS", "PESOS", "MEMES", "LARVA", "MALHA", "NELES", "NELAS", "MEIAS",
        "FEMEA", "MACHO", "VIVEM", "TALES", "BABAR", "BABAS", "LOUVA", "LOUVO", "MUSAS", "MISTA",
        "TRAVO", "FIXOS", "FIXAS", "MAFIA", "GRANA", "GRILO", "GRIFO", "GRIFA", "FAZEM", "FURAR",
        "ACABO", "ACABA", "ALCAS", "JESUS", "ABRIL", "DUETO", "AULAS", "LEOES", "MORRE", "DITOU",
        "CLARA", "FOGOS", "CRINA", "NEGRA", "NEGOU", "SELOS", "SOLAS", "SABEM", "FALOU", "DONAS",
        "DONOS", "BICHO", "CACHE", "RINHA", "GALOS", "PUXAR", "MODOS", "AJUDO", "CLIPE", "MENOR",
        "OTIMA", "ENTRO", "FREIO", "FREIA", "BUSER", "FINAS", "SEPTO", "TORRE", "ALUGA", "VINDA", "CHEGA", "SOCOS", "SOCAR", "MALHO", "LEBRE", "LEBRA", "BRUXO", "FIEIS", "CAPIM", "FILMA"]
