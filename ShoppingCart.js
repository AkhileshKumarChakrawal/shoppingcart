
var temp;  //global variable
$(document).ready(function () {

    $.getJSON("sample-data.json", function (obj)    //load json data from file sample-data.json

    {
        temp = obj;
        $.each(obj, function (key, value) {


            if (value.rating >= 4) {
                $('#product').append(`<div class="col-md-3 col-sm-6 text-center pt-3">
                    <img src="${value.imgPath}" style="width: 200px; height: 250px;">
        <ul type="none">
        <li>${value.name}</li>
        <li><i class="fa fa-rupee"></i>${value.price}</li>
         <li><button class="btn btn-success" style="margin-top: 4px;">${value.rating}<i class="fa fa-star-o" style="color: white"></i></button></li>
            </ul>
</div>`);
            }

        });
    });   // end of getJSON() function



    $('#electronic').click(function () {
        $('#product').empty();
        showjsondata('electronics'); //calling showjsondata function

    });



    $('#books').click(function () {
        $('#product').empty();
        showjsondata('books');  // calling showjsondata function

    });



    $('#books').mouseenter(function () {
        $('#showbook').toggle('medium');
        $('#showelectronic').hide();
    });


    $('#electronic').mouseenter(function () {
        $('#showelectronic').toggle('medium');
        $('#showbook').hide();
    });



});//end of ready function


function showjsondata(data) {  //  function used to display product

    $.each(temp, function (key, value) {

        if (value.type == data) {

            $('#product').append(`<div class="col-md-3 col-sm-6 text-center pt-3">
                    <img src="${value.imgPath}" style="width: 200px; height: 250px;">
        <ul type="none">
        <li>${value.name}</li>
        <li><i class="fa fa-rupee"></i>${value.price}</li>
            <li><button class="btn btn-success" style="margin-top: 4px;">${value.rating}<i class="fa fa-star-o" style="color: white"></i></button></li>
            <!--<li class="jstars" data-value='4.5'data-total-stars="5" data-color="#22D118" data-empty-color="black"></li>
-->
            </ul>
</div>`);
        }

    }); //end of $.each loop

}  // end of showjsondata function

