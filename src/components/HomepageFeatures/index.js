import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Yummy',
    Svg: require('@site/static/img/logogrape.svg').default,
    description: (
      <>
        The sweetness of grapes can vary depending on factors 
        like variety, climate, and ripeness at harvest
      </>
    ),
  },
  {
    title: 'Types',
    Svg: require('@site/static/img/logogrape.svg').default,
    description: (
      <>
        Grapes come in various colors, 
        from deep purple to vibrant green and everything in between.
      </>
    ),
  },
  {
    title: 'Wine',
    Svg: require('@site/static/img/logogrape.svg').default,
    description: (
      <>
        Winemaking begins with the careful selection 
        and crushing of grapes to extract their flavorful juices.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
