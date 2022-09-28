const main = document.getElementById("lighthouse-bg");
const images = document.querySelector(".images")
const tiles = document.querySelectorAll(".images span");
const name = document.querySelectorAll(".images ")
tiles.forEach(function (a, i) {
    tiles[i].onclick = function () {
        if (!main.classList.contains("lighthouse")) {
            main.style.visibility = "visible"
            main.appendChild(this)
            main.classList.add("lighthouse")
            
        }
        else {
            main.removeChild(this)
            main.classList.remove("lighthouse")
            // gallery.appendChild(this)
            // console.log(gallery_child[])
            // console.log(gallery.childNodes[i])
            images.insertBefore(this, images.children[i])
        }
    }
}
)
$(window).on('scroll',function () {
    if ($(this).scrollTop() > 600) {
        $('.return-to-top').fadeIn();
    } else {
        $('.return-to-top').fadeOut();
    }
});
$('.return-to-top').on('click',function(){
        $('html, body').animate({
        scrollTop: 0
    }, 1500);
    return false;
});