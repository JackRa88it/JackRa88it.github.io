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

$("#contact-form").on('submit', function(event) {
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
