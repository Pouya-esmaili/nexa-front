import styles from "./NexaLoader.module.css";

type Props = {
  size?: number;
  className?: string;
};

export default function NexaLoader({ size = 80, className }: Props) {
  return (
    <svg
      className={`${styles.loader} ${className ?? ""}`}
      width={size}
      height={size}
      viewBox="1130 290 240 370"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.circle}
        d="M1275.75,493.91c0,34.03-27.56,61.62-61.59,61.62s-61.62-27.59-61.62-61.62 27.59-61.62,61.62-61.62c14.47,0,27.75,5.01,38.27,13.36v-63.36c-12-4.11-24.87-6.37-38.27-6.37c-65.17,0-118,52.83-118,118s52.83,118,118,118 118.09-52.83,118.09-118v-106.82h-56.5v106.82Z"
      />
      <path
        className={styles.stem}
        d="M1275.75 387.09v106.82"
      />
      <polyline
        className={styles.arrow}
        points="1242.19,364.52 1304.02,305.48 1365.84,364.52"
      />
      <path
        className={styles.tail}
        d="M1288.58,611.91h43.61v-41.26c-7.99,14.73-24.33,32.36-43.61,41.26Z"
      />
    </svg>
  );
}
