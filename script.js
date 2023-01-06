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
    const init = () => {
        const formElement = document.querySelector(".js-form");
        const amountValueElement = document.querySelector(".js-amountValue");
        const selectElement = document.querySelector(".js-select");
        const finishTextElement = document.querySelector(".js-finishText")
        const amount = amountValueElement.value


        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const result = calculateResult(amount, selectElement)
            finishTextElement.innerText = `Za ${amountValueElement.value}ZŁ otrzymamy ${result.toFixed(2)} ${selectElement.value}`
        })
    }
    init();
}