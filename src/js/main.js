

$('#nav-header').hide().fadeIn(1000);

$('.speaker-item').hide().fadeIn(2000);

$('.section').hide();

$('#info').show();

$('#speaker-link').click( function() {
  $('.section').hide();
  $('#speakers').show();
});

$('#info-link').click( function() {
  $('.section').hide();
  $('#info').show();
});

$('#venue-link').click( function() {
  $('.section').hide();
  $('#venue').show();
});

$('#schedule-link').click( function() {
  $('.section').hide();
  $('#schedule').show();
});



