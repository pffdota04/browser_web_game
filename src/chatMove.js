// choose => return [[reply], [next choose]]
const ChatMove = (choose) => {
  switch (choose) {
    case 0:
      return [[], [1, 2]];
    case 1:
      return [
        [3, 4],
        [2, 8],
      ];
    case 2:
      return [
        [5, 6, 7],
        [8, 9],
      ];
    // 89
    case 8:
      return [
        [10, 11],
        [12, 13],
      ];
    case 9:
      return [[14], [12, 13]];
    //12, 13

    case 12:
      return [[15], [18]];
    case 13:
      return [[15], [18]];
    // 15 18
    case 18:
      return [[21], [19, 20]];
    // 19 20
    case 19:
      return [
        [22, 23],
        [25, 26],
      ];
    case 20:
      return [[24], [25, 26]];
    // 25 26
    case 25:
      return [[27, 28], [30]];
    case 26:
      return [[29], [31, 32]];
    //30 ..31.. 32
    case 30:
      return [[33], [34, 35]];

    case 31:
      return [[36, 37, 38], [39]];

    case 32:
      return [[33], [34, 35]];
    // 34 35 ..39..

    case 39:
      return [[40, 41], [-1]];

    // case :
    //   return [[ ], [ ]];

    // case :
    //   return [[ ], [ ]];

    case 69:
      return [[75], [76]];
    case 76:
      return [[75], [69]];

    case 78:
      return [[77], [79]];
    case 79:
      return [[77], [78]];

    case 80:
      return [[82], [81]];
    case 81:
      return [[82], [80]];
    
    default:
      break;
  }
};

export default ChatMove;
