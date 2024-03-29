import { ReactNode } from "react"

export type buttonProps = {
    title: string,
    route?:string,
    isPrimary?: boolean,
    onPress?: () => void,
    handleClick?: () => void,
    disabled?: boolean,
}

export type settingsProps = {
    date?: string,
    title?:string,
    address?: string,
    time?: string
    month?:string
}

export type profileProp = {
    top: ReactNode
    bottom: string
    bottomColor: string
    topColor:string
    borderColor?:string
}

