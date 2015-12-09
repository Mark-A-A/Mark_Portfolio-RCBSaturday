$(document).ready(function(){
  
  $(document).on("click", "a", function(e){
    e.preventDefault(); //prevent the user from going to JSON commits page
    alert("Hey Committer - you clicked a link");
    
      $.ajax({  //Adding ajax request based on the link of repo
        type: "GET",
        url: $(this).attr("href"), //Event listener for links of repos
        success: function (commits) {
          console.log(commits);
          for( var i = 0; i < commits.length; i++){
            console.log(commits[i]);
          }
        },
        error: function (jqXHR, textStatus, errorThrown){
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
        }
     });
    
  });
});