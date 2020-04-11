const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./Database/db.json')
const db = low(adapter)
db.defaults({
    user: {
        // coin: [1, 2, 3, 4, 5, 7],
        // Ny: [{
        //         name: "tipe",
        //         age: 20
        //     },
        //     { name: "abc", age: 20 }
        // ],
        // coins: [{ number: 1, left: 30, top: 270 }, { product: "Ice-Cream", number: 2, left: 260, top: 270 }, { number: 5, left: 30, top: 450 },
        //     { number: 6, left: 130, top: 270 }, { number: 8, left: 130, top: 350 }, { number: 9, left: 130, top: 450 },
        //     { number: 3, left: 230, top: 450 }, { number: 4, left: 30, top: 350 }
        // ],
        product: "lollipop",
        GameData: [{
                coins: [{ number: 1, left: 30, top: 270 }, { product: "Ice-Cream", number: 2, left: 260, top: 270 }, { number: 5, left: 30, top: 450 },
                    { number: 6, left: 130, top: 270 }, { number: 8, left: 130, top: 350 }, { number: 9, left: 130, top: 450 },
                    { number: 3, left: 230, top: 450 }, { number: 4, left: 30, top: 350 }
                ],
                product: "lollipop"
            },
            {
                coins: [{ number: 1, left: 30, top: 270 }, { product: "Ice-Cream", number: 2, left: 260, top: 270 }, { number: 5, left: 30, top: 450 },
                    { number: 6, left: 130, top: 270 }, { number: 8, left: 130, top: 350 }, { number: 9, left: 130, top: 450 },
                    { number: 3, left: 230, top: 450 }, { number: 4, left: 30, top: 350 }
                ],
                product: "Ice-Cream"
            }
        ]
    },

    Game: [{
        id: 1,
        GameData: [{
                coins: [{ number: 1, left: 30, top: 270 }, { product: "Ice-Cream", number: 2, left: 260, top: 270 }, { number: 5, left: 30, top: 450 },
                    { number: 6, left: 130, top: 270 }, { number: 8, left: 130, top: 350 }, { number: 9, left: 130, top: 450 },
                    { number: 3, left: 230, top: 450 }, { number: 4, left: 30, top: 350 }
                ],
                product: "lollipop"
            },
            {
                coins: [{ number: 1, left: 30, top: 270 }, { product: "Ice-Cream", number: 2, left: 260, top: 270 }, { number: 5, left: 30, top: 450 },
                    { number: 6, left: 130, top: 270 }, { number: 8, left: 130, top: 350 }, { number: 9, left: 130, top: 450 },
                    { number: 3, left: 230, top: 450 }, { number: 4, left: 30, top: 350 }
                ],
                product: "Ice-Cream"
            }
        ]
    }, {
        id: 2,
        GameData: [
            [{ id: 1, number: 1, position: { left: 50, top: 100 } },
                { id: 2, number: 5, position: { left: 100, top: 300 } },
                { id: 3, number: 3, position: { left: 400, top: 350 } },
                { id: 4, number: 2, position: { left: 500, top: 170 } },
                { id: 5, number: 5, position: { left: 700, top: 350 } },
                { id: 6, number: 5, position: { left: 600, top: 50 } },
                { id: 7, number: 5, position: { left: 300, top: 180 } },
                { id: 8, number: 7, position: { left: 300, top: 0 } },
                { id: 9, number: 8, position: { left: -100, top: 200 } },
                { id: 10, number: 9, position: { left: 800, top: 150 } }
            ],
            [{ id: 1, number: 1, position: { left: 800, top: 150 } },
                { id: 2, number: 5, position: { left: 100, top: 300 } },
                { id: 3, number: 8, position: { left: 0, top: 70 } },
                { id: 4, number: 5, position: { left: 700, top: 350 } },
                { id: 5, number: 3, position: { left: 500, top: 300 } },
                { id: 6, number: 9, position: { left: 300, top: 250 } },
                { id: 7, number: 2, position: { left: 400, top: 50 } },
                { id: 8, number: 7, position: { left: -100, top: 200 } },
            ],
            [{ id: 1, number: 9, position: { left: 100, top: 0 } },
                { id: 2, number: 7, position: { left: 100, top: 300 } },
                { id: 3, number: 3, position: { left: 500, top: 170 } },
                { id: 4, number: 5, position: { left: 700, top: 350 } },
                { id: 5, number: 6, position: { left: -150, top: 250 } },
                { id: 6, number: 4, position: { left: 300, top: 180 } },
                { id: 7, number: 5, position: { left: 400, top: 0 } },
                { id: 8, number: 8, position: { left: 0, top: 100 } },
                { id: 9, number: 2, position: { left: 500, top: 350 } },
                { id: 10, number: 1, position: { left: 700, top: 150 } }
            ],
            [{ id: 1, number: 7, position: { left: 100, top: 0 } },
                { id: 2, number: 3, position: { left: 100, top: 300 } },
                { id: 3, number: 1, position: { left: 500, top: 170 } },
                { id: 4, number: 9, position: { left: 700, top: 350 } },
                { id: 5, number: 5, position: { left: 600, top: 0 } },
                { id: 6, number: 5, position: { left: 300, top: 180 } },
            ],
            [{ id: 1, number: 1, position: { left: 0, top: 0 } },
                { id: 2, number: 9, position: { left: 100, top: 300 } },
                { id: 3, number: 3, position: { left: 500, top: 170 } },
                { id: 4, number: 6, position: { left: 700, top: 350 } },
                { id: 5, number: 7, position: { left: 600, top: 0 } },
                { id: 6, number: 5, position: { left: 350, top: 280 } },
                { id: 7, number: 5, position: { left: 400, top: 0 } },
                { id: 8, number: 8, position: { left: 200, top: 100 } },
                { id: 9, number: 4, position: { left: 700, top: 150 } },
                { id: 10, number: 2, position: { left: 700, top: 150 } }
            ]
        ]
    }]


}).write();

module.exports = db;