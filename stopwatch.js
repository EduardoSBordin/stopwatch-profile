let getCron = document.querySelector('#cron');
// getCron.innerHTML = "00 : 00 : 00";
let btnStart = document.querySelector('#btnStart');
let btnPause = document.querySelector('#btnPause');
let btnStop = document.querySelector('#btnStop');
let btnStep = document.querySelector('#btnStep');

let getH2 = document.querySelector('h2');

let getSpeed = 100;
let cron;

let geth1 = 0;
let getM1 = 0;
let getS1 = 0;

let geth2 = 0;
let getM2 = 0;
let getS2 = 0;

btnStart.disabled = false;
btnPause.disabled = true;
btnStop.disabled = true;
btnStep.disabled = true;

btnPause.style.cursor = "not-allowed";
btnStop.style.cursor = "not-allowed";
btnStep.style.cursor = "not-allowed";

let counterPosition = 0;
let counterStepsBtn = 0;

btnStart.addEventListener('click', ()=>{

    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
    btnStep.disabled = false;

    btnStart.style.cursor = "not-allowed";
    btnPause.style.cursor = "pointer";
    btnStop.style.cursor = "pointer";
    btnStep.style.cursor = "pointer";

    getH2.innerHTML = '';
    getH2.value = '';
    counterPosition = 0;
    counterStepsBtn = 0;

    cron = setInterval(() => {

        getS2++;
        if(getS2 >= 10){

            getS2 = 0;
            getS1++;

            if(getS1 >= 6){

                getS1 = 0;
                getM2++;

                if(getM2 >= 10){

                    getM2 = 0;
                    getM1++;

                    if(getM1 >= 6){

                        geth2++;
                        getM1 = 0;

                        if(geth2 >= 10){

                            geth2 = 0;
                        }
                    }
                }
            }
        };

        getCron.innerHTML = `${geth1}${geth2} : ${getM1}${getM2} : ${getS1}${getS2}`;
       
    }, getSpeed);
}
)

btnPause.addEventListener('click', () => {

    clearInterval(cron);

    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = false;
    btnStep.disabled = true;

    btnStart.style.cursor = "pointer";
    btnPause.style.cursor = "not-allowed";
    btnStop.style.cursor = "pointer";
    btnStep.style.cursor = "not-allowed";
});

btnStop.addEventListener('click', () => {

    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
    btnStep.disabled = true;

    clearInterval(cron);
    getCron.innerHTML = "00 : 00 : 00";
    getCron.value = "00 : 00 : 00";

    geth1 = 0;
    getM1 = 0;
    getS1 = 0;

    geth2 = 0;
    getM2 = 0;
    getS2 = 0;

    getH2.innerHTML = '';
    getH2.value = '';
    counterPosition = 0;
    counterStepsBtn = 0;

    btnStart.style.cursor = "pointer";
    btnPause.style.cursor = "not-allowed";
    btnStop.style.cursor = "not-allowed";
    btnStep.style.cursor = "not-allowed";
})
btnStep.addEventListener('click', () => {

    counterPosition++;

    counterStepsBtn++;

    if(counterStepsBtn >= 10){

        btnStep.disabled = true;
    }

    console.log(getCron.innerHTML);

    getH2.innerHTML += `${counterPosition} - ${getCron.innerHTML} <br>`;
})


