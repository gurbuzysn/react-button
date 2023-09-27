import { useState } from "react";
import styles from "@/styles/Buttonum.module.css";

export default function Buttonum() {
  const [sayi, setSayi] = useState(0);
  const buttonClick = function (e) {
    setSayi(sayi + 1);
  };

  return <button className={styles.Buttonum} onClick={buttonClick}>{sayi}</button>;
}
