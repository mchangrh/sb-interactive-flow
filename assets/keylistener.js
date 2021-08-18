const yesKeys = [37, 65, 89]
const noKeys = [39, 68, 78] 

$(document).keyup(function(event) {
  if (yesKeys.includes(event.keyCode)) {
    $('#button1').click();
  } else if (noKeys.includes(event.keyCode)) {
    $('#button2').click();
  }
})