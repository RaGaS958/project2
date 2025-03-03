const disp =document.querySelector("#display");
const input=document.querySelectorAll(".inp");
const ent=document.querySelector("#enter");
const out=document.querySelector("#output");
const ans=document.querySelector("#ans");
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
        num=parseInt(disp.innerText);
        function comple(num,bits)
        {
            let binary=Math.abs(num).toString(2).padStart(bits,'0');
            let one=binary.split("").map(bit=>bit==='0'?'1':'0').join('');
            let n=one.length;
            let carry=1;
            let two="";
            for(let i=n-1;i>=0;i--)
            {
                if(one[i]==='1' && carry===1)
                {
                    two='0'+two;
                }
                else if(one[i]==='0' && carry===1)
                {
                    two='1'+two;
                    carry=0;
                }
                else
                {
                    two=one[i]+two;
                }
            }
            if(carry===1)
            {
                two='1'+two;
            }
            return two;

    }
        
        ans.innerText=comple(num,16);
        out.style.display="inline";
        

});