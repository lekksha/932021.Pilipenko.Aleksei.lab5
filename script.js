
function set_opacity()
{
    document.querySelectorAll('.news').forEach(element => {
        element.style.opacity = "0.4";
        element.style.pointerEvents = "none";
    });
}

function reset_opacity()
{
    document.querySelectorAll('.news').forEach(element => {
        element.style.opacity = "1";
        element.style.pointerEvents = "all";
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".close").forEach(element => {
        element.addEventListener("click", function (){
            document.querySelectorAll(".popup-1, .popup-2, .popup-3").forEach(element => {
            element.style.display = "none";
            });
            reset_opacity();
        });
    });   
    document.querySelector(".btn-1").addEventListener("click",function (){
        document.querySelector(".popup-1").style.display = "block";
        set_opacity();
    });
    document.querySelector(".btn-2").addEventListener("click",function (){
        document.querySelector(".popup-2").style.display = "block";
        set_opacity();
    });
    document.querySelector(".btn-3").addEventListener("click",function (){
        document.querySelector(".popup-3").style.display = "block";
        set_opacity();
    });
});