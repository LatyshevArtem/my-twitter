export interface IUser {
    name: string
    id: string
    image: string
    numberOfFollowing: number
    numberOfFollowers: number
    biography: string
}

export interface IPost {
    user: IUser
    text: string
    image: string
    publicationDate: string
    numberOfReply: number
    numberOfRetweet: number
    numberOfLike: number
}