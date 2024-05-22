import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StoryList from '../src/components/StoryList';
import axios from 'axios';


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
test('renders stories and handles selection', async () => {
  const stories = [
    { id: 1, url: '/assets/story1.jpg', duration: 5000 },
    { id: 2, url: '/assets/story2.jpg', duration: 5000 },
  ];

  mockedAxios.get.mockResolvedValue({ data: stories });

  const handleSelect = jest.fn();
  render(<StoryList stories={stories} onSelect={handleSelect} />);

  const thumbnails = await screen.findAllByRole('img');
  expect(thumbnails).toHaveLength(2);

  fireEvent.click(thumbnails[0]);
  expect(handleSelect).toHaveBeenCalledWith(stories[0]);
});