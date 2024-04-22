### Task 7, validateObject

## Example

```JavaScript
const { validateObject } = require('./tasks/task7');

// Define the schema
const schema = {
  name: { type: 'string', descriptors: { enumerable: true } },
  age: { type: 'number', min: 0, max: 120 },
  isAdmin: { type: 'boolean', value: false }
};

// Object to validate
const user = {
  name: 'John Doe',
  age: 30,
  isAdmin: false
};

// Validate the object against the schema
const isValid = validateObject(user, schema);

console.log(isValid); // Output: true
```

## What could be validated:

- object property type:

  - string
  - number
  - object
  - bigint
  - function
  - array
  - boolean

  ```JavaScript
  {
    name: {
        type: 'string'
    }
  }

  ```

- descriptors:

  - enumarable
  - writable
  - configurable

  ```JavaScript
  {
    name: {
        descriptors: {
            enumerable: true,
            writable: true,
            configurable: false
        }
    }
  }
  ```

- strings:

  - max length
  - min length
  - length
  - value

  ```JavaScript
  { name: {
      type: 'string',
      min: 2,
      max: 100,
      length: 10,
      value: 'Robert'
  }}
  ```

- numbers:

  - max
  - min
  - value

  ```JavaScript
  {
      age: {
          type: 'number',
          min: 1,
          max: 140,
          value: 22
      }
  }
  ```

- BigInt:

  - max
  - min
  - value

  ```JavaScript
  {
      bigNumber: {
          type: 'bigint',
          min: 100n,
          max: 1000000000000000000000n,
          value: 10000000000000000000000n
      }
  }
  ```

- boolean:

  - value

  ```JavaScript
  {
      isAlive: {
          type: 'boolean',
          value: true
      }
  }
  ```

- array:

  - min length
  - max length
  - length

  ```JavaScript
  {
      adress: 'array',
      min: 2,
      max: 5,
      length: 3
  }
  ```

- object:

  - recursively calls validateObject using value as argument for schema

  ```JavaScript
  {
      user: {
          type:'object',
          value: {
            name: {
                type:'string',
                min: 2
            },
            age: {
                type: 'number',
                value: 33
            }
          }
      }
  }
  ```

- function

  - validate type only

  ```JavaScript
  {
      getId: {
          type: 'function'
      }
  }
  ```
