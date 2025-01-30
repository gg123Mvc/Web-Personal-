/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Jeri.",],
      typeSpeed: 200,
      loop: true,
    });
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})
// This code creates a simple music player in JavaScript

// HTML structure
const app = document.createElement('div');
app.style.textAlign = 'center';
app.style.fontFamily = 'Arial, sans-serif';
app.innerHTML = `
  <h1>Music Player</h1>
  <audio id="audioPlayer" controls>
    <source src="your-audio-file.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <br><br>
  <button id="playBtn">Play</button>
  <button id="pauseBtn">Pause</button>
  <button id="stopBtn">Stop</button>
  <button id="prevBtn">Previous</button>
  <button id="nextBtn">Next</button>
  <button id="hideBtn">Hide Player</button>
  <button id="showBtn">Show Player</button>
`;
document.body.appendChild(app);

// JavaScript functionality
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const hideBtn = document.getElementById('hideBtn');
const showBtn = document.getElementById('showBtn');

const playlist = ["music/inde.mp3", "music/Dramatic.mp3", "music/Epic.mp3","music/Legend.mp3","music/Eternity.mp3"];
let currentTrack = 0;

function updateTrackSource() {
  audioPlayer.src = playlist[currentTrack];
  console.log("Current track source:", audioPlayer.src);
  audioPlayer.load(); // Ensure the new source is loaded
}

updateTrackSource();

playBtn.addEventListener('click', () => {
  console.log('Play button clicked');
  audioPlayer.play();
});

pauseBtn.addEventListener('click', () => {
  console.log('Pause button clicked');
  audioPlayer.pause();
});

stopBtn.addEventListener('click', () => {
  console.log('Stop button clicked');
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
});

prevBtn.addEventListener('click', () => {
  console.log('Previous button clicked');
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  updateTrackSource();
  audioPlayer.play();
});

nextBtn.addEventListener('click', () => {
  console.log('Next button clicked');
  currentTrack = (currentTrack + 1) % playlist.length;
  updateTrackSource();
  audioPlayer.play();
});

hideBtn.addEventListener('click', () => {
  console.log('Hide button clicked');
  audioPlayer.style.display = 'none';
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'none';
  stopBtn.style.display = 'none';
  prevBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  hideBtn.style.display = 'none';
  showBtn.style.display = 'inline-block';
});

showBtn.addEventListener('click', () => {
  console.log('Show button clicked');
  audioPlayer.style.display = 'block';
  playBtn.style.display = 'inline-block';
  pauseBtn.style.display = 'inline-block';
  stopBtn.style.display = 'inline-block';
  prevBtn.style.display = 'inline-block';
  nextBtn.style.display = 'inline-block';
  hideBtn.style.display = 'inline-block';
  showBtn.style.display = 'none';
});

