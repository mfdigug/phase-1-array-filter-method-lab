function findMatching(drivers, driverName) {
  return drivers.filter(function (driver){
  if (driverName.toLowerCase() === driver.toLowerCase()) { 
       return driver; 
     } 
  });
}


function fuzzyMatch(drivers, someLetters) {
return drivers.filter(function (driver) {
  if (driver.startsWith(someLetters)) { 
    return driver; 
  } 
});
}



function matchName(drivers, name) {

  return drivers.filter(function (driver){
    if (driver.name === name){
      return driver
    }
  })
}
