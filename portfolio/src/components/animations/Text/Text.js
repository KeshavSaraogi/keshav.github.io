import { useEffect, useRef } from 'react';
import './Text.css';

function Text({ data = [], typingSpeed = 100, messageDelay = 2000 }) {
  const typingAreaRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const startTyping = () => {
      const { current: typingArea } = typingAreaRef;
      if (!typingArea) return;

      let characterPos = 0;
      let messageIndex = 0;
      let messageBuffer = '';

      const typeCharacter = () => {
        if (characterPos < data[messageIndex].length) {
          messageBuffer += data[messageIndex].charAt(characterPos);
          typingArea.value = messageBuffer + '_';
          characterPos++;
          timeoutRef.current = setTimeout(typeCharacter, typingSpeed);
        } else {
          handleEndOfMessage();
        }
      };

      const handleEndOfMessage = () => {
        messageBuffer = '';
        characterPos = 0;
        if (messageIndex < data.length - 1) {
          messageIndex++;
        } else {
          messageIndex = 0;
        }
        timeoutRef.current = setTimeout(typeCharacter, messageDelay);
      };
      typeCharacter();
    };
    startTyping();
    
    return () => clearTimeout(timeoutRef.current);
  }, [data, typingSpeed, messageDelay]);

  return (
    <textarea ref={typingAreaRef} readOnly id="typing-text" />
  );
}

export default Text;
