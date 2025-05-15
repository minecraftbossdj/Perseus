local M = {}

function M.start_reload(api)
    local entity = api:getEntityUtil()
    if entity ~= nil and api:getAmmoAmount() == 0 then
        entity:sendActionBar(entity:translatable("actionbar.fallout.no_reload"))
    end
    return false
end

return M