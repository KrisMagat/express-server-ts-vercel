
export default function handler(req: any, res: { statusCode: number; setHeader: (arg0: string, arg1: string) => void; json: (arg0: { name: string; }) => void; }) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'John Doe' });
}