import styles from '../styles/About.module.css'

const About = () => {
    return(
        <div className={styles.container}>
            <h2>
                What exactly is the NBA Title Belt?
            </h2>
            <p>
                The NBA Title Belt is an unofficial award made to spice up the regular 
                season of the NBA. The belt works similarly to how championship belts work in
                boxing, MMA, or pro wrestling.
            </p>
            <p>    
                To start off the season, the belt is awarded to the 
                winner of the previous season's NBA Finals. If that team is defeated then the belt
                goes to the team that won. The goal is to hold on to the belt until
                the end of the regular season.
            </p>
            <p>    
                This tradition originated from the Reddit forum /r/NBA several years ago
                but has since been forgotten, so I'm hoping to bring it back. If you want to read 
                more about the NBA Title Belt then check out
                this <a href='http://grantland.com/the-triangle/introducing-the-nba-regular-season-championship-belt/'>Grantland article</a> about it:
            </p>
        </div>
    )
}

export default About