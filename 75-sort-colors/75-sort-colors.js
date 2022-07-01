/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    

    
    let leftPointer = 0
        let index = 0
    let rightPointer = nums.length-1
    while(index <= rightPointer) {
        if (nums[index] === 0 ) {
            swap(leftPointer, index)
            index++
            leftPointer++
        } 
        else if (nums[index] === 1) {
            index++
        } else if (nums[index] === 2) {
            swap(index, rightPointer)
            rightPointer--
        }
    }
    
    function swap(a,b) {
        [nums[b], nums[a]] = [nums[a], nums[b]]
    }
}



//     let low=0, mid=0, high=arr.length-1


//     while ( mid <= high ) { 
    
//         if( arr[mid] == 0 ){ 
//             swap( low, mid ); 
//             mid++; 
//             low++ ;
//         } 
    
//         else if( arr[mid] == 1 ) {   
//             mid++ ;  
//         } 


//         else if( arr[mid] == 2 ) {
//             swap( mid,high ); 
//             high--  
//         } 
//     }


//     function swap(a,b) {
//         [arr[b], arr[a]] = [arr[a], arr[b]]
//     }


