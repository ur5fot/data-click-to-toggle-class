/**
 * Created by ur5fot on 05.11.15.
 */

function dataAddClassBody() {
    'use strict';

    document.addEventListener('click', clickToggleClass);
    document.addEventListener('dblclick', dblclickToggleClass);

    function clickToggleClass(e) {
        var t = e.target;
        if (t.hasAttribute('data-click')) {
            document.body.classList.toggle(t.getAttribute('data-click'));
        } else {
            return;
        }
    }

    function dblclickToggleClass(e) {
        var t = e.target;
        if (t.hasAttribute('data-dblclick')) {
            document.body.classList.toggle(t.getAttribute('data-dblclick'));
            window.getSelection().removeAllRanges();
        } else {
            return;
        }
    }

    document.addEventListener('mouseover', hoverAddClass);
    var hover = null;
    function hoverAddClass(e) {
        var t = e.target;
        while (t && t !== document.documentElement && !hover) {
            if (t.hasAttribute('data-hover')) {
                document.body.classList.add(t.getAttribute('data-hover'));
                hover = t;

            }

            t = t.parentNode;
        }
        return
    }
    document.addEventListener('mouseout', hoverRemoveClass);
    function hoverRemoveClass(e) {
        var rt = e.target;
        while (rt && rt  !== document.documentElement  && hover ) {
            if (rt === hover ) {
                document.body.classList.remove(hover.getAttribute('data-hover'));
                hover = null;
            }
            rt = rt.parentNode;
        }
        return;


    }


};
