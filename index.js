var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
});

setInterval(function(){


  


document.querySelectorAll(".owl-item").forEach(function(er1){

    var offsets2 = er1.getBoundingClientRect();
    var top2 = offsets2.top;
    var left2 = offsets2.left;


    var offsets1 = document.querySelector('.container').getBoundingClientRect();
    var top1 = offsets1.top;
    var left1 = offsets1.left;


    if((left1+50) > left2 && (left1-50) < left2 ){
er1.classList.add("active-my");
    }else{
        er1.classList.remove("active-my");
    }

})
},100)