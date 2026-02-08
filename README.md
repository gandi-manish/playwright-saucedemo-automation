# Playwright SauceDemo Automation with CI

This repository demonstrates an end-to-end UI test automation framework using "Playwright" integrated with "GitHub Actions CI".

The goal of this project is to showcase:
- Automated UI testing
- Continuous Integration (CI)
- Failure detection and reporting
- Artifact-based evidence (HTML reports)


#Tech Stack

- Playwright (E2E Testing)
- JavaScript
- GitHub Actions (CI)
- HTML Test Reports


#Test Coverage

- Page navigation validation
- UI element visibility checks
- Title and content assertions
- Regression detection using assertions


#CI Pipeline Workflow

1. Code pushed to `main`
2. GitHub Actions automatically triggers Playwright tests
3. Tests run on a GitHub-hosted runner
4. HTML reports generated as artifacts
5. Pipeline fails on assertion errors


#CI Failure Example

The following screenshots show a deliberately introduced failure to validate CI behavior:

#GitHub Actions – Failed Run
[CI Failure](docs/ci-failure report.png)

#Playwright HTML Report – Failed Tests
[Playwright Failure](docs/playwright-HTML failure.png)

This proves:
- Assertions are enforced
- Failures are detected automatically
- CI blocks faulty changes


#CI Recovery (Fix & Pass)

After fixing the assertions, tests were re-run successfully.

#GitHub Actions – Successful Run
[CI Pass](docs/ci-pass report.png)

#Playwright HTML Report – All Tests Passed
[Playwright Pass](docs/playwright-HTML pass.png)

#Key Learnings

- Built a complete Playwright automation framework
- Integrated automated testing into CI
- Validated failure detection and recovery
- Generated and analyzed HTML test artifacts
- Applied real-world CI testing practices


#Conclusion

This project reflects real-world QA automation and CI practices used in production environments to ensure application quality and prevent regressions.
