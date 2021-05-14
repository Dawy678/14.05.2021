const app = document.getElementById('app')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)
const mainheader = document.getElementsByClassName('main-header')


let arr = [
    {
        tytul: "Książka 1",
        opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt perspiciatis molestiae harum hic doloribus, minus explicabo error nulla, sint accusamus amet, nihil nemo."
    },
    {
        tytul: "Książka 2",
        opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt perspiciatis molestiae harum hic doloribus, minus explicabo error nulla, sint accusamus amet, nihil nemo."
    },
    {
        tytul: "Książka 3",
        opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt perspiciatis molestiae harum hic doloribus, minus explicabo error nulla, sint accusamus amet, nihil nemo."
    },
    {
        tytul: "Książka 4",
        opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt perspiciatis molestiae harum hic doloribus, minus explicabo error nulla, sint accusamus amet, nihil nemo."

    },
    {
        tytul: "Książka 5",
        opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt perspiciatis molestiae harum hic doloribus, minus explicabo error nulla, sint accusamus amet, nihil nemo."

    },
    {
        tytul: "Książka 6",
        opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt perspiciatis molestiae harum hic doloribus, minus explicabo error nulla, sint accusamus amet, nihil nemo."

    }
]


function ksiazki() {
    for(let i = 1; i < 7; i++) {
       const newDiv = document.createElement('div')
    const newDiv1 = document.createElement('div')
    const newh4 = document.createElement('h4')
    const newP = document.createElement('p')
    const newButton = document.createElement('button')
    const newButton1 = document.createElement('button')
    newDiv.setAttribute('class', 'card')
    newDiv1.setAttribute('class', 'paddingwcardach')
    newButton.setAttribute('class', 'button')
    newButton1.setAttribute('class', 'button')
    newDiv.setAttribute('id', i)
    newh4.innerText = arr[i - 1].tytul
    newP.innerText = arr[i - 1].opis
    newButton.innerText = "EDYTUJ"
    newButton1.innerText = "USUŃ"
    newButton1.setAttribute('onclick', 'usuwanie'+i+'()')
    container.appendChild(newDiv)
    newDiv.appendChild(newDiv1)
    newDiv1.appendChild(newh4)
    newDiv1.appendChild(newP)
    newDiv.appendChild(newButton)
    newDiv.appendChild(newButton1) 
    }
}   

function usuwanie1() {
    let unwantedChild = document.getElementById(1)
    container.removeChild(unwantedChild)
}
function usuwanie2() {
    let unwantedChild = document.getElementById(2)
    container.removeChild(unwantedChild)
}
function usuwanie3() {
    let unwantedChild = document.getElementById(3)
    container.removeChild(unwantedChild)
}
function usuwanie4() {
    let unwantedChild = document.getElementById(4)
    container.removeChild(unwantedChild)
}
function usuwanie5() {
    let unwantedChild = document.getElementById(5)
    container.removeChild(unwantedChild)
}
function usuwanie6() {
    let unwantedChild = document.getElementById(6)
    container.removeChild(unwantedChild)
}


const li0 = document.querySelector("li")
li0.setAttribute('onclick', 'ksiazki()')