    
// const userMessage = [
//     ["hi", "hey", "hello"],
//     ["sure", "yes", "no"],
//     ["are you genious", "are you nerd", "are you intelligent"],
//     ["i hate you", "i dont like you"],
//     ["how are you", "how is life", "how are things", "how are you doing"],
//     ["how is corona", "how is covid 19", "how is covid19 situation"],
//     ["what are you doing", "what is going on", "what is up"],
//     ["how old are you"],
//     ["who are you", "are you human", "are you bot", "are you human or bot"],
//     ["who created you", "who made you", "who is your creator"],
  
//     [
//       "your name please",
//       "your name",
//       "may i know your name",
//       "what is your name",
//       "what call yourself"
//     ],
//     ["i love you"],
//     ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
//     ["bad", "bored", "tired"],
//     ["help me", "tell me story", "tell me joke"],
//     ["ah", "ok", "okay", "nice", "welcome"],
//     ["thanks", "thank you"],
//     ["what should i eat today"],
//     ["bro"],
//     ["what", "why", "how", "where", "when"],
//     ["corona", "covid19", "coronavirus"],
//     ["you are funny"],
//     ["i dont know"],
//     ["boring"],
//     ["CNS"]
//   ];
//   const botReply = [
//     ["Hello!", "Hi!", "Hey!", "Hi there!"],
//     ["Okay"],
//     ["Yes I am! "],
//     ["I'm sorry about that. But I like you dude."],
//     [
//       "Fine... how are you?",
//       "Pretty well, how are you?",
//       "Fantastic, how are you?"
//     ],
//     ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],
  
//     [
//       "Nothing much",
//       "About to go to sleep",
//       "Can you guess?",
//       "I don't know actually"
//     ],
//     ["I am always young."],
//     ["I am just a bot", "I am a bot. What are you?"],
//     ["Sabitha Kuppusamy"],
//     ["I am nameless", "I don't have a name"],
//     ["I love you too", "Me too"],
//     ["Have you ever felt bad?", "Glad to hear it"],
//     ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
//     ["What about?", "Once upon a time..."],
//     ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
//     ["You're welcome"],
//     ["Briyani", "Burger", "Sushi", "Pizza"],
//     ["Dude!"],
//     ["Yes?"],
//     ["Please stay home"],
//     ["Glad to hear it"],
//     ["Say something interesting"],
//     ["Sorry for that. Let's chat!"],
//     ["Take some rest, Dude!"]
//   ];
  
//   const alternative = [
//     "Here is the link to download the CNS pdf file <a> https://gacbe.ac.in/images/E%20books/Cryptography%20and%20Network%20Security%20-%20Prins%20and%20Pract.%205th%20ed%20-%20W.%20Stallings%20(Pearson,%202011)%20BBSbb.pdf <a>",
// ];

  
//   const synth = window.speechSynthesis;
  
  
  
//   function sendMessage() {
//     const inputField = document.getElementById("input");
//     let input = inputField.value.trim();
//     input != "" && output(input);
//     inputField.value = "";
//   }
//   document.addEventListener("DOMContentLoaded", () => {
//     const inputField = document.getElementById("input");
//     inputField.addEventListener("keydown", function (e) {
//       if (e.code === "Enter") {
//         let input = inputField.value.trim();
//         input != "" && output(input);
//         inputField.value = "";
//       }
//     });
//   });
  
//   function output(input) {
//     let product;
  
//     let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
//     text = text
//       .replace(/[\W_]/g, " ")
//       .replace(/ a /g, " ")
//       .replace(/i feel /g, "")
//       .replace(/whats/g, "what is")
//       .replace(/please /g, "")
//       .replace(/ please/g, "")
//       .trim();
  
//     let comparedText = compare(userMessage, botReply, text);
  
//     product = comparedText
//       ? comparedText
//       : alternative[Math.floor(Math.random() * alternative.length)];
//     addChat(input, product);
//   }
  
//   function compare(triggerArray, replyArray, string) {
//     let item;
//     for (let x = 0; x < triggerArray.length; x++) {
//       for (let y = 0; y < replyArray.length; y++) {
//         if (triggerArray[x][y] == string) {
//           items = replyArray[x];
//           item = items[Math.floor(Math.random() * items.length)];
//         }
//       }
//     }
//     //containMessageCheck(string);
//     if (item) return item;
//     else return containMessageCheck(string);
//   }
  
