const warehouse = {
    uniSosna:{id: "[SOSNA]", value: 0, units: "m3"},
sosna_47x30 : {id: "SOSNA_47x30", value: 0, units: "m3"},
sosna_25x25 : {id: "SOSNA_25x25", value: 0, units: "m3"},
sosna_50x23 : {id: "SOSNA_50x23", value: 0, units: "m3"},
sosna_50x47 : {id: "SOSNA_50x47", value: 0, units: "m3"},
sosna_47x35 : {id: "SOSNA_47x35", value: 0, units: "m3"},
sosna_35x20 : {id: "SOSNA_35x20", value: 0, units: "m3"},
sosna_23x20 : {id: "SOSNA_23x20", value: 0, units: "m3"},
sosna_25x23 : {id: "SOSNA_25x23", value: 0, units: "m3"},
plyta_WIOROWA : {id: "PLYTA_WIOROWA", value: 0, units: "m2"},
pl_WIOROWA_BIALA : {id: "PL_WIOROWA_BIALA", value: 0, units: "m2"},
pl_PILSN_BIALA : {id: "PL_PILSN_BIALA", value: 0, units: "m2"},
hdf_3 : {id: "HDF_3", value: 0, units: "m2"},
pl_MDF_BIALA : {id: "PL_MDF_BIALA", value: 0, units: "m2"},
pl_PILSN_BIALA_3 : {id: "PL_PILSN_BIALA_3", value: 0, units: "m2"},
pl_PILSN_3 : {id: "PL_PILSN_3", value: 0, units: "m2"},
pl_MDF_6 : {id: "PL_MDF_6", value: 0, units: "m2"},
sklejka_6 : {id: "SKLEJKA_6", value: 0, units: "m2"},
sklejka_18 : {id: "SKLEJKA_18", value: 0, units: "m2"},
}

