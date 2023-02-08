import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface ILogoProps {
  width?: number;
  height?: number;
}
const Logo: FC<ILogoProps> = ({ width, height }) => {
  return (
    <svg
      width={height !== 1000 && !!height ? height * (1375 / 1000) : width}
      height={width !== 1375 && !!width ? width * (1000 / 1375) : height}
      viewBox='0 0 1375 1000'
      fill='#ff8d86'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        className="st0"
        d="M500 0C223.9 0 0 223.9 0 500s223.9 500 500 500 500-223.9 500-500S776.1 0 500 0zm0 750c-138.1 0-250-111.9-250-250s111.9-250 250-250 250 111.9 250 250-111.9 250-250 250z"
      />
      <circle className="st0" cx={1250} cy={500} r={125} />
    </svg>
  );
};
Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
Logo.defaultProps = {
  width: 1375,
  height: 1000,
};

export default Logo;