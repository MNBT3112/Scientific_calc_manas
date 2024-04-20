document.addEventListener("DOMContentLoaded", function (){





    const display = document.getElementById('cal_display');
    const buttons = document.getElementsByClassName('btn');
    function evaluation(){
        return eval(ans).toString();
    
    }
    
    let ans = " ";
    
    
    for(let i=0; i<buttons.length;i++){
        
    
        const button= buttons[i];
    
    
        button.addEventListener('click', function(){
    
    const value =button.innerText;
    
    
try{
    if(value=="AC"){
        ans="";
        display.value=ans;
    
    }
    else if(value=="="){
        ans=
        ans.replace("x","*")
        .replace("%","*.01")
        .replace("÷","/")
        .replace("sin", "Math.sin")
        .replace("cos", "Math.cos")
        .replace("ln", 'Math.log')
       .replace('π', 'Math.PI')
       .replace('log', 'Math.log10')
       .replace('e', 'Math.E')
       .replace('tan', 'Math.tan')
       .replace('√', 'Math.sqrt');
       
    
    ans=evaluation();
    
    
    display.value=ans;
    
    }
    
    else{
        ans = ans +value;
    display.value = ans;
    
    }  
}
catch (error){
  ans="Bakchodi Mat Karo";
  display.value = ans;

}

   
    
    
    
    
    
    
    
        })
    
    
    
    }
    
    
    
    
    })
    