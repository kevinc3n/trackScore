"use client"
import React from 'react';
import '../../styles/globals.css';
import Review from '../../components/review';

const Home = () => {
  const handleReviewClick = () => {
    
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '20px',
        }}
      >
        <Review onClick={handleReviewClick} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus aenean vel elit scelerisque mauris. Nulla facilisi cras fermentum odio eu feugiat pretium. Lobortis scelerisque fermentum dui faucibus. Cursus turpis massa tincidunt dui ut ornare lectus. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Aliquam id diam maecenas ultricies mi eget mauris. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit aliquet sagittis id consectetur purus ut faucibus. Gravida rutrum quisque non tellus. Est lorem ipsum dolor sit amet consectetur adipiscing. Proin sagittis nisl rhoncus mattis rhoncus urna neque.

Donec enim diam vulputate ut pharetra sit. Tristique senectus et netus et. Et netus et malesuada fames ac turpis. Porta nibh venenatis cras sed felis eget velit aliquet. Vestibulum lectus mauris ultrices eros. Ornare arcu odio ut sem. Diam vel quam elementum pulvinar etiam. Eu sem integer vitae justo. A diam sollicitudin tempor id. Urna porttitor rhoncus dolor purus non enim. Velit euismod in pellentesque massa placerat duis ultricies lacus. Iaculis urna id volutpat lacus. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Odio ut enim blandit volutpat maecenas. Etiam non quam lacus suspendisse faucibus. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Aliquet nibh praesent tristique magna. Eget gravida cum sociis natoque penatibus et magnis dis.

Massa id neque aliquam vestibulum morbi. Sit amet purus gravida quis blandit turpis. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Auctor augue mauris augue neque gravida in fermentum et. Orci nulla pellentesque dignissim enim sit amet venenatis. Et odio pellentesque diam volutpat commodo sed. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Tellus id interdum velit laoreet id donec. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Ut pharetra sit amet aliquam. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Pretium nibh ipsum consequat nisl vel. Mauris nunc congue nisi vitae. Diam phasellus vestibulum lorem sed. Massa enim nec dui nunc. Facilisi etiam dignissim diam quis enim lobortis scelerisque.

Porttitor lacus luctus accumsan tortor posuere ac. Elementum curabitur vitae nunc sed. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Lectus quam id leo in vitae turpis massa sed elementum. Phasellus faucibus scelerisque eleifend donec pretium. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Malesuada pellentesque elit eget gravida cum. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Purus gravida quis blandit turpis cursus in hac. Posuere ac ut consequat semper viverra nam libero justo laoreet. Pretium nibh ipsum consequat nisl vel pretium lectus quam. A lacus vestibulum sed arcu non odio euismod lacinia at. Placerat vestibulum lectus mauris ultrices eros in cursus turpis.

Sit amet volutpat consequat mauris nunc congue nisi vitae. Facilisis magna etiam tempor orci. Diam vulputate ut pharetra sit amet. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Ultrices gravida dictum fusce ut placerat orci nulla. Lacus sed turpis tincidunt id aliquet risus feugiat in. Nam aliquam sem et tortor consequat id porta nibh venenatis. Volutpat consequat mauris nunc congue nisi vitae. Tristique risus nec feugiat in. Quis varius quam quisque id diam vel quam." />
        <Review onClick={handleReviewClick} text="Example Review 2" />
        <Review onClick={handleReviewClick} text="Example Review 3" />
      
      </div>
      
    </div>
  );
};

export default Home;
