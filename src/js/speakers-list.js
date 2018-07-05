var speaker;

function print(message){
  var outputDiv = document.getElementById('speakers-container');
  outputDiv.innerHTML = message;
  outputDiv.style.height = 'auto';
}


function printSpeakerInfo( speaker ){
  var speakerHtml = '<div class="speaker-item clearfix">';
  speakerHtml += '<h2 class="speaker-name">'+ speaker.name +'</h2>';
  speakerHtml += '<p class="speaker-info">'+ speaker.title +'</p>';
  speakerHtml += '<img class="speaker-photo" src="'+ speaker.image +'"></div>';
  return speakerHtml;

}

function listAllSpeakers(){
  var output = '';
  for(var i = 0; i < speakers.length; i++){
    output += printSpeakerInfo(speakers[i]);

  }

  print(output);

}

listAllSpeakers();


