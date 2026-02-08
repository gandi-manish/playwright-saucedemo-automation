Project Title:
# Playwright Automation Framework – SauceDemo

Project Overview:

This project demonstrates an end-to-end UI automation framework built using Playwright and JavaScript.
The framework validates critical user journeys on the SauceDemo e-commerce application, including login,
cart operations, and checkout flow, integrated with CI using GitHub Actions.

The goal of this project is to showcase:

- Automated UI testing
 
- Continuous Integration (CI)
  
- Failure detection and reporting
  
- Artifact-based evidence (HTML reports)

Tech Stack:

- Playwright (E2E Testing, UI Automation)

- JavaScript

- Node.js

- GitHub Actions (CI)

- HTML Reports (Playwright)


Test Scenarios Covered:

- User login validation  

- Product listing verification

- Add to cart validation

- Cart contents verification

- Checkout process validation

- Order completion confirmation  

CI/CD Integration:

This project uses GitHub Actions to automatically execute Playwright tests on:
- Every push to main branch
  
- Every pull request

The CI pipeline installs dependencies, runs tests in a Linux environment,
and uploads Playwright HTML reports as build artifacts.

CI Pipeline Workflow

1. Code pushed to `main`
2. GitHub Actions automatically triggers Playwright tests
3. Tests run on a GitHub-hosted runner
4. HTML reports generated as artifacts
5. Pipeline fails on assertion errors

CI Failure Example

The following screenshots show a deliberately introduced failure to validate CI behavior:

GitHub Actions – Failed Run
[CI Failure](docs/ci-failure report.png)

Playwright HTML Report – Failed Tests
[Playwright Failure](docs/playwright-HTML failure.png)

This proves:
- Assertions are enforced
- Failures are detected automatically
- CI blocks faulty changes

CI Recovery (Fix & Pass)

After fixing the assertions, tests were re-run successfully.

GitHub Actions – Successful Run
[CI Pass](docs/ci-pass report.png)

Playwright HTML Report – All Tests Passed
[Playwright Pass](docs/playwright-HTML pass.png)

Key Learnings

- Built a complete Playwright automation framework
- Integrated automated testing into CI
- Validated failure detection and recovery
- Generated and analyzed HTML test artifacts
- Applied real-world CI testing practices

Why This Project Matters:

This project simulates real-world QA automation used in enterprise environments.
It validates UI behavior through assertions, integrates CI for early defect detection,
and generates traceable reports for debugging and auditing.

How To Run Locally:

npm install

npx playwright install

npx playwright test

npx playwright show-report

