import styles from './MainLayout.module.css'

interface MainLayoutProps {
  content: React.ReactNode
}

export const MainLayout = ({ content }: MainLayoutProps) => (
  <>
    <header className={styles.header}>
      <h1 className={styles.title}>
        The Rick and Morty
        {' '}
        <span>Characters Directory</span>
      </h1>
    </header>

    <main>
      <div className={styles.container}>{content}</div>
    </main>
  </>
)
