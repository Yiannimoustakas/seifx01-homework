// const pairwise1 = (arr, sum) => {
// 	// Set sum of indices to zero
// 	let result = 0;
// 	for (let index = 0; index < arr.length; index++) {
// 		let element = arr[index];
// 		//Looping from second element and setting the start value as index + 1, so j is always behind j and they won't be the same
// 		for (let j = index + 1; j < arr.length; j++) {
// 			let otherElement = arr[j];
// 			// No need to check if ( element !== otherElement ) as index and j will never be the same
// 			if (element + otherElement === sum) {
// 				result += index + j;

// 				//set the used values to empty so they won't be re-used in the next iteration
// 				arr[index] = "";
// 				arr[j] = "";
// 			}
// 			console.log('element', element);
// 			console.log('otherElement', otherElement);
// 			console.log('arr', arr);
			
// 		}
		
// 	}
// 	return result;
// };

// // reduce() executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments:
// // Accumulator (acc)
// // Current Value (cur)
// // Current Index (idx)
// // Source Array (arr())

// const pairwise2 = (arr, sum) => {
// 	// Search array for elements that when paired, equal the second argument, then sum their indices
//   // use native reduce to collect running total of summed indices
// 	const result = arr.reduce((acc, cur, index) => {
// 		// get difference of current item so we know what value will sum to arg
// 		let theOtherElement = sum - cur;
// 		// check if theOtherElement value in rest of the array, but also make sure it doesn't match current theOtherElement index
// 		console.log('arr', arr)
// 		if ((arr.indexOf(theOtherElement) !== -1) && arr.indexOf(theOtherElement) !== index) {
// 			let total = index + arr.indexOf(theOtherElement);
			
// 			// remove current index from the array
// 			arr.splice(index, 1, "")
//       // remove the other matched element from the array
// 			arr.splice(arr.indexOf(theOtherElement), 1, "")

// 			//return the running total back to reduce for next item
// 			return acc + total;
// 		}
// 		// simply return previous total if no operations needed
// 		return acc;
// 	}, 0);

// 	return result;
// }

// console.log(pairwise1([7, 9, 11, 13, 15], 20)) // => 6
// console.log(pairwise1([1, 4, 2, 3, 0, 5], 7)); // => 11
// console.log(pairwise1([1, 3, 2, 4], 4)); // => 1
// console.log(pairwise1([0, 0, 0, 0, 1, 1], 1)); // => 10

// console.log(pairwise2([7, 9, 11, 13, 15], 20)) // => 6
// console.log(pairwise2([1, 4, 2, 3, 0, 5], 7)); // => 11
// console.log(pairwise2([1, 3, 2, 4], 4)); // => 1
// console.log(pairwise2([0, 0, 0, 0, 1, 1], 1)); // => 10

const encoded = (input) => {
	let count = 0;
	return input.split('').reduce((acc, cur, index, arr) => {
		if (cur === arr[index + 1]) {
			count += 1;
		} else if (cur !== arr[index + 1]) {
			count += 1;
			acc.push({run: count, value: cur});
			count = 0;
		}
		return acc;
	}, [])
};

console.log(encoded('AAAABBBBCCCCDDDD'));