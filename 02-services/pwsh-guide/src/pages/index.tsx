import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

        {/* PowerShell-Logo (z.B. in static/img/powershell-icon.png) */}
        <img 
          src="/img/pwsh.png" 
          alt="PowerShell Icon" 
          className={styles.powerShellLogo} 
        />

        <Heading as="h1" className="hero__title">
          {siteConfig.title} 
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <pre className={styles.powershellSnippet}>
          PS C:\> Write-Host "Willkommen zu {siteConfig.title}"
        </pre>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Jetzt starten ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}




export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
