
export type Step = {
    title: string,
    description: string
}

export type Recipe = {
    name: string,
    stars: number,
    description: string,
    steps: Step[]
}

export type RecipeLibrary = {
    label: string,
    iconComponent: string,
    items: Recipe[]
}


