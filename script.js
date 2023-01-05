{
    const formElement = document.querySelector(".js-form");
    const amountValueElement = document.querySelector(".js-amountValue");
    const selectElement = document.querySelector(".js-select");
    const finishTextElement = document.querySelector(".js-finishText")
    const usd = 4.41;
    const eur = 4.69;
    const gbp = 5.30;

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const amount = amountValueElement.value
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