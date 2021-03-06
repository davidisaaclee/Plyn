define([ 'core/signals'
        , 'core/actions'
        , 'core/arrow'
        , 'core/datatypes'
        , 'core/data'
        , 'core/obj'
        , 'core/scene'
        , 'core/behavior/arrow-node'
        , 'core/behavior/behavior'
        , 'core/util/std-signals'
        , 'arrows/std-arrows'
        , 'modules/transform'
        , 'modules/geometry'
        , 'modules/time'
        , 'modules/mouse'
        , 'util/vector2'
        , 'util/objutil'
        , 'physicsjs'
        , 'physics/behaviors/transform'
        , 'physics/bodies/objbody'
        , 'physicsjs/bodies/rectangle'
        , 'physicsjs/geometries/rectangle'
        // , 'modules/osc-output'
        ], function ( Signal, Action, Arrow, Datatype, 
                      Data, Obj, Scene, ArrowNode, Behavior, 
                      StdSignals, StdArrows, Transform, Geometry, 
                      Time, Mouse, Vector2, ObjUtil, Physics
                      // , OscOutput,
                    ) {
  var scene = new Scene.Scene();
  var obj = scene.addObject('Box object');
  var circleObj = scene.addObject('Circle object');
  var inputsObj = scene.addObject('Inputs');
  var outputsObj = scene.addObject('OSC');
  // var circle = scene.addObject('Circle object');

  var geom = new Geometry.Rect(obj);
  var xform = new Transform(obj);

  var geomCircle = new Geometry.Circle(circleObj);
  var xformCircle = new Transform(circleObj);

  var maus = new Mouse(inputsObj);
  var time = new Time(inputsObj);

  // var oscOut1 = new OscOutput(outputsObj, 'x');
  // var oscOut2 = new OscOutput(outputsObj, 'y');
  // var oscOut3 = new OscOutput(outputsObj, 'wave');
  // var oscOut3 = new OscOutput(outputsObj, 'x_circle');
  // var oscOut3 = new OscOutput(outputsObj, 'y_circle');


  // ------- START SUPER SIMPLE BEHAVIOR ------- //

  // var superSimple = Behavior.Behavior('Super simple');
  // scene.addBehavior(superSimple);

  // var ssMouseInput = ArrowNode.InputNode(maus.signals.Mouse.position);
  // var ssPositionOutput = ArrowNode.OutputNode(xform.signals.Transform.position);

  // superSimple.addNode(ssMouseInput)
  //            .addNode(ssPositionOutput);

  // superSimple.connect(ssMouseInput, { node: ssPositionOutput, inlet: 0 });

  // ------- START SAMPLE BEHAVIOR ------- //

  // var sampleBeh = Behavior.Behavior('Sample behavior');
  // scene.addBehavior(sampleBeh);

  // var smplMouseInput = ArrowNode.InputNode(maus.signals.Mouse.position);
  // var smplSample = ArrowNode.ArrowNode(StdArrows.sampleOn);
  // var smplClock = ArrowNode.InputNode(StdSignals.clock(500));
  // var smplPositionOutput = ArrowNode.OutputNode(xform.signals.Transform.position);

  // sampleBeh.addNode(smplMouseInput)
  //          .addNode(smplSample)
  //          .addNode(smplClock)
  //          .addNode(smplPositionOutput);

  // sampleBeh.connect(smplMouseInput, { node: smplSample, inlet: 1 });
  // sampleBeh.connect(smplClock, { node: smplSample, inlet: 0 });
  // sampleBeh.connect(smplSample, { node: smplPositionOutput, inlet: 0 });

  // ------- START MOVE BOX BEHAVIOR ------- //

  // var moveBoxBehavior = Behavior.Behavior('Move box');
  // scene.addBehavior(moveBoxBehavior);

  // var timeInputNode = ArrowNode.InputNode(time.signals.Time.current);
  // var scaleAndWrap = ArrowNode.ArrowNode(StdArrows.numberExpression()
  //                                                 .setParameter('expression', function (v) {
  //   return (v / 100.0) % (6.282 * 100);
  // }));
  // var sinu = ArrowNode.ArrowNode(StdArrows.numberExpression()
  //                                         .setParameter('expression', function (v) {
  //   var r = Math.sin(v) * 300;
  //   // console.log(r);
  //   return r;
  // }));

  // var mergeNode = ArrowNode.ArrowNode(StdArrows.merge);
  // var justVectors = ArrowNode.ArrowNode(StdArrows.matchType()
  //                                                .setParameter('type', Vector2.type)
  //                                                .setParameter('defaultValue', Vector2.Vector2 (Data.Number (0)) 
  //                                                                                              (Data.Number (0))));
  // var justNumbers = ArrowNode.ArrowNode(StdArrows.matchType()
  //                                                .setParameter('type', Datatype.Number)
  //                                                .setParameter('defaultValue', Data.Number (0)));

  // var getX = ArrowNode.ArrowNode(StdArrows.fieldAccess().setParameter('field id', 'x'));
  // var getY = ArrowNode.ArrowNode(StdArrows.fieldAccess().setParameter('field id', 'y'));

  // var buildVec = ArrowNode.ArrowNode(StdArrows.buildRecord().setParameter('record type', Vector2.type));
  // var sum = ArrowNode.ArrowNode(StdArrows.numberExpression().setParameter('expression', function (v1, v2) { 
  //   return v1 + v2;
  // }));

  // var outputPosition = ArrowNode.OutputNode(xform.signals.Transform.position);
  // var mouseInput = ArrowNode.InputNode(maus.signals.Mouse.position);

  // moveBoxBehavior.addNode(timeInputNode);
  // moveBoxBehavior.addNode(scaleAndWrap);
  // moveBoxBehavior.addNode(sinu);
  // moveBoxBehavior.addNode(mergeNode);
  // moveBoxBehavior.addNode(justVectors);
  // moveBoxBehavior.addNode(justNumbers);
  // moveBoxBehavior.addNode(getX);
  // moveBoxBehavior.addNode(getY);
  // moveBoxBehavior.addNode(buildVec);
  // moveBoxBehavior.addNode(sum);
  // moveBoxBehavior.addNode(outputPosition);
  // moveBoxBehavior.addNode(mouseInput);

  // moveBoxBehavior.connect(timeInputNode, { node: scaleAndWrap, inlet: 0 });
  // moveBoxBehavior.connect(scaleAndWrap,  { node: sinu, inlet: 0 });

  // moveBoxBehavior.connect(sinu, { node: mergeNode, inlet: 0 });
  // moveBoxBehavior.connect(mouseInput, { node: mergeNode, inlet: 1 });

  // moveBoxBehavior.connect(mergeNode, { node: justVectors, inlet: 0 });
  // moveBoxBehavior.connect(mergeNode, { node: justNumbers, inlet: 0 });

  // moveBoxBehavior.connect(justVectors, { node: getX, inlet: 0 });
  // moveBoxBehavior.connect(justNumbers, { node: sum, inlet: 0 });

  // moveBoxBehavior.connect(getX, { node: sum, inlet: 1 });

  // moveBoxBehavior.connect(justVectors, { node: getY, inlet: 0 });

  // moveBoxBehavior.connect(sum, { node: buildVec, inlet: 0 });
  // moveBoxBehavior.connect(getY, { node: buildVec, inlet: 1 });

  // moveBoxBehavior.connect(buildVec, { node: outputPosition, inlet: 0 }); 

  // Signal.subscribe(mouseInput.signal, function (v) {
  //   console.log('this one', 
  //               xform.signals.Transform.position.current.val.x.val, 
  //               xform.signals.Transform.position.current.val.y.val);
  //   Signal.push(xform.signals.Transform.position, v);
  // });

  // ------- END MOVE BOX BEHAVIOR ------- //



  // var countMouseBehavior = Behavior.Behavior('Count mouse presses');
  // scene.addBehavior(countMouseBehavior);

  // var foldSum = ArrowNode.ArrowNode(StdArrows.foldp()
  //                                            .setParameter('initialState', Data.Number(0)) 
  //                                            .setParameter('returnType', Datatype.Number) 
  //                                            .setParameter('transitionFunction', function (v, acc) {
  //                                                                return Data.Number (v.val + acc.val);
  //                                                              }));
  // var boolToNum = ArrowNode.ArrowNode(Arrow.EventArrow('boolToNum', [], [ Datatype.Boolean ], Datatype.Number, function (v) {
  //   if (v.val) {
  //     return Data.Number (1);
  //   } else {
  //     return Data.Number (0);
  //   }
  // }));
  // var filterRepeats = ArrowNode.ArrowNode(StdArrows.filterRepeats);
  // var mouseDownInput = ArrowNode.InputNode(maus.signals.Mouse.down);
  // var mouseCountSig = Signal.Signal(Datatype.Number);
  // var mouseCount = ArrowNode.OutputNode(mouseCountSig);

  // countMouseBehavior.addNode(foldSum);
  // countMouseBehavior.addNode(boolToNum);
  // countMouseBehavior.addNode(filterRepeats);
  // countMouseBehavior.addNode(mouseDownInput);
  // countMouseBehavior.addNode(mouseCount);

  // Signal.subscribe(mouseCountSig, function (v) {
  //   console.log('Mouse clicked ' + v.val + ' times');
  // });

  // countMouseBehavior.connect(mouseDownInput, { node: boolToNum, inlet: 0 });
  // countMouseBehavior.connect(boolToNum, { node: foldSum, inlet: 0 });
  // countMouseBehavior.connect(foldSum, { node: filterRepeats, inlet: 0 });
  // countMouseBehavior.connect(filterRepeats, { node: mouseCount, inlet: 0 });

  // var accessX = StdArrows.fieldAccess().setParameter('field id', 'x').plug(maus.signals.Mouse.position);
  // var simpleBehavior = Behavior.Behavior('Simple', [ ArrowNode.InputNode(accessX.signal) ]);
  // scene.addBehavior(simpleBehavior);




  // ------- START RECURSIVE BEHAVIOR ------- //

  // var recursive = Behavior.Behavior('Recursive nudge');
  // scene.addBehavior(recursive);

  // var mouseInput2 = ArrowNode.InputNode(maus.signals.Mouse.position, {name: 'Mouse input'});
  // var positionInput = ArrowNode.InputNode(xform.signals.Transform.position, {name: 'Position input'});
  // var positionOutput2 = ArrowNode.OutputNode(xform.signals.Transform.position, {name: 'Position output'});

  // var recClock = ArrowNode.InputNode(StdSignals.clock(1), {name: 'Clock'});
  // var sampleOn1 = ArrowNode.ArrowNode(StdArrows.sampleOn, {name: 'Position sample'});
  // var sampleOn2 = ArrowNode.ArrowNode(StdArrows.sampleOn, {name: 'Mouse sample'});

  // var vecDiffArrow = StdArrows.vectorExpression().setParameter('expression', function (vec1, vec2) {
  //   return {
  //     x: vec2.x - vec1.x,
  //     y: vec2.y - vec1.y
  //   };
  // });
  // var vecDiff = ArrowNode.ArrowNode(vecDiffArrow, {name: 'Vector diff'});

  // var vecScaleArrow = StdArrows.vectorExpression().setParameter('expression', function (vec) {
  //   return {
  //     x: vec.x * -0.0000001,
  //     y: vec.y * -0.0000001
  //   };
  // });
  // var vecScale = ArrowNode.ArrowNode(vecScaleArrow, {name: 'Vector scale'});

  // var vecAddArrow = StdArrows.vectorExpression().setParameter('expression', function (vec1, vec2) {
  //   var result = {
  //     x: vec2.x + vec1.x,
  //     y: vec2.y + vec1.y
  //   };
  //   return result;
  // });
  // var vecAdd = ArrowNode.ArrowNode(vecAddArrow, {name: 'Vector add'});

  // recursive.addNode(mouseInput2)
  //          .addNode(positionInput)
  //          .addNode(positionOutput2)
  //          .addNode(recClock)
  //          .addNode(sampleOn1)
  //          .addNode(sampleOn2)
  //          .addNode(vecDiff)
  //          .addNode(vecScale)
  //          .addNode(vecAdd);

  // // recursive.connect(positionInput, {node: vecDiff, inlet: 0});
  // // recursive.connect(mouseInput2, {node: vecDiff, inlet: 1});
  // recursive.connect(recClock, {node: sampleOn1, inlet: 0});
  // recursive.connect(recClock, {node: sampleOn2, inlet: 0});
  // recursive.connect(positionInput, {node: sampleOn1, inlet: 1});
  // // recursive.connect(mouseInput2, {node: sampleOn2, inlet: 1});
  // recursive.connect(sampleOn1, {node: vecDiff, inlet: 0});
  // recursive.connect(mouseInput2, {node: vecDiff, inlet: 1});
  // recursive.connect(vecDiff, {node: vecScale, inlet: 0});
  // recursive.connect(vecScale, {node: vecAdd, inlet: 0});
  // recursive.connect(mouseInput2, {node: vecAdd, inlet: 1});
  // recursive.connect(vecAdd, {node: positionOutput2, inlet: 0});
  
  // ------- END RECURSIVE BEHAVIOR ------- //

  // ------- START SIMPLE RECURSIVE BEHAVIOR ------- //

  // var circleXform = new Transform(circle);
  // var circleGeom = new Geometry(circle);
  // var circleXform = new Transform(circle);

  // var sr = Behavior.Behavior('Simple recursive');
  // scene.addBehavior(sr);

  // var positionInputSR = ArrowNode.InputNode(xform.signals.Transform.position);
  // var positionOutputSR = ArrowNode.OutputNode(xform.signals.Transform.position);

  // var nudgeNode = ArrowNode.ArrowNode(StdArrows.vectorExpression()
  //                                              .setParameter('expression', function (vec) {
  //                                               console.log('received', vec);
  //                                                return {
  //                                                  x: vec.x + 1,
  //                                                  y: vec.y,
  //                                                }
  //                                              }));

  // sr.connect(positionInputSR, { node: nudgeNode, inlet: 0 });
  // sr.connect(nudgeNode, { node: positionOutputSR, inlet: 0 });

  // ------- END SIMPLE RECURSIVE BEHAVIOR ------- //


  // ------- START SANDBOX BEHAVIOR ------- //

  var sandboxBeh = Behavior.Behavior('Sandbox');
  scene.addBehavior(sandboxBeh);

  var sb_boxPosition    = ArrowNode.InputNode(xform.signals.Transform.position, {name: 'box pos'});
  var sb_circlePosition = ArrowNode.OutputNode(xformCircle.signals.Transform.position, {name: 'circle pos'});

  sandboxBeh.addNode(sb_boxPosition)
            .addNode(sb_circlePosition);
  
  // ------- END SANDBOX BEHAVIOR ------- //
  
  // ------- START SYMP BEHAVIOR ------- //

  var sineMvmt = Behavior.Behavior('Sine movement');
  scene.addBehavior(sineMvmt);

  var mouseInput2 = ArrowNode.InputNode(maus.signals.Mouse.position, {name: 'mouse input'});
  var timeInput = ArrowNode.InputNode(time.signals.Time.current, {name: 'time'});
  var positionOutput2 = ArrowNode.OutputNode(xform.signals.Transform.position, {name: 'position output'});

  var createSine = ArrowNode.ArrowNode(StdArrows.numberExpression()
                                                .setParameter('expression', function (t, amp) {
                                                  // return (amp - 500) * Math.sin(t / 100);
                                                  var freqMod = 700;
                                                  return (((t % (freqMod * 2)) > freqMod) ? (amp - 500) * ((t % freqMod) / freqMod)
                                                                              : (amp - 500) - (amp - 500) * ((t % freqMod) / freqMod))
                                                }), { name: 'create wave' });
  var accessX  = ArrowNode.ArrowNode(StdArrows.fieldAccess().setParameter('field id', 'x'), { name: 'access x' });
  var accessY  = ArrowNode.ArrowNode(StdArrows.fieldAccess().setParameter('field id', 'y'), { name: 'access y' });
  var accessX2 = ArrowNode.ArrowNode(StdArrows.fieldAccess().setParameter('field id', 'x'), { name: 'access x' });
  var accessY2 = ArrowNode.ArrowNode(StdArrows.fieldAccess().setParameter('field id', 'y'), { name: 'access y' });

  var add = ArrowNode.ArrowNode(StdArrows.numberExpression()
                                         .setParameter('expression', function (v1, v2) { return v1 + v2 }));
  var buildVec = ArrowNode.ArrowNode(StdArrows.buildRecord().setParameter('record type', Vector2.type), { name: 'build vector' });

  // var oscOutNode1 = ArrowNode.OutputNode(oscOut1.signals.OscOutput.output, { name: 'osc output' });
  // var oscOutNode2 = ArrowNode.OutputNode(oscOut2.signals.OscOutput.output, { name: 'osc output' });
  // var oscOutNode3 = ArrowNode.OutputNode(oscOut3.signals.OscOutput.output, { name: 'osc output' });


  sineMvmt.addNodes(mouseInput2, timeInput, positionOutput2, 
                    createSine, accessX, accessY, accessX2, accessY2, add, 
                    buildVec
                    // , oscOutNode1, oscOutNode2, oscOutNode3
                  );

  sineMvmt.connect(mouseInput2, { node: accessX, inlet: 0 });
  sineMvmt.connect(mouseInput2, { node: accessY, inlet: 0 });
  sineMvmt.connect(timeInput, { node: createSine, inlet: 0 });
  sineMvmt.connect(accessY, { node: createSine, inlet: 1 });

  sineMvmt.connect(accessX, { node: add, inlet: 0 });
  sineMvmt.connect(createSine, { node: add, inlet: 1 });
  sineMvmt.connect(add, { node: buildVec, inlet: 0 });
  sineMvmt.connect(accessY, { node: buildVec, inlet: 1 });

  sineMvmt.connect(buildVec, { node: positionOutput2, inlet: 0 });

  sineMvmt.connect(buildVec, { node: accessX2, inlet: 0 });
  sineMvmt.connect(buildVec, { node: accessY2, inlet: 0 });
  // sineMvmt.connect(accessX2, { node: oscOutNode1, inlet: 0 });
  // sineMvmt.connect(accessY2, { node: oscOutNode2, inlet: 0 });
  // sineMvmt.connect(createSine, { node: oscOutNode3, inlet: 0 });

  // ------- END SYMP BEHAVIOR ------- //

  // come back to this...
  // var srl = JSON.stringify(Scene.serialize(scene));
  // var srl2 = JSON.stringify(JSON.parse(srl));
  // console.log(Scene.parse(JSON.parse(srl)));

  return {
    scene: scene
  };
});