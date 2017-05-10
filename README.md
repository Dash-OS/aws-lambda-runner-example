# Apex / AWS Lambda Runner Example Project

This is an example project showing off how to setup a project using [apex](https://github.com/apex/apex), 
[Webpack 2](https://webpack.js.org/), [babel](https://babeljs.io/), [lodash](https://lodash.com/docs/4.17.4), and [aws-lambda-runner](https://github.com/Dash-OS/aws-lambda-runner).


### Key Features

 - Create and Manage Lambda Functions with [apex](https://github.com/apex/apex)
 - [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) & Dead Code Elimination
 - Handle API Gateway / [Lambda Proxy Integration](http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html)

### Deploy and Invoke

Once downloaded and [apex](https://github.com/apex/apex) is setup:

```bash
apex deploy
apex invoke hello
```

When deploying, any changed functions will be built and deployed with versioning. 
More advanced setup available - just check the [apex docs](http://apex.run/)!



