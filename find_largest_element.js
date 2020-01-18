let sample_array = [22, 1, 71, 100, 3, 5, 80];

// anonymous function
let find_largest_element = function(arr) {

    // set the initial largest variable to be the first element
    let current_largest_element = arr[0];

    for (let i = 0; i < arr.length; i++) {

        // if the current index is larger than the current largest variable
        if (arr[i] > current_largest_element) {

            // set the largest variable to be that current index
            current_largest_element = arr[i];
        }
    }

    return current_largest_element;
}

let largest_element = find_largest_element(sample_array);

console.log(`The largest element in the array is: ${largest_element}`);
// The largest element in the array is: 100