import { ElementType, MouseEventHandler } from 'react';
import { ButtonSize } from './sizes';

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'ghost';

export interface BaseButtonProps {
  variant?: ButtonType;
  text?: string;
  size?: ButtonSize;
  loading?: boolean;
}

type HTMLButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;

type HTMLAnchorProps = {
  href?: string;
} & BaseButtonProps;

type CustomNodeProps = {
  as?: ElementType | string;
  to?: string;
} & BaseButtonProps;

export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;
