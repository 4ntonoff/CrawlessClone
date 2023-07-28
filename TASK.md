## 1st. Part

​
You should implement this screen from Figma in app. This is only to test some UI skills.
​
Screen: <https://www.figma.com/file/3sbjYm0d2lBck4J5ocr00X/APP?node-id=6%3A12319>
​
​

## 2nd. Part

​
You need to create a cross-platform desktop app based on ElectronJS which should have interface and functionallity to run Web Automation Workflows (bots).
A user must be able to create, delete, run and configure each workflow individually.
Each workflow will need to run issolated by other workflow's, with it's own JavaScript code and options for security reasons.
App must be able to run multiple workflows at the same time.

When workflow is started it should open a new Electron `BrowserWindow`, then workflow code should be executed in that created window context so you will be able to access web page content like html, window object, localstorage, etc.
Each `BrowserWindow` should store all Chromium related files (cache, state, cookies, local storage, etc.) locally on computer based on some unique workflow id to be able to restore the same session (like login state on some website, etc.) after app restart.
Workflow code can be written by the user using JavaScript and will need to run it in a issolated context so the web page won't be able to detect that we execute some javascript code in it and code can't access any internal app modules, etc. This code should be executed in a issolated sandbox to protect user computer so that code won't be able to access any system files, etc. This is because this issolated sandbox will be used to run any code from any user.
​
Code running sandbox will need to have a global "context" object which will contain for now 3 classes `Page` `Log` and `Utils`:
​

- `Page` class must have `.goto(url, [options])` `.evaluate(js_code, [arguments])` `.show()` `.hide()` and `.title()` methods. Must be extensible to add different methods later on.
- `Log` class must have `.debug()`, `.info()`, `.warn()` and `.error()` methods which then will display them in Logs tab interface.
- `Utils` class will have for now 2 npm packages: `lodash` `dayjs`

This is a sample of JavaScript code a user can write in a Workflow:
​

```js
  const { Page, Log, Utils } = context
  const { lodash: _ } = Utils
​
  if (_.random(1, 5) == 3) throw new Error('In this case workflow should be stopped and print this error')
​
  await Page.goto('https://crawless.com', {
    userAgent: 'Firefox v9.99'
  })
  const someVariable = 'test'
  const result = await Page.evaluate((arg1) => {
    console.warn('this code can only run in web page and have access to anything on that page only')
    console.info('this console output is displayed when you open DevTools')
    const el = document.querySelector('body')
    const text = el.innerText
    const currentUrl = navigator.href
    return { text, currentUrl }
  }, someVariable)
  await Log.debug('result:', result)
​
  await Log.info('Current DateTime:', Utils.dayjs.utc().format())
​
  await Page.goto('https://example.com')
  const title = await Page.title()
  await Log.info('title')
```

​

- Everything in app must be easy to extend from project architecture to be able to add new methods, modules, api routes, etc.
- Save workflows, user UI state, logs, etc. to a file located in user data directory.
- All above saved data must be encrypted. Apply all your knowledge to make as hard as possible for someone to reverse engineer the security key and encryption methods when decompiling app.
- App code should be obfuscated (at build stage) with most advanced obfuscation methods you will find.
- Write some Unit and Integration tests.
