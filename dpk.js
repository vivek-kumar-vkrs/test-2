const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = process.env.TRIVIAL_PARTITION_KEY || "0";
  const MAX_PARTITION_KEY_LENGTH = process.env.MAX_PARTITION_KEY_LENGTH || 256;
  let candidate = "";

  const { partitionKey = null } = event || {};
  
  if (event) {
    if (partitionKey) {
      candidate = partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  if (candidate && typeof candidate !== "string") candidate = JSON.stringify(candidate);
  if (!candidate) candidate = TRIVIAL_PARTITION_KEY;

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};
