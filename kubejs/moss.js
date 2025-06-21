TConJSEvents.modifierRegistry(event =>{
    event.createNew("mtga:moss", builder =>{
        builder.onInventoryTick((view, lvl, level, entity, slot, inMainHand, inAvailableSlot, itemStack) => {
            if (itemStack.nbt?.tic_broken == 1) return;

            if (itemStack.nbt?.moss_tick == undefined) {
                itemStack.nbt.moss_tick = 0
            } 
            itemStack.nbt.moss_tick++;
            
            const pos = entity.blockPosition;

            const canSeeSky = level.canSeeSky(pos);
            const interval = canSeeSky ? 40 : 80;

            if (itemStack.nbt.moss_tick >= interval) {
                itemStack.nbt.moss_tick = 0;

                let currentDamage = itemStack.damageValue;
                if (currentDamage > 0) {
                    itemStack.damageValue = currentDamage - 1;
                }
            }
        });
    })
})

StartupEvents.registry("item", event => {
    event.create("mtga:moss").displayName(Component.translatable("item.mtga.moss")).texture("mtga:item/moss")
})