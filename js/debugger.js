window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
    if (event.keyCode === 123) {
        event.preventDefault();
        window.event.returnValue = false;
    }
}
function stop() {return false;}
document.oncontextmenu = stop;
!function test(){
    try { !
        function cir(i) {
            (1 !== ("" + i / i).length || 0 === i) &&
            function() {}.constructor("debugger")(),
            cir(++i);
        } (0)
    } catch(e) {
        setTimeout(test, 500)
    }
}()