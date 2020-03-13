import { NextPage } from 'next'
import Link from 'next/link'
import absoluteUrl from 'next-absolute-url'

import Layout from '../../components/Layout'
import List from '../../components/List'
import { User } from '../../interfaces'
import { sampleFetchWrapper } from '../../utils/sample-api'

type Props = {
  items: User[]
  pathname: string
}

const WithInitialProps: NextPage<Props> = ({ items, pathname }) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getInitialProps()</code>.
    </p>
    <p>You are currently on: {pathname}</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

WithInitialProps.getInitialProps = async ({ req, pathname }) => {
  const { protocol, host } = absoluteUrl(req)
  const apiURL = `${protocol}//${host}/api/users`
  const items: User[] = await sampleFetchWrapper(
    apiURL
  )

  return { items, pathname }
}

export default WithInitialProps
