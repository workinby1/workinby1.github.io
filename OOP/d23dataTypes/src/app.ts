/**
 *
 * @param {*} str
 */
export function ucFirst(str:string):string {

  let eachWord = str.split(" ")
  let capitalizedwords = [];
  if(str.length ===0){
    return "";
  }
  for(let i=  0; i<eachWord.length; i++){
    let word = eachWord[i]
    let eachletter = word.split("");
    capitalizedwords.push(eachletter[0].toUpperCase() + eachletter.slice(1).join(""))
  }
return capitalizedwords.join(" ");
  
}

/**
 *
 * @param {*} str
 */
export function checkSpam(str: string): boolean {
  const spamKeyWords = ["buy ViAgRA now", "free xxxxx"];
  const lowerCaseStr = str.toLowerCase();

  for (let i = 0; i < spamKeyWords.length; i++) {
    if (lowerCaseStr.includes(spamKeyWords[i])) {
      return true;
    }
  }
  return false;
}

/**
 *
 * @param {*} str
 * @param {*} maxlength
 */
export function truncate(str:any, maxlength:number) {


    if(str.length> maxlength){
      return str.slice(0, maxlength - 1) + "…";
    }else{
      return str;
    }
  }


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr:number[]):number {

  let maxSum = 0;
  let currentSum = 0;
  for(let num of arr){
    currentSum = Math.max(0, currentSum + num);
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum;
}

export function camelize(str:string) {

  const words = str.split("-")
  let camelized = words[0];
  for(let i=1; i<words.length; i++){
    camelized += words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }
  return camelized
}

export function extractCurrencyValue(str:any):number {
 let result =  str.slice(1);
 return Number(result)
}
