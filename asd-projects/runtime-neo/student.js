function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
 
  for (var i = 0; i < scenery.building.instances.length; i++) {
    var buildingInstance = scenery.building.instances[i];
    buildingInstance.x = buildingInstance.x + buildingInstance.speedX + currentLevel.speed
    if (buildingInstance.x + buildingInstance.width < 0 ) {
      buildingInstance.x = scenery.building.loopWidth;
    }
  }
  for (var i = 0; i < scenery.lamp.instances.length; i++) {
    var lampInstance = scenery.lamp.instances[i];
    lampInstance.x = lampInstance.x + lampInstance.speedX + currentLevel.speed
    if (lampInstance.x + lampInstance.width < 0 ) {
      lampInstance.x = scenery.lamp.loopWidth
    }
  }
}

function generateLevel() {
  // TODO 3: Generate the current level's game objects
  for (var i = 0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i];
    create(currentObject)
  }
}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind
  if (obj.type === "obstacle") {
    makeObstacle(obj)
  } if (obj.type === "enemy") {
    makeEnemy(obj)
  } if (obj.type === "powerup") {
    makePowerup(obj)
  } if (obj.type === "goal") {
    makeGoal(obj)
  } if (obj.type === "platform") {
    makePlatform(obj)
  }
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
  var matches = []
  for (var i = 0; i < gameObjects.length; i++) {
    if (gameObjects[i].type === type) {
      matches.push(i)
    }
  }
  return matches
  
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
  for (var i = 0; i < objectList.length; i++) {
    var currentObject2 = objectList[i]
    currentObject2.x = currentObject2.x + currentObject2.speedX
    currentObject2.x = currentObject2.x - currentLevel.speed
  }
}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
}
