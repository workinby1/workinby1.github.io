
export   { sumTo, factorial, fibonacci
    // , outputList, outputListLoop, reverseList, reverseListLoop, TreeNode, sumTreeValues
}

function sumTo(n: number): number {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

function factorial(n: number): number {
if(n===1 || n===0){
    return n;
}else{
    return n * factorial(n-1)
}
}


// type TreeNode = {
//     value: number;
//     left: TreeNode | null;
//     right: TreeNode | null;
// }


function fibonacci (num:number):number{
if (num<=1){
    return num;
}else{
    return fibonacci(num-1) + fibonacci(num-2)
}
}