function checkPatternEmail(inputString)
      {
        var pattern = /([\w\-]+\@[\w\-]+\.[\w\-]+)/;
        if(pattern.test(inputString))
          return false;
        return true;
      }
      module.exports = checkPatternEmail;