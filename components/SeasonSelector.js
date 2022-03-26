import styles from '../styles/SeasonSelector.module.css'
import { useState } from 'react';

const SeasonSelector = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let splitByDecade = props.seasons.reduce((memo, item) => {
        let decade = Math.floor(item/10)
        if(!memo[decade]){
            memo[decade] = []
        }
        memo[decade].push(item)
        return memo
    }, {})

    let seasonList = []
    for (const decade in splitByDecade) {
        console.log(splitByDecade[decade]);
        seasonList.push(
            <ul className={styles.decade}>
                <li>{decade + '0s'}</li>
                <ul className={styles.seasons}>
                    {splitByDecade[decade].map(year =>
                        <li key={year} onClick={() => {props.setSeason(year); toggle()}}>{year.slice(-2)}</li>  
                    )}
                </ul>
            </ul>
        )
    }

    return (
        <div className={styles.container}>
            <span className={styles.selectedSeason} onClick={toggle}>{props.selectedSeason}</span>
            {isOpen && (
                <div className={styles.dropdownContainer}>
                    {seasonList}
                </div>
            )}
        </div>
    )
}

const SeasonsDropdown = (props) => {

}

export default SeasonSelector;
