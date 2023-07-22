// =======================================Q1======================================
//Q1
// document.getElementById('myLink').addEventListener('click', function(event) {
//     event.preventDefault();
//     alert('You clicked on the link!')})

function showAlert(message) {
    alert(message);
  }
  document.getElementById('mob').addEventListener('click', function() {
    showAlert('You clicked on Mobile 1!');
  });