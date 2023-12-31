function verificarResposta(cardAtual, resposta, cardSeguinte) {

    var card = document.getElementById(cardAtual);
    var answer = card.querySelector(".answer").value.toLowerCase();
    if (answer === resposta) {
        // show next card
        document.getElementById(cardSeguinte).classList.remove("hidden");
        // show tip
        var cardTip = card.querySelector('.card_tip');
        cardTip.classList.remove("hidden");
    } else {
        document.getElementById(cardAtual).classList.add("errado");
        setTimeout(function () {
            document.getElementById(cardAtual).classList.remove("errado");
        }, 300);
    }}
