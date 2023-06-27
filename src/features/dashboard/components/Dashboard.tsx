import React, { useState } from 'react'
import { Dashboard } from '../types'

export default function Dashboard() {
    const [test, setTest] = useState<Dashboard>()
    return (
        <div>
            This is Dashboard
        </div>
    )
}

