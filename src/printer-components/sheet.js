import React from 'react';

export default ({ frontmatter: { title } }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '800px',
        height: '400px',
        margin: '10px',
        border: '7px solid rebeccapurple',
        borderRadius: '10px',
      }}
    >
      <h1
        style={{
          fontFamily: '"Josefin Slab"',
          fontSize: '75px',
          fontWeight: '700',
          color: 'rebeccapurple',
          textTransform: 'capitalize',
          margin: '30px',
          display: 'inline-block',
          lineHeight: '1',
        }}
      >
        {title}
      </h1>
      <h3
        style={{
          fontFamily: 'Maitree',
          fontSize: '45px',
          color: 'rebeccapurple',
          textTransform: 'capitalize',
          position: 'absolute',
          bottom: '0',
          margin: '30px',
        }}
      >
        cheat sheets
      </h3>
    </div>
  );
};
