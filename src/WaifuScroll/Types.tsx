type nsfwTags = 
    | "ass"
    | "hentai"
    | "milf"
    | "oral"
    | "paizuri"
    | "ecchi"
    | "ero";

type sfwTags = 
    | "uniform"
    | "maid"
    | "waifu"
    | "marin-kitagawa"
    | "mori-calliope"
    | "raiden-shogun"
    | "oppai"
    | "selfies";

type allTags = nsfwTags | sfwTags

export type {nsfwTags, sfwTags, allTags}
