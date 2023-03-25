let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
minValue < -999 ?
minValue = -999:
minValue = minValue ;
/*minValue = NaN ||1*/

let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
maxValue > 999 ?
maxValue = 999:
maxValue = maxValue ;
/*maxValue = NaN || 100*/

alert(`Вы загадали целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Вы загадали число от ${minValue} до ${maxValue}, а я снова попорбую угадать`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;   
    answerField.innerText = `Вы загадали число ${answerNumber} ?`;
    gameRun = true; 
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase =  (phraseRandom === 1) ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            (phraseRandom === 0) ?
            `Я сдаюсь..\n\u{1F92F}`:
            `Fuck`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const RanDom = Math.round( Math.random() * 3)
            const answerPhraseF =  (RanDom === 0) ?
            `Вы загодали число`:
            (RanDom === 1)?
            `Это может быть`:
            (RanDom === 2)?
            `ПДа это легко! Ты загадал`:
            (RanDom === 3)?
            `Ну теперь точно`:
            `This is`;
            answerField.innerText = `${answerPhraseF} ${answerNumber }?`;
            

        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
        if (gameRun){
             if (minValue === maxValue){
                    const phraseRandom = Math.round( Math.random());
                    const answerPhrase = (phraseRandom === 1) ?
                    `Вы загадали неправильное число!\n\u{1F914}` :
                    (phraseRandom === 0) ?
                    `Я сдаюсь..\n\u{1F92F}`:
                    `Fuck`;
        
                    answerField.innerText = answerPhrase;
                    gameRun = false;
            } else {
                maxValue = answerNumber ;
                answerNumber  = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                const RanDom = Math.round( Math.random() * 3)
                const answerPhraseF =  (RanDom === 0) ?
                `Вы загодали число`:
                (RanDom === 1)?
                `Это может быть`:
                (RanDom === 2)?
                `Да это легко! Ты загадал`:
                (RanDom === 3)?
                `Ну теперь точно`:
                `This is`;
                answerField.innerText = `${answerPhraseF} ${answerNumber }?`;
            }
        }
    })

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    } else{
        gameRun = false
        answerField.innerText =`Ну всё, хватит тут тыкать!!!`
    }
})

