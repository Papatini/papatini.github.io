// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [{x:0, width: 100, height: 300, speedX: -3 }, {x:200, width: 90, height: 250, speedX: -3 }, { x: 400, width: 100, height: 300, speedX: -3 }, {x:600, width: 110, height: 400, speedX: -3 }, {x:800, width: 100, height: 350, speedX: -3 }, {x:1000, width: 95, height: 200, speedX: -3 }, {x:1200, width: 110, height: 400, speedX: -3 },  ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [{ x: 100, width: 65, height: 165, speedX: -3 }, { x:300, width: 35, height: 135, speedX: -3 }, { x: 500, width: 60, height: 160, speedX: -3 }, { x: 700, width: 50, height: 150, speedX: -3 }, { x: 900, width: 40, height: 140, speedX: -3 }, { x: 1100, width: 60, height: 160, speedX: -3 }, { x: 1300, width: 50, height: 150, speedX: -3 }],
  },
};
