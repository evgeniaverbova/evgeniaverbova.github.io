// блоки плиткой
// external js: masonry.pkgd.js, imagesloaded.pkgd.js

  var grid = document.querySelector('.shares-list');

  var msnry = new Masonry( grid, {
    itemSelector: '.shares-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true
  });
