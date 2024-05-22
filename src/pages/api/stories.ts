import { NextApiRequest, NextApiResponse } from 'next';

const stories = [
  { id: 1, url: '/assets/story1.jpg', duration: 5000 },
  { id: 2, url: '/assets/story2.jpg', duration: 5000 },
  { id: 3, url: '/assets/story3.jpg', duration: 5000 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(stories);
}
