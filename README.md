# darkmode-materialui-tabs

Write a React project using MaterialUI that has tabs called "Nate", "World Ranks", and "State Ranks". Under each tab, there will be three components, "Candidates", "Configure", and "Preview". "Candidates" will be on top left of the screen. "Configure" will be on bottom left of the screen. "Preview" will be right half of the screen. There is also "Parsed" component which will toggle on and replace "Preview". 

Make theme darkmode.

Candidates component will have a list of URLs and "Parse" button next to it. The list of URLs will be retrieved from an API endpoint of same host at "/candidates", which will be returned in a JSON format as a list. When URL is clicked, there will be an iframe in Preview component to load the URL. When you click on "Parse" button, Preview component will change to "Parsed" component.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/darkmode-materialui-tabs.git
cd darkmode-materialui-tabs
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
