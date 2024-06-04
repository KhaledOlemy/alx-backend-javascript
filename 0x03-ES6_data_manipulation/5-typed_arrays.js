export default function createInt8TypedArray(length, position, value) {
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(length-position, value);
  return buffer;
}
