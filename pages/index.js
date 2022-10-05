import Link from 'next/link';
import { getAllPosts } from '../lib/ghost';

/*Fetches a lists of posts once at build time*/
export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts } };
}

//* Generates static doc rendering the posts 
export default function Home({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.uuid}>
          <Link href={`/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
