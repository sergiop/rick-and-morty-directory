import { Link, LinkProps } from 'react-router-dom'

import styles from './ButtonLink.module.css'

export const ButtonLink = (props: LinkProps) => {
  const { children } = props

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link {...props} className={styles.link}>
      {children}
    </Link>
  )
}
