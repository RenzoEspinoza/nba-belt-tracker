import styles from '../styles/SeasonSelector.module.css'

const SeasonSelector = (props) => {
    /*
    const seasonList = props.seasons.map((year) => 
        <li key={year} onClick={() => props.setSeason(year)}>{year}</li> 
    )
    */
    let splitByDecade = props.seasons.reduce((memo, item) => {
        let decade = Math.floor(item/10)
        if(!memo[decade]){
            memo[decade] = []
        }
        memo[decade].push(item)
        return memo
    }, {})
    console.log(splitByDecade);
    let seasonList = []
    for (const decade in splitByDecade) {
        console.log(splitByDecade[decade]);
        seasonList.push(
            <ul className={styles.seasonsDropdown}>
                <li>{decade + '0s'}</li>
                <ul className={styles.decadeRow}>
                    {splitByDecade[decade].map(year =>
                        <li key={year} onClick={() => props.setSeason(year)}>{year}</li>  
                    )}
                </ul>
                
            </ul>
        )
    }
    return (
        <div className={styles.container}>
            <button className={styles.dropdownButton}>{props.selectedSeason}</button>
            <div className={styles.dropdownContainer}>
                {seasonList}
            </div>
            
        </div>
    )
}

export default SeasonSelector;
