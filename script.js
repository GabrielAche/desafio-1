let theme = 'light';

function toggleTheme() {
    const calculator = document.querySelector('.calculator');
    const themeButton = document.querySelector('#theme-button');
    const calculatorTitle = document.getElementById('calculator-title'); // Adicionamos esta linha

    if (theme === 'light') {
        theme = 'dark';
        calculator.style.backgroundColor = '#333';
        themeButton.textContent = 'Modo Diurno';
        calculatorTitle.style.color = '#fff'; // Altera a cor do título para branco no modo noturno
    } else {
        theme = 'light';
        calculator.style.backgroundColor = '#f1f1f1';
        themeButton.textContent = 'Modo Noturno';
        calculatorTitle.style.color = '#000'; // Altera a cor do título para preto no modo diurno
    }
}

// Restante do seu código JavaScript



const historyList = document.getElementById('history-list');

function addToHistory(calculation, result) {
  const listItem = document.createElement('li');
  listItem.textContent = `${calculation} = ${result}`;
  historyList.appendChild(listItem);

  if (historyList.childElementCount > 4) {
    historyList.removeChild(historyList.children[0]);
  }
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const calculation = display.value;

    try {
        const result = eval(display.value);
        display.value = result;
        // Após a atualização do display, adicione a conta e o resultado ao histórico
        addToHistory(calculation, result);
    } catch (error) {
        display.value = 'Erro';
    }
}