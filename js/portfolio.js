$(document).ready(function(){
  
  //Accessing my GitHub API
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/Mark-A-A/repos",
    success: function(repos){
      console.log("Holy Cow! Mark's GitHub API Endpoint Connection");
      
      for(var i=0; i < repos.length; i++) {
        var newRepoURL = buildRepoURL (repos[i]);
        console.log(newRepoURL);
        $(".list-group").append(newRepoURL); //Appended JSON to the page
        //debugger
      }
    },
    error: function (jqXHR, textStatus, errorThrown){
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
  })


  // Building the Repo URL
  function buildRepoURL (repoData){

    //Format: https://api.github.com/repos/Mark-A-A/frontend-nanodegree-resume/commits{/sha}"
    // Creating the URL using the API format
    var commitsAPIUrl = "https://api.github.com/repos/"; //API URL:
    commitsAPIUrl += repoData.owner.login +"/";       //looking at object info and adding it
    commitsAPIUrl += repoData.name + "/commits";

    // Making the link on the page
    var newLink = $("<a>")
      .attr("href", commitsAPIUrl)
      .addClass("list-group-item")
      .append(repoData.full_name);
    
    return newLink;
  };

  //$("#about").on(click, function(){
    
  //});
});