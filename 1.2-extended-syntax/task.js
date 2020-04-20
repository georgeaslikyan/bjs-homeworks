  "use strict"

  function getResult(a,b,c) {
    const disc = (Math.pow(b, 2) - (4 * a * c));
    if (disc === 0) {
    const x = -b / (2 * a);
    return [x];
    }else if (disc > 0) {
    const x1 = ((-b + Math.sqrt(disc)) / (2 * a));
    const x2 = ((-b - Math.sqrt(disc)) / (2 * a));
    return [x1, x2];
    };
    return [];
    };


    function getAverageMark(marks){
        const length = marks.length;
        if (length === 0) return length;
        const newMarks = marks.slice(0, 5);
        const newLength = newMarks.length;
        let sum = 0;
        for (let i = 0; i < newLength; i++) {
        sum += newMarks[i];
        }
        return sum / newLength;
        };




        function askDrink(name,dateOfBirthday){
            const date = new Date;
            let userYear = date.getFullYear() - dateOfBirthday;
          
            if(userYear >= 18) {
              return `Не желаете ли олд-фэшн, ${name}?`;
            } else {
              return`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
            }
          }