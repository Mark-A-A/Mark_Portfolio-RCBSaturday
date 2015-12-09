$(document).ready(function(){
  
  $(document).on("click", "a", function(e){
    e.preventDefault();
    alert("Hey Committer - you clicked a link");
  });
});