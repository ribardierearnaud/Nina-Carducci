$(document).ready(function() {
    $('.gallery').mauGallery({
        //définit le nombre de colonnes de la galerie
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        //active la lightbox
        lightBox: true,
        //donne un nom à la lightbox
        lightboxId: 'myAwesomeLightbox',
        //sert à afficher le menu des catégories de photos
        showTags: true,
        //définit l'emplacement du nume des catégories de photos
        tagsPosition: 'top'
    });
});
