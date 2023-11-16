import styles from "@/styles/Home.module.css";

type Separator = {
  variation: number;
};
export default function Separator({ variation }: Separator) {
  if (variation < 5)
    return <img src={`images/sep${variation}.svg`} className={styles.separator} />;
  else
    return <img src={"images/sep5.svg"} className={styles.separator} />;
}
