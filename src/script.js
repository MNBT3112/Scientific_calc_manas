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
    
    
    if(value=="AC"){
        ans="";
        display.value=ans;
    
    }
    else if(value=="="){
        ans=ans.replace("x","*")
        .replace("%","*.01")
        .replace("÷","/");
    
    ans=evaluation();
    
    
    display.value=ans;
    
    }
    
    else{
        ans = ans +value;
    display.value = ans;
    
    }
    
    
    
    
    
    
    
        })
    
    
    
    }
    
    
    
    
    })
    