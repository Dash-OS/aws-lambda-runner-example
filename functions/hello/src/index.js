import run from 'aws-lambda-runner'

// While not required, tree shaking and dead code elimination will automatically
// be used to reduce lodash size.
import _ from 'lodash'

export default run({
  // default status code to return to the caller when using proxy integration.
  statusCode: 200,
  // do we want to add the 'Access-Control-Allow-Origin' header to our response?
  cors: true,
  // do we want to add any headers to the response?  we can add new headers by
  // mutating the received config objects "headers" key
  headers: null,
}, async (body, config) => {
  return {
    hello: 'world'
  }
})