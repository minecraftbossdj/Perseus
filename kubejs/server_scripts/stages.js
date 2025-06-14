// PRIMITIVE AGE

// TODO: Add pointblank weapons in respective ages.

AStages.addRestrictionForMod("stages_some_assembly_required",      "primitive_age", "some_assembly_required")
AStages.addRestrictionForMod("stages_farmersdelight",              "primitive_age", "farmersdelight")
AStages.addRestrictionForMod("stages_spartanweaponry",             "primitive_age", "spartanweaponry")
AStages.addRestrictionForMod("stages_spartanshields",              "primitive_age", "spartanshields")
//AStages.addRestrictionForMod("stages_tinkersconstruct",            "primitive_age", "tconstruct")



ServerEvents.recipes(event => {

    // INDUSTRIAL AGE EXTRAS
    /*
    event.forEachRecipe({mod: "create", not: {
                input: ["create:brass_ingot", "create:brass_sheet", "create:precision_mechanism", "create:brass_casing", "create:railway_casing", "create:sturdy_sheet", "create:powdered_obsidian", "create:electron_tube",  "create:track"]
        }}, recipe => {
        let output = recipe.originalRecipeResult

        let namespace = output.id.split(":")[0]

        if (namespace === "create") {
            AStages.addRestrictionForItem("stages_" + output, "industrial_age", output)
        }
    })*/
   //might be messin with stuff

    event.forEachRecipe({mod: "tconstruct", not: {
                input: []
        }}, recipe => {
        let output = recipe.originalRecipeResult
        if (output.id.includes("seared")) {
            let id = output.id.split(":")[1]
            AStages.addRestrictionForItem("stages_" + id, "medieval_age", output)
            console.log(id)
        }
    })
    // INDUSTRIAL AGE EXTRAS
    /*
    event.forEachRecipe({mod: "create", 
                input: ["create:brass_ingot", "create:brass_sheet", "create:precision_mechanism", "create:brass_casing", "create:railway_casing", "create:sturdy_sheet", "create:powdered_obsidian", "create:electron_tube",  "create:track"]
        }, recipe => {
        let output = recipe.originalRecipeResult

        let namespace = output.id.split(":")[0]

        if (namespace === "create") {
            AStages.addRestrictionForItem("stages_late_" + output, "industrial_age", output)
        }
    })*/


    //late fixes i fogor
    event.remove({ output: 'createdieselgenerators:large_diesel_engine' })

    event.remove({ output: 'mekanism:teleporter' })
    event.remove({ output: 'mekanism:teleporter_frame' }) //vs forogr arc

    event.remove({ output: 'mekanism:portable_teleporter' }) //literally useless without normal teleporter

    //CLEARLY we add rftools teleporter frfr trust no diddy what 😭

})

AStages.addRestrictionForItem("stages_smeltery_controller", "medieval_age", "tconstruct:smeltery_controller")
    
    


// MEDIEVAL AGE
AStages.addRestrictionForMod("stages_createdeco",                  "medieval_age", "createdeco")
AStages.addRestrictionForMod("stages_design_decor",                "medieval_age", "design_decor")
AStages.addRestrictionForMod("stages_cuffed",                      "medieval_age", "cuffed")
AStages.addRestrictionForMod("stages_mekanismtools",               "medieval_age", "mekanismtools")
AStages.addRestrictionForMod("stages_bountiful",                   "medieval_age", "bountiful")

AStages.addRestrictionForItem("stages_spur",                       "medieval_age", "numismatics:spur")
AStages.addRestrictionForItem("stages_bevel",                      "medieval_age", "numismatics:bevel")
AStages.addRestrictionForItem("stages_sprocket",                   "medieval_age", "numismatics:sprocket")
AStages.addRestrictionForItem("stages_cog",                        "medieval_age", "numismatics:cog")
AStages.addRestrictionForItem("stages_crown",                      "medieval_age", "numismatics:crown")
AStages.addRestrictionForItem("stages_sun",                        "medieval_age", "numismatics:sun")
AStages.addRestrictionForItem("stages_vendor",                     "medieval_age", "numismatics:vendor")


