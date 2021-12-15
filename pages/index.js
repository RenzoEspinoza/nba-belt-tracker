import Layout from '../components/Layout'
import { CurrentMatchup, LastMatchup } from '../components/Matchup'

const index = () => {
    const dummyData = {championId: 17,
        championName: 'Milwaukee Bucks',
        challengerId: 19,
        challengerName: 'New Orleans Pelicans',
        startTime: new Date('2021-12-23T02:00:00.000Z'),
        streak: 3,
        season: 2021,
        championScore: 115,
        challengerScore: 104,
        venue: 'Smoothie King Center',
    }

    const dummyData2 = {championId: 23,
        championName: 'Philadelphia 76ers',
        challengerId: 20,
        challengerName: 'New York Knicks',
        startTime: new Date('2021-12-13T02:00:00.000Z'),
        streak: 3,
        season: 2021,
        championScore: null,
        challengerScore: null,
        venue: 'Madison Square Garden',
    }
    return (
        <Layout>
            <CurrentMatchup {...dummyData2}/>
            <LastMatchup {...dummyData}/>
        </Layout>
    )
}

export default index
