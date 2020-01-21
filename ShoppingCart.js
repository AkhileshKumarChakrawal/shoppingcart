$(document).ready(function () {
    showDetails();
    $('#navbarDropdown').click(function () {
        $('#product').empty();
        getDropdownboxValue('electronics');
        /*$('#showelectronic a').mouseenter(function(){
           alert($(this));
        });*/

    });
    $('#navbarDropdown1').click(function () {
        $('#product').empty();
        getDropdownboxValue('books');

    });

    $('#navbarDropdown1').mouseenter(function () {
        $('#showbook').toggle('medium');
        $('#showelectronic').hide();
    });
    $('#navbarDropdown').mouseenter(function () {
        $('#showelectronic').toggle('medium');
        $('#showbook').hide();
    });
    function getDropdownboxValue(data) {
        $.getJSON("sample-data.json", function (obj) {
            console.log(obj);
            $.each(obj, function (key, value) {

                if (value.type == data) {
                    // console.log(key + " " + value.id);

                    $('#product').append(`<div class="col-3 text-center pt-3">
                    <img src="${value.imgPath}" style="width: 200px; height: 250px;">
        <p>${value.name}</p>
        <p>${value.price}</p>

</div>`);
                }

            });
        });
    }

});

function showDetails() {
    $.getJSON("sample-data.json", function (obj) {
        console.log(obj);
        $.each(obj, function (key, value) {

            if (value.rating >= 4) {
                $('#product').append(`<div class="col-3 pt-3">
                    <img src="${value.imgPath}" style="width: 200px; height: 250px;">
        <p>${value.name}</p>
        <p><i class="fa fa-rupee"></i>${value.price}</p>
</div>`);
            }

        });
    });

}
