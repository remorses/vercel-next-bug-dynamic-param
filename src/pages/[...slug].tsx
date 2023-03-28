import { GetServerSidePropsContext } from 'next'

export default function Home({ slug }) {
    return (
        <>
            <pre className=''>{slug} should be an array of path parts</pre>
        </>
    )
}

export const config = { runtime: 'experimental-edge' }

export function getServerSideProps(context: GetServerSidePropsContext) {
    let slug = JSON.stringify(context.params?.slug || 'no slug')
    return { props: { slug } }
}
