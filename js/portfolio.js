$(document).ready(function(){
  alert("it works!");
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/Mark-A-A/repos",
    success: function(repos){
      console.log("Holy Cow! Mark's GitHub API Endpoint Connection");
      //debugger
      for(var i=0; i < repos.length; i++) {
        var newRepoURL = buildRepoList(repos[i]);
        console.log(newRepoURL);
        $(".list-group").append("<p>"+newRepoURL+"</p>"); //Appended JSON to the page
      }
    },
    error: function (jqXHR, textStatus, errorThrown){
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
  })

  function buildRepoList(repoData){
    var commitsAPIUrl = "https://api.github.com/repos"; //API URL
    commitsAPIUrl += repoData.owner.login +"/";       //looking at object info and adding it
    commitsAPIUrl += repoData.name + "/commits";

    var newLink = $("<a>")
      .attr("href", commitsAPIUrl)
      .addClass("list-group-item")
      .append(repoData.full_name);
    return newLink;
  };

  //$("#about").on(click, function(){
    
  //});
});