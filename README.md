# ZPass Web Extension

## Installation

### Prerequisites

1. **Node.js (version 18 or higher)**

   - Download from [Node.js official website](https://nodejs.org/en/download/)

2. **Rust (rustc 1.71.1 & cargo 1.71.1)**

   - Install using the following command:
     ```bash
     curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
     ```

3. **wasm-pack**
   - Install using the following command:
     ```bash
     curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
     ```

### Setup Steps

1. **Build Wasm package**

   ```bash
   pnpm build:wasm
   ```

2. **Install Node modules**

   ```bash
   pnpm i
   ```

3. **Start the Application in development mode**
   ```bash
   pnpm run dev
   ```

These scripts is necessary for the Next.js project version:
dist.js - rename "\_next" to "next" in dist folder for pathes and the folder name.
custom.d.ts - needs for svg icons import.

This line shall be commented in next.config.mjs for starting the project in the dev mode:
distDir: './dist',
This property can be removed, but the Next will build project in "out" folder. The dist.js script shall be updated in this case.
