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
