import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoryList from './StoryList';
import StoryViewer from './StoryViewer';

interface Story {
  id: number;
  url: string;
  duration: number;
}

const MainPage: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    axios.get('/api/stories')
      .then(response => setStories(response.data))
      .catch(error => console.error('Error fetching stories:', error));
  }, []);
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const handleSelectStory = (story: Story) => setCurrentStory(story);

  const handleNextStory = () => {
    // Logic to handle next story
    console.log(currentStory)
    if(currentStory != null &&  currentStory.id < stories.length){
      setCurrentStory(stories[currentStory.id]);
    }
    else if(currentStory != null &&  currentStory.id == stories.length){
      setCurrentStory(null);
    }
    console.log(currentStory)
  };

  const handlePrevStory = () => {
    // Logic to handle previous story
    console.log(currentStory)
    if(currentStory != null &&  currentStory.id > 1){
      setCurrentStory(stories[currentStory.id - 2]);
    }
    else if(currentStory != null &&  currentStory.id == 1){
      setCurrentStory(null);
    }
    console.log(currentStory)
  };

  return (
    <div>
      <StoryList stories={stories} onSelect={handleSelectStory} />
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
