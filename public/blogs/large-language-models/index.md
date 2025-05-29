# Introduction
I am going through the AI course in [codedex.io](https://codedex.io), all credits to them, this is my personal repo of notes inspired from them

> Credit to nextwork.org for assisting with instructions and content

# 01. Tokens
We know that gen AI involves language models that are trained to create new content such as text, images, videos, etc. But what are these models trained with exactly? Tokens! 🪙

Tokens are small units of data used to train gen AI models like ChatGPT and help them understand and generate language. This data may take the form of whole words, subwords, and other content.

Tokens are essential for language models because they are the smallest units of meaning. By analyzing tokens, models can understand the structure and semantics of text. The process of making raw data like text trainable for language models is known as tokenization. This may include splitting text into individual words.

Let's look at an example:
```python
import nltk

sample_text = 'I am learning Generative AI'
tokens = nltk.word_tokenize(sample_text.lower())

print('Tokens:', tokens)
```

Here, we use the nltk.word_tokenize() method to convert the sample_text into lowercase and split it into a list of tokens.

So the sentence 'I am learning Generative AI' becomes ['i', 'am', 'learning', 'generative', 'ai'].

<img src="./large-language-models/images/3.png"/>

Using this tokenized data, language models can learn patterns and relationships between small units of data in the context of large amounts of data. This helps the model predict and generate new content based on what it learned!

# 02. N-grams
Now that we know what tokens are, let's learn about the patterns they use to help language models make predictions.

To do so, we can use n-grams. N-grams are sequences of 'n' tokens from a given sample of text.

By analyzing these sequences, we can understand how words are commonly used together. This is essential for tasks like predicting the next word in a sentence or understanding the meaning of text.

There are 3 popular models of n-grams:

<img title="ngrams" alt="ngrams" src="./large-language-models/images/4.png"/>

In the example above, we use the n-gram model for the word "Cold". We can also use this model for phrases or sentences.

Unigram, for a single character or word (ex. "I").
Bigram, for two consecutive characters or words (ex. "I am").
Trigram, for three consecutive characters or words (ex. "I am learning").
N-grams analyze the probability of certain word sequences based on their occurrence typically in a large dataset. For example, a bigram model counts how often two words occur together and assigns a probability to them. This helps in predicting or generating text!

# 03. Text Classification
Text classification involves categorizing text into different groups. Think about it as sorting emails into spam and non-spam folders or classifying news articles into sports, politics, or entertainment sections.

These types of models use Python to classify text into predefined categories using a Naive Bayes classifier. A Naive Bayes classifier is a simple and powerful tool in machine learning. It's based on a basic probability rule called Bayes' Theorem and assumes that all features (like words in a text) are independent of each other.

<img title="classification" alt="classification_image" src="./large-language-models/images/5.png"/>

Naive Bayes works well for tasks like identifying spam emails, analyzing sentiment, and classifying documents. For example, if you want to sort emails into "spam" or "not spam," Naive Bayes can learn from examples and predict the category of a new email based on word patterns.

We use the scikit-learn library to implement the Naive Bayes classifier. This library provides tools for text vectorization, model training, and evaluation! We'll use it soon to classify text data.

## Classes & Functions
There are classes and functions that are crucial for text classification:

CountVectorizer: This class converts text data into a numerical format that the machine-learning model can understand. It counts how many times each word appears in the text, turning words into a matrix of counts.

MultinomialNB: This is a Naive Bayes classifier, which is used to train our model on the numerical text data.

train_test_split: This function helps split our dataset into training and testing sets. It is commonly used in predictive machine learning. The training set is used to train the model, while the testing set is used to evaluate its performance.

accuracy_score: This function provides a way to measure the accuracy of our model by comparing the predicted labels with the actual labels in the test set. A higher accuracy score indicates better performance, a score of 1.0 = great predictions.

These classes and functions are essential for building a text classification model. Let's dive into the code and see how we can classify text data using a Naive Bayes classifier!

# 04. Machine Translation
Traveling is awesome, but the language barrier can be intimidating when going to foreign countries. Luckily machine translations make life easier. Let's learn how it works.

<img src="./large-language-models/images/6.png"/>

Machine translation automatically converts text from one language to another using computer algorithms. Tools like Google Translate use advanced language models to perform this task.

Here's how it generally works:

- Training with Data: Machine translation systems are trained on vast amounts of text in multiple languages. They learn patterns and relationships between words in these languages.
- Generating Translations: Once trained, the system can translate a sentence from one language to another. Modern systems can effectively understand the context of the words during translation.

<img src="./large-language-models/images/7.png"/>

One of the libraries that can help us with machine translation is the translate python library. It allows you to translate simple phrases by interacting with machine translation APIs like Google Translate. Let's get started with translating!

# 05. Spelling Bee
You're almost done!

Now that you can translate, time to check our spelling ✍️. Spelling can be tricky, there's a reason winning the spelling bee is a very prestigious award 🏆. Unlike computers, humans are unable to recall exactly how to spell every word. This is where spell checkers come in handy.

Spell checkers automatically find and correct spelling mistakes in text. They are helpful and ensure that your writing is clear and error-free. It is one of the many implementations of generative ai using machine learning.

<img src="./large-language-models/images/8.gif"/>

Here's how spell check generally works:

- Dictionary Comparison: The spell checker compares each word against a dictionary of correctly spelled words. If a word isn't found, it's flagged as a potential mistake.
- Suggesting Corrections: It suggests possible corrections based on common misspellings or similar words.

<img src="./large-language-models/images/9.png"/>

Does it seem a little difficult? Don't worry, we won't judge your spelling🤞. There's a super helpful library that can help you check.

## TextBlob
The TextBlob library is a key tool in natural language processing and text analysis. It simplifies text processing, making it easy to work with text data.

Why TextBlob is a vibe:

Easy to Use: TextBlob is straightforward and allows you to perform tasks like sentiment analysis, part-of-speech tagging, and text translation with just a few lines of code.
Spell Checking and Correction: It includes built-in spell-checking and correction features.
Text Analysis: You can analyze text to extract useful information like determining its sentiment (positive, negative, or neutral) and summarize text data.