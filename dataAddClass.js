function dataAddClassBody() {
    'use strict';

    document.addEventListener('click', clickToggleClass);
    document.addEventListener('dblclick', dblclickToggleClass);

    function clickToggleClass(e) {
        var tc = e.target;
        var t = tc;
        var te = e;

        while (t && t !== document.documentElement) {
            if (t.hasAttribute('data-click')) { //если нашли родителя с атребутом
                document.body.classList.toggle(t.getAttribute('data-click'));
                if (tc instanceof HTMLAnchorElement) {
                    te.preventDefault();
                }
            }
            t = t.parentNode; //перешли на родителя выше в остальных случаях
        }
    }

    function dblclickToggleClass(e) {
        var t = e.target;
        while (t && t !== document.documentElement) {
            if (t.hasAttribute('data-dblclick')) { //если нашли родителя с атребутом
                document.body.classList.toggle(t.getAttribute('data-dblclick'));
                window.getSelection().removeAllRanges();
            }
            t = t.parentNode;
        }
    }

    document.addEventListener('mouseover', hoverAddClass);
    var hover = null;

    function hoverAddClass(e) {
        var t = e.target;
        //цикл выполняется если t есть и пока нестанет не дойдет до HTML и пока hover = null
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
        while (t && t !== document.documentElement && hover) {
            if (t === hover) {
                document.body.classList.remove(hover.getAttribute('data-hover'));
                hover = null;
            }
            t = t.parentNode;
        }
        //return;


    }


};
