function countTotal(productEl, priceEl, vatEl) {
  let totalPriceEl = $(this).parents(".product_row").find(".total");
  //   console.log(totalPriceEl.text());

  const vat = parseFloat(
    (productEl.text() * priceEl.text() * vatEl.text()) / 100
  );
  const endPrice = parseFloat(productEl.text() * priceEl.text() + vat).toFixed(
    2
  );
  totalPriceEl.text(endPrice);
  console.log(endPrice);
  console.log(typeof endPrice);
}

$(".edit").click(function () {
  const allRow = $(this).parents(".product_row");

  let customerEl = allRow.find(".customer p");
  let currentCustomer = customerEl.text();

  let productEl = allRow.find(".product");
  let currentProduct = productEl.text();

  let priceEl = allRow.find(".price");
  let currentPrice = priceEl.text();

  let vatEl = allRow.find(".vat");
  let currentVat = vatEl.text();

  let modalCustomer = $("#input-customer").val(currentCustomer);
  let modalProduct = $("#input-product").val(currentProduct);
  let modalPrice = $("#input-price").val(currentPrice);
  const modalVat = $("#input-vat").val(currentVat);

  $("#save-category").click(function () {
    customerEl.text(modalCustomer.val());
    productEl.text(modalProduct.val());
    priceEl.text(modalPrice.val());
    vatEl.text(modalVat.val());

    countTotal(productEl, priceEl, vatEl);

    $("#exampleModal").modal("toggle");
  });
});

$(".delete").click(function () {
  $(this).parents(".product_row").remove();
});
