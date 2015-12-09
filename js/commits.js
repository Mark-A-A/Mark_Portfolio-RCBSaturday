$(document).ready(function(){
  
  $(document).on("click", "a", function(e){
    e.preventDefault(); //prevent the user from going to JSON commits page
    alert("Hey Committer - you clicked a link");
    
      $.ajax({  //Adding and making ajax  call request based on the link of repo for the commits
        type: "GET",
        url: $(this).attr("href"), //Event listener for links of repos
        success: function (commits) {
          console.log(commits);
          $("tbody").empty();
          for( var i = 0; i < commits.length; i++){
            console.log(commits[i]);

            $("tbody").append( buildTableRow(commits[i]) );  //Row Builder Callback
          }
        },
        error: function (jqXHR, textStatus, errorThrown){
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
        }
      });


      function buildTableRow (commitData) {
        debugger
        var shaTD = $("<td>").append(commitData.sha);
        var authorTD = $("<td>").append(commitData.author.login);
        var messageTD = $("<td>").append(commitData.commit.message);
        var dateTD =$("<td>").append(commitData.commit.author.date);
        var newRow = ("<tr>");

        return $(newRow).append(shaTD) // Adding each cell with correct information from object
          .append(authorTD)
          .append(messageTD)
          .append(dateTD);

      };
  });
});