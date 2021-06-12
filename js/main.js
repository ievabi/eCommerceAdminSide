$(document).ready(function () {
    $('#table_categories').DataTable({
        "order": [[0, "desc"]]
    });
});

$(document).ready(function () {
    $('#table_products').DataTable({
        "order": [[0, "desc"]]
    });
});

$(document).ready(function () {
    $('#table_orders').DataTable({
        "order": [[0, "desc"]]
    });
});



$('#save-category').click(function () {
    const tableElement = $('#table_categories');
    const newTitle = $('#input-title').value ;
    const newDescription = $('#input-description').value;
    const rowCount = tableElement.find('tr').length;
    const newEntry = `
    <tr>
        <th scope="row">${rowCount+1}</th>
        <td> ${newTitle} </td>
        <td> ${newDescription} </td>
        <td class="text-end">
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger">Delete</button>
         </td>
     </tr>
    `;
    tableElement.find('tbody').append(newEntry);

})