//         JavaScript  Assignments

// Task 1
// Done

//         Task # 02
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName = 'Tayyaba';
console.log(`"Hello ${personName},would you like to learn some Python today?"`);

// Task # 03
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let userName = 'taYyAba';
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
// Title Case (letter of each word should be capital)
let titleCase = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
console.log(titleCase);
console.log('hi');

//         Task # 04
//      Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

//  Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quote = 'Albert Einstein once said,"The true sign of intelligence is not knowledge but imagination." ';
console.log(quote);

//         Task # 05
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person = 'Albert Einstein';
let quote1 = `Once ${famous_person} said,"The only reason for time is so that everything doesn't happen at once"`;
console.log(quote1);

//         Task # 06
//     Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let person_name = '    \tTayyaba \n   ';
console.log(person_name);
let trimmedperson_name = person_name.trim();
console.log(trimmedperson_name);

//         Task # 07
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(24 / 3);

//         Task # 08
// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.

for (let i = 1; i <= 4; i++) {
	console.log(5 + 3);
}

//         Task # 09
//    Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favouriteNumber = 15;
console.log(`My favourite number is ${favouriteNumber}`);

//         Task # 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

let myName = 'Tayyaba';
// Declaring a variable ,assigning it the name of me and printing it

let todayDate = '9 Oct ';
// Printing today's date

//         Task # 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names = ['Umra', 'Maira', 'Bushra', 'Wajeeha'];
names.forEach((name) => {
	console.log(name);
});

//         Task # 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

names.forEach((name) => {
	console.log(`Hi ${name} you are in friends `);
});

//         Task # 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favModeOfTransportation = ['Honda', 'Yamaha', 'BMW'];
favModeOfTransportation.forEach((model) => {
	console.log(`I would like to own a ${model} bike`);
});

//         Task # 14
//  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let GuestList = ['Sahiba', 'Wajeeha', 'Bisma'];
GuestList.forEach((guest) => {
	console.log(` ${guest}, you are invited to the dinner`);
});

//         Task # 15
//    Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

console.log(`${GuestList[0]} can't make the dinner`);

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

GuestList[0] = 'Wareesha';

// • Print a second set of invitation messages, one for each person who is still in your list.

GuestList.forEach((guest) => {
	console.log(` ${guest}, you are invited to the dinner`);
});

//         Task # 16

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log(`Hi Maham,Hafsa and Ayesha we found a bigger dinner table`);

// • Add one new guest to the beginning of your array.

GuestList.unshift('Hafsa');

// • Add one new guest to the middle of your array.

GuestList.splice(2, 0, 'Maham');
//• Use append() to add one new guest to the end of your list.

GuestList.push('Ayehsa');
//• Print a new set of invitation messages, one for each person in your list.
GuestList.forEach((guest) => {
	console.log(` ${guest}, you are invited to the dinner`);
});
let invitedPeople = [...GuestList].length;

//         Task # 17

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log(`Sorry for the inconvenience I can  invite only two people for dinner`);

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

let firstPop = GuestList.pop();
console.log(`Sorry ${firstPop} I have removed you due to inconvenience`);

let secondPop = GuestList.pop();
console.log(`Sorry ${secondPop} I have removed you due to inconvenience`);

let thirdPop = GuestList.pop();
console.log(`Sorry ${thirdPop} I have removed you due to inconvenience`);

let fourthPop = GuestList.pop();
console.log(`Sorry ${fourthPop} I have removed you due to inconvenience`);

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

GuestList.forEach((guest) => {
	console.log(`${guest} you still is invited to the dinner`);
});

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

GuestList.pop();
GuestList.pop();
console.log(GuestList);

//         Task # 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

let favPlaces = ['Saudia Arab', 'Turkey', 'Europe', 'Dreamworld', 'Dubai'];

//• Print your array in its original order.

console.log(favPlaces);

//• Print your array in alphabetical order without modifying the actual list.

let sortedArray = [...favPlaces].sort();
console.log(sortedArray);
//• Show that your array is still in its original order by printing it.

console.log(favPlaces);
//• Print your array in reverse alphabetical order without changing the order of the original list.

let reverseArray = [...sortedArray].reverse();
console.log(reverseArray);
//• Show that your array is still in its original order by printing it again.

console.log(favPlaces);
console.log(favPlaces);
//• Reverse the order of your list. Print the array to show that its order has changed.

favPlaces.reverse();
console.log(favPlaces);

///• Reverse the order of your list again. Print the list to show it’s back to its original order.

favPlaces.reverse();
console.log(favPlaces);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

favPlaces.sort();
console.log(favPlaces);

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favPlaces.reverse();
console.log(favPlaces);

//         Task # 19

//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// In exercise 16
console.log(`I am inviting ${invitedPeople} people at the dinner`);

//         Task # 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let cities = ['Karachi', 'Multan', 'Quetta', 'Lahore', 'Islamabad'];
cities.forEach((city) => {
	console.log(city);
});

//         Task # 21
// They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

