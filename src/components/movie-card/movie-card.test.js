import React from 'react';
import rerender from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  videoSource: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

describe(`MovieCard`, () => {
  it(`MovieCard component should render correctly`, () => {
    const tree = rerender.create(
        <MovieCard
          film={film}
          onMovieCardClick={() => {}}
          onMovieCardHover={() => {}} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
