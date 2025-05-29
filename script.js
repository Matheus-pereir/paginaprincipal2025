function checkDivisibility() {
    const number = parseInt(document.getElementById('number').value);
    if (isNaN(number)) {
        document.getElementById('result').innerHTML = 
            '<div class="message" style="color: red;">Por favor, digite um número válido.</div>';
        return;
    }

    document.getElementById('result').innerHTML = '';
    let resultHTML = '';
    let isDivisibleByAny = false;
    if (number % 2 === 0) {
        resultHTML += '<div class="message">É divisível por 2</div>';
        isDivisibleByAny = true;
    }
    if (number % 3 === 0) {
        resultHTML += '<div class="message">É divisível por 3</div>';
        isDivisibleByAny = true;
    }
    if (!isDivisibleByAny) {
        resultHTML += '<div class="message">Não é divisível nem por 2 nem por 3</div>';
    }
    document.getElementById('result').innerHTML = resultHTML;
}