function addPromise (a,b){

  var $a, $b, $output;

  $a = a;
  $b = b;

  if (typeof $a === "number" && typeof $b === "number"){
    $output = $a + $b;
  }else{
    $output = "One var is not a number"
  }

  return new Promise (function(resolve, reject){
    resolve($output);
    reject ($output);
  });
}

addPromise(2,3).then(function(success){
  console.log(success)
}, function(err){
  console.log(err)
});