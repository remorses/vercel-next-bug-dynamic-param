import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSidePropsContext } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ slug }) {
    return (
        <>
            <pre className=''>{slug} should be an array of path parts</pre>
        </>
    )
}

export function getServerSideProps(context: GetServerSidePropsContext) {
    let slug = JSON.stringify(context.params?.slug || 'no slug')
    return { props: { slug } }
}
