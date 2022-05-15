import React from 'react'
import TeamIcon from './TeamIcon'
import Link from 'next/link'
import styles from '../styles/Matchup.module.css'
import Image from 'next/image'

const Matchup = (props) => {
    return (
        <div className={styles.matchupWrapper}>
            <h1>{props.title}</h1>
            <div className={styles.matchup}>
                <div className={styles.champion}>
                    <TeamIcon teamId={props.champ.id} width={props.iconWidth} height={props.iconHeight}/>
                    <h3>{props.champ.name}</h3>
                    <h2>{props.champ.score}</h2>
                    {props.StreakCounter}
                    {props.championshipBelt}
                </div>
                <div className={styles.versus}>
                    <h1>vs</h1>
                    <h5>{props.date}</h5>
                    <h5>{props.time}</h5>
                    <h5>{props.venue}</h5>
                </div>
                <div className={styles.challenger}>
                    <TeamIcon teamId={props.challenger.id} width={props.iconWidth} height={props.iconHeight}/>
                    <h3>{props.challenger.name}</h3>
                    <h2>{props.challenger.score}</h2>
                </div>
            </div>
            {props.MoreGames}
        </div>
    )
}

export const CurrentMatchup = (props) => {
    let title
    if(props.winner){
        title = `The ${props.champ.id === props.winner ? props.champ.name : props.challenger.name} are the ${props.season}-${props.season+1} NBA Title Belt winners!`
    }
    else title = 'Current Matchup'
    const startTime = new Date(props.startTime+'Z')
    const time = startTime.toLocaleTimeString('default', {hour: '2-digit', minute:'2-digit'})
    const date = startTime.toLocaleDateString('default', { month: 'short', weekday: 'long', day: 'numeric'})
    const StreakCounter = (props) => {
        return(
            <h4>Current Streak: {props.streak}</h4>
        )
    }
    return(
        <Matchup {...props} championshipBelt={championshipBelt} time={time} date={date} title={title} iconHeight='200px' iconWidth='200px' StreakCounter={<StreakCounter streak={props.streak}></StreakCounter>} ></Matchup>
    )
}

export const LastMatchup = ({championName, challengerName, venue, ...props}) => {
    let date = new Date(props.startTime+'Z')
    const month = date.getMonth() + 1
    const day = date.getDate() + 1
    date = month + '/' + day
    const MoreGames = () => {
        return(
            <div className={styles.moreGames}>
                <Link href='/history'>More Games</Link>
            </div>
        )
    }
    return(
        <Matchup {...props} championshipBelt={championshipBelt} date={date} title='Last Matchup' iconHeight='150px' iconWidth='150px' MoreGames={<MoreGames/>} ></Matchup>
    )
}

export const HistoricMatchup = ({championName, challengerName, venue, ...props}) => {
    let date = new Date(props.startTime+'Z')
    const month = date.getMonth() + 1
    const day = date.getDate() + 1
    date = month + '/' + day
    return(
        <Matchup {...props} date={date} iconHeight='100px' iconWidth='100px'></Matchup>
    )
}

const championshipBelt = (<Image src='/nba-title-belt.svg' width='120px' height='60'></Image>)