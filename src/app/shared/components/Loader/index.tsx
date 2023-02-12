import LoaderSvg  from "../../../../assets/img/icons/Loader.svg"
import styles from "./styles.module.scss";
import React, {useState} from "react";

interface LoaderProps {
  loading: boolean
}
export const Loader:React.FC<LoaderProps> = ({ loading }) => {
  let theme = 'light'
  return (
    <>
      {
        loading && (
          <div className={`${styles[theme + '__container-loader']}`}>
            <div className={`${styles[theme + '__container-loader__spin']}`}>
              <img src={LoaderSvg} alt="" width="90" height="90"/>
            </div>
          </div>
        )
      }
    </>
  )
}