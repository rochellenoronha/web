document.getElementById('wrapper').addEventListener("click",function(){
    var disp=document.getElementById('disp');
    var  odisp=document.getElementById('Odisp');
    //alert('wrapper');
     if(event.target.classList.contains('inputs'))
     {
        // alert('inputs');
         var inputValue=event.target.value;
         alert(inputValue);
         disp.value+=inputValue;
     }
     else if(event.target.value==="="){
         //alert('calculate');
         disp.value=disp.value.replace("÷","/");
         disp.value=disp.value.replace("x","*");
         odisp.value=eval(dispvalue);
         odisp.value=dispValue,replace("/","÷");
         odisp.value=dispValue,replace("*","x");
         odisp.value=eval(disp.value);
        }
     else if(event.target.value==="C"){
         //alert("clearscreen");
         Odisp.value=null;
         disp.value=null;
        }
     else{
         return null;
        }

    })