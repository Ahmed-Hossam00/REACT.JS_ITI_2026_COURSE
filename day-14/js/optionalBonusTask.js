let counter = 1;
function printSepeator(requirment) {
  console.log(` ${counter} `.padStart(15, "=").padEnd(30, "="));
  console.log("");
  counter++;
}

const employees = [
  {
    id: 1,
    name: "Ahmed",
    age: 22,
    salary: 6000,
    department: "IT",
    active: true,
  },
  {
    id: 2,
    name: "Sara",
    age: 27,
    salary: 8500,
    department: "HR",
    active: true,
  },
  {
    id: 3,
    name: "Ali",
    age: 20,
    salary: 4500,
    department: "IT",
    active: false,
  },
  {
    id: 4,
    name: "Mona",
    age: 30,
    salary: 10000,
    department: "Finance",
    active: true,
  },
  {
    id: 5,
    name: "Omar",
    age: 24,
    salary: 7000,
    department: "Marketing",
    active: false,
  },
  {
    id: 6,
    name: "Youssef",
    age: 29,
    salary: 12000,
    department: "IT",
    active: true,
  },
];

printSepeator("================= 1 ==================");

for (let i = 0; i < employees.length; i++) {
  console.log(employees[i].name);
}

for (let employee of employees) {
  console.log(employee.name);
}

employees.forEach((employee) => {
  console.log(employee.name);
});

printSepeator("================= 2 ==================");

for (let employeeIndex in employees) {
  console.log(employeeIndex);
}

printSepeator("================= 3 ==================");

for (let i = 0; i < employees.length; i++) {
  console.log(`${employees[i].name} : ${employees[i].active}`);
}

printSepeator("================= 4 ==================");

welcome = (name) => {
  return "Welcome " + name;
};

printSepeator("================= 5 ==================");

const { name, salary } = employees[0];
console.log(`${name} : ${salary}`);

printSepeator("================= 6 ==================");

let newEmployees = [...employees];

newEmployees = newEmployees.map((employee) => {
  employee.country = "Egypt";
  return employee;
});

console.log(newEmployees);

printSepeator("================= 7 ==================");

employees.forEach((employee) => {
  console.log(
    `${employee.name} woks in ${employee.department} and earns ${employee.salary}`,
  );
});

printSepeator("================= 8 ==================");

const employeeNames = employees.map((employee) => employee.name);
const employeSalaries = employees.map((employee) => employee.salary);
const EmployeNameAndDepartment = employees.map(
  (employee) => `${employee.name} (${employee.department})`,
);

printSepeator("================= 9 ==================");

const employeesWithExtraSalary = employees.map((employee) => {
  return {
    ...employee,
    salary: employee.salary + 1000,
  };
});

printSepeator("================= 10 ==================");

const higherThan7000Employess = employees.filter(
  (employee) => employee.salary > 7000,
);
const itDepartmentEmployess = employees.filter(
  (employee) => employee.department == "IT",
);
const isActiveEmployess = employees.filter((employee) => employee.active);
const isHigherthan25Age = employees.filter((employee) => employee.age < 25);
const isItand5000 = employees.filter(
  (employee) => employee.department == "IT" && employee.salary > 5000,
);

printSepeator("================= 11 ==================");

const EmployeeWith9000Salary = employees.find(
  (employee) => employee.salary > 9000,
);
const HrEmployee = employees.find((employee) => employee.department == "HR");
const inActiveEmployee = employees.find((employee) => !employee.active);
const EmployeeWith100Id = employees.find((employee) => employee.id == 100);
console.log(EmployeeWith100Id); // employee not found (undefined returned)

printSepeator("================= 12 ==================");

const activeEmployees = employees.reduce((active, current) => {
  if (current.active) active.push(current.name);
  return active;
}, []);

console.log(activeEmployees);

const EmployeeHigher7000Salary = employees.reduce((active, current) => {
  if (current.salary > 7000) active.push(current.name);
  return active;
}, []);

console.log(EmployeeHigher7000Salary);

const EmployeesWithBonus = employees.map((employeeObj) => {
  return {
    employee: employeeObj.name,
    bonus: employeeObj.salary * 0.1,
  };
});

console.log(EmployeesWithBonus);

printSepeator("================= 13 ==================");

const firstCharacters = employees.map((employee) => {
  return employee.name[0];
});
console.log(firstCharacters);

printSepeator("================= 14 ==================");

const Part7numbers = [5, 12, 8, 20, 15, 30, 3, 40];

const higherThan10 = Part7numbers.filter((number) => number > 10);
for (let number in Part7numbers) {
  Part7numbers[number] = Part7numbers[number] * 2;
}

const firstHigherThan25 = Part7numbers.find((number) => number > 25);

Part7numbers.forEach((number) => {
  console.log(number);
});

const textNumbers = Part7numbers.map((number) => {
  return `Number is ${number}`;
});

printSepeator("================= 15 ==================");

const product = {
  id: 1,
  title: "Laptop",
  price: 25000,
  category: "Electronics",
};

for (let productKey in product) {
  console.log(productKey);
}
for (let productKey in product) {
  console.log(product[productKey]);
}

const product2 = {
  id: 1,
  title: "Laptop",
  price: 25000,
  category: "Electronics",
  stock: 15,
};

const { stock } = product2;

printSepeator("================= 16 ==================");

function dashboard() {
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter((employee) => employee.active);
  const inActiveEmployees = employees.filter((employee) => !employee.active);
  const itEmployees = employees.filter(
    (employee) => employee.department == "IT",
  );
  const highestSalary = employees.reduce((highest, current) => {
    if (current.salary > highest.salary) {
      highest = current;
    }
    return highest;
  });
  const firstHrEmploree = employees.find(
    (employee) => employee.department == "HR",
  );
  const employeeNames = employees.map((employee) => employee.name).join("\n");
  console.log(
    `
Total Employees : ${totalEmployees}

Active Employees : ${activeEmployees.length} (${activeEmployees.map((e) => e.name).join(" - ")})

Inactive Employees : ${inActiveEmployees.length} (${inActiveEmployees.map((e) => e.name).join(" - ")})

IT Employees : ${itEmployees.length} (${itEmployees.map((e) => e.name).join(" - ")})

Highest Salary : ${highestSalary.name} : $${highestSalary.salary}

First HR Employee : ${firstHrEmploree.name}

Employee Names :
${employeeNames}
    `,
  );
}

dashboard();

printSepeator("================= 17 ==================");

console.log(
  employees.reduce((prev, current) => {
    return {
      salary: prev.salary + current.salary,
    };
  }),
);

console.log(
  "avg Salary " +
    employees.reduce((prev, current, idx, arr) => {
      if (idx == arr.length - 1) return (prev + current.salary) / arr.length;
      return prev + current.salary;
    }, 0),
);

console.log(
  "highest Salary " +
    employees.reduce((prev, current) => {
      if (current.salary > prev) return current.salary;
      return prev;
    }, 0),
);

console.log(
  "Active Employees Count " +
    employees.reduce((prev, current) => {
      if (current.active) return prev + 1;
      return prev;
    }, 0),
);
