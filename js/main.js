$(document).ready(function () {
    $('#table_categories').DataTable({
        "order": [[0, "asc"]]
    });
});

$(document).ready(function () {
    $('#table_products').DataTable({
        "order": [[1, "asc"]]
    });
});

$(document).ready(function () {
    $('#table_orders').DataTable({
        "order": [[0, "asc"]]
    });
});

$(".delete").click(function () {
    $(this).parents(".product_row").remove();
  });
  
$('#add-category').click(function () {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    
    if (($('#input-title').val() != '') && ($('#input-description').val() != '')) {
        const tableElement = $('#table_categories');
    const newTitle = $('#input-title').val();
    const newDescription = $('#input-description').val();
    const rowCount = tableElement.find('tr').length;
    const newEntry = `
    <tr>
        <th scope="row">${rowCount + 1}</th>
        <td> ${newTitle} </td>
        <td> ${newDescription} </td>
        <td class="text-end">
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger">Delete</button>
         </td>
     </tr>
    `;
    tableElement.find('tbody').append(newEntry);
    $('#input-title').val('');
    $('#input-description').val('');
    $('#createCategoryModal').modal('toggle');
    }
})
