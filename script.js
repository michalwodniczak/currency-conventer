{
    let formElement = document.querySelector(".js-form");
    let amountValueElement = document.querySelector(".js-amountValue");
    let selectElement = document.querySelector(".js-select");
    let finishTextElement = document.querySelector(".js-finishText")
    let usd = 4.41;
    let eur = 4.69;
    let gbp = 5.30;

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        let amount = amountValueElement.value
        switch (selectElement.value) {
            case "USD":
                result = amount / usd;
                break;
            case "EUR":
                result = amount / eur;
                break;
            case "GBP":
                result = amount / gbp;
                break;
        }
        finishTextElement.innerText = `Za ${amountValueElement.value}ZŁ otrzymamy ${result.toFixed(2)} ${selectElement.value}`
    })
}