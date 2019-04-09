/*
 Import all product specific js
 */
import PageManager from '../page-manager';
import $ from 'jquery';
import 'fotorama/fotorama.js';

export default class ProductFotoramaGallery extends PageManager {

    onReady() {
        const $fotoramaDiv = $('#fotorama').fotorama({
            width: 558,
            maxheight: 448,
            thumbwidth: 88,
            thumbheight: 110,
        });
        const fotorama = $fotoramaDiv.data('fotorama');


        $('.fotorama__stage__shaft').on('click', (event) => {
            event.preventDefault();
            fotorama.requestFullScreen();
        });
    }
}
