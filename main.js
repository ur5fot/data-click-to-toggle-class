/**
 * Created by ur5fot on 05.11.15.
 */
(function () {
    'use strict';
    (function () {
        'use strict';
        document.addEventListener('DOMContentLoaded', function () {
            document.addEventListener('click', attrClick);
            function attrClick(event) {
                var t = event.target;
                if(t.hasAttributes('data-click')){
                    t.classList.toggle(t.getAttribute('data-click'));
                }else {
                    return;
                }
            }
            document.addEventListener('dblclick', attrDblclick);
            function attrDblclick(event) {
                var t = event.target;
                if(t.hasAttributes('data-dblclick')){
                    t.classList.toggle(t.getAttribute('data-dblclick'));
                    window.getSelection().removeAllRanges();

                }else {
                    return;
                }
            }
        });
    })();

})();