import Layout from '../components/Layout'
import { CurrentMatchup, LastMatchup } from '../components/Matchup'

const index = (props) => {
    const currentSeason = props.data[0].season
    
    return (
        <Layout>
            <CurrentMatchup {...props.data[0]}/>
            <LastMatchup {...props.data[1]}/>
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
