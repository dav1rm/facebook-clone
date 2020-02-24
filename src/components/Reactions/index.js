import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import like from '../../assets/like.gif';
import love from '../../assets/love.gif';
import haha from '../../assets/haha.gif';
import uau from '../../assets/uau.gif';
import grr from '../../assets/grr.gif';
import sad from '../../assets/sad.gif';

export default function Reactions(props) {
  const [showReactions, setShowReactions] = useState(false);

  useEffect(() => {
    setShowReactions(props.show);
  }, [props.show]);

  return (
    <Container
      show={showReactions}
      onMouseEnter={props.handleOnHoverIn}
      onMouseLeave={props.onMouseLeave}
    >
      <button type="button" className="react">
        <span>Curtir</span>
        <img src={like} alt="like" />
      </button>
      <button type="button" className="react">
        <span>Amei</span>
        <img src={love} alt="love" />
      </button>
      <button type="button" className="react">
        <span>Haha</span>
        <img src={haha} alt="haha" />
      </button>
      <button type="button" className="react">
        <span>Uau</span>
        <img src={uau} alt="uau" />
      </button>
      <button type="button" className="react">
        <span>Triste</span>
        <img src={sad} alt="sad" />
      </button>
      <button type="button" className="react">
        <span>Grr</span>
        <img src={grr} alt="grr" />
      </button>
    </Container>
  );
}
