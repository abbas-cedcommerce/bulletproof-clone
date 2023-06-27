import React, { useState } from 'react'
import { Dashboard as DashboardI } from '../types'

export default function Dashboard() {
    const [test, setTest] = useState<DashboardI>()
    return (
        <div>
            This is Dashboard
        </div>
    )
}

