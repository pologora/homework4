/* eslint-disable operator-linebreak */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */

const propTypes = {
  string: 'string',
  number: 'number',
  boolean: 'boolean',
  object: 'object',
  array: 'array',
  function: 'function',
  bigint: 'bigint',
};

const validateFunctions = {
  [propTypes.string]: validateString,
  [propTypes.number]: validateNumber,
  [propTypes.boolean]: validateBoolean,
  [propTypes.object]: validateObject,
  [propTypes.bigint]: validateBigInt,
  [propTypes.function]: validateMethod,
  [propTypes.array]: validateArray,
};

/*
1. prop exist in object
2. check prop type is the same as schema type
3. check descriptors
4. run check func depends of type
*/

function validateObject(obj, schema = {}) {
  for (const [key, propSchema] of Object.entries(schema)) {
    if (!Object.hasOwn(obj, key)) return false;

    const objPropType = typeof obj[key];
    const { type: schemaPropType, descriptors: schemaDescriptors } = propSchema;

    if (schemaPropType) {
      if (schemaPropType === 'array') {
        if (!Array.isArray(obj[key])) {
          return false;
        }
      } else if (objPropType !== schemaPropType) return false;

      if (!Object.hasOwn(propTypes, schemaPropType)) {
        throw new Error(`Schema property type: ${schemaPropType} doesn't exist in the defined property types`);
      }
    }

    if (schemaDescriptors) {
      const validDescriptors = validateDescriptors(obj, key, schemaDescriptors);
      if (!validDescriptors) return false;
    }

    const objPropValue = obj[key];
    const validateFunction = validateFunctions[schemaPropType];
    const propValid =
      schemaPropType === 'object'
        ? validateFunction(objPropValue, propSchema.value)
        : validateFunction(objPropValue, propSchema);

    if (!propValid) return false;
  }

  return true;
}

function validateString(string, schema) {
  // eslint-disable-next-line object-curly-newline
  const { min, max, value, length } = schema;

  if (min && string.length < min) return false;
  if (max && string.length > max) return false;
  if (length && string.length !== length) return false;
  if (value && string !== value) return false;

  return true;
}

function validateNumber(number, schema) {
  const { min, max, value } = schema;
  if (min && number < min) return false;
  if (max && number > max) return false;
  if (value != null) return number === value;

  return true;
}

function validateBoolean(boolean, schema) {
  const { value } = schema;
  if (value != null) return value === boolean;

  return true;
}

function validateBigInt(bigint, schema) {
  const { min, max, value } = schema;
  if (min && bigint < min) return false;
  if (max && bigint > max) return false;
  if (value != null) return value === bigint;

  return true;
}

function validateMethod() {
  return true;
}

function validateArray(array, schema) {
  const { length, min, max } = schema;
  if (min && array.length < min) return false;
  if (max && array.length > max) return false;
  if (length) return array.length === length;

  return true;
}

function validateDescriptors(obj, key, schema) {
  const objectDescriptors = Object.getOwnPropertyDescriptor(obj, key);

  for (const schemaKey of Object.keys(schema)) {
    if (schema[schemaKey] !== objectDescriptors[schemaKey]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  validateObject,
  validateBoolean,
  validateNumber,
  validateString,
  validateArray,
  validateBigInt,
  validateMethod,
};
