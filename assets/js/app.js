!function(){const e=document.querySelector(".from"),t=document.querySelector(".from-list"),o=document.querySelector(".form__icon-arrow"),n=function(){t.classList.toggle("active"),o.classList.toggle("active")};e&&e.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),n()})),document.addEventListener("click",(function(o){var c=o.target,i=c==t||t.contains(c),s=c==e,l=t.classList.contains("active");i||s||!l||n()}))}(),function(){const e=document.querySelector(".burger"),t=document.querySelector(".nav");e&&e.addEventListener("click",(function(o){document.body.classList.toggle("lock"),e.classList.toggle("active"),t.classList.toggle("active")}))}(),new Lightpick({field:document.getElementById("demo-2"),singleDate:!1,onSelect:function(e,t){var o="";o+=e?e.format("Do MMMM YYYY")+" to ":"",o+=t?t.format("Do MMMM YYYY"):"...",document.getElementById("result-2").innerHTML=o}}),$("#reviewsSlider").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,dots:!0,responsive:[{breakpoint:769,settings:{slidesToShow:1}}]});