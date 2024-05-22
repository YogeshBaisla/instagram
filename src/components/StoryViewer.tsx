import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StoryViewerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top:0px;
`;

const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NavigationArea = styled.div<{ left?: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  ${({ left }) => (left ? 'left: 0;' : 'right: 0;')}
  cursor: pointer;
`;

interface Story {
  id: number;
  url: string;
  duration: number;
}

const StoryViewer: React.FC<{ story: Story; onNext: () => void; onPrev: () => void }> = ({ story, onNext, onPrev }) => {
  useEffect(() => {
    const timer = setTimeout(onNext, story.duration);
    return () => clearTimeout(timer);
  }, [story, onNext]);

  return (
    <StoryViewerContainer>
      <StoryImage src={story.url} />
      <NavigationArea left onClick={onPrev} />
      <NavigationArea onClick={onNext} />
    </StoryViewerContainer>
  );
};

export default StoryViewer;
