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

export default function Footer() {
  const [reactions, setReactions] = useState([]);
  const [showReactions, setShowReactions] = useState(false);

  const handleMouseEnter = () => setShowReactions(true);

  const handleMouseLeave = () => setShowReactions(false);

  return (
    <>
      {showReactions && (
        <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
          <Reactions show={showReactions} />
        </div>
      )}
      <Container>
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
          <button
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
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
