function factoryFactory (type) {
 return function factory(make, model,year) {
    this.type = type
    this.make = make
    this.model = model
    this.year = year
  

}

}
let bicycle = factoryFactory('bicycle factory')
let car = factoryFactory('car factory')
let boat = factoryFactory('boat factory')
let blimp = factoryFactory('blimp factory')
let train = factoryFactory('train factory')

let bicycle1 = new bicycle ('op','A2',2015);
let car1= new car ('bmw','aaa',2020);
let boat1= new boat ('titanic','aaa',1980);
let blimp1 = new blimp ('blop','a99a',1990);
let train1= new train ('bvg','naa',1800);

let vehicles = [];
vehicles.push(bicycle1, car1, boat1, blimp1,train1);
for(vehicle in vehicles){
console.log(vehicles[vehicle]);
}

console.log(typeof bicycle);
console.log(typeof bicycle1);


console.log(typeof car);
console.log(typeof car1);



console.log(typeof boat);
console.log(typeof boat1);


console.log(typeof blimp);
console.log(typeof blimp1);

console.log(typeof  train);
console.log(typeof  train1);





// console.log(bicycle1,car1,boat1,blimp1,train1);
// console.log(vehicles);



