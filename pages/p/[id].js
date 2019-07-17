import Layout from '../../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    {props.data.map(beer => (
        <div key={beer.id}>
            <h1>{beer.name}</h1>
            <p>{beer.description}</p>
            <em>First Brewed : {beer.first_brewed}</em>
        </div>
    ))}
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  const data = await res.json();

  console.log(`Fetched data: ${data}`);

  return {data};
};

export default Post;