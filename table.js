let arr = [
    {
        first_name: 'Test',
        last_name: 'Last',
        address: 'Test 1',
        phone: '123'
    },
    {
        first_name: 'Hamo',
        last_name: 'Hapic',
        address: 'Test 12',
        phone: '1234'
    },
    {
        first_name: 'Baba',
        last_name: 'Babatunde',
        address: 'Test 122',
        phone: '123456'
    }
];

function fillTable() {
    arr.forEach(function(item) {
        document.getElementById('table').innerHTML += '<tr>' 
        + '<td>' + item.first_name +'</td>' 
        + '<td>' + item.last_name +'</td>'
        + '<td>' + item.address +'</td>'
        + '<td>' + item.phone +'</td>'
        +'</tr>'
    })
    
}