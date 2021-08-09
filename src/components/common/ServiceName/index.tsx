import React from 'react';

import SVG from 'react-inlinesvg';

import st from './index.module.scss';

const serviceName = () => {
  return (
    <div className={st.serviceName}>
      {/* <figure>
        <SVG src={logo} alt='logo'></SVG>
      </figure> */}
      <span>exspa</span>
    </div>
  );
};

export default React.memo(serviceName);
