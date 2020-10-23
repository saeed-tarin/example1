import functionMessage from "./functionMessage";
function printInformation(Inf)
      {
        for(var i=0;i<Inf.length;i++){
          if(Inf[i].value)
            console.log(functionMessage(i) + Inf[i].value);
        }
      }
      module.exports = printInformation;