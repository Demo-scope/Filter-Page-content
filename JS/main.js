// بسم الله الرحمن الرحيم 
// Start project





let one_lis = document.querySelectorAll(".switcher li")
let one_Is = document.querySelectorAll(".contaner i")

one_lis.forEach(function(ele) {
    ele.onclick = function() {
        // remove active class from all li 
        for(let i = 0; i < one_lis.length; i++) {
            one_lis[i].classList.remove("active")
        }
        // add active class for this li
        ele.classList.add("active")

        // remove all icons from contaner
        document.querySelector(".contaner").innerHTML = ""
        // add only the same icons
        for(let i = 0; i < one_Is.length; i++) {
            if(one_Is[i].classList.contains(ele.getAttribute("data-cat"))) {
                document.querySelector(".contaner").appendChild(one_Is[i])
            }
        }

    }
})

let two_lis = document.querySelectorAll(".two .all ul li")
let allDiv = document.querySelectorAll(".two .all  .content div")


two_lis.forEach(function (ele) {
    ele.onclick = function() {
        // remove all active class from all li
        for(let i = 0; i < two_lis.length; i++) {
            two_lis[i].classList.remove("active")
        }
        // add active class for clicked li
        ele.classList.add("active")

        // add display none for all div in content excpt the target div
        for (let i = 0; i < allDiv.length; i++) {
            if (allDiv[i].classList.contains(ele.getAttribute("data-cat"))) {
                allDiv[i].style.cssText = "display: block;"
            } else {
                allDiv[i].style.cssText = "display: none;"
            }
        }
    }
})