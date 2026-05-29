import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-text">
        <span className="mechanical">Mechanical</span>
        <span className="buddy">Buddy</span>
      </div>
      <div className="bottom-design">
        <div className="line-left"></div>
        <div className="gear">⚙</div>
        <div className="line-right"></div>
      </div>
    </div>
  );
};

export default Logo;