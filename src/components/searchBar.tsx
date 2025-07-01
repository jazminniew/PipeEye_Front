import React from 'react';
import styled from 'styled-components';

const SearchBar: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="searchBox">
        <input className="searchInput" type="text" placeholder="Buscar empresa..." />
        <button className="searchButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <g clipPath="url(#clip0)">
              <g filter="url(#filter0_d)">
                <path
                  d="M23.8 23.9L19.1 19.2M19.1 19.2C19.8 18.4 20.4 17.5 20.8 16.5C21.2 15.5 21.5 14.5 21.5 13.4C21.5 12.3 21.2 11.3 20.8 10.3C20.4 9.3 19.8 8.4 19.1 7.6C18.3 6.8 17.4 6.2 16.4 5.8C15.4 5.4 14.3 5.2 13.3 5.2C12.2 5.2 11.1 5.4 10.1 5.8C9.1 6.2 8.2 6.8 7.5 7.6C5.9 9.1 5.1 11.2 5.1 13.4C5.1 15.6 5.9 17.6 7.5 19.2C9.0 20.7 11.1 21.6 13.3 21.6C15.4 21.6 17.5 20.7 19.1 19.2Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  shapeRendering="crispEdges"
                />
              </g>
            </g>
            <defs>
              <filter id="filter0_d" x="-0.4" y="3.7" width="30" height="30" filterUnits="userSpaceOnUse">
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="SourceAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.25 0" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
              <clipPath id="clip0">
                <rect width="28" height="28" fill="white" transform="translate(0.4 0.5)" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .searchBox {
    display: flex;
    min-width: 500px;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background: #2f3640;
    border-radius: 50px;
    position: relative;
    min-height: 60px;
  }

  .searchButton {
    color: white;
    position: absolute;
    right: 8px;
    top: -8px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(90deg,hsla(194, 100%, 69%, 1), hsla(217, 100%, 56%, 1) );
    border: none;
    display: inline-block;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
  }

  .searchButton:hover {
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.5) 0 10px 20px;
    transform: translateY(-3px);
  }

  .searchButton:active {
    box-shadow: none;
    transform: translateY(0);
  }

  .searchInput {
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 15px;
    padding: 24px 46px 24px 26px;
    flex: 1;
  }

  .searchInput::placeholder {
  color: var(--gris-medio);
  opacity: 1; /* Para que sea sólido */
}

`;

export default SearchBar;