// INDUSTRIAL AGE
AStages.addRestrictionForMod("stages_numismatics",                 "industrial_age", "numismatics")
AStages.addRestrictionForMod("stages_storagedrawers",              "industrial_age", "storagedrawers")
AStages.addRestrictionForMod("stages_sophisticatedstorage",        "industrial_age", "sophisticatedstorage")
AStages.addRestrictionForMod("stages_cookingforblockheads",        "industrial_age", "cookingforblockheads")
AStages.addRestrictionForMod("stages_tweaked_controllers",         "industrial_age", "create_tweaked_controllers")
AStages.addRestrictionForMod("stages_create_new_age",              "industrial_age", "create_new_age")
AStages.addRestrictionForMod("stages_createbb",                    "industrial_age", "createbb")
AStages.addRestrictionForMod("stages_create_connected",            "industrial_age", "create_connected")
AStages.addRestrictionForMod("stages_createbigcannons",            "industrial_age", "createbigcannons")
AStages.addRestrictionForMod("stages_createaddition",              "industrial_age", "createaddition")
AStages.addRestrictionForMod("stages_create_dd",                   "industrial_age", "create_dd")
AStages.addRestrictionForMod("stages_escalated",                   "industrial_age", "escalated")
AStages.addRestrictionForMod("stages_copycats",                    "industrial_age", "copycats")
AStages.addRestrictionForMod("stages_railways",                    "industrial_age", "railways")
AStages.addRestrictionForMod("stages_tfmg",                        "industrial_age", "tfmg")
AStages.addRestrictionForMod("stages_create_enchantment_industry", "industrial_age", "create_enchantment_industry")
AStages.addRestrictionForMod("stages_soccermod",                   "industrial_age", "soccermod")
AStages.addRestrictionForMod("stages_playingcards",                "industrial_age", "playingcards")
AStages.addRestrictionForMod("stages_vs_eureka",                   "industrial_age", "vs_eureka")
AStages.addRestrictionForMod("stages_integrateddynamics",          "industrial_age", "integrateddynamics")
AStages.addRestrictionForMod("stages_integratedcrafting",          "industrial_age", "integratedcrafting")
AStages.addRestrictionForMod("stages_integratedterminals",         "industrial_age", "integratedterminals")
AStages.addRestrictionForMod("stages_integratedtunnels",           "industrial_age", "integratedtunnels")

//create shit
let createExcluded = [
    "steam_whistle",
    "steam_engine",
    "portable_fluid_interface",
    "fluid_valve",
    "smart_fluid_pipe",
    "hose_pulley",
    "item_drain",
    "copper_valve_handle",
    "copper_backtank",
    "copper_diving_boots",
    "copper_diving_helmet",
    "rope_pulley",
    "elevator_pulley",
    "empty_blaze_burner",
    "blaze_burner",
    "deployer",
    "portable_storage_interface",
    "weighted_ejector",
    "chute",
    "smart_chute",
    "nixie_tube",
    "crushing_wheel",
    "mechanical_roller",
    "encased_fan",
    "nozzle",
    "speedometer",
    "stressometer",
    "linked_controller",
    "potato_cannon",
    "extendo_grip",
    "wand_of_symmetry",
    "clockwork_bearing",
    "brass_casing",
    "mechanical_crafter",
    "sequenced_gearshift",
    "flywheel",
    "rotation_speed_controller",
    "mechanical_arm",
    "track",
    "railway_casing",
    "schedule",
    "track_station",
    "track_signal",
    "track_observer",
    "controls",
    "brass_funnel",
    "brass_tunnel",
    "content_observer",
    "stockpile_switch",
    "display_link",
    "display_board",
    "redstone_link",
    "pulse_repeater",
    "pulse_extender",
    "peculiar_bell",
    "haunted_bell",
    "brass_hand",
    "crafter_slot_cover",
    "precision_mechanism",
    "powdered_obsidian",
    "sturdy_sheet",
    "blaze_cake",
    "blaze_cake_base",
    "brass_nugget",
    "brass_ingot",
    "brass_sheet",
    "attribute_filter",
    "cinder_flour",
    "netherite_backtank",
    "netherite_diving_boots",
    "netherite_diving_helmet"
];

let createItems = Ingredient.all.getItemIds().toArray().filter(id => id.startsWith('create:'))

createItems.forEach(e => {
    let createParts = e.split(":");
    if (!createExcluded.includes(createParts[1])) {
        AStages.addRestrictionForItem("stages_" + e, "medieval_age", e);
    }
});

