[![N|Solid](https://www.cypress.io/img/logo-dark.36f3e062.png)](https://www.cypress.io)

# CypressTests

### Install Cypress visit
https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

### Clone this repositery on your local.
>
> Copy folder CypressTests/cypress/integration/Tests/ into CypressTests/cypress/integration/
> 

#### Open Cypress
```sh
$(npm bin)/cypress open
# Click on test to run the test
```

#### Run folder from command line headless
```sh
$(npm bin)/cypress run --browser chrome --spec "cypress/integration/Tests/**/*"
# If we don't pass browser then it will run on electron
# In headless it will record video for each test 
```

#### Run folder from command line headed
```sh
$(npm bin)/cypress run --browser chrome --headed --spec "cypress/integration/Tests/**/*"
# This will run test on chrome
# In headed mode it will not record video 
```

Feel free to raise PR in case of code modification

`Note:`
 You can find my [blog]: http://sagargaikwadblog.blogspot.com/2019/03/cypress-web-has-evolved-finally-testing.html 
 These are basic UI opeartions carried on https://saggy7001.github.io/
