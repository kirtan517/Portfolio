import React, { useContext, useEffect } from 'react'
import { ActiveTabsContext } from './Main'

export default function Projects() {

  const {activeTab , setActiveTab} = useContext(ActiveTabsContext);

  useEffect(()=>{
    setActiveTab("Projects")
  })

  return (
    <div>Projects</div>
  )
}
