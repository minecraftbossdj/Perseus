ServerEvents.recipes(event => {
  event.remove({ id: 'tconstruct:smeltery/alloys/molten_refined_obsidian' })
  event.recipes.create.haunting('minecraft:quartz', 'minecraft:amethyst_shard')
  event.recipes.create.haunting('kubejs:ghast_tear_bucket', 'tconstruct:blazing_blood_bucket')
  event.recipes.create.haunting('minecraft:twisting_vines', 'minecraft:bamboo')
  event.recipes.create.haunting('minecraft:weeping_vines', 'minecraft:vine')
  event.recipes.create.haunting('minecraft:warped_stem', 'minecraft:oak_log')
  event.recipes.create.haunting('minecraft:crimson_stem', 'minecraft:acacia_log')
  event.recipes.create.haunting('minecraft:warped_planks', 'minecraft:oak_planks')
  event.recipes.create.haunting('minecraft:crimson_planks', 'minecraft:acacia_planks')
  event.recipes.create.haunting('minecraft:stripped_warped_stem', 'minecraft:stripped_oak_log')
  event.recipes.create.haunting('minecraft:stripped_crimson_stem', 'minecraft:stripped_acacia_log')
  event.recipes.create.haunting('minecraft:music_disc_pigstep', 'minecraft:music_disc_otherside')
  event.recipes.create.haunting('minecraft:wither_skeleton_skull', 'minecraft:skeleton_skull')
  event.recipes.create.filling('minecraft:magma_block', [Fluid.lava(500), 'minecraft:blackstone'])
  event.recipes.create.sequenced_assembly([
    Item.of('minecraft:blaze_rod')],
    'kubejs:coal_rod', [
    event.recipes.create.filling('kubejs:incomplete_blaze_rod', [Fluid.lava(), 'kubejs:coal_rod']),
    event.recipes.create.filling('kubejs:incomplete_blaze_rod', [Fluid.lava(), 'kubejs:incomplete_blaze_rod']),
    event.recipes.create.pressing('kubejs:incomplete_blaze_rod', 'kubejs:incomplete_blaze_rod'),
  ]).transitionalItem('kubejs:incomplete_blaze_rod').loops(4)
  event.recipes.create.sandpaper_polishing('kubejs:coal_rod', 'minecraft:coal_block')
  event.shaped(
    Item.of('create:blaze_burner'), // definitely didnt copy paste this from the docs NUH UH SHUT UP FREAK why are you even reading these do you not trust me smh
    [
      'BBB',
      'BSB',
      'BEB'
    ],
    {
      E: 'create:empty_blaze_burner',
      B: 'minecraft:blaze_rod',
      S: 'minecraft:soul_sand'
    }
  )
  event.recipes.create.crushing([Item.of('kubejs:netherite_fragment').withChance(0.01), Item.of('minecraft:coal').withChance(0.5)], 'minecraft:blackstone').processingTime(1000)
  event.shaped(
    Item.of('minecraft:ancient_debris'),
    [
      'FFF',
      'FNF',
      'FFF'
    ],
    {
      N: 'minecraft:netherrack',
      F: 'kubejs:netherite_fragment'
    }
  )
  event.recipes.create.deploying('minecraft:crimson_nylium', ['minecraft:mycelium', 'minecraft:crimson_fungus'])
  event.recipes.create.deploying('minecraft:warped_nylium', ['minecraft:mycelium', 'minecraft:warped_fungus'])
  event.shaped(
    Item.of('minecraft:netherite_upgrade_smithing_template'),
    [
      'FDF',
      'FNF',
      'FFF'
    ],
    {
      N: 'minecraft:netherrack',
      F: 'kubejs:netherite_fragment',
      D: 'minecraft:diamond'
    }
  )
  event.recipes.create.deploying('minecraft:soul_sand', ['minecraft:sand', 'minecraft:bone_block'])  // dont ask why this is so far down scooby made me remember you cant haunt shit without getting soul sand first :nails:
  const { tconstruct } = event.recipes;
  tconstruct.casting_table(
    Item.of("tconstruct:ichor_slime_crystal"),
    Fluid.of("tconstruct:blazing_blood", 50), //input fluid
    Item.of("tconstruct:sky_slime_crystal"), //cast
    true, //use cast 
    40 //ticks to cooldown
  )
  tconstruct.casting_table(
    Item.of("tconstruct:ichor_slime_crystal"),
    Fluid.of("tconstruct:blazing_blood", 50), //input fluid
    Item.of("tconstruct:earth_slime_crystal"), //cast
    true, //use cast 
    40 //ticks to cooldown
  )
  tconstruct.casting_basin(
    Item.of("tconstruct:bloodshroom_planks"),
    Fluid.of("tconstruct:blazing_blood", 500), //input fluid
    Item.of("tconstruct:greenheart_planks"), //cast
    true, //use cast 
    120 //ticks to cooldown
  )
  tconstruct.casting_basin(
    Item.of("tconstruct:bloodshroom_log"),
    Fluid.of("tconstruct:blazing_blood", 500), //input fluid
    Item.of("tconstruct:greenheart_log"), //cast
    true, //use cast 
    120 //ticks to cooldown
  )
  tconstruct.casting_basin(
    Item.of("tconstruct:stripped_bloodshroom_log"),
    Fluid.of("tconstruct:blazing_blood", 500), //input fluid
    Item.of("tconstruct:stripped_greenheart_log"), //cast
    true, //use cast 
    120 //ticks to cooldown
  )
  tconstruct.casting_basin(
    Item.of("tconstruct:bloodshroom_planks"),
    Fluid.of("tconstruct:blazing_blood", 500), //input fluid
    Item.of("tconstruct:skyroot_planks"), //cast
    true, //use cast 
    120 //ticks to cooldown
  )
  tconstruct.casting_basin(
    Item.of("tconstruct:bloodshroom_log"),
    Fluid.of("tconstruct:blazing_blood", 500), //input fluid
    Item.of("tconstruct:skyroot_log"), //cast
    true, //use cast 
    120 //ticks to cooldown
  )
  tconstruct.casting_basin(
    Item.of("tconstruct:stripped_bloodshroom_log"),
    Fluid.of("tconstruct:blazing_blood", 500), //input fluid
    Item.of("tconstruct:stripped_skyroot_log"), //cast
    true, //use cast 
    120 //ticks to cooldown
  )
  tconstruct.casting_table(
    Item.of("tconstruct:ichor_slime_ball"),
    Fluid.of("tconstruct:blazing_blood", 20), //input fluid
    Item.of("tconstruct:sky_slime_ball"), //cast
    true, //use cast 
    60 //ticks to cooldown
  )
  tconstruct.casting_table(
    Item.of("tconstruct:ichor_slime_ball"),
    Fluid.of("tconstruct:blazing_blood", 20), //input fluid
    Item.of("minecraft:slime_ball"), //cast
    true, //use cast 
    60 //ticks to cooldown
  )
  tconstruct.casting_table(
    Item.of("minecraft:ghast_tear"),
    Fluid.of("kubejs:ghast_tear", 250), //input fluid
    Item.of("tconstruct:nugget_cast"), //cast
    true, //use cast 
    60 //ticks to cooldown
  )
  tconstruct.casting_basin(
    Item.of("tconstruct:ichor_congealed_slime"),
    Fluid.of("tconstruct:blazing_blood", 500), //input fluid
    Item.of("tconstruct:earth_congealed_slime"), //cast
    true, //use cast 
    120 //ticks to cooldown
  )

  event.custom({
    type: 'tconstruct:alloy',
    inputs: [
      {
        amount: 100,
        fluid: 'tconstruct:molten_diamond'
      },
      {
        amount: 50,
        fluid: 'tconstruct:molten_gold'
      }
    ],
    result: {
      fluid: 'tconstruct:molten_cobalt',
      amount: 150
    },
    temperature: 1500
  })
  event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "tag": "forge:rods/blaze"
    },
    "result": {
      "amount": 100,
      "fluid": "tconstruct:blazing_blood"
    },
    "temperature": 1000,
    "time": 80
  })
})