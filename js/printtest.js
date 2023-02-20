
document.getElementById('current').onclick = function(){
    window.print(); 
}

    var prtContent = document.getElementById("printsec").onclick = function(){
        var printwin = window.open("");
        printwin.document.write(document.getElementById("printsec").innerHTML);
        printwin.print();
    }


