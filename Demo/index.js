// Formatted Data
const ShowDetails = () => {
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

    console.log( "First Name : " + `${firstName}`);
    console.log( "last Name : " + `${lastName}`);
    console.log( "Address : " + `${address}`);
    console.log( "phone : " + `${phone}`);
    console.log( "email : " + `${email}`);
    console.log( "Years of Experience " +  `${yop}`);
    console.log( "Agreement : " +  `${agreement}`);
    console.log( "Prefered Phone : " +  `${contactPhone}`);
    console.log( "Prefered Email: " +  `${contactEmail}`);
    console.log( "Skills : " +  `${skills}`);

    const formElements = document.getElementById("form").elements;
    const formLength = document.getElementById("form").elements.length;
    for(var i = 0 ; i < formLength-1 ;i++){
        formElements[i].value = '';
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


