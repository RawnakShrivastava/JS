// Formatted Data
const ShowDetails = () => {
    const formElements = document.getElementById("form").elements;
    const formLength = document.getElementById("form").elements.length;
    const firstName = document.getElementById("fname").value ;
    const lastName = document.getElementById("lname").value ;
    const address = document.getElementById("address").value ;
    const phone = document.getElementById("phone").value ;
    const email = document.getElementById("email").value ;
    const yop = document.getElementById("YOP").value ;
    const skills = document.getElementById("skills").value ;
    const contactPhone = document.getElementById("checkbox-contact-ph").checked;
    const contactEmail = document.getElementById("checkbox-contact-em").checked;
    const agreement = document.getElementById("checkbox-1").checked ;

    const user = {
        Fullname : firstName + lastName,
        address : address,
        phone : phone,
        email : email,
        yop : yop,
        skills : skills,
        contactViaPhone : contactPhone,
        contactViaEmail : contactEmail,
        agreement : agreement
    } 


        var mandatory = ['FirstName', 'LastName' ,'Phone', 'Email'];
        var errorCount = 0;
        mandatory.forEach(function(el) {
        var val = document.forms["user-form"][el].value;
        if (val == "") {
            document.getElementById(el + '_error').textContent = el.toUpperCase().replace('_', ' ') + " must be filled out";
            ++errorCount;
        }   
        })
        if (errorCount) return false;
        console.log(user);
            console.log("Submitted...");
            for(var i = 0 ; i < formLength-1 ;i++){
                formElements[i].value = '';
                document.getElementById("error").textContent = '';

        }
};
// Show all fields at once

// const ShowDetailsNew = () => {
//     const formElements = document.getElementById("form").elements;
//     const formLength = document.getElementById("form").elements.length;
//     console.log(formLength);
//     for(var i = 0 ; i < formLength-1 ;i++){
//         console.log(formElements[i].value);
//     }
// };
