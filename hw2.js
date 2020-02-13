var age = prompt('Введите ваш возраст.');
if (age <= 18 && age >= 0){
    alert('Вы еще молоды. Вам нужно учится');
} else if(age > 18 && age <= 50){
    alert('Вам нужно работать');
} else if(age > 50 && age <=59){
    alert('Вам скоро на пенсию');
} else if( age > 59 && age <= 150){
    alert('Вы на пенсии');
}  else if (age != null){
    alert('Что-то пошло не так.')
 }



 var num1 = +prompt('Введите 1 число: ');
 var num2 = +prompt('Введите 2 число: ');
 var num3 = +prompt('Введите 3 число: ');

 if (num2<num1 && num1<num3){
     alert('Среднее: ' + num1);
 }
 else if (num3<num1 && num1<num2){
     alert('Среднее: ' + num1);
 }
 else if (num1<num2 && num2<num3){
     alert('Среднее: ' + num2);
 }
 else if (num3<num2 && num2<num1){
     alert('Среднее: ' + num2);
 }
 else{
     alert('Среднее: ' + num3);
 }

var hours24 = +prompt('Введите время')
 switch (hours24) {
     case 1:
         alert('Сейчас полночь');
         break;
     case 2:
         alert('Сейчас 2 часа ночи');
         break;
     case 3:
         alert('Сейчас 3 часа ночи');
         break;
     case 4:
         alert('Сейчас 4 час ночи');
         break;
     case 5:
         alert('Сейчас 5 утра');
         break;
     case 6:
         alert('Сейчас 6 утра');
         break;
     case 7:
         alert('Сейчас 7 утра');
         break;
     case 8:
         alert('Сейчас 8 утра');
         break;
     case 9:
         alert('Сейчас 9 утра');
         break;
     case 10:
         alert('Сейчас 10 утра');
         break;
     case 11:
         alert('Сейчас 11 утра');
         break;
     case 12:
         alert('Сейчас  полдень');
         break;
     case 13:
         alert('Сейчас час дня');
         break;
     case 14:
         alert('Сейчас 2 часа дня');
         break;
     case 15:
         alert('Сейчас 3 часа дня');
         break;
     case 16:
         alert('Сейчас 4 часа дня');
         break;
     case 17:
         alert('Сейчас 5 часов вечера');
         break;
     case 18:
         alert('Сейчас 6 часов вечера');
         break;
     case 19:
         alert('Сейчас 7 часов  вечера');
         break;
     case 20:
         alert('Сейчас 8 часов  вечера');
         break;
     case 21:
         alert('Сейчас 9 часов вечера');
         break;
     case 22:
         alert('Сейчас 10 часов вечера');
         break;
     case 23:
         alert('Сейчас 11 часов  вечера');
         break;
 
     default:
         alert('Укажите конкретное время');
         break;
 }
