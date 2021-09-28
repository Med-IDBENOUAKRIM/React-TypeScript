export type ParentType = {
    children: React.ReactNode
}

export type PersonProps = {
    info: {
        first: string
        last: string
        age: number
    }
}

export type PersonListProps = {
    infoList: {
        first: string
        last: string
        age: number
    }[]
}

export type TestProps = {
    name: string
    count: number
}