$(".edit").click(function () {
  const allRow = $(this).parents(".product_row");

  const customer = allRow.find(".customer").text();
  let productEl = allRow.find(".product");
  let currentProduct = productEl.text();

  let modalProduct1 = $("#input-product").val(currentProduct);

  $("#save-category").click(function () {
    const modalProduct = $("#input-product").val();
    // allRow.find(".product").text();
    currentProduct = modalProduct;
    productEl.text(currentProduct);
    $("#exampleModal").modal("toggle");
  });
});

$(".delete").click(function () {
  $(this).parents(".product_row").remove();
});
