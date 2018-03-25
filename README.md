# React Boilerplate

## Usage

Close this repository under your app folder name, remove `.git` folder,
rename `my-app` from `package.json` and start coding


```sh
git clone --depth 1 https://github.com/mike1808/react-boilerplate.git my-awesome-app
rm -rf my-awesome-app/.git
sed -i -e s/my-app/my-awesome-app/g package.json
npm install
```


## Folder Structure

```
my-app
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
├── src
│   ├── components
│   │   └── App
│   │       ├── App.jsx
│   │       ├── App.test.jsx
│   │       └── __snapshots__
│   │           └── App.test.jsx.snap
│   ├── index.jsx
│   ├── resources
│   │   ├── styles.css
│   │   └── styles.scss
│   └── setupTest.js
└── webpack.config.js
```

## Available Scripts

### `npm start`

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner

### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run format`

Format your code according to our style guide


### `npm run lint`

Show linting errors

### `npm run build-css`

Build CSS files and put them near SCSS files


### `npm run watch-css`

Run build `build-css` in watch mode
