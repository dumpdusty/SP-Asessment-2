# Assessment # 2
This assessment covers simple API app with following calls:
- user authorization (GET https://qa-challenge-api.scratchpay.com/api/auth?email=value&password=value)
- get list of emails (GET https://qa-challenge-api.scratchpay.com/api/clinics/2/emails)
- search clinic by name (GET https://qa-challenge-api.scratchpay.com/api/clinics?term=<searchterm>)

## 

## Run Locally

```
npm install
npm test
```

## Used libraries and packages

- Supertest - as HTTP client
- Mocha - as a test runner tool
- Chai - as an assertion library
- Mochawesome - as a reporter
- dotenv - as an environment variables manager


## Author
- Fazil Mammadov
- [LinkedIn Profile](https://www.linkedin.com/in/fazil-mammedov/)
- [GitHub Profile](https://github.com/dumpdusty)


## Remarks

- .env file uploaded to remote repository only for the purposes of the current assessment
- report will be generated after each test run and stored in './MyReport' directory

