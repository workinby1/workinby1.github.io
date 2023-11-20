/* 2.	In the following code the transactionsDB is publicly accessible to any code that has access to the bank object.
Instead of using the object literal for bank, write a makeBank function that will encapsulate and return the bank object.
Make the transactionsDB private by making it a local variable in the makeBank function instead of a property on the bank object.
*/
export function makeBank() {
    //implement this
    const transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 1, customerTransactions: [10, 10, -10] },
        { customerId: 1, customerTransactions: [5, -5, 55] },
    ];
    return {
        getBalance: function (id) {
            const customer = transactionsDB.find((customer) => customer.customerId === id);
            let balance = 0;
            if (customer) {
                for (const trans of customer.customerTransactions) {
                    balance += trans;
                }
            }
            return balance;
        },
        bankBalance: function () {
            let totalBalance = 0;
            for (const customer of transactionsDB) {
                for (const trans of customer.customerTransactions) {
                    totalBalance += trans;
                }
            }
            return totalBalance;
        }
    };
}
