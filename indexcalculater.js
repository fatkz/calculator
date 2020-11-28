
function buttonclicked(number){
    console.log("")
  document.getElementById("view").value = document.getElementById("view").value + number
}


function test(){
    var a = document.getElementById("view").value
    var result = a.replace(/ *\([^)]*\<>) */g, "");
    var result2 = result.toLowerCase();
    if(result2){
        document.getElementById("view").value = eval(result2);
    }
}       

































