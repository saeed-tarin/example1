function changeBorderStyle(): void
      {
        var tempInformation: HTMLElement = document.getElementById("formElements");
        for(let i: number = 0; i < tempInformation.length - 1; i++ ){
          if(!tempInformation[i].value){
           tempInformation[i].className = "mystyle";
          }else{
           tempInformation[i].className = "previousstyle";
          }
        } 
      }
      module.exports = changeBorderStyle;