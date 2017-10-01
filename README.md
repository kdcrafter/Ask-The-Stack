# Ask-the-Stack
Ask Alexa a programming question and she will look up the answer on Stack Overflow

alexa2.js is an AWS Lambda function that Alexa uses to respond to user's commands. When the user says "open stack overflow", for example, it will respond with a welcome message and ask the user to search for a programming language. When the user then says "search for <programming language>",  it will output a pre-determined response.

Using Alexa to actually connect to the Stack Overflow website and read the webpage is a work in progress. However, index.js has implemented this functionality locally, independent from the Alexa SDK. When a user inputs a title into the prompt, this program will connect to Stack Overflow and respond with an answer with the most upvotes.
 
 # Installation Instructions
 
 These programs require Node.JS v6.10.0 to run. 
 
 To run the index.js, open Node.JS Command Prompt and navigate to the program's directory. Type "npm install" to install the required dependencies listed in the package.json file. Then, to run index.js, type "node index.js".
 
 # Authors
 
 Jacob White
 Kurt Dressel
 
 Created during BoilerMake 2017
