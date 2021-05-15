const base64 = require('base-64');
const utf8 = require('utf8');

export function GetBase64(encoded: string): string {
  return encoded.split("Basic ")[1];
}

export function DecodeBase64(encoded: string): string {
  const decodedBytes = base64.decode(encoded);
  return utf8.decode(decodedBytes);  
}

export function EncodeBase64(decoded: string): string {
  const encodedBytes = utf8.encode(decoded);
  return base64.encode(encodedBytes);
}
