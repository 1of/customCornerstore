/*
 Import all product specific js
 */
import PageManager from '../page-manager';
import $ from 'jquery';
import 'fotorama/fotorama.js';

export default class ProductFotoramaGallery extends PageManager {

    onReady() {
        const $fotoramaDiv = $('#fotorama').fotorama();
        const fotorama = $fotoramaDiv.data('fotorama');


        $('.fotorama__stage__shaft').on('click', (event) => {
            event.preventDefault();
            fotorama.requestFullScreen();
        });
    }
}
