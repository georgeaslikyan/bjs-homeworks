"use strict"
const getCountMonth = (nowData, overDate) => {
  const nowYear = nowData.getFullYear();
  const overYear = overDate.getFullYear();
  const diffYear = overYear - nowYear;
  const nowMonth = nowData.getMonth();
  const overMonth = overDate.getMonth();
  const diffMonth = overMonth - nowMonth;
  return (diffYear === 0) ? diffMonth : (diffYear * 12) + diffMonth;
  };
  
  function calculateTotalMortgage(percent, contribution, amount, date) {
  const nowData = new Date();
  const months = getCountMonth(nowData, date);
  const preparedPercent = percent / 100;
  const P = preparedPercent / 12;
  const body = amount - contribution;
  const monthlyPayment = body * (P + P / (((1 + P) ** months) - 1));
  const result = months * monthlyPayment;
  return Number(result.toFixed(2));
  };

function getGreeting(name) {
  let greeting = `Привет, мир! Меня зовут ${name}`;
  let noname = `Привет, мир! Меня зовут Аноним`;

  if (name == undefined) {
    return noname;
  } else if (name == null) {
    return noname;
  } else if (name == "") {
    return noname;
  } else {
    return greeting;
  }
};
