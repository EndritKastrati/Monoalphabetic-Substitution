function encode(message, key) {
    const alfabeti = "abcdefghijklmnopqrstuvwxyz";
    let encodedMessage = "";

    // Loop ne qdo karakter te tekstit
    for (let i = 0; i < message.length; i++) {
        let char = message[i].toLowerCase(); // Konverto ne Lowercase

        // Shiko a osht karakteri shkronje
        if (/[a-z]/.test(char)) {
            let index = alfabeti.indexOf(char);
            
            // Replace karakterin me karakterin ne indexin e njejt tek qelsi/key
            if (index !== -1) {
                encodedMessage += key[index];
            } else {
                encodedMessage += char; // Nese karakteri nuk o n'alfabet leje njejt
            }
        } else {
            encodedMessage += char; // Nese karakteri nuk o n'alfabet leje njejt
        }
    }

    return encodedMessage;
}

// Funksioni per encode kur shtypet butoni
function encryptMessage() {
    const inputMessage = document.getElementById("input").value;
    const key = "zyxwvutsrqponmlkjihgfedcba"; // Key shembull (reverse alfabet - Atbash Cipher)
    const outputMessage = encode(inputMessage, key);
    document.getElementById("output").value = outputMessage;
}
