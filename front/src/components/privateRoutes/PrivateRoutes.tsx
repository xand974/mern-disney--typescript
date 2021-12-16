import { FC } from "react";

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/selector";
import { RootState } from "../../context/store";

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const { currentUser } = useAppSelector((state: RootState) => state.user);

  if (currentUser) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
