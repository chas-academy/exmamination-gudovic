const desc = document.getElementById('desc')
const amount = document.getElementById('amount')
const incomeBtn = document.getElementById('incomeBtn')
const expenseBtn = document.getElementById('expenseBtn')
const incomeList = document.getElementById('incomeList')
const expenseList = document.getElementById('expenseList')
const balance = document.getElementById('balance')
const transactionList = document.getElementById('transactionList')

const incomeArray = []
const expenseArray = []

incomeBtn.addEventListener('click', () => {
    incomeList.textContent = "";
    let amountInput = Number(amount.value);
    let descInput = desc.value;
    let newIncome = { desc: descInput, amount: amountInput, type: "Inkomst" };
    incomeArray.push(newIncome);

    desc.value = "";
    amount.value = "";

    for (let inkomst of incomeArray) {
    let incomeItem = document.createElement('li');
    incomeItem.textContent = `${inkomst.desc} - ${inkomst.amount} kr (${inkomst.type})`;
    incomeList.appendChild(incomeItem);
    }
    calcSaldo(); 
    transactionLister();
})

expenseBtn.addEventListener('click', () => {
    expenseList.textContent = "";

    let amountInput = Number(amount.value);
    let descInput = desc.value;
    let newExpense = { desc: descInput, amount: amountInput, type: "Utgift" };
    expenseArray.push(newExpense);

    desc.value = "";
    amount.value = "";

    for (let utgift of expenseArray) {
    let expenseItem = document.createElement('li');
    expenseItem.textContent = `${utgift.desc} - ${utgift.amount} kr (${utgift.type})`;
    expenseList.appendChild(expenseItem);
    }
    calcSaldo();
    transactionLister();
})

function transactionLister () {
    if (!transactionList) return;
    transactionList.innerHTML = "";

    for (let inkomst of incomeArray) {
        let transactionItem = document.createElement('li');
        transactionItem.textContent = `${inkomst.desc} - ${inkomst.amount} kr (${inkomst.type})`;
        transactionList.appendChild(transactionItem);
    }
    for (let utgift of expenseArray) {
        let transactionItem = document.createElement('li');
        transactionItem.textContent = `${utgift.desc} - ${utgift.amount} kr (${utgift.type})`;
        transactionList.appendChild(transactionItem);
    }

}

function calcSaldo () {
    let incomeSum = 0; 
    let expenseSum = 0;

    for (let inkomst of incomeArray) {
        incomeSum += Number(inkomst.amount);
    }

    for (let utgift of expenseArray) {
        expenseSum += Number(utgift.amount);
    }

    let saldoSum = 0;
    saldoSum = incomeSum - expenseSum;
    balance.textContent = saldoSum;
}

