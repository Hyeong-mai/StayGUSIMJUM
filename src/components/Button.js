import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border: 1px solid #2c7a8c;
  color: #2c7a8c;
  padding: 0.2rem 0.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-family: "Orbit", sans-serif;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  outline: none;
  box-shadow: 0 2px 8px rgba(44, 122, 140, 0.2);
  position: relative;
  overflow: hidden;
  margin-right: 10px;
  min-width: 80px;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(44, 122, 140, 0.1),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    background: #2c7a8c;
    color: white;
    box-shadow: 0 4px 12px rgba(44, 122, 140, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(44, 122, 140, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;

    &:hover {
      transform: none;
      background: transparent;
      color: #2c7a8c;
    }
  }

  @media (max-width: 768px) {
    padding: 0.35rem 0.9rem;
    font-size: 0.9rem;
    min-width: 75px;
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.85rem;
    min-width: 70px;
    margin-right: 6px;
  }

  @media (max-width: 320px) {
    padding: 0.25rem 0.6rem;
    font-size: 0.8rem;
    min-width: 60px;
  }
`;

const Button = ({ children, onClick, disabled, ...props }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