let myObj = {
	myName: 'Tayyaba',
	rollNo: 123,
	institite: 'Saylani',
};
console.log(myObj);
//         Task # 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

//         Task # 23

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

let percentage = 90;
// console.log("Is car == 'subaru'? I predict True.")
console.log(percentage == 90 ? 'I predict True' : 'False');

// console.log(car == 'subaru')
console.log(percentage == 90);

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// Observed

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let test1 = 10;
let test2 = 20;
let test3 = 30;
let test4 = 40;
let test5 = 50;
let test6 = 60;
let test7 = 70;
let test8 = 80;
let test9 = 90;
let test10 = 100;
console.log(test1 == 10 ? 'True' : 'False');
console.log(test2 == 20 ? 'True' : 'False');
console.log(test3 == 30 ? 'True' : 'False');
console.log(test4 == 40 ? 'True' : 'False');
console.log(test5 == 50 ? 'True' : 'False');
console.log(test6 == 70 ? 'True' : 'False');
console.log(test7 == 80 ? 'True' : 'False');
console.log(test8 == 90 ? 'True' : 'False');
console.log(test9 == 100 ? 'True' : 'False');
console.log(test10 == 110 ? 'True' : 'False');

//         Task # 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

let test11 = '2';
console.log(test11 == 2);
console.log(test11 === 2);

// • Tests using the lower case function

let test12 = 'tayyaba';
console.log(test12 === 'TaYyAba'.toLowerCase() ? 'True' : 'False');

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let test13 = 12;
console.log(test13 == 12 ? 'True' : 'False');
console.log(test13 != 13 ? 'True' : 'False');
console.log(test13 > 9 ? 'True' : 'False');
console.log(test13 < 10 ? ' True' : 'False');
console.log(test13 === 12 ? ' True' : 'False');
console.log(test13 <= 12 ? ' True' : 'False');
// • Tests using "and" and "or" operators

let test14 = 80;
console.log(test14 > 70 && test14 < 100 ? 'True' : 'False');
console.log(test14 < 70 || test14 > 20 ? 'True' : 'False');

// • Test whether an item is in a array

let numbers = [1, 2, 3, 4];
console.log(numbers.indexOf(3));

// • Test whether an item is not in a array

console.log(numbers.indexOf(7));

//         Task # 25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alien_color = 'green';

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

if (alien_color === 'green') {
	console.log('Player just earned 5 points');
}

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
else {
	console.log(' ');
}

//         Task # 26
// Alien Colors #2: Choose a cololr for an alien as you did in Exercise 25, and write an if-else chain.

let alien_color2 = 'red';

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

if (alien_color2 === 'green') {
	console.log('Player just earned 5 points for shooting the alien');
}

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else if (alien_color2 !== 'green') {
	console.log('Player just earned 10 points');
}

// • Write one version of this program that runs the if block and another that runs the else block.

if (alien_color2 === 'red') {
	console.log('You got 20  points');
} else {
	console.log('You lost');
}
//         Task # 27

//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//• If the alien is green, print a message that the player earned 5 points.

if (alien_color === 'green') {
	console.log('You earned 5 points');
}

//• If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color === 'yellow') {
	console.log('You earned 10 points');
}
//• If the alien is red, print a message that the player earned 15 points.
else if (alien_color === 'red') {
	console.log('You earned 15 points');
}
//• Write three versions of this program, making sure each message is printed for the appropriate color alien

let alien_color3 = 'red';
if (alien_color3 === 'green') {
	console.log('You earned 5 points');
} else if (alien_color3 === 'yellow') {
	console.log('You earned 10 points');
} else {
	console.log('You earned 15 points');
}

//         Task # 28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

let age = 20;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
	console.log('Person is a baby');
}

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age === 2 && age < 4) {
	console.log('Person is toddler');
}

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age === 4 && age < 13) {
	console.log('Person is a kid');
}

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age === 13 && age < 20) {
	console.log('Person is a teenager');
}

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age === 20 && age < 65) {
	console.log('Person is an adult');
}
// • If the person is age 65 or older, print a message that the person is an elder.
else if (age >= 65) {
	console.log('Person is an elder');
}
//         Task # 29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

let favorite_fruits = ['mangoes', 'apples', 'bananas'];

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

if (favorite_fruits.includes('apples')) {
	console.log('You really like apples!');
}
if (favorite_fruits.includes('mangoes')) {
	console.log('You really like mangoes!');
}
if (favorite_fruits.includes('bananas')) {
	console.log('You really like bananas!');
}
if (favorite_fruits.includes('oranges')) {
	console.log('You really like oranges!');
}
if (favorite_fruits.includes('grapes')) {
	console.log('You really like grapes!');
}
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let userNames = ['Tayyaba', 'Umra', 'admin', 'Wajeeha', 'Sahiba'];

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

for (let username of userNames) {
	if (username === 'admin') {
		console.log(`Hello ${username} would you like to see a status report?`);
	}
}

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

for (let username of userNames) {
	console.log(`Hello ${username},Thankyou for logging in again`);
}
