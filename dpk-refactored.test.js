const deterministicPartitionKey = require("./dpk-refactored");

describe('deterministicPartitionKey', () => {
  test('should return "0" for undefined input', () => {
    expect(deterministicPartitionKey(undefined)).toBe('0');
  });

  test('should return a hashed string for non-string input', () => {
    const input = { foo: 'bar' };
    expect(deterministicPartitionKey(input)).toHaveLength(128);
  });

  test('should return a truncated string for long input', () => {
    const input = 'a'.repeat(300);
    expect(deterministicPartitionKey(input)).toHaveLength(128);
  });

  test('should return the partition key for defined partition key input', () => {
    const input = {
      partitionKey: 'myPartitionKey',
      otherData: { foo: 'bar' },
    };

    expect(deterministicPartitionKey(input)).toBe('myPartitionKey');
  });

  test('should return the same output for identical input', () => {
    const input1 = { foo: 'bar' };
    const input2 = { foo: 'bar' };

    expect(deterministicPartitionKey(input1)).toBe(deterministicPartitionKey(input2));
  });
});
