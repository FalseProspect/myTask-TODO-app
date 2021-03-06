

(function createSelf(){
  console.log('Tutorial');

  let self = document.getElementById('tutorialModal');
  let selfStyle = document.getElementById('tutorialModal-style');
  let slide = 0;

  let logo = '<svg id="logoSvg" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 650 150" xml:space="preserve" id="svg16" sodipodi:docname="myTask_Logo.svg" inkscape:version="0.92.3 (2405546, 2018-03-11)" width="650" height="150"><g id="g14" class="fill" transform="translate(-16.328187,-6.1230703)"><path d="m 55.3,41.9 c 4.1,0 8.1,0.6 12.1,1.7 3.9,1.2 7.4,2.9 10.3,5.2 3,-2 6.4,-3.6 10.1,-5 3.8,-1.3 8.3,-2 13.6,-2 3.8,0 7.5,0.5 11.2,1.5 3.6,1 6.9,2.6 9.8,4.7 2.9,2.2 5.1,5 6.8,8.5 1.7,3.6 2.6,7.9 2.6,13 v 47.3 c -1,0.3 -2.6,0.6 -4.7,0.9 -2.2,0.3 -4.4,0.5 -6.7,0.5 -2.2,0 -4.2,-0.2 -5.9,-0.5 -1.8,-0.3 -3.2,-0.9 -4.4,-1.8 -1.2,-0.9 -2.1,-2.1 -2.8,-3.7 -0.7,-1.5 -1,-3.6 -1,-6.1 V 70.4 c 0,-3 -0.9,-5.2 -2.6,-6.5 -1.7,-1.4 -4,-2 -6.9,-2 -1.4,0 -2.9,0.3 -4.5,1 -1.6,0.7 -2.8,1.3 -3.6,2 0.1,0.4 0.2,0.8 0.2,1.1 0,0.4 0,0.7 0,1 v 50 c -1.1,0.3 -2.7,0.6 -4.9,0.9 -2.2,0.3 -4.3,0.5 -6.5,0.5 -2.2,0 -4.2,-0.2 -5.9,-0.5 -1.8,-0.3 -3.2,-0.9 -4.4,-1.8 -1.2,-0.9 -2.1,-2.1 -2.8,-3.7 -0.7,-1.5 -1,-3.6 -1,-6.1 V 70.4 c 0,-3 -0.9,-5.2 -2.8,-6.5 -1.9,-1.4 -4.1,-2 -6.7,-2 -1.8,0 -3.4,0.3 -4.6,0.8 -1.3,0.6 -2.4,1.1 -3.3,1.6 v 52.6 c -1,0.3 -2.6,0.6 -4.7,0.9 -2.2,0.3 -4.4,0.5 -6.7,0.5 -2.2,0 -4.2,-0.2 -5.9,-0.5 -1.8,-0.3 -3.2,-0.9 -4.4,-1.8 -1.2,-0.9 -2.1,-2.1 -2.8,-3.7 -0.7,-1.5 -1,-3.6 -1,-6.1 V 60.9 c 0,-2.7 0.6,-4.8 1.7,-6.4 1.1,-1.6 2.7,-3.1 4.7,-4.5 3.4,-2.4 7.6,-4.4 12.7,-5.9 5,-1.5 10.2,-2.2 15.7,-2.2 z" id="path2" class="fill" inkscape:connector-curvature="0"/><path d="m 156.4,98.4 c -1.1,-2.5 -2.3,-5.3 -3.5,-8.4 -1.3,-3.1 -2.5,-6.6 -3.9,-10.7 -1.4,-4 -2.8,-8.6 -4.2,-13.7 -1.5,-5.1 -3,-11.1 -4.6,-17.8 1.4,-1.4 3.3,-2.6 5.6,-3.7 2.3,-1 4.9,-1.6 7.7,-1.6 3.5,0 6.4,0.7 8.7,2.2 2.3,1.5 4,4.2 5.1,8.2 l 11.9,41.3 h 0.6 c 1.2,-3.4 2.4,-7.1 3.5,-11.1 1.1,-4 2.3,-8.1 3.4,-12.4 1.1,-4.2 2.1,-8.5 3.1,-12.8 0.9,-4.2 1.8,-8.4 2.5,-12.5 3.6,-1.9 7.5,-2.9 11.9,-2.9 3.5,0 6.4,0.8 8.7,2.3 2.3,1.5 3.4,4.1 3.4,7.8 0,2.7 -0.4,5.8 -1,9.4 -0.7,3.6 -1.6,7.3 -2.8,11.3 -1.2,4 -2.5,8.1 -4.1,12.4 -1.6,4.3 -3.2,8.4 -4.9,12.5 -1.7,4.1 -3.4,8 -5.3,11.6 -1.8,3.7 -3.6,6.9 -5.3,9.8 -2.8,4.9 -5.4,8.9 -7.8,12 -2.4,3.1 -4.7,5.5 -6.9,7.3 -2.2,1.7 -4.4,2.9 -6.6,3.6 -2.2,0.6 -4.5,1 -6.9,1 -4.2,0 -7.6,-1.3 -10.2,-3.8 -2.6,-2.5 -4.2,-5.8 -4.6,-9.8 3.2,-2.5 6.4,-5.3 9.6,-8.3 3.2,-3.1 6.1,-6.2 8.7,-9.4 -1.7,-0.5 -3.5,-1.7 -5.5,-3.5 -1.8,-1.7 -4,-5.2 -6.3,-10.3 z" id="path4" class="fill" inkscape:connector-curvature="0"/><path d="m 225.4,47.1 c -0.7,-1.1 -1.3,-2.6 -1.9,-4.5 -0.6,-1.9 -0.9,-3.9 -0.9,-6 0,-3.9 0.9,-6.7 2.6,-8.4 1.7,-1.7 4,-2.6 6.8,-2.6 h 65.4 c 0.7,1.1 1.4,2.6 2,4.5 0.6,1.9 0.9,3.9 0.9,6 0,3.9 -0.9,6.7 -2.6,8.4 -1.8,1.7 -4,2.5 -6.8,2.5 h -16.7 v 69.3 c -1.1,0.3 -2.8,0.6 -5.2,0.9 -2.4,0.3 -4.7,0.5 -7,0.5 -2.3,0 -4.3,-0.2 -6.1,-0.5 -1.8,-0.3 -3.2,-1 -4.4,-1.9 -1.2,-0.9 -2.1,-2.1 -2.7,-3.8 -0.6,-1.6 -0.9,-3.7 -0.9,-6.3 V 47.1 Z" id="path6" class="fill" inkscape:connector-curvature="0"/><path class="fill" d="m 336.6,41.9 c 5.4,0 10.3,0.6 14.8,1.7 4.4,1.1 8.3,2.8 11.4,5 3.1,2.3 5.6,5.1 7.3,8.6 1.7,3.4 2.5,7.5 2.5,12.2 V 103 c 0,2.6 -0.7,4.7 -2.2,6.4 -1.5,1.7 -3.2,3.1 -5.2,4.3 -6.5,3.9 -15.7,5.8 -27.5,5.8 -5.3,0 -10.1,-0.5 -14.3,-1.5 -4.3,-1 -7.9,-2.5 -10.9,-4.5 -3.1,-2 -5.4,-4.5 -7.1,-7.6 -1.6,-3.1 -2.5,-6.7 -2.5,-10.8 0,-6.9 2,-12.2 6.2,-15.9 4.1,-3.7 10.4,-6 19,-6.9 l 19.6,-2.1 v -1 c 0,-2.9 -1.3,-5 -3.8,-6.2 -2.6,-1.2 -6.2,-1.9 -11,-1.9 -3.8,0 -7.5,0.4 -11.1,1.2 -3.6,0.8 -6.9,1.8 -9.8,3 -1.3,-0.9 -2.4,-2.3 -3.3,-4.1 -0.9,-1.8 -1.3,-3.8 -1.3,-5.8 0,-2.6 0.6,-4.7 1.9,-6.2 1.2,-1.5 3.2,-2.9 5.8,-4 2.9,-1.1 6.3,-1.9 10.3,-2.4 4,-0.7 7.7,-0.9 11.2,-0.9 z m 1.2,58.9 c 1.7,0 3.6,-0.2 5.6,-0.5 2,-0.3 3.6,-0.8 4.6,-1.4 v -12 l -10.8,0.9 c -2.8,0.2 -5.1,0.8 -6.9,1.8 -1.8,1 -2.7,2.5 -2.7,4.5 0,2 0.8,3.6 2.3,4.9 1.6,1.2 4.2,1.8 7.9,1.8 z" inkscape:connector-curvature="0"/><path class="fill" d="m 449.7,95.3 c 0,7.6 -2.8,13.6 -8.5,17.8 -5.7,4.3 -14.1,6.5 -25.2,6.5 -4.2,0 -8.1,-0.3 -11.7,-0.9 -3.6,-0.6 -6.7,-1.5 -9.2,-2.8 -2.5,-1.3 -4.6,-2.8 -6,-4.7 -1.5,-1.9 -2.2,-4.1 -2.2,-6.8 0,-2.4 0.5,-4.4 1.5,-6.1 1,-1.7 2.2,-3 3.6,-4.1 2.9,1.6 6.2,3 10,4.3 3.8,1.3 8.1,1.9 13,1.9 3.1,0 5.5,-0.5 7.1,-1.3 1.7,-0.9 2.5,-2.1 2.5,-3.6 0,-1.4 -0.6,-2.5 -1.8,-3.3 -1.2,-0.8 -3.2,-1.4 -6,-2 l -4.5,-0.9 c -8.7,-1.7 -15.2,-4.4 -19.4,-8 -4.3,-3.6 -6.4,-8.9 -6.4,-15.7 0,-3.7 0.8,-7 2.4,-10 1.6,-3 3.8,-5.5 6.8,-7.5 2.9,-2 6.4,-3.5 10.4,-4.7 4,-1.1 8.5,-1.6 13.4,-1.6 3.7,0 7.2,0.3 10.4,0.8 3.2,0.6 6.1,1.4 8.5,2.5 2.4,1.1 4.3,2.5 5.7,4.3 1.4,1.8 2.1,3.8 2.1,6.2 0,2.3 -0.4,4.3 -1.3,5.9 -0.9,1.7 -1.9,3 -3.2,4.1 -0.8,-0.5 -2,-1 -3.6,-1.6 -1.6,-0.5 -3.4,-1 -5.3,-1.5 -1.9,-0.5 -3.8,-0.8 -5.8,-1.1 -2,-0.3 -3.7,-0.5 -5.3,-0.5 -3.3,0 -5.8,0.4 -7.7,1.1 -1.8,0.8 -2.7,1.9 -2.7,3.5 0,1.1 0.5,2 1.5,2.7 1,0.7 2.9,1.3 5.7,2 l 4.7,1 c 9.6,2.2 16.4,5.2 20.5,9.1 4,3.9 6,8.9 6,15 z" inkscape:connector-curvature="0"/><path class="fill" d="m 533.2,103.8 c -0.5,4.7 -1.9,8.3 -4.1,10.8 -2.3,2.5 -5.5,3.8 -9.8,3.8 -3.2,0 -6.1,-0.8 -8.5,-2.3 -2.5,-1.5 -5.2,-4.2 -8.1,-7.9 L 487.8,89.6 v 27.3 c -1.1,0.2 -2.7,0.5 -4.9,0.8 -2.2,0.3 -4.3,0.5 -6.5,0.5 -2.2,0 -4.2,-0.2 -5.9,-0.5 -1.8,-0.3 -3.2,-0.9 -4.4,-1.8 -1.2,-0.9 -2.1,-2.1 -2.8,-3.7 -0.7,-1.5 -1,-3.6 -1,-6.1 V 19.4 c 1.1,-0.3 2.7,-0.6 4.9,-1 2.1,-0.3 4.3,-0.5 6.5,-0.5 2.2,0 4.2,0.2 5.9,0.5 1.7,0.3 3.2,0.9 4.4,1.8 1.2,0.9 2.1,2.1 2.8,3.7 0.6,1.6 1,3.6 1,6.1 v 39.6 l 25.8,-26.4 c 5.2,0 9.4,1.2 12.5,3.5 3.2,2.3 4.7,5.2 4.7,8.7 0,1.5 -0.3,2.9 -0.8,4.1 -0.5,1.3 -1.3,2.5 -2.3,3.8 -1,1.3 -2.4,2.7 -4,4.1 -1.7,1.5 -3.6,3.1 -5.8,5 l -8.7,7.5 z" inkscape:connector-curvature="0"/></g><g transform="matrix(2.9118113,0,0,2.9118113,404.26109,-1245.034)"><path d="m 82.3,439.4 c 0,-0.6 -0.2,-1.1 -0.6,-1.5 L 80.8,437 c -0.4,-0.4 -1,-0.6 -1.5,-0.6 -0.5,0 -1.1,0.2 -1.5,0.6 l -4,4 v -4.3 c 0,-0.4 -0.3,-0.8 -0.8,-0.8 H 44.4 c -0.4,0 -0.8,0.3 -0.8,0.8 v 28.5 c 0,0.4 0.3,0.8 0.8,0.8 h 28.5 c 0.4,0 0.8,-0.3 0.8,-0.8 V 449 l 8,-8 c 0.4,-0.4 0.6,-1 0.6,-1.6 z M 72.1,464.5 H 45.2 v -26.9 h 26.9 v 5.1 l -14.1,14 c -0.1,0.1 -0.1,0.2 -0.2,0.3 l -1.4,4.3 c -0.1,0.3 0,0.6 0.2,0.8 0.1,0.1 0.3,0.2 0.5,0.2 0.1,0 0.2,0 0.2,0 l 4.3,-1.4 c 0.1,0 0.2,-0.1 0.3,-0.2 L 72,450.6 v 13.9 z m -11.1,-5 -2.7,0.9 0.9,-2.7 16.3,-16.3 1.8,1.8 z m 19.6,-19.6 -2.1,2.1 -0.9,-0.9 -0.9,-0.9 2.1,-2.1 c 0.1,-0.1 0.3,-0.2 0.5,-0.2 0.2,0 0.3,0.1 0.5,0.2 l 0.9,0.9 c 0,0 0,0 0,0 0.1,0.1 0.2,0.3 0.2,0.5 -0.1,0.1 -0.2,0.3 -0.3,0.4 z" class="fill" inkscape:connector-curvature="0"/><path d="M 67.7,440.8 H 67 c -0.4,0 -0.8,0.3 -0.8,0.8 0,0.5 0.3,0.8 0.8,0.8 h 0.7 c 0.4,0 0.8,-0.3 0.8,-0.8 0,-0.4 -0.4,-0.8 -0.8,-0.8 z" class="fill" inkscape:connector-curvature="0"/><path d="m 63.6,440.8 h -14 c -0.4,0 -0.8,0.3 -0.8,0.8 0,0.5 0.3,0.8 0.8,0.8 h 14 c 0.4,0 0.8,-0.3 0.8,-0.8 0,-0.4 -0.4,-0.8 -0.8,-0.8 z" class="fill" inkscape:connector-curvature="0"/><path d="M 62.9,445.3 H 49.6 c -0.4,0 -0.8,0.3 -0.8,0.8 0,0.4 0.3,0.8 0.8,0.8 h 13.3 c 0.4,0 0.8,-0.3 0.8,-0.8 -0.1,-0.5 -0.4,-0.8 -0.8,-0.8 z" class="fill" inkscape:connector-curvature="0"/><path d="m 58.1,449.8 h -8.5 c -0.4,0 -0.8,0.3 -0.8,0.8 0,0.4 0.3,0.8 0.8,0.8 h 8.5 c 0.4,0 0.8,-0.3 0.8,-0.8 -0.1,-0.5 -0.4,-0.8 -0.8,-0.8 z" class="fill" inkscape:connector-curvature="0"/><path d="m 54.4,454.2 h -4.8 c -0.4,0 -0.8,0.3 -0.8,0.8 0,0.5 0.3,0.8 0.8,0.8 h 4.8 c 0.4,0 0.8,-0.3 0.8,-0.8 0,-0.5 -0.4,-0.8 -0.8,-0.8 z" class="fill" inkscape:connector-curvature="0"/></g></svg>';
  let appIcon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1040 1040" style="enable-background:new 0 0 1040 1040;" xml:space="preserve"><style type="text/css">.iconCircle{fill:#F3A712;}.iconInner{fill:#FFFFFF;}</style><circle class="iconCircle" cx="520" cy="520" r="520"/><g transform="translate(-16.328187,-6.1230703)"><path class="iconInner" d="M256.9,751.2c5.4,0,10.6,0.8,15.8,2.2c5.1,1.6,9.7,3.8,13.5,6.8c3.9-2.6,8.4-4.7,13.2-6.5c5-1.7,10.8-2.6,17.8-2.6c5,0,9.8,0.7,14.6,2c4.7,1.3,9,3.4,12.8,6.1c3.8,2.9,6.7,6.5,8.9,11.1c2.2,4.7,3.4,10.3,3.4,17v61.8c-1.3,0.4-3.4,0.8-6.1,1.2c-2.9,0.4-5.7,0.7-8.8,0.7c-2.9,0-5.5-0.3-7.7-0.7c-2.4-0.4-4.2-1.2-5.7-2.4s-2.7-2.7-3.7-4.8c-0.9-2-1.3-4.7-1.3-8v-46.6c0-3.9-1.2-6.8-3.4-8.5c-2.2-1.8-5.2-2.6-9-2.6c-1.8,0-3.8,0.4-5.9,1.3c-2.1,0.9-3.7,1.7-4.7,2.6c0.1,0.5,0.3,1,0.3,1.4c0,0.5,0,0.9,0,1.3v65.3c-1.4,0.4-3.5,0.8-6.4,1.2c-2.9,0.4-5.6,0.7-8.5,0.7s-5.5-0.3-7.7-0.7c-2.4-0.4-4.2-1.2-5.7-2.4s-2.7-2.7-3.7-4.8c-0.9-2-1.3-4.7-1.3-8v-46.9c0-3.9-1.2-6.8-3.7-8.5c-2.5-1.8-5.4-2.6-8.8-2.6c-2.4,0-4.4,0.4-6,1c-1.7,0.8-3.1,1.4-4.3,2.1v68.7c-1.3,0.4-3.4,0.8-6.1,1.2c-2.9,0.4-5.7,0.7-8.8,0.7c-2.9,0-5.5-0.3-7.7-0.7c-2.4-0.4-4.2-1.2-5.7-2.4c-1.6-1.2-2.7-2.7-3.7-4.8c-0.9-2-1.3-4.7-1.3-8v-59.2c0-3.5,0.8-6.3,2.2-8.4c1.4-2.1,3.5-4,6.1-5.9c4.4-3.1,9.9-5.7,16.6-7.7C243,752.2,249.8,751.2,256.9,751.2z"/><path class="iconInner" d="M389,825.1c-1.4-3.3-3-6.9-4.6-11c-1.7-4-3.3-8.6-5.1-14c-1.8-5.2-3.7-11.2-5.5-17.9c-2-6.7-3.9-14.5-6-23.3c1.8-1.8,4.3-3.4,7.3-4.8c3-1.3,6.4-2.1,10.1-2.1c4.6,0,8.4,0.9,11.4,2.9c3,2,5.2,5.5,6.7,10.7l15.5,53.9h0.8c1.6-4.4,3.1-9.3,4.6-14.5c1.4-5.2,3-10.6,4.4-16.2c1.4-5.5,2.7-11.1,4-16.7c1.2-5.5,2.4-11,3.3-16.3c4.7-2.5,9.8-3.8,15.5-3.8c4.6,0,8.4,1,11.4,3c3,2,4.4,5.4,4.4,10.2c0,3.5-0.5,7.6-1.3,12.3c-0.9,4.7-2.1,9.5-3.7,14.8c-1.6,5.2-3.3,10.6-5.4,16.2s-4.2,11-6.4,16.3c-2.2,5.4-4.4,10.4-6.9,15.2c-2.4,4.8-4.7,9-6.9,12.8c-3.7,6.4-7.1,11.6-10.2,15.7c-3.1,4-6.1,7.2-9,9.5c-2.9,2.2-5.7,3.8-8.6,4.7c-2.9,0.8-5.9,1.3-9,1.3c-5.5,0-9.9-1.7-13.3-5s-5.5-7.6-6-12.8c4.2-3.3,8.4-6.9,12.5-10.8c4.2-4,8-8.1,11.4-12.3c-2.2-0.7-4.6-2.2-7.2-4.6C394.9,836.3,392,831.7,389,825.1L389,825.1z"/><path class="iconInner" d="M479.1,758c-0.9-1.4-1.7-3.4-2.5-5.9s-1.2-5.1-1.2-7.8c0-5.1,1.2-8.8,3.4-11c2.2-2.2,5.2-3.4,8.9-3.4h85.4c0.9,1.4,1.8,3.4,2.6,5.9c0.8,2.5,1.2,5.1,1.2,7.8c0,5.1-1.2,8.8-3.4,11c-2.4,2.2-5.2,3.3-8.9,3.3h-21.8v90.5c-1.4,0.4-3.7,0.8-6.8,1.2s-6.1,0.7-9.1,0.7s-5.6-0.3-8-0.7s-4.2-1.3-5.7-2.5s-2.7-2.7-3.5-5c-0.8-2.1-1.2-4.8-1.2-8.2V758H479.1z"/><path class="iconInner" d="M624.4,751.2c7.1,0,13.5,0.8,19.3,2.2c5.7,1.4,10.8,3.7,14.9,6.5c4,3,7.3,6.7,9.5,11.2c2.2,4.4,3.3,9.8,3.3,15.9v43.9c0,3.4-0.9,6.1-2.9,8.4s-4.2,4-6.8,5.6c-8.5,5.1-20.5,7.6-35.9,7.6c-6.9,0-13.2-0.7-18.7-2c-5.6-1.3-10.3-3.3-14.2-5.9c-4-2.6-7.1-5.9-9.3-9.9c-2.1-4-3.3-8.8-3.3-14.1c0-9,2.6-15.9,8.1-20.8c5.4-4.8,13.6-7.8,24.8-9l25.6-2.7v-1.3c0-3.8-1.7-6.5-5-8.1c-3.4-1.6-8.1-2.5-14.4-2.5c-5,0-9.8,0.5-14.5,1.6s-9,2.4-12.8,3.9c-1.7-1.2-3.1-3-4.3-5.4c-1.2-2.4-1.7-5-1.7-7.6c0-3.4,0.8-6.1,2.5-8.1c1.6-2,4.2-3.8,7.6-5.2c3.8-1.4,8.2-2.5,13.5-3.1C615,751.5,619.8,751.2,624.4,751.2z M626,828.2c2.2,0,4.7-0.3,7.3-0.7c2.6-0.4,4.7-1,6-1.8V810l-14.1,1.2c-3.7,0.3-6.7,1-9,2.4c-2.4,1.3-3.5,3.3-3.5,5.9c0,2.6,1,4.7,3,6.4C617.7,827.4,621.1,828.2,626,828.2z"/><path class="iconInner" d="M772.1,821c0,9.9-3.7,17.8-11.1,23.3c-7.4,5.6-18.4,8.5-32.9,8.5c-5.5,0-10.6-0.4-15.3-1.2c-4.7-0.8-8.8-2-12-3.7c-3.3-1.7-6-3.7-7.8-6.1c-2-2.5-2.9-5.4-2.9-8.9c0-3.1,0.7-5.7,2-8c1.3-2.2,2.9-3.9,4.7-5.4c3.8,2.1,8.1,3.9,13.1,5.6c5,1.7,10.6,2.5,17,2.5c4,0,7.2-0.7,9.3-1.7c2.2-1.2,3.3-2.7,3.3-4.7c0-1.8-0.8-3.3-2.4-4.3s-4.2-1.8-7.8-2.6l-5.9-1.2c-11.4-2.2-19.9-5.7-25.3-10.4c-5.6-4.7-8.4-11.6-8.4-20.5c0-4.8,1-9.1,3.1-13.1c2.1-3.9,5-7.2,8.9-9.8c3.8-2.6,8.4-4.6,13.6-6.1c5.2-1.4,11.1-2.1,17.5-2.1c4.8,0,9.4,0.4,13.6,1c4.2,0.8,8,1.8,11.1,3.3c3.1,1.4,5.6,3.3,7.4,5.6s2.7,5,2.7,8.1c0,3-0.5,5.6-1.7,7.7c-1.2,2.2-2.5,3.9-4.2,5.4c-1-0.7-2.6-1.3-4.7-2.1c-2.1-0.7-4.4-1.3-6.9-2c-2.5-0.7-5-1-7.6-1.4c-2.6-0.4-4.8-0.7-6.9-0.7c-4.3,0-7.6,0.5-10.1,1.4c-2.4,1-3.5,2.5-3.5,4.6c0,1.4,0.7,2.6,2,3.5s3.8,1.7,7.4,2.6l6.1,1.3c12.5,2.9,21.4,6.8,26.8,11.9C769.5,806.5,772.1,813,772.1,821z"/><path class="iconInner" d="M881.2,832.1c-0.7,6.1-2.5,10.8-5.4,14.1c-3,3.3-7.2,5-12.8,5c-4.2,0-8-1-11.1-3c-3.3-2-6.8-5.5-10.6-10.3l-19.5-24.3v35.7c-1.4,0.3-3.5,0.7-6.4,1c-2.9,0.4-5.6,0.7-8.5,0.7c-2.9,0-5.5-0.3-7.7-0.7c-2.4-0.4-4.2-1.2-5.7-2.4c-1.6-1.2-2.7-2.7-3.7-4.8c-0.9-2-1.3-4.7-1.3-8V721.9c1.4-0.4,3.5-0.8,6.4-1.3c2.7-0.4,5.6-0.7,8.5-0.7s5.5,0.3,7.7,0.7c2.2,0.4,4.2,1.2,5.7,2.4c1.6,1.2,2.7,2.7,3.7,4.8c0.8,2.1,1.3,4.7,1.3,8v51.7l33.7-34.5c6.8,0,12.3,1.6,16.3,4.6c4.2,3,6.1,6.8,6.1,11.4c0,2-0.4,3.8-1,5.4c-0.7,1.7-1.7,3.3-3,5c-1.3,1.7-3.1,3.5-5.2,5.4c-2.2,2-4.7,4-7.6,6.5l-11.4,9.8L881.2,832.1z"/></g><g transform="matrix(2.9118113,0,0,2.9118113,404.26109,-1245.034)"><path id="path15" class="iconInner" d="M163,510.8c0-3.2-1.1-5.8-3.2-7.9l-4.8-4.8c-2.1-2.1-5.3-3.2-7.9-3.2c-2.6,0-5.8,1.1-7.9,3.2l-21.1,21.1v-22.7c0-2.1-1.6-4.2-4.2-4.2H-37.3c-2.1,0-4.2,1.6-4.2,4.2v150.7c0,2.1,1.6,4.2,4.2,4.2h150.7c2.1,0,4.2-1.6,4.2-4.2v-85.6l42.3-42.3C161.9,517.2,163,514,163,510.8z M109.1,643.5H-33.1V501.3h142.2v27l-74.5,74c-0.5,0.5-0.5,1.1-1.1,1.6l-7.4,22.7c-0.5,1.6,0,3.2,1.1,4.2c0.5,0.5,1.6,1.1,2.6,1.1c0.5,0,1.1,0,1.1,0l22.7-7.4c0.5,0,1.1-0.5,1.6-1.1l53.4-53.4v73.5H109.1z M50.4,617.1l-14.3,4.8l4.8-14.3l86.2-86.2l9.5,9.5L50.4,617.1z M154,513.5l-11.1,11.1l-4.8-4.8l-4.8-4.8l11.1-11.1c0.5-0.5,1.6-1.1,2.6-1.1c1.1,0,1.6,0.5,2.6,1.1l4.8,4.8l0,0c0.5,0.5,1.1,1.6,1.1,2.6C155.1,511.9,154.5,513,154,513.5L154,513.5z"/><path class="iconInner" d="M85.8,518.2h-3.7c-2.1,0-4.2,1.6-4.2,4.2c0,2.6,1.6,4.2,4.2,4.2h3.7c2.1,0,4.2-1.6,4.2-4.2C90.1,520.4,87.9,518.2,85.8,518.2z"/><path class="iconInner" d="M64.2,518.2h-74c-2.1,0-4.2,1.6-4.2,4.2c0,2.6,1.6,4.2,4.2,4.2h74c2.1,0,4.2-1.6,4.2-4.2C68.4,520.4,66.3,518.2,64.2,518.2L64.2,518.2z"/><path class="iconInner" d="M60.5,542H-9.9c-2.1,0-4.2,1.6-4.2,4.2c0,2.1,1.6,4.2,4.2,4.2h70.3c2.1,0,4.2-1.6,4.2-4.2C64.2,543.6,62.6,542,60.5,542L60.5,542z"/><path class="iconInner" d="M35.1,565.8H-9.9c-2.1,0-4.2,1.6-4.2,4.2c0,2.1,1.6,4.2,4.2,4.2h44.9c2.1,0,4.2-1.6,4.2-4.2C38.8,567.4,37.2,565.8,35.1,565.8z"/><path class="iconInner" d="M15.5,589.1H-9.9c-2.1,0-4.2,1.6-4.2,4.2c0,2.6,1.6,4.2,4.2,4.2h25.4c2.1,0,4.2-1.6,4.2-4.2C19.7,590.7,17.6,589.1,15.5,589.1z"/></g></svg>';
  let doneIcon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><style type="text/css">.st0{fill:none;}.iconCirlce{fill:var(--mainAccent);}</style><rect y="0" class="st0" width="22" height="22"/><g><path class="iconCirlce" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

  const info = {
    slide: ['1/4','2/4','3/4','4/4'],
    graphic: [appIcon,appIcon,appIcon,doneIcon],
    topic: ['Welcome','Tutroial:','Extras:','Done!'],
    info: [
      `The myTask:Tasklist is an easy to use to-do list web application to allow quick note taking or list making to be done to help you have a more productive day.<br>`,
      `It's easy to use!<br>
        - Used the input bar at the top of the application to describe a task, event, or activity<br>
        - Use the submit button or "Enter" key to add it to your day<br>
        - To mark an item complete, press the (Checkmark) button<br>
        - To remove an item, press the (Trash can) button<br>
        - To edit an item, double click the item text area<br>
        - The menu can be opened using the button in the top left corner, to access other useful settings and filters
      `,
      `- Sign in using google to save and sync your day across your devices<br>
        - Use a @ or # symbol followed by text to hightlight/tag a important keyword<br>
        - Personalize your Tasklist app using our collection of themes as well as a dark mode option
      `,
      `That's it! Your ready to be more productive using myTask: Tasklist.<br>
        If you wish to access the tutorial again or review other special setting, they can be found in the settings menu.`]
  };



  function makeElement(elemTag, classname, id){
    let elem = document.createElement(elemTag);
    classname ? elem.setAttribute('class',classname) : 0;
    id ? elem.id = id : 0; 
    return elem;
  }


  let background = makeElement('div','modal-background');

  let container = makeElement('div','modal-container');

  let titleBar = makeElement('div','titleBar');
    let slideNum = makeElement('span','slideNum');
    let modalTitleLogo = makeElement('span','modalTitleLogo');
    let modalExit = makeElement('span','modalExit');
    modalExit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><g><g><path d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"/></g></g></svg>';
    modalTitleLogo.innerHTML = logo;
    titleBar.appendChild(slideNum);
    titleBar.appendChild(modalTitleLogo);
    titleBar.appendChild(modalExit);
    container.appendChild(titleBar);

  let modalGraphic = makeElement('div','modal-Graphic');
    modalGraphicImg = makeElement('div',0,'modal-Graphic-Img')
    modalGraphic.appendChild(modalGraphicImg);
    container.appendChild(modalGraphic);

  let modalTopicInfo = makeElement('div','modal-topicInfo');
    let topicH1= makeElement('h1');
    // let topicHr = makeElement('hr');
    modalTopicInfo.appendChild(topicH1);
    // modalTopicInfo.appendChild(topicHr);
    container.appendChild(modalTopicInfo);

  let modalContent = makeElement('div', 'modal-Content');
  let modalContentInnerText = makeElement('p');
    modalContentInnerText.classList.add('fadein');
    modalContent.appendChild(modalContentInnerText);
    container.appendChild(modalContent);

  let modalButtonContainer = makeElement('div','modal-button-container');
    let secondaryBtn = makeElement('button','secondaryBtn');
      secondaryBtn.innerText = 'Back';
    let primaryBtn = makeElement('button','primaryBtn');
      primaryBtn.innerText = 'Next';
    modalButtonContainer.appendChild(secondaryBtn);
    modalButtonContainer.appendChild(primaryBtn);
    container.appendChild(modalButtonContainer);
    
  background.appendChild(container);

  //Add to screen
  document.body.appendChild(background);



  background.addEventListener('click',(c)=>{
    if(c.target !== background)return;
    removeSelf();
  })

  
  function removeSelf(){
    document.body.removeChild(background);
    document.head.removeChild(selfStyle);
    document.body.removeChild(self);
  }

  modalExit.addEventListener('click',()=>removeSelf());

  primaryBtn.addEventListener('click',()=>{
    slide++;
    displaySlide(slide)
  });
  
  secondaryBtn.addEventListener('click',()=>{
    slide--;
    displaySlide(slide);
  });

  function displaySlide(slideVal){
    let lastSlide = 3;
    secondaryBtn.style.visibility = slideVal > 0 ? 'visible' : 'hidden';
    if (slideVal > lastSlide) return removeSelf();
    // slide = slideVal;
    console.log(slide);

    //Render Elems
    modalContentInnerText.classList.remove('fadein');
    modalContentInnerText.style.opacity='0';
    setTimeout(()=>{
      modalContentInnerText.classList.add('fadein');
      modalContentInnerText.style.opacity='1';
      modalContentInnerText.innerHTML = info.info[slide];
    },700);
    slideNum.innerText = info.slide[slide]; 
    modalGraphicImg.innerHTML = info.graphic[slide];
    topicH1.innerText= info.topic[slide];
  }
  
  displaySlide(0);

})()