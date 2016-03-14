/*
/ Merge Sort is a divide and conquer alogirthm that 
/ sorts an array in ascending order with an O(nlogn) runtime. 
/ Currently this is buggy, and I need to refactor it.  
*/

function merge(arr1, arr2) {
	var sortedArr = [];
	var arr1Index = 0; 
	var arr2Index = 0; 
	console.log(arr1, arr2);

	while(arr1Index<arr1.length && arr2Index<arr2.length){
		if(arr1[arr1Index] < arr2[arr2Index]) {
			sortedArr.push(arr1[arr1Index]); 
			arr1Index++; 
		} else if (arr2[arr2Index] < arr1[arr1Index]) {
			sortedArr.push(arr2[arr2Index]); 
			arr2Index++;
		}
	}

	console.log(sortedArr);

	return sortedArr.concat(arr1.slice(arr1Index)).concat(arr2.slice(arr2Index)); 
}

function mergeSort(arr) {


	var midPoint = Math.ceil(arr.length/2);
	arr1 = arr.slice(0,midPoint); 
	arr2 = arr.slice(midPoint, arr.length); 
	
	if(arr.length < 2) {
		return arr; 
	}

	console.log("arr1: ", arr1, "arr2: ", arr2);

	return merge(mergeSort(arr1), mergeSort(arr2));
}

var arr = [1,7,5,9,3,5,12,8,4];
console.log(mergeSort(arr));