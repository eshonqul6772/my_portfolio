
let telegram_bot_id = "6287647192:AAEzkQH843PcVdsW6x5_xW1fPmRa3IZsh2E";

let chat_id = 2007014336;
let name, email, subject, message;
let ready = function() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;
    message = "name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMasses: " + message;
};
const sendtelegram = function() {
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};