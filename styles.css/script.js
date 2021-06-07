const costo= 820000

function calcular() {
    document.getElementById("form2").style.display="block"; 
    var x = parseInt(document.getElementById("cantidaddecompra").value);
    const costo=820000;
    var res1 = (x*costo);
    document.getElementById("valor1").value= res1;  
    
    if(res1>=9840000){
     var x = parseInt(document.getElementById("cantidaddecompra").value);
        const costo=820000;
        var descuento= 0;    
        var total=(res1-descuento);
        document.getElementById("valor2").value= descuento; 
        document.getElementById("valor3").value= total;
    }
    else if(res1>=6560000){
        
        var descuento= ((35*res1)/100);
        var total=(res1-descuento);
        document.getElementById("valor2").value= descuento; 
        document.getElementById("valor3").value= total;
    }
    else if(res1>=3280000){
        
        var descuento= ((25*res1)/100);
        var total=(res1-descuento);
        document.getElementById("valor2").value= descuento; 
        document.getElementById("valor3").value= total;
    }
    else if(res1>=1640000){
        
        var descuento= ((15*res1)/100);
        var total=(res1-descuento);
        document.getElementById("valor2").value= descuento; 
        document.getElementById("valor3").value= total;
    }
    
    else{
        var descuento= 0;    
        var total=(res1-descuento);
        document.getElementById("valor2").value= descuento; 
        document.getElementById("valor3").value= total;
    }
}



     
     
       


    
    



