import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { Container } from './styles';
import Reactions from '../../../Reactions';

import comment_filled from '../../../../assets/comment.svg';
import like_filled from '../../../../assets/like.svg';
import share_filled from '../../../../assets/share.svg';
import haha from '../../../../assets/haha_static.png';
import love from '../../../../assets/love_static.png';
import like from '../../../../assets/like_static.png';
import uau from '../../../../assets/uau_static.png';
import sad from '../../../../assets/sad_static.png';
import grr from '../../../../assets/grr_static.png';

export default function Footer() {
  const [reactions, setReactions] = useState([
    { label: 'Curtir', value: 'like', count: 0, image: like },
    { label: 'Amei', value: 'love', count: 0, image: love },
    { label: 'Haha', value: 'haha', count: 0, image: haha },
    { label: 'Uau', value: 'uau', count: 0, image: uau },
    { label: 'Triste', value: 'sad', count: 0, image: sad },
    { label: 'Grr', value: 'grr', count: 0, image: grr },
  ]);

  const [currentReact, setCurrentReact] = useState({
    label: 'Curtir',
    value: 'like',
    count: 0,
    image: like_filled,
  });
  const [total, setTotal] = useState(0);

  const [showReactions, setShowReactions] = useState(false);

  const handleMouseEnter = () => setShowReactions(true);

  const handleMouseLeave = () => setShowReactions(false);

  const handleReactInPost = reaction => {
    const newReactions = reactions.map(item => {
      if (reaction === item.value) {
        setCurrentReact({ ...item, count: item.count + 1 });
        return { ...item, count: item.count + 1 };
      }
      return item;
    });

    setReactions(newReactions);
    setShowReactions(false);
  };

  // Update the total of reactions
  useEffect(() => {
    let total = 0;
    reactions.forEach(element => {
      if (element.count > 0) {
        total += element.count;
      }
    });

    setTotal(total);
  }, [reactions]);

  // Render the reaction icons
  const renderReactions = () => {
    if (total === 0) {
      return null;
    }

    return (
      <>
        {reactions.map(item => {
          if (item.count > 0) {
            return <img key={item.value} src={item.image} alt={item.value} />;
          }
          return null;
        })}
        <span>{total},4 mil </span>
      </>
    );
  };

  return (
    <>
      {showReactions && (
        <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
          <Reactions
            show={showReactions}
            handleReactInPost={handleReactInPost}
          />
        </div>
      )}
      <Container>
        <div className="post-info">
          <div>{renderReactions()}</div>
          <div>
            <span>123 mil comentários</span>
            <span>123 mil compartilhamentos</span>
          </div>
        </div>
        <div className="action-buttons">
          <button
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onClick={() => handleReactInPost('like')}
          >
            <img src={currentReact.image} />
            <span id={currentReact.count > 0 && currentReact.value}>
              {currentReact.label}
            </span>
          </button>
          <button>
            <img src={comment_filled} />
            <span>Comentar</span>
          </button>
          <button>
            <img src={share_filled} />
            <span>Compartilhar</span>
          </button>
        </div>
      </Container>
    </>
  );
}
