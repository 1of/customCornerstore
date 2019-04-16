/*
 FAQ page
 */
import PageManager from '../page-manager';
import $ from 'jquery';
import '../../../../node_modules/jquery-ui/ui/widgets/accordion';

export default class CustomPage extends PageManager {

    onReady() {
        $('#accordion').accordion({
            active: true, animate: false, collapsible: true, heightStyle: 'auto',
        });
        $('#accordion2').accordion({ active: true, animate: false, collapsible: true, heightStyle: 'auto' });
        $('#accordion3').accordion({ active: true, animate: false, collapsible: true, heightStyle: 'auto' });
    //     const comic = {
    //       first: "Alexey",
    //       last: "Silifonov",
    //       state: "Ukraine"
    //     };
    //     const getName = ({first, last}) => `${first} ${last}`;
    //     getName(comic);
    //
    //     var myHeaders = new Headers();
    //     myHeaders.append("Access-Control-Allow-Origin","http://localhost:3003");
    //     myHeaders.append("Accept", "application/json");
    //     myHeaders.append("Content-Type", "application/json");
    //     myHeaders.append("X-Auth-Token", "t3yx3kykhvu3qxx073ccy0qh1rd9bnj");
    //     myHeaders.append("X-Auth-Client", "6oub4ok6693k33d78ja6yzp6wz1t39z");
    //
    }
}
