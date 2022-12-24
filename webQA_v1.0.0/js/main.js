$(document).ready(function () {
  // toggle search box
  $(".search_box_icon").click(function () {
    $(".search_box").toggleClass("show");
  });

  if ($(window).width() < 992) {
    $(document).click(function (event) {
      // toggle search box
      const showSearch =
        event.target.closest(".search_box") ||
        event.target.closest(".search_box_icon");
      if (!showSearch) {
        $(".search_box").removeClass("show");
      }

      // toggle sidebar menu
      const showSidebar =
        event.target.closest(".sidebar") || event.target.closest("#menuBtn");
      console.log(showSidebar);
      if (!showSidebar) {
        $(".sidebar").removeClass("show");
      }
    });
  }

  // adjust main sections top padding
  $(".main-sections").css("paddingTop", `${$("#headerMain").height()}px`);

  $(window).on("resize", function () {
    // adjust main sections top padding
    $(".main-sections").css("paddingTop", `${$("#headerMain").height()}px`);
  });

  // toggle menu
  $("#menuBtn").click(function () {
    $(".sidebar").toggleClass("show");
  });

  // show-details-btn
  $(".show-details-btn").click(function () {
    $(".loader-list-toggle").slideToggle();
  });

  // Failed-circle
  jQuery("#failed-circle").radialProgress("init", {
    'size': 80,
    'fill': 8,
    'font-family' :'450',
    'font-size' : '22',
    'text-color': 'var(--black)',
    'background':'rgba(250, 84, 87, 0.05)',
    'color' : 'var(--text-orange-red)',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 8, 'time': 2000});
  
  // Warning-circle
  jQuery("#warning-circle").radialProgress("init", {
    'size': 80,
    'fill': 8,
    'font-family' :'450',
    'font-size' : '22',
    'text-color': 'var(--black)',
    'background':'rgba(250, 84, 87, 0.05)',
    'color' : 'var(--text-orange-red)',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 2, 'time': 2000});

  // Passed-circle
  jQuery("#passed-circle").radialProgress("init", {
    'size': 80,
    'fill': 8,
    'font-family' :'450',
    'font-size' : '22',
    'text-color': 'var(--black)',
    'background':'rgba(128, 174, 53, 0.05)',
    'color' : 'var(--text-lime-deep)',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 49, 'time': 3000});
  
  // Performance-circle
  jQuery("#performance-circle").radialProgress("init", {
    'size': 120,
    'fill': 8,
    'font-family' :'450',
    'font-size' : '40',
    'text-color': '#64B240',
    'background':'rgba(128, 174, 53, 0.05)',
    'color' : '#64B240',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 98, 'time': 3000});

  // Performance-circle2
  jQuery("#performance-circle2").radialProgress("init", {
    'size': 120,
    'fill': 8,
    'font-family' :'450',
    'font-size' : '40',
    'text-color': '#ECA059',
    'background':'#FAF8E9',
    'color' : '#ECA059',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 70, 'time': 3000});

  // Performance-circle2
  jQuery("#performance-circle3").radialProgress("init", {
    'size': 120,
    'fill': 8,
    'font-family' :'450',
    'font-size' : '40',
    'text-color': '#E52F34',
    'background':'#FAE9E9',
    'color' : '#E52F34',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 30, 'time': 3000});

  // lighthouse-performance
  jQuery("#lighthouse-performance").radialProgress("init", {
    'size': 80,
    'fill': 5,
    'font-family' :'450',
    'font-size' : '28',
    'text-color': '#ECA059',
    'background':'#FAF8E9',
    'color' : '#ECA059',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 57, 'time': 3000});

  // lighthouse-accessibility
  jQuery("#lighthouse-accessibility").radialProgress("init", {
    'size': 80,
    'fill': 5,
    'font-family' :'450',
    'font-size' : '25',
    'text-color': '#ECA059',
    'background':'#FAF8E9',
    'color' : '#ECA059',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 87, 'time': 3000});

  // lighthouse-best
  jQuery("#lighthouse-best").radialProgress("init", {
    'size': 80,
    'fill': 5,
    'font-family' :'450',
    'font-size' : '25',
    'text-color': '#ECA059',
    'background':'#FAF8E9',
    'color' : '#ECA059',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 97, 'time': 3000});

  // lighthouse-eso
  jQuery("#lighthouse-eso").radialProgress("init", {
    'size': 80,
    'fill': 5,
    'font-family' :'450',
    'font-size' : '25',
    'text-color': '#64B240',
    'background':'#FAF8E9',
    'color' : '#64B240',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 90, 'time': 3000});

  // lighthouse-performance2
  jQuery("#lighthouse-performance2").radialProgress("init", {
    'size': 80,
    'fill': 5,
    'font-family' :'450',
    'font-size' : '28',
    'text-color': '#ECA059',
    'background':'#FAF8E9',
    'color' : '#ECA059',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 57, 'time': 3000});

  // lighthouse-accessibility2
  jQuery("#lighthouse-accessibility2").radialProgress("init", {
    'size': 80,
    'fill': 5,
    'font-family' :'450',
    'font-size' : '25',
    'text-color': '#ECA059',
    'background':'#FAF8E9',
    'color' : '#ECA059',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 87, 'time': 3000});

  // lighthouse-best2
  jQuery("#lighthouse-best2").radialProgress("init", {
    'size': 80,
    'fill': 5,
    'font-family' :'450',
    'font-size' : '25',
    'text-color': '#ECA059',
    'background':'#FAF8E9',
    'color' : '#ECA059',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 97, 'time': 3000});

  // lighthouse-eso2
  jQuery("#lighthouse-eso2").radialProgress("init", {
    'size': 80,
    'fill': 5,
    'font-family' :'450',
    'font-size' : '25',
    'text-color': '#64B240',
    'background':'#FAF8E9',
    'color' : '#64B240',
    'range': [0, 100],
  }).radialProgress("to", {'perc': 90, 'time': 3000});



  function multistepForm() {
    $("#formTriggerBtn1").click(function () {
      $(".form-setp").removeClass("active");
      $("#formSetp2").addClass("active");
      $(".form-slider-range .progress-line").width("25%");
      $(".progress-dot.two").addClass("active");
    });
    $("#formTriggerBtn2, #BtnSkip1").click(function () {
      $(".form-setp").removeClass("active");
      $("#formSetp3").addClass("active");
      $(".form-slider-range .progress-line").width("50%");
      $(".progress-dot.three").addClass("active");
    });
    $("#formTriggerBtn3, #BtnSkip2").click(function () {
      $(".form-setp").removeClass("active");
      $("#formSetp4").addClass("active");
      $(".form-slider-range .progress-line").width("75%");
      $(".progress-dot.four").addClass("active");
    });
    $("#formTriggerBtn4").click(function () {
      $(".form-setp").removeClass("active");
      $("#formSetp5").addClass("active");
      $(".form-slider-range .progress-line").width("100%");
      $(".progress-dot.five").addClass("active");
    });
    $("#BtnPrev1").click(function () {
      $(".form-setp").removeClass("active");
      $("#formSetp1").addClass("active");
      $(".progress-dot.two").removeClass("active");
      $(".form-slider-range .progress-line").width("0%");
    });
    $("#BtnPrev2").click(function () {
      $(".form-setp").removeClass("active");
      $("#formSetp2").addClass("active");
      $(".progress-dot.three").removeClass("active");
      $(".form-slider-range .progress-line").width("25%");
    });
    $("#BtnPrev3").click(function () {
      $(".form-setp").removeClass("active");
      $("#formSetp3").addClass("active");
      $(".progress-dot.four").removeClass("active");
      $(".form-slider-range .progress-line").width("50%");
    });
  }
  multistepForm();

  $(".show-pass-btn").click(function () {
    const passwordField = $(this)
      .closest(".profile-single-input")
      .find("input");

    console.log(passwordField);

    if ($(this).find("i").hasClass("fa-eye")) {
      $(this).find("i").removeClass("fa-eye");
      $(this).find("i").addClass("fa-eye-slash");
    } else {
      $(this).find("i").removeClass("fa-eye-slash");
      $(this).find("i").addClass("fa-eye");
    }
    if (passwordField.attr("type") === "password") {
      passwordField.attr("type", "text");
    } else {
      passwordField.attr("type", "password");
    }
  });

  $('#analysisEx21').slider({
    id: 'slider22',
    min: 0,
    max: 100,
    step: 1,
    value: 85,
    rangeHighlights: [{ "start": 2, "end": 5, "class": "category1" },
      { "start": 7, "end": 8, "class": "category2" },
      { "start": 17, "end": 19 },
      { "start": 17, "end": 24 },
      { "start": -3, "end": 19 }
    ]
  });
  $('#analysisEx22').slider({
    id: 'slider22',
    min: 0,
    max: 100,
    step: 1,
    value: 85,
    rangeHighlights: [{ "start": 2, "end": 5, "class": "category1" },
      { "start": 7, "end": 8, "class": "category2" },
      { "start": 17, "end": 19 },
      { "start": 17, "end": 24 },
      { "start": -3, "end": 19 }
    ]
  });
  $('#analysisEx23').slider({
    id: 'slider22',
    min: 0,
    max: 100,
    step: 1,
    value: 85,
    rangeHighlights: [{ "start": 2, "end": 5, "class": "category1" },
      { "start": 7, "end": 8, "class": "category2" },
      { "start": 17, "end": 19 },
      { "start": 17, "end": 24 },
      { "start": -3, "end": 19 }
    ]
  });
  $('#analysisEx24').slider({
    id: 'slider22',
    min: 0,
    max: 100,
    step: 1,
    value: 85,
    rangeHighlights: [{ "start": 2, "end": 5, "class": "category1" },
      { "start": 7, "end": 8, "class": "category2" },
      { "start": 17, "end": 19 },
      { "start": 17, "end": 24 },
      { "start": -3, "end": 19 }
    ]
  });
  $('#analysisEx25').slider({
    id: 'slider22',
    min: 0,
    max: 100,
    step: 1,
    value: 85,
    rangeHighlights: [{ "start": 2, "end": 5, "class": "category1" },
      { "start": 7, "end": 8, "class": "category2" },
      { "start": 17, "end": 19 },
      { "start": 17, "end": 24 },
      { "start": -3, "end": 19 }
    ]
  });
  $('#analysisEx26').slider({
    id: 'slider22',
    min: 0,
    max: 100,
    step: 1,
    value: 85,
    rangeHighlights: [{ "start": 2, "end": 5, "class": "category1" },
      { "start": 7, "end": 8, "class": "category2" },
      { "start": 17, "end": 19 },
      { "start": 17, "end": 24 },
      { "start": -3, "end": 19 }
    ]
  });


      
});

// off canvas menu
function openNav() {
  document.getElementById("ideaSidenav").style.width = "372px";
}
function closeNav() {
  document.getElementById("ideaSidenav").style.width = "0";
}
