import React from 'react';
import * as S from './styles';
import * as T from './types';

const Button: React.ForwardRefRenderFunction<unknown, T.ButtonProps> = (props, ref) => {
  const {
    variant = 'primary',
    text,
    size = 'large',
    // loading,
    onClick,
    href,
    as,
    to,
  } = props;

  const styles = {
    variant,
    size,
  };

  if (as) {
    return (
      <S.Container>
        <S.Button
          as={as}
          to={to}
          ref={ref}
          {...styles}
        >
          { text }
        </S.Button>
      </S.Container>
    );
  }

  if (href) {
    return (
      <S.Container>
        <S.Button
          as="a"
          href={href}
          ref={ref as React.MutableRefObject<HTMLAnchorElement>}
          {...styles}
        >
          { text }
        </S.Button>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Button
        as="button"
        type="button"
        onClick={onClick}
        ref={ref as React.MutableRefObject<HTMLButtonElement>}
        {...styles}
      >
        { text }
      </S.Button>
    </S.Container>
  );
};

export default React.forwardRef<unknown, T.ButtonProps>(Button);
