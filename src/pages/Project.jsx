import React from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from '../data.js';

const Project = () => {
  return (
    <div className="page-content">
      <h1>O projektu</h1>
      <p>
        Etiam dignissim sem non eleifend tempor. Nullam eget suscipit mauris.
        Nunc vel magna vitae mauris pulvinar efficitur. Integer a lorem non urna
        hendrerit consequat. Nulla semper risus enim, ac vehicula elit rutrum
        nec. Aliquam non aliquet velit. Ut interdum massa nec ultricies
        vulputate. Cras quis elit ex. Suspendisse magna tellus, condimentum quis
        tellus a, congue varius mi. Sed placerat commodo purus, a venenatis eros
        pretium ac. Aenean efficitur ante mauris, eget sodales tortor aliquam
        facilisis. Etiam dignissim vel massa non ultrices. Vivamus sit amet nisi
        id libero vestibulum imperdiet. Nullam semper pellentesque risus eget
        feugiat.
      </p>
      <Gallery photos={photos} />;
    </div>
  );
};

export default Project;
