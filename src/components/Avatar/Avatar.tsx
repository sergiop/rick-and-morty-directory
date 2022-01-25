import styles from './Avatar.module.css'

interface ImageProps {
  src: string
  alt: string
}

export const Image = ({ src, alt }: ImageProps) => (
  <img className={styles.image} src={src} alt={alt} />
)
