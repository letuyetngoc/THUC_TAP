import React from 'react'
import HomeAgents from './HomeAgents'
import HomeHeader from './HomeHeader'
import HomeInfo from './HomeInfo'
import HomeService from './HomeService'
import HomeUtility from './HomeUtility'

export default function Home() {
    return (
        <div className='home'>
            <HomeHeader />
            <HomeInfo />
            <HomeUtility />
            <HomeService />
            <HomeAgents />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
