function checkEmptyBox(tempInformation:any): boolean
      {
        for(let i: number = 0; i < tempInformation.length - 1; i++){
          if(!tempInformation[i].value)
            return true;
        }
        return false;
      }
      module.exports = checkEmptyBox;