const elForm = document.querySelector('.form')
const elInput = document.querySelector('.input-name')
const elInputPerson = document.querySelector('.input-person')
const elInputNumber = document.querySelector('.input-number')
const elRight = document.querySelector('.right')



const contacts = []

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    const inputNameValue = elInput.value
    const inputPersonValue = elInputPerson.value
    const inputNumberValue = elInputNumber.value

    const contact = {
        name: inputNameValue,
        person: inputPersonValue,
        number: inputNumberValue
    }

    contacts.push(contact)

    elInput.value  = null
    elInputPerson.value = null
    elInputNumber.value = null
    elRight.innerHTML = null

    for(let i of contacts){
        const newHeading = document.createElement("h2")
        const newP = document.createElement("p")
        const newPNumber = document.createElement("p")

        newHeading.textContent = `${i.name}`
        newP.textContent = `${i.person}`
        newPNumber.textContent = `${i.number}`

        elRight.appendChild(newHeading)
        elRight.appendChild(newP)
        elRight.appendChild(newPNumber)
    }
})
