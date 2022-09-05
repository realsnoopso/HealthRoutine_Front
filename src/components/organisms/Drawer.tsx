import { css } from '@emotion/css';
import React from 'react';
import DrawerList from '@src/components/molecules/DrawerList';
import { useState, useEffect } from 'react';
import { workoutList } from '@src/constants/mockData';

interface Drawer {
  open: boolean;
  _backdropRef: any;
}

export default function Drawer(props: Drawer) {
  const { open, _backdropRef } = props;

  if (open)
    return (
      <div className={styleRoot}>
        <div className="backdrop" ref={_backdropRef} />
        <div className="drawer-contents">
          {workoutList.map((v, i) => (
            <DrawerList
              key={`${v.name}-${i}`}
              name={v.name}
              totalNumber={v.totalNumber}
              number={v.number}
            />
          ))}
        </div>
      </div>
    );
  else return <></>;
}

const styleRoot = css`
  .backdrop {
    position: fixed;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .drawer-contents {
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    width: 333px;
    height: 100%;
    background-color: white;
  }
`;
