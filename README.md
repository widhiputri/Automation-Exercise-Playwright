# Automation-Exercise-Playwright

This repository contains UI automation tests for Automation Exercise using Playwright.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Test](#running-test)
- [Handling Alerts](#handling-alerts)
- [Playwright Debugging](#playwright-debugging)
- [Reporting](#reporting)
- [Folder Structure](#folder-structure)
- [License](#license)

## Prerequisites

Before running the tests, make sure you have the following installed:
- Node.js (LTS version recommended)
- Playwright installed globally or in the project

## Installation

Clone the repository and install dependencies:
```sh
   git clone https://github.com/widhiputri/Automation-Exercise-Playwright.git
   cd Automation-Exercise-Playwright
   npm install
````
## Running Test

1. Run all tests:
   ```sh
   npx playwright test

2. Run a specific test file:
   ```sh
   npx playwright test tests/contactUs/contactUs.spec.js
  
3. Run tests in UI mode:
   ```sh
   npx playwright test --ui
   
4. Run tests in headed mode:
   Clone the Repository:
   ```sh
   npx playwright test --headed

## Handling Alerts

When submitting forms, an alert may appear. The test handles it using:
```sh
  const dialog = await this.page.waitForEvent('dialog');
  await dialog.accept();
````
## Playwright Debugging

To prevent the browser from closing after tests:
```sh
  $env:PWDEBUG=1; npx playwright test
````
   
## Reporting
To generate an HTML report:
```sh
npx playwright test --reporter=html
````
Then open playwright-report/index.html in a browser.

## Folder Structure
   The project structure is as follows:
   ```go
   Automation-Exercise-Playwright/
   ├── data/
   │   └── testData.json
   ├── fixtures/
   │   └── dummy.pdf
   ├── pages/
   │   └── contactUsPage.js
   │   └── loginPage.js
   │   └── signupPage.js
   ├── tests/
   │   └── auth
   │       └── login.spec.js
   │       └── signup.spec.js
   │   └── contactUs
   └── utils/
       └── selector.js
   ````
  
## License
   MIT License
