var readlineSync = require('readline-sync');

var userName = readlineSync.question('Please Enter Your Name to Play A Game : ');

console.log('\nKonnichiwa '+userName+ '\n');
console.log('What a sweet name you have\n ')
console.log('Welcome to Naruto quiz \n');
var score=0;

function Game(ques,ans)
{
  var userAns = readlineSync.question(ques);

  if(userAns.toUpperCase() === ans.toUpperCase())
  {
      console.log('Correct Answer..!');
      score++;
     
  }
  else //if(userAns.toUpperCase()==='a'&&'b'&&'c'&&'d')
  {
    console.log('Wrong Answer or invalid answer :( '+userName);

  }
  // else{
  //   console.log('Invalid input '+userName+' your score for this question is 0');
  // }
   console.log('Your score is : '+score);
   console.log('---------------------\n')
}

Game('1.What was Kakashi father name? \na.Minato\nb.Sakumo Hatake\nc.Madara\nd.Rock Leei\n','b');
Game('2.What is Naruto fav food ?\n a.boiled egg\n b.Dumpling\n c.Ramen\n','c')
Game('3.My(Girish) fav character is Minato?\na.yes\nb.no\n','a');
Game('4.Real name of tobi is\na.Kabuto\nb.Itachi\nc.Obito\n','c' );

   console.log(userName+' Your final score is : '+score);
   console.log('Have a Great Day! '+userName)

