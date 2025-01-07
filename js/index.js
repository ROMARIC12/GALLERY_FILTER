$(document).ready(function () {
    $('.bars').click(function () {
        console.log("Bouton cliqué !");
        $('header div.mobile-menu').toggleClass('seen');
    });

    $('.buttons').click(function () {
        // Ajouter la classe active au bouton cliqué
        $(this).addClass('active').siblings().removeClass('active');

        // Récupérer le filtre
        var filter = $(this).attr('data-filter');

        // Afficher/masquer les images selon le filtre
        if (filter === 'all') {
            $('.image').show(400); // Afficher toutes les images
        } else {
            $('.image').not('.' + filter).hide(200); // Masquer celles qui ne correspondent pas
            $('.image').filter('.' + filter).show(400); // Afficher celles qui correspondent
        }
    });

    // Initialisation de Magnific Popup
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
        },
    });
});
