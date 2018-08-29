function AlanAnnoyingKid(input){
    var array = input.slice(8, input.length-1);
    var x = input.split(' ');
    console.log(array);
    for(let i = 0; i < array.length; i++){
      if(x[2] == 'didn\'t'){
      let action = x[3];
      return "I don't think you "+ array +" today, I think you did "+ action +" it!";
      
        } else {
        let action = x[2];
        var action1 = action.slice(0, action.length-2);
        console.log(action1);
      return "I don't think you "+ array +" today, I think you didn't "+ action1 +" at all!";    
        }
      }
    }