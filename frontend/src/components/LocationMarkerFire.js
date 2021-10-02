import locationIcon from '@iconify/icons-mdi/fire-alert'
import { Icon } from '@iconify/react'
import React from 'react'

const LocationMarkerFire = ({lat,lng,onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-Icon-fire"/>
        </div>
    )
}

export default LocationMarkerFire
