export interface MoviesData {
    page: number
    next: string
    entries: number
    results: Result[]
  }
  
  export interface Result {
    _id: string
    id: string
    primaryImage?: PrimaryImage
    titleType: TitleType
    titleText: TitleText
    originalTitleText: OriginalTitleText
    releaseYear: ReleaseYear
    releaseDate: ReleaseDate
  }
  
  export interface PrimaryImage {
    id: string
    width: number
    height: number
    url: string
    caption: Caption
    __typename: string
  }
  
  export interface Caption {
    plainText: string
    __typename: string
  }
  
  export interface TitleType {
    displayableProperty: DisplayableProperty
    text: string
    id: string
    isSeries: boolean
    isEpisode: boolean
    categories: Category[]
    canHaveEpisodes: boolean
    __typename: string
  }
  
  export interface DisplayableProperty {
    value: Value
    __typename: string
  }
  
  export interface Value {
    plainText: string
    __typename: string
  }
  
  export interface Category {
    value: string
    __typename: string
  }
  
  export interface TitleText {
    text: string
    __typename: string
  }
  
  export interface OriginalTitleText {
    text: string
    __typename: string
  }
  
  export interface ReleaseYear {
    year: number
    endYear?: number
    __typename: string
  }
  
  export interface ReleaseDate {
    day: number
    month: number
    year: number
    __typename: string
  }
  