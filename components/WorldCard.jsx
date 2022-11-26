import React from 'react';

const WorldCard = ({ imgUrl, title, top, left }) => (
  <div
    style={{
      top,
      left,
    }}
    className="absolute flex items-center justify-center bg-[#323f5d] rounded-[30px] w-[210px] h-[150px]"
  >
    <div
      style={{
        backgroundImage: `url('${imgUrl}')`,
      }}
      className="relative w-[90%] h-[90%] object-cover rounded-[30px]"
    >
      <div className="absolute bottom-[1rem] left-0 w-[90%] flex flex-col justify-center items-center gap-[1rem]">
        <div className="flex justify-center items-center gap-[.5rem]">
          <div className="flex justify-center items-center">
            {
                ['/people-01.png', '/people-02.png', '/people-03.png'].map((person, i) => (
                  <img
                    key={i}
                    src={person}
                    alt="person"
                    className={`w-[24px] h-[24px] ${i !== 0 ? '-ml-[12px]' : ''}`}
                    style={{
                      zIndex: 3 - i,
                    }}
                  />
                ))
            }
          </div>
          <p className="text-white leading-[15px]">+264 joined</p>
        </div>
        <div>
          <h3 className="text-white leading-[15px] font-bold">{title}</h3>
        </div>
      </div>
    </div>
  </div>
);

export default WorldCard;
