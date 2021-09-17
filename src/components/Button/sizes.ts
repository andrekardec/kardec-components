export type ButtonSize = 'large' | 'small';

export const sidePaddings: {[key in ButtonSize]: string } = {
  small: '8px 24px',
  large: '16px 48px',
};

export const heightSize: {[key in ButtonSize]: string } = {
  small: '43px',
  large: '56px',
};

export const fontSize: {[key in ButtonSize]: string } = {
  small: '12px',
  large: '14px',
};
