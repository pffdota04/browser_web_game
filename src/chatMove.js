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
      return [[16], [18]];
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
      return [[33], [34]];
    // 34 35 ..39..
    case 35:
      return [[36, 37, 38], [39]];

    case 34:
      return [
        [89, 90, 91, 92],
        [93, 94],
      ];

    // ..39..  // sau đây là -+10
    case 39:
      return [[40, 41], [-3]];
    // 93, 94

    case 93:
      return [
        [96, 97, 98],
        [99, 100],
      ];

    case 94:
      return [[95], [-2]]; // end

    // .. 99 100
    case 100:
      return [[101, 102, 103], [-3]];
    case 99:
      return [[104], [105]];

    case 105:
      return [
        [106, 107, 108],
        [109, 110],
      ];

    case 109:
      return [[111], [112, 113]];
    case 110:
      return [
        [114, 115],
        [116, 117],
      ];
    case 110:
      return [
        [114, 115],
        [116, 117],
      ];
    // 112 113 116 117
    case 112:
      return [[115], [118, 119]];

    case 113:
      return [[115], [116, 117]];

    // 116 117--- 118 119
    case 116:
      return [[120], [121, 122]];

    case 117:
      return [[101, 102, 103], [-3]]; // die

    case 118:
      return [[120], [121, 123]];

    case 117:
      return [[124, 125, 126], [127]];
    case 119:
      return [[124, 125, 126], [127]];
    // 121 nhay cua so.  122, 123, 127
    case 121:
      return [[104], [-3]]; //die

    case 122:
      return [[128, 129, 130], [131]];

    case 123:
      return [[128, 129, 130], [142]];

    case 127:
      return [[133, 134, 135, 136], [137]];

    case 137:
      return [[138, 139, 140, 141], [-4]]; //end

    // 131 kdao = 142 codao (nghe thấy cs)

    case 131:
      return [[143], [144, 145]];

    case 142:
      return [[143], [146, 147]];

    // 144, 145 = k dao

    case 144:
      return [
        [148, 149, 150],
        [151, 152],
      ];

    case 145:
      return [
        [153, 154],
        [151, 152],
      ];
    // 146, 147 = co dao
    case 146:
      return [
        [148, 149, 150],
        [151, 152],
      ];

    case 147:
      return [[153, 155, 156], [157]];
    case 157:
      return [[138, 139, 140, 141], [-4]]; //end

    // 151 cứu, 152: kidding
    case 151:
      return [[158], [159, 160]];

    case 151:
      return [[161], [162]];

    case 162:
      return [
        [163, 164, 165, 166],
        [167, 168],
      ]; // end

    // 159 ôm. 160 out
    case 159:
      return [[169], [-5]]; // die cảnh sát bắn
    case 160:
      return [[170], [171, 172]];
    case 171:
      return [[170], [-9]]; // end win 1<<<<
    case 172:
      return [[173], [174]];
    case 174:
      return [[175], [176]]; // true ending

    // case :
    //   return [[ ], [ ]];

    //
    //

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
      return [
        [3, 4],
        [2, 8],
      ];
  }
};

export default ChatMove;
