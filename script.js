{
    const calculateResult = (amount, selectElement) => {
        const usd = 4.41;
        const eur = 4.69;
        const gbp = 5.30;

        switch (selectElement.value) {
            case "USD":
                return amount / usd;

            case "EUR":
                return amount / eur;

            case "GBP":
                return amount / gbp;
        }
    }

    const onFormSubmit = (event) => {
        const selectElement = document.querySelector(".js-select");
        const amountValueElement = document.querySelector(".js-amountValue");
        const amount = amountValueElement.value
        const result = calculateResult(amount, selectElement);

        event.preventDefault();
        onResultText(amountValueElement, selectElement, result);
    }

    const onResultText = (amountValueElement, selectElement, result) => {
        const finishTextElement = document.querySelector(".js-finishText")
        finishTextElement.innerText = `Za ${amountValueElement.value}ZŁ otrzymamy ${result.toFixed(2)} ${selectElement.value}`
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}