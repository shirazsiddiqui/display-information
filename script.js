var selectedRow = null

function onFormSubmit() {
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["age"] = document.getElementById("age").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["gender"] = document.getElementById("gender").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
   console.log(data);
    
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.dob;
    cell4 = newRow.insertCell(3);
       if(data.gender==1){
        cell4.innerHTML = "Male";
       } else if(data.gender==2){
        cell4.innerHTML = "Female";
       }
		
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = ` <button  onClick="onDelete(this)">Delete</button>`;
}


//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}


//Reset the data
function resetForm() {
  document.getElementById("productCode").value = '';
  document.getElementById("product").value = '';
  document.getElementById("qty").value = '';
  document.getElementById("perPrice").value = '';
  selectedRow = null;
}
