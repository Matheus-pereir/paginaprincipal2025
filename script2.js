function checkAcceptance() {
    const name = document.getElementById('name').value.trim();
    const sex = document.getElementById('sex').value;
    const age = parseInt(document.getElementById('age').value);
    
    if (name === '' || sex === '' || isNaN(age)) {
        document.getElementById('result').innerHTML = 'Por favor, preencha todos os campos.';
        document.getElementById('result').className = '';
        return;
    }
    let resultMessage = '';
    let resultClass = '';
    
    if (sex === 'F' && age < 25) {
        resultMessage = `${name}: ACEITA.`;
        resultClass = 'accepted';
    } else {
        resultMessage = `${name}: NÃO ACEITA.`;
        resultClass = 'rejected';
    }
    document.getElementById('result').innerHTML = resultMessage;
    document.getElementById('result').className = resultClass;
}