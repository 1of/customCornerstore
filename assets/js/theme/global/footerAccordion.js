import '../../../../node_modules/jquery-ui/ui/widgets/accordion';

export default function () {
    console.log( $('.footer') );
    $('#webPages-accordion').accordion({
        active: true, animate: false, collapsible: true, heightStyle: 'auto',
    });
    $('#footer-categories-accordion').accordion({
        active: true, animate: false, collapsible: true, heightStyle: 'auto',
    });
    $('#footer-brands-accordion').accordion({
        active: true, animate: false, collapsible: true, heightStyle: 'auto',
    });
}
