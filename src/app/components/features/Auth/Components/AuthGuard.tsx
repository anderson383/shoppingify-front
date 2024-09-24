import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthGuardProps {
  children: React.ReactNode
}
export const AuthGuard:React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Si no hay token, redirige al inicio de sesión
      navigate('/auth/login');
    }
    setVisible(true)
  }, [navigate]);

  return (<>{visible && children}</>);
}