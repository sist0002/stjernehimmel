// submit knap
const submit = document.querySelector("#submit_btn");
submit.addEventListener("click", submitForm);

// const checkboxes = document.querySelectorAll('input[name="contact2"]:checked');

function submitForm() {
    // fornavn og efternavn
    document.querySelector("#sumFname").textContent = document.querySelector("#f-name").value;
    document.querySelector("#sumLname").textContent = document.querySelector("#l-name").value;

    // fødselsdag (dato)
    document.querySelector("#sumBirthday").textContent = document.querySelector("#birthday").value;

    // kapselnummer
    document.querySelector("#sumCapsule").textContent = document.querySelector("#kapselnummer").value;

    // land og by
    document.querySelector("#sumCountry").textContent = document.querySelector("#country").value;
    document.querySelector("#sumCity").textContent = document.querySelector("#city").value;

    // nærkontakter (tekstbox)
    document.querySelector("#sumPeople").textContent = document.querySelector("#people").value;

    // radiobuttons
    document.querySelector("#sumContact1").textContent = document.querySelector('input[name="radioContact"]:checked').value;
    
    // checkboxes
    // document.querySelector("#sumContact2").textContent = document.querySelector('input[name="radioContact"]:checked').value;
}
document.querySelector("#sum").style.display = "block";

// UDKOMMENTERET JS -------------------------------------------------------------------------------------------

// document.querySelector("#webform").reset();
// document.querySelector("#reset_btn").addEventListener("click", reset);

// function reset() {
//     document.querySelector("#webform").reset();
//     document.querySelector("#sum").style.display = "none";
//   }