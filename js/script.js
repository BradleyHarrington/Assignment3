// 1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

//var favMovies = new Array("Avatar", "Unforgiven", "Something Has to Give", "Dirty Harry", "Wyatt Earp");
//window.console.log(favMovies[1]);

// 2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

//var movies = [];
//
//movies[0] = "Avatar";
//movies[1] = "Unforgiven";
//movies[2] = "Something Has to Give";
//movies[3] = "Dirty Harry";
//movies[4] = "Wyatt Earp";
//window.console.log(movies[0]);

// 3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

//var movies = [];
//
//movies[0] = "Avatar";
//movies[1] = "Unforgiven";
//movies[2] = "Something Has to Give";
//movies[3] = "Dirty Harry";
//movies[4] = "Wyatt Earp";
//movies.splice(2, 0, "Starman");
//window.console.log(movies.length);

// 4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

//var movies = [];
//
//movies[0] = "Avatar";
//movies[1] = "Unforgiven";
//movies[2] = "Something Has to Give";
//movies[3] = "Dirty Harry";
//movies[4] = "Wyatt Earp";
//
//delete movies[0];
//var i;
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log(movies[i]);
//}

// 5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.

//var movies = [];
//
//movies[0] = "Avatar";
//movies[1] = "Unforgiven";
//movies[2] = "Something Has to Give";
//movies[3] = "Dirty Harry";
//movies[4] = "Wyatt Earp";
//movies[5] = "Jungle Fever";
//movies[6] = "Taken";
//
//var i;
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log(movies[i]);
//}

// 6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.

//var movies = [];
//
//movies[0] = "Avatar";
//movies[1] = "Unforgiven";
//movies[2] = "Something Has to Give";
//movies[3] = "Dirty Harry";
//movies[4] = "Wyatt Earp";
//movies[5] = "Jungle Fever";
//movies[6] = "Taken";
//
//for (var index in movies) {
//    window.console.log(movies[index]);
//}


// 7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

//var movies = [];
//
//movies[0] = "Avatar";
//movies[1] = "Unforgiven";
//movies[2] = "Something Has to Give";
//movies[3] = "Dirty Harry";
//movies[4] = "Wyatt Earp";
//movies[5] = "Jungle Fever";
//movies[6] = "Taken";
//
//movies.sort();
//for (var index in movies) {
//    window.console.log(movies[index]);
//}

// 8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):

//var movies = ["Avatar", "Unforgiven", "Taken", "Dirty Harry", "Wyatt Earp"];
//var leastFavMovies = ["Gigli", "The Master of Disguise", "Showgirls"];
//
//
//window.console.log("Movies I like: \n\n");
//for (var index in movies) {
//    window.console.log(movies[index]);
//}
//
//window.console.log("\n\nMovies I regret watching: \n\n");
//for (var index in leastFavMovies) {
//    window.console.log(leastFavMovies[index]);
//}

// 9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.

//var movies = ["Avatar", "Unforgiven", "Taken", "Dirty Harry", "Wyatt Earp"];
//var leastFavMovies = ["Gigli", "The Master of Disguise", "Showgirls"];
//
//movies = movies.concat(leastFavMovies);
//
//movies.reverse(movies.sort());
//for (var index in movies) {
//    window.console.log(movies[index]);
//}

// 10.	Return just the last item in the array and display it within the console window.

//var movies = ["Avatar", "Unforgiven", "Taken", "Dirty Harry", "Wyatt Earp"];
//var leastFavMovies = ["Gigli", "The Master of Disguise", "Showgirls"];
//
//movies = movies.concat(leastFavMovies);
//
//var lstMovies = movies.reverse(movies.sort());
//
//window.console.log(lstMovies.pop());

//11.	Remove the previous method and this time return just the first item in the array and display it within the console window.

//var movies = ["Avatar", "Unforgiven", "Taken", "Dirty Harry", "Wyatt Earp"];
//var leastFavMovies = ["Gigli", "The Master of Disguise", "Showgirls"];
//
//movies = movies.concat(leastFavMovies);
//
//var lstMovies = movies.reverse(movies.sort());
//
//window.console.log(lstMovies.shift());

//12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 

//var movies = ["Avatar", "Unforgiven", "Taken", "Dirty Harry", "Wyatt Earp"];
//var leastFavMovies = ["Gigli", "The Master of Disguise", "Showgirls"];
//
//movies = movies.concat(leastFavMovies);
//
//movies.sort();
//
//movies.splice(2,2, "Star Wars", "Jurasic Park");
//movies.splice(5,1, "The Green Mile");
//
//for (var index in movies) {
//    window.console.log(movies[index]);
//}

//13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 

//var employee1 = [];
//employee1["id"] = 1234;
//employee1["name"] = "Brad Harrington";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Communications";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 1231;
//employee2["name"] = "Wade Wonder";
//employee2["title"] = "Web Designer";
//employee2["department"] = "Communications";
//employee2["isCurrent"] = true;
//
//var employees = [employee1, employee2];
//
//window.console.log(employees[1]["name"]);

//14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.

