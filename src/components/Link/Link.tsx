import { Link as RouterLink, LinkProps } from 'react-router-dom'

import styles from './Link.module.css'

export const Link = (props: LinkProps) => {
  const { children } = props

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <RouterLink {...props} className={styles.link}>{children}</RouterLink>
  )
}
