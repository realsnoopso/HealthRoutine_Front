import { css } from '@emotion/css';
import { useRouter } from 'next/router';
import DrawerList from '@src/components/molecules/DrawerList';
import { workoutList } from '@src/constants/mockData';
import { getRecordsLength } from '@src/services/getRecordsLength';

interface Drawer {
  open: boolean;
  backdropRef: any;
  drawerCloseFunc: () => void;
  closeFunc: () => void;
}

export default function Drawer(props: Drawer) {
  const router = useRouter();
  const { open, backdropRef, drawerCloseFunc, closeFunc } = props;
  function moveToRoutine(index: number, round: number) {
    router.push(`/doing/${index}/${round}`);
    closeFunc();
  }

  

  if (open)
    return (
      <div className={styleRoot}>
        <div
          className="backdrop"
          ref={backdropRef}
          onClick={() => drawerCloseFunc()}
        />
        <div className="drawer-contents">
          {workoutList.map((v, i) => (
            <DrawerList
              key={`${v.name}-${i}`}
              name={v.name}
              id={v.id}
              rounds={getRecordsLength(v.id)}
              totalRounds={v.totalRounds}
              _onClick={() => moveToRoutine(i, getRecordsLength(v.id)+1)}
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
