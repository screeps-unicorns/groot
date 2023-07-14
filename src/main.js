// Main - Entrypoint of the game

var harvester_manager = require("harvester.manager")

// Init for manager
harvester_manager.init()

module.exports.loop = function () {
    console.log('groot - loop - start')
    // Loop of Manager
    harvester_manager.loop()
    //
    console.log('groot - loop - end')   
}