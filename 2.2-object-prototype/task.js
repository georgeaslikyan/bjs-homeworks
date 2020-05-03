function getAnimalSound(animal) {
    if (animal == undefined) {
      return null;
    } else if (animal != undefined) {
      let sound = animal.sound;
      return sound;
    };
  };
  
  function getAverageMark(marks) {
    if (marks.length == 0) {
      return 0;
    } else {
      let sum = 0;
      for (let i = 0; i < marks.length; i++) {
        let average = (sum += marks[i]);
        let roundedAverage = Math.floor(average);
        return roundedAverage;
      }
    }
  };
  
  

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}