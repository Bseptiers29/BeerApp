import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const Index = props => (
    <Layout>
      <h1>List of Beers</h1>
      <ul>
        {props.data.map(beer => (
          <li key={beer.id}>
            <Link href="/p/[id]" as={`/p/${beer.id}`}>
              <a>{beer.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
  
  Index.getInitialProps = async function() {
    const res = await fetch('https://api.punkapi.com/v2/beers');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      data
    };
  };
  
  export default Index;





/* Clean URL and Dynamic pages
const PostLink = props => (
    <li>
        <Link href="/p/[id]" as ={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default function Blog() {
    return(
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="Hello NextJS"/>
                <PostLink id="Learn NextJS is awesome" />
                <PostLink id="Deploy apps with Zeit" />
            </ul>
        </Layout>
    );
}
*/

/* Method 1
import withLayout from '../components/MyLayout';

const Page = () => <p>Hello NextJS</p>;

export default withLayout(Page);
*/

/* Method 2
import Layout from '../components/MyLayout';

const indexPageContent = <p>Hello NextJS</p>

export default function Index() {
    return <Layout content={indexPageContent} />;
}
*/
