//*******************Rest Parametre*******************//
let showProducts = function (id, ...products) {
    console.log(id);
    console.log(products);
  };
  
  //console.log(typeof showProducts)
  //showProducts(10, "Test",["Elma", "Armut", "Karpuz"],["deneme", "deneme2"]);
  
  //*******************SPREAD*******************//
  let points = [3,5,14,8,60]
  
  // console.log(Math.max(3,5,14,8,60))
  // console.log(...points)
  // console.log(Math.max(...points))
  
  // console.log("------------------------------------")
  
  //console.log(..."ABC","D",..."EFG","H")
  
  //*******************Destructuring*******************//
  
  //for List
  let populations = [10000,20000,30000,[40000,10000],"Ankara"]

  console.log(populations);
  
  let [small,medium,high,[veryHigh,maximum]] = populations;
  
  console.log(small);
  console.log(medium);
  console.log(high);
  console.log(veryHigh);
  console.log(maximum);
  
  
  function someFunction([small1],number){
      console.log(small1);
  }
  someFunction(populations);
  
  // for Object
  let category = {id:1, name:"İçecek"}
  console.log(category.id);
  console.log(category["name"])
  
  let {id,name} = category
  console.log(id);
  console.log(name);
  