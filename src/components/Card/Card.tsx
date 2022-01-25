import styles from './Card.module.css'

interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => (
  <div className={styles.card}>{children}</div>
)
