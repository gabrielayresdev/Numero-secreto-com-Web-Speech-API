const elementoChute = document.querySelector("#chute")

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition

var recognition = new SpeechRecognition()
recognition.lang = "pt-Br"
recognition.start()

recognition.addEventListener("result", onSpeak)

recognition.addEventListener("end", () => {
    recognition.start()
})

function onSpeak(event) {
    const chute = event.results[0][0].transcript
    console.log(chute)
    exibeChute(chute)
    verificaSeONumeroPossuiUmValorValido(chute)
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}