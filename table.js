function fillTable() {
    let arr = [
        {
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
        }
    ]
    arr.forEach(function(item) {
        document.getElementById('myTable').innerHTML += '<tr>' 
        + '<td>' + item.first_name +'</td>' 
        + '<td>' + item.last_name +'</td>'
        + '<td>' + item.address +'</td>'
        + '<td>' + item.phone +'</td>'
        +'</tr>'
    })
    
}