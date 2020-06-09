let myAccount = {
    name: 'Berkay',
    expenses: 0,
    income: 0
}
let addIncome = function(account,incomeAmount){
    account.income += incomeAmount 
    console.log(`Added income of ${incomeAmount}`)
    accountSummary(account)
}
let addExpense = function(account,expenseAmount){
    account.expenses += expenseAmount
    console.log(`Added expense of ${expenseAmount}`)
    accountSummary(account)
}
let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
    console.log(`${account.name} account has reseted`)
    accountSummary(account)
}
let accountSummary = function(account){
    let savings = account.income - account.expenses
    console.log(`Account summary of ${account.name} \n Expenses: ${account.expenses} \n Income: ${account.income} \n Currently ${account.name} have ${savings}`)
}

addIncome(myAccount,1000)