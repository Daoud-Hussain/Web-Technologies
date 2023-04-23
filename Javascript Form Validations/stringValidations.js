function validate(){
    var str = "This is any string";
    var pattern = /[^h]/g;
    var result = str.match(pattern)

    document.getElementById("demo").innerHTML = result;
}