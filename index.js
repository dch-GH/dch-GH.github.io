
window.onload = function () {
    let ss = document.getElementsByClassName("screenshot")
    if (ss === undefined) {
        return
    }

    Array.from(ss).forEach(element => {
        element.addEventListener("click", function () {
            if (element instanceof Image) {
                window.open(element.src, "_blank")
            }
        })
    });
}
