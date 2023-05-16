import React from 'react';
import Section from './section';

type DisplayRSAProps = {
  n: string;
  p: string;
  q: string;
  e: string;
  d: string;
};

const DisplayRSA: React.FC<DisplayRSAProps> = ({n, p, q, e, d}) => {
  return (
    <Section title="Here is your RSA private key">
      {'\n'}
      n: {n}
      {'\n\n'}
      p: {p}
      {'\n\n'}
      q: {q}
      {'\n\n'}
      e: {e}
      {'\n\n'}
      d: {d}
    </Section>
  );
};

export default DisplayRSA;
