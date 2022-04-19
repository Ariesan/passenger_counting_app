let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    //console.log(count)
    countEl.textContent = count
}

function save() {
    let countSave = count + " - "
    saveEl.textContent += countSave
    //console.log(countSave)
    countSave = 0
    count = 0
}