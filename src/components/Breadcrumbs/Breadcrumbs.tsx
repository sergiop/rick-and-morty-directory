import { Link } from 'react-router-dom'

import styles from './Breadcrumbs.module.css'

interface BreadcrumbsProps {
  breadcrumbs: {
    to?: string
    label: string | React.ReactNode
  }[]
}

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => (
  <ul className={styles.breadcrumbs}>
    {breadcrumbs.map((b, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={i} className={styles.breadcrumb}>
        {b.to ? (
          <Link className={styles.link} to={b.to}>
            {b.label}
          </Link>
        ) : (
          b.label
        )}
      </li>
    ))}
  </ul>
)
