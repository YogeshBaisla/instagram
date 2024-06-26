import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StoryListContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  padding: 10px;
`;

const StoryThumbnail = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
  border-radius: 100px;
  cursor: pointer;
`;

interface Story {
  id: number;
  url: string;
  duration: number;
}

const StoryList: React.FC<{ stories:Story[];onSelect: (story: Story) => void }> = ({ stories,onSelect }) => {
  return (
    <StoryListContainer>
      {stories.map(story => (
        <StoryThumbnail
          key={story.id}
          src={story.url}
          onClick={() => onSelect(story)}
        />
      ))}
    </StoryListContainer>
  );
};

export default StoryList;
