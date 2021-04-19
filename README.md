# Evalute news project with (NLP)
this is the first project in the advanced web journy
according this project i followed the steps below :-
# 1- i used the command line to install tha following 
npm install
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
# 2- fetch api by meaningcloud 
i signedup in meaning cloud site and got api key and installed enviroment variables 
var textapi = new aylien({
  application_id: "your-api-id",
  application_key: "your-key"
});
and sucsessfully returned data
# 3-install dotenv 
 npm install dotenv
 and created .env file and saved (dist-modules-.env)
 # 4-Install Jest framwork by using 
 npm install --save-dev jest
 and made custome js in formHandeler file 
 function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
}
export { handleSubmit }
# 5 created test folder with 2 js files
formHandler
validateUrl
# 6-configered service worker to work ofline
# 7-Deployment using Heroku 