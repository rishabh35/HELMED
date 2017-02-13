var txt = '';
var idts = [];
var x, y, z;
var id;
var tosym = '';
var tosplit = [];
var res;
var tts;
var final_transcript = '';
var recognizing = false;
var token = eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphaW5yaXNoYWIxOTk2QGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTE1MSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxNy0wMi0xMCIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNDg2OTkyNjYyLCJuYmYiOjE0ODY5ODU0NjJ9.a3Wd7JOpOlUu4cKAsX00Rj0iVrxBp6iv0mVS_U240wg;
var symps = ['DIZZINESS', 'COUGH', 'FEVER'];
if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} 
else {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.onstart = function() {
    recognizing = true;
  };
  recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } 
      else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    res = final_transcript.split(" ");
    console.log(res);

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          x = JSON.parse(this.responseText);
          for (var i = 0; i < x.length; i++) {
            tosplit = x[i]["Name"].split(" ");
              for (var j = 0; j < res.length; j++) {
                for (var k = 0; k < tosplit.length; k++) {
                  if (j >= res.length) {
                    j=j+k;
                    break;
                  }
                  if (tosplit[k].toUpperCase() == res[j].toUpperCase()) {
                    j++;
                  }
                  else {
                    j=j-k;
                    break;
                  }
                }
                if (k == tosplit.length) {
                  idts = idts.concat(x[i]["ID"]);
                      break;
                  }
                }
            }
            var xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                y = JSON.parse(this.responseText);
                id = y[0]["ID"];
                console.log(y);
                var xhttp2 = new XMLHttpRequest();
                xhttp2.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                    z = JSON.parse(this.responseText);
                    tts = z["TreatmentDescription"];
                    responsiveVoice.speak(tts);
                  }     
                };
                xhttp2.open("GET", "https://sandbox-healthservice.priaid.ch/issues/" + id + "/info?token=“ + token + “&language=en-gb&format=json", true);
                xhttp2.send();
            }     
        };
        xhttp1.open("GET", "https://sandbox-healthservice.priaid.ch/diagnosis/specialisations?symptoms=[" + idts + "]&gender=male&year_of_birth=1988&token=“ + token + ”&language=en-gb&format=json", true);
        xhttp1.send();
          }
      };
    console.log(idts);
      xhttp.open("GET", "https://sandbox-healthservice.priaid.ch/symptoms?token=“ + token + “&language=en-gb&format=json", true);
     xhttp.send();
  };
}
var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}
var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}
function startlistening(event) {
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  recognition.lang = 'en-US';
  recognition.start();
  ignore_onend = false;
  start_img.src = 'mic.gif';
  start_timestamp = event.timeStamp;
}