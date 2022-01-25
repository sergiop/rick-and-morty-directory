import styles from './Small.module.css'

interface SmallProps {
  children: React.ReactNode
}

export const Small = ({ children }: SmallProps) => (
  <div className={styles.small}>{children}</div>
)
