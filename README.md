# JavaScript Random Password Generator
![Screenshot of the website](/img/Random%20Password%20Generator%20IMG.png)
## Whats the Purpouse?
=====
with much of the word having access to the internet, and growing everyday, more and more sestive infomarion is being stored online. The only way we can protect our information is by having a secure and ransom password.

## How to Use
=====
when the user clicks the red 'Genarate Password' button, they will be prompted with 5 questions on the contents of the password as well as the length. Once all of the questions are answered with an acceptable response, the users secure password will be displayed in text box in the center of the page.

## Algorithms
=====
#### Genarating Password(12)
1. The user is given 5 questions regarding the characters of the password and length, that are check to be valid(18-31)
2. The Characters wanting to be used by the user will be added to a Usable Characters array(33-37)
3. A for loop will run as many times as the length of the password, each time selecting a random character from the Usable Characters array, then add it to the end of the password.(40-45)

#### Checking responses(47)
1. The user will be given a prompt on weather or not they would like a certain character(53)
2. If that Answer is Niether of the given options, the question will be asked again, until a valid response is given(52-56)
3. Once a 'Y' or 'N' is given, true will be returned for 'Y' and false will be returned for 'N'(50)

## Live Demo
=====
A live verstion of the code can be found [here](https://jadentr44.github.io/Challange03-Random-Password-Genarator/)

## Credits
=====
All of the Javascript was written and planned out by [Jaden Rodriguez](https://github.com/Jadentr44

The Html and css was provided from the UT Austin coding boot camp repository starter code for challenge 03.