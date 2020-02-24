import React from 'react';

import { Container } from './styles';

import SideLeft from '../../components/SideLeft';
import SideRight from '../../components/SideRight';
import NewPost from '../../components/NewPost';
import Post from '../../components/Post';
import Stories from '../../components/Stories';

export default function Main() {
  return (
    <Container>
      <SideLeft />
      <div className="content">
        <NewPost />
        <Stories />
        <Post
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          image="https://www.newsrondonia.com.br/imagensNoticias/image/IMAGEM].jpg"
        />
        <Post text="Boa tarde... Quantos likes esse post merece?" />
        <Post image="https://lh3.googleusercontent.com/proxy/9EvQKT0An9f37pnERAGGPc_aEu0btzypNKAqQ7t41vNHYAAmiCLHeakAjMANsENxn3_UgZ4S6-lTH_xv6f02ylvn23ZoVJldS-Ck6R4rXt6eo4NFz_S8IZGfCEnjPRQ6ijFcSsmBb1PObNR5an7s8hM5JBrbrShmmWkyHQ" />
      </div>
      <SideRight />
    </Container>
  );
}
