var test = [];


function fillTable() {
    
    let arr = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value
    }
    test.push(arr);
    for (var i = 0; i < test.length; i++){
        var count = i;
    }


    if (document.getElementById('first_name').value.length == 0) {
        document.getElementById('warning').innerHTML = '<div class="alert alert-danger mt-2" role="alert"> Field name must have a value </div>';
        return;
    } else {
        document.getElementById('warning').innerText = '';
    }
    

    document.getElementById('table-body').innerHTML += '<tr id="'+ count + '">' 
        + '<td>' + document.getElementById('first_name').value +'</td>' 
        + '<td>' + document.getElementById('last_name').value +'</td>'
        + '<td>' + document.getElementById('address').value +'</td>'
        + '<td>' + document.getElementById('phone').value +'</td>'
        + '<td>' + '<button type="button" class="btn btn-danger mr-2" onclick="deleteRow(' + count + ');">Delete</button>'
        + '<button type="button"class="btn btn-success">Edit</button></td>'
        +'</tr>'
        

    let reset = document.getElementsByClassName('reset');
    for (let i = 0; i < reset.length; i++){
        reset[i].value = '';
    }
}


function deleteRow(id) {
    document.getElementById(id).remove();
    test.splice(id, 1);
}
