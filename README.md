# Sumz - Article Summarizer

Sumz is your go-to solution for effortlessly summarizing lengthy articles into concise and clear summaries. With Sumz, you can say goodbye to information overload and hello to quick, digestible insights. Whether you're a student looking to condense research material or a professional staying up-to-date with the latest news, Sumz has you covered.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation Guide](#installation-guide)

## Introduction

Sumz is an advanced AI article summarizer application that leverages state-of-the-art technologies to provide a seamless and efficient summarization experience. Our application is crafted with a user-friendly UI, combining the power of React.js for the frontend, Tailwind CSS for styling, Node.js for the runtime environment, a third-party API for article scraping and summarization, and Redux Toolkit (RTK) Query for seamless API Queries.

## Features

1. **Beautiful UI:** Sumz provides an elegant and intuitive user interface designed with React and styled using Tailwind CSS. This ensures a visually pleasing and user-friendly experience.

2. **Effortless Summarization:** Summarizing articles has never been easier. With Sumz, you can summarize articles using the cutting-edge OpenAI GPT-4 model. Simply provide the URL of the article, and Sumz will generate a concise summary for you.

3. **Local Storage Integration:** Sumz includes a feature to save the summarized articles in your local storage. This prevents the need for re-fetching the same articles from the third-party API, saving you time and resources.

4. **URL History:** Keep track of the articles you've browsed with Sumz. Our application maintains a history of the URLs you've visited, making it easy to revisit articles or access their summaries at any time.

5. **Clipboard Link Saving:** Sumz offers a handy feature for saving article links to your clipboard with a single click. This feature simplifies the process of sharing and referencing articles.

6. **Loading Animation:** Sumz displays a loading animation while the summarized article is being fetched from the API. This not only keeps you informed but also adds a touch of interactivity to the process.

## Installation Guide

To get started with Sumz on your local machine, follow these installation steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Shivek-Sharma/sumz.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm:

   ```
   cd blogify
   npm install
   ```

3. **Set Up Environment Variables**: Create a `.env` file in the root directory of the project and configure your API Key. Generate your API Key from [RapidAPI](https://rapidapi.com/restyler/api/article-extractor-and-summarizer). Here's a sample `.env` file:

   ```
   VITE_API_KEY="your-api-key"
   ```

4. **Start the Development Server:**
   To launch the Sumz application locally, use the following command:
   ```bash
   npm run dev
   ```