//   function containMessageCheck(string) {
//     let expectedReply = [
//       [
//         "Good Bye, dude",
//         "Bye, See you!",
//         "Dude, Bye. Take care of your health in this situation."
//       ],
//       ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
//       ["Have a pleasant evening!", "Good evening too", "Evening!"],
//       ["Good morning, Have a great day!", "Morning, dude!"],
//       ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
//     ];
//     let expectedMessage = [
//       ["bye", "tc", "take care"],
//       ["night", "good night"],
//       ["evening", "good evening"],
//       ["morning", "good morning"],
//       ["noon"]
//     ];
//     let item;
//     for (let x = 0; x < expectedMessage.length; x++) {
//       if (expectedMessage[x].includes(string)) {
//         items = expectedReply[x];
//         item = items[Math.floor(Math.random() * items.length)];
//       }
//     }
//     return item;
//   }
//   function addChat(input, product) {
//     const mainDiv = document.getElementById("message-section");
//     let userDiv = document.createElement("div");
//     userDiv.id = "user";
//     userDiv.classList.add("message");
//     userDiv.innerHTML = `<span id="user-response">${input}</span>`;
//     mainDiv.appendChild(userDiv);
  
//     let botDiv = document.createElement("div");
//     botDiv.id = "bot";
//     botDiv.classList.add("message");
//     botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
//     mainDiv.appendChild(botDiv);
//     var scroll = document.getElementById("message-section");
//     scroll.scrollTop = scroll.scrollHeight;
//     voiceControl(product);
//   }

// const alternative = [
//     "Here is the link to download the CNS pdf file: <a href='https://gacbe.ac.in/images/E%20books/Cryptography%20and%20Network%20Security%20-%20Prins%20and%20Pract.%205th%20ed%20-%20W.%20Stallings%20(Pearson,%202011)%20BBSbb.pdf'>PDF</a>"
    
// ];
// // Function to send user's message

// function sendMessage() {
//     const inputField = document.getElementById("input");
//     let input = inputField.value.trim().toLowerCase();
//     if (input === "cns") {
//         let product = alternative[0];
//         addChat(input, product);
//     }
//     inputField.value = "";
// }
// // Event listener to handle "Enter" key press for sending message

// document.addEventListener("DOMContentLoaded", () => {
//     const inputField = document.getElementById("input");
//     inputField.addEventListener("keydown", function (e) {
//         if (e.code === "Enter") {
//             sendMessage();
//         }
//     });
// });
// // Function to add chat messages to the chat window
// function addChat(input, product) {
//     const mainDiv = document.getElementById("message-section");
//     let userDiv = document.createElement("div");
//     userDiv.id = "user";
//     userDiv.classList.add("message");
//     userDiv.innerHTML = `<span id="user-response">${input}</span>`;
//     mainDiv.appendChild(userDiv);

//     let botDiv = document.createElement("div");
//     botDiv.id = "bot";
//     botDiv.classList.add("message");
//     botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
//     mainDiv.appendChild(botDiv);
//     var scroll = document.getElementById("message-section");
//     scroll.scrollTop = scroll.scrollHeight;
// }
const alternative = [
    "Here is the link to download the CNS pdf file: <a href='https://gacbe.ac.in/images/E%20books/Cryptography%20and%20Network%20Security%20-%20Prins%20and%20Pract.%205th%20ed%20-%20W.%20Stallings%20(Pearson,%202011)%20BBSbb.pdf'>PDF</a>"
];

// Function to handle user messages and generate appropriate response
function botReply(input) {
    // Convert input to lowercase for case-insensitive comparison
    input = input.trim().toLowerCase();

    // Check the input and return appropriate response
    switch (input) {
        case "cns":
            return alternative[0]; // Return CNS PDF link
        case "ai":
            return     "Here is the link to download the AI pdf file: <a href='https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3170716.pdf'>PDF</a>"
            case "se":
            return "Software Engineering resources will be available soon.";
        case "bda":
            return "Here's the link to check Big Data Analytics Syllabus <a href='https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3170722.pdf'>PDF </a>.";
        case "mad":
            return "Mobile Application Development resources will be available soon.";
        default:
            return alternativeReply(); // Return appropriate response
    }
}

// Function to provide alternative reply for unrecognized input
function alternativeReply() {
    return "Please type it again or specify a valid option.";
}

// Function to send user's message
function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    let botResponse = botReply(input);

    addChat(input, botResponse);
    inputField.value = "";
}

// Event listener to handle "Enter" key press for sending message
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            sendMessage(); // msg will be sent after clicking enter
        }
    });
});

// Function to add chat messages to the chat window
function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");

    // Add user message
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);

    // Add bot message
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);

    // Scroll to bottom of chat window
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
}
