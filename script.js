const questions = [
    {
        
        question: "Qual é o nome do robo do Rumble?", // 1 OKK
        image: "Fotos/branco.png",
        options: ["Tristy", "Trysti", "Tristie", "trystee"],
        correctAnswer: 0,
        showAnswerBox: false,
    },
    {
       question: "Como chama o bambole da Qyana", // 2
       image: "Fotos/branco.png",
       options: ["Chakram","Omnis","Kosumus","ohmtatl" ],
       correctAnswer: 3,
       showAnswerBox: false,
    }
    ,
    {
        question: "Quantos Darkins existem no universo de Runeterra", // 3
        image: "Fotos/branco.png",
        // background-image: url("Fotos/background.png");
        options:['3','4',"5",'6'],
        correctAnswer:2,//5
        showAnswerBox: false,
    },
    {
        question: "Quantas regiões existem em runeterra", // 4
        options:['10','11',"12",'13'],
        correctAnswer:3,
        showAnswerBox: false,
        image: "Fotos/branco.png",
    },
    {
        question: "Como chama a ave da quinn?", // 5
        options:['Vaalor','Valor',"Valorr",'Valoor'],
        correctAnswer:1 ,//valor
        showAnswerBox: false,
        image: "Fotos/branco.png",
    },
    {
        question: "Como chama o porco da Sejuani", // 6
        options:['Wilbur','Bacon',"Bristle",'Truffle'],
        correctAnswer:2 ,//bristle
        showAnswerBox: false,
        image: "Fotos/branco.png",
    },
    {
        question: "Personagem com maior AD base",  // 7
        image:"Fotos/branco.png",
        options:['rengar','lee sin','Bel Veth','Renekton'],
        correctAnswer:1, //
    },
    {
        question: "Personagem com menor AD base",  // 8 NÃO SEI SE VALE A PENA, COLOCAR OS NOMES
        image:"Fotos/branco.png",
        options:['Lissandra','Lulu','Yuumi','Oriana'],
        correctAnswer:3, //fiddlestick]
    },
    {
        question: "Qual é o champion", // 10
        image:"TK.png",
        options:['MCSAPAO','Tahm´Kench',"Tahn Kench",'Tahm Kench'],
        correctAnswer:3, //fiddlestick
        showAnswerBox: false,
    },
    {
        question: "Quantos Espiritos do Rio tem no TFT", // 11
        image:"Fotos/aviao.png", //R:15
        options:['8',"9",'15','16'],
        correctAnswer:2, 
        showAnswerBox: false,
    },
    {
        question: "Qual é o nome da sentinela", // 12
        image:"Fotos/tatooblindado.png",
        options:['Sentinela SIM','Sentinela OK',"Sentinela tatu blindado",'Sentinela LEGAL','Sentinela Hnn'],
        correctAnswer:2, 
        showAnswerBox: false,
    },
    {
        question: "Quantos anos o lol tem?", // 13
        image: "Fotos/branco.png",
        options:['14','15',"16",'17'],
        correctAnswer:1, //15
        showAnswerBox: false,
    },
    {
        question: "Que ano a elise lançou", // 14
        image: "Fotos/branco.png",
        options:['2010','2012',"2013",'2015'],
        correctAnswer:1, //2012
        showAnswerBox: false,
    },
    {
        question: "Qual é o personagem pela falo titulo: “A dançarina das Lâminas”",// 21
        image:"Fotos/branco.png",
        options:['Karatina','Irelia',"Fiora",'Akali'],
        correctAnswer:1, //irelia
        showAnswerBox: true,
    },
    {
        question: "Qual é o personagem pela fala: “O(A) caçador(A) Bestial”", // 22
        image:"Fotos/branco.png",
        options:['Nidalee','Kha Zix',"Rengar",'Graves'],
        correctAnswer:0, //nidalee
        showAnswerBox: true,
    },
    {
    question: "Qual é o campeao com o maior hitbox no lv1?",// 23
    image:"Fotos/branco.png",
    options:['Cho Ghat','Malphit',"Tahn Kench",'Aurelion Sol'],
    correctAnswer:1, //varus
    // showAnswerBox: true,
},
{
    question: "Qual foi o segundo personagem mais nerfado na historia do LoL",// 24
    image:"Fotos/branco.png",
    options:['Irelia','Aphelios',"Akali",'Kassadin'],
    correctAnswer:3, //varus
    // showAnswerBox: true,
},
{
    question: "Qual foi o primeiro campeao desenhado pela riot?",// 25
    image:"Fotos/branco.png",
    options:['Garen',"Singed",'Ryze','Sion'],
    correctAnswer:1, //varus
    // showAnswerBox: true,
},
{
    question: "No lançamento do LoL tinha quantos personagens", // 26
    image:"Fotos/branco.png",
    options:['14','15',"16",'17'],
    correctAnswer:3, //varus
    // showAnswerBox: true,
},
{
    question: "Quantas formas a lux elementalista tem",// 27
    image:"Fotos/branco.png",
    options:['6','8',"9",'10'],
    correctAnswer:3, //varus
    // showAnswerBox: true,
},
{
    question: "Quando o lol foi lançado tinha um nome mais longo qual era?",// 28
    image:"Fotos/branco.png",
    options:['League of legends: war of legends ','League of legends: mythic showdown',"league of legends: Clash of fates",'League of Legends:Heoes'],
    correctAnswer:2, //varus
    // showAnswerBox: true,
},
{
    question: "nade contra a mare a frase é de quem:", // 29
    image:"Fotos/branco.png", //nami
    options:['Fizz','Nami',"Nautilos",'Pyke'],
    correctAnswer:1, 
    // showAnswerBox: true,
},
{ // =========================================================== maldibula
    question: "", // 31
    image:"Fotos/aranha.png",
    options:['Nyxalon','Maldibula',"Vexara",'Ombrosia'],
    correctAnswer:3, //varus
    // showAnswerBox: true,
},
{ // =========================================================== maldibula
    question: "Quais eram as cores da bota S3", // 32
    image:"Fotos/ar.png",
    options:['AMARELO,VERDE,BRANCO,VERMELHO','ROXO,VERMELHO,VERDE,AMARELO,BRANCO,','VERMELHO,BRANCO,ROXO,AZUL,VERDE,','VERDE,AZUL,VERMELHA,LARANJA,BRANCO'],
    correctAnswer:3, //varus
    // showAnswerBox: true,
},
{ // =========================================================== maldibula
    question: "Quais eram as caracteristicas da bota respectivamente, da pergunta anterior?", // 32
    image:"Fotos/ar.png",
    options:['Alacrity/Distortion/Furor/Captain/Homeguard','Alacrity/Distortion/Furor/Captain/Homeguard','Furor,Distortion/Captain/Homeguard/Alcrity','Captain/Furor/Distortion/Alcacity/Homeguard'],
    correctAnswer:0, //varus
    // showAnswerBox: true,
},
{ // =========================================================== maldibula
    question: "Quanto custa Urf Wick", // 33
    image:"Fotos/urfwick.png",
    options:['','15.000EA',"99.999EA",'150.000EA,900.00EA'],
    correctAnswer:2, //varus
    // showAnswerBox: true,
},
{ // =========================================================== maldibula
    question: "Summoner Spell name", // 35
    image:"Fotos/spell.png",
    options:['Stifle','Garrison',"Backtrack",'Surge'],
    correctAnswer:1, //varus
    // showAnswerBox: true,
},
{ // =========================================================== 20
    question: "Quantas paginas de runas podia ter no lol", // 36
    image:"Fotos/branco.png",
    options:['15',"18",'20','25'],
    correctAnswer:2, //varus
    // showAnswerBox: true,
},
{ // =========================================================== 63
    question: "Quantas Runas Reforjadas tem (Precisao,dominação...)", // 37
    image:"Fotos/branco.png",
    options:['58','59',"60",'63'],
    correctAnswer:3, //varus
    // showAnswerBox: true,
},
{ // =========================================================== R:30
    question: "Quantas Runas da antiga Season, que tinha que comprar", // 38
    image:"Fotos/branco.png",
    options:['29','30',"31",'33'],
    correctAnswer:1, //varus
    // showAnswerBox: true,
},
{ // =========================================================== R:18
    question: "Quantos eventos passados ja teve", // 39
    image:"Fotos/branco.png",
    options:['15','18',"20",'23'],
    correctAnswer:1, //varus
    // showAnswerBox: true,
},
{ // =========================================================== R:18
    question: "Como se chama", // 40
    image:"Fotos/feel the burn.png",
    options:['burn','ignit',"feel the burn",'embrace the burn'],
    correctAnswer:0, //varus
    // showAnswerBox: true,
},
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}
function toggleAnswerBox(show) {
    const answerInput = document.getElementById('answer-input');
    answerInput.style.display = show ? 'block' : 'none';
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionElem = document.getElementById('question');
        const optionsElem = document.getElementById('options');
        const questionNumberElem = document.getElementById('question-number');
        const questionImageElem = document.getElementById('question-image');
        const answerInput = document.getElementById('answer-input');


        questionElem.textContent = questions[currentQuestionIndex].question;
        toggleAnswerBox(questions[currentQuestionIndex].showAnswerBox); // Exibe ou oculta a caixa de texto
        answerInput.value = '';

        optionsElem.innerHTML = '';
        for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
            optionsElem.innerHTML += `<button onclick="checkAnswer(${i})">${questions[currentQuestionIndex].options[i]}</button>`;
        }

        questionNumberElem.textContent = `Questão ${currentQuestionIndex + 1} `;
        questionImageElem.src = questions[currentQuestionIndex].image;
    } else {
        alert(`Fim do jogo!.`);
    }
}

function checkAnswer(optionIndex) {
    if (optionIndex === questions[currentQuestionIndex].correctAnswer) {
        score++;
        // alert("Resposta correta!");
        currentQuestionIndex++;
        showQuestion();
    } else {
        alert("FAIL");
        restartGame();
    }
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

startGame(); // Iniciar o jogo automaticamente ao carregar a página
