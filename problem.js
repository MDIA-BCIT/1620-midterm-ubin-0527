/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

const password = "halloween"; // I set the exact value of password & set is as constance, because it's something that shouldn't be edited
const requiredLength = 9; 

function passwordCheck(password) {
    if (password = "halloween") {
        console.log("Access Granted!");
    } else if (password !== "halloween") {
        console.log("Access Denied!"); // I was trying to tell the computer to deny the access if the password is not "halloween" (it did not work, I'm sorry)
    }
}

passwordCheck("christmas");

const hint = "forgot"; //I was trying to set the const for "forgot" input, because I wasn't sure how to include it in the first function
const newPassword = "reset"; //I set this up for the same reason I set up "forgot" const

function passwordHint(hint) {
    if (hint = "forgot") {
        console.log("Here is a hint")
    };
}

passwordHint("forgot");

function passwordReset(newPassword) {
    if (newPassword = "reset") {
        console.log("Let's reset your account")
    };
}

passwordReset("reset");
