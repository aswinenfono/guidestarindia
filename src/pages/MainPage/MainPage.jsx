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
import HeaderSec from '../../Components/HeaderSec/HeaderSec'
import FooterComp from '../../Components/FooterComp/FooterComp'
export const MainPage = () => {
    return (
        <>
            <HeaderSec />
            <IntroSec />
            <DiscoverNpos />
            <SealsSec />
            <Repositories />
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
