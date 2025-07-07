import React from 'react';
import styled from 'styled-components';

const Switch = () => {
  return (
    <StyledWrapper>
      <div className="toggle-switch">
        <input className="toggle-input" id="toggle" type="checkbox" />
        <label className="toggle-label" htmlFor="toggle" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    margin: 10px;
  }

  .toggle-switch .toggle-input {
    display: none;
  }

  .toggle-switch .toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 24px;
    background-color: #BEBEBE; /* Color cuando está apagado */
    border-radius: 34px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .toggle-switch .toggle-label::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background-color: #fff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
  }

  .toggle-switch .toggle-input:checked + .toggle-label {
    background-color: var(--color-primario); /* ✅ Nuevo color activo */
  }

  .toggle-switch .toggle-input:checked + .toggle-label::before {
    transform: translateX(16px);
  }
`;

export default Switch;
