import Layout from '../components/Layout'
import { CurrentMatchup, LastMatchup } from '../components/Matchup'

const index = (props) => {
    return (
        <Layout>
            <div style={{margin : '3rem auto'}}>
                <CurrentMatchup {...props.data[0]}/>
            </div>
            <div style={{margin : '3rem auto'}}>
                <LastMatchup {...props.data[1]}/>
            </div>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const apiUrl = `${process.env.API_URL}/matchup/latest`
    const res = await fetch(apiUrl)
    const data = await res.json()
    if (!data) {
        return {
            notFound: true,
        }
    }
    console.log('data:', data);
    return {
        props : {data}
    }
}

export default index
