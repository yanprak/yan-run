import serialize from 'serialize-javascript';

export default function safelyRenderObject(data: unknown): string {
  // eslint-disable-next-line
  return serialize(data).replace(/</g, '\\\u003c');
}
