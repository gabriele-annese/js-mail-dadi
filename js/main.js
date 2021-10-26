// - crea una lista contenente almeno 3 indirizzi email
const email = ['cicciobello02@gmail.com','pasquale87@gmail.com','claudia23@hotmail.com',];
const emailInput = document.querySelector("#email");
const accessBtn = document.querySelector(".btn");
const accesso = document.querySelector(".accesso")
// - chiedi all’utente la sua email

accessBtn.addEventListener('click', function() {
    // otteniamo l email dell'utente
    const userEmail = emailInput.value.trim().toLowerCase()
    console.log(userEmail)
    // verifacere useremail in array
    let emailFoun = false;
    for(let i = 0; i < email.length; i++){
        if(email[i] == userEmail){
            emailFoun = true;
            break;
        }
    }
    console.log(emailFoun);
}
);
