function handleSubmit(event) {
    event.preventDefault()
    
    // check what text was put into the form field
    let formurl = document.getElementById('name').value
   if(Client.checkForName(JSON.stringify(formurl))){

    console.log("::: Form Submitted :::")
    
   
    fetch('https://localhost:8081/test',{
    
        method: 'POST',
        body: JSON.stringify({formurl}),
        headers: {
            'Content-Type': 'application/json',
        },
        
    })
    .then(res => res.json())
    .then(function(res) {
        // print for debugging
        console.log(res); 

        // Populate html with result
        document.querySelector('section.url-results #polarity').innerHTML = res.polarity
        document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity
        document.querySelector('section.url-results #polarity_confidence').innerHTML = res.polarity_confidence
        document.querySelector('section.url-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence
        document.querySelector('section.url-results #excerpt').innerHTML = res.text
    })

}else{
    // Display error message if URL is not valide
    var error_section = document.querySelector('section.errors');
    var error = document.querySelector('section.errors #error');
    error.innerHTML = "The URL:[" +JSON.stringify(formurl.value)+"] Please enter a valid url"
    error_section.style.display = "block";

} 
    }

export{handleSubmit}
