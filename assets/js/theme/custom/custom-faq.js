/*
 FAQ page
 */
import PageManager from '../page-manager';
import $ from 'jquery';
import '../../../../node_modules/jquery-ui/ui/widgets/accordion';

export default class CustomPage extends PageManager {
    constructor(context) {
        super(context);
    }
    onReady() {
        $('#accordion').accordion({active: true, animate: false, collapsible: true, heightStyle: "auto"});
        $('#accordion2').accordion({active: true, animate: false, collapsible: true});
        $('#accordion3').accordion({active: true, animate: false, collapsible: true});
    }
}