//var employee1 = [];
//employee1["id"] = "1234";
//employee1["name"] = "Brad Harrington";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Communications";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = "1231";
//employee2["name"] = "Wade Wonder";
//employee2["title"] = "Web Designer";
//employee2["department"] = "Communications";
//employee2["isCurrent"] = true;
//
//var employees = [employee1, employee2];
//var i;
//for (i = 0; i < employees.length; i++) {
//    window.console.log(employees[i]["name"]);
//};

//15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.

//var employee1 = [];
//employee1["id"] = "1234";
//employee1["name"] = "Brad Harrington";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Communications";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = "1231";
//employee2["name"] = "Wade Wonder";
//employee2["title"] = "Web Designer";
//employee2["department"] = "Communications";
//employee2["isCurrent"] = true;
//
//var employee3 = [];
//employee3["id"] = "1241";
//employee3["name"] = "Biff Baxter";
//employee3["title"] = "Marketing";
//employee3["department"] = "Communications";
//employee3["isCurrent"] = false;
//
//var employees = [employee1, employee2, employee3];
//
//var i;
//for (i = 0; i < employees.length; i++) {
//    if (employees[i]["isCurrent"] === true) {
//        window.console.log(employees[i]["name"]);
//    }
//    
//};

//16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.



//var movies = [["Avatar", 1], ["Taken", 2], ["Green Mile", 3], ["Jurassic World", 4], ["Unforgiven", 5]];
//
//movies = movies.reduce(function(a, b){
//     return a.concat(b);
//});
//
//var movieNames = movies.filter(function(item) { 
//    return typeof item == "string";
//});
//console.log(movieNames);




// The Rock, Paper, Scissors Game 

//var comGuess;
//var yourGuess = prompt("Please give us your guess of rock, paper or scissors:");
//
//var comCalc = Math.random();
//
//if (comCalc <= .33) {
//    comGuess = "rock";
//} else if (comCalc >= .66) {
//    comGuess = "paper";
//} else {
//    comGuess = "scissors";
//}
//
//switch (yourGuess) {
//case "rock":
//    if (comGuess == "rock") {
//        window.console.log("You both chose rock, it was a tie.  Try again!")
//    } else if (comGuess == "paper") {
//        window.console.log("Paper covers rock, you lose!")
//    } else {
//        window.console.log("Rock destroys scissors, you win!")
//    }
//    break;
//case "paper":
//    if (comGuess == "rock") {
//        window.console.log("Paper cover rock, you win!")
//    } else if (comGuess == "paper") {
//        window.console.log("You both chose paper, it was a tie. Try again!")
//    } else {
//        window.console.log("Scissors cut paper, you lose!")
//    }
//	break;
//case "scissors":
//    if (comGuess == "rock") {
//        window.console.log("Rock breaks scissors, you lose!")
//    } else if (comGuess == "paper") {
//        window.console.log("Scissors cut paper, you win!")
//    } else {
//        window.console.log("You both chose scissors, it was a tie, try again!")
//    }
//    break;
//default:
//    window.console.log("You play this game badly, you should become a paperboy!");
//}



// The Basic Calculator 

//var x = Number(window.prompt("Please enter the first of two numbers:"));
//var y = Number(window.prompt("Please enter the second of two numbers:"));
//var op = window.prompt("Enter the operator you would like to apply to these nubmers: (add, multiply, subtract or divide:)");
//
//function calculate(x, y, op) {
//    switch (op) {
//        case "add":
//            window.console.log("The first number + the second number = " + (x+y));
//            break;
//        case "subtract":
//            window.console.log("The first number - the second number = " + (x-y));
//            break;
//        case "multiply":
//            window.console.log("The first number x the second number = " + (x*y));
//            break;
//        case "divide":
//            window.console.log("The first number / the second number = " + (x/y));
//            break;
//        default:
//            window.console.log("You did not choose a correct operation variable, try again.");
//    }
//}
//
//calculate (x, y, op);


// Death by JavaScript 

// 1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

//function myFunction(word) {
//    var str = word;
//    var res = str.split("");
//    var sortRes = res.sort();
//    window.console.log(sortRes.join(""));
//}
//
//myFunction("vanity");

// 2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.


//function toTitleCase(str)
//{
//    return str.replace(/\b\w/g, function (txt) { return txt.toUpperCase(); });
//}
//window.console.log(toTitleCase("the quick brown fox"));


// 3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.

//function countVowels(subject) {
//    window.console.log(subject.match(/[aeiou]/gi).length);
//}
////window.console.log(countVowels("the quick brown fox"));
//countVowels("the quick brown fox");

// 4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.

//function stringGen(len)
//{
//    var genPW = " ";
//    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//    
//    var i;
//    for( i=0; i < len; i += 1 )
//        genPW += charset.charAt(Math.floor(Math.random() * charset.length));
//
//    return genPW;
//}
//
//console.log(stringGen(8));

// 5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.
//Sample Data and Output
//Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output: "United States of America"

//var Longest_Country_Name = ["Australia", "Germany", "United States of America"];
//
//var lcn = 0;
//var longest;
//var i;
//for(i = 0; i < Longest_Country_Name.length; i+= 1){
//    if(Longest_Country_Name[i].length > lcn){
//        var lcn = Longest_Country_Name[i].length;
//        longest = Longest_Country_Name[i];
//    }      
//} 
//
//window.console.log(longest);


