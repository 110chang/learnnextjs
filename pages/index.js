import Link from 'next/link'
import Layout from '../components/Layout'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
    <ul>
      <PostLink title="Hello next.js" />
      <PostLink title="Hello next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)

export default Index
