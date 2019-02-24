
function calculator(){

    //var c;

    switch(operation){
        

        case 1 :
        
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;

        Var c = parseInt(a) + parseInt(b);
        console.log(c);
        break;

        case 2 : 
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;

        Var c = parseInt(a) - parseInt(b);
        console.log(c);
        break;

        case 3 : 
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;

        Var c = parseInt(a) * parseInt(b);
        console.log(c);
        break;

        case 4 :
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;

        Var c = parseInt(a) / parseInt(b);
        console.log(c);
        break;

        case 5 :
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;

        var c = parseInt(a) % parseInt(b);
        console.log(c);
        break;

}
}
