
//registration form


let userName = 'NOZIMJON'
let userPassword = 19990213
let userEmail = 'nozimjon76543@gmail.com'

if (userName === 'NOZIMJON' && userPassword === 19990213 && userEmail === 'nozimjon76543@gmail.com') {
    console.log('registration is well done');
} else {
    if (userName !== 'NOZIMJON') {
        console.log('please enter right username and use only uppercase letters');
    }
    if (userPassword !== 19990213) {
        console.log('enter only numbers');
    }

    if (userEmail !== 'nozimjon76543@gmail.com') {
        console.log('email is not appropriate, please enter right email');
    }
}