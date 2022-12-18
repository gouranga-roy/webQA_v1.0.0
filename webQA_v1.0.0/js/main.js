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

  function progressBars() {
    if (
      typeof ProgressBar === null ||
      typeof ProgressBar === "undefined" ||
      typeof ProgressBar === undefined
    )
      return;

    // Progress Bar failed
    if ($(".progress-failed").length) {
      var bar = new ProgressBar.Circle(".progress-failed", {
        strokeWidth: 10,
        easing: "easeInOut",
        duration: 2000,
        color: "#FA5457",
        trailColor: "rgba(250, 84, 87, 0.05)",
        trailWidth: 10,
        easing: "easeOut",
        svgStyle: { width: "100%", height: "100%" },
        text: {
          value: "0",
          style: {
            color: "var(--dark)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "16px",
            fontWeight: "700",
          },
        },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100));
        },
      });
      bar.animate(0.1);
    }

    // Progress Bar warnings
    if ($(".progress-warnings").length) {
      var bar = new ProgressBar.Circle(".progress-warnings", {
        strokeWidth: 10,
        easing: "easeInOut",
        duration: 2000,
        color: "#FA5457",
        trailColor: "rgba(250, 84, 87, 0.05)",
        trailWidth: 10,
        easing: "easeOut",
        svgStyle: { width: "100%", height: "100%" },
        text: {
          value: "0",
          style: {
            color: "var(--dark)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "16px",
            fontWeight: "700",
          },
        },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100));
        },
      });
      bar.animate(0.2);
    }

    // Progress Bar passed
    if ($(".progress-passed").length) {
      var bar = new ProgressBar.Circle(".progress-passed", {
        strokeWidth: 10,
        easing: "easeInOut",
        duration: 2000,
        color: "var(--text-lime-deep)",
        trailColor: "rgba(250, 84, 87, 0.05)",
        trailWidth: 10,
        easing: "easeOut",
        svgStyle: { width: "100%", height: "100%" },
        text: {
          value: "0",
          style: {
            color: "var(--dark)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "16px",
            fontWeight: "700",
          },
        },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100));
        },
      });
      bar.animate(0.5);
    }

    // Progress Bar Loader passed
    if ($(".loader-passed").length) {
      var bar = new ProgressBar.Circle(".loader-passed", {
        strokeWidth: 10,
        easing: "easeInOut",
        duration: 2000,
        color: "var(--text-lime-deep)",
        trailColor: "rgba(250, 84, 87, 0.05)",
        trailWidth: 10,
        easing: "easeOut",
        svgStyle: { width: "100%", height: "100%" },
        text: {
          value: "0",
          style: {
            color: "var(--dark)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "16px",
            fontWeight: "700",
          },
        },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100));
        },
      });
      bar.animate(0.4);
    }

    // Progress Bar Loader Failed
    if ($(".loader-failed").length) {
      var bar = new ProgressBar.Circle(".loader-failed", {
        strokeWidth: 10,
        easing: "easeInOut",
        duration: 2000,
        color: "var(--text-lime-deep)",
        trailColor: "rgba(250, 84, 87, 0.05)",
        trailWidth: 10,
        easing: "easeOut",
        svgStyle: { width: "100%", height: "100%" },
        text: {
          value: "0",
          style: {
            color: "var(--dark)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "16px",
            fontWeight: "700",
          },
        },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100));
        },
      });
      bar.animate(0.7);
    }
  }
  progressBars();

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
});

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));