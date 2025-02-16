import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

// const FeatureList: FeatureItem[] = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

const FeatureList: FeatureItem[] = [
  {
    title: 'Erste Schritte mit PowerShell',
    Svg: require('@site/static/img/steps.svg').default, 
    // (ggf. eigenes SVG/PNG erstellen oder eine passende Illustration suchen)
    description: (
      <>
        Erfahre alles über die PowerShell-Grundlagen: Syntax, Navigation und einfache Kommandos.
        Perfekt für den schnellen Einstieg!
      </>
    ),
  },
  {
    title: 'Automatisiere deinen Alltag',
    Svg: require('@site/static/img/automate-alltag.svg').default,
    description: (
      <>
        Lerne, wie du mit Skripten repetitive Tasks automatisierst.
        So sparst du Zeit bei der Administration und im DevOps-Alltag.
      </>
    ),
  },
  {
    title: 'Erweitere deine Skills',
    Svg: require('@site/static/img/skill.svg').default,
    description: (
      <>
        Mit fortgeschrittenen Modulen und Cmdlets wirst du zum PowerShell-Profi.
        Entdecke Best Practices und hol dir weitere Tipps in unseren Tutorials.
      </>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
