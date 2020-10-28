function checkPatternNameAndFamilly(inputString: string): boolean
      {
        var pattern: RegExp = /[^A-z]/g;
        if(pattern.test(inputString))
          return true;
        return false;
      }
      module.exports = checkPatternNameAndFamilly;