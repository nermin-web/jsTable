var test = [];
var count = 1;
function fillTable() {
    
    let arr = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value
    }

    test.push(arr);
    for (var i = 0; i < test.length; i++){
        var index = i;
    }


    if (document.getElementById('first_name').value.length == 0) {
        document.getElementById('warning').innerHTML = '<div class="alert alert-danger mt-2" role="alert"> Field name must have a value </div>';
        return;
    } else {
        document.getElementById('warning').innerText = '';
        count++;
    }
    

    document.getElementById('table-body').innerHTML += '<tr id="' + index + '">' 
        + '<td class="align-middle" id="table_first_name' + count + '">' + arr.first_name +'</td>' 
        + '<td class="align-middle" id="table_last_name' + count + '">' + arr.last_name +'</td>'
        + '<td class="align-middle" id="table_address' + count + '">' + arr.address +'</td>'
        + '<td class="align-middle" id="table_phone' + count + '">' + arr.phone +'</td>'
        + '<td class="align-middle">' + '<button type="button" class="btn btn-danger mr-2" onclick="deleteRow(' + index + ');">Delete</button>'
        + '<button type="button"class="btn btn-success" onclick="editRow('+ count + ');">Edit</button></td></tr>'
        // Edit
        + '<tr style="display: none;" id="'+ count + '">'
        + '<td class="align-middle"><input type="text" class="form-control" placeholder="First Name" id="edit_first_name' + count + '"></td>' 
        + '<td class="align-middle"><input type="text" class="form-control" placeholder="Last Name" id="edit_last_name' + count + '"></td>' 
        + '<td class="align-middle"><input type="text" class="form-control" placeholder="Address" id="edit_address' + count + '"></td>' 
        + '<td class="align-middle"><input type="text" class="form-control" placeholder="Phone" id="edit_phone' + count + '"></td>' 
        + '<td class="align-middle">' + '<button type="button" class="btn btn-primary mr-2" onclick="updateRow(' + count + ');">Update</button></td><tr>'
    
    let reset = document.getElementsByClassName('reset');
    for (let i = 0; i < reset.length; i++){
    reset[i].value = '';
    }
}


function deleteRow(id) {
    document.getElementById(id).remove();
    test.splice(id, 1);
}



function editRow(num) {
    document.getElementById(num).style.display = "contents";
}

function updateRow(input_id) {

    let firstName = document.getElementById('table_first_name' + input_id);
    let lastName = document.getElementById('table_last_name' + input_id);
    let phone = document.getElementById('table_address' + input_id);
    let address = document.getElementById('table_phone' + input_id);
    
    let firstNameValue = document.getElementById('table_first_name' + input_id).innerText;
    let lastNameValue = document.getElementById('table_last_name' + input_id).innerText;
    let phoneValue = document.getElementById('table_address' + input_id).innerText;
    let addressValue = document.getElementById('table_phone' + input_id).innerText;
    
    let editFirstName = document.getElementById('edit_first_name' + input_id).value;
    let editLastName = document.getElementById('edit_last_name' + input_id).value;
    let editPhone = document.getElementById('edit_address' + input_id).value;
    let editAddress = document.getElementById('edit_phone' + input_id).value;

    editFirstName.length == 0 ? firstName.innerText = firstNameValue : firstName.innerText = editFirstName;
    editLastName.length == 0 ? lastName.innerText = lastNameValue : lastName.innerText = editLastName;
    editPhone.length == 0 ? phone.innerText = phoneValue : phone.innerText = editPhone;
    editAddress.length == 0 ? address.innerText = addressValue : address.innerText = editAddress;
    
    document.getElementById(input_id).style.display = "none";
}