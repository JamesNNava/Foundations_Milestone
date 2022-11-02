/* higher or lower */
public class HigherOrLower {

  public static void main(String[] args) {
      Scanner scan = new Scanner(System.in);

      int number = (int)(1 + Math.random() * 10);

      system.out.println("insert value between 1 and 10")

      int num = 5
      
      for (i = 0; i < num; i++) {

        System.out.println("Guess the number:");

        if (number == guess) {
          System.out.println(
                  "Nice, You got it!");
          break;
      }
      else if (number > guess
              && i != num - 1) {
          System.out.println(
                  "The number is greater than " + guess);
      }
      else if (number < guess
              && i != num - 1) {
          System.out.println(
                  "The number is less than " + guess);
      }
  }
/* dvdcollection */
public class dvdcollection {
 
  public static void main (String args[])

 const mydvd = (["The Hangover", "Zoolander"],
 ["The Godfather", "The Notebook"],
 ["The Matrix", "The Avengers"]
 )

 mydvd.sort(mydvd(a,b){return a-b})
}

/* student Body */
public class studentBody {

  studentBody([
    { name: "Stella", age: 25, grade: 10 },
    { name: "Mohammed", age: 31, grade: 11 },
    { name: "Brian", age: 18, grade: 19 },
  ])
    student {
    super();
    this.name = name
    this.age = age
    this.grade = grade
    }

    for (int i=0; i < people.length; i++) {
      sum = sum + studentBody[i];
}

  /* fruit basket */
public class FruitBasket {
 
      Stack<String> fruitBasket = new Stack<String>();
      System.out.println("pear", "apple", "banana");
   
      int num = in.nextInt();
    
      for(int i = 1; < num i++);
      {
          System.out.print("Fruits " + i + " of + num " + : ");
          char select = in.next().charAt(0);
          if(select == 'A')
              fruitBasket.push("pear");
          else of (select == 'pear')
              fruitBasket.push("apple");
          else of (select == 'apple')
              fruitBasket.push("banana");
          else of (select == 'banana')
          
          system.out.print("weight " + i + " of + num " + : ");
          char select = in.next().charAt(0);
          if(select == 'A')
          fruitBasket.push("4");
      else of (select == 'pear')
          fruitBasket.push("6");
      else of (select == 'apple')
          fruitBasket.push("7");
      else of (select == 'banana')
  }
  
  System.out.println("Your basket has " + " " + fruitBasket );
  System.out.print("Press E to eat!: ");
  system.out.print("throw away fruit press f: ");
  
  while(!fruitBasket.empty()) {
      char E = in.next().charAt(0);
      if(E == 'E')
  {
      fruitBasket.pop():
          System.out.println("Fruit(s) in the basket: " + " " + fruitBasket);
  }
  if (fruitBasket.empty())
  {
      System.out.println("No more fruits");
  }
  }
}
}
/* getBooksByLanguage */
/* Sadly I do not know how to approach this */

/* coinmachine */
public class coinmachine {

 public static void main(String[] args)

 system.out.println("enter total amout cents")
 
quarter = 0.25;
nickel = 0.05;
dime = 0.10;
penny = 0.01;

System.out.println("Total amount of change to give: " + changeDue);
}




/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  // higherOrLower,
  // dvdCollection,
  // studentBody,
  // fruitBasket,
  // getBooksByLanguage,
  // coinMachine,
};
