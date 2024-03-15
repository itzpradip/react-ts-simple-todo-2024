import React, { ReactNode } from 'react'

type HintBoxType = {
  mode: 'hint';
  children: ReactNode;
};

type WarningBoxType = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
};

type InfoBoxType = HintBoxType | WarningBoxType;

const InfoBox = (props : InfoBoxType) => {
  const {mode, children} = props;

  if( mode === 'hint' ) {
    return (
      <aside className='infobox infobox-hint'>
        {children}
      </aside>
    )
  }

  const {severity} = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      {children}
    </aside>
  )
}

export default InfoBox