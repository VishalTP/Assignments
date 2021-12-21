calculate = function(){
    var value1= Number(document.getElementById("value1").value);
    var value2= Number(document.getElementById("value2").value);
    var operation= document.getElementById("operation").value;
    if(operation=='+'){
        document.getElementById("result").value= value1+value2;
    }else if(operation=='-'){
        document.getElementById("result").value= value1-value2;
    }else if(operation=='*'){
        document.getElementById("result").value= value1*value2;
    }else if(operation=='/'){
        document.getElementById("result").value= value1/value2;
    }else{
        window.alert("Please select an operation")
    }
}