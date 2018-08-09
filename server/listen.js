module.exports = function(http){
  var server = http.listen(3000 ,function(){
      console.log('Server listening on ');
  });
}
