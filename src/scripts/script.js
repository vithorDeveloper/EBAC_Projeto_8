// const dataDoAniversario = newDate("Nov 11, 2024 23:00:00")
// const timeStampDoAniversario = dataDoAniversario.getTime()

// const contaAsHoras = setInterval(() =>{
//   const agora = new Date()
//   const timeStampAtual = agora.getTime()

//   const tempoAteOAniversario = timeStampDoAniversario - timeStampAtual

//   const diaEmMilissegundos = 1000 * 60 * 60 * 24
//   const horaEmMilissegundos = 1000 * 60 * 60 
//   const minutoEmMilissegundos = 1000 * 60

//   const diasAteOAniversario = Math.floor(tempoAteOAniversario / diaEmMilissegundos)
//   const horasAteOAniversario = Math.floor((tempoAteOAniversario % diaEmMilissegundos) / horaEmMilissegundos)
//   const minutosAteOAniversario = Math.floor((tempoAteOAniversario % horaEmMilissegundos) / minutoEmMilissegundos)
//   const segundosAteOAniversario = Math.floor((tempoAteOAniversario % minutoEmMilissegundos) / 1000)

//   document.querySelector(".hero__container__timer").innerHTML =`${diasAteOAniversario}d : ${horasAteOAniversario}h : ${minutosAteOAniversario}m : ${segundosAteOAniversario}s`
// })

const dataDoAniversario = new Date("Nov 11, 2024 23:00:00");
const timeStamp = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteOAniversario = timeStamp - timeStampAtual;

    const diaEmMilissegundos = 1000 * 60 * 60 * 24;
    const horaEmMilissegundos = 1000 * 60 * 60;
    const minutoEmMilissegundos = 1000 * 60;

    const diasAteOAniversario = Math.floor(tempoAteOAniversario / diaEmMilissegundos);
    const horasAteOAniversario = Math.floor((tempoAteOAniversario % diaEmMilissegundos) / horaEmMilissegundos);
    const minutosAteOAniversario = Math.floor((tempoAteOAniversario % horaEmMilissegundos) / minutoEmMilissegundos);
    const segundosAteOAniversario = Math.floor((tempoAteOAniversario % minutoEmMilissegundos) / 1000);

    document.querySelector(".hero__container__timer").innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;

    if (tempoAteOAniversario < 0) {
        clearInterval(contaAsHoras);
        document.querySelector(".hero__container__timer").innerHTML = 'Acabou!';
    }
}, 1000);