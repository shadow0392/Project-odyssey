/*
------------------------------------
PROJECT ODYSSEY

Balance Data

All gameplay numbers live here.

Changing this file should rebalance the
entire game without touching the engine.

Version 0.3.1
------------------------------------
*/

const BALANCE = {

    timeline: {

        firstGoal: 1e6,

        scaling: 1.20

    },

    engineering: {

        upgrades: [

            {
                id: "battery",
                name: "Auxiliary Batteries",
                baseCost: 100,
                growth: 1.15,
                output: 1
            },

            {
                id: "fusion",
                name: "Fusion Generator",
                baseCost: 500,
                growth: 1.16,
                output: 5
            },

            {
                id: "manifold",
                name: "Plasma Manifold",
                baseCost: 2500,
                growth: 1.17,
                output: 20
            },

            {
                id: "eps",
                name: "EPS Conduits",
                baseCost: 10000,
                growth: 1.18,
                output: 75
            },

            {
                id: "injector",
                name: "Matter / Antimatter Injectors",
                baseCost: 50000,
                growth: 1.19,
                output: 300
            },

            {
                id: "calibration",
                name: "Warp Core Calibration",
                baseCost: 250000,
                growth: 1.20,
                output: 1200
            }

        ]

    }

};
