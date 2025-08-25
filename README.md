# 🍌 London Banana Zone Checker

A fun web application built with Astro that checks if a London postcode is within the famous "London Banana" zone - the curved area of central London's most desirable and expensive neighborhoods.

## What is the London Banana?

*"This is the London Banana. As long as you stay within the Banana, you'll have a great time in London. Almost everything outside the Banana is horrible these days, best avoid. Not clear why, or when this happened. But it is what it is."*

Inspired by [@Saul_Sadka's viral tweet](https://x.com/Saul_Sadka/status/1959609109939892706/), this tool helps you discover whether your London postcode falls within this coveted zone.

## Features

- ✅ Real-time postcode validation for all London postcodes
- 🍌 Instant London Banana zone checking
- 💰 Average house price data for each postcode
- 🚔 Crime rate information with severity ratings
- 📍 District and location details
- 📱 Responsive design that works on all devices
- 🎨 Modern flat design with beautiful colours and animations
- ⚡ Fast client-side processing with comprehensive data

## London Banana Zone Coverage

The banana zone includes postcodes from these key areas:
- **North West**: NW1, NW3, NW5, NW7, NW8
- **North**: N1, N2, N3, N6, N10, N11, N12, N15, N20
- **West Central**: WC2
- **East Central**: EC1, EC2
- **West**: W1, W2, W6, W10, W11, W14
- **South West**: SW1, SW4, SW6, SW8, SW9, SW11, SW12, SW13, SW15, SW18, SW19, SW20
- **South East**: SE1
- **Outer Areas**: TW9, TW10, TW12, KT3, KT6, KT9, EN4, WD6

*Note: The application validates ALL London postcodes and provides data for both banana zone and non-banana zone areas.*

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd londonbanana
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built site will be in the `dist/` folder, ready to be deployed to any static hosting service.

## How to Use

1. Enter a London postcode in the input field (e.g., "SW1A 1AA", "NW8 8TY", "E1 6AN")
2. Click "Search" or press Enter
3. Get comprehensive results including:
   - 🍌 London Banana zone status
   - 💰 Average house prices
   - 🚔 Crime rate and safety information
   - 📍 District details

## Technology Stack

- **Astro** - Modern static site generator
- **TypeScript** - Type-safe JavaScript with comprehensive postcode data
- **CSS3** - Modern flat design with animations and glass morphism effects
- **Vanilla JavaScript** - Client-side interactivity and data processing

## Deployment

This application can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

Simply run `npm run build` and upload the `dist/` folder.

## Contributing

Fancy helping out? Feel free to submit issues and pull requests to improve the postcode coverage or add brilliant new features!

## License

MIT License - feel free to use this code for your own projects.
