import React, { useState } from 'react';
import _ from 'lodash';

import { Container } from './styles';
import Reactions from '../../../Reactions';

import comment_filled from '../../../../assets/comment.svg';
import like_filled from '../../../../assets/like.svg';
import share_filled from '../../../../assets/share.svg';
import haha from '../../../../assets/haha_static.png';
import love from '../../../../assets/love_static.png';
import like from '../../../../assets/like_static.png';

export default function Footer() {
  const [reactions, setReactions] = useState([]);
  const [showReactions, setShowReactions] = useState({
    val: false,
    time: Date.now(),
  });

  const handleHover = _.debounce(() => {
    const now = Date.now();
    const seconds = (now - showReactions.time) / 1000;

    setShowReactions(prevState => {
      if (prevState.val === true && seconds < 5) {
        return { ...showReactions, val: true };
      }

      return { time: Date.now(), val: false };
    });
  }, 1000);

  const handleHoverIn = () => {
    setShowReactions({ ...showReactions, val: true });
    console.log('entrou:', showReactions);
  };

  return (
    <>
      <Container>
        {showReactions.val && (
          <Reactions
            show={showReactions}
            onMouseLeave={handleHover}
            onMouseEnter={handleHoverIn}
          />
        )}
        <div className="post-info">
          <div>
            <img src={like} alt="love" />
            <img src={haha} alt="love" />
            <img src={love} alt="love" />
            <span>123</span>
          </div>
          <div>
            <span>123 comentários</span>
            <span>123 compartilhamentos</span>
          </div>
        </div>
        <div className="action-buttons">
          <button onMouseEnter={handleHoverIn} onMouseLeave={handleHover}>
            <img id="like" src={like_filled} />
            <span>Curtir</span>
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
