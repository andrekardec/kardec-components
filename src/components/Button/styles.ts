import styled, { css } from 'styled-components';
import { ButtonType } from './types';

import {
  ButtonSize, sidePaddings, fontSize, heightSize,
} from './sizes';

interface StyledButtonProps {
  variant: ButtonType,
  size: ButtonSize,
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;

`;

export const Button = styled.button<StyledButtonProps>`
  display: inline-block;
  cursor: pointer;

  width: ${({ size }) => (size === 'large' ? 'auto' : '100%')};
  height:${({ size }) => heightSize[size]};
  margin: ${({ size }) => (size === 'large' ? 'auto' : '0 15px 0 15px')};
  padding: ${({ size }) => sidePaddings[size]};
  
  font-size: ${({ size }) => fontSize[size]};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-align: center;

  color: ${({ theme }) => theme.colors.neutral.lightest};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral.darker};
    color: ${({ theme }) => theme.colors.neutral.lightest};
  }

  ${({ variant }) => variant === 'primary' && css`
    
    background: ${({ theme }) => theme.colors.blue.primary};
     
    &:hover {
      filter: ${({ theme }) => theme.shadow[25]};
    }
    
    &:active {
      background-color:${({ theme }) => theme.colors.blue.dark};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.blue.primary};
      border: 2px solid ${({ theme }) => theme.colors.blue.dark};
    } 
  `};

  ${({ variant }) => variant === 'secondary' && css`
    background: ${({ theme }) => theme.colors.blue.darkest};

    &:hover {
      background: ${({ theme }) => theme.colors.gradient.blue};
      box-shadow: ${({ theme }) => theme.shadow[25]};
    }
    
    &:active {
      background-color:${({ theme }) => theme.colors.blue.dark};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.blue.darkest};
      border: 2px solid ${({ theme }) => theme.colors.blue.darker};
  `};

  ${({ variant }) => variant === 'tertiary' && css`
    background: ${({ theme }) => theme.colors.neutral.darkest};

    &:hover {
    }
    
    &:active {
      background-color:${({ theme }) => theme.colors.neutral.dark};
    }

    &:focus {
       border: 2px solid ${({ theme }) => theme.colors.neutral.dark};
  `};
`;

export const Icon = styled.div`
  height: 20px;
  width: 20px;
`;
