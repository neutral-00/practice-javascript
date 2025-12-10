# practice-javascript

Small repository for practicing JavaScript concepts and exercises. It contains a minimal entry point and a helper file for practicing string/array logic.

**Project files:**

- `index.js` — main entry point for running examples.
- `repeated-words.js` — utility/example script for practicing string handling.

**Prerequisites:**

- Install Node.js (v14+ recommended).
- This project uses `pnpm` as the declared `packageManager` in `package.json`, but `npm` also works for most commands.

**Install dependencies**
Use either of the following (depending on your package manager):

```
pnpm install
# or
npm install
```

**Run the project**

- Start (production):

```
pnpm start
# or
npm start
```

- Development (auto-restart):

```
pnpm run dev
# or
npm run dev
```

**Test**

```
pnpm test
# or
npm test
```

**Build (recommended example)**

There is no build step configured by default. Below is a simple, practical example using `esbuild` to create a bundled output suitable for distributing or running in a production environment.

1. Install `esbuild` as a dev dependency:

```
pnpm add -D esbuild
# or
npm install --save-dev esbuild
```

2. Add a `build` script to `package.json` inside the `scripts` section (example):

```json
"scripts": {
  "start": "node index.js",
  "dev": "node --watch index.js",
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "esbuild index.js --bundle --outfile=dist/bundle.js --platform=node"
}
```

3. Run the build:

```
pnpm run build
# or
npm run build
```

The example `esbuild` command bundles `index.js` and writes `dist/bundle.js`. Adjust the `--platform` or bundling options if you target the browser instead of Node.

**Project structure**

```
/ (repo root)
├─ index.js
├─ repeated-words.js
└─ package.json
```

**Notes & next steps**

- If you prefer `npm` as your package manager, all `pnpm` commands shown have direct `npm` equivalents.
- Add a `build` script to `package.json` when you're ready to bundle or transpile code.
- If you want, I can add a working `build` script to `package.json` now (for example using `esbuild`).

---

Happy practicing! If you want, I can also add a short README badge or example output next.
