$(document).ready(function () {
    $("#tooltip").tooltip();
    $("#tabs").tabs();
    $("#accordion").accordion();
    $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");

    $("#sticker").sticky({
        topSpacing: 0,
        center: true,
        className: "hey"
    });

    /* Scroll to top script */
    function scrollToElement(selector, time, verticalOffset) {
        time = typeof (time) != 'undefined' ? time : 1000;
        verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $(selector);
        offset = element.offset();
        offsetTop = offset.top + verticalOffset;
        $('html, body').animate({
            scrollTop: offsetTop
        }, time);
    }

    $('a.backToTop').click(function () {
        scrollToElement('#top', 1000);
    });
    
    $(".navElements li:nth-of-type(1)").click(function() {
        scrollToElement("#vprospect", 700); 
    }); 
    $(".navElements li:nth-of-type(2)").click(function() {
        scrollToElement("#vconvert", 700); 
    }); 
    $(".navElements li:nth-of-type(3)").click(function() {
        scrollToElement("#vretain", 700); 
    }); 

    /* jQuery-ui radio buttons */
    $("#infrastructure").buttonset();
    $("#chkboxes").buttonset();
    $("#companysize").selectmenu({
        icons: {
            button: "ui-icon-circle-triangle-s"
        }
    });



    $("#confirmSubmission").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $("#submitBtn").on("click", function (event) {
        if ($("#contactForm")[0].checkValidity()) {
            $("#contactForm").ajaxForm(function () {});
            window.alert("Form submitted via Ajax");
            $("#confirmSubmission").dialog("open");
            $("#contactForm").resetForm();
        }

    });

    //        var submit = false;
    //        $("#dialog-confirm").dialog({
    //              autoOpen: false,
    //                show: {
    //                    effect: "blind",
    //                    duration: 1000
    //                },
    //                hide: {
    //                    effect: "explode",
    //                    duration: 1000
    //                }, 
    //                modal: true,
    //                buttons: {
    //                    "OK": function() {
    //                        $(this).dialog('close');
    //                        submit = true; 
    ////                        $("#contactform").submit();
    //                    },
    //                    Cancel: function() {
    //                        $(this).dialog("close");            
    //                    }
    //                }
    //        
    //        });
    //    
    //        $('form').submit(function() {
    //        if (!submit) {
    //            $("#dialog-confirm").dialog('open');
    //            return false;
    //        }
    //    });

    //        $("#contactSubmission").dialog("open");
    //        $(location).attr('href','http://127.0.0.1:55958/vectacorp/contactus.html')
    //    });


});