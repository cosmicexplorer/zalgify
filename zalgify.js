// based on https://github.com/Marak/zalgo.js/blob/master/zalgo.js

// top, bottom, middle diacritics
var diacritics = [
  ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '̇', '̈', '̊', '͂', '̓', '̈', '͊', '͋', '͌', '̃', '̂', '̌', '͐', '̀', '́', '̋', '̏', '̒', '̓', '̔', '̽', '̉', 'ͣ', 'ͤ', 'ͥ', 'ͦ', 'ͧ', 'ͨ', 'ͩ', 'ͪ', 'ͫ', 'ͬ', 'ͭ', 'ͮ', 'ͯ', '̾', '͛', '͆', '̚'],
  ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ', '͇', '͈', '͉', '͍', '͎', '͓', '͔', '͕', '͖', '͙', '͚', '̣'],
  ['̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵', '̶', '͜', '͝', '͞', '͟', '͠', '͢', '̸', '̷', '͡', ' ҉']
];

// flatten diacritics
diacritics = [].concat.apply([], diacritics);

// returns boolean on whether the word has been zalgified yet or not
function isZalgified(string) {
  return (string[0] === '\u200C');
}

function zalgify(string, frequency, intensity) {
  string = string.split('');
  for (var i = 0; i < string.length; i++) {
    // only alter a character a certain percent of the time.
    // dictated by $frequency, a decimal in (0,1)
    if (Math.random() > frequency) {
      continue;
    }
    var zalgified = string[i];
    // to a certain intensity,
    for (var j = 0; j < intensity; j++) {
      // append a random diacritic
      zalgified += diacritics[Math.floor(Math.random() * diacritics.length)];
    }
    string[i] = zalgified;
  }
  // zero-width non-joiner
  string.unshift('\u200C');
  return string.join('');
}

if (typeof module !== 'undefined') {
  module.exports = {
    zalgify: zalgify,
    isZalgified: isZalgified
  };
}
