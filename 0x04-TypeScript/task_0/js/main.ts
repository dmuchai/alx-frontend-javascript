interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "Kisumu"
};

const studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement("table");

// Loop through students and append rows
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);
