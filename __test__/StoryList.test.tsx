// __tests__/StoryList.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import StoryList from '../components/StoryList';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('renders stories and handles selection', async () => {
  const stories = [
    { id: 1, url: '/images/story1.jpg', duration: 5000 },
    { id: 2, url: '/images/story2.jpg', duration: 5000 },
  ];

  mockedAxios.get.mockResolvedValue({ data: stories });

  const handleSelect = jest.fn();
  render(<StoryList onSelect={handleSelect} />);

  const thumbnails = await screen.findAllByRole('img');
  expect(thumbnails).toHaveLength(2);

  fireEvent.click(thumbnails[0]);
  expect(handleSelect).toHaveBeenCalledWith(stories[0]);
});
