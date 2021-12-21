import { mount } from 'mf1/MFApp';
import React, { useRef, useLayoutEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
