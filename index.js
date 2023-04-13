const readline = require('readline');
const { Configuration, OpenAIApi } = require("openai");
const { exit } = require('process');

// Set up readline interface for command-line input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Set up OpenAI API credentials
const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

// Function to generate chatbot response using OpenAI's GPT-3 language model
async function generateResponse(message) {

  // Create a completion request
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: message,

  });
  return response.data.choices[0].message.content;
}

// Main program loop
async function chatbot() {
  console.log('Welcome to the content(linkedin, Instagram) writing chatbot. Type your message below: (enter "exit" to quit))');
  while (true) {
    message = []
    const input = await new Promise(resolve => {
      rl.question('> ', resolve)
    });

    if (input === 'exit') {
      exit(0);
    }
    
    message.push({ role: "system", content: "answer as concisely as possible. I will be giving you a prompt and you act like professional content writer, who is a subject matter expert in the field of linkedin and instagram." })
    message.push({ role: "user", content: input })
    const response = await generateResponse(message);
    message.push({ role: "system", content: response })
    
    console.log(`Bot:\n ${response}`);
  }
}

// Start the chatbot
chatbot();
