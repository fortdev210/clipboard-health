const crypto = require('crypto');

const TRIVIAL_PARTITION_KEY = '0';
const MAX_PARTITION_KEY_LENGTH = 256;

function hash(input) {
  return crypto.createHash('sha3-512').update(input).digest('hex');
}

function stringify(input) {
   return typeof input === 'string' ? input : JSON.stringify(input)
}

function generateCandidate(event) {
  if (event && event.partitionKey) {
    return stringify(event.partitionKey);
  } else if (event) {
    const data = stringify(event);
    return hash(data);
  } 
  return TRIVIAL_PARTITION_KEY; 
}

function truncate(candidate) {
  return candidate.length > MAX_PARTITION_KEY_LENGTH ? hash(candidate): candidate
}

function deterministicPartitionKey(event) {
  const candidate = generateCandidate(event);
  return truncate(candidate);
}

module.exports = deterministicPartitionKey;
