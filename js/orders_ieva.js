function countTotal(productEl, priceEl) {
    let total = allRow.find(".total");
    let currentTotal = total.text();

    let totalPriceEl = $(this).parents(".product_row").find(".total");
    //   console.log(totalPriceEl.text());

    const vat = parseFloat(
        productEl.text() * priceEl.text() * 0.21
    );
    const endPrice = parseFloat(productEl.text() * priceEl.text() + vat).toFixed(
        2
    );
    currentTotal.val(endPrice);
    currentVat.val(vat);
}
// console.log(endPrice);
// console.log(typeof endPrice);

// btn edit
$(".edit").click(function () {
    const allRow = $(this).parents(".product_row");

    //page elements values
    let nameEl = allRow.find(".name");
    let currentName = nameEl.text();

    let streetEl = allRow.find(".street");
    let currentStreet = streetEl.text();

    let cityEl = allRow.find(".city");
    let currentCity = cityEl.text();

    let countryEl = allRow.find(".country");
    let currentCountry = countryEl.text();

    let productEl = allRow.find(".product");
    let currentProduct = productEl.text();

    let priceEl = allRow.find(".price");
    let currentPrice = priceEl.text();

    let vatEl = allRow.find(".vat");
    let currentVat = vatEl.text();

    let total = allRow.find(".total");
    let currentTotal = total.text();

    // make modal window with current element values
    let modalName = $("#input-name").val(currentName);
    let modalStreet = $("#input-street").val(currentStreet);
    let modalCity = $("#input-city").val(currentCity);
    let modalCountry = $("#input-country").val(currentCountry);

    let modalProduct = $("#input-product").val(currentProduct);
    let modalPrice = $("#input-price").val(currentPrice);
    const modalVat = $("#input-vat").val(currentVat);

    // update elements values
    $("#save-category").click(function () {
        nameEl.text(modalName.val());
        streetEl.text(modalStreet.val());
        cityEl.text(modalCity.val());
        countryEl.text(modalCountry.val());

        productEl.text(modalProduct.val());
        priceEl.text(modalPrice.val());
        //   vatEl.text(modalVat.val());

        countTotal(productEl, priceEl);

        $("#exampleModal").modal("toggle"); // clear modal w.
    });
});

// btn delete
$(".delete").click(function () {
    $(this).parents(".product_row").remove();
});
