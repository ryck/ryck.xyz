import crypto from 'crypto';

const algorithm = 'aes-128-cbc';
const decipher = crypto.createDecipheriv(
  algorithm,
  process.env.GOOGLE_ENCRYPTION_KEY,
  process.env.GOOGLE_ENCRYPTION_IV
);

export const getDecryptedSecret = (service) => {
  let decrypted = decipher.update(service, 'base64', 'utf8');

  decrypted += decipher.final('utf8');

  return JSON.parse(decrypted);
};
