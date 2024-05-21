import React, { useState } from 'react';
import StoryList from './StoryList';
import StoryViewer from './StoryViewer';

interface Story {
  id: number;
  url: string;
  duration: number;
}

const MainPage: React.FC = () => {
  const [currentStory, setCurrentStory] = useState<Story | null>(null);

  const handleSelectStory = (story: Story) => setCurrentStory(story);

  const handleNextStory = () => {
    // Logic to handle next story
  };

  const handlePrevStory = () => {
    // Logic to handle previous story
  };

  return (
    <div>
      <StoryList onSelect={handleSelectStory} />
      {currentStory && (
        <StoryViewer
          story={currentStory}
          onNext={handleNextStory}
          onPrev={handlePrevStory}
        />
      )}
    </div>
  );
};

export default MainPage;
