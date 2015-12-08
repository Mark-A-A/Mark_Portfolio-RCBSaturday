$(document).ready(function(){
  alert("it works!");
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/Mark-A-A/repos",
    success: function(repos){
      console.log("Holy Cow! Mark's GitHub API Endpoint Connection");
    }
  })

  //$("#about").on(click, function(){
    
  //});
});