// site header js

window.onload = function() {
    // Retrive the selectors and their heights
  // ==========================================
  var header           = document.querySelector('header'),
      header_height    = parseInt (getComputedStyle(header).height.split('px')[0]),
      title            = document.querySelector('.ad-header__brand'),
      title_height     = parseInt (getComputedStyle(title).height.split('px')[0]),
      offsetVal       = (header_height - title_height);
      
    onscroll = function() {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // detect the end of the menu
    if(scrollTop >= offsetVal) {
      document.getElementById("header").className = "js-onscroll";
    } else {
      document.getElementById("header").className = "";
    }
  };
};

// actions for pdf NOTE: this is just a quick fix for popup ui. worst production code
function adAction(obj, type) {
    var delay=4000;

    if(type == 'delete') {
      document.getElementById("tn-box-wrapper-del").className = "show-time";
      setTimeout(function(){
        document.getElementById("tn-box-wrapper-del").className = "";
      }, delay); 
    }
    if(type == 'edit') {
      document.getElementById("tn-box-wrapper-edit").className = "show-time";
      setTimeout(function(){
        document.getElementById("tn-box-wrapper-edit").className = "";
      }, delay); 
    }
    if(type == 'share') {
      document.getElementById("tn-box-wrapper-share").className = "show-time";
      setTimeout(function(){
        document.getElementById("tn-box-wrapper-share").className = "";
      }, delay); 
    }

}
/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

//
// See README for overview
//

'use strict';

//
// Fetch the PDF document from the URL using promises
//
PDFJS.getDocument('pdf-images.pdf').then(function(pdf) {
  // Using promise to fetch the page
  pdf.getPage(1).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);

    //
    // Prepare canvas using PDF page dimensions
    //
    var canvas = document.getElementById('adCanvas-1');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //
    // Render PDF page into canvas context
    //
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});


PDFJS.getDocument('pdf-images.pdf').then(function(pdf) {
  // Using promise to fetch the page
  pdf.getPage(2).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);

    //
    // Prepare canvas using PDF page dimensions
    //
    var canvas = document.getElementById('adCanvas-2');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //
    // Render PDF page into canvas context
    //
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});

PDFJS.getDocument('ux-reader.pdf').then(function(pdf) {
  // Using promise to fetch the page
  pdf.getPage(1).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);

    //
    // Prepare canvas using PDF page dimensions
    //
    var canvas = document.getElementById('adCanvas-3');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //
    // Render PDF page into canvas context
    //
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});

PDFJS.getDocument('pdf-images.pdf').then(function(pdf) {
  // Using promise to fetch the page
  pdf.getPage(4).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);

    //
    // Prepare canvas using PDF page dimensions
    //
    var canvas = document.getElementById('adCanvas-4');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //
    // Render PDF page into canvas context
    //
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});


PDFJS.getDocument('pdf-images.pdf').then(function(pdf) {
  // Using promise to fetch the page
  pdf.getPage(5).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);

    //
    // Prepare canvas using PDF page dimensions
    //
    var canvas = document.getElementById('adCanvas-5');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //
    // Render PDF page into canvas context
    //
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});

PDFJS.getDocument('ux-reader.pdf').then(function(pdf) {
  // Using promise to fetch the page
  pdf.getPage(1).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);

    //
    // Prepare canvas using PDF page dimensions
    //
    var canvas = document.getElementById('adCanvas-6');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //
    // Render PDF page into canvas context
    //
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});

PDFJS.getDocument('pdf-images.pdf').then(function(pdf) {
  // Using promise to fetch the page
  pdf.getPage(3).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);

    //
    // Prepare canvas using PDF page dimensions
    //
    var canvas = document.getElementById('adCanvas-7');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //
    // Render PDF page into canvas context
    //
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});

PDFJS.getDocument('pdf-images.pdf').then(function(pdf) {
  // Using promise to fetch the page
  pdf.getPage(1).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);

    //
    // Prepare canvas using PDF page dimensions
    //
    var canvas = document.getElementById('adCanvas-8');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //
    // Render PDF page into canvas context
    //
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});

PDFJS.getDocument('pdf-images.pdf').then(function(pdf) {
  // Using promise to fetch the page
  pdf.getPage(2).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);

    //
    // Prepare canvas using PDF page dimensions
    //
    var canvas = document.getElementById('adCanvas-9');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //
    // Render PDF page into canvas context
    //
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});
