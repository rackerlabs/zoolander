"use strict";

(function (cjs, an) {
  var p; // shortcut to reference prototypes

  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [{
    name: "Rackspace_Responsive_Hero_atlas_",
    frames: [[962, 0, 50, 50], [0, 962, 734, 911], [736, 962, 285, 500], [736, 1464, 261, 475], [0, 1875, 101, 135], [0, 0, 960, 960]]
  }]; // symbols:

  (lib.CachedTexturedBitmap_1 = function () {
    this.initialize(img.CachedTexturedBitmap_1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1784, 2513);
  (lib.CachedTexturedBitmap_2 = function () {
    this.initialize(ss["Rackspace_Responsive_Hero_atlas_"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();
  (lib.CachedTexturedBitmap_3 = function () {
    this.initialize(ss["Rackspace_Responsive_Hero_atlas_"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();
  (lib.CachedTexturedBitmap_4 = function () {
    this.initialize(ss["Rackspace_Responsive_Hero_atlas_"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();
  (lib.CachedTexturedBitmap_5 = function () {
    this.initialize(ss["Rackspace_Responsive_Hero_atlas_"]);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();
  (lib.CachedTexturedBitmap_6 = function () {
    this.initialize(ss["Rackspace_Responsive_Hero_atlas_"]);
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();
  (lib.CachedTexturedBitmap_7 = function () {
    this.initialize(img.CachedTexturedBitmap_7);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 7280, 900);
  (lib.MazeNonIsometricsmall = function () {
    this.initialize(ss["Rackspace_Responsive_Hero_atlas_"]);
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite(); // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));

    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.redBackground = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // Layer_1

    this.instance = new lib.CachedTexturedBitmap_7();
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 0.1, 0.1);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.redBackground, new cjs.Rectangle(0, 0, 728, 90), null);
  (lib.maze = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // Layer_1

    this.instance = new lib.MazeNonIsometricsmall();
    this.instance.parent = this;
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.maze, new cjs.Rectangle(0, 0, 960, 960), null);
  (lib.line2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // Layer_1

    this.instance = new lib.CachedTexturedBitmap_5();
    this.instance.parent = this;
    this.instance.setTransform(-0.95, -0.95, 0.3268, 0.3268);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.line2, new cjs.Rectangle(-0.9, -0.9, 85.30000000000001, 155.20000000000002), null);
  (lib.line1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // Layer_1

    this.instance = new lib.CachedTexturedBitmap_4();
    this.instance.parent = this;
    this.instance.setTransform(-0.95, -0.95, 0.3268, 0.3268);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.line1, new cjs.Rectangle(-0.9, -0.9, 93.10000000000001, 163.4), null);
  (lib.ClipGroup = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // Layer_2 (mask)

    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("Eg1EBB4MAAAiDvMBqJAAAMAAACDvg");
    mask.setTransform(339.7, 421.575); // Layer_3

    this.instance = new lib.CachedTexturedBitmap_3();
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 0.926, 0.926);
    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0, 0, 679.4, 843.2), null);
  (lib.arrowhead = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // Layer_1

    this.instance = new lib.CachedTexturedBitmap_2();
    this.instance.parent = this;
    this.instance.setTransform(-0.95, -0.95, 0.3268, 0.3268);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.arrowhead, new cjs.Rectangle(-0.9, -0.9, 16.3, 16.3), null);
  (lib.bigR = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // FlashAICB

    this.instance = new lib.ClipGroup();
    this.instance.parent = this;
    this.instance.setTransform(380.75, 446.6, 1, 1, 0, 0, 0, 339.7, 421.6);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.bigR, new cjs.Rectangle(41.1, 25, 679.6999999999999, 843.6), null);
  (lib.BigMaze = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {
      loop: 199
    }); // timeline functions:

    this.frame_537 = function () {
      this.gotoAndPlay("loop");
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).wait(537).call(this.frame_537).wait(319)); // Mask (mask)

    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EggWAVaMAAAgqzMBAtAAAMAAAAqzg");
    mask.setTransform(157.05, 157.075); // maze1_copy_3

    this.maze = new lib.maze();
    this.maze.name = "maze";
    this.maze.parent = this;
    this.maze.setTransform(75.95, 290.95, 0.6, 0.6, 0, 0, 0, 479.9, 479.9);
    this.maze.alpha = 0;
    this.maze._off = true;
    var maskedShapeInstanceList = [this.maze];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.maze).wait(505).to({
      _off: false
    }, 0).to({
      regY: 480.1,
      x: 109.7,
      y: 289.25,
      alpha: 1
    }, 32).to({
      regY: 479.9,
      x: 245.85,
      y: 282
    }, 129).to({
      x: 285.95,
      y: 279.95,
      alpha: 0
    }, 38).to({
      _off: true
    }, 1).wait(151)); // maze1_copy_2

    this.maze_1 = new lib.maze();
    this.maze_1.name = "maze_1";
    this.maze_1.parent = this;
    this.maze_1.setTransform(75.95, 291.95, 0.6, 0.6, 0, 0, 0, 479.9, 479.9);
    this.maze_1.alpha = 0;
    this.maze_1._off = true;
    var maskedShapeInstanceList = [this.maze_1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.maze_1).wait(328).to({
      _off: false
    }, 0).to({
      regY: 480.1,
      x: 113.8,
      y: 289.5,
      alpha: 1
    }, 38).to({
      regY: 479.9,
      x: 252.2,
      y: 280
    }, 139).to({
      x: 285.95,
      y: 279.95,
      alpha: 0
    }, 32).to({
      _off: true
    }, 1).wait(318)); // maze1_copy

    this.maze_2 = new lib.maze();
    this.maze_2.name = "maze_2";
    this.maze_2.parent = this;
    this.maze_2.setTransform(75.95, 290.95, 0.6, 0.6, 0, 0, 0, 479.9, 479.9);
    this.maze_2.alpha = 0;
    this.maze_2._off = true;
    var maskedShapeInstanceList = [this.maze_2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.maze_2).wait(167).to({
      _off: false
    }, 0).to({
      regY: 480.1,
      x: 109.7,
      y: 289.25,
      alpha: 1
    }, 32).to({
      regY: 479.9,
      x: 245.85,
      y: 282
    }, 129).to({
      x: 285.95,
      y: 279.95,
      alpha: 0
    }, 38).to({
      _off: true
    }, 1).wait(489)); // maze1

    this.maze_3 = new lib.maze();
    this.maze_3.name = "maze_3";
    this.maze_3.parent = this;
    this.maze_3.setTransform(75.95, 279.95, 0.6, 0.6, 0, 0, 0, 479.9, 479.9);
    var maskedShapeInstanceList = [this.maze_3];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.maze_3).to({
      x: 252.2,
      y: 280
    }, 167).to({
      x: 285.95,
      y: 279.95,
      alpha: 0
    }, 32).to({
      _off: true
    }, 1).wait(656));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-50, 0, 414.1, 294.1);
  (lib.arrowLine23 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // timeline functions:

    this.frame_110 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).wait(110).call(this.frame_110).wait(1)); // arrow

    this.arrowHead = new lib.arrowhead();
    this.arrowHead.name = "arrowHead";
    this.arrowHead.parent = this;
    this.arrowHead.setTransform(11.8, 11.55, 1, 1, 0, 0, 0, 14.1, 14.8);
    this.timeline.addTween(cjs.Tween.get(this.arrowHead).to({
      guide: {
        path: [11.9, 11.6, 51.7, 50.6, 57.7, 57.1, 61.8, 61.5, 62.8, 63.4, 64.5, 66.8, 64.5, 73.1, 64.5, 96.2, 64.5, 119.2, 64.5, 127.8, 67.6, 134.7, 70.3, 140.8, 75.9, 146.2, 80.4, 150.6, 83.1, 153.3],
        orient: 'auto'
      }
    }, 44).wait(35).to({
      alpha: 0
    }, 30).to({
      _off: true
    }, 1).wait(1)); // Mask (mask)

    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p("Al7DPIJKpKICtCtIpKJKg");
    var mask_graphics_1 = new cjs.Graphics().p("AmIDCIJKpKIDHDHIpKJKg");
    var mask_graphics_2 = new cjs.Graphics().p("AmVC1IJKpKIDhDhIpKJKg");
    var mask_graphics_3 = new cjs.Graphics().p("AmiCnIJJpJID8D8IpJJJg");
    var mask_graphics_4 = new cjs.Graphics().p("AmwCaIJKpKIEXEXIpKJKg");
    var mask_graphics_5 = new cjs.Graphics().p("Am9CNIJKpKIExExIpKJKg");
    var mask_graphics_6 = new cjs.Graphics().p("AnKCAIJKpKIFLFLIpKJKg");
    var mask_graphics_7 = new cjs.Graphics().p("AnXByIJJpJIFmFmIpJJJg");
    var mask_graphics_8 = new cjs.Graphics().p("AnlBlIJKpKIGBGBIpKJKg");
    var mask_graphics_9 = new cjs.Graphics().p("AnyBYIJKpKIGbGbIpKJKg");
    var mask_graphics_10 = new cjs.Graphics().p("An/BLIJKpKIG1G1IpKJKg");
    var mask_graphics_11 = new cjs.Graphics().p("AoMA9IJJpJIHQHQIpJJJg");
    var mask_graphics_12 = new cjs.Graphics().p("AoaAwIJKpKIHrHrIpKJKg");
    var mask_graphics_13 = new cjs.Graphics().p("AonAjIJKpKIIFIFIpKJKg");
    var mask_graphics_14 = new cjs.Graphics().p("Ao0AWIJKpKIIfIfIpKJKg");
    var mask_graphics_15 = new cjs.Graphics().p("ApCAIIJKpKII7I7IpKJKg");
    var mask_graphics_16 = new cjs.Graphics().p("ApPgEIJLpLIJUJUIpLJLg");
    var mask_graphics_17 = new cjs.Graphics().p("ApcgRIJLpLIJuJuIpLJLg");
    var mask_graphics_18 = new cjs.Graphics().p("AppgfIJKpKIKJKJIpKJKg");
    var mask_graphics_19 = new cjs.Graphics().p("Ap3gsIJLpLIKkKkIpLJLg");
    var mask_graphics_20 = new cjs.Graphics().p("AqEg5IJLpLIK+K+IpLJLg");
    var mask_graphics_21 = new cjs.Graphics().p("AqOhDIJLpLILSLSIpLJLg");
    var mask_graphics_22 = new cjs.Graphics().p("AqYhNIJLpLILmLmIpLJLg");
    var mask_graphics_23 = new cjs.Graphics().p("AqihXIJLpLIL6L6IpLJLg");
    var mask_graphics_24 = new cjs.Graphics().p("AqshhIJLpLIMOMOIpLJLg");
    var mask_graphics_25 = new cjs.Graphics().p("Aq2hrIJLpLIMiMiIpLJLg");
    var mask_graphics_26 = new cjs.Graphics().p("Aq/h1IJKpKIM1M1IpKJKg");
    var mask_graphics_27 = new cjs.Graphics().p("ArJh/IJKpKINJNJIpKJKg");
    var mask_graphics_28 = new cjs.Graphics().p("ArTiJIJKpKINdNdIpKJKg");
    var mask_graphics_29 = new cjs.Graphics().p("ArdiTIJKpKINxNxIpKJKg");
    var mask_graphics_30 = new cjs.Graphics().p("ArnidIJKpKIOFOFIpKJKg");
    var mask_graphics_31 = new cjs.Graphics().p("ArximIJLpLIOYOYIpLJLg");
    var mask_graphics_32 = new cjs.Graphics().p("Ar7iwIJLpLIOsOsIpLJLg");
    var mask_graphics_33 = new cjs.Graphics().p("AsFi6IJLpLIPAPAIpLJLg");
    var mask_graphics_34 = new cjs.Graphics().p("AsPjEIJLpLIPUPUIpLJLg");
    var mask_graphics_35 = new cjs.Graphics().p("AsZjOIJLpLIPoPoIpLJLg");
    var mask_graphics_36 = new cjs.Graphics().p("AsjjYIJLpLIP8P8IpLJLg");
    var mask_graphics_37 = new cjs.Graphics().p("AswjlIJLpLIQWQWIpLJLg");
    var mask_graphics_38 = new cjs.Graphics().p("As9jzIJKpKIQxQxIpKJKg");
    var mask_graphics_39 = new cjs.Graphics().p("AtLkAIJLpLIRMRMIpLJLg");
    var mask_graphics_40 = new cjs.Graphics().p("AtYkNIJLpLIRmRmIpLJLg");
    var mask_graphics_41 = new cjs.Graphics().p("AtlkaIJLpLISASAIpLJLg");
    var mask_graphics_42 = new cjs.Graphics().p("AtzkoIJLpLIScScIpLJLg");
    var mask_graphics_43 = new cjs.Graphics().p("AuAk1IJLpLIS2S2IpLJLg");
    var mask_graphics_44 = new cjs.Graphics().p("AuNlCIJLpLITQTQIpLJLg");
    this.timeline.addTween(cjs.Tween.get(mask).to({
      graphics: mask_graphics_0,
      x: -20.6715,
      y: 26.2109
    }).wait(1).to({
      graphics: mask_graphics_1,
      x: -19.3456,
      y: 27.5415
    }).wait(1).to({
      graphics: mask_graphics_2,
      x: -18.0196,
      y: 28.8722
    }).wait(1).to({
      graphics: mask_graphics_3,
      x: -16.6937,
      y: 30.2029
    }).wait(1).to({
      graphics: mask_graphics_4,
      x: -15.3677,
      y: 31.5336
    }).wait(1).to({
      graphics: mask_graphics_5,
      x: -14.0418,
      y: 32.8643
    }).wait(1).to({
      graphics: mask_graphics_6,
      x: -12.7158,
      y: 34.195
    }).wait(1).to({
      graphics: mask_graphics_7,
      x: -11.3899,
      y: 35.5257
    }).wait(1).to({
      graphics: mask_graphics_8,
      x: -10.0639,
      y: 36.8564
    }).wait(1).to({
      graphics: mask_graphics_9,
      x: -8.738,
      y: 38.1871
    }).wait(1).to({
      graphics: mask_graphics_10,
      x: -7.412,
      y: 39.5178
    }).wait(1).to({
      graphics: mask_graphics_11,
      x: -6.0861,
      y: 40.8485
    }).wait(1).to({
      graphics: mask_graphics_12,
      x: -4.7601,
      y: 42.1792
    }).wait(1).to({
      graphics: mask_graphics_13,
      x: -3.4341,
      y: 43.5099
    }).wait(1).to({
      graphics: mask_graphics_14,
      x: -2.1082,
      y: 44.8406
    }).wait(1).to({
      graphics: mask_graphics_15,
      x: -0.7822,
      y: 46.1713
    }).wait(1).to({
      graphics: mask_graphics_16,
      x: 0.5437,
      y: 47.502
    }).wait(1).to({
      graphics: mask_graphics_17,
      x: 1.8697,
      y: 48.8327
    }).wait(1).to({
      graphics: mask_graphics_18,
      x: 3.1956,
      y: 50.1634
    }).wait(1).to({
      graphics: mask_graphics_19,
      x: 4.5216,
      y: 51.4941
    }).wait(1).to({
      graphics: mask_graphics_20,
      x: 5.9041,
      y: 52.8814
    }).wait(1).to({
      graphics: mask_graphics_21,
      x: 6.9045,
      y: 53.8788
    }).wait(1).to({
      graphics: mask_graphics_22,
      x: 7.9053,
      y: 54.8766
    }).wait(1).to({
      graphics: mask_graphics_23,
      x: 8.9061,
      y: 55.8744
    }).wait(1).to({
      graphics: mask_graphics_24,
      x: 9.9069,
      y: 56.8722
    }).wait(1).to({
      graphics: mask_graphics_25,
      x: 10.9076,
      y: 57.87
    }).wait(1).to({
      graphics: mask_graphics_26,
      x: 11.9084,
      y: 58.8678
    }).wait(1).to({
      graphics: mask_graphics_27,
      x: 12.9092,
      y: 59.8656
    }).wait(1).to({
      graphics: mask_graphics_28,
      x: 13.91,
      y: 60.8634
    }).wait(1).to({
      graphics: mask_graphics_29,
      x: 14.9108,
      y: 61.8612
    }).wait(1).to({
      graphics: mask_graphics_30,
      x: 15.9115,
      y: 62.859
    }).wait(1).to({
      graphics: mask_graphics_31,
      x: 16.9123,
      y: 63.8568
    }).wait(1).to({
      graphics: mask_graphics_32,
      x: 17.9131,
      y: 64.8546
    }).wait(1).to({
      graphics: mask_graphics_33,
      x: 18.9139,
      y: 65.8524
    }).wait(1).to({
      graphics: mask_graphics_34,
      x: 19.9146,
      y: 66.8502
    }).wait(1).to({
      graphics: mask_graphics_35,
      x: 20.9154,
      y: 67.848
    }).wait(1).to({
      graphics: mask_graphics_36,
      x: 21.8188,
      y: 68.8897
    }).wait(1).to({
      graphics: mask_graphics_37,
      x: 23.1542,
      y: 70.2187
    }).wait(1).to({
      graphics: mask_graphics_38,
      x: 24.49,
      y: 71.5482
    }).wait(1).to({
      graphics: mask_graphics_39,
      x: 25.8259,
      y: 72.8777
    }).wait(1).to({
      graphics: mask_graphics_40,
      x: 27.1617,
      y: 74.2072
    }).wait(1).to({
      graphics: mask_graphics_41,
      x: 28.4976,
      y: 75.5367
    }).wait(1).to({
      graphics: mask_graphics_42,
      x: 29.8335,
      y: 76.8662
    }).wait(1).to({
      graphics: mask_graphics_43,
      x: 31.1693,
      y: 78.1956
    }).wait(1).to({
      graphics: mask_graphics_44,
      x: 32.5765,
      y: 79.455
    }).wait(67)); // Layer_2

    this.line2 = new lib.line2();
    this.line2.name = "line2";
    this.line2.parent = this;
    this.line2.setTransform(41.6, 76.7, 1, 1, 0, 0, 0, 41.6, 76.7);
    var maskedShapeInstanceList = [this.line2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.line2).wait(79).to({
      alpha: 0
    }, 30).to({
      _off: true
    }, 1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-3.2, -4.2, 87.7, 158.5);
  (lib.arrowLine22 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // timeline functions:

    this.frame_89 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1)); // arrow

    this.arrowHead = new lib.arrowhead();
    this.arrowHead.name = "arrowHead";
    this.arrowHead.parent = this;
    this.arrowHead.setTransform(11.8, 11.55, 1, 1, 0, 0, 0, 14.1, 14.8);
    this.timeline.addTween(cjs.Tween.get(this.arrowHead).to({
      guide: {
        path: [11.9, 11.6, 51.7, 50.6, 57.7, 57.1, 61.8, 61.5, 62.8, 63.4, 64.5, 66.8, 64.5, 73.1, 64.5, 96.2, 64.5, 119.2, 64.5, 127.8, 67.6, 134.7, 70.3, 140.8, 75.9, 146.2, 80.4, 150.6, 83.1, 153.3],
        orient: 'auto'
      }
    }, 44).wait(15).to({
      alpha: 0
    }, 30).wait(1)); // Mask (mask)

    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p("Al7DPIJKpKICtCtIpKJKg");
    var mask_graphics_1 = new cjs.Graphics().p("AmIDCIJKpKIDHDHIpKJKg");
    var mask_graphics_2 = new cjs.Graphics().p("AmVC1IJKpKIDhDhIpKJKg");
    var mask_graphics_3 = new cjs.Graphics().p("AmiCnIJJpJID8D8IpJJJg");
    var mask_graphics_4 = new cjs.Graphics().p("AmwCaIJKpKIEXEXIpKJKg");
    var mask_graphics_5 = new cjs.Graphics().p("Am9CNIJKpKIExExIpKJKg");
    var mask_graphics_6 = new cjs.Graphics().p("AnKCAIJKpKIFLFLIpKJKg");
    var mask_graphics_7 = new cjs.Graphics().p("AnXByIJJpJIFmFmIpJJJg");
    var mask_graphics_8 = new cjs.Graphics().p("AnlBlIJKpKIGBGBIpKJKg");
    var mask_graphics_9 = new cjs.Graphics().p("AnyBYIJKpKIGbGbIpKJKg");
    var mask_graphics_10 = new cjs.Graphics().p("An/BLIJKpKIG1G1IpKJKg");
    var mask_graphics_11 = new cjs.Graphics().p("AoMA9IJJpJIHQHQIpJJJg");
    var mask_graphics_12 = new cjs.Graphics().p("AoaAwIJKpKIHrHrIpKJKg");
    var mask_graphics_13 = new cjs.Graphics().p("AonAjIJKpKIIFIFIpKJKg");
    var mask_graphics_14 = new cjs.Graphics().p("Ao0AWIJKpKIIfIfIpKJKg");
    var mask_graphics_15 = new cjs.Graphics().p("ApCAIIJKpKII7I7IpKJKg");
    var mask_graphics_16 = new cjs.Graphics().p("ApPgEIJLpLIJUJUIpLJLg");
    var mask_graphics_17 = new cjs.Graphics().p("ApcgRIJLpLIJuJuIpLJLg");
    var mask_graphics_18 = new cjs.Graphics().p("AppgfIJKpKIKJKJIpKJKg");
    var mask_graphics_19 = new cjs.Graphics().p("Ap3gsIJLpLIKkKkIpLJLg");
    var mask_graphics_20 = new cjs.Graphics().p("AqEg5IJLpLIK+K+IpLJLg");
    var mask_graphics_21 = new cjs.Graphics().p("AqOhDIJLpLILSLSIpLJLg");
    var mask_graphics_22 = new cjs.Graphics().p("AqYhNIJLpLILmLmIpLJLg");
    var mask_graphics_23 = new cjs.Graphics().p("AqihXIJLpLIL6L6IpLJLg");
    var mask_graphics_24 = new cjs.Graphics().p("AqshhIJLpLIMOMOIpLJLg");
    var mask_graphics_25 = new cjs.Graphics().p("Aq2hrIJLpLIMiMiIpLJLg");
    var mask_graphics_26 = new cjs.Graphics().p("Aq/h1IJKpKIM1M1IpKJKg");
    var mask_graphics_27 = new cjs.Graphics().p("ArJh/IJKpKINJNJIpKJKg");
    var mask_graphics_28 = new cjs.Graphics().p("ArTiJIJKpKINdNdIpKJKg");
    var mask_graphics_29 = new cjs.Graphics().p("ArdiTIJKpKINxNxIpKJKg");
    var mask_graphics_30 = new cjs.Graphics().p("ArnidIJKpKIOFOFIpKJKg");
    var mask_graphics_31 = new cjs.Graphics().p("ArximIJLpLIOYOYIpLJLg");
    var mask_graphics_32 = new cjs.Graphics().p("Ar7iwIJLpLIOsOsIpLJLg");
    var mask_graphics_33 = new cjs.Graphics().p("AsFi6IJLpLIPAPAIpLJLg");
    var mask_graphics_34 = new cjs.Graphics().p("AsPjEIJLpLIPUPUIpLJLg");
    var mask_graphics_35 = new cjs.Graphics().p("AsZjOIJLpLIPoPoIpLJLg");
    var mask_graphics_36 = new cjs.Graphics().p("AsjjYIJLpLIP8P8IpLJLg");
    var mask_graphics_37 = new cjs.Graphics().p("AswjlIJLpLIQWQWIpLJLg");
    var mask_graphics_38 = new cjs.Graphics().p("As9jzIJKpKIQxQxIpKJKg");
    var mask_graphics_39 = new cjs.Graphics().p("AtLkAIJLpLIRMRMIpLJLg");
    var mask_graphics_40 = new cjs.Graphics().p("AtYkNIJLpLIRmRmIpLJLg");
    var mask_graphics_41 = new cjs.Graphics().p("AtlkaIJLpLISASAIpLJLg");
    var mask_graphics_42 = new cjs.Graphics().p("AtzkoIJLpLIScScIpLJLg");
    var mask_graphics_43 = new cjs.Graphics().p("AuAk1IJLpLIS2S2IpLJLg");
    var mask_graphics_44 = new cjs.Graphics().p("AuNlCIJLpLITQTQIpLJLg");
    this.timeline.addTween(cjs.Tween.get(mask).to({
      graphics: mask_graphics_0,
      x: -20.6715,
      y: 26.2109
    }).wait(1).to({
      graphics: mask_graphics_1,
      x: -19.3456,
      y: 27.5415
    }).wait(1).to({
      graphics: mask_graphics_2,
      x: -18.0196,
      y: 28.8722
    }).wait(1).to({
      graphics: mask_graphics_3,
      x: -16.6937,
      y: 30.2029
    }).wait(1).to({
      graphics: mask_graphics_4,
      x: -15.3677,
      y: 31.5336
    }).wait(1).to({
      graphics: mask_graphics_5,
      x: -14.0418,
      y: 32.8643
    }).wait(1).to({
      graphics: mask_graphics_6,
      x: -12.7158,
      y: 34.195
    }).wait(1).to({
      graphics: mask_graphics_7,
      x: -11.3899,
      y: 35.5257
    }).wait(1).to({
      graphics: mask_graphics_8,
      x: -10.0639,
      y: 36.8564
    }).wait(1).to({
      graphics: mask_graphics_9,
      x: -8.738,
      y: 38.1871
    }).wait(1).to({
      graphics: mask_graphics_10,
      x: -7.412,
      y: 39.5178
    }).wait(1).to({
      graphics: mask_graphics_11,
      x: -6.0861,
      y: 40.8485
    }).wait(1).to({
      graphics: mask_graphics_12,
      x: -4.7601,
      y: 42.1792
    }).wait(1).to({
      graphics: mask_graphics_13,
      x: -3.4341,
      y: 43.5099
    }).wait(1).to({
      graphics: mask_graphics_14,
      x: -2.1082,
      y: 44.8406
    }).wait(1).to({
      graphics: mask_graphics_15,
      x: -0.7822,
      y: 46.1713
    }).wait(1).to({
      graphics: mask_graphics_16,
      x: 0.5437,
      y: 47.502
    }).wait(1).to({
      graphics: mask_graphics_17,
      x: 1.8697,
      y: 48.8327
    }).wait(1).to({
      graphics: mask_graphics_18,
      x: 3.1956,
      y: 50.1634
    }).wait(1).to({
      graphics: mask_graphics_19,
      x: 4.5216,
      y: 51.4941
    }).wait(1).to({
      graphics: mask_graphics_20,
      x: 5.9041,
      y: 52.8814
    }).wait(1).to({
      graphics: mask_graphics_21,
      x: 6.9045,
      y: 53.8788
    }).wait(1).to({
      graphics: mask_graphics_22,
      x: 7.9053,
      y: 54.8766
    }).wait(1).to({
      graphics: mask_graphics_23,
      x: 8.9061,
      y: 55.8744
    }).wait(1).to({
      graphics: mask_graphics_24,
      x: 9.9069,
      y: 56.8722
    }).wait(1).to({
      graphics: mask_graphics_25,
      x: 10.9076,
      y: 57.87
    }).wait(1).to({
      graphics: mask_graphics_26,
      x: 11.9084,
      y: 58.8678
    }).wait(1).to({
      graphics: mask_graphics_27,
      x: 12.9092,
      y: 59.8656
    }).wait(1).to({
      graphics: mask_graphics_28,
      x: 13.91,
      y: 60.8634
    }).wait(1).to({
      graphics: mask_graphics_29,
      x: 14.9108,
      y: 61.8612
    }).wait(1).to({
      graphics: mask_graphics_30,
      x: 15.9115,
      y: 62.859
    }).wait(1).to({
      graphics: mask_graphics_31,
      x: 16.9123,
      y: 63.8568
    }).wait(1).to({
      graphics: mask_graphics_32,
      x: 17.9131,
      y: 64.8546
    }).wait(1).to({
      graphics: mask_graphics_33,
      x: 18.9139,
      y: 65.8524
    }).wait(1).to({
      graphics: mask_graphics_34,
      x: 19.9146,
      y: 66.8502
    }).wait(1).to({
      graphics: mask_graphics_35,
      x: 20.9154,
      y: 67.848
    }).wait(1).to({
      graphics: mask_graphics_36,
      x: 21.8188,
      y: 68.8897
    }).wait(1).to({
      graphics: mask_graphics_37,
      x: 23.1542,
      y: 70.2187
    }).wait(1).to({
      graphics: mask_graphics_38,
      x: 24.49,
      y: 71.5482
    }).wait(1).to({
      graphics: mask_graphics_39,
      x: 25.8259,
      y: 72.8777
    }).wait(1).to({
      graphics: mask_graphics_40,
      x: 27.1617,
      y: 74.2072
    }).wait(1).to({
      graphics: mask_graphics_41,
      x: 28.4976,
      y: 75.5367
    }).wait(1).to({
      graphics: mask_graphics_42,
      x: 29.8335,
      y: 76.8662
    }).wait(1).to({
      graphics: mask_graphics_43,
      x: 31.1693,
      y: 78.1956
    }).wait(1).to({
      graphics: mask_graphics_44,
      x: 32.5765,
      y: 79.455
    }).wait(46)); // Layer_2

    this.line2 = new lib.line2();
    this.line2.name = "line2";
    this.line2.parent = this;
    this.line2.setTransform(41.6, 76.7, 1, 1, 0, 0, 0, 41.6, 76.7);
    var maskedShapeInstanceList = [this.line2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.line2).wait(59).to({
      alpha: 0
    }, 30).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-3.2, -4.2, 87.7, 158.5);
  (lib.arrowLine15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // timeline functions:

    this.frame_149 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1)); // arrow

    this.arrowHead = new lib.arrowhead();
    this.arrowHead.name = "arrowHead";
    this.arrowHead.parent = this;
    this.arrowHead.setTransform(11.8, 11.55, 1, 1, 0, 0, 0, 14.1, 14.8);
    this.timeline.addTween(cjs.Tween.get(this.arrowHead).to({
      guide: {
        path: [11.9, 11.6, 17.6, 17.1, 23.3, 22.6, 47.2, 46, 51.5, 50.6, 57.5, 57, 60.6, 62.9, 64.5, 70.6, 64.5, 79.1, 64.5, 102.8, 64.5, 126.5, 64.5, 130.9, 65.3, 133.5, 66.4, 137, 69.5, 140.1, 80.2, 150.8, 91, 161.6],
        orient: 'auto'
      }
    }, 44).wait(76).to({
      x: 91.4,
      y: 162.05,
      alpha: 0
    }, 29).wait(1)); // Mask (mask)

    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p("Al7DPIJKpKICtCtIpKJKg");
    var mask_graphics_1 = new cjs.Graphics().p("AmIDBIJJpJIDIDIIpJJJg");
    var mask_graphics_2 = new cjs.Graphics().p("AmWCzIJJpJIDkDkIpJJJg");
    var mask_graphics_3 = new cjs.Graphics().p("AmkCmIJKpKID/D/IpKJKg");
    var mask_graphics_4 = new cjs.Graphics().p("AmyCYIJKpKIEbEbIpKJKg");
    var mask_graphics_5 = new cjs.Graphics().p("AnACKIJKpKIE3E3IpKJKg");
    var mask_graphics_6 = new cjs.Graphics().p("AnOB8IJKpKIFTFTIpKJKg");
    var mask_graphics_7 = new cjs.Graphics().p("AncBuIJKpKIFvFvIpKJKg");
    var mask_graphics_8 = new cjs.Graphics().p("AnqBgIJKpKIGLGLIpKJKg");
    var mask_graphics_9 = new cjs.Graphics().p("An4BSIJKpKIGnGnIpKJKg");
    var mask_graphics_10 = new cjs.Graphics().p("AoGBEIJKpKIHDHDIpKJKg");
    var mask_graphics_11 = new cjs.Graphics().p("AoTA2IJJpJIHeHeIpJJJg");
    var mask_graphics_12 = new cjs.Graphics().p("AohAoIJJpJIH6H6IpJJJg");
    var mask_graphics_13 = new cjs.Graphics().p("AovAbIJKpKIIVIVIpKJKg");
    var mask_graphics_14 = new cjs.Graphics().p("Ao9ANIJKpKIIxIxIpKJKg");
    var mask_graphics_15 = new cjs.Graphics().p("ApLAAIJLpLIJMJMIpLJLg");
    var mask_graphics_16 = new cjs.Graphics().p("ApZgOIJLpLIJoJoIpLJLg");
    var mask_graphics_17 = new cjs.Graphics().p("ApngcIJLpLIKEKEIpLJLg");
    var mask_graphics_18 = new cjs.Graphics().p("Ap1gqIJLpLIKgKgIpLJLg");
    var mask_graphics_19 = new cjs.Graphics().p("AqDg4IJLpLIK8K8IpLJLg");
    var mask_graphics_20 = new cjs.Graphics().p("AqQhGIJKpKILXLXIpKJKg");
    var mask_graphics_21 = new cjs.Graphics().p("AqehUIJKpKILzLzIpKJKg");
    var mask_graphics_22 = new cjs.Graphics().p("AqpheIJLpLIMIMIIpLJLg");
    var mask_graphics_23 = new cjs.Graphics().p("Aq0hpIJLpLIMeMeIpLJLg");
    var mask_graphics_24 = new cjs.Graphics().p("Aq+h0IJKpKIMzMzIpKJKg");
    var mask_graphics_25 = new cjs.Graphics().p("ArJh+IJLpLININIIpLJLg");
    var mask_graphics_26 = new cjs.Graphics().p("ArUiJIJLpLINeNeIpLJLg");
    var mask_graphics_27 = new cjs.Graphics().p("ArfiUIJLpLIN0N0IpLJLg");
    var mask_graphics_28 = new cjs.Graphics().p("ArpifIJKpKIOJOJIpKJKg");
    var mask_graphics_29 = new cjs.Graphics().p("Ar0ipIJLpLIOeOeIpLJLg");
    var mask_graphics_30 = new cjs.Graphics().p("Ar/i0IJLpLIO0O0IpLJLg");
    var mask_graphics_31 = new cjs.Graphics().p("AsJi/IJKpKIPJPJIpKJKg");
    var mask_graphics_32 = new cjs.Graphics().p("AsUjJIJLpLIPePeIpLJLg");
    var mask_graphics_33 = new cjs.Graphics().p("AsfjUIJLpLIP0P0IpLJLg");
    var mask_graphics_34 = new cjs.Graphics().p("AsqjfIJLpLIQKQKIpLJLg");
    var mask_graphics_35 = new cjs.Graphics().p("As3jsIJLpLIQkQkIpLJLg");
    var mask_graphics_36 = new cjs.Graphics().p("AtEj5IJLpLIQ+Q+IpLJLg");
    var mask_graphics_37 = new cjs.Graphics().p("AtRkHIJKpKIRZRZIpKJKg");
    var mask_graphics_38 = new cjs.Graphics().p("AtgkVIJLpLIR2R2IpLJLg");
    var mask_graphics_39 = new cjs.Graphics().p("AtukjIJLpLISSSSIpLJLg");
    var mask_graphics_40 = new cjs.Graphics().p("At8kxIJLpLISuSuIpLJLg");
    var mask_graphics_41 = new cjs.Graphics().p("AuKk/IJLpLITKTKIpLJLg");
    var mask_graphics_42 = new cjs.Graphics().p("AuYlOIJKpKITnTnIpKJKg");
    var mask_graphics_43 = new cjs.Graphics().p("AunlcIJLpLIUEUEIpLJLg");
    var mask_graphics_44 = new cjs.Graphics().p("Au1lqIJLpLIUgUgIpLJLg");
    this.timeline.addTween(cjs.Tween.get(mask).to({
      graphics: mask_graphics_0,
      x: -20.6715,
      y: 26.2109
    }).wait(1).to({
      graphics: mask_graphics_1,
      x: -19.2794,
      y: 27.6051
    }).wait(1).to({
      graphics: mask_graphics_2,
      x: -17.8873,
      y: 28.9993
    }).wait(1).to({
      graphics: mask_graphics_3,
      x: -16.4951,
      y: 30.3936
    }).wait(1).to({
      graphics: mask_graphics_4,
      x: -15.103,
      y: 31.7879
    }).wait(1).to({
      graphics: mask_graphics_5,
      x: -13.7108,
      y: 33.1822
    }).wait(1).to({
      graphics: mask_graphics_6,
      x: -12.3187,
      y: 34.5765
    }).wait(1).to({
      graphics: mask_graphics_7,
      x: -10.9266,
      y: 35.9708
    }).wait(1).to({
      graphics: mask_graphics_8,
      x: -9.5344,
      y: 37.365
    }).wait(1).to({
      graphics: mask_graphics_9,
      x: -8.1423,
      y: 38.7593
    }).wait(1).to({
      graphics: mask_graphics_10,
      x: -6.7501,
      y: 40.1536
    }).wait(1).to({
      graphics: mask_graphics_11,
      x: -5.358,
      y: 41.5479
    }).wait(1).to({
      graphics: mask_graphics_12,
      x: -3.9658,
      y: 42.9422
    }).wait(1).to({
      graphics: mask_graphics_13,
      x: -2.5737,
      y: 44.3365
    }).wait(1).to({
      graphics: mask_graphics_14,
      x: -1.1816,
      y: 45.7307
    }).wait(1).to({
      graphics: mask_graphics_15,
      x: 0.2106,
      y: 47.125
    }).wait(1).to({
      graphics: mask_graphics_16,
      x: 1.6027,
      y: 48.5193
    }).wait(1).to({
      graphics: mask_graphics_17,
      x: 2.9949,
      y: 49.9136
    }).wait(1).to({
      graphics: mask_graphics_18,
      x: 4.387,
      y: 51.3079
    }).wait(1).to({
      graphics: mask_graphics_19,
      x: 5.7792,
      y: 52.7021
    }).wait(1).to({
      graphics: mask_graphics_20,
      x: 7.1713,
      y: 54.0964
    }).wait(1).to({
      graphics: mask_graphics_21,
      x: 8.6041,
      y: 55.5314
    }).wait(1).to({
      graphics: mask_graphics_22,
      x: 9.6767,
      y: 56.6043
    }).wait(1).to({
      graphics: mask_graphics_23,
      x: 10.7496,
      y: 57.6776
    }).wait(1).to({
      graphics: mask_graphics_24,
      x: 11.8225,
      y: 58.7509
    }).wait(1).to({
      graphics: mask_graphics_25,
      x: 12.8954,
      y: 59.8242
    }).wait(1).to({
      graphics: mask_graphics_26,
      x: 13.9683,
      y: 60.8974
    }).wait(1).to({
      graphics: mask_graphics_27,
      x: 15.0412,
      y: 61.9707
    }).wait(1).to({
      graphics: mask_graphics_28,
      x: 16.1142,
      y: 63.044
    }).wait(1).to({
      graphics: mask_graphics_29,
      x: 17.1871,
      y: 64.1173
    }).wait(1).to({
      graphics: mask_graphics_30,
      x: 18.26,
      y: 65.1906
    }).wait(1).to({
      graphics: mask_graphics_31,
      x: 19.3329,
      y: 66.2639
    }).wait(1).to({
      graphics: mask_graphics_32,
      x: 20.4058,
      y: 67.3372
    }).wait(1).to({
      graphics: mask_graphics_33,
      x: 21.4787,
      y: 68.4104
    }).wait(1).to({
      graphics: mask_graphics_34,
      x: 22.4815,
      y: 69.5549
    }).wait(1).to({
      graphics: mask_graphics_35,
      x: 23.7944,
      y: 70.8866
    }).wait(1).to({
      graphics: mask_graphics_36,
      x: 25.1079,
      y: 72.2188
    }).wait(1).to({
      graphics: mask_graphics_37,
      x: 26.4106,
      y: 73.6815
    }).wait(1).to({
      graphics: mask_graphics_38,
      x: 27.8497,
      y: 75.1121
    }).wait(1).to({
      graphics: mask_graphics_39,
      x: 29.2893,
      y: 76.5432
    }).wait(1).to({
      graphics: mask_graphics_40,
      x: 30.7289,
      y: 77.9743
    }).wait(1).to({
      graphics: mask_graphics_41,
      x: 32.1685,
      y: 79.4054
    }).wait(1).to({
      graphics: mask_graphics_42,
      x: 33.6081,
      y: 80.8365
    }).wait(1).to({
      graphics: mask_graphics_43,
      x: 35.0477,
      y: 82.2676
    }).wait(1).to({
      graphics: mask_graphics_44,
      x: 36.4544,
      y: 83.3829
    }).wait(106)); // line_copy

    this.instance = new lib.line1();
    this.instance.parent = this;
    this.instance.setTransform(45.35, 80.8, 0.9999, 1, 0, 0, 0, 44.9, 80.8);
    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({
      regX: 45.5,
      scaleX: 1,
      x: 45.5
    }, 0).to({
      alpha: 0
    }, 29).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-3.2, -4.2, 95.9, 166.89999999999998);
  (lib.arrowLine14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // timeline functions:

    this.frame_128 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).wait(128).call(this.frame_128).wait(1)); // arrow

    this.arrowHead = new lib.arrowhead();
    this.arrowHead.name = "arrowHead";
    this.arrowHead.parent = this;
    this.arrowHead.setTransform(11.8, 11.55, 1, 1, 0, 0, 0, 14.1, 14.8);
    this.timeline.addTween(cjs.Tween.get(this.arrowHead).to({
      guide: {
        path: [11.9, 11.6, 17.6, 17.1, 23.3, 22.6, 47.2, 46, 51.5, 50.6, 57.5, 57, 60.6, 62.9, 64.5, 70.6, 64.5, 79.1, 64.5, 102.8, 64.5, 126.5, 64.5, 130.9, 65.3, 133.5, 66.4, 137, 69.5, 140.1, 80.2, 150.8, 91, 161.6],
        orient: 'auto'
      }
    }, 44).wait(55).to({
      x: 91.4,
      y: 162.05,
      alpha: 0
    }, 29).wait(1)); // Mask (mask)

    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p("Al7DPIJKpKICtCtIpKJKg");
    var mask_graphics_1 = new cjs.Graphics().p("AmIDBIJJpJIDIDIIpJJJg");
    var mask_graphics_2 = new cjs.Graphics().p("AmWCzIJJpJIDkDkIpJJJg");
    var mask_graphics_3 = new cjs.Graphics().p("AmkCmIJKpKID/D/IpKJKg");
    var mask_graphics_4 = new cjs.Graphics().p("AmyCYIJKpKIEbEbIpKJKg");
    var mask_graphics_5 = new cjs.Graphics().p("AnACKIJKpKIE3E3IpKJKg");
    var mask_graphics_6 = new cjs.Graphics().p("AnOB8IJKpKIFTFTIpKJKg");
    var mask_graphics_7 = new cjs.Graphics().p("AncBuIJKpKIFvFvIpKJKg");
    var mask_graphics_8 = new cjs.Graphics().p("AnqBgIJKpKIGLGLIpKJKg");
    var mask_graphics_9 = new cjs.Graphics().p("An4BSIJKpKIGnGnIpKJKg");
    var mask_graphics_10 = new cjs.Graphics().p("AoGBEIJKpKIHDHDIpKJKg");
    var mask_graphics_11 = new cjs.Graphics().p("AoTA2IJJpJIHeHeIpJJJg");
    var mask_graphics_12 = new cjs.Graphics().p("AohAoIJJpJIH6H6IpJJJg");
    var mask_graphics_13 = new cjs.Graphics().p("AovAbIJKpKIIVIVIpKJKg");
    var mask_graphics_14 = new cjs.Graphics().p("Ao9ANIJKpKIIxIxIpKJKg");
    var mask_graphics_15 = new cjs.Graphics().p("ApLAAIJLpLIJMJMIpLJLg");
    var mask_graphics_16 = new cjs.Graphics().p("ApZgOIJLpLIJoJoIpLJLg");
    var mask_graphics_17 = new cjs.Graphics().p("ApngcIJLpLIKEKEIpLJLg");
    var mask_graphics_18 = new cjs.Graphics().p("Ap1gqIJLpLIKgKgIpLJLg");
    var mask_graphics_19 = new cjs.Graphics().p("AqDg4IJLpLIK8K8IpLJLg");
    var mask_graphics_20 = new cjs.Graphics().p("AqQhGIJKpKILXLXIpKJKg");
    var mask_graphics_21 = new cjs.Graphics().p("AqehUIJKpKILzLzIpKJKg");
    var mask_graphics_22 = new cjs.Graphics().p("AqpheIJLpLIMIMIIpLJLg");
    var mask_graphics_23 = new cjs.Graphics().p("Aq0hpIJLpLIMeMeIpLJLg");
    var mask_graphics_24 = new cjs.Graphics().p("Aq+h0IJKpKIMzMzIpKJKg");
    var mask_graphics_25 = new cjs.Graphics().p("ArJh+IJLpLININIIpLJLg");
    var mask_graphics_26 = new cjs.Graphics().p("ArUiJIJLpLINeNeIpLJLg");
    var mask_graphics_27 = new cjs.Graphics().p("ArfiUIJLpLIN0N0IpLJLg");
    var mask_graphics_28 = new cjs.Graphics().p("ArpifIJKpKIOJOJIpKJKg");
    var mask_graphics_29 = new cjs.Graphics().p("Ar0ipIJLpLIOeOeIpLJLg");
    var mask_graphics_30 = new cjs.Graphics().p("Ar/i0IJLpLIO0O0IpLJLg");
    var mask_graphics_31 = new cjs.Graphics().p("AsJi/IJKpKIPJPJIpKJKg");
    var mask_graphics_32 = new cjs.Graphics().p("AsUjJIJLpLIPePeIpLJLg");
    var mask_graphics_33 = new cjs.Graphics().p("AsfjUIJLpLIP0P0IpLJLg");
    var mask_graphics_34 = new cjs.Graphics().p("AsqjfIJLpLIQKQKIpLJLg");
    var mask_graphics_35 = new cjs.Graphics().p("As3jsIJLpLIQkQkIpLJLg");
    var mask_graphics_36 = new cjs.Graphics().p("AtEj5IJLpLIQ+Q+IpLJLg");
    var mask_graphics_37 = new cjs.Graphics().p("AtRkHIJKpKIRZRZIpKJKg");
    var mask_graphics_38 = new cjs.Graphics().p("AtgkVIJLpLIR2R2IpLJLg");
    var mask_graphics_39 = new cjs.Graphics().p("AtukjIJLpLISSSSIpLJLg");
    var mask_graphics_40 = new cjs.Graphics().p("At8kxIJLpLISuSuIpLJLg");
    var mask_graphics_41 = new cjs.Graphics().p("AuKk/IJLpLITKTKIpLJLg");
    var mask_graphics_42 = new cjs.Graphics().p("AuYlOIJKpKITnTnIpKJKg");
    var mask_graphics_43 = new cjs.Graphics().p("AunlcIJLpLIUEUEIpLJLg");
    var mask_graphics_44 = new cjs.Graphics().p("Au1lqIJLpLIUgUgIpLJLg");
    this.timeline.addTween(cjs.Tween.get(mask).to({
      graphics: mask_graphics_0,
      x: -20.6715,
      y: 26.2109
    }).wait(1).to({
      graphics: mask_graphics_1,
      x: -19.2794,
      y: 27.6051
    }).wait(1).to({
      graphics: mask_graphics_2,
      x: -17.8873,
      y: 28.9993
    }).wait(1).to({
      graphics: mask_graphics_3,
      x: -16.4951,
      y: 30.3936
    }).wait(1).to({
      graphics: mask_graphics_4,
      x: -15.103,
      y: 31.7879
    }).wait(1).to({
      graphics: mask_graphics_5,
      x: -13.7108,
      y: 33.1822
    }).wait(1).to({
      graphics: mask_graphics_6,
      x: -12.3187,
      y: 34.5765
    }).wait(1).to({
      graphics: mask_graphics_7,
      x: -10.9266,
      y: 35.9708
    }).wait(1).to({
      graphics: mask_graphics_8,
      x: -9.5344,
      y: 37.365
    }).wait(1).to({
      graphics: mask_graphics_9,
      x: -8.1423,
      y: 38.7593
    }).wait(1).to({
      graphics: mask_graphics_10,
      x: -6.7501,
      y: 40.1536
    }).wait(1).to({
      graphics: mask_graphics_11,
      x: -5.358,
      y: 41.5479
    }).wait(1).to({
      graphics: mask_graphics_12,
      x: -3.9658,
      y: 42.9422
    }).wait(1).to({
      graphics: mask_graphics_13,
      x: -2.5737,
      y: 44.3365
    }).wait(1).to({
      graphics: mask_graphics_14,
      x: -1.1816,
      y: 45.7307
    }).wait(1).to({
      graphics: mask_graphics_15,
      x: 0.2106,
      y: 47.125
    }).wait(1).to({
      graphics: mask_graphics_16,
      x: 1.6027,
      y: 48.5193
    }).wait(1).to({
      graphics: mask_graphics_17,
      x: 2.9949,
      y: 49.9136
    }).wait(1).to({
      graphics: mask_graphics_18,
      x: 4.387,
      y: 51.3079
    }).wait(1).to({
      graphics: mask_graphics_19,
      x: 5.7792,
      y: 52.7021
    }).wait(1).to({
      graphics: mask_graphics_20,
      x: 7.1713,
      y: 54.0964
    }).wait(1).to({
      graphics: mask_graphics_21,
      x: 8.6041,
      y: 55.5314
    }).wait(1).to({
      graphics: mask_graphics_22,
      x: 9.6767,
      y: 56.6043
    }).wait(1).to({
      graphics: mask_graphics_23,
      x: 10.7496,
      y: 57.6776
    }).wait(1).to({
      graphics: mask_graphics_24,
      x: 11.8225,
      y: 58.7509
    }).wait(1).to({
      graphics: mask_graphics_25,
      x: 12.8954,
      y: 59.8242
    }).wait(1).to({
      graphics: mask_graphics_26,
      x: 13.9683,
      y: 60.8974
    }).wait(1).to({
      graphics: mask_graphics_27,
      x: 15.0412,
      y: 61.9707
    }).wait(1).to({
      graphics: mask_graphics_28,
      x: 16.1142,
      y: 63.044
    }).wait(1).to({
      graphics: mask_graphics_29,
      x: 17.1871,
      y: 64.1173
    }).wait(1).to({
      graphics: mask_graphics_30,
      x: 18.26,
      y: 65.1906
    }).wait(1).to({
      graphics: mask_graphics_31,
      x: 19.3329,
      y: 66.2639
    }).wait(1).to({
      graphics: mask_graphics_32,
      x: 20.4058,
      y: 67.3372
    }).wait(1).to({
      graphics: mask_graphics_33,
      x: 21.4787,
      y: 68.4104
    }).wait(1).to({
      graphics: mask_graphics_34,
      x: 22.4815,
      y: 69.5549
    }).wait(1).to({
      graphics: mask_graphics_35,
      x: 23.7944,
      y: 70.8866
    }).wait(1).to({
      graphics: mask_graphics_36,
      x: 25.1079,
      y: 72.2188
    }).wait(1).to({
      graphics: mask_graphics_37,
      x: 26.4106,
      y: 73.6815
    }).wait(1).to({
      graphics: mask_graphics_38,
      x: 27.8497,
      y: 75.1121
    }).wait(1).to({
      graphics: mask_graphics_39,
      x: 29.2893,
      y: 76.5432
    }).wait(1).to({
      graphics: mask_graphics_40,
      x: 30.7289,
      y: 77.9743
    }).wait(1).to({
      graphics: mask_graphics_41,
      x: 32.1685,
      y: 79.4054
    }).wait(1).to({
      graphics: mask_graphics_42,
      x: 33.6081,
      y: 80.8365
    }).wait(1).to({
      graphics: mask_graphics_43,
      x: 35.0477,
      y: 82.2676
    }).wait(1).to({
      graphics: mask_graphics_44,
      x: 36.4544,
      y: 83.3829
    }).wait(85)); // line_copy

    this.instance = new lib.line1();
    this.instance.parent = this;
    this.instance.setTransform(45.35, 80.8, 0.9999, 1, 0, 0, 0, 44.9, 80.8);
    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({
      regX: 45.5,
      scaleX: 1,
      x: 45.5
    }, 0).to({
      alpha: 0
    }, 29).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-3.2, -4.2, 95.9, 166.89999999999998);
  (lib.linesShort = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {
      "loop": 0
    }); // Layer_5

    this.instance = new lib.CachedTexturedBitmap_6();
    this.instance.parent = this;
    this.instance.setTransform(316.6, -5.1, 0.3268, 0.3268);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(151)); // Layer_4

    this.instance_1 = new lib.arrowLine22();
    this.instance_1.parent = this;
    this.instance_1.setTransform(37.05, 48.35, 1, 1, 0, -89.9948, 90.0052, 16.9, 75.4);
    this.instance_1._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({
      _off: false
    }, 0).wait(92)); // Layer_3

    this.instance_2 = new lib.arrowLine23();
    this.instance_2.parent = this;
    this.instance_2.setTransform(-2.95, 86.8, 1, 1, 0, 0, 0, 16.9, 75.4);
    this.instance_2._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({
      _off: false
    }, 0).wait(112)); // Layer_2

    this.line2 = new lib.arrowLine14();
    this.line2.name = "line2";
    this.line2.parent = this;
    this.line2.setTransform(34.3, 99.5, 1, 1, 0, -89.9948, 90.0052, 45.5, 80.8);
    this.line2._off = true;
    this.timeline.addTween(cjs.Tween.get(this.line2).wait(19).to({
      _off: false
    }, 0).wait(132)); // Layer_1

    this.line1 = new lib.arrowLine15();
    this.line1.name = "line1";
    this.line1.parent = this;
    this.line1.setTransform(47.8, 84.05, 1, 1, 0, 0, 0, 45.5, 80.8);
    this.line1._off = true;
    this.timeline.addTween(cjs.Tween.get(this.line1).wait(1).to({
      _off: false
    }, 0).wait(150));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-78.5, -27.2, 428.1, 192.89999999999998); // stage content:

  (lib.Rackspace_Responsive_Hero = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // big_R

    this.bigR = new lib.bigR();
    this.bigR.name = "bigR";
    this.bigR.parent = this;
    this.bigR.setTransform(852.45, 62.05, 0.5399, 0.5399, 0, 0, 0, 422.8, 142.8);
    this.timeline.addTween(cjs.Tween.get(this.bigR).wait(1)); // Maze

    this.instance = new lib.BigMaze();
    this.instance.parent = this;
    this.instance.setTransform(37.9, -71.2, 1.9799, 1.9799, 0, 0, 0, 1.9, 5.8);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1)); // GradientNew

    this.instance_1 = new lib.CachedTexturedBitmap_1();
    this.instance_1.parent = this;
    this.instance_1.setTransform(-71.55, -178.05, 0.5, 0.5);
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1)); // lines

    this.lines = new lib.linesShort();
    this.lines.name = "lines";
    this.lines.parent = this;
    this.lines.setTransform(731.95, 212.2, 1.5298, 1.5298, -45, 0, 0, -0.3, -0.4);
    this.timeline.addTween(cjs.Tween.get(this.lines).wait(1)); // redBackground

    this.redBackground = new lib.redBackground();
    this.redBackground.name = "redBackground";
    this.redBackground.parent = this;
    this.redBackground.setTransform(359.75, 1499.95, 2.3983, 4.9999, 0, 0, 0, 150, 300);
    this.timeline.addTween(cjs.Tween.get(this.redBackground).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(334.5, 46.9, 1411.3, 1031.6); // library properties:

  lib.properties = {
    id: 'FF90356E37774263BEECADE0FD6FAEEB',
    width: 1440,
    height: 450,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.00,
    manifest: animation_manifest || [],
    preloads: []
  }; // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };

  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };

  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };

  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
  };

  p.getDuration = function () {
    return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
  };

  p.getTimelinePosition = function () {
    return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];

  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);

    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions['FF90356E37774263BEECADE0FD6FAEEB'] = {
    getStage: function getStage() {
      return exportRoot.getStage();
    },
    getLibrary: function getLibrary() {
      return lib;
    },
    getSpriteSheet: function getSpriteSheet() {
      return ss;
    },
    getImages: function getImages() {
      return img;
    }
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);

    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
    var lastW,
        lastH,
        lastS = 1;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function resizeCanvas() {
      var w = lib.properties.width,
          h = lib.properties.height;
      var iw = window.innerWidth,
          ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
          xRatio = iw / w,
          yRatio = ih / h,
          sRatio = 1;

      if (isResp) {
        if (respDim == 'width' && lastW == iw || respDim == 'height' && lastH == ih) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }

      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + 'px';
        container.style.height = h * sRatio + 'px';
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});

