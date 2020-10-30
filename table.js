function fillTable() {
    let arr = [
        {
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
        }
    ]

    if (document.getElementById('first_name').value.length == 0) {
        document.getElementById('warning').innerHTML = '<div class="alert alert-danger mt-2" role="alert"> Field name must have a value </div>';
        return;
    } else {
        document.getElementById('warning').innerText = '';
        
    }

    arr.forEach(function(item) {
        document.getElementById('table-body').innerHTML += '<tr>' 
        + '<td>' + item.first_name +'</td>' 
        + '<td>' + item.last_name +'</td>'
        + '<td>' + item.address +'</td>'
        + '<td>' + item.phone +'</td>'
        +'</tr>'
    })

    document.getElementById('first_name').value = '',
    document.getElementById('last_name').value = '',
    document.getElementById('address').value = '',
    document.getElementById('phone').value = ''
}
