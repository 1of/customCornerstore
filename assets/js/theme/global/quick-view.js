import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';
import ProductDetails from '../common/product-details';
import { defaultModal } from './modal';
import 'slick-carousel';
import $ from 'jquery';
import 'fotorama/fotorama.js';


export default function (context) {
    const modal = defaultModal();

    $('body').on('click', '.quickview', event => {
        event.preventDefault();

        const productId = $(event.currentTarget).data('productId');

        modal.open({ size: 'large' });

        utils.api.product.getById(productId, { template: 'products/quick-view' }, (err, response) => {
            modal.updateContent(response);

            modal.$content.find('.productView').addClass('productView--quickView');

            modal.$content.find('[data-slick]').slick();

            const $fotoramaDiv = $('#fotorama').fotorama({
                width: 558,
                maxheight: 448,
                thumbwidth: 88,
                thumbheight: 110,
            });

            $fotoramaDiv.data('fotorama');

            return new ProductDetails(modal.$content.find('.quickView'), context);
        });
    });

}
