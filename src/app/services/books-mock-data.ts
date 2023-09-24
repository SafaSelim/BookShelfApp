import { BookCategory } from "../model/book-category.model";
import { Book } from "../model/book.model";

export const books: Book[] = [
    {
        id: 1,
        title: "End Of Eternity",
        author: "Isaac Asimov",
        category: {id: 14, name: "Science fiction"},
        coverImageUrl: "",
        description: "Due to circumstances within our control . . . tomorrow will be canceled. The Eternals, the ruling class of the Future, had the power of life and death not only over every human being but over the very centuries into which they were born. Past, Present, and Future could be created or destroyed at will. You had to be special to become an Eternal. Andrew Harlan was special. Until he committed the one unforgivable sin--falling in love. Eternals weren't supposed to have feelings. But Andrew could not deny the sensations that were struggling within him. He knew he could not keep this secret forever. And so he began to plan his escape, a plan that changed his own past . . . and threatened Eternity itself.",
    },
    {
        id: 2,
        title: "Empathy",
        author: "Adam Fawer",
        category: {id: 14, name: "Science fiction"},
        coverImageUrl: "",
        description: `People narrated in the book lead separate lives at first and thus, events take place free from each other. Then, the author connects the lives of the characters in such a way that you get shocked by how successful he is in not to make you be aware of the process. To tell the truth, you sometimes go back and look for the first incidence the interactions have taken place between them.

        There are some children and adults with extraordinary skills. Each of them has an incredible capacity to know in connection with their particular senses what is going on around and in people’s mind. In the course of events, among the things Empathy offers are philosophy, science, physic, psychology and even chemistry. Such characteristics of the book draw particular attention of those who are fascinated by pure science-fiction.
        
        The parts of the book are arranged in such a way that one doesn’t get bored easily. Although there are many complex conversations, this makes you read the book with a greater interest as you start to think about the things you have never thought of before. The author uses language in a fluent way giving the reader no chance to consider something else other than the book.
        
        If you are fed up with everyday events surrounding you and interested in supernatural powers one could only have in imaginary world maybe, you shouldn’t miss the chance to read this unbelievable piece of work. However, there is one more suggestion: It is better to read ‘Improbable’ by the same author beforehand just to understand ‘Empathy’ better and in turn enjoy yourself to a greater extent.`
    },
    {
        id: 3,
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        category: {id: 20, name: "Magic realism"},
        coverImageUrl: "",
        description: "Gabriel Garcia Marquez’s great master-piece is the story of seven generations of the Buendia family and of Macondo, the town they have built. Though little more than a settlement surrounded by mountains, Macondo has its wars and disasters, even its wonders and miracles. A microcosm of Colombian life, its secrets lie hidden, encoded in a book, and only Aureliano Buendia can fathom its mysteries and reveal its shrouded destiny. Blending political reality with magic realism, fantasy with comic invention, One Hundrd Years of solitude is one of the most daringly original works of the twentieth century.",
    },
];

export const bookCategories: BookCategory[] = [
    {id: 1, name: "Adventure stories"},
    {id: 2, name: "Classics"},
    {id: 3, name: "Crime"},
    {id: 4, name: "Fairy tales, fables, and folk tales"},
    {id: 5, name: "Fantasy"},
    {id: 6, name: "Historical fiction"},
    {id: 7, name: "Horror"},
    {id: 8, name: "Humour and satire"},
    {id: 9, name: "Literary fiction"},
    {id: 10, name: "Mystery"},
    {id: 11, name: "Poetry"},
    {id: 12, name: "Plays"},
    {id: 13, name: "Romance"},
    {id: 14, name: "Science fiction"},
    {id: 15, name: "Short stories"},
    {id: 16, name: "Thrillers"},
    {id: 17, name: "War"},
    {id: 18, name: "Women’s fiction"},
    {id: 19, name: "Young adult"},
    {id: 20, name: "Magic realism"},
    {id: 21, name: "Autobiography and memoir"},
    {id: 22, name: "Biography"},
    {id: 23, name: "Essays"},
    {id: 24, name: "Non-fiction novel"},
    {id: 25, name: "Self-help"},
]
