# Pro MS

## Management System for the Pros!

**_Nx, Node, React & WebExt_**

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@pro-ms/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## VS Code Debugger for Chrome

**_Close all Chrome instances before setting up debugger._**

**runtimeExecutable** is system specific

Not passing custom runtimeExecutable launches new instance, doesn't respect **--profile-directory** argument.

First Chrome profile is Default next ones are Profile 1, Profile 2 and so on.

To attach, Chrome must be already launched with debugger flag enabled on the port 9222 (default).
```bash
# Close all instances first
/usr/bin/google-chrome --remote-debugging-port=9222
```

### Pro Tip
  **_All Examples are for Ubuntu/Linux, but have Windows equivalent._**

Replace Chrome shortcut with remote debugging enabled.
On Debian based systems, replace .desktop file.

Location: `/usr/share/applications`

Add the flag to all chrome executable instances: `--remote-debugging-port=9222`

Here's how one of the lines looks like after replacement

```bash
Exec=/usr/bin/google-chrome-stable %U --remote-debugging-port=9222
```
Here's the other line
```
Exec=/usr/bin/google-chrome-stable --remote-debugging-port=9222
```
### `.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "attach",
      "name": "Attach to Chrome",
      "urlFilter": "http://localhost:4200/*",
      "port": 9222,
      "webRoot": "${workspaceFolder}/apps/ms/src"
    },
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch to Chrome",
      "url": "http://localhost:4200/",
      "port": 9222,
      "webRoot": "${workspaceFolder}/apps/ms/src",
       "runtimeExecutable": "/usr/bin/google-chrome",
      "runtimeArgs": [
        "--remote-debugging-port=9222",
        "--profile-directory=Default"
      ]
    },
    {
      "name": "Debug Node App",
      "type": "node",
      "request": "attach",
      "port": 7777
    }
  ]
}
```

