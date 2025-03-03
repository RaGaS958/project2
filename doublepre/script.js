const disp =document.querySelector("#display");
const input=document.querySelectorAll(".inp");
const ent=document.querySelector("#enter");
const out=document.querySelector("#output");
const sign=document.querySelector("#sign");
const midval=document.querySelector("#mid");
const lastval=document.querySelector("#last");
let dispp="";
let num=0;
input.forEach((inpu) =>
{
inpu.addEventListener("click",()=>
    {
      let inputval=inpu.innerText;
      if(!(inputval==="DEL") && !(inputval==="CLR"))
      {
       dispp=dispp+inputval;
      disp.innerText=dispp;
    }
    else if(inputval==="CLR")
    {
        disp.innerText="";
        dispp="";
    }
    else
    {
       dispp= dispp.substring(0,dispp.length-1);
        disp.innerText=dispp;
    }
});
});
ent.addEventListener("click",()=>
    {
        num=disp.innerText;
        const buffer=new ArrayBuffer(4);
        const view=new DataView(buffer);
        view.setFloat32(0,num,false);
        let binary="";
        for(let i=0;i<4;i++)
        {
            binary+=view.getUint8(i).toString(2).padStart(8,"0");
        }
        let res=binary.trim();
        sign.innerText=res.substring(0,1);
        midval.innerText=res.substring(1,9);
        lastval.innerText=res.substring(9,res.length);
        out.style.display="inline";
        

});