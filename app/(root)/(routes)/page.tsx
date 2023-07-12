'use client'

import { useEffect } from "react"

import { useStoreModal } from "@/hooks/use-store-modal"

const RootPage = () => {
  const isOpen = useStoreModal((state) => state.isOpen)
  const onOpen = useStoreModal((state) => state.onOpen)
  
  useEffect(() => {
    if (!isOpen) { 
      onOpen() 
    }
  }, [isOpen, onOpen])
  

  return null
}

export default RootPage
