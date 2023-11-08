// export const calculator = {
// };  // implement this
export const calculator = {
    operand1: 0,
    operand2: 0,
    setValues(a, b) {
        this.operand1 = a;
        this.operand2 = b;
    },
    sum() {
        return this.operand1 + this.operand2;
    },
    mul() {
        return this.operand1 * this.operand2;
    },
};
export default calculator;
