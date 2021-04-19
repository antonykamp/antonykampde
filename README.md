# [antonykamp.de](antonykamp.de)

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=antonykampde)
[![Website antonykamp.de](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](antonykamp.de)
[![Build Status](https://travis-ci.com/antonykamp/antonykampde.svg?token=KLyVgPMWyiqQ3RqyF6uP&branch=master)](https://travis-ci.com/antonykamp/antonykampde)

This repository includes a minimal nextJS template I've created for my website [antonykamp.de](https://antonykamp.de). It's a [Next.js](https://nextjs.org) project written in TypeScript that uses [Sass](https://sass-lang.com/) and icon from [FontAwesome](https://fontawesome.com/).

## Getting Started

If you want to create your own website, clone this repository first, install all dependencies and run the server.

```bash
git clone https://github.com/antonykamp/antonykampde.git
cd antonykampde
npm i
npm run dev
# or
npm build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to expand the dataset

Four datasets exist that you can edit and expand for your website (_Where_).If you want to add data-entries, I recommend to use the given interfaces(_How_).

| What?                 | Where                                                                                             | How                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| A new project         | [`public/projects/`](https://github.com/antonykamp/antonykampde/blob/master/public/projects/)     | [`Project`](https://github.com/antonykamp/antonykampde/blob/master/components/projectBox.tsx#L17-L24) |
| A new contribution    | [`public/contributions/`](https://github.com/antonykamp/antonykampde/blob/master/)                | [`Project`](https://github.com/antonykamp/antonykampde/blob/master/components/projectBox.tsx#L17-L24) |
| An entry to my resume | [`public/bio.js`](https://github.com/antonykamp/antonykampde/blob/master/public/bio.json)         | [`BioItem`](https://github.com/antonykamp/antonykampde/blob/master/components/bioBox.tsx#L3-L9)       |
| An entry to my awards | [`public/awards.json`](https://github.com/antonykamp/antonykampde/blob/master/public/awards.json) | [`AwardItem`](https://github.com/antonykamp/antonykampde/blob/master/components/awardBox.tsx#L3.L8)   |

## Deploy on Vercel

The easiest way to deploy the edited website is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

> It's no rocketscience ;)
