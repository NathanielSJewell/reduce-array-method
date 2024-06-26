/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

//The callback function should return the currentValue[key] pushed to the accumulator array.

// accepts two arguments return push to accumulator if current object exists.
function extractValue(arr, key) {
	let newVal = arr.reduce(function(newArray, currentItem) {
		newArray.push(currentItem[key]);
		return newArray;
	}, []);
	return newVal;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

//How does reduce work?
//Reduce iterates an array, and runs a callback function over each array item, what the callback function returns is stored in accumulator. Save reduce to a variable and return that variable. Accumulator is updated each iteration, and final accumulator value is returned at the end of the process.

//Hypothesis 1: Turn the passed string into an array. I need to make accumulator an object, that accumulates properties if a certain condition is met. Accumulator should add properties untl the entire arrayed string is checked.

function vowelCount(str) {
	const vowels = 'aeiou';
	return str.split('').reduce(function(acc, next) {
		let lowerCased = next.toLowerCase();
		if (vowels.indexOf(lowerCased) !== -1) {
			if (acc[lowerCased]) {
				acc[lowerCased]++;
			} else {
				acc[lowerCased] = 1;
			}
		}
		return acc;
	}, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

//How can I write a function that accepts an array of objects, a key,and a value and returns the array of objects passed to it with each object now including the key and value passed to the function?

//Iterate through the array of objects using reduce. Reduce will contain an accumulator and a current value. Accumulator will be first set to an empty array. CurrentVlaue will be the first object, and I'll set another property of accumulator[key] = value. return the new array of objects back each time to accumulator, then return the final accumulation.

//Passing in an array of objects should return the same array of objects with the new properties added to it.

function addKeyAndValue(arr, key, value) {
	return arr.reduce(function(acc, next, idx) {
		acc[idx][key] = value;
		return acc;
	}, arr);
}

//How they did theirs. acc is first equal to the passed in array of objects. they didn't use the current value parameter. they used the index. There are four parameters that reduce uses : accumulator, currentValue, index, and array.The acc with an index of the first object in the array (which is zero) is given another key and value of what was passed in. That array object is returned, and acc is now a changed object that is going to be added to another object each iteration.

//Iterate through the array of objects using reduce.

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

//Hypothesis 1: I need to initialize and empty array and return that array in partition. largeArr[0] = another array, and largeArr[1] = another array. use arr.reduce(function(val){}, . The callback function will be is even. arr = [1, 2, 3, 4, 5, 6])

//Should accept an array [1, 2, 3, 4, 5, 6] and return [[1, 3, 5], [2, 4, 6]];

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, cb) {
	return arr.reduce(
		function(acc, next) {
			if (cb(next)) {
				acc[0].push(next);
			} else {
				acc[1].push(next);
			}
			return acc;
		},
		[ [], [] ]
	);
}
