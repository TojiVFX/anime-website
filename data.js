const animeData = [
    {
        id: "your-name",
        name: "Your Name",
        releaseYear: 2016,
        duration: "1h 46m",
        episodes: 1,
        genres: ["Romance", "Drama", "Supernatural"],
        language: "Japanese",
        description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        thumbnail: "https://i.ibb.co/23DKwYvB/IMG-20260130-120524-448.jpg",
        category: "romance",
        downloadLinks: [
            { episode: 1, link: "https://example.com/download/your-name-ep1" }
        ]
    },
    {
        id: "naruto",
        name: "Naruto",
        releaseYear: 2002,
        duration: "24m",
        episodes: 220,
        genres: ["Action", "Adventure", "Fantasy"],
        language: "Japanese",
        description: "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
        thumbnail: "https://i.ibb.co/23DKwYvB/IMG-20260130-120524-448.jpg",
        category: "action",
        downloadLinks: [
            { episode: 1, link: "https://example.com/download/naruto-ep1" },
            { episode: 2, link: "https://example.com/download/naruto-ep2" }
        ]
    },
    {
        id: "one-piece",
        name: "One Piece",
        releaseYear: 1999,
        duration: "24m",
        episodes: 1000,
        genres: ["Action", "Adventure", "Fantasy"],
        language: "Japanese",
        description: "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named \"One Piece\".",
        thumbnail: "https://i.ibb.co/23DKwYvB/IMG-20260130-120524-448.jpg",
        category: "adventure",
        downloadLinks: [
            { episode: 1, link: "https://example.com/download/one-piece-ep1" }
        ]
    },
    {
        id: "clannad",
        name: "Clannad",
        releaseYear: 2007,
        duration: "24m",
        episodes: 23,
        genres: ["Romance", "Drama", "Slice of Life"],
        language: "Japanese",
        description: "A high school student who cares little about school or others meets a girl who has been held back a year due to illness, and decides to help her revive the school's drama club.",
        thumbnail: "https://i.ibb.co/23DKwYvB/IMG-20260130-120524-448.jpg",
        category: "romance",
        downloadLinks: [
            { episode: 1, link: "https://example.com/download/clannad-ep1" }
        ]
    },
    {
        id: "demon-slayer",
        name: "Demon Slayer",
        releaseYear: 2019,
        duration: "24m",
        episodes: 26,
        genres: ["Action", "Adventure", "Fantasy"],
        language: "Japanese",
        description: "A family is attacked by demons and only two members survive: Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
        thumbnail: "https://i.ibb.co/CsK4vgKY/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle-2025-Movie-Hindi-Dubbed-Download-HD-990x556.jpg",
        category: "action",
        downloadLinks: [
            { episode: 1, link: "https://example.com/download/demon-slayer-ep1" }
        ]
    },
    {
        id: "attack-on-titan",
        name: "Attack on Titan",
        releaseYear: 2013,
        duration: "24m",
        episodes: 75,
        genres: ["Action", "Dark Fantasy", "Post-apocalyptic"],
        language: "Japanese",
        description: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
        thumbnail: "https://i.ibb.co/23DKwYvB/IMG-20260130-120524-448.jpg",
        category: "action",
        downloadLinks: [
            { episode: 1, link: "https://example.com/download/aot-ep1" }
        ]
    },
    {
        id: "death-note",
        name: "Death Note",
        releaseYear: 2006,
        duration: "24m",
        episodes: 37,
        genres: ["Psychological", "Supernatural", "Thriller"],
        language: "Japanese",
        description: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
        thumbnail: "https://i.ibb.co/23DKwYvB/IMG-20260130-120524-448.jpg",
        category: "action",
        downloadLinks: [
            { episode: 1, link: "https://example.com/download/death-note-ep1" }
        ]
    },
    {
        id: "my-hero-academia",
        name: "My Hero Academia",
        releaseYear: 2016,
        duration: "24m",
        episodes: 113,
        genres: ["Action", "Adventure", "Superhero"],
        language: "Japanese",
        description: "In a world where most people have superpowers, a boy born without them still dreams of becoming a superhero.",
        thumbnail: "https://i.ibb.co/23DKwYvB/IMG-20260130-120524-448.jpg",
        category: "action",
        downloadLinks: [
            { episode: 1, link: "https://example.com/download/mha-ep1" }
        ]
    },
    {
        id: "spirited-away",
        name: "Spirited Away",
        releaseYear: 2001,
        duration: "2h 5m",
        episodes: 1,
        genres: ["Adventure", "Family", "Fantasy"],
        language: "Japanese",
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        thumbnail: "https://i.ibb.co/23DKwYvB/IMG-20260130-120524-448.jpg",
        category: "adventure",
        downloadLinks: [
            { episode: 1, link: "https://example.com/download/spirited-away" }
        ]
    },
    {
        id: "jujutsu-kaisen",
        name: "Jujutsu Kaisen",
        releaseYear: 2020,
        duration: "24m",
        episodes: 24,
        genres: ["Action", "Supernatural", "Dark Fantasy"],
        language: "Japanese",
        description: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
        thumbnail: "https://i.ibb.co/23DKwYvB/IMG-20260130-120524-448.jpg",
        category: "action",
        downloadLinks: [
            { episode: 1, link: "https://example.com/download/jjk-ep1" }
        ]
    }
];
