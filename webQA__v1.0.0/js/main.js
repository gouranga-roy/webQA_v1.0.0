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
  $('.show-details-btn').click(function(){
    $('.loader-list-toggle').slideToggle();
  });

  // Progress Bar failed
  var bar = new ProgressBar.Circle('.progress-failed', {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FA5457',
    trailColor: 'rgba(250, 84, 87, 0.05)',
    trailWidth: 10,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: 'var(--dark)',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'16px',
        fontWeight:'700'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100));
    }
  });
  bar.animate(.1); 

  // Progress Bar warnings
  var bar = new ProgressBar.Circle('.progress-warnings', {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FA5457',
    trailColor: 'rgba(250, 84, 87, 0.05)',
    trailWidth: 10,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: 'var(--dark)',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'16px',
        fontWeight:'700'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100));
    }
  });
  bar.animate(0.2); 

  // Progress Bar passed
  var bar = new ProgressBar.Circle('.progress-passed', {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 2000,
    color: 'var(--text-lime-deep)',
    trailColor: 'rgba(250, 84, 87, 0.05)',
    trailWidth: 10,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: 'var(--dark)',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'16px',
        fontWeight:'700'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100));
    }
  });
  bar.animate(.5); 

  // Progress Bar Loader passed
  var bar = new ProgressBar.Circle('.loader-passed', {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 2000,
    color: 'var(--text-lime-deep)',
    trailColor: 'rgba(250, 84, 87, 0.05)',
    trailWidth: 10,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: 'var(--dark)',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'16px',
        fontWeight:'700'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100));
    }
  });
  bar.animate(.4); 

  // Progress Bar Loader Failed
  var bar = new ProgressBar.Circle('.loader-failed', {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 2000,
    color: 'var(--text-lime-deep)',
    trailColor: 'rgba(250, 84, 87, 0.05)',
    trailWidth: 10,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: 'var(--dark)',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'16px',
        fontWeight:'700'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100));
    }
  });
  bar.animate(.7); 

});
