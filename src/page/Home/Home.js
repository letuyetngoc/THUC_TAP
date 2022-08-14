import React from 'react'
import HomeAgents from './HomeAgents'
import HomeBottomLast from './HomeBottomLast'
import HomeFeature from './HomeFeature'
import HomeHeader from './HomeHeader'
import HomeInfo from './HomeInfo'
import HomeService from './HomeService'
import HomeTestimonial from './HomeTestimonial'
import HomeUtility from './HomeUtility'

export default function Home() {
    return (
        <div className='home'>
            <HomeHeader />
            <HomeInfo />
            <HomeUtility />
            <HomeService />
            <HomeAgents />
            <HomeFeature />
            <HomeBottomLast />
            <HomeTestimonial />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
