class Calculator {

    expression = ""
    output

    clear(){
        this.expression = ""
    }

    operate(str){
        try {
            this.output = eval(str)
        }
        catch(error){
            this.output = "SYNTAX ERROR"
        }
        console.log("result is ", this.output)
        this.clear()
    }
}

const screenOne = document.getElementById("screen-one")
const screenTwo = document.getElementById("screen-two")
const equalButton = document.getElementById("equal")
const acButton = document.getElementById("AC")
const delButton = document.getElementById("DEL")

const calc = new Calculator()

document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", ()=> {
        calc.expression += button.textContent
        screenTwo.innerText = calc.expression
        screenOne.innerText = ""
    })
})

equalButton.addEventListener("click", ()=> {
    calc.operate(calc.expression)
    screenOne.innerText = calc.output
    screenTwo.innerText = ""
})

acButton.addEventListener("click", ()=> {
    calc.clear()
    screenTwo.innerText = calc.expression
    screenOne.innerText = ""
})


delButton.addEventListener("click", ()=> {
    calc.expression = calc.expression.slice(0, -1)
    screenTwo.innerText = calc.expression
})
