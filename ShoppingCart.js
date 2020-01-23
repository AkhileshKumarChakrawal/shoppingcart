
var temp;  //global variable
$(document).ready(function () {

    $.getJSON("sample-data.json", function (obj)    //load json data from file sample-data.json

    {
        temp = obj;
        $.each(obj, function (key, value) {


            if (value.rating >= 4) {
                $('#product').append(`<div class="col-md-3 col-sm-6 text-center pt-3">
                    <img src="${value.imgPath}" name="${value.id}" class="rateButton" style="width: 200px; height: 250px;">
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

    $(document).on('click', '.rateButton', function() {
        alert("hi");
        $('#product').empty();
        var elem = this.name;
        $.each(temp, function (key, value) {
            if(value.id == elem){
                var len = value.comments.length;
                $('#image').append(`
<img src ="${value.imgPath}" style ="width : 400px; height : 400px;"></div>`);

                $.each(value.offers , function (keys , vals) {
                    if(vals.amount != null) {
                        $('#offer').append(`
                   <ul type="none">
                   <li>${vals.type}</li>
                   <li>${vals.amount}</li>
                    </ul>`);
                    }// end of if block

                    else{
                        $('#offer').append(`
                   <ul type="none">
                   <li>${vals.type}</li>
                   <li>${vals.percentage}</li>
                    </ul> `);
                    } // end of else block
                }); // end of $.each() function



                $('#data1').append(`
            <ul type="none">
<li>${value.name}</li>
<li><i class="fa fa-rupee"></i>${value.price}</li>
<li>${value.description}</li>
<li>${value.subType}</li>
<li>${value.by}</li>
</ul>`);
                $.each(value.comments, function (k, v) {
                    $('#commentssec').append(`
                                <p>comments::</p>
                            <ul type="none"><li>${v.text}</li>
                            <li>${v.rating}</li>
                            <li>${v.commentedOn}</li>
                            <li>${v.username}</li>
                            `);
                });// end of 4.each() function
            }// end of if


        });// end of $.each() function

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
</div>`).on('click', );
        }

    }); //end of $.each loop
//clickfun();
}  // end of showjsondata function

function clickfun(){
    $('#product').on('click', '.rateButton', function(){
        /* alternatively if the additional parent element is not desired
           the event can be delegated to the document */
        alert("hi");
        var elem = this; // to refer to the clicked object
        //var index = $(this).index(); // to get the index, this index is 0 based
        alert('clicked element index: '+this.name);
        // Ajax call here.
    });

}
