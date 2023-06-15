import lockIcon from './lock-icon.svg';

const LockIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <use xlinkHref={lockIcon} />
    </svg>
  );
};

export default LockIcon; 