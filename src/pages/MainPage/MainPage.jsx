import React from 'react'
import "./MainPage.css"
import { IntroSec } from '../../Components/PageComponents/IntroSec/IntroSec'
import { SealsSec } from '../../Components/PageComponents/SealsSec/SealsSec'
import UserInfoSec from '../../Components/PageComponents/UserInfoSec/UserInfoSec'
import Repositories from '../../Components/PageComponents/Repositories/Repositories'
import { DiscoverNpos } from '../../Components/PageComponents/DiscoverNpos/DiscoverNpos'
import Philanthropy from '../../Components/PageComponents/PhilanthropySec/Philanthropy'
import CertifiedNpos from '../../Components/PageComponents/CeritfiedNpos/CertifiedNpos'
import NposSectors from '../../Components/PageComponents/NposSectors/NposSectors'
import IssueSec from '../../Components/PageComponents/IssueSec/IssueSec'
import ChangeMakers from '../../Components/PageComponents/ChangeMakers/ChangeMakers'
import CollaboratorsSec from '../../Components/PageComponents/CollaboratorsSec/CollaboratorsSec'
import HeaderSec from '../../Components/MainComponents/HeaderSec/HeaderSec'
import FooterComp from '../../Components/MainComponents/FooterComp/FooterComp'
export const MainPage = () => {
    return (
        <>
            <HeaderSec />
            <IntroSec />
            <SealsSec />
            <Repositories />
            <DiscoverNpos />
            <Philanthropy />
            <CertifiedNpos />
            <NposSectors />
            <IssueSec />
            <ChangeMakers />
            <UserInfoSec />
            <CollaboratorsSec />
            <FooterComp />
        </>
    )
}