const state = {
    nihad: {
        id: "nihad",
        partOfModel: [
            {
                id: "LC",
                partItem: [

                    {
                        nameOfOperator: "PILA",
                        material: [
                            {
                                id: warehouse.sosna_47x30.id,
                                size: [
                                    [125, 47, 30, 1, "szl"],

                                ]
                            },
                            {
                                id: warehouse.sosna_47x30.id,
                                size: [
                                    [125, 47, 30, 1, "szl"],

                                ]
                            }
                        ],
                    },
                    {
                        nameOfOperator: "MATRIX",
                        material: [
                            {
                                id: warehouse.sosna_50x23.id,
                                size: [
                                    [1230, 50, 23, 1, "tasm"],
                                    [930, 50, 23, 1],
                                    [760, 50, 23, 1],
                                    [170, 50, 23, 1, "tasm"],
                                    [127, 50, 23, 1],
                                    [85, 50, 23, 1],]
                            },
                        ],
                    },
                    {
                        nameOfOperator: "SCM",
                        material: [
                            {
                                id: warehouse.plyta_WIOROWA.id,
                                size: [
                                    // [2070, 930, 15, 1, "9sztP"],
                                    // [900, 275, 15, 1],
                                    // [775, 275, 15, 1, "cnc"],
                                    // [930, 225, 15, 1],
                                    // [687, 150, 15, 1, "12sztP"],
                                    [760, 50, 15, 1],],
                            },
                            {
                                id: warehouse.pl_PILSN_BIALA.id,
                                size: [
                                    [1258, 83, 3, 1],]
                            },
                        ],
                    },
                ]
            },
            {
                id: "DWOJKA",
                partName: "DWOJKA",
                partItem: [
                    {
                        nameOfOperator: "PILA",
                        material: [
                            {
                                id:warehouse.sosna_50x23.id,
                                size: [
                                    [125, 47, 30, 2],
                                    [930, 25, 25, 2],
                                    [670, 25, 25, 2],
                                    [255, 25, 25, 1],
                                    [135, 25, 25, 6],
                                    [127, 25, 25, 1],
                                ]
                            }
                        ],
                    },
                    {
                        nameOfOperator: "MATRIX",
                        material: [
                            {
                                id:warehouse.sosna_50x23.id,
                                size: [
                                    // [1230, 50, 23, 4],
                                    // [930, 50, 23, 3],
                                    //
                                    // [127, 50, 23, 1],
                                    [85, 50, 23, 4],]
                            },
                        ]
                    },
                    {
                        nameOfOperator: "SCM",
                        material: [
                            {
                                id:warehouse.plyta_WIOROWA.id,
                                size: [[930, 275, 15, 1],
                                    // [900, 275, 15, 1],
                                    // [775, 275, 15, 2],
                                    // [687, 150, 15, 2],
                                    [760, 50, 15, 4],],
                            },
                            {
                                id:warehouse.pl_PILSN_BIALA.id ,
                                size: [
                                    [1258, 83, 3, 2],]
                            },
                        ]
                    },
                ],
            },
        ],
    },
    livy: {
        id: "livy",
        partOfModel: [
            {
                id: "OTO",
                partName: "OTO",
                partItem: [

                    {
                        nameOfOperator: "PILA",
                        material: [
                            {
                                id: warehouse.sosna_50x23.id,
                                size: [
                                    [725, 50, 23, 2],
                                    [325, 50, 23, 1],
                                    [150, 50, 23, 3],
                                    [50, 50, 23, 22],
                                ]
                            },
                            {
                                id: warehouse.sosna_25x25.id,
                                size: [
                                    [775, 25, 25, 1],
                                    [600, 25, 25, 2],
                                ]
                            }
                        ],
                    },
                    {
                        nameOfOperator: "MATRIX",
                        material: [
                            {
                                id: warehouse.sosna_50x23.id,
                                size: [
                                    [1840, 50, 23, 4],
                                    [1500, 50, 23, 3],
                                    [875, 50, 23, 2],
                                ]
                            },
                        ],
                    },
                    {
                        nameOfOperator: "SCM",
                        material: [
                            {
                                id:warehouse.plyta_WIOROWA.id ,
                                size: [
                                    [1045, 640, 15, 2, "cnc"],
                                    [875, 640, 15, 1],
                                    [875, 280, 15, 1],
                                ],
                            },
                            {
                                id: warehouse.hdf_3.id ,
                                size: [
                                    [1530, 640, 3, 1],
                                    [1345, 300, 3, 1],
                                    [1345, 145, 3, 1],
                                    [970, 280, 3, 1],
                                    [730, 300, 3, 1],
                                    [335, 280, 3, 1],
                                    [890, 170, 3, 1]
                                ],
                            },
                        ],
                    },
                ]
            },
            {
                id: "LC",
                partName: "LC",
                partItem: [

                    {
                        nameOfOperator: "PILA",
                        material: [
                            {
                                id: warehouse.sosna_50x23.id,
                                size: [
                                    [1290, 50, 23, 4],
                                    [700, 50, 23, 5],
                                    [600, 50, 23, 1],
                                    [400, 50, 23, 2],
                                    [150, 50, 23, 2],
                                    [50, 50, 23, 12],
                                ]
                            },
                            {
                                id: warehouse.sosna_25x25.id,
                                size: [
                                    [600, 25, 25, 2],
                                ]
                            }
                        ],
                    },
                    {
                        nameOfOperator: "SCM",
                        material: [
                            {
                                id:warehouse.plyta_WIOROWA.id,
                                size: [
                                    [1045, 640, 15, 1, "cnc"],
                                    [700, 280, 15, 2],
                                    [700, 256, 15, 1],
                                ],
                            },
                            {
                                id: warehouse.hdf_3.id,
                                size: [
                                    [730, 640, 3, 1],
                                    [730, 300, 3, 1],
                                    [595, 280, 3, 2],
                                    [730, 170, 3, 1],
                                ],
                            },
                        ],
                    },
                ]
            },
            {
                id: "2F",
                partName: "2F",
                partItem: [

                    {
                        nameOfOperator: "PILA",
                        material: [
                            {
                                id: warehouse.sosna_50x23.id,
                                size: [
                                    [584, 50, 23, 1, "szl"],
                                    [170, 50, 23, 2, "szl"],
                                    [1330, 50, 23, 1, "rama"],
                                    [222, 50, 23, 2, "rama"],
                                    [50, 50, 23, 4, "rama"],
                                ]
                            },
                            {
                                id: warehouse.sosna_50x47.id,
                                size: [
                                    [222, 50, 47, 2, "rama"],
                                ]
                            },
                            {
                                id: warehouse.sosna_47x35.id,
                                size: [
                                    [1330, 47, 35, 2, "rama"],
                                    [695, 47, 35, 2, "rama"],
                                    [640, 47, 35, 1, "rama"],
                                ]
                            },
                            {
                                id: warehouse.sosna_35x20.id,
                                size: [
                                    [300, 35, 20, 2, "rama"],

                                ]
                            },
                            {
                                id: warehouse.sosna_23x20.id,
                                size: [
                                    [1330, 23, 20, 1, "rama"],
                                    [635, 23, 20, 2, "rama"],

                                ]
                            },
                        ],
                    },
                    {
                        nameOfOperator: "MATRIX",
                        material: [
                            {
                                id: warehouse.sosna_50x23.id,
                                size: [
                                    [584, 50, 23, 1, "szl"],
                                    [170, 50, 23, 2, "szl"],
                                ]
                            },
                        ],
                    },
                    {
                        nameOfOperator: "SCM",
                        material: [
                            {
                                id: warehouse.pl_WIOROWA_BIALA.id,
                                size: [

                                    [1308, 218, 16, 2, "cnc"]
                                ],
                            },
                            {
                                id: warehouse.pl_MDF_BIALA.id,
                                size: [
                                    [615, 218, 16, 2, "cnc"]
                                ],
                            },
                            {
                                id: warehouse.pl_PILSN_BIALA_3.id,
                                size: [
                                    [1337, 615, 3, 1, "cnc"]
                                ],
                            },
                            {
                                id: warehouse.sklejka_18.id,
                                size: [
                                    [584, 50, 18, 2, "szl"],
                                    [195, 50, 18, 2, "szl"],
                                    [115, 50, 18, 2, "szl"],
                                ],
                            },
                        ],
                    },
                ]
            },
            {
                id: "OPARCIE",
                partName: "OPARCIE",
                partItem: [
                    {
                        nameOfOperator: "SCM",
                        material: [
                            {
                                id: warehouse.plyta_WIOROWA.id,
                                size: [

                                    [1330, 640, 15, 1, "cnc"]
                                ],
                            },
                            {
                                id: warehouse.pl_MDF_6.id,
                                size: [
                                    [1330, 20, 6, 1],
                                    [620, 20, 6, 2]
                                ],
                            },
                            {
                                id: warehouse.sklejka_6.id,
                                size: [
                                    [210, 100, 6, 2]
                                ],
                            },
                        ],
                    },
                ]
            },
            {
                id: "BOCZEK",
                partName: "BOCZEK",
                partItem: [
                    {
                        nameOfOperator: "PILA",
                        material: [
                            {
                                id: warehouse.sosna_50x23.id,
                                size: [
                                    [880, 50, 23, 5],
                                    [152, 50, 23, 3],
                                ],
                            },
                            {
                                id: warehouse.sosna_25x23.id,
                                size: [
                                    [175, 25, 25, 2],
                                ],
                            },


                        ],
                    },
                    {
                        nameOfOperator: "SCM",
                        material: [
                            {
                                id: warehouse.plyta_WIOROWA.id,
                                size: [
                                    [910, 280, 15, 1, "cnc"],
                                    [550, 175, 15, 2],
                                ],
                            },
                            {
                                id: warehouse.pl_MDF_6.id,
                                size: [
                                    [100, 15, 6, 6],
                                ],
                            },
                            {
                                id: warehouse.pl_PILSN_3.id,
                                size: [
                                    [910, 175, 3, 1]
                                ],
                            },
                        ],
                    },
                ]
            },

        ],
    },

}





