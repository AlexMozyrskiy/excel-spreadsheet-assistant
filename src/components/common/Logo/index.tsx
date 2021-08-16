import React from 'react';

import logo from './resources/logo.png';

import st from './index.module.scss';

const Logo: React.FC = () => {
  return (
    <figure className={st.logo}>
      <img src={logo} />
    </figure>
  );
};

export default React.memo(Logo);
