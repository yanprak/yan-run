import React, { ReactNode } from 'react';
import './footer.scss';

type FooterProps = {
  children: ReactNode
};

export default function Footer(props: FooterProps) {
  const { children } = props;
  return (
    <div className="footer">
      { children }
    </div>
  );
}
