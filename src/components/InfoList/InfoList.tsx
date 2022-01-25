import styles from './InfoList.module.css'

interface InfoListProps {
  list: {
    title: string | number
    value: string | number
  }[]
}

export const InfoList = ({ list }: InfoListProps) => (
  <ul className={styles.list}>
    {list.map((l, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={i}>
        <div className={styles.values}>
          <div className={styles.name}>
            {l.title}
          </div>
          <div>{l.value}</div>
        </div>
      </li>
    ))}
  </ul>
)
