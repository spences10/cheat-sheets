import React from 'react';

export default ({ frontmatter: { title } }) => {
  return (
    <div
      style={{
        width: '800px',
        height: '400px',
        border: '5px solid black',
        padding: '1rem',
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};
