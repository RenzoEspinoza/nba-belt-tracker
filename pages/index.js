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
    const res = await fetch(`http://localhost:3001/api/matchup/latest`)
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
