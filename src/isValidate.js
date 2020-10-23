import changeBorderStyle from "./changeBorderStyle";
import errorFunction from "./errorFunction";
import printInformation from "./printInformation";
import checkEmptyBox from "./checkEmptyBox";
import checkPatternNameAndFamilly from "./checkPatternNameAndFamilly";
import checkPatternEmail from "./checkPatternEmail";


function isValidate(e) {
        e.preventDefault();
        changeBorderStyle();
        var tempInformation = document.getElementById("formElements").elements;
        var message;
        message = document.getElementById("msg1");
        message.innerHTML = "";
        
        try {

          if (checkEmptyBox(tempInformation)) throw errorFunction(0);

          if (checkPatternNameAndFamilly(tempInformation[0].value)) 
            throw errorFunction(1);

          if (checkPatternNameAndFamilly(tempInformation[1].value))
            throw errorFunction(2);

          if (checkPatternEmail(tempInformation[2].value)) throw errorFunction(3);

          if (tempInformation[3].value != tempInformation[4].value) throw errorFunction(4);

        }
        catch (err) {
          return false;
        }
        message.innerHTML = "اطلاعات شما با موفقیت ارسال شد";
        
        printInformation(tempInformation); 
      }
      module.exports = isValidate;