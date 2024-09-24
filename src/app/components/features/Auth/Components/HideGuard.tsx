import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface HideGuardProps {
  children: React.ReactNode
}
export const HideGuard:React.FC<HideGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token');

    setIsVisible(!token ? false : true)
  }, [navigate]);

  return (<>{isVisible && children}</>);
}