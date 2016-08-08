var crypto = require('crypto-js');

//first lesson
// var secretMessage = 'dan'

var secretMessage = {
  name: 'dan',
  secretName: '007'
}

var secretKey = '123abc'; //think of this as the password to decrypt the mssage
//ENCRYPT Message
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey); //encrypt takes two arguents, first one is message and then key
console.log("Encrypted Message " + encryptedMessage );

//decrypt Message
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);  //takes in two arguments. first is encrypted message & then secret key
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decryptedMessage)
//will say object-object, when you try to concatanate an object into a string.
console.log(decryptedMessage.name)