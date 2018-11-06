// Initialize Firebase
var config = {
  apiKey: "AIzaSyCUjryvUc4ikNFeFL1Sevl1qLpgVaeZ6NQ",
  authDomain: "portfolio-messages-505b7.firebaseapp.com",
  databaseURL: "https://portfolio-messages-505b7.firebaseio.com",
  projectId: "portfolio-messages-505b7",
  storageBucket: "portfolio-messages-505b7.appspot.com",
  messagingSenderId: "517427521016"
};
firebase.initializeApp(config);

// contact form
function pushToFirebase(messageObj) {

  firebase.database().ref('contact-messages').push().set(messageObj)
      .then(function(snapshot) {
          console.log("message saved!");
          // some success method
          $('#message').val("");
          $('#messageModal').modal();
      }, function(error) {
          console.log('error' + error);
          // some error method
      });
}

$("#form").on('submit', function(event) {
  event.preventDefault();
  let messageObj = {};
  messageObj.name = $('#name').val();
  messageObj.email = $('#email').val();
  messageObj.message = $('#message').val();
  $('#name').val("");
  $('#email').val("");
  $('#message').val("sending message...");
  pushToFirebase(messageObj);
})

// custom nav highlighting on scroll
$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  $('a[href^="#"]').on('click', function (e) {
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#nav-links a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#nav-links ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}
