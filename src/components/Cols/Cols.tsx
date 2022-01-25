import styles from './Cols.module.css'

interface ColsProps {
  col1: React.ReactNode
  col2: React.ReactNode
}

export const Cols = ({ col1, col2 }: ColsProps) => (
  <div className={styles.row}>
    <div className={styles.col1}>{col1}</div>
    <div className={styles.col2}>{col2}</div>
  </div>
)
