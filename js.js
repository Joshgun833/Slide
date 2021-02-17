
$("document").ready(function () {
    var slidler = $('#slidler .slide');
    var showSlide = 0;
    var slideInterval = setInterval(nextSlide, 2000);

    function nextSlide() {
        slidler[showSlide].className = 'slide';
        showSlide = (showSlide + 1) % slidler.length;
        slidler[showSlide].className = 'slide showing';
        
    }
    $(".right").on("click", function () {
        slidler[showSlide].className = 'slide';
        showSlide = (showSlide + 1) % slidler.length;
        slidler[showSlide].className = 'slide showing';
        return
    })
    $(".left").on("click", function () {
        slidler[showSlide].className = 'slide';
        showSlide = (showSlide + slidler.length - 1) % slidler.length;
        slidler[showSlide].className = 'slide showing';

        return
    })
    
    for (let i = 0; i < 6; i++) {
        $("button").eq(i + 2).on("click", function () {
            slidler.removeClass('showing')
        slidler.addClass('slide')
        slidler[i].className = 'slide showing';
        $("button").eq(2).css({"padding":"0"});
        $("button").eq(3).css({"padding":"0"});
        $("button").eq(5).css({"padding":"0"});
        $("button").eq(6).css({"padding":"0"});
        $("button").eq(7).css({"padding":"0"});
        $("button").eq(4).css({"padding":"0"});
        $("button").eq(i + 2)  .css({"padding":"10px"})  ;
     })
    }
    
//   for (let i = 0; i < 6; i++) {
//             $("button").eq(i + 2).on("click", function () {
//             slidler[0].className = 'slide';
//             slidler[1].className = 'slide'
//             slidler[2].className = 'slide'
//             slidler[3].className = 'slide'
//             slidler[4].className = 'slide'
//             slidler[5].className = 'slide'
//             slidler[i].className = 'slide showing'
//             $("button").eq(2).css({"padding":"0"})
//             $("button").eq(3).css({"padding":"0"})
//             $("button").eq(5).css({"padding":"0"})
//             $("button").eq(6).css({"padding":"0"})
//             $("button").eq(7).css({"padding":"0"})
//             $("button").eq(4).css({"padding":"0"})
//             $("button").eq(i + 2)  .css({"padding":"10px"})  
//          })
//         }

   




    // $("button").eq(2).on("click", function () {


    //     slidler[0].className = 'slide showing';
    //     slidler[1].className = 'slide'
    //     slidler[2].className = 'slide'
    //     slidler[3].className = 'slide'
    //     slidler[4].className = 'slide'
    //     slidler[5].className = 'slide'

    // })


    // $("button").eq(3).on("click", function () {


    //     slidler[0].className = 'slide'
    //     slidler[1].className = 'slide showing';
    //     slidler[2].className = 'slide'
    //     slidler[3].className = 'slide'
    //     slidler[4].className = 'slide'
    //     slidler[5].className = 'slide'



    // })
    // $("button").eq(4).on("click", function () {


    //     slidler[0].className = 'slide';
    //     slidler[1].className = 'slide';
    //     slidler[2].className = 'slide showing';
    //     slidler[3].className = 'slide';
    //     slidler[4].className = 'slide';
    //     slidler[5].className = 'slide';



    // })
    // $("button").eq(5).on("click", function () {


    //     slidler[0].className = 'slide';
    //     slidler[1].className = 'slide'
    //     slidler[2].className = 'slide'
    //     slidler[3].className = 'slide showing';
    //     slidler[4].className = 'slide'
    //     slidler[5].className = 'slide'



    // })
    // $("button").eq(6).on("click", function () {


    //     slidler[0].className = 'slide';
    //     slidler[1].className = 'slide'
    //     slidler[2].className = 'slide'
    //     slidler[3].className = 'slide'
    //     slidler[4].className = 'slide showing';
    //     slidler[5].className = 'slide'



    // })
    // $("button").eq(7).on("click", function () {


    //     slidler[0].className = 'slide';
    //     slidler[1].className = 'slide'
    //     slidler[2].className = 'slide'
    //     slidler[3].className = 'slide'
    //     slidler[4].className = 'slide'
    //     slidler[5].className = 'slide showing'



    // })

})

