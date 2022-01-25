import styles from './BulletList.module.css'

interface BulletListProps {
  list: React.ReactNode[]
}

export const BulletList = ({ list }: BulletListProps) => (
  <ul className={styles.list}>
    {list.map((l, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={i}>{l}</li>
    ))}
  </ul>
)
