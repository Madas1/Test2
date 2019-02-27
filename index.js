
function calc(operation){

    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c;

    switch(operation){
      
        case 'add':
        
        c = parseInt(a) + parseInt(b);
        console.log(c);
        break;

        case 'sub': 
       
        c = parseInt(a) - parseInt(b);
        console.log(c);
        break;

        case 'mul': 
       
        c = parseInt(a) * parseInt(b);
        console.log(c);
        break;

        case 'div':
        

        c = parseInt(a) / parseInt(b);
        console.log(c);
        break;

        case 'mod':
       
        c = parseInt(a) % parseInt(b);
        console.log(c);
        break;

}
}
