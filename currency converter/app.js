// Fetch currency codes
fetch('https://api.frankfurter.app/currencies')
.then(response => response.json())
.then(data => {
    const currencies = Object.keys(data);
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.text = currency;
        fromCurrencySelect.add(option);

        const option2 = document.createElement('option');
        option2.text = currency;
        toCurrencySelect.add(option2);
    });
});

function convertCurrency() {
const fromCurrency = document.getElementById('fromCurrency').value;
const toCurrency = document.getElementById('toCurrency').value;
const amount = document.getElementById('amount').value;

if (!fromCurrency || !toCurrency || !amount) {
    alert('Please fill in all fields');
    return;
}

fetch(`https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`)
    .then(response => response.json())
    .then(data => {
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `${amount} ${fromCurrency} is equal to ${data.rates[toCurrency].toFixed(2)} ${toCurrency}`;
    })
    .catch(error => console.error('Error:', error));
}