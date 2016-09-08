console.log('scripts sourced');
$(document).ready(function(){
console.log('doc ready');

$('#sendInfo').on('click', function(){

  console.log('button click works ');
  var objectToSend={
    creature:'cat',
    noise:'meow'
  };
$.ajax({
    type:'POST',
    url:'/texter',
    data:objectToSend,
    success: function(data){
      console.log('this is from the server: '+data);
    }//success function
});//ajax call
  });//onclick send Info

});//docready
