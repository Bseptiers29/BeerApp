import Layout from '../components/MyLayout.js';

export default function About() {
  return (
    <Layout>
      <p>This is the about page</p>
    </Layout>
  );
}


/* Methode 1

import withLayout from '../components/MyLayout';

const Page = () => <p>This is the about page</p>;

export default withLayout(Page);
*/


/* Methode 2
import Layout from '../components/MyLayout';

const aboutPageContent = <p>This is the about page</p>;

export default function About() {
    return <Layout content={aboutPageContent} />;
}
*/