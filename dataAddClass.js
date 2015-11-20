function dataAddClassBody() {
    'use strict';

    document.addEventListener('click', clickToggleClass);
    document.addEventListener('dblclick', dblclickToggleClass);

    function clickToggleClass(e) {
        var t = e.target;
        if (t.hasAttribute('data-click')) {
            document.body.classList.toggle(t.getAttribute('data-click'));
        } else {
            //return;
        }
    }

    function dblclickToggleClass(e) {
        var t = e.target;
        if (t.hasAttribute('data-dblclick')) {
            document.body.classList.toggle(t.getAttribute('data-dblclick'));
            window.getSelection().removeAllRanges();
        } else {
            //return;
        }
    }

    document.addEventListener('mouseover', hoverAddClass);
    var hover = null;
    function hoverAddClass(e) {
        var t = e.target;
        //цыкл выполняется если t есть и пока нестанет не дойдет до HTML и пока hover = null
        while (t && t !== document.documentElement && !hover) {
            if (t.hasAttribute('data-hover')) { //если нашли родителя с атребутом data-hover
                document.body.classList.add(t.getAttribute('data-hover')); //доавили класс body
                hover = t; // и запомнили его
            }

            t = t.parentNode; //перешли на родителя выше в остальных случаях
        }
        //return
    }

    document.addEventListener('mouseout', hoverRemoveClass);
    function hoverRemoveClass(e) {
        var t = e.target;
        while (t && t  !== document.documentElement  && hover ) {
            if (t === hover ) {
                document.body.classList.remove(hover.getAttribute('data-hover'));
                hover = null;
            }
            t = t.parentNode;
        }
        //return;


    }


};
