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

    const onResultText = (amountValueElement, selectElement, result) => {
        const finishTextElement = document.querySelector(".js-finishText")
        finishTextElement.innerText = `Za ${amountValueElement.value}ZŁ otrzymamy ${result.toFixed(2)} ${selectElement.value}`
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const amountValueElement = document.querySelector(".js-amountValue");
        const selectElement = document.querySelector(".js-select");
        const amount = amountValueElement.value

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const result = calculateResult(amount, selectElement)
            onResultText(amountValueElement, selectElement, result)
        })
    }
    init();
}