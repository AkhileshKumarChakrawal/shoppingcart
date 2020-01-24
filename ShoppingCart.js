
var temp;  //global variable
$(document).ready(function () {

    $.getJSON("sample-data.json", function (obj)

    {$('.check').hide();
        temp = obj;
        $.each(obj, function (key, value) {


            if (value.rating >= 4) {
                $('#product').append(`<div class="col-md-3 col-sm-6 pt-3">
                    <img src="${value.imgPath}" name="${value.id}" class="rateButton" style="width: 200px; height: 250px;">
        <ul type="none">
        <li>${value.name}</li>
        <li><i class="fa fa-rupee"></i>${value.price}</li>
         <li><button class="btn btn-success" style="margin-top: 4px;">${value.rating}<i class="fa fa-star-o" style="color: white"></i></button></li>
            </ul>
</div>`);
            }// end of if block

        }); //end of $.each(obj) method
    });   // end of getJSON() function



    $('#electronic').click(function () {
        $('#product').empty();
        $('#image').empty();
        $('#offer').empty();
        $('#data1').empty();
        $('#commentssec').empty();
        $('.check').hide();
        showjsondata('electronics'); //calling showjsondata function

    });



    $('#books').click(function () {
        $('#product').empty();
        $('#image').empty();
        $('#offer').empty();
        $('#data1').empty();
        $('#commentssec').empty();
        $('.check').hide();

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

    $(document).on('click', '.rateButton', function() {
        alert("hi");
        $('#product').empty();
        $('#image').empty();
        $('#offer').empty();
        $('#data1').empty();
        $('#commentssec').empty();
        $('.check').show();
        $('')
        var elem = this.name;
        $.each(temp, function (key, value) {
            if(value.id == elem) {

                if (value.type == "books") {
                    $('#image').append(`
<img src ="${value.imgPath}" style ="width : 410px; height : 510px;"></div>`);

                    $.each(value.offers, function (keys, vals) {
                        if (vals.amount != null) {
                            $('#offer').append(`
                   <ul type="none">
                   <li><i class="fa fa-tag" style="color: #00e600"></i>  ${vals.type}</li>
                   <li><i class="fa fa-tag" style="color: #00e600"></i>  <i class="fa fa-rupee"></i>${vals.amount}</li>
                    </ul>`).css("font-weight","bold");
                        }// end of if block

                        else {
                            $('#offer').append(`
                   <ul type="none">
                   <li><i class="fa fa-tag" style="color: #00e600"></i>  ${vals.type}</li>
                   <li><i class="fa fa-tag" style="color: #00e600"></i>  ${vals.percentage}</li>
                    </ul> `).css("font-weight","bold");
                        } // end of else block
                    }); // end of $.each(value.offers) function


                    $('#data1').append(`
            <ul type="none">
<li><h4>${value.name}</h4></li>
<li><button class="btn btn-success" style="margin-top: 4px;">${value.rating}<i class="fa fa-star-o" style="color: white"></i></button></li>
<li><h3><i class="fa fa-rupee"></i>${value.price}</h3></li>
<li>Description :  ${value.description}</li>
<li>Book Typs : ${value.subType}</li>
<li>Author  : ${value.by}</li>
</ul>`).css("padding-top","10px"); // end of append() method


                    $.each(value.comments, function (k, v) {
                        $('#commentssec').append(`
                            <ul type="none">
                            <li>${v.username}</li>
                            <li><button class="btn btn-success" style="margin-top: 4px;">${value.rating}<i class="fa fa-star-o" style="color: white"></i></button></li>
                            <li>${v.text}</li>
                            <li>${v.commentedOn}</li>`);
                    }); // end of $.each(value.comments)

                }// end of if

                else if(value.type == "electronics"){
                    $('#image').append(`
<img src ="${value.imgPath}" style ="width : 340px; height : 480px;"></div>`);

                    $.each(value.offers, function (keys, vals) {
                        if (vals.amount != null) {
                            $('#offer').append(`<ul type="none">
                   <li><i class="fa fa-tag" style="color: #00e600"></i>  ${vals.type}</li>
                   <li><i class="fa fa-tag" style="color: #00e600"></i>  <i class="fa fa-rupee"></i>${vals.amount}</li>
                    </ul>`).css("font-weight","bold");
                        }// end of if block

                        else {
                            $('#offer').append(`
                   <ul type="none">
                   <li><i class="fa fa-tag" style="color: #00e600"></i>  ${vals.type}</li>
                   <li><i class="fa fa-tag" style="color: #00e600"></i>  ${vals.percentage}</li>
                    </ul> `).css("font-weight","bold");
                        } // end of else block

                    }); // end of $.each(value.offers) function

                    $('#data1').append(`
            <ul type="none">
<li><h4>${value.name}</h4></li>
<li><button class="btn btn-success" style="margin-top: 4px;">${value.rating}<i class="fa fa-star-o" style="color: white"></i></button></li>
<li><h3><i class="fa fa-rupee"></i>${value.price}</h3></li>
<li>Description :  ${value.description}</li>
<li>Brand :  ${value.brand}</li>
<li>RAM : ${value.RAM}</li>
<li>Model Name : ${value.modelName}</li>
<li>Color :  ${value.color}</li>
<li>Battery :  ${value.battery}</li>
</ul>`).css("padding-top","10px"); // end of append() method

                    $.each(value.comments, function (k, v) {
                        $('#commentssec').append(`
                            <ul type="none">
                            <li>${v.username}</li>
                            <li><button class="btn btn-success" style="margin-top: 4px;">${value.rating}<i class="fa fa-star-o" style="color: white"></i></button></li>
                            <li>${v.text}</li>
                            <li>${v.commentedOn}</li>`);

                    }); // end of $.each(value.comments)

                } //end of else if block

            }// end of if

        });// end of $.each(temp) function

    }); //end of on click events

});//end of ready function


function showjsondata(data) {  //  function used to display product

    $.each(temp, function (key, value) {

        if (value.type == data) {

            $('#product').append(`<div class="col-md-3 col-sm-6 text-center pt-3 ">
                    <img src="${value.imgPath}" name="${value.id}" class="rateButton" style="width: 200px; height: 250px;">
        <ul type="none">
        <li>${value.name}</li>
        <li><i class="fa fa-rupee"></i>${value.price}</li>
            <li><button class="btn btn-success" style="margin-top: 4px;">${value.rating}<i class="fa fa-star-o" style="color: white"></i></button></li>
           
            </ul>
</div>`);
        }// end of if block

    }); //end of $.each loop

}  // end of showjsondata function

Hi Team,
    Today i worked on
:- task(myshoppingcart) in which i worked fetching json data after image click
:- and display all json data according to image click
:- and applied css and responsive to image and data
git-url : -
