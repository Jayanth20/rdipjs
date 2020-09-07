/*==========================Calculator APP Start==============================*/
class Calculator {
    constructor(prevOperandTextElement, currOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement
        this.currOperandTextElement = currOperandTextElement
        this.clear()
    }
    clear() {
        this.currOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }
    delete() {
        this.currOperand = this.currOperand.toString().slice(0, -1)
    }
    appendNumber(number) {
        if (number === '.' && this.currOperand.includes('.')) return
        this.currOperand = this.currOperand.toString() + number.toString()
    }
    choose(operation) {
        if (this.currOperand === '') return
        if (this.prevOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.currOperand
        this.currOperand = ''
    }
    compute() {
        let computation
        const prev = parseFloat(this.prevOperand)
        const curr = parseFloat(this.currOperand)
        if (isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case '+':
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break
            case '*':
                computation = prev * curr
                break;
            case '÷':
                computation = prev / curr
                break
            case '%':
                computation = prev % curr
                break;
            case '√':
                computation = Math.sqrt(curr)
                break;
            default:
                return
        }
        this.currOperand = computation
        this.operation = undefined
        this.prevOperand = ''
    }
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const intNumber = parseFloat(stringNumber.split('.')[0])
        const decNumber = stringNumber.split('.')[1]
        const floatNumber = parseFloat(number)
        let intDisplay
        if (isNaN(intNumber)) {
            intDisplay = ''
        } else {
            intDisplay = intNumber.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decNumber != null) {
            return `${intDisplay}.${decNumber}`
        } else {
            return intDisplay
        }
    }
    updateDisplay() {
        this.currOperandTextElement.innerText = this.getDisplayNumber(this.currOperand)
        if (this.operation != null) {
            this.prevOperandTextElement.innerText = `${this.prevOperand} ${this.operation}`
        } else {
            this.prevOperandTextElement.innerText = ''
        }
    }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const prevOperandTextElement = document.querySelector('[data-prev-operand]')
const currOperandTextElement = document.querySelector('[data-curr-operand]')

const calculator = new Calculator(prevOperandTextElement, currOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.choose(button.innerText)
        calculator.updateDisplay()
    })
})
equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})
allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click', button => {
        calculator.deletes()
        calculator.updateDisplay()
    })
    /*===========================Calculator APP End===============================*/

/*===========================FORM VALIDATION START============================*/

function validate() {
    var x = document.forms["form"]["phone"].value;
    var fname = document.forms["form"]["fname"].value;
    var email = document.forms["form"]["email"].value;
    console.log(fname.charAt(0));
    var valid = false;
    var pattern = /^[0-9]+$/;
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (fname.charAt(0).match(pattern)) {
        alert('Name should not start with Number!');
        return false;
    } else if (isNaN(x)) {
        alert("Phone number must contain only digits!!");
        return false;
    } else if (!(email.match(mail))) {
        alert('Please enter valid email address');
        return false;
        s
    }
}

/*===========================FORM VALIDATION END============================*/
/*===========================PALINDROME CHECK================================*/
function palindrome() {
    var str = document.getElementById('pinput').value;
    var nstr = str.split(" ").join("");
    console.log(nstr);
    var rev = nstr.split("").reverse().join("");
    if (rev === nstr) {
        document.getElementById('result').innerHTML = "The string is Palindrome.";
        return true;
    } else {
        document.getElementById('result').innerHTML = "The string is not a Palindrome."
        return false;
    }
}
/*========================ANAGRAM CHECKER======================================*/
function anagram() {
    var str = document.getElementById('input1').value;
    var word = document.getElementById('input2').value;
    var nstr = str.split(" ").join("");
    var nword = word.split(" ").join("");
    let s = nstr.toUpperCase().split('').sort().join('');
    let w = nword.toUpperCase().split('').sort().join('');
    if (s === w) {
        document.getElementById('result').innerHTML = "It is Anagram."
        return true;
    } else {
        document.getElementById('result').innerHTML = "It is not Anagram."
        return false;
    }
}

/*=======================================Survival Game ============================*/
function survive() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    if (n1 < 0 || n1 > 1000) {
        alert("Please enter Number 1 between 0-1000!!")
        return false;
    } else if (n2 < 0 || n2 > 1000) {
        alert("Please enter number 2 between 0-1000!!")
        return false;
    } else {
        if (n1 > 100) {
            n1 = n1 % 100;
        }
        if (n2 > 100) {
            n2 = n2 % 100;
        }
        if (n1 > 10) {
            n1 = n1 % 10;
        }
        if (n2 > 10) {
            n2 = n2 % 10;
        }
        if (n1 > 2) {
            n1 = Math.round(n1 / 10);
        }
        if (n2 > 2) {
            n2 = Math.round(n2 / 10);
        }
    }

    if (n1 == 0) {
        if (n2 == 0) {
            r = document.getElementById("vs").innerHTML = "Human vs Human"
        } else if (n2 == 1) {
            r = document.getElementById("vs").innerHTML = "Human vs Cockroach"
        } else {
            r = document.getElementById("vs").innerHTML = "Human vs Nuclear Bomb"
        }
    } else if (n1 == 1) {
        if (n2 == 0) {
            r = document.getElementById("vs").innerHTML = "Cockroach vs Human"
        } else if (n2 == 1) {
            r = document.getElementById("vs").innerHTML = "Cockroach vs Cockroach"
        } else {
            r = document.getElementById("vs").innerHTML = "Cockroach vs Nuclear Bomb"
        }
    } else if (n1 == 2) {
        if (n2 == 0) {
            r = document.getElementById("vs").innerHTML = "Nuclear Bomb vs Human"
        } else if (n2 == 1) {
            r = document.getElementById("vs").innerHTML = "Nuclear Bomb vs Cockroach"
        } else {
            r = document.getElementById("vs").innerHTML = "Nuclear Bomb vs Nuclear Bomb"
        }
    }

    if (r == "Human vs Human" || r == "Cockroach vs Cockroach" || r == "Nuclear Bomb vs Nuclear Bomb") {
        document.getElementById("won").innerHTML = "It's a TIE!";
    } else if (r == "Human vs Cockroach" || r == "Cockroach vs Human") {
        document.getElementById("won").innerHTML = "Human has won!";
    } else if (r == "Human vs Nuclear Bomb" || r == "Nuclear Bomb vs Human") {
        document.getElementById("won").innerHTML = "Nuclear Bomb has won!";
    } else if (r == "Cockroach vs Nuclear Bomb" || r == "Nuclear Bomb vs Cockroach") {
        document.getElementById("won").innerHTML = "Cockroach has won!";
    }

}