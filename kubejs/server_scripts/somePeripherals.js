ServerEvents.recipes(event => {
    event.shaped(
        Item.of('some_peripherals:world_scanner', 1), 
        [
            ' I ',
            'ISI', 
            ' I '
        ],
        {
            I: 'minecraft:iron_ingot',
            S: 'advancedperipherals:geo_scanner'
        }
    )

    event.shaped(
        Item.of('some_peripherals:digitizer', 1), 
        [
            'IDI',
            'DDD', 
            'IDI'
        ],
        {
            I: 'minecraft:iron_block',
            D: 'minecraft:diamond_block'
        }
    )

    event.shaped(
        Item.of('some_peripherals:status_goggles', 1), 
        [
            'III',
            'IPI', 
            '   '
        ],
        {
            I: 'minecraft:iron_ingot',
            P: 'peripherals:player_interface'
        }
    )

    event.shaped(
        Item.of('some_peripherals:range_goggles', 1), 
        [
            'III',
            'IRI', 
            '   '
        ],
        {
            I: 'minecraft:iron_ingot',
            R: 'some_peripherals:raycaster'
        }
    )

    event.shaped(
        Item.of('some_peripherals:raycaster', 1), 
        [
            'GGG',
            'GSP', 
            'GGG'
        ],
        {
            G: 'minecraft:gold_ingot',
            S: 'advancedperipherals:geo_scanner',
            P: 'create:precision_mechanism'
        }
    )

    event.shaped(
        Item.of('some_peripherals:goggle_link_port', 1), 
        [
            'IMI',
            'IPI', 
            'III'
        ],
        {
            I: 'minecraft:iron_ingot',
            P: 'peripherals:player_interface',
            M: 'computercraft:wireless_modem_advanced'
        }
    )

    event.shaped(
        Item.of('some_peripherals:radar', 1), 
        [
            'IDI',
            'GPR', 
            'IEI'
        ],
        {
            I: 'minecraft:iron_ingot',
            P: 'create:precision_mechanism',
            D: 'advancedperipherals:player_detector',
            G: 'advancedperipherals:geo_scanner',
            E: 'advancedperipherals:environment_detector',
            R: 'some_peripherals:raycaster'
        }
    )
})