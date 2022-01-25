import styles from './Heading.module.css'

interface HeadingProps {
  type: 'h1' | 'h2'
  children: React.ReactNode
}

export const Heading = ({ type, children }: HeadingProps) => {
  const HeadingTag = type

  return <HeadingTag className={styles.heading}>{children}</HeadingTag>
}
