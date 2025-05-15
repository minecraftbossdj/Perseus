ServerEvents.recipes(event => {
    //STOP DOXXING GRRRRRRR
    event.remove({ output: 'integrateddynamics:part_entity_reader' })
    event.remove({ output: 'integrateddynamics:part_world_reader' })
    event.remove({ output: 'integrateddynamics:part_extradimensional_reader' })
})