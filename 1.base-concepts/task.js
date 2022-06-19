"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d;
  d = b ** 2 - 4 * a * c;

  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push(((-b - Math.sqrt(d)) / 2) * a);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let mortgageCount = amount - contribution;
  if (isNaN(amount)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  if (isNaN(contribution)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  }
  let P = percent / 1200;
  if (isNaN(percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
   }
  let months = monthsDiff(date);
  let pay = mortgageCount * (P + (P / (((1 + P)**months) - 1)));
  totalAmount = Math.round((pay*months)*100)/100;
  console.log('Месяцев выплачивать: ' + months);
  console.log(totalAmount);
  return totalAmount;
}

function monthsDiff(date) {
  let mortgageStartDate = new Date();
  let mortgageEndDate = new Date(date);
  let startYear = mortgageStartDate.getFullYear();
  let endYear = mortgageEndDate.getFullYear();
  let startMonth = mortgageStartDate.getMonth() + 1;
  let endMonth = mortgageEndDate.getMonth() + 1;
  let monthCount = 0;
  if (startYear === endYear) {
    monthCount = Math.abs(endMonth - startMonth);
  } else {
    monthCount = (endYear - startYear) * 12 - startMonth + endMonth;
  }
  return monthCount;
}