createExcluded.forEach(name => {
    let id = "create:" + name;
    AStages.addRestrictionForItem("stages_" + id, "industrial_age", id);
});


//pneumaticcraft shit
let pneumExcluded = [
    "pressure_chamber_interface",
    "pressure_chamber_valve",
    "pressure_chamber_wall",
    "pressure_chamber_glass",
    "pressure_tube",
    "air_compressor",
    "liquid_compressor",
    "manual_compressor",
    "charging_station",
    "aphorism_tile",
    "display_shelf",
    "display_table",
    "vortex_tube",
    "reinforced_chest",
    "reinforced_stone",
    "reinforced_bricks",
    "reinforced_brick_pillar",
    "reinforced_brick_slab",
    "reinforced_brick_stairs",
    "reinforced_brick_tile",
    "reinforced_brick_wall",
    "reinforced_stone_slab",
    "pneumatic_wrench",
    "omnidirectional_hopper",
    "liquid_hopper",
    "ingot_iron_compressed",
    "thermal_lagging",
    "heat_pipe",
    "heat_sink",
    "small_tank",
    "stone_base",
    "air_cannon",
    "compressed_iron_gear",
    "spawner_agitator"
];

let pneumItems = Ingredient.all.getItemIds().toArray().filter(id => id.startsWith('pneumaticcraft:'))


pneumItems.forEach(e => {
    let pneumParts = e.split(":");
    if (!pneumExcluded.includes(pneumParts[1])) {
        AStages.addRestrictionForItem("stages_" + e, "world_war_two", e);
    }
});

pneumExcluded.forEach(name => {
    let id = "pneumaticcraft:" + name;
    AStages.addRestrictionForItem("stages_" + id, "industrial_age", id);
});

// WORLD WAR 1

// WW1 infantry weaponry
AStages.addRestrictionForItem("stages_springfield",                "world_war_one", "pointblank:m1903")
AStages.addRestrictionForItem("stages_lewisgun",                   "world_war_one", "pointblank:lewisgun")
AStages.addRestrictionForItem("stages_lee_enfield",                "world_war_one", "pointblank:lee_enfield")
AStages.addRestrictionForItem("stages_lebel",                      "world_war_one", "pointblank:lebel")
AStages.addRestrictionForItem("stages_hellriegel",                 "world_war_one", "pointblank:hellriegel")
AStages.addRestrictionForItem("stages_gewehr98",                   "world_war_one", "pointblank:gewehr98")
AStages.addRestrictionForItem("stages_carcano1891",                "world_war_one", "pointblank:carcano1891")
AStages.addRestrictionForItem("stages_barm1918",                   "world_war_one", "pointblank:barm1918")
AStages.addRestrictionForItem("stages_winchestermodel1907",        "world_war_one", "pointblank:winchestermodel1907")
AStages.addRestrictionForItem("stages_mausermodel1893",            "world_war_one", "pointblank:mausermodel1893")
AStages.addRestrictionForItem("stages_mannlicherm1895",            "world_war_one", "pointblank:mannlicherm1895")
AStages.addRestrictionForItem("stages_madsen",                     "world_war_one", "pointblank:madsen")
AStages.addRestrictionForItem("stages_mosin1891",                  "world_war_one", "pointblank:mosin1891")
AStages.addRestrictionForItem("stages_mosinskeletonobrez",         "world_war_one", "pointblank:mosinskeletonobrez")
AStages.addRestrictionForItem("stages_tankgewehr",                 "world_war_one", "pointblank:tankgewehr")
AStages.addRestrictionForItem("stages_vetterlivitalim187087",      "world_war_one", "pointblank:vetterlivitalim187087")

//AStages.addRestrictionForItem("stages_",      "world_war_one", "pointblank:")

