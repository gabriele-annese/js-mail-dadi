// - crea una lista contenente almeno 3 indirizzi email
const email = ['cicciobello02@gmail.com','pasquale87@gmail.com','claudia23@hotmail.com',];
const emailInput = document.querySelector("#email");
const accessBtn = document.querySelector(".btn");
// - chiedi all’utente la sua email

accessBtn.addEventListener('click', function() {
    // otteniamo l email dell'utente
    const userEmail = emailInput.value.trim().toLowerCase()
    console.log(userEmail)
}
);
