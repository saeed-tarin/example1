function checkPatternEmail(inputString: string): boolean
      {
        var pattern: RegExp = /([\w\-]+\@[\w\-]+\.[\w\-]+)/;
        if(pattern.test(inputString))
          return false;
        return true;
      }
      module.exports = checkPatternEmail;