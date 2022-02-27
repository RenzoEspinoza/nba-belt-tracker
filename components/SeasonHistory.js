import styles from '../styles/SeasonHistory.module.css'
import { HistoricMatchup } from './Matchup';
import TeamIcon from './TeamIcon';

const SeasonHistory = (props) => {
    const matchupList = props.season.map((item) => 
        <MatchupPreview key={item.id} matchup={item}/>
    )
    matchupList
    return (
        <div className={styles.historyContainer}>
            {matchupList}
        </div>
    )
}

const MatchupPreview = (props) => (
    <div className={styles.matchupContainer}>
        <div className={styles.iconContainer}>
            <TeamIcon teamId={props.matchup.champ.id} height={150} width={150}/>
        </div>
        <div className={styles.matchupDetails}>
            <HistoricMatchup {...props.matchup}/>
        </div>
    </div>
)

export default SeasonHistory;