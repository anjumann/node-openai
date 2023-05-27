const readline = require('readline');
const { Configuration, OpenAIApi } = require("openai");
const { exit } = require('process');

require('dotenv').config()
// Set up readline interface for command-line input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




const apiKey = async () => {
  console.log("Enter the API key for OpenAI's GPT-3 language model: ");
  const apiKey = await new Promise(resolve => {
    rl.question('> ', resolve)
  });
  return apiKey
}

// Set up OpenAI API credentials
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
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
  console.log('Enter the data');
  while (true) {
    message = []
    const input = await new Promise(resolve => {
      rl.question('> ', resolve)
    });

    if (input === 'exit') {
      exit(0);
    }

    message.push({ role: "system", content: " Build a real-time data pipeline application that pulls data from a source using an API, saves it to a database, and streams it out as an API. Your application should be designed to act quickly and efficiently to ensure that the data is processed and made available for external consumption as soon as possible. Consider how you can optimize your application's performance and minimize latency to provide the most responsive and up-to-date data possible. Additionally, think about how you can handle errors and ensure data accuracy throughout the pipeline give the code for the same" })
    message.push({ role: "user", content: input })
    const response = await generateResponse(message);
    message.push({ role: "system", content: response })

    console.log(`Bot:\n ${response}`);
  }
}



// Start the chatbot
chatbot();
