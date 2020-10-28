import functionMessage from "./functionMessage";
function printInformation(Inf: any)
      {
        for(let i:number = 0; i < Inf.length; i++){
          if(Inf[i].value)
            console.log(functionMessage(i) + Inf[i].value);
        }
      }
      module.exports = printInformation;