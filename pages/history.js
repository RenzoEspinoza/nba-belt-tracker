import { useState } from 'react';
import Layout from '../components/Layout';
import SeasonHistory from '../components/SeasonHistory';
import SeasonSelector from '../components/SeasonSelector';

const History = (props) => {
    const seasons = Object.keys(props)
    console.log(seasons);
    const [selectedSeason, setSelectedSeason] = useState(seasons[seasons.length-1])

    return(
        <Layout>
            <div style={{backgroundColor : '#d7e9f5', borderRadius : '0.75rem'}}>
                <div style={{padding : '1rem'}}>
                    <SeasonSelector seasons={seasons} selectedSeason={selectedSeason} setSeason={setSelectedSeason}/>
                </div>
                <div style={{padding : '1rem'}}>
                    <SeasonHistory season={props[selectedSeason]}/>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const res = await (await fetch(`${process.env.API_URL}/matchup/season/current`)).json()
    const currentSeason = await (await fetch(`${process.env.API_URL}/matchup/${res.season}`)).json()
    const pastSeasons = await (await fetch(`${process.env.API_URL}/matchup/before/${res.season}`)).json()

    return {
        props : {...currentSeason, ...pastSeasons}
    }
}


export default History