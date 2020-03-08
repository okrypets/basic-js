let i = 1;
module.exports = 
class DepthCalculator {
    calculateDepth(arr) {  
        let result;      
        if (Array.isArray(arr) && arr.find(it => Array.isArray(it))) {            
          i++
          return this.calculateDepth(arr.flat())
        } else {
          result = i
          i = 1
          return result
        }        
    }   
};