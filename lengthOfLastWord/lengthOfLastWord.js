 function length (s){

    s = s.trim();

    let last = s.lastIndexOf(' ');

    return s.length - last - 1;
 }

 let string = "Hello World";
 
 let result = length(string);

 console.log(result)