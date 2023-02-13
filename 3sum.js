/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let ans = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {               // 0             1         
        let j = i + 1;                                    // 1             2            
        let k = nums.length - 1;                          // 5             5     

        while (j < k) {                                   //  t  t  t  t f t
            sum = nums[i] + nums[j] + nums[k];            // -3 -3 -2 -1   0                     
            if (sum === 0) {                              //  f  f  f  f  t                      
                ans.push([nums[i], nums[j], nums[k]]);    //  .  .  .  .                        
                j++;                                      //  .  .  .  .                        
                while (j < k && nums[j] === nums[j-1]) {  //  .  .  .  .                        
                    j++;                                  //  .  .  .  .                        
                }                                         //  .  .  .  .                        
            } else if (sum < 0) {                         //  t  t  t  t                        
                j++;                                      //  2  3  4  5                    
            } else {                                      //                            
                k--;                                      //                                    
            }                                             //                                
        } 
        while(nums[i] === nums[i+1]) {
            i++;
        }                                                //                                    
    }                                                                   
    return ans;
};