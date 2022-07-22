// $(document).addEventListener("")
$(".btn").click(function(event){
    var num = this.innerHTML;
    var bef = document.querySelector(".inner").innerHTML;
    if(num =='='){
        if(bef.indexOf('+') != -1){
            var pos = bef.indexOf('+');
            var n1 = parseFloat(bef.slice(0,pos));
            var n2 = parseFloat(bef.slice(pos+1));
            $(".inner").html(n1+n2);
        }
        else if(bef.indexOf('-') != -1){
            var pos = bef.indexOf('-');
            var n1 = Number(bef.slice(0,pos));
            var n2 = Number(bef.slice(pos+1));
            $(".inner").html(n1-n2);
        }
        else if(bef.indexOf('*') != -1){
            var pos = bef.indexOf('*');
            var n1 = Number(bef.slice(0,pos));
            var n2 = Number(bef.slice(pos+1));
            $(".inner").html(n1*n2);
        }
        else if(bef.indexOf('/') != -1){
            var pos = bef.indexOf('/');
            var n1 = Number(bef.slice(0,pos));
            var n2 = Number(bef.slice(pos+1));
            $(".inner").html(n1/n2);
        }
        else{
            $(".inner").html("Error");
        }
    }
    else if(num=='AC'){
        $(".inner").html('0');
    }
    else{
        while (bef[0] == 0) bef = bef.slice(1);
        $(".inner").html(bef + num);
    }
});


$(document).keypress(function(event){
    var num = event.key;
    var bef = document.querySelector(".inner").innerHTML;
    if (num == '=') {
        if (bef.indexOf('+') != -1) {
            var pos = bef.indexOf('+');
            var n1 = parseFloat(bef.slice(0, pos));
            var n2 = parseFloat(bef.slice(pos + 1));
            $(".inner").html(n1 + n2);
        }
        else if (bef.indexOf('-') != -1) {
            var pos = bef.indexOf('-');
            var n1 = Number(bef.slice(0, pos));
            var n2 = Number(bef.slice(pos + 1));
            $(".inner").html(n1 - n2);
        }
        else if (bef.indexOf('*') != -1) {
            var pos = bef.indexOf('*');
            var n1 = Number(bef.slice(0, pos));
            var n2 = Number(bef.slice(pos + 1));
            $(".inner").html(n1 * n2);
        }
        else if (bef.indexOf('/') != -1) {
            var pos = bef.indexOf('/');
            var n1 = Number(bef.slice(0, pos));
            var n2 = Number(bef.slice(pos + 1));
            $(".inner").html(n1 / n2);
        }
        else {
            $(".inner").html("Error");
        }
    }
    else if ( (num.charCodeAt(0) >= "0".charCodeAt(0) && num.charCodeAt(0) < '9'.charCodeAt(0)) || num=='-' || num=='+' || num=='*' || num=='/' ){
        while (bef[0] == 0) bef = bef.slice(1);
        $(".inner").html(bef + num);
    }
});
