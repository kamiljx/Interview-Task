document.addEventListener("keydown", function (e) {
    if(e.keyCode == 37){
        console.log("left")
        const currentLeft = parseInt($('.fa-ghost').css('left'));
        const percentage = currentLeft - (3*currentLeft)/100
        $('.fa-ghost').css('left',  percentage)
        console.log($('.fa-ghost').css('left'))
    } else if(e.keyCode == 38){
        console.log("up")
        const currentTop = parseInt($('.fa-ghost').css('top'));
        const percentage = currentTop - (3*currentTop)/100
        $('.fa-ghost').css('top',  percentage)
    }else if(e.keyCode == 39){
        const currentLeft = parseInt($('.fa-ghost').css('left'));
        const percentage = currentLeft + (3*currentLeft)/100
        $('.fa-ghost').css('left',  percentage)


        console.log("right")
    }else if(e.keyCode ==40){
        const currentTop = parseInt($('.fa-ghost').css('top'));
        const percentage = currentTop + (3*currentTop)/100
        $('.fa-ghost').css('top',  percentage)
        console.log("down")
    }
})

console.log($('.fa-ghost').css('left'))


$('i').on('click', function(){
    alert("booo")
  });