const elementoChute = document.querySelector("#chute")

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition

var recognition = new SpeechRecognition()
recognition.lang = "pt-Br"
recognition.start()

recognition.addEventListener("result", onSpeak)

function onSpeak(event) {
    const chute = event.results[0][0].transcript
    exibeChute(chute)
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
}