const API_URL = "https://api.exchangerate-api.com/v4/latest/"; 
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");
const form = document.getElementById("converter-form");


const currencies = [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
    "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
    "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
    "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
    "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP",
    "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR",
    "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS",
    "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR",
    "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP",
    "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO",
    "NOK", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG",
    "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK",
    "SGD", "SHP", "SKK", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP",
    "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS",
    "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF",
    "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"
];


const populateCurrencies = () => {
    currencies.forEach(currency => {
        const option1 = new Option(currency, currency);
        const option2 = new Option(currency, currency);
        fromCurrencySelect.add(option1);
        toCurrencySelect.add(option2);
    });
};


const convertCurrency = async (from, to, amount) => {
    const response = await fetch(`${API_URL}${from}`);
    const data = await response.json();
    const rate = data.rates[to];
    const convertedAmount = (amount * rate).toFixed(2);
    resultDiv.innerText = `Result: ${convertedAmount} ${to}`;
};


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = amountInput.value;
    convertCurrency(fromCurrency, toCurrency, amount);
});


populateCurrencies();