AStages.addRestrictionForItem("stages_6_5_52mm_carcano",           "world_war_one", "pointblank:6_5_52mm_carcano")
AStages.addRestrictionForItem("stages_7_92_57mm_mauser",           "world_war_one", "pointblank:7_92_57mm_mauser")
AStages.addRestrictionForItem("stages_9_23mm_steyr",               "world_war_one", "pointblank:9_23mm_steyr")
AStages.addRestrictionForItem("stages_8_50mmr_lebel",              "world_war_one", "pointblank:8_50mmr_lebel")
AStages.addRestrictionForItem("stages_303_british",                "world_war_one", "pointblank:303_british")
AStages.addRestrictionForItem("stages_30_06_springfield",          "world_war_one", "pointblank:30_06_springfield")
AStages.addRestrictionForItem("stages_7_62_54mmr",                 "world_war_one", "pointblank:7_62_54mmr")
AStages.addRestrictionForItem("stages_13_2mmtuf",                  "world_war_one", "pointblank:13_2mmtuf")
AStages.addRestrictionForItem("stages_10_4_47mmr",                 "world_war_one", "pointblank:10_4_47mmr")
AStages.addRestrictionForItem("stages_8_50mmr_mannlicher",         "world_war_one", "pointblank:8_50mmr_mannlicher")
AStages.addRestrictionForItem("stages_7_65_53mm_mauser",           "world_war_one", "pointblank:7_65_53mm_mauser")
AStages.addRestrictionForItem("stages_351_winchester_self_loading","world_war_one", "pointblank:351_winchester_self_loading")


AStages.addRestrictionForMod("stages_clockwork",                   "world_war_one", "vs_clockwork")
AStages.addRestrictionForMod("stages_clockworkadditions",          "world_war_one", "clockworkadditions")
AStages.addRestrictionForMod("stages_s_a_b",                       "world_war_one", "s_a_b")
AStages.addRestrictionForMod("stages_drivebywire",                 "world_war_one", "drivebywire")
AStages.addRestrictionForMod("stages_trackwork",                   "world_war_one", "trackwork")
AStages.addRestrictionForMod("stages_diesel_generators",           "world_war_one", "createdieselgenerators")
AStages.addRestrictionForMod("stages_integratedscripting",         "world_war_one", "integratedscripting")

// early computercraft stuff
AStages.addRestrictionForItem("stages_wired_modem",                "world_war_one", "computercraft:wired_modem")
AStages.addRestrictionForItem("stages_wired_modem_full",           "world_war_one", "computercraft:wired_modem_full")
AStages.addRestrictionForItem("stages_wired_computer_normal",      "world_war_one", "computercraft:computer_normal")
AStages.addRestrictionForItem("stages_keyboard",                   "world_war_one", "toms_peripherals:keyboard")
AStages.addRestrictionForItem("stages_monitor_normal",             "world_war_one", "computercraft:monitor_normal")
AStages.addRestrictionForItem("stages_speaker",                    "world_war_one", "computercraft:speaker")
AStages.addRestrictionForItem("stages_disk_drive",                 "world_war_one", "computercraft:disk_drive")
AStages.addRestrictionForItem("stages_disk_raid",                  "world_war_one", "peripherals:disk_raid")
AStages.addRestrictionForItem("stages_disk",                       "world_war_one", "computercraft:disk")
AStages.addRestrictionForItem("stages_cable",                      "world_war_one", "computercraft:cable")
AStages.addRestrictionForItem("stages_redstone_relay",             "world_war_one", "computercraft:redstone_relay")

// WORLD WAR 2



AStages.addRestrictionForMod("stages_mcore",                       "world_war_two", "mcore")
AStages.addRestrictionForMod("stages_radar",                       "world_war_two", "create_radar")
AStages.addRestrictionForMod("stages_pneumaticcraft",              "world_war_two", "pneumaticcraft") // fully unlocked
AStages.addRestrictionForMod("stages_marbledsarsenal",             "world_war_two", "marbledsarsenal")

// late ish computercraft stuff

AStages.addRestrictionForItem("stages_raycaster",                  "world_war_two", "some_peripherals:raycaster")
AStages.addRestrictionForItem("stages_monitor_advanced",           "world_war_two", "computercraft:monitor_advanced")
AStages.addRestrictionForItem("stages_player_detector",            "world_war_two", "advancedperipherals:player_detector")
AStages.addRestrictionForItem("stages_printer",                    "world_war_two", "computercraft:printer")
AStages.addRestrictionForItem("stages_computer_advanced",          "world_war_two", "computercraft:computer_advanced")
AStages.addRestrictionForItem("stages_turtle_normal",              "world_war_two", "computercraft:turtle_normal")
AStages.addRestrictionForItem("stages_turtle_advanced",            "world_war_two", "computercraft:turtle_advanced")
AStages.addRestrictionForItem("stages_wireless_modem_normal",      "world_war_two", "computercraft:wireless_modem_normal")
AStages.addRestrictionForItem("stages_disk_raid_advanced",         "world_war_two", "peripherals:disk_raid_advanced")


