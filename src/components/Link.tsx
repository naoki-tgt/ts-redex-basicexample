import React,{FC} from 'react';

interface IProps {
    children?: React.ReactNode;
    onClick : (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    active : boolean;

}

const Link :FC<IProps> = ({ active, children, onClick }) => (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px'
      }}
    >
      {children}
    </button>
  )

export default Link;