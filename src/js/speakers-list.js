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


/* desired data structure */
/*<ul id="speaker-list">
      <li>
        <h2 class="speaker-name" >Will Gervais</h2>
        <p class="speaker-info">Professor at University of Kentucky.</p>
        <div><img class="speaker-photo" src="src/img/speakers/will_gervais.jpg"></div>
      </li>
      <li>
        <h2 class="speaker-name" >Annalise Soiree</h2>
        <p class="speaker-info">A very good speaker.</p>
        <div><img class="speaker-photo" src="src/img/speakers/annalise_soiree.jpg"></div>
      </li>
      <li>
        <h2 class="speaker-name" >Annalise Soiree</h2>
        <p class="speaker-info">A very good speaker.</p>
        <div><img class="speaker-photo" src="src/img/speakers/annalise_soiree.jpg"></div>
      </li>
      <li>
        <h2 class="speaker-name" >Annalise Soiree</h2>
        <p class="speaker-info">A very good speaker.</p>
        <div><img class="speaker-photo" src="src/img/speakers/annalise_soiree.jpg"></div>
      </li>
      <li>
        <h2 class="speaker-name" >Annalise Soiree</h2>
        <p class="speaker-info">A very good speaker.</p>
        <div><img class="speaker-photo" src="src/img/speakers/annalise_soiree.jpg"></div>
      </li>
      <li>
        <h2 class="speaker-name" >Annalise Soiree</h2>
        <p class="speaker-info">A very good speaker.</p>
        <div><img class="speaker-photo" src="src/img/speakers/annalise_soiree.jpg"></div>
      </li>
    </ul>
    */

