// CREATE AN ARRAY OF EMPLOYEES
let empArray = [
    [12345678, 'John Smith', 1234, 'john@company.com', 'Engineering'],
    [23456789, 'Mary Johnson', 2345, 'mary@company.com', 'Marketing'],
    [34567890, 'Bob Wilson', 3456, 'bob@company.com', 'QA'],
    [45678901, 'Sarah Davis', 4567, 'sarah@company.com', 'Sales'],
    [56789012, 'Mike Brown', 5678, 'mike@company.com', 'Administrative']
];

// GET DOM ELEMENTS
const form = document.getElementById('addForm');
const empTable = document.getElementById('empTable');
const empCount = document.getElementById('empCount');

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !== null) {
    empArray = JSON.parse(localStorage.getItem('employees'));
}

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empID = parseInt(document.getElementById('id').value);
    let empName = document.getElementById('name').value;
    let empExt = parseInt(document.getElementById('extension').value);
    let empEmail = document.getElementById('email').value;
    let empDept = document.getElementById('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [empID, empName, empExt, empEmail, empDept];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    empArray.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-danger')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR
            let rowIndex = e.target.parentNode.parentNode.rowIndex;

            // REMOVE EMPLOYEE FROM ARRAY
            empArray.splice(rowIndex - 1, 1);

            // BUILD THE GRID
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.getElementsByTagName('tbody')[0].remove();

    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of empArray) {
        tbody.innerHTML += `
            <tr>
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td>${employee[3]}</td>
                <td>${employee[4]}</td>
                <td><button class="btn btn-danger btn-sm float-right">X</button></td>
            </tr>
        `;
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);

    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${empArray.length})`;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(empArray));
}
