// ========================================== Exercise One Anonymous Functions =============================================

var dataSet = [294, 17, 241, 38, 194, 19, 85, 129];

transformData = function(arrayOne, func){
  return func(arrayOne);
}

// use an anonymous function to multiply all of the data in dataSet by 2
dataMultTwo = transformData(dataSet,  function(arrayTwo){ 
    for( var i = 0; i < arrayTwo.length; i++){
      arrayTwo[i] *= 2;
    }
    return arrayTwo;
});

console.log('dataMultTwo', dataMultTwo);
// should evaluate to: [588, 34, 442, 76, 288, 38, 170, 258];

// use an anonymous function to square all of the data in dataSet
squaredData = transformData(dataSet,  function(array){ 
    for( var i = 0; i < array.length; i++){
      array[i] *= array[i];
    }
    return array;
});

console.log('squaredData', squaredData);
// should evaluate to: [86436, 1156, 58081, 1444, 37636, 361, 7225, 16,641]

// use an anonymous function to return an array with only the even data
onlyEvenData = transformData(dataSet, function(array){
    var x = [];
    array.forEach( function(entry){
        if ( entry % 2 === 0 ){
            x.push(entry);
        }
    });
    return x;
});

console.log('onlyEvenData', onlyEvenData);
// should evaluate to: [294, 38, 194]

// use an anonymous function to sum all of the data in the dataSet
summedData = transformData(dataSet, function(array){
  var x = 0;
  array.forEach( function(entry){
    x += entry;
  });
  return x;
});

console.log('summedData', summedData);
// sholud evaluate to: 1,017

// use an anonymous function to return the number of odd numbers there are.
countOdds = transformData(dataSet, function(array){
    var x = 0;
    array.forEach( function(entry){
      if ( entry % 2 !== 0){
        x++;
      }
    });
    return x;
});
console.log('countOdds', countOdds);
// should evaluate to: 5



// ============================================ Exercise Two Closures ======================================================


// 1. Write a function, `nonsense` that takes an input `string`.
  // This function contains another function, `blab`
  //  which alerts `string` and
  //  is immediately called inside the function `nonsense`.
  // `blab` should look like this inside of the `nonsense` function:

  //  ```javascript
  //   var blab = function(){
  //     alert(string);
  //   };
  //   ```

// 2. In your function, `nonsense`,
  //  change the immediate call to a setTimeout
  //  so that the call to `blab` comes after 2 seconds.
  // The `blab` function itself should stay the same as before.

// 3. Now, instead of calling `blab` inside of `nonsense`,
  //  return `blab` (without invoking it).
  //  Call `nonsense` with some string and
  //  store the returned value (the `blab` function)
  //  in a variable called `blabLater`.
  //  Call `nonsense` again with a different string and
  //  store the returned value in a variable called `blabAgainLater`.


// 4. Inspect `blabLater` and `blabAgainLater` in your console.
  //  Call them (they are functions!) and see what happens!

function nonsense( string ){
    var blab = function(){
      alert(string);
    }
    //window.setTimeout( blab(), 2000 );
    return blab;
  }
  var blabLater = nonsense('Later function');
  //console.log(blabLater);
  //blabLater();

  var blabAgainLater = nonsense('AgainLater function');
  //console.log(blabAgainLater);
  //blabAgainLater();


/* 5. Write a function with a closure.

   The first function should only take one argument, someone's first name,
   and the inner function should take one more argument, someone's last name.
   The inner function should console.log both the first name and the last name.

     ```javascript
     var lastNameTrier = function(firstName){
        //does stuff

         var innerFunction = function() {
             //does stuff
         };
         //maybe returns something here
     };

     var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
     firstNameFarmer('Brown'); //logs 'Farmer Brown'
     ```
   This function is useful in case you want to try on different last names.
   For example, I could use firstName again with another last name:
  
   ```javascript
   firstNameFarmer('Jane'); //logs 'Farmer Jane'
   firstNameFarmer('Lynne'); //logs 'Farmer Lynne'
   ```
*/

var outerFunc = function( firstName ){

  var innerFunc = function( lastName ){
    console.log( firstName + ' ' + lastName );
  };
  return innerFunc;
};
var firstNameBrett = outerFunc('Brett');
firstNameBrett('Celestre');


  /* 6. Write a function, storyWriter, that contains an empty string as a variable and returns a closure that takes a string as a variable. The closure adds the input string to the original string on each invocation.

    var farmLoveStory = storyWriter();
     farmLoveStory('There was once a lonely cow.'); // 'There was once a lonely cow.'
     farmLoveStory('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'
  */

var storyWriter = function( string ){

  var closure = function ( string2 ){
    console.log( string + ' ' + string2 );
  };

  return closure;
};
var farmLoveStory = storyWriter('There was once a lonely cow.');
farmLoveStory('It saw a friendly face.');

/* [EXTRA CREDIT]: Advanced Story Writer 

check out this article for an example as to how to return objects w/ methods from a function:  http://blog.kevinchisholm.com/javascript/return-object-literal-from-constructor/

Create an 'advancedStoryWriter` function that returns an object with two methods.
   One method, `addWords` adds a word to your story
   and returns the story while the other one,
   `erase`, resets the story back to an empty string.

   Here is an implementation:

     ```javascript

     var farmLoveStory = advancedStoryWriter();
     farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
     farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

     var storyOfMyLife = storyWriter();
     storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
     storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
     storyOfMyLife.erase(); // ''

      ```

*/


/* [EXTRA CREDIT]: Debug The Code
  Why doesn't the code below work?
  This is a function that should return an array of functions
   that console.log() each person's name as a string when invoked.
  Fiddle with this function and inspect how it works,
   then try to fix it using a closure.
  Be prepared to explain to a partner how it worked before,
   and how it works now with a closure.

   ```javascript
   var checkAttendanceFunc = function(nameArr){
     var resultArr = [];
     for(var i = 0; i < nameArr.length; i++){
       resultArr.push(function(){ console.log('Is', nameArr[i], 'present?', i)})
     };
     return resultArr;
   };
   ```
   Here is a hint: http://jsfiddle.net/PuEy6/
*/



/*
[EXTRA CREDIT]: Only Once
  Write a function that takes another function as an argument
   and creates a version of the function that can only be called one time.
  Repeated calls to the modified function will have no effect,
   returning the value from the original call.

  How could you do this without using a closure?
  Is it even possible?
  How could you do this with a closure?

 Note*: This original input function should *not* have any parameters.
*/
