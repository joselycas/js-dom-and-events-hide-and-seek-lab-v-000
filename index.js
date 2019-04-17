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
  const elements = document.querySelectorAll('.ranked-list')
    for (let i = 0; i < elements.length; i++) {
      let children = elements[i].children
      for (let j = 0; j < children.length; j++){
       children[j].innerHTML =  parseInt(children[j].innerHTML) + number

      }
    }
}

function deepestChild(){
  const element = document.getElementById('grand-node').querySelector('div')

  let child = element.children[0]
  let next;
    while (child){
      next = child
      child = next.children[0]
    }
    return next
}


// function driverNamesWithRevenueOver(driver, revenue){
//   return driversWithRevenueOver(driver, revenue).map(function (name) { return name.name; });
