let saveEl = document.getElementById("save-el")
let setCountEl = document.getElementById("setCount-el")
let count = 0

function increment() {
    count += 1
    setCountEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    setCountEl.innerText = 0
    count = 0
}

