// Write your solution in this file!
let employee = {}

const updateEmployeeWithKeyAndValue = (employee, key, value) => { 
  let newEmp = {...employee};
  newEmp[key] = value;
  return newEmp;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => { 
  employee[key] = value;
  return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
  let newEmp = {...employee};
  delete newEmp[key];
  return newEmp;
} 

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
}