import * as React from 'react';
import {
  Component,
  CurrentAdmin,
  ServiceName,
  LogoutButton,
  PointSpan,
} from './style';

interface HeaderNavigationBarProps {
  serviceName: string;
  currentAdmin: number;
  onLogout: () => void;
}

const HeaderNavigationBar: React.FunctionComponent<
  HeaderNavigationBarProps
> = ({ serviceName, currentAdmin, onLogout }) => {
  return (
    <Component>
      <CurrentAdmin>
        접속 중인 어드민 <PointSpan>{currentAdmin}</PointSpan>
      </CurrentAdmin>
      <ServiceName>{serviceName}</ServiceName>
      <LogoutButton onClick={onLogout}>Logout</LogoutButton>
    </Component>
  );
};

export default HeaderNavigationBar;
