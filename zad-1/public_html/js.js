$(document).ready(function () {

    let elemLeft, elemTop, maxElemLeft, maxElemTop, elem, elem_main;

    elem = document.getElementById('container');
    elem_main = document.getElementById('main_block');
    maxElemLeft = document.documentElement.clientWidth - elem.offsetWidth;
    maxElemTop = document.documentElement.clientHeight - elem.offsetHeight;


    elem_main.addEventListener('mousemove', (e) => {

        let elemXY = getCoords(elem);

        if (e.clientX <= maxElemLeft) {
 
            elem.style.left = (maxElemLeft - e.clientX) + 'px';
        }
        if (e.layerY <= maxElemTop) {

            elem.style.top = (maxElemTop - e.clientY) + 'px';
        }


    });

  
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
      
        return {
          top: box.top + window.pageYOffset,
          right: box.right + window.pageXOffset,
          bottom: box.bottom + window.pageYOffset,
          left: box.left + window.pageXOffset
        };
      }
    
});