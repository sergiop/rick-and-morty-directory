import styles from './Avatar.module.css'

interface AvatarProps {
  src: string
  alt: string
}

export const Avatar = ({ src, alt }: AvatarProps) => (
  <img className={styles.image} src={src} alt={alt} />
)
