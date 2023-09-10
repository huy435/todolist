let taski = ["task","task","task"]
const tasks = document.querySelector(".tasks")
const TextAdd = document.querySelector(".text-adding")
const ButAdd = document.querySelector(".but-adding")

function deleteTask(i) {
    taski.splice(i, 1)
    render()
}

ButAdd.addEventListener("click", ()=>{
    taski.push(TextAdd.value)
    render()
})

function render(params) {
    tasks.innerHTML = ""
    taski.forEach((task, i)=>{
        tasks.insertAdjacentHTML('beforeend', `<div class="text-task">${task}</div>
        <button class="btn-trash"><img onclick="deleteTask(${i})" class="trash" src="trash.svg" alt=""></button>
    </div>
    <div class="line"></div>`)

    })
}

render()

