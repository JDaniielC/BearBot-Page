import Introduction from 'components/Introduction';
import Features from 'components/Features';
import Results from 'components/Results';
import Plans from 'components/Plans';
import Contacts from 'components/Contacts';

import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Introduction />
        <Features />
        <Results />
        <Plans />
        <Contacts />
    </div>
  )
}
