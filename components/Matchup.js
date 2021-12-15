import React from 'react'
import TeamIcon from './TeamIcon'
import Link from 'next/link'
import styles from '../styles/Matchup.module.css'

const Matchup = (props) => {
    return (
        <div className={styles.matchupWrapper}>
            <h1>{props.title}</h1>
            <div className={styles.matchup}>
                <div className={styles.champion}>
                    <div>
                        <TeamIcon teamId={props.championId} width={props.iconWidth} height={props.iconHeight}/>
                    </div>
                    <h3>{props.championName}</h3>
                    <h2>{props.championScore}</h2>
                    {props.StreakCounter}
                </div>
                <div className={styles.versus}>
                    <h1>vs</h1>
                    <h5>{props.date}</h5>
                    <h5>{props.time}</h5>
                    <h5>{props.venue}</h5>
                </div>
                <div className={styles.challenger}>
                    <TeamIcon teamId={props.challengerId} width={props.iconWidth} height={props.iconHeight}/>
                    <h3>{props.challengerName}</h3>
                    <h2>{props.challengerScore}</h2>
                </div>
            </div>
            {props.MoreGames}
        </div>
    )
}

export const CurrentMatchup = (props) => {
    const time = props.startTime.toLocaleTimeString('default', {hour: '2-digit', minute:'2-digit'})
    console.log(time);
    const date = props.startTime.toLocaleDateString('default', { month: 'short', weekday: 'long', day: 'numeric'})
    const StreakCounter = (props) => {
        return(
            <h4>Current Streak: {props.streak}</h4>
        )
    }
    return(
        <Matchup {...props} time={time} date={date} title='Current Matchup' iconHeight='200px' iconWidth='200px' StreakCounter={<StreakCounter streak={props.streak}></StreakCounter>} ></Matchup>
    )
}

export const LastMatchup = ({championName, challengerName, venue, ...props}) => {
    let date = props.startTime
    const month = date.getMonth() + 1
    const day = date.getDate() + 1
    date = month + '/' + day
    const MoreGames = () => {
        return(
            <div className={styles.moreGames}>
                <Link href='/matchHistory'>More Games</Link>
            </div>
        )
    }
    return(
        <Matchup {...props} date={date} title='Last Matchup' iconHeight='150px' iconWidth='150px' MoreGames={<MoreGames/>} ></Matchup>
    )
}