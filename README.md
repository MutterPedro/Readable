## Readable
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
  
  
## Installation 
   To install this project just follow these steps:
   - clone this [repository](https://github.com/MutterPedro/Readable.git) on your machine;
   - navigate to the project directory;
   - run `npm install`.

## Folder Structure

After clone the project and run `npm install`, the folder structure should look like this:

```
├── node_modules
│   ├── ...
├── package.json
├── package-lock.json
├── public
│   ├── css
│   │   └── heroic-features.css
│   ├── favicon.ico
│   ├── index.html
│   ├── lost.jpg
│   ├── manifest.json
│   ├── Spin.svg
│   └── vendor
│       ├── bootstrap
│       │   ├── css
│       │   │   ├── bootstrap.css
│       │   │   ├── bootstrap-grid.css
│       │   │   ├── bootstrap-grid.min.css
│       │   │   ├── bootstrap.min.css
│       │   │   ├── bootstrap-reboot.css
│       │   │   └── bootstrap-reboot.min.css
│       │   └── js
│       │       ├── bootstrap.js
│       │       └── bootstrap.min.js
│       ├── jquery
│       │   ├── jquery.js
│       │   └── jquery.min.js
│       └── popper
│           ├── popper.js
│           └── popper.min.js
├── README.md
├── src
│   ├── actions
│   │   ├── Categories.js
│   │   ├── Comments.js
│   │   └── Posts.js
│   ├── components
│   │   ├── App
│   │   │   ├── App.css
│   │   │   ├── App.js
│   │   │   └── App.test.js
│   │   ├── Categories
│   │   │   ├── Categories.css
│   │   │   ├── Categories.js
│   │   │   └── Categories.test.js
│   │   ├── Comment
│   │   │   ├── Comment.css
│   │   │   ├── Comment.js
│   │   │   └── Comment.test.js
│   │   ├── Comments
│   │   │   ├── CommentForm.js
│   │   │   ├── Comments.css
│   │   │   ├── Comments.js
│   │   │   └── Comments.test.js
│   │   ├── CreatePostModal
│   │   │   ├── CreatePostModal.css
│   │   │   ├── CreatePostModal.js
│   │   │   ├── CreatePostModal.test.js
│   │   │   └── Form.js
│   │   ├── Errors
│   │   │   ├── InvalidID
│   │   │   │   ├── InvalidID.css
│   │   │   │   ├── InvalidID.js
│   │   │   │   └── InvalidID.test.js
│   │   │   └── NotFound
│   │   │       ├── NotFound.css
│   │   │       ├── NotFound.js
│   │   │       └── NotFound.test.js
│   │   ├── Footer
│   │   │   ├── Footer.js
│   │   │   └── Footer.test.js
│   │   ├── Header
│   │   │   ├── Header.css
│   │   │   ├── Header.js
│   │   │   └── Header.test.js
│   │   ├── LoadingGauge
│   │   │   ├── LoadingGauge.css
│   │   │   ├── LoadingGauge.js
│   │   │   └── LoadingGauge.test.js
│   │   ├── Post
│   │   │   ├── Post.css
│   │   │   ├── Post.js
│   │   │   └── Post.test.js
│   │   ├── PostDetail
│   │   │   ├── PostDetail.css
│   │   │   ├── PostDetail.js
│   │   │   └── PostDetail.test.js
│   │   ├── Posts
│   │   │   ├── Posts.css
│   │   │   ├── Posts.js
│   │   │   └── Posts.test.js
│   │   └── Root
│   │       ├── Root.css
│   │       ├── Root.js
│   │       └── Root.test.js
│   ├── index.css
│   ├── index.js
│   ├── reducers
│   │   ├── Categories.js
│   │   ├── Comments.js
│   │   ├── index.js
│   │   └── Posts.js
│   ├── registerServiceWorker.js
│   ├── setupTests.js
│   ├── tempPolyfills.js
│   └── utils
│       └── api.js
└── yarn.lock
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Readable is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.