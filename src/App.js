import React from 'react';
import RecoilizeDebugger from 'recoilize';

import * as nodes from './store';
import {
  RecoilRoot,
  atom,
} from 'recoil';

import CharacterCounter from './CharacterCounter'


const root = document.getElementById('root');

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

function App() {
  return (
    <RecoilRoot>
       <RecoilizeDebugger nodes={nodes} root={root} />
      <CharacterCounter />
    </RecoilRoot>
  );
}



export default App;
