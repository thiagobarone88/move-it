import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps{ //tipificando
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) { //chamada somente pelo Browser

  //console.log(props) aparece no browser -> se passar o console.log para getServerSideProps só aparece no node e não no browser

  return (
    <ChallengesProvider //passando os dados dos cookies
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >  
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>


        <ExperienceBar />
        
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>  
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => { 
  /* função para passar os dados que vão passar do Next.js para o React -> antes de construir a interface, 
  ele vai fazer a chamada API, repassar os dados prontos e o componente mostra os dados em tela. */
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return{
    props: {
      level: Number(level), //convertendo porque os cookies vêm como String
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}