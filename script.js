document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('.display input');
    let currentInput = '';
    let operation = null;
    let firstOperand = null;

    const calculate = () => {
        let secondOperand = parseFloat(currentInput);
        switch (operation) {
            case '+': return firstOperand + secondOperand;
            case '-': return firstOperand - secondOperand;
            case '*': return firstOperand * secondOperand;
            case '/': return firstOperand / secondOperand;
            case 'sin': return Math.sin(firstOperand);
            case 'cos': return Math.cos(firstOperand);
            case 'tan': return Math.tan(firstOperand);
            case 'log': return Math.log10(firstOperand);
            case 'ln': return Math.log(firstOperand);
            case 'x²': return Math.pow(firstOperand, 2);
            case 'x³': return Math.pow(firstOperand, 3);
            case 'x^y': return Math.pow(firstOperand, secondOperand);
            case '√x': return Math.sqrt(firstOperand);
            case '³√x': return Math.cbrt(firstOperand);
            case '1/x': return 1 / firstOperand;
            default: return 0;
        }
    };

    const handleClick = (e) => {
        const buttonValue = e.target.textContent;

        if (parseFloat(buttonValue) >= 0 || buttonValue === '.') {
            currentInput += buttonValue;
            display.value = currentInput;
        } else if (buttonValue === 'C') {
            currentInput = '';
            firstOperand = null;
            operation = null;
            display.value = '';
        } else if (buttonValue === '=') {
            display.value = calculate();
            firstOperand = null;
            operation = null;
            currentInput = '';
        } else {
            if (!operation) {
                firstOperand = parseFloat(currentInput);
                operation = buttonValue;
                currentInput = '';
            } else {
                display.value = calculate();
                firstOperand = parseFloat(display.value);
                operation = buttonValue;
                currentInput = '';
            }
        }
    };
document.querySelectorAll('.buttons button').forEach(button => {
	button.addEventListener('click', handleClick);
    });
	
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';

  // Set a negative starting position for the top property
  snowflake.style.top = -60 + 'px'; // Assuming the snowflake size is not more than 25px

  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  document.getElementById('snowflakeContainer').appendChild(snowflake);

  // Remove snowflake after it has fallen
  setTimeout(() => {
    snowflake.remove();
  }, 5000 + Math.random() * 3000); // Random removal time for varied effect
}

setInterval(createSnowflake, 100);

    // Keydown event listener
document.addEventListener('keydown', function(event) {
        const key = event.key;
        const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Escape'];
        const keyToButton = {
            'Enter': '=',
            'Backspace': 'C',
            'Escape': 'C',
            '/': '/',
            '*': '*',
            '-': '-',
            '+': '+',
            '.': '.'
            // Add other key mappings if needed
        };

        if (validKeys.includes(key)) {
            let buttonValue = keyToButton[key] || key;
            let button = [...document.querySelectorAll('.buttons button')].find(btn => btn.textContent === buttonValue);
            
            if (button) {
                button.click();
            }
        }
    });
});




	
    