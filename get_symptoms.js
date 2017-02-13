      var res;
      var idts = [];
      var take_res = take_res || (function() {
        return {
          init : function(Args) {
            res = Args;
          },
      };
    }());
      while(1) {
        if (res != undefined)
          break;
      }
        var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          x = JSON.parse(this.responseText);
          console.log(x);
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
                xhttp2.open("GET", "https://sandbox-healthservice.priaid.ch/issues/" + id + "/info?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphaW5yaXNoYWIxOTk2QGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTE1MSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxNy0wMi0xMCIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNDg2OTMyNzgxLCJuYmYiOjE0ODY5MjU1ODF9.QXXX3MlrWrAocSvAPEtdEzHRO2qUdG_IJwPjXfxLZOE&language=en-gb&format=json", true);
                xhttp2.send();
            }     
        };
        xhttp1.open("GET", "https://sandbox-healthservice.priaid.ch/diagnosis/specialisations?symptoms=[" + idts + "]&gender=male&year_of_birth=1988&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphaW5yaXNoYWIxOTk2QGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTE1MSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxNy0wMi0xMCIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNDg2OTMyNzgxLCJuYmYiOjE0ODY5MjU1ODF9.QXXX3MlrWrAocSvAPEtdEzHRO2qUdG_IJwPjXfxLZOE&language=en-gb&format=json", true);
        xhttp1.send();
          }
      };
      xhttp.open("GET", "https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphaW5yaXNoYWIxOTk2QGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTE1MSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxNy0wMi0xMCIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNDg2OTMyNzgxLCJuYmYiOjE0ODY5MjU1ODF9.QXXX3MlrWrAocSvAPEtdEzHRO2qUdG_IJwPjXfxLZOE&language=en-gb&format=json", true);
      xhttp.send();