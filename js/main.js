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

    // output
    if (emailFoun == true){
        accesso.innerHTML += `<h3 class="consenti">accesso eseguito con email: ${userEmail} </h3>`;
    } else if( emailFoun == false){
        accesso.innerHTML += `<h3 class="negato">accesso negato con email: ${userEmail}</h3>`;
    }
}
);

// ESERCIZIO DADI
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");
const tiraBtn= document.querySelector(".btn1");


tiraBtn.addEventListener('click', function(){
console.log('click');
// generare nuemri da 1 a 6
   const numberRandom = Math.round(Math.random() * 5) +1;
   const numberRandom2 =Math.round(Math.random() * 5) +1;
   console.log(numberRandom);
   user.innerHTML = numberRandom;
   computer.innerHTML = numberRandom2;
});




// far tirare dadi a user
// far tirare dadi a compuet
// confronto e vincitore