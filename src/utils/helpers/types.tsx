type Response = {
    config: Object,
    data: { results?: object[], total?: number, total_pages?: number},
    headers: Object,
    request: XMLHttpRequest,
    status: number,
    statusText: string
}

export type Dispatch = {
    type: string,
    payload: Array<Photo | User | undefined>
}

type Links = {
    download: string,
    download_location: string,
    html: string,
    self: string
}

type Urls = {
    full: string,
    raw: string,
    regular: string,
    small: string,
    thumb: string
}

type ImageUrls = {
    large: string,
    medium: string,
    small: string;
}

type Tag = {
    type: string,
    title: string
}
type Social = {
    instagram_username: string | null,
    portfolio_url: string | null,
    twitter_username: string | null
}

interface BasicPhoto {
    blur_hash?: string,
    created_at?:string,
    id?: string,
    urls?: Urls
}
export interface Photo extends BasicPhoto {
    alt_description?: string,
    color?: string,
    description?: string,
    height?: number,
    likes?: number,
    location?: { name: string },
    links?: Links,
    tags?: Array<Tag>,
    user?: User
}

export interface User {
    id?: string,
    bio?: string,
    first_name?: string,
    last_name?: string,
    links?: Links,
    location?: string,
    name?: string,
    portfolio_url?: string,
    profile_image?: ImageUrls,
    total_likes?: number,
    total_photos?: number,
    username?: string,
    social?: Social
}

export interface ProfileUser extends User {
    followers_count?: number | null
    following_count?: number | null,
    photos?: Array<BasicPhoto>
}


