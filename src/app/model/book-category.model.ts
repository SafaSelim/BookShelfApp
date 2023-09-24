export type BookCategoryName = "Adventure stories" |
"Classics" |
"Crime" |
"Fairy tales, fables, and folk tales" |
"Fantasy" | 
"Historical fiction" | 
"Horror" |
"Humour and satire" |
"Literary fiction" |
"Mystery" |
"Poetry" |
"Plays" |
"Romance" |
"Science fiction" |
"Short stories" |
"Thrillers" |
"War" |
"Women’s fiction" |
"Young adult" |
"Magic realism" |
"Autobiography and memoir" |
"Biography" |
"Essays" |
"Non-fiction novel" |
"Self-help"

export class BookCategory {
    id: number;
    name: BookCategoryName;

    constructor(id: number, name: BookCategoryName) {
        this.id = id;
        this.name = name;
    }
}