var createjs, AdobeAn;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function bannerAnimationInit() {
  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  var comp = AdobeAn.getComposition("FF90356E37774263BEECADE0FD6FAEEB");
  var lib = comp.getLibrary();
  createjs.MotionGuidePlugin.install();
  var loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", function (evt) {
    handleFileLoad(evt, comp);
  });
  loader.addEventListener("complete", function (evt) {
    handleComplete(evt, comp);
  });
  var lib = comp.getLibrary();
  loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt, comp) {
  var images = comp.getImages();

  if (evt && evt.item.type == "image") {
    images[evt.item.id] = evt.result;
  }
}

function handleComplete(evt, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  var queue = evt.target;
  var ssMetadata = lib.ssMetadata;

  for (i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
      "images": [queue.getResult(ssMetadata[i].name)],
      "frames": ssMetadata[i].frames
    });
  }

  exportRoot = new lib.Rackspace_Responsive_Hero();
  stage = new lib.Stage(canvas); //Registers the "tick" event listener.

  fnStartAnimation = function fnStartAnimation() {
    stage.addChild(exportRoot);
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
  }; //Code to support hidpi screens and responsive scaling.


  AdobeAn.makeResponsive(true, 'both', true, 1, [canvas, anim_container, dom_overlay_container]);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}

bannerAnimationInit();