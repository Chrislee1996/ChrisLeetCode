/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    
    let result = []
    
    for (let i = 0 ; i < transactions.length; i++) {
        let [name, time, amount, city] = transactions[i].split(',')
        if (amount > 1000) {
            result.push(transactions[i])
            continue
        }
        for (let j = 0; j < transactions.length; j++) {
            if (j !== i) {
                let [name1, time1, amount1, city1] = transactions[j].split(",");
                 if (name1==name && Math.abs(time1-time)<=60 && city!==city1){
                    result.push(transactions[i]);
                    break
                }
            }
        }    
    }
    return result
};