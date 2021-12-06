/*
  simple list object...

  numbers on the first inlet are appended to the list
  messages like "append 1 2 3" will append items to the list
  a bang on the left inlet returns the stored list on the first outlet
  a bang on the right inlet clears the array
*/

inlets = 2;
outlets = 1;

name = "m-list";

var array = []

function bang () {
  if (array.length) outlet(0, array)
  if (inlet === 1) { array = []; outlet(0, 'list cleared.') }
}

function msg_float (f) {
  array.push(f)
}

function append () {
  var _new = Array.from(arguments)
  array = array.concat(_new)
}
