function getFirstSelector(selector){
  const element = document.querySelector(selector);
  return element;
}

function nestedTarget(target){
  const element = document.querySelector('#nested .target');
  return element;
}


function increaseRankBy(n){
  let number = parseInt(n);
  const element = document.querySelectorAll('.ranked-list')
  let i;
    for (i = 0; i < element.length; i++) {
      return element * number;
    }
}

function deepestChild(){
  const element = document.querySelectorAll('div#grand-node')
  
}


// function driverNamesWithRevenueOver(driver, revenue){
//   return driversWithRevenueOver(driver, revenue).map(function (name) { return name.name; });
