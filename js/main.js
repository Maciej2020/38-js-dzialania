function calculator(a,b){
   let sum = a + b;
   let odej = a - b;
   let mnoz = a * b;


   (sum > 0) ? console.log(`1. Wynik dodawania wynosi ${sum}`) : console.log("1. Wynik jest ujemny");
   (odej > 0) ? console.log(`2. Wynik odejmownia wynosi ${odej}`) : console.log("2. Wynik jest ujemny");
   (mnoz > 0) ? console.log(`3. Wynik mnożenia wynosi ${mnoz}`) : console.log("3. Wynik jest ujemny");
 
}

calculator(-11,-2)