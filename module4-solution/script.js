(function(window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var name in names) {

    var firstLetter = names[name].charAt(0);
    var lower= firstLetter.toLocaleLowerCase();
    
    if (firstLetter==="J" || lower==="j") {
      byeSpeaker.speak(names[name]);
   
    } else {
      helloSpeaker.speak(names[name]);
     
    }
  }
})(window);
