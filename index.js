function writeCards(names, birthday) {
    let message = [];
    for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return message; 
}

function countDown(positive) {
    while (positive >= 0)  {
        console.log(positive);
        positive--;
    }
}