AStages.addRestrictionForMod("stages_vs_overdrive",                "world_war_two", "vs_overdrive")
AStages.addRestrictionForMod("stages_air_wars",                    "world_war_two", "create_the_air_wars")
AStages.addRestrictionForMod("stages_tank_defenses",               "world_war_two", "create_tank_defenses")


// MODERN DAY ERA
AStages.addRestrictionForMod("stages_cclink",                      "modern_day_era", "cclink")
AStages.addRestrictionForMod("stages_advancedperipherals",         "modern_day_era", "advancedperipherals")
AStages.addRestrictionForMod("stages_warborn",                     "modern_day_era", "warborn")
AStages.addRestrictionForItem("stages_pocket_computer_normal",     "modern_day_era", "computercraft:pocket_computer_normal")
AStages.addRestrictionForItem("stages_pocket_computer_advanced",   "modern_day_era", "computercraft:pocket_computer_advanced")
AStages.addRestrictionForMod("stages_peripheralium",               "modern_day_era", "peripheralium")
AStages.addRestrictionForMod("stages_peripheralworks",             "modern_day_era", "peripheralworks")
AStages.addRestrictionForMod("stages_toms_peripherals",            "modern_day_era", "toms_peripherals")
AStages.addRestrictionForMod("stages_turtlematic",                 "modern_day_era", "turtlematic")
AStages.addRestrictionForMod("stages_createendertransmission",     "modern_day_era", "createendertransmission")
AStages.addRestrictionForMod("stages_some_peripherals",            "modern_day_era", "some_peripherals")
AStages.addRestrictionForMod("stages_grapplemod",                  "modern_day_era", "grapplemod")
AStages.addRestrictionForMod("stages_peripherals",                 "modern_day_era", "peripherals")
AStages.addRestrictionForMod("stages_cccbridge",                   "modern_day_era", "cccbridge")

//AStages.addRestrictionForMod("stages_pointblank",                  "modern_day_era", "pointblank")
AStages.addRestrictionForMod("stages_cbc_mw",                      "modern_day_era", "cbcmodernwarfare")
AStages.addRestrictionForMod("stages_ae2",                         "modern_day_era", "ae2")
AStages.addRestrictionForMod("stages_enderio",                     "modern_day_era", "enderio")
AStages.addRestrictionForMod("stages_mekanismcovers",              "modern_day_era", "mekanismcovers")
AStages.addRestrictionForMod("stages_mekanismadditions",           "modern_day_era", "mekanismadditions")
AStages.addRestrictionForMod("stages_mekanismgenerators",          "modern_day_era", "mekanismgenerators")
AStages.addRestrictionForMod("stages_appmek",                      "modern_day_era", "appmek")


let excluded = [
    "meka_tool",
    "mekasuit_helmet",
    "mekasuit_pants",
    "mekasuit_bodyarmor",
    "mekasuit_boots",
    "module_color_modulation_unit",
    "module_laser_dissipation_unit",
    "module_radiation_shielding_unit",
    "module_jetpack_unit",
    "module_charge_distribution_unit",
    "module_elytra_unit"
];

let items = Ingredient.all.getItemIds().toArray().filter(id => id.startsWith('mekanism:'))


items.forEach(e => {
    let parts = e.split(":");
    if (!excluded.includes(parts[1])) {
        AStages.addRestrictionForItem("stages_" + e, "modern_day_era", e);
    }
});

AStages.addRestrictionForItem("stages_limited_mekanism_solar",     "modern_day_era", "mekanismgenerators:module_solar_recharging_unit")


// FUTURE

AStages.addRestrictionForItem("stages_wireless_modem_advanced",      "future", "computercraft:wireless_modem_advanced")
AStages.addRestrictionForItem("stages_astages_fuck_you_i_actually_hate_your_stupid_ass_devs_holy_shit_fucking_kill_yourself_immediately_you_fucking_piece_of_shit_please_fucking_die_already_why_are_you_this_shit",      "future", "create:schematicannon") //crashout complete returning to hq

excluded.forEach(name => {
    let id = "mekanism:" + name;
    AStages.addRestrictionForItem("stages_" + id, "future", id);
});