const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (event) => {

    const text = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerText = text;
    texts.appendChild(p);

    if(event.results[0].isFinal){
        if(text.includes('hello')){
            p = document.createElement('p')
            p.classList.add('reply')
            p.innerText = 'Hey';
            texts.appendChild(p)
        }
        p = document.createElement('p');
    }

    console.log(text);
})

recognition.addEventListener('end', ()=> {
    recognition.start();
})
recognition.start()