Playwright SauceDemo Automation Framework

Project Overview
This project is an end-to-end UI automation framework built using "Playwright with JavaScript" to test the SauceDemo e-commerce application.

It validates critical user flows such as login, product selection, cart management, and checkout completion across multiple browsers.

Test Scenarios Covered
- User login with valid credentials
- Add product to cart
- Validate cart contents
- Complete checkout process
- Order confirmation validation
- Cross-browser testing (Chromium, Firefox, WebKit)

Tech Stack
- Playwright
- JavaScript (Node.js)
- GitHub Actions (CI)
- HTML Test Reports

How to Run Tests Locally

--bash
npm install

npx playwright install

npx playwright test
