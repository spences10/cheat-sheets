import React from 'react';

export default ({ frontmatter: { title } }) => {
  return (
    <div
      style={{
        height: '800px',
        width: '400px',
        border: '5px solid black',
        padding: '1rem',
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};
