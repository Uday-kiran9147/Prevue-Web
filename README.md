# Prevue

**YouTube Creator Intelligence & Pre-Flight Simulator**

Prevue is a powerful simulator designed to help YouTube creators predict and optimize their video retention before they ever hit record. It detects 0:00–0:30 drop-off hazards, calculates a Hook Score, and provides prescriptive fixes for video scripts.

## Features

- **Retention Simulator**: Run your script through our hazard simulator to stop guessing your first 30 seconds.
- **Hook Score**: Calculate and improve your Hook Score (0-10) to keep viewers engaged.
- **Channel Graph Baseline**: Understand your channel's typical retention and compare your new scripts against it.
- **Daily Briefings**: Get daily prescriptive insights to improve your content strategy.

## Tech Stack

This project is a modern web application built with:
- **[Next.js](https://nextjs.org/)**: React framework with App Router
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling
- **[React Icons](https://react-icons.github.io/react-icons/)**: Material Design icons for a classic, professional look
- **TypeScript**: Static typing for robust code

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router pages (Home, Privacy, Terms, Delete Account).
- `components/`: Reusable React components (Header, Footer, Hero, SimulatorDemo, etc.).
- `public/`: Static assets like the site logo and images.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## License

Copyright © Prevue Technologies, Inc. All rights reserved.
