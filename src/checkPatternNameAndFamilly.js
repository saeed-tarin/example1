function checkPatternNameAndFamilly(inputString)
      {
        var pattern = /[^A-z]/g;
        if(pattern.test(inputString))
          return true;
        return false;
      }
      module.exports = checkPatternNameAndFamilly;