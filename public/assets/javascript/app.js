$("#tradeConfirm").on("click", function(){
    var buyer = $('input[name="offer"]:checked', '#offerForm').attr("data-user");
    var seller = $('input[name="request"]:checked', '#requestForm').attr("data-user");
    var buyer_product = $('input[name="offer"]:checked', '#offerForm').attr("data-id");
    var seller_product = $('input[name="request"]:checked', '#requestForm').attr("data-id");
    var buyer_email = $('input[name="offer"]:checked', '#offerForm').attr("data-id");
    var seller_email = $('input[name="request"]:checked', '#requestForm').attr("data-id");
    var offer_picture = $('input[name="offer"]:checked', '#offerForm').attr("data-picture");
    var request_picture = $('input[name="request"]:checked', '#requestForm').attr("data-picture");
        $.ajax({
            url: '/trade/create', 
            type: 'POST', 
            dataType: 'json', 
            data: {
              offerPicture: offer_picture,
              requestPicture: request_picture,
              buyer: buyer,
              seller: seller,
              buyer_product: buyer_product,
              seller_product: seller_product
            }
        });

        alert("successful trade request sent");


    });