require('datejs');

function combineUsers(...args) {
  // Step 2: initialize the return object
  const combinedObject = { users: [] };

  // Steps 3 & 4: loop through each array and merge with spread
  for (const userArray of args) {
    combinedObject.users = [...combinedObject.users, ...userArray];
  }

  // Step 5: add today's date as M/d/yyyy using datejs
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: return the object
  return combinedObject;
}

module.exports = combineUsers;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};