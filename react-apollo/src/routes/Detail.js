import React from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    # This is for Apollo
    movie(id: $id) {
      # This is Real Query for my Server
      id
      title
      medium_cover_image
      language
      description_intro
      rating
      isLiked @client
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${props => props.bg});
`;

export default () => {
  const { id } = useParams(); // Occurs type Error that id is not Integer Value.
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) }, // Type Change.
  });

  return (
    <Container>
      <Column>
        <Title>
          {loading
            ? 'Loading...'
            : `${data.movie.title} ${data.movie.isLiked ? '💖' : '😞'}`}
        </Title>
        <Subtitle>
          {data?.movie?.language} · {data?.movie?.rating}
        </Subtitle>
        <Description>{data?.movie?.description_intro}</Description>
      </Column>
      <Poster bg={data?.movie?.medium_cover_image}></Poster>
      {/* Optional Chaining */}
    </Container>
  );
};
