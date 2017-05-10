## Shared Code

Our "shared" directory acts like "node_modules."  Any of our functions can import 
them by name easily.  With Tree Shaking and Dead Code Elimination this is ideal for 
sharing common functions across our functions.

Since we use the resolver plugin to easily include ${name}/${name}.js, this allows us 
to organize things nicely.

### Anywhere in our Functions

```js
import test from 'utils/test'
```

