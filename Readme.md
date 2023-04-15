# Node CLI Program

This is a Node.js command-line interface program that uses OpenAI's GPT-3 language model to generate responses for a chatbot that helps users write content for LinkedIn and Instagram.


## Prerequisites

To use this program, you need an API key for OpenAI's GPT-3 language model. The program prompts the user to enter the API key via the command line interface. You can get an API key by signing up for an OpenAI account at https://beta.openai.com/.

## Installation

To use this program, clone the repository from GitHub:

```
git clone https://github.com/anjumann/npm-library.git
```

Then navigate to the `npm-library` directory and install the required dependencies:

```
cd npm-library
npm install
```

## Usage

To start the chatbot, run the following command:

```
node index.js
```

You will be prompted to enter your OpenAI API key. Once you have entered your API key, you can start chatting with the bot.

Type your message in the command line and press enter to receive a response from the chatbot. To exit the program, type `exit`.

Note: There is no `.env` file for this program. The API key is taken via the command line.


## Usage

To start the chatbot, run the following command:

```
node index.js
```

You will be prompted to enter your OpenAI API key. Once you have entered your API key, you can start chatting with the bot.

Type your message in the command line and press enter to receive a response from the chatbot. To exit the program, type `exit`.

### Sample Output

Here's an example of how the chatbot can help you write a caption for your LinkedIn post about leadership:

```
Welcome to the content (LinkedIn, Instagram) writing chatbot. Type your message below: (enter "exit" to quit)
> Hi, can you help me write a caption for my LinkedIn post about leadership?

Bot:
Of course! What's the title of your post?

> "The Importance of Leadership in the Workplace"

Bot:
Great title! Here's a possible caption for your post:

"Effective leadership is essential for any successful organization. In this post, we explore the critical role that strong leadership plays in fostering a positive work culture and driving business success. Read on to discover our top tips for becoming a better leader and unlocking your team's full potential."

> That's great, thank you!

Bot:
You're welcome! Is there anything else I can help you with?

> exit
```

In this example, the user asks the chatbot to help them write a caption for a LinkedIn post about leadership. The chatbot responds by asking for the title of the post, and then generates a possible caption for the user based on their input. Finally, the user exits the program.

