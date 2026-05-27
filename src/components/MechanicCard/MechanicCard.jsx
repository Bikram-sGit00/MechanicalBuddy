import './MechanicCard.css';

import {
  BsChatDots,
  BsTelephone,
  BsStarFill,
  BsPatchCheckFill,
} from 'react-icons/bs';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

const mechanics = [
  {
    id: 1,
    name: 'Rahul Mechanic',
    image: 'https://i.pravatar.cc/300?img=12',
    distance: '1.2 km away',
    rating: '4.9 (128 reviews)',
    experience: '5+ Years Experience',
    skills: ['Engine Repair', 'Battery', 'Brakes'],
  },

  {
    id: 2,
    name: 'Amit Garage',
    image: 'https://i.pravatar.cc/300?img=15',
    distance: '1.8 km away',
    rating: '4.7 (94 reviews)',
    experience: '4+ Years Experience',
    skills: ['Tyre', 'Oil Change', 'General Service'],
  },

  {
    id: 3,
    name: 'Suman Auto',
    image: 'https://i.pravatar.cc/300?img=18',
    distance: '2.4 km away',
    rating: '4.8 (176 reviews)',
    experience: '7+ Years Experience',
    skills: ['Battery', 'Engine', 'Emergency'],
  },
];

const MechanicCard = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const wrapperRef = useRef(null);

  useEffect(() => {

    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    let isScrolling = false;

    const handleWheel = (e) => {

      e.preventDefault();

      if (isScrolling) return;

      isScrolling = true;

      if (e.deltaY > 0) {

        setActiveIndex((prev) =>
          prev < mechanics.length - 1
            ? prev + 1
            : prev
        );

      } else {

        setActiveIndex((prev) =>
          prev > 0
            ? prev - 1
            : prev
        );

      }

      setTimeout(() => {
        isScrolling = false;
      }, 450);

    };

    wrapper.addEventListener(
      'wheel',
      handleWheel,
      { passive: false }
    );

    return () => {

      wrapper.removeEventListener(
        'wheel',
        handleWheel
      );

    };

  }, []);

  return (

    <div
      className="mechanic-wrapper"
      ref={wrapperRef}
    >

      {mechanics.map((mechanic, index) => {

        const offset = index - activeIndex;

        return (

          <div
            key={mechanic.id}
            className="mechanic-card"
            style={{

              transform: `
                translateY(${offset * 38}px)
                scale(${1 - Math.abs(offset) * 0.04})
              `,

              opacity:
                offset === 0
                  ? 1
                  : offset === 1
                    ? 0.65
                    : 0,

              filter:
                offset === 0
                  ? 'blur(0px)'
                  : 'blur(1.2px)',

              zIndex:
                mechanics.length - Math.abs(offset),

              pointerEvents:
                offset === 0
                  ? 'auto'
                  : 'none',

            }}
          >

            <img
              src={mechanic.image}
              alt="mechanic"
              className="mechanic-img"
            />

            <div className="mechanic-content">

              <div className="mechanic-top">

                <div>

                  <h2>
                    {mechanic.name}

                    <BsPatchCheckFill className="verified-icon" />
                  </h2>

                  <p>{mechanic.distance}</p>

                </div>

                <div className="available-badge">
                  <span></span>
                  AVAILABLE
                </div>

              </div>

              <div className="mechanic-info">

                <div>
                  <BsStarFill />
                  {mechanic.rating}
                </div>

                <div>
                  {mechanic.experience}
                </div>

              </div>

              <div className="skill-tags">

                {mechanic.skills.map((skill, index) => (
                  <span key={index}>
                    {skill}
                  </span>
                ))}

              </div>

              <div className="mechanic-actions">

                <button className="request-btn">
                  Request Assistance
                </button>

                <button className="icon-btn">
                  <BsChatDots />
                </button>

                <button className="icon-btn">
                  <BsTelephone />
                </button>

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
};

export default MechanicCard;