let student = [];

function AttendanceSubmitted(){
    const name = document.getElementById('stname').value;
    const id = document.getElementById('stid').value;
    const attendance = document.getElementById('At').value;

    if(name && id && attendance){
        student.push({ name, id, attendance });
        alert(`Attendance record:\n Student ${name} \n Id ${id} \n Attendance ${attendance}`);
        clearInput();
        displayStudents();
    }
    else{
        alert('Attendance not Submitted');
    }
}

function displayStudents(){

    let output = '';

    student.forEach((s, index) => {

        output += `
        <p>
            Name: ${s.name}
            Id: ${s.id}
            Attendance: ${s.attendance}

            <button onclick="updateStudent(${index})">
            Edit
            </button>

            <button onclick="deleteStudent(${index})">
            Delete
            </button>

        </p>
        `;

    });

    document.getElementById("display").innerHTML = output;

}

function updateStudent(index){
    let newName = prompt("Enter a new name");
    if(newName){
        student[index].name = newName;
        displayStudents();
    }
}

function deleteStudent(index){
    student.splice(index, 1);
    displayStudents();
}

function clearInput(){

    document.getElementById("stname").value = "";
    document.getElementById("stid").value = "";
    document.getElementById("At").value = "";

}
