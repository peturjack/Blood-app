export type buttonProps = {
    title: string,
    route?:string,
    isPrimary?: boolean,
    onPress?: () => void,
    handleClick?: () => void,
}

export type settingsProps = {
    date?: string,
    title?:string,
    address?: string,
    time?: string
}

