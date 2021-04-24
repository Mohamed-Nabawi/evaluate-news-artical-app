import { checkForName } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formurl = document.getElementById('name').value
    if (checkForName(formurl)) {

        console.log("::: Form Submitted :::")


        fetch('http://localhost:8081/test', {

            method: 'POST',
            body: JSON.stringify({ formurl }),
            headers: {
                'Content-Type': 'application/json',
            },

        })
            .then(res => res.json())
            .then(function (res) {
                // print for debugging
                console.log(res);

                // Populate html with result
                document.getElementById('agreement').innerHTML = res.agreement
                document.getElementById('confidence').innerHTML = res.confidence
                document.getElementById('model').innerHTML = res.model
                document.getElementById('irony').innerHTML = res.irony
                
                
                
            })

    } else {
        // Display error message if URL is not valide
        var error_section = document.querySelector('section.errors');
        var error = document.querySelector('section.errors #error');
        error.innerHTML = "The URL:[" + (formurl.value) + "] Please enter a valid url"
        error_section.style.display = "block";

    }
}

export { handleSubmit }
