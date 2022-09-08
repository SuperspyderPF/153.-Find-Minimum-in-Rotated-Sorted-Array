var findMin = function(nums) {
    var left = 0, right = nums.length -1, minimum = Infinity
    while(left <= right){
        const mid = Math.floor((left + right) /2)
        if(nums[left] <= nums[mid]){
            minimum = Math.min(minimum, nums[left])
            left = mid + 1
        } else {
            minimum = Math.min(minimum, nums[mid])
            right = mid - 1
        }
    }
    return minimum
    
};