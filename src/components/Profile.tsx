import { profile } from 'console';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
        <img src="https://avatars.githubusercontent.com/u/35409824?s=400&u=3070efa3eadcab81be48816b40aa3825fe7683f5&v=4" alt="Thiago Barone"/>
            <div>
                <strong>Thiago</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}</p>
            </div>
        </div>
    )
}