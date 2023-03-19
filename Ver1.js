const requestURL = "https://dog.ceo/dog-api"
const xhr = XMLHttpRequest();

xhr.open("GET", requestURL);
xhr.responseType = "json"

xhr.onload = () => {
    console.log(xhr.response)
}
xhr.oneerror = () => {
    console.log(xhr.response)
}
xhr.send();