function functionMessage(numberMsg: number): string
      {
        switch(numberMsg)
        {
          case 0: return "name is: ";
          case 1: return "last name is: ";
          case 2: return "email is: ";
          case 3: return "password is: ";
          case 4: return "repeat password is: ";
          default: return "input is invalid";
        }
      }
      module.exports = functionMessage;