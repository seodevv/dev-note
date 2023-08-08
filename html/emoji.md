# emoji
+ emoji 유니코드 정리

# reference
+ https://apps.timwhitlock.info/emoji/tables/unicode

# covert unicode to string(emoji)
> in js
``` javascript
const emojis = ['1F601','1F602'];
const content = emojis.map(emoji => {
  const convert = String.fromCodePoint( parseInt(emoji, 16) );
  return <div>{convert}</div>
});
```

# emojis table
|type|Native [1]|Unicode|Bytes (UTF-8)|Description|
|----|----------|-------|-------------|-----------|
|emoticons|😁|U+1F601|\xF0\x9F\x98\x81|grinning face with smiling eyes
|emoticons|😂|U+1F602|\xF0\x9F\x98\x82|face with tears of joy
|emoticons|😃|U+1F603|\xF0\x9F\x98\x83|smiling face with open mouth
|emoticons|😄|U+1F604|\xF0\x9F\x98\x84|smiling face with open mouth and smiling eyes
|emoticons|😅|U+1F605|\xF0\x9F\x98\x85|smiling face with open mouth and cold sweat
|emoticons|😆|U+1F606|\xF0\x9F\x98\x86|smiling face with open mouth and tightly-closed eyes
|emoticons|😉|U+1F609|\xF0\x9F\x98\x89|winking face
|emoticons|😊|U+1F60A|\xF0\x9F\x98\x8A|smiling face with smiling eyes
|emoticons|😋|U+1F60B|\xF0\x9F\x98\x8B|face savouring delicious food
|emoticons|😌|U+1F60C|\xF0\x9F\x98\x8C|relieved face
|emoticons|😍|U+1F60D|\xF0\x9F\x98\x8D|smiling face with heart-shaped eyes
|emoticons|😏|U+1F60F|\xF0\x9F\x98\x8F|smirking face
|emoticons|😒|U+1F612|\xF0\x9F\x98\x92|unamused face
|emoticons|😓|U+1F613|\xF0\x9F\x98\x93|face with cold sweat
|emoticons|😔|U+1F614|\xF0\x9F\x98\x94|pensive face
|emoticons|😖|U+1F616|\xF0\x9F\x98\x96|confounded face
|emoticons|😘|U+1F618|\xF0\x9F\x98\x98|face throwing a kiss
|emoticons|😚|U+1F61A|\xF0\x9F\x98\x9A|kissing face with closed eyes
|emoticons|😜|U+1F61C|\xF0\x9F\x98\x9C|face with stuck-out tongue and winking eye
|emoticons|😝|U+1F61D|\xF0\x9F\x98\x9D|face with stuck-out tongue and tightly-closed eyes
|emoticons|😞|U+1F61E|\xF0\x9F\x98\x9E|disappointed face
|emoticons|😠|U+1F620|\xF0\x9F\x98\xA0|angry face
|emoticons|😡|U+1F621|\xF0\x9F\x98\xA1|pouting face
|emoticons|😢|U+1F622|\xF0\x9F\x98\xA2|crying face
|emoticons|😣|U+1F623|\xF0\x9F\x98\xA3|persevering face
|emoticons|😤|U+1F624|\xF0\x9F\x98\xA4|face with look of triumph
|emoticons|😥|U+1F625|\xF0\x9F\x98\xA5|disappointed but relieved face
|emoticons|😨|U+1F628|\xF0\x9F\x98\xA8|fearful face
|emoticons|😩|U+1F629|\xF0\x9F\x98\xA9|weary face
|emoticons|😪|U+1F62A|\xF0\x9F\x98\xAA|sleepy face
|emoticons|😫|U+1F62B|\xF0\x9F\x98\xAB|tired face
|emoticons|😭|U+1F62D|\xF0\x9F\x98\xAD|loudly crying face
|emoticons|😰|U+1F630|\xF0\x9F\x98\xB0|face with open mouth and cold sweat
|emoticons|😱|U+1F631|\xF0\x9F\x98\xB1|face screaming in fear
|emoticons|😲|U+1F632|\xF0\x9F\x98\xB2|astonished face
|emoticons|😳|U+1F633|\xF0\x9F\x98\xB3|flushed face
|emoticons|😵|U+1F635|\xF0\x9F\x98\xB5|dizzy face
|emoticons|😷|U+1F637|\xF0\x9F\x98\xB7|face with medical mask
|emoticons|😸|U+1F638|\xF0\x9F\x98\xB8|grinning cat face with smiling eyes
|emoticons|😹|U+1F639|\xF0\x9F\x98\xB9|cat face with tears of joy
|emoticons|😺|U+1F63A|\xF0\x9F\x98\xBA|smiling cat face with open mouth
|emoticons|😻|U+1F63B|\xF0\x9F\x98\xBB|smiling cat face with heart-shaped eyes
|emoticons|😼|U+1F63C|\xF0\x9F\x98\xBC|cat face with wry smile
|emoticons|😽|U+1F63D|\xF0\x9F\x98\xBD|kissing cat face with closed eyes
|emoticons|😾|U+1F63E|\xF0\x9F\x98\xBE|pouting cat face
|emoticons|😿|U+1F63F|\xF0\x9F\x98\xBF|crying cat face
|emoticons|🙀|U+1F640|\xF0\x9F\x99\x80|weary cat face
|emoticons|🙅|U+1F645|\xF0\x9F\x99\x85|face with no good gesture
|emoticons|🙆|U+1F646|\xF0\x9F\x99\x86|face with ok gesture
|emoticons|🙇|U+1F647|\xF0\x9F\x99\x87|person bowing deeply
|emoticons|🙈|U+1F648|\xF0\x9F\x99\x88|see-no-evil monkey
|emoticons|🙉|U+1F649|\xF0\x9F\x99\x89|hear-no-evil monkey
|emoticons|🙊|U+1F64A|\xF0\x9F\x99\x8A|speak-no-evil monkey
|emoticons|🙋|U+1F64B|\xF0\x9F\x99\x8B|happy person raising one hand
|emoticons|🙌|U+1F64C|\xF0\x9F\x99\x8C|person raising both hands in celebration
|emoticons|🙍|U+1F64D|\xF0\x9F\x99\x8D|person frowning
|emoticons|🙎|U+1F64E|\xF0\x9F\x99\x8E|person with pouting face
|emoticons|🙏|U+1F64F|\xF0\x9F\x99\x8F|person with folded hands
|emoticons|😀|U+1F600|\xF0\x9F\x98\x80|grinning face
|emoticons|😇|U+1F607|\xF0\x9F\x98\x87|smiling face with halo
|emoticons|😈|U+1F608|\xF0\x9F\x98\x88|smiling face with horns
|emoticons|😎|U+1F60E|\xF0\x9F\x98\x8E|smiling face with sunglasses
|emoticons|😐|U+1F610|\xF0\x9F\x98\x90|neutral face
|emoticons|😑|U+1F611|\xF0\x9F\x98\x91|expressionless face
|emoticons|😕|U+1F615|\xF0\x9F\x98\x95|confused face
|emoticons|😗|U+1F617|\xF0\x9F\x98\x97|kissing face
|emoticons|😙|U+1F619|\xF0\x9F\x98\x99|kissing face with smiling eyes
|emoticons|😛|U+1F61B|\xF0\x9F\x98\x9B|face with stuck-out tongue
|emoticons|😟|U+1F61F|\xF0\x9F\x98\x9F|worried face
|emoticons|😦|U+1F626|\xF0\x9F\x98\xA6|frowning face with open mouth
|emoticons|😧|U+1F627|\xF0\x9F\x98\xA7|anguished face
|emoticons|😬|U+1F62C|\xF0\x9F\x98\xAC|grimacing face
|emoticons|😮|U+1F62E|\xF0\x9F\x98\xAE|face with open mouth
|emoticons|😯|U+1F62F|\xF0\x9F\x98\xAF|hushed face
|emoticons|😴|U+1F634|\xF0\x9F\x98\xB4|sleeping face
|emoticons|😶|U+1F636|\xF0\x9F\x98\xB6|face without mouth
|objects|✂|U+2702|\xE2\x9C\x82|black scissors
|marks|✅|U+2705|\xE2\x9C\x85|white heavy check mark
|transport|✈|U+2708|\xE2\x9C\x88|airplane
|objects|✉|U+2709|\xE2\x9C\x89|envelope
|emotions|✊|U+270A|\xE2\x9C\x8A|raised fist
|emotions|✋|U+270B|\xE2\x9C\x8B|raised hand
|emotions|✌|U+270C|\xE2\x9C\x8C|victory hand
|objects|✏|U+270F|\xE2\x9C\x8F|pencil
|objects|✒|U+2712|\xE2\x9C\x92|black nib
|marks|✔|U+2714|\xE2\x9C\x94|heavy check mark
|marks|✖|U+2716|\xE2\x9C\x96|heavy multiplication x
|emotions|✨|U+2728|\xE2\x9C\xA8|sparkles
|earth|✳|U+2733|\xE2\x9C\xB3|eight spoked asterisk
|earth|✴|U+2734|\xE2\x9C\xB4|eight pointed black star
|earth|❄|U+2744|\xE2\x9D\x84|snowflake
|earth|❇|U+2747|\xE2\x9D\x87|sparkle
|marks|❌|U+274C|\xE2\x9D\x8C|cross mark
|marks|❎|U+274E|\xE2\x9D\x8E|negative squared cross mark
|marks|❓|U+2753|\xE2\x9D\x93|black question mark ornament
|marks|❔|U+2754|\xE2\x9D\x94|white question mark ornament
|marks|❕|U+2755|\xE2\x9D\x95|white exclamation mark ornament
|marks|❗|U+2757|\xE2\x9D\x97|heavy exclamation mark symbol
|emotions|❤|U+2764|\xE2\x9D\xA4|heavy black heart
|marks|➕|U+2795|\xE2\x9E\x95|heavy plus sign
|marks|➖|U+2796|\xE2\x9E\x96|heavy minus sign
|marks|➗|U+2797|\xE2\x9E\x97|heavy division sign
|marks|➡|U+27A1|\xE2\x9E\xA1|black rightwards arrow
|marks|➰|U+27B0|\xE2\x9E\xB0|curly loop
|transport|🚀|U+1F680|\xF0\x9F\x9A\x80|rocket
|transport|🚃|U+1F683|\xF0\x9F\x9A\x83|railway car
|transport|🚄|U+1F684|\xF0\x9F\x9A\x84|high-speed train
|transport|🚅|U+1F685|\xF0\x9F\x9A\x85|high-speed train with bullet nose
|transport|🚇|U+1F687|\xF0\x9F\x9A\x87|metro
|transport|🚉|U+1F689|\xF0\x9F\x9A\x89|station
|transport|🚌|U+1F68C|\xF0\x9F\x9A\x8C|bus
|transport|🚏|U+1F68F|\xF0\x9F\x9A\x8F|bus stop
|transport|🚑|U+1F691|\xF0\x9F\x9A\x91|ambulance
|transport|🚒|U+1F692|\xF0\x9F\x9A\x92|fire engine
|transport|🚓|U+1F693|\xF0\x9F\x9A\x93|police car
|transport|🚕|U+1F695|\xF0\x9F\x9A\x95|taxi
|transport|🚗|U+1F697|\xF0\x9F\x9A\x97|automobile
|transport|🚙|U+1F699|\xF0\x9F\x9A\x99|recreational vehicle
|transport|🚚|U+1F69A|\xF0\x9F\x9A\x9A|delivery truck
|transport|🚢|U+1F6A2|\xF0\x9F\x9A\xA2|ship
|transport|🚤|U+1F6A4|\xF0\x9F\x9A\xA4|speedboat
|symbols|🚥|U+1F6A5|\xF0\x9F\x9A\xA5|horizontal traffic light
|symbols|🚧|U+1F6A7|\xF0\x9F\x9A\xA7|construction sign
|symbols|🚨|U+1F6A8|\xF0\x9F\x9A\xA8|police cars revolving light
|symbols|🚩|U+1F6A9|\xF0\x9F\x9A\xA9|triangular flag on post
|symbols|🚪|U+1F6AA|\xF0\x9F\x9A\xAA|door
|symbols|🚫|U+1F6AB|\xF0\x9F\x9A\xAB|no entry sign
|symbols|🚬|U+1F6AC|\xF0\x9F\x9A\xAC|smoking symbol
|symbols|🚭|U+1F6AD|\xF0\x9F\x9A\xAD|no smoking symbol
|transport|🚲|U+1F6B2|\xF0\x9F\x9A\xB2|bicycle
|transport|🚶|U+1F6B6|\xF0\x9F\x9A\xB6|pedestrian
|symbols|🚹|U+1F6B9|\xF0\x9F\x9A\xB9|mens symbol
|symbols|🚺|U+1F6BA|\xF0\x9F\x9A\xBA|womens symbol
|symbols|🚻|U+1F6BB|\xF0\x9F\x9A\xBB|restroom
|symbols|🚼|U+1F6BC|\xF0\x9F\x9A\xBC|baby symbol
|symbols|🚽|U+1F6BD|\xF0\x9F\x9A\xBD|toilet
|symbols|🚾|U+1F6BE|\xF0\x9F\x9A\xBE|water closet
|symbols|🛀|U+1F6C0|\xF0\x9F\x9B\x80|bath
|transport|🚁|U+1F681|\xF0\x9F\x9A\x81|helicopter
|transport|🚂|U+1F682|\xF0\x9F\x9A\x82|steam locomotive
|transport|🚆|U+1F686|\xF0\x9F\x9A\x86|train
|transport|🚈|U+1F688|\xF0\x9F\x9A\x88|light rail
|transport|🚊|U+1F68A|\xF0\x9F\x9A\x8A|tram
|transport|🚍|U+1F68D|\xF0\x9F\x9A\x8D|oncoming bus
|transport|🚎|U+1F68E|\xF0\x9F\x9A\x8E|trolleybus
|transport|🚐|U+1F690|\xF0\x9F\x9A\x90|minibus
|transport|🚔|U+1F694|\xF0\x9F\x9A\x94|oncoming police car
|transport|🚖|U+1F696|\xF0\x9F\x9A\x96|oncoming taxi
|transport|🚘|U+1F698|\xF0\x9F\x9A\x98|oncoming automobile
|transport|🚛|U+1F69B|\xF0\x9F\x9A\x9B|articulated lorry
|transport|🚜|U+1F69C|\xF0\x9F\x9A\x9C|tractor
|transport|🚝|U+1F69D|\xF0\x9F\x9A\x9D|monorail
|transport|🚞|U+1F69E|\xF0\x9F\x9A\x9E|mountain railway
|transport|🚟|U+1F69F|\xF0\x9F\x9A\x9F|suspension railway
|transport|🚠|U+1F6A0|\xF0\x9F\x9A\xA0|mountain cableway
|transport|🚡|U+1F6A1|\xF0\x9F\x9A\xA1|aerial tramway
|transport|🚣|U+1F6A3|\xF0\x9F\x9A\xA3|rowboat
|symbols|🚦|U+1F6A6|\xF0\x9F\x9A\xA6|vertical traffic light
|symbols|🚮|U+1F6AE|\xF0\x9F\x9A\xAE|put litter in its place symbol
|symbols|🚯|U+1F6AF|\xF0\x9F\x9A\xAF|do not litter symbol
|symbols|🚰|U+1F6B0|\xF0\x9F\x9A\xB0|potable water symbol
|symbols|🚱|U+1F6B1|\xF0\x9F\x9A\xB1|non-potable water symbol
|symbols|🚳|U+1F6B3|\xF0\x9F\x9A\xB3|no bicycles
|transport|🚴|U+1F6B4|\xF0\x9F\x9A\xB4|bicyclist
|transport|🚵|U+1F6B5|\xF0\x9F\x9A\xB5|mountain bicyclist
|symbols|🚷|U+1F6B7|\xF0\x9F\x9A\xB7|no pedestrians
|symbols|🚸|U+1F6B8|\xF0\x9F\x9A\xB8|children crossing
|symbols|🚿|U+1F6BF|\xF0\x9F\x9A\xBF|shower
|symbols|🛁|U+1F6C1|\xF0\x9F\x9B\x81|bathtub
|symbols|🛂|U+1F6C2|\xF0\x9F\x9B\x82|passport control
|symbols|🛃|U+1F6C3|\xF0\x9F\x9B\x83|customs
|symbols|🛄|U+1F6C4|\xF0\x9F\x9B\x84|baggage claim
|symbols|🛅|U+1F6C5|\xF0\x9F\x9B\x85|left luggage
|enclosed|Ⓜ|U+24C2|\xE2\x93\x82|circled latin capital letter m
|enclosed|🅰|U+1F170|\xF0\x9F\x85\xB0|negative squared latin capital letter a
|enclosed|🅱|U+1F171|\xF0\x9F\x85\xB1|negative squared latin capital letter b
|enclosed|🅾|U+1F17E|\xF0\x9F\x85\xBE|negative squared latin capital letter o
|enclosed|🅿|U+1F17F|\xF0\x9F\x85\xBF|negative squared latin capital letter p
|enclosed|🆎|U+1F18E|\xF0\x9F\x86\x8E|negative squared ab
|enclosed|🆑|U+1F191|\xF0\x9F\x86\x91|squared cl
|enclosed|🆒|U+1F192|\xF0\x9F\x86\x92|squared cool
|enclosed|🆓|U+1F193|\xF0\x9F\x86\x93|squared free
|enclosed|🆔|U+1F194|\xF0\x9F\x86\x94|squared id
|enclosed|🆕|U+1F195|\xF0\x9F\x86\x95|squared new
|enclosed|🆖|U+1F196|\xF0\x9F\x86\x96|squared ng
|enclosed|🆗|U+1F197|\xF0\x9F\x86\x97|squared ok
|enclosed|🆘|U+1F198|\xF0\x9F\x86\x98|squared sos
|enclosed|🆙|U+1F199|\xF0\x9F\x86\x99|squared up with exclamation mark
|enclosed|🆚|U+1F19A|\xF0\x9F\x86\x9A|squared vs
|enclosed|🇩🇪|U+1F1E9 U+1F1EA|\xF0\x9F\x87\xA9\xF0\x9F\x87\xAA|regional indicator symbol letter d + regional indicator symbol letter e
|enclosed|🇬🇧|U+1F1EC U+1F1E7|\xF0\x9F\x87\xAC\xF0\x9F\x87\xA7|regional indicator symbol letter g + regional indicator symbol letter b
|enclosed|🇨🇳|U+1F1E8 U+1F1F3|\xF0\x9F\x87\xA8\xF0\x9F\x87\xB3|regional indicator symbol letter c + regional indicator symbol letter n
|enclosed|🇯🇵|U+1F1EF U+1F1F5|\xF0\x9F\x87\xAF\xF0\x9F\x87\xB5|regional indicator symbol letter j + regional indicator symbol letter p
|enclosed|🇫🇷|U+1F1EB U+1F1F7|\xF0\x9F\x87\xAB\xF0\x9F\x87\xB7|regional indicator symbol letter f + regional indicator symbol letter r
|enclosed|🇰🇷|U+1F1F0 U+1F1F7|\xF0\x9F\x87\xB0\xF0\x9F\x87\xB7|regional indicator symbol letter k + regional indicator symbol letter r
|enclosed|🇪🇸|U+1F1EA U+1F1F8|\xF0\x9F\x87\xAA\xF0\x9F\x87\xB8|regional indicator symbol letter e + regional indicator symbol letter s
|enclosed|🇮🇹|U+1F1EE U+1F1F9|\xF0\x9F\x87\xAE\xF0\x9F\x87\xB9|regional indicator symbol letter i + regional indicator symbol letter t
|enclosed|🇷🇺|U+1F1F7 U+1F1FA|\xF0\x9F\x87\xB7\xF0\x9F\x87\xBA|regional indicator symbol letter r + regional indicator symbol letter u
|enclosed|🇺🇸|U+1F1FA U+1F1F8|\xF0\x9F\x87\xBA\xF0\x9F\x87\xB8|regional indicator symbol letter u + regional indicator symbol letter s
|enclosed|🈁|U+1F201|\xF0\x9F\x88\x81|squared katakana koko
|enclosed|🈂|U+1F202|\xF0\x9F\x88\x82|squared katakana sa
|enclosed|🈚|U+1F21A|\xF0\x9F\x88\x9A|squared cjk unified ideograph-7121
|enclosed|🈯|U+1F22F|\xF0\x9F\x88\xAF|squared cjk unified ideograph-6307
|enclosed|🈲|U+1F232|\xF0\x9F\x88\xB2|squared cjk unified ideograph-7981
|enclosed|🈳|U+1F233|\xF0\x9F\x88\xB3|squared cjk unified ideograph-7a7a
|enclosed|🈴|U+1F234|\xF0\x9F\x88\xB4|squared cjk unified ideograph-5408
|enclosed|🈵|U+1F235|\xF0\x9F\x88\xB5|squared cjk unified ideograph-6e80
|enclosed|🈶|U+1F236|\xF0\x9F\x88\xB6|squared cjk unified ideograph-6709
|enclosed|🈷|U+1F237|\xF0\x9F\x88\xB7|squared cjk unified ideograph-6708
|enclosed|🈸|U+1F238|\xF0\x9F\x88\xB8|squared cjk unified ideograph-7533
|enclosed|🈹|U+1F239|\xF0\x9F\x88\xB9|squared cjk unified ideograph-5272
|enclosed|🈺|U+1F23A|\xF0\x9F\x88\xBA|squared cjk unified ideograph-55b6
|enclosed|🉐|U+1F250|\xF0\x9F\x89\x90|circled ideograph advantage
|enclosed|🉑|U+1F251|\xF0\x9F\x89\x91|circled ideograph accept
|objects|©|U+00A9|\xC2\xA9|copyright sign
|objects|®|U+00AE|\xC2\xAE|registered sign
|marks|‼|U+203C|\xE2\x80\xBC|double exclamation mark
|marks|⁉|U+2049|\xE2\x81\x89|exclamation question mark
|marks|#⃣|U+0023 U+20E3|\x23\xE2\x83\xA3|number sign + combining enclosing keycap
|marks|8⃣|U+0038 U+20E3|\x38\xE2\x83\xA3|digit eight + combining enclosing keycap
|marks|9⃣|U+0039 U+20E3|\x39\xE2\x83\xA3|digit nine + combining enclosing keycap
|marks|7⃣|U+0037 U+20E3|\x37\xE2\x83\xA3|digit seven + combining enclosing keycap
|marks|0⃣|U+0030 U+20E3|\x30\xE2\x83\xA3|digit zero + combining enclosing keycap
|marks|6⃣|U+0036 U+20E3|\x36\xE2\x83\xA3|digit six + combining enclosing keycap
|marks|5⃣|U+0035 U+20E3|\x35\xE2\x83\xA3|digit five + combining enclosing keycap
|marks|4⃣|U+0034 U+20E3|\x34\xE2\x83\xA3|digit four + combining enclosing keycap
|marks|3⃣|U+0033 U+20E3|\x33\xE2\x83\xA3|digit three + combining enclosing keycap
|marks|2⃣|U+0032 U+20E3|\x32\xE2\x83\xA3|digit two + combining enclosing keycap
|marks|1⃣|U+0031 U+20E3|\x31\xE2\x83\xA3|digit one + combining enclosing keycap
|marks|™|U+2122|\xE2\x84\xA2|trade mark sign
|marks|ℹ|U+2139|\xE2\x84\xB9|information source
|marks|↔|U+2194|\xE2\x86\x94|left right arrow
|marks|↕|U+2195|\xE2\x86\x95|up down arrow
|marks|↖|U+2196|\xE2\x86\x96|north west arrow
|marks|↗|U+2197|\xE2\x86\x97|north east arrow
|marks|↘|U+2198|\xE2\x86\x98|south east arrow
|marks|↙|U+2199|\xE2\x86\x99|south west arrow
|marks|↩|U+21A9|\xE2\x86\xA9|leftwards arrow with hook
|marks|↪|U+21AA|\xE2\x86\xAA|rightwards arrow with hook
|objects|⌚|U+231A|\xE2\x8C\x9A|watch
|marks|⏰|U+23F0|\xE2\x8F\xB0|alarm clock
|marks|⌛|U+231B|\xE2\x8C\x9B|hourglass
|marks|⏳|U+23F3|\xE2\x8F\xB3|hourglass with flowing sand
|marks|⏩|U+23E9|\xE2\x8F\xA9|black right-pointing double triangle
|marks|⏪|U+23EA|\xE2\x8F\xAA|black left-pointing double triangle
|marks|⏫|U+23EB|\xE2\x8F\xAB|black up-pointing double triangle
|marks|⏬|U+23EC|\xE2\x8F\xAC|black down-pointing double triangle
|marks|▪|U+25AA|\xE2\x96\xAA|black small square
|marks|▫|U+25AB|\xE2\x96\xAB|white small square
|marks|▶|U+25B6|\xE2\x96\xB6|black right-pointing triangle
|marks|◀|U+25C0|\xE2\x97\x80|black left-pointing triangle
|marks|◻|U+25FB|\xE2\x97\xBB|white medium square
|marks|◼|U+25FC|\xE2\x97\xBC|black medium square
|marks|◽|U+25FD|\xE2\x97\xBD|white medium small square
|marks|◾|U+25FE|\xE2\x97\xBE|black medium small square
|earth|☀|U+2600|\xE2\x98\x80|black sun with rays
|earth|☁|U+2601|\xE2\x98\x81|cloud
|marks|☎|U+260E|\xE2\x98\x8E|black telephone
|marks|☑|U+2611|\xE2\x98\x91|ballot box with check
|earth|☔|U+2614|\xE2\x98\x94|umbrella with rain drops
|objects|☕|U+2615|\xE2\x98\x95|hot beverage
|emotions|☝|U+261D|\xE2\x98\x9D|white up pointing index
|emoticons|☺|U+263A|\xE2\x98\xBA|white smiling face
|earth|♈|U+2648|\xE2\x99\x88|aries
|earth|♉|U+2649|\xE2\x99\x89|taurus
|earth|♊|U+264A|\xE2\x99\x8A|gemini
|earth|♋|U+264B|\xE2\x99\x8B|cancer
|earth|♌|U+264C|\xE2\x99\x8C|leo
|earth|♍|U+264D|\xE2\x99\x8D|virgo
|earth|♎|U+264E|\xE2\x99\x8E|libra
|earth|♏|U+264F|\xE2\x99\x8F|scorpius
|earth|♐|U+2650|\xE2\x99\x90|sagittarius
|earth|♑|U+2651|\xE2\x99\x91|capricorn
|earth|♒|U+2652|\xE2\x99\x92|aquarius
|earth|♓|U+2653|\xE2\x99\x93|pisces
|marks|♠|U+2660|\xE2\x99\xA0|black spade suit
|marks|♣|U+2663|\xE2\x99\xA3|black club suit
|marks|♥|U+2665|\xE2\x99\xA5|black heart suit
|marks|♦|U+2666|\xE2\x99\xA6|black diamond suit
|marks|♨|U+2668|\xE2\x99\xA8|hot springs
|marks|♻|U+267B|\xE2\x99\xBB|black universal recycling symbol
|marks|♿|U+267F|\xE2\x99\xBF|wheelchair symbol
|marks|⚓|U+2693|\xE2\x9A\x93|anchor
|marks|⚠|U+26A0|\xE2\x9A\xA0|warning sign
|marks|⚡|U+26A1|\xE2\x9A\xA1|high voltage sign
|marks|⚪|U+26AA|\xE2\x9A\xAA|medium white circle
|marks|⚫|U+26AB|\xE2\x9A\xAB|medium black circle
|symbols|⚽|U+26BD|\xE2\x9A\xBD|soccer ball
|symbols|⚾|U+26BE|\xE2\x9A\xBE|baseball
|symbols|⛄|U+26C4|\xE2\x9B\x84|snowman without snow
|symbols|⛅|U+26C5|\xE2\x9B\x85|sun behind cloud
|earth|⛎|U+26CE|\xE2\x9B\x8E|ophiuchus
|marks|⛔|U+26D4|\xE2\x9B\x94|no entry
|symbols|⛪|U+26EA|\xE2\x9B\xAA|church
|symbols|⛲|U+26F2|\xE2\x9B\xB2|fountain
|symbols|⛳|U+26F3|\xE2\x9B\xB3|flag in hole
|symbols|⛵|U+26F5|\xE2\x9B\xB5|sailboat
|symbols|⛺|U+26FA|\xE2\x9B\xBA|tent
|symbols|⛽|U+26FD|\xE2\x9B\xBD|fuel pump
|marks|⤴|U+2934|\xE2\xA4\xB4|arrow pointing rightwards then curving upwards
|marks|⤵|U+2935|\xE2\xA4\xB5|arrow pointing rightwards then curving downwards
|marks|⬅|U+2B05|\xE2\xAC\x85|leftwards black arrow
|marks|⬆|U+2B06|\xE2\xAC\x86|upwards black arrow
|marks|⬇|U+2B07|\xE2\xAC\x87|downwards black arrow
|marks|⬛|U+2B1B|\xE2\xAC\x9B|black large square
|marks|⬜|U+2B1C|\xE2\xAC\x9C|white large square
|marks|⭐|U+2B50|\xE2\xAD\x90|white medium star
|marks|⭕|U+2B55|\xE2\xAD\x95|heavy large circle
|marks|〰|U+3030|\xE3\x80\xB0|wavy dash
|marks|〽|U+303D|\xE3\x80\xBD|part alternation mark
|symbols|㊗|U+3297|\xE3\x8A\x97|circled ideograph congratulation
|symbols|㊙|U+3299|\xE3\x8A\x99|circled ideograph secret
|symbols|🀄|U+1F004|\xF0\x9F\x80\x84|mahjong tile red dragon
|symbols|🃏|U+1F0CF|\xF0\x9F\x83\x8F|playing card black joker
|symbols|🌀|U+1F300|\xF0\x9F\x8C\x80|cyclone
|symbols|🌁|U+1F301|\xF0\x9F\x8C\x81|foggy
|symbols|🌂|U+1F302|\xF0\x9F\x8C\x82|closed umbrella
|symbols|🌃|U+1F303|\xF0\x9F\x8C\x83|night with stars
|symbols|🌄|U+1F304|\xF0\x9F\x8C\x84|sunrise over mountains
|symbols|🌅|U+1F305|\xF0\x9F\x8C\x85|sunrise
|symbols|🌆|U+1F306|\xF0\x9F\x8C\x86|cityscape at dusk
|symbols|🌇|U+1F307|\xF0\x9F\x8C\x87|sunset over buildings
|symbols|🌈|U+1F308|\xF0\x9F\x8C\x88|rainbow
|symbols|🌉|U+1F309|\xF0\x9F\x8C\x89|bridge at night
|symbols|🌊|U+1F30A|\xF0\x9F\x8C\x8A|water wave
|symbols|🌋|U+1F30B|\xF0\x9F\x8C\x8B|volcano
|earth|🌌|U+1F30C|\xF0\x9F\x8C\x8C|milky way
|earth|🌏|U+1F30F|\xF0\x9F\x8C\x8F|earth globe asia-australia
|earth|🌑|U+1F311|\xF0\x9F\x8C\x91|new moon symbol
|earth|🌓|U+1F313|\xF0\x9F\x8C\x93|first quarter moon symbol
|earth|🌔|U+1F314|\xF0\x9F\x8C\x94|waxing gibbous moon symbol
|earth|🌕|U+1F315|\xF0\x9F\x8C\x95|full moon symbol
|earth|🌙|U+1F319|\xF0\x9F\x8C\x99|crescent moon
|earth|🌛|U+1F31B|\xF0\x9F\x8C\x9B|first quarter moon with face
|earth|🌟|U+1F31F|\xF0\x9F\x8C\x9F|glowing star
|earth|🌠|U+1F320|\xF0\x9F\x8C\xA0|shooting star
|earth|🌰|U+1F330|\xF0\x9F\x8C\xB0|chestnut
|earth|🌱|U+1F331|\xF0\x9F\x8C\xB1|seedling
|earth|🌴|U+1F334|\xF0\x9F\x8C\xB4|palm tree
|earth|🌵|U+1F335|\xF0\x9F\x8C\xB5|cactus
|earth|🌷|U+1F337|\xF0\x9F\x8C\xB7|tulip
|earth|🌸|U+1F338|\xF0\x9F\x8C\xB8|cherry blossom
|earth|🌹|U+1F339|\xF0\x9F\x8C\xB9|rose
|earth|🌺|U+1F33A|\xF0\x9F\x8C\xBA|hibiscus
|earth|🌻|U+1F33B|\xF0\x9F\x8C\xBB|sunflower
|earth|🌼|U+1F33C|\xF0\x9F\x8C\xBC|blossom
|earth|🌽|U+1F33D|\xF0\x9F\x8C\xBD|ear of maize
|earth|🌾|U+1F33E|\xF0\x9F\x8C\xBE|ear of rice
|earth|🌿|U+1F33F|\xF0\x9F\x8C\xBF|herb
|earth|🍀|U+1F340|\xF0\x9F\x8D\x80|four leaf clover
|earth|🍁|U+1F341|\xF0\x9F\x8D\x81|maple leaf
|earth|🍂|U+1F342|\xF0\x9F\x8D\x82|fallen leaf
|earth|🍃|U+1F343|\xF0\x9F\x8D\x83|leaf fluttering in wind
|earth|🍄|U+1F344|\xF0\x9F\x8D\x84|mushroom
|fruits|🍅|U+1F345|\xF0\x9F\x8D\x85|tomato
|fruits|🍆|U+1F346|\xF0\x9F\x8D\x86|aubergine
|fruits|🍇|U+1F347|\xF0\x9F\x8D\x87|grapes
|fruits|🍈|U+1F348|\xF0\x9F\x8D\x88|melon
|fruits|🍉|U+1F349|\xF0\x9F\x8D\x89|watermelon
|fruits|🍊|U+1F34A|\xF0\x9F\x8D\x8A|tangerine
|fruits|🍌|U+1F34C|\xF0\x9F\x8D\x8C|banana
|fruits|🍍|U+1F34D|\xF0\x9F\x8D\x8D|pineapple
|fruits|🍎|U+1F34E|\xF0\x9F\x8D\x8E|red apple
|fruits|🍏|U+1F34F|\xF0\x9F\x8D\x8F|green apple
|fruits|🍑|U+1F351|\xF0\x9F\x8D\x91|peach
|fruits|🍒|U+1F352|\xF0\x9F\x8D\x92|cherries
|fruits|🍓|U+1F353|\xF0\x9F\x8D\x93|strawberry
|fruits|🍔|U+1F354|\xF0\x9F\x8D\x94|hamburger
|fruits|🍕|U+1F355|\xF0\x9F\x8D\x95|slice of pizza
|fruits|🍖|U+1F356|\xF0\x9F\x8D\x96|meat on bone
|fruits|🍗|U+1F357|\xF0\x9F\x8D\x97|poultry leg
|fruits|🍘|U+1F358|\xF0\x9F\x8D\x98|rice cracker
|fruits|🍙|U+1F359|\xF0\x9F\x8D\x99|rice ball
|fruits|🍚|U+1F35A|\xF0\x9F\x8D\x9A|cooked rice
|fruits|🍛|U+1F35B|\xF0\x9F\x8D\x9B|curry and rice
|fruits|🍜|U+1F35C|\xF0\x9F\x8D\x9C|steaming bowl
|fruits|🍝|U+1F35D|\xF0\x9F\x8D\x9D|spaghetti
|fruits|🍞|U+1F35E|\xF0\x9F\x8D\x9E|bread
|fruits|🍟|U+1F35F|\xF0\x9F\x8D\x9F|french fries
|fruits|🍠|U+1F360|\xF0\x9F\x8D\xA0|roasted sweet potato
|fruits|🍡|U+1F361|\xF0\x9F\x8D\xA1|dango
|fruits|🍢|U+1F362|\xF0\x9F\x8D\xA2|oden
|fruits|🍣|U+1F363|\xF0\x9F\x8D\xA3|sushi
|fruits|🍤|U+1F364|\xF0\x9F\x8D\xA4|fried shrimp
|fruits|🍥|U+1F365|\xF0\x9F\x8D\xA5|fish cake with swirl design
|fruits|🍦|U+1F366|\xF0\x9F\x8D\xA6|soft ice cream
|fruits|🍧|U+1F367|\xF0\x9F\x8D\xA7|shaved ice
|fruits|🍨|U+1F368|\xF0\x9F\x8D\xA8|ice cream
|fruits|🍩|U+1F369|\xF0\x9F\x8D\xA9|doughnut
|fruits|🍪|U+1F36A|\xF0\x9F\x8D\xAA|cookie
|fruits|🍫|U+1F36B|\xF0\x9F\x8D\xAB|chocolate bar
|fruits|🍬|U+1F36C|\xF0\x9F\x8D\xAC|candy
|fruits|🍭|U+1F36D|\xF0\x9F\x8D\xAD|lollipop
|fruits|🍮|U+1F36E|\xF0\x9F\x8D\xAE|custard
|fruits|🍯|U+1F36F|\xF0\x9F\x8D\xAF|honey pot
|fruits|🍰|U+1F370|\xF0\x9F\x8D\xB0|shortcake
|fruits|🍱|U+1F371|\xF0\x9F\x8D\xB1|bento box
|fruits|🍲|U+1F372|\xF0\x9F\x8D\xB2|pot of food
|fruits|🍳|U+1F373|\xF0\x9F\x8D\xB3|cooking
|fruits|🍴|U+1F374|\xF0\x9F\x8D\xB4|fork and knife
|fruits|🍵|U+1F375|\xF0\x9F\x8D\xB5|teacup without handle
|fruits|🍶|U+1F376|\xF0\x9F\x8D\xB6|sake bottle and cup
|fruits|🍷|U+1F377|\xF0\x9F\x8D\xB7|wine glass
|fruits|🍸|U+1F378|\xF0\x9F\x8D\xB8|cocktail glass
|fruits|🍹|U+1F379|\xF0\x9F\x8D\xB9|tropical drink
|fruits|🍺|U+1F37A|\xF0\x9F\x8D\xBA|beer mug
|fruits|🍻|U+1F37B|\xF0\x9F\x8D\xBB|clinking beer mugs
|fruits|🎀|U+1F380|\xF0\x9F\x8E\x80|ribbon
|fruits|🎁|U+1F381|\xF0\x9F\x8E\x81|wrapped present
|fruits|🎂|U+1F382|\xF0\x9F\x8E\x82|birthday cake
|fruits|🎃|U+1F383|\xF0\x9F\x8E\x83|jack-o-lantern
|symbols|🎄|U+1F384|\xF0\x9F\x8E\x84|christmas tree
|symbols|🎅|U+1F385|\xF0\x9F\x8E\x85|father christmas
|symbols|🎆|U+1F386|\xF0\x9F\x8E\x86|fireworks
|symbols|🎇|U+1F387|\xF0\x9F\x8E\x87|firework sparkler
|symbols|🎈|U+1F388|\xF0\x9F\x8E\x88|balloon
|emotions|🎉|U+1F389|\xF0\x9F\x8E\x89|party popper
|emotions|🎊|U+1F38A|\xF0\x9F\x8E\x8A|confetti ball
|symbols|🎋|U+1F38B|\xF0\x9F\x8E\x8B|tanabata tree
|symbols|🎌|U+1F38C|\xF0\x9F\x8E\x8C|crossed flags
|symbols|🎍|U+1F38D|\xF0\x9F\x8E\x8D|pine decoration
|symbols|🎎|U+1F38E|\xF0\x9F\x8E\x8E|japanese dolls
|symbols|🎏|U+1F38F|\xF0\x9F\x8E\x8F|carp streamer
|symbols|🎐|U+1F390|\xF0\x9F\x8E\x90|wind chime
|symbols|🎑|U+1F391|\xF0\x9F\x8E\x91|moon viewing ceremony
|symbols|🎒|U+1F392|\xF0\x9F\x8E\x92|school satchel
|symbols|🎓|U+1F393|\xF0\x9F\x8E\x93|graduation cap
|symbols|🎠|U+1F3A0|\xF0\x9F\x8E\xA0|carousel horse
|activity|🎡|U+1F3A1|\xF0\x9F\x8E\xA1|ferris wheel
|activity|🎢|U+1F3A2|\xF0\x9F\x8E\xA2|roller coaster
|activity|🎣|U+1F3A3|\xF0\x9F\x8E\xA3|fishing pole and fish
|activity|🎤|U+1F3A4|\xF0\x9F\x8E\xA4|microphone
|activity|🎥|U+1F3A5|\xF0\x9F\x8E\xA5|movie camera
|activity|🎦|U+1F3A6|\xF0\x9F\x8E\xA6|cinema
|activity|🎧|U+1F3A7|\xF0\x9F\x8E\xA7|headphone
|activity|🎨|U+1F3A8|\xF0\x9F\x8E\xA8|artist palette
|activity|🎩|U+1F3A9|\xF0\x9F\x8E\xA9|top hat
|activity|🎪|U+1F3AA|\xF0\x9F\x8E\xAA|circus tent
|activity|🎫|U+1F3AB|\xF0\x9F\x8E\xAB|ticket
|activity|🎬|U+1F3AC|\xF0\x9F\x8E\xAC|clapper board
|activity|🎭|U+1F3AD|\xF0\x9F\x8E\xAD|performing arts
|activity|🎮|U+1F3AE|\xF0\x9F\x8E\xAE|video game
|activity|🎯|U+1F3AF|\xF0\x9F\x8E\xAF|direct hit
|activity|🎰|U+1F3B0|\xF0\x9F\x8E\xB0|slot machine
|activity|🎱|U+1F3B1|\xF0\x9F\x8E\xB1|billiards
|activity|🎲|U+1F3B2|\xF0\x9F\x8E\xB2|game die
|activity|🎳|U+1F3B3|\xF0\x9F\x8E\xB3|bowling
|activity|🎴|U+1F3B4|\xF0\x9F\x8E\xB4|flower playing cards
|activity|🎵|U+1F3B5|\xF0\x9F\x8E\xB5|musical note
|activity|🎶|U+1F3B6|\xF0\x9F\x8E\xB6|multiple musical notes
|activity|🎷|U+1F3B7|\xF0\x9F\x8E\xB7|saxophone
|activity|🎸|U+1F3B8|\xF0\x9F\x8E\xB8|guitar
|activity|🎹|U+1F3B9|\xF0\x9F\x8E\xB9|musical keyboard
|activity|🎺|U+1F3BA|\xF0\x9F\x8E\xBA|trumpet
|activity|🎻|U+1F3BB|\xF0\x9F\x8E\xBB|violin
|activity|🎼|U+1F3BC|\xF0\x9F\x8E\xBC|musical score
|activity|🎽|U+1F3BD|\xF0\x9F\x8E\xBD|running shirt with sash
|activity|🎾|U+1F3BE|\xF0\x9F\x8E\xBE|tennis racquet and ball
|activity|🎿|U+1F3BF|\xF0\x9F\x8E\xBF|ski and ski boot
|activity|🏀|U+1F3C0|\xF0\x9F\x8F\x80|basketball and hoop
|activity|🏁|U+1F3C1|\xF0\x9F\x8F\x81|chequered flag
|activity|🏂|U+1F3C2|\xF0\x9F\x8F\x82|snowboarder
|activity|🏃|U+1F3C3|\xF0\x9F\x8F\x83|runner
|activity|🏄|U+1F3C4|\xF0\x9F\x8F\x84|surfer
|activity|🏆|U+1F3C6|\xF0\x9F\x8F\x86|trophy
|activity|🏈|U+1F3C8|\xF0\x9F\x8F\x88|american football
|activity|🏊|U+1F3CA|\xF0\x9F\x8F\x8A|swimmer
|buildings|🏠|U+1F3E0|\xF0\x9F\x8F\xA0|house building
|buildings|🏡|U+1F3E1|\xF0\x9F\x8F\xA1|house with garden
|buildings|🏢|U+1F3E2|\xF0\x9F\x8F\xA2|office building
|buildings|🏣|U+1F3E3|\xF0\x9F\x8F\xA3|japanese post office
|buildings|🏥|U+1F3E5|\xF0\x9F\x8F\xA5|hospital
|buildings|🏦|U+1F3E6|\xF0\x9F\x8F\xA6|bank
|buildings|🏧|U+1F3E7|\xF0\x9F\x8F\xA7|automated teller machine
|buildings|🏨|U+1F3E8|\xF0\x9F\x8F\xA8|hotel
|buildings|🏩|U+1F3E9|\xF0\x9F\x8F\xA9|love hotel
|buildings|🏪|U+1F3EA|\xF0\x9F\x8F\xAA|convenience store
|buildings|🏫|U+1F3EB|\xF0\x9F\x8F\xAB|school
|buildings|🏬|U+1F3EC|\xF0\x9F\x8F\xAC|department store
|buildings|🏭|U+1F3ED|\xF0\x9F\x8F\xAD|factory
|buildings|🏮|U+1F3EE|\xF0\x9F\x8F\xAE|izakaya lantern
|buildings|🏯|U+1F3EF|\xF0\x9F\x8F\xAF|japanese castle
|buildings|🏰|U+1F3F0|\xF0\x9F\x8F\xB0|european castle
|animals|🐌|U+1F40C|\xF0\x9F\x90\x8C|snail
|animals|🐍|U+1F40D|\xF0\x9F\x90\x8D|snake
|animals|🐎|U+1F40E|\xF0\x9F\x90\x8E|horse
|animals|🐑|U+1F411|\xF0\x9F\x90\x91|sheep
|animals|🐒|U+1F412|\xF0\x9F\x90\x92|monkey
|animals|🐔|U+1F414|\xF0\x9F\x90\x94|chicken
|animals|🐗|U+1F417|\xF0\x9F\x90\x97|boar
|animals|🐘|U+1F418|\xF0\x9F\x90\x98|elephant
|animals|🐙|U+1F419|\xF0\x9F\x90\x99|octopus
|animals|🐚|U+1F41A|\xF0\x9F\x90\x9A|spiral shell
|animals|🐛|U+1F41B|\xF0\x9F\x90\x9B|bug
|animals|🐜|U+1F41C|\xF0\x9F\x90\x9C|ant
|animals|🐝|U+1F41D|\xF0\x9F\x90\x9D|honeybee
|animals|🐞|U+1F41E|\xF0\x9F\x90\x9E|lady beetle
|animals|🐟|U+1F41F|\xF0\x9F\x90\x9F|fish
|animals|🐠|U+1F420|\xF0\x9F\x90\xA0|tropical fish
|animals|🐡|U+1F421|\xF0\x9F\x90\xA1|blowfish
|animals|🐢|U+1F422|\xF0\x9F\x90\xA2|turtle
|animals|🐣|U+1F423|\xF0\x9F\x90\xA3|hatching chick
|animals|🐤|U+1F424|\xF0\x9F\x90\xA4|baby chick
|animals|🐥|U+1F425|\xF0\x9F\x90\xA5|front-facing baby chick
|animals|🐦|U+1F426|\xF0\x9F\x90\xA6|bird
|animals|🐧|U+1F427|\xF0\x9F\x90\xA7|penguin
|animals|🐨|U+1F428|\xF0\x9F\x90\xA8|koala
|animals|🐩|U+1F429|\xF0\x9F\x90\xA9|poodle
|animals|🐫|U+1F42B|\xF0\x9F\x90\xAB|bactrian camel
|animals|🐬|U+1F42C|\xF0\x9F\x90\xAC|dolphin
|animals|🐭|U+1F42D|\xF0\x9F\x90\xAD|mouse face
|animals|🐮|U+1F42E|\xF0\x9F\x90\xAE|cow face
|animals|🐯|U+1F42F|\xF0\x9F\x90\xAF|tiger face
|animals|🐰|U+1F430|\xF0\x9F\x90\xB0|rabbit face
|animals|🐱|U+1F431|\xF0\x9F\x90\xB1|cat face
|animals|🐲|U+1F432|\xF0\x9F\x90\xB2|dragon face
|animals|🐳|U+1F433|\xF0\x9F\x90\xB3|spouting whale
|animals|🐴|U+1F434|\xF0\x9F\x90\xB4|horse face
|animals|🐵|U+1F435|\xF0\x9F\x90\xB5|monkey face
|animals|🐶|U+1F436|\xF0\x9F\x90\xB6|dog face
|animals|🐷|U+1F437|\xF0\x9F\x90\xB7|pig face
|animals|🐸|U+1F438|\xF0\x9F\x90\xB8|frog face
|animals|🐹|U+1F439|\xF0\x9F\x90\xB9|hamster face
|animals|🐺|U+1F43A|\xF0\x9F\x90\xBA|wolf face
|animals|🐻|U+1F43B|\xF0\x9F\x90\xBB|bear face
|animals|🐼|U+1F43C|\xF0\x9F\x90\xBC|panda face
|animals|🐽|U+1F43D|\xF0\x9F\x90\xBD|pig nose
|animals|🐾|U+1F43E|\xF0\x9F\x90\xBE|paw prints
|emotions|👀|U+1F440|\xF0\x9F\x91\x80|eyes
|emotions|👂|U+1F442|\xF0\x9F\x91\x82|ear
|emotions|👃|U+1F443|\xF0\x9F\x91\x83|nose
|emotions|👄|U+1F444|\xF0\x9F\x91\x84|mouth
|emotions|👅|U+1F445|\xF0\x9F\x91\x85|tongue
|emotions|👆|U+1F446|\xF0\x9F\x91\x86|white up pointing backhand index
|emotions|👇|U+1F447|\xF0\x9F\x91\x87|white down pointing backhand index
|emotions|👈|U+1F448|\xF0\x9F\x91\x88|white left pointing backhand index
|emotions|👉|U+1F449|\xF0\x9F\x91\x89|white right pointing backhand index
|emotions|👊|U+1F44A|\xF0\x9F\x91\x8A|fisted hand sign
|emotions|👋|U+1F44B|\xF0\x9F\x91\x8B|waving hand sign
|emotions|👌|U+1F44C|\xF0\x9F\x91\x8C|ok hand sign
|emotions|👍|U+1F44D|\xF0\x9F\x91\x8D|thumbs up sign
|emotions|👎|U+1F44E|\xF0\x9F\x91\x8E|thumbs down sign
|emotions|👏|U+1F44F|\xF0\x9F\x91\x8F|clapping hands sign
|emotions|👐|U+1F450|\xF0\x9F\x91\x90|open hands sign
|symbols|👑|U+1F451|\xF0\x9F\x91\x91|crown
|symbols|👒|U+1F452|\xF0\x9F\x91\x92|womans hat
|symbols|👓|U+1F453|\xF0\x9F\x91\x93|eyeglasses
|symbols|👔|U+1F454|\xF0\x9F\x91\x94|necktie
|symbols|👕|U+1F455|\xF0\x9F\x91\x95|t-shirt
|symbols|👖|U+1F456|\xF0\x9F\x91\x96|jeans
|symbols|👗|U+1F457|\xF0\x9F\x91\x97|dress
|symbols|👘|U+1F458|\xF0\x9F\x91\x98|kimono
|symbols|👙|U+1F459|\xF0\x9F\x91\x99|bikini
|symbols|👚|U+1F45A|\xF0\x9F\x91\x9A|womans clothes
|symbols|👛|U+1F45B|\xF0\x9F\x91\x9B|purse
|symbols|👜|U+1F45C|\xF0\x9F\x91\x9C|handbag
|symbols|👝|U+1F45D|\xF0\x9F\x91\x9D|pouch
|symbols|👞|U+1F45E|\xF0\x9F\x91\x9E|mans shoe
|symbols|👟|U+1F45F|\xF0\x9F\x91\x9F|athletic shoe
|symbols|👠|U+1F460|\xF0\x9F\x91\xA0|high-heeled shoe
|symbols|👡|U+1F461|\xF0\x9F\x91\xA1|womans sandal
|symbols|👢|U+1F462|\xF0\x9F\x91\xA2|womans boots
|symbols|👣|U+1F463|\xF0\x9F\x91\xA3|footprints
|symbols|👤|U+1F464|\xF0\x9F\x91\xA4|bust in silhouette
|symbols|👦|U+1F466|\xF0\x9F\x91\xA6|boy
|symbols|👧|U+1F467|\xF0\x9F\x91\xA7|girl
|symbols|👨|U+1F468|\xF0\x9F\x91\xA8|man
|symbols|👩|U+1F469|\xF0\x9F\x91\xA9|woman
|symbols|👪|U+1F46A|\xF0\x9F\x91\xAA|family
|symbols|👫|U+1F46B|\xF0\x9F\x91\xAB|man and woman holding hands
|symbols|👮|U+1F46E|\xF0\x9F\x91\xAE|police officer
|symbols|👯|U+1F46F|\xF0\x9F\x91\xAF|woman with bunny ears
|symbols|👰|U+1F470|\xF0\x9F\x91\xB0|bride with veil
|symbols|👱|U+1F471|\xF0\x9F\x91\xB1|person with blond hair
|symbols|👲|U+1F472|\xF0\x9F\x91\xB2|man with gua pi mao
|symbols|👳|U+1F473|\xF0\x9F\x91\xB3|man with turban
|symbols|👴|U+1F474|\xF0\x9F\x91\xB4|older man
|symbols|👵|U+1F475|\xF0\x9F\x91\xB5|older woman
|symbols|👶|U+1F476|\xF0\x9F\x91\xB6|baby
|symbols|👷|U+1F477|\xF0\x9F\x91\xB7|construction worker
|symbols|👸|U+1F478|\xF0\x9F\x91\xB8|princess
|symbols|👹|U+1F479|\xF0\x9F\x91\xB9|japanese ogre
|symbols|👺|U+1F47A|\xF0\x9F\x91\xBA|japanese goblin
|symbols|👻|U+1F47B|\xF0\x9F\x91\xBB|ghost
|symbols|👼|U+1F47C|\xF0\x9F\x91\xBC|baby angel
|symbols|👽|U+1F47D|\xF0\x9F\x91\xBD|extraterrestrial alien
|symbols|👾|U+1F47E|\xF0\x9F\x91\xBE|alien monster
|symbols|👿|U+1F47F|\xF0\x9F\x91\xBF|imp
|symbols|💀|U+1F480|\xF0\x9F\x92\x80|skull
|symbols|💁|U+1F481|\xF0\x9F\x92\x81|information desk person
|symbols|💂|U+1F482|\xF0\x9F\x92\x82|guardsman
|symbols|💃|U+1F483|\xF0\x9F\x92\x83|dancer
|symbols|💄|U+1F484|\xF0\x9F\x92\x84|lipstick
|symbols|💅|U+1F485|\xF0\x9F\x92\x85|nail polish
|symbols|💆|U+1F486|\xF0\x9F\x92\x86|face massage
|symbols|💇|U+1F487|\xF0\x9F\x92\x87|haircut
|symbols|💈|U+1F488|\xF0\x9F\x92\x88|barber pole
|symbols|💉|U+1F489|\xF0\x9F\x92\x89|syringe
|symbols|💊|U+1F48A|\xF0\x9F\x92\x8A|pill
|emotions|💋|U+1F48B|\xF0\x9F\x92\x8B|kiss mark
|symbols|💌|U+1F48C|\xF0\x9F\x92\x8C|love letter
|symbols|💍|U+1F48D|\xF0\x9F\x92\x8D|ring
|symbols|💎|U+1F48E|\xF0\x9F\x92\x8E|gem stone
|emotions|💏|U+1F48F|\xF0\x9F\x92\x8F|kiss
|emotions|💐|U+1F490|\xF0\x9F\x92\x90|bouquet
|emotions|💑|U+1F491|\xF0\x9F\x92\x91|couple with heart
|emotions|💒|U+1F492|\xF0\x9F\x92\x92|wedding
|emotions|💓|U+1F493|\xF0\x9F\x92\x93|beating heart
|emotions|💔|U+1F494|\xF0\x9F\x92\x94|broken heart
|emotions|💕|U+1F495|\xF0\x9F\x92\x95|two hearts
|emotions|💖|U+1F496|\xF0\x9F\x92\x96|sparkling heart
|emotions|💗|U+1F497|\xF0\x9F\x92\x97|growing heart
|emotions|💘|U+1F498|\xF0\x9F\x92\x98|heart with arrow
|emotions|💙|U+1F499|\xF0\x9F\x92\x99|blue heart
|emotions|💚|U+1F49A|\xF0\x9F\x92\x9A|green heart
|emotions|💛|U+1F49B|\xF0\x9F\x92\x9B|yellow heart
|emotions|💜|U+1F49C|\xF0\x9F\x92\x9C|purple heart
|emotions|💝|U+1F49D|\xF0\x9F\x92\x9D|heart with ribbon
|emotions|💞|U+1F49E|\xF0\x9F\x92\x9E|revolving hearts
|emotions|💟|U+1F49F|\xF0\x9F\x92\x9F|heart decoration
|emotions|💠|U+1F4A0|\xF0\x9F\x92\xA0|diamond shape with a dot inside
|emotions|💡|U+1F4A1|\xF0\x9F\x92\xA1|electric light bulb
|emotions|💢|U+1F4A2|\xF0\x9F\x92\xA2|anger symbol
|emotions|💣|U+1F4A3|\xF0\x9F\x92\xA3|bomb
|emotions|💤|U+1F4A4|\xF0\x9F\x92\xA4|sleeping symbol
|emotions|💥|U+1F4A5|\xF0\x9F\x92\xA5|collision symbol
|emotions|💦|U+1F4A6|\xF0\x9F\x92\xA6|splashing sweat symbol
|emotions|💧|U+1F4A7|\xF0\x9F\x92\xA7|droplet
|emotions|💨|U+1F4A8|\xF0\x9F\x92\xA8|dash symbol
|emotions|💩|U+1F4A9|\xF0\x9F\x92\xA9|pile of poo
|emotions|💪|U+1F4AA|\xF0\x9F\x92\xAA|flexed biceps
|emotions|💫|U+1F4AB|\xF0\x9F\x92\xAB|dizzy symbol
|emotions|💬|U+1F4AC|\xF0\x9F\x92\xAC|speech balloon
|emotions|💮|U+1F4AE|\xF0\x9F\x92\xAE|white flower
|emotions|💯|U+1F4AF|\xF0\x9F\x92\xAF|hundred points symbol
|symbols|💰|U+1F4B0|\xF0\x9F\x92\xB0|money bag
|symbols|💱|U+1F4B1|\xF0\x9F\x92\xB1|currency exchange
|symbols|💲|U+1F4B2|\xF0\x9F\x92\xB2|heavy dollar sign
|symbols|💳|U+1F4B3|\xF0\x9F\x92\xB3|credit card
|symbols|💴|U+1F4B4|\xF0\x9F\x92\xB4|banknote with yen sign
|symbols|💵|U+1F4B5|\xF0\x9F\x92\xB5|banknote with dollar sign
|symbols|💸|U+1F4B8|\xF0\x9F\x92\xB8|money with wings
|symbols|💹|U+1F4B9|\xF0\x9F\x92\xB9|chart with upwards trend and yen sign
|symbols|💺|U+1F4BA|\xF0\x9F\x92\xBA|seat
|symbols|💻|U+1F4BB|\xF0\x9F\x92\xBB|personal computer
|symbols|💼|U+1F4BC|\xF0\x9F\x92\xBC|briefcase
|symbols|💽|U+1F4BD|\xF0\x9F\x92\xBD|minidisc
|symbols|💾|U+1F4BE|\xF0\x9F\x92\xBE|floppy disk
|symbols|💿|U+1F4BF|\xF0\x9F\x92\xBF|optical disc
|symbols|📀|U+1F4C0|\xF0\x9F\x93\x80|dvd
|symbols|📁|U+1F4C1|\xF0\x9F\x93\x81|file folder
|symbols|📂|U+1F4C2|\xF0\x9F\x93\x82|open file folder
|symbols|📃|U+1F4C3|\xF0\x9F\x93\x83|page with curl
|symbols|📄|U+1F4C4|\xF0\x9F\x93\x84|page facing up
|symbols|📅|U+1F4C5|\xF0\x9F\x93\x85|calendar
|symbols|📆|U+1F4C6|\xF0\x9F\x93\x86|tear-off calendar
|symbols|📇|U+1F4C7|\xF0\x9F\x93\x87|card index
|symbols|📈|U+1F4C8|\xF0\x9F\x93\x88|chart with upwards trend
|symbols|📉|U+1F4C9|\xF0\x9F\x93\x89|chart with downwards trend
|symbols|📊|U+1F4CA|\xF0\x9F\x93\x8A|bar chart
|symbols|📋|U+1F4CB|\xF0\x9F\x93\x8B|clipboard
|marks|📌|U+1F4CC|\xF0\x9F\x93\x8C|pushpin
|marks|📍|U+1F4CD|\xF0\x9F\x93\x8D|round pushpin
|objects|📎|U+1F4CE|\xF0\x9F\x93\x8E|paperclip
|objects|📏|U+1F4CF|\xF0\x9F\x93\x8F|straight ruler
|objects|📐|U+1F4D0|\xF0\x9F\x93\x90|triangular ruler
|objects|📑|U+1F4D1|\xF0\x9F\x93\x91|bookmark tabs
|objects|📒|U+1F4D2|\xF0\x9F\x93\x92|ledger
|objects|📓|U+1F4D3|\xF0\x9F\x93\x93|notebook
|objects|📔|U+1F4D4|\xF0\x9F\x93\x94|notebook with decorative cover
|objects|📕|U+1F4D5|\xF0\x9F\x93\x95|closed book
|objects|📖|U+1F4D6|\xF0\x9F\x93\x96|open book
|objects|📗|U+1F4D7|\xF0\x9F\x93\x97|green book
|objects|📘|U+1F4D8|\xF0\x9F\x93\x98|blue book
|objects|📙|U+1F4D9|\xF0\x9F\x93\x99|orange book
|objects|📚|U+1F4DA|\xF0\x9F\x93\x9A|books
|objects|📛|U+1F4DB|\xF0\x9F\x93\x9B|name badge
|objects|📜|U+1F4DC|\xF0\x9F\x93\x9C|scroll
|objects|📝|U+1F4DD|\xF0\x9F\x93\x9D|memo
|objects|📞|U+1F4DE|\xF0\x9F\x93\x9E|telephone receiver
|objects|📟|U+1F4DF|\xF0\x9F\x93\x9F|pager
|objects|📠|U+1F4E0|\xF0\x9F\x93\xA0|fax machine
|objects|📡|U+1F4E1|\xF0\x9F\x93\xA1|satellite antenna
|objects|📢|U+1F4E2|\xF0\x9F\x93\xA2|public address loudspeaker
|objects|📣|U+1F4E3|\xF0\x9F\x93\xA3|cheering megaphone
|objects|📤|U+1F4E4|\xF0\x9F\x93\xA4|outbox tray
|objects|📥|U+1F4E5|\xF0\x9F\x93\xA5|inbox tray
|objects|📦|U+1F4E6|\xF0\x9F\x93\xA6|package
|objects|📧|U+1F4E7|\xF0\x9F\x93\xA7|e-mail symbol
|objects|📨|U+1F4E8|\xF0\x9F\x93\xA8|incoming envelope
|objects|📩|U+1F4E9|\xF0\x9F\x93\xA9|envelope with downwards arrow above
|objects|📪|U+1F4EA|\xF0\x9F\x93\xAA|closed mailbox with lowered flag
|objects|📫|U+1F4EB|\xF0\x9F\x93\xAB|closed mailbox with raised flag
|objects|📮|U+1F4EE|\xF0\x9F\x93\xAE|postbox
|objects|📰|U+1F4F0|\xF0\x9F\x93\xB0|newspaper
|objects|📱|U+1F4F1|\xF0\x9F\x93\xB1|mobile phone
|objects|📲|U+1F4F2|\xF0\x9F\x93\xB2|mobile phone with rightwards arrow at left
|objects|📳|U+1F4F3|\xF0\x9F\x93\xB3|vibration mode
|objects|📴|U+1F4F4|\xF0\x9F\x93\xB4|mobile phone off
|marks|📶|U+1F4F6|\xF0\x9F\x93\xB6|antenna with bars
|objects|📷|U+1F4F7|\xF0\x9F\x93\xB7|camera
|objects|📹|U+1F4F9|\xF0\x9F\x93\xB9|video camera
|objects|📺|U+1F4FA|\xF0\x9F\x93\xBA|television
|objects|📻|U+1F4FB|\xF0\x9F\x93\xBB|radio
|objects|📼|U+1F4FC|\xF0\x9F\x93\xBC|videocassette
|marks|🔃|U+1F503|\xF0\x9F\x94\x83|clockwise downwards and upwards open circle arrows
|objects|🔊|U+1F50A|\xF0\x9F\x94\x8A|speaker with three sound waves
|objects|🔋|U+1F50B|\xF0\x9F\x94\x8B|battery
|objects|🔌|U+1F50C|\xF0\x9F\x94\x8C|electric plug
|objects|🔍|U+1F50D|\xF0\x9F\x94\x8D|left-pointing magnifying glass
|objects|🔎|U+1F50E|\xF0\x9F\x94\x8E|right-pointing magnifying glass
|objects|🔏|U+1F50F|\xF0\x9F\x94\x8F|lock with ink pen
|objects|🔐|U+1F510|\xF0\x9F\x94\x90|closed lock with key
|objects|🔑|U+1F511|\xF0\x9F\x94\x91|key
|objects|🔒|U+1F512|\xF0\x9F\x94\x92|lock
|objects|🔓|U+1F513|\xF0\x9F\x94\x93|open lock
|objects|🔔|U+1F514|\xF0\x9F\x94\x94|bell
|objects|🔖|U+1F516|\xF0\x9F\x94\x96|bookmark
|objects|🔗|U+1F517|\xF0\x9F\x94\x97|link symbol
|objects|🔘|U+1F518|\xF0\x9F\x94\x98|radio button
|marks|🔙|U+1F519|\xF0\x9F\x94\x99|back with leftwards arrow above
|marks|🔚|U+1F51A|\xF0\x9F\x94\x9A|end with leftwards arrow above
|marks|🔛|U+1F51B|\xF0\x9F\x94\x9B|on with exclamation mark with left right arrow above
|marks|🔜|U+1F51C|\xF0\x9F\x94\x9C|soon with rightwards arrow above
|marks|🔝|U+1F51D|\xF0\x9F\x94\x9D|top with upwards arrow above
|marks|🔞|U+1F51E|\xF0\x9F\x94\x9E|no one under eighteen symbol
|marks|🔟|U+1F51F|\xF0\x9F\x94\x9F|keycap ten
|marks|🔠|U+1F520|\xF0\x9F\x94\xA0|input symbol for latin capital letters
|marks|🔡|U+1F521|\xF0\x9F\x94\xA1|input symbol for latin small letters
|marks|🔢|U+1F522|\xF0\x9F\x94\xA2|input symbol for numbers
|marks|🔣|U+1F523|\xF0\x9F\x94\xA3|input symbol for symbols
|marks|🔤|U+1F524|\xF0\x9F\x94\xA4|input symbol for latin letters
|emotions|🔥|U+1F525|\xF0\x9F\x94\xA5|fire
|objects|🔦|U+1F526|\xF0\x9F\x94\xA6|electric torch
|objects|🔧|U+1F527|\xF0\x9F\x94\xA7|wrench
|objects|🔨|U+1F528|\xF0\x9F\x94\xA8|hammer
|objects|🔩|U+1F529|\xF0\x9F\x94\xA9|nut and bolt
|objects|🔪|U+1F52A|\xF0\x9F\x94\xAA|hocho
|objects|🔫|U+1F52B|\xF0\x9F\x94\xAB|pistol
|objects|🔮|U+1F52E|\xF0\x9F\x94\xAE|crystal ball
|marks|🔯|U+1F52F|\xF0\x9F\x94\xAF|six pointed star with middle dot
|objects|🔰|U+1F530|\xF0\x9F\x94\xB0|japanese symbol for beginner
|objects|🔱|U+1F531|\xF0\x9F\x94\xB1|trident emblem
|marks|🔲|U+1F532|\xF0\x9F\x94\xB2|black square button
|marks|🔳|U+1F533|\xF0\x9F\x94\xB3|white square button
|marks|🔴|U+1F534|\xF0\x9F\x94\xB4|large red circle
|marks|🔵|U+1F535|\xF0\x9F\x94\xB5|large blue circle
|marks|🔶|U+1F536|\xF0\x9F\x94\xB6|large orange diamond
|marks|🔷|U+1F537|\xF0\x9F\x94\xB7|large blue diamond
|marks|🔸|U+1F538|\xF0\x9F\x94\xB8|small orange diamond
|marks|🔹|U+1F539|\xF0\x9F\x94\xB9|small blue diamond
|marks|🔺|U+1F53A|\xF0\x9F\x94\xBA|up-pointing red triangle
|marks|🔻|U+1F53B|\xF0\x9F\x94\xBB|down-pointing red triangle
|marks|🔼|U+1F53C|\xF0\x9F\x94\xBC|up-pointing small red triangle
|marks|🔽|U+1F53D|\xF0\x9F\x94\xBD|down-pointing small red triangle
|marks|🕐|U+1F550|\xF0\x9F\x95\x90|clock face one oclock
|marks|🕑|U+1F551|\xF0\x9F\x95\x91|clock face two oclock
|marks|🕒|U+1F552|\xF0\x9F\x95\x92|clock face three oclock
|marks|🕓|U+1F553|\xF0\x9F\x95\x93|clock face four oclock
|marks|🕔|U+1F554|\xF0\x9F\x95\x94|clock face five oclock
|marks|🕕|U+1F555|\xF0\x9F\x95\x95|clock face six oclock
|marks|🕖|U+1F556|\xF0\x9F\x95\x96|clock face seven oclock
|marks|🕗|U+1F557|\xF0\x9F\x95\x97|clock face eight oclock
|marks|🕘|U+1F558|\xF0\x9F\x95\x98|clock face nine oclock
|marks|🕙|U+1F559|\xF0\x9F\x95\x99|clock face ten oclock
|marks|🕚|U+1F55A|\xF0\x9F\x95\x9A|clock face eleven oclock
|marks|🕛|U+1F55B|\xF0\x9F\x95\x9B|clock face twelve oclock
|marks|🕜|U+1F55C|\xF0\x9F\x95\x9C|clock face one-thirty
|marks|🕝|U+1F55D|\xF0\x9F\x95\x9D|clock face two-thirty
|marks|🕞|U+1F55E|\xF0\x9F\x95\x9E|clock face three-thirty
|marks|🕟|U+1F55F|\xF0\x9F\x95\x9F|clock face four-thirty
|marks|🕠|U+1F560|\xF0\x9F\x95\xA0|clock face five-thirty
|marks|🕡|U+1F561|\xF0\x9F\x95\xA1|clock face six-thirty
|marks|🕢|U+1F562|\xF0\x9F\x95\xA2|clock face seven-thirty
|marks|🕣|U+1F563|\xF0\x9F\x95\xA3|clock face eight-thirty
|marks|🕤|U+1F564|\xF0\x9F\x95\xA4|clock face nine-thirty
|marks|🕥|U+1F565|\xF0\x9F\x95\xA5|clock face ten-thirty
|marks|🕦|U+1F566|\xF0\x9F\x95\xA6|clock face eleven-thirty
|marks|🕧|U+1F567|\xF0\x9F\x95\xA7|clock face twelve-thirty
|objects|🗻|U+1F5FB|\xF0\x9F\x97\xBB|mount fuji
|objects|🗼|U+1F5FC|\xF0\x9F\x97\xBC|tokyo tower
|objects|🗽|U+1F5FD|\xF0\x9F\x97\xBD|statue of liberty
|objects|🗾|U+1F5FE|\xF0\x9F\x97\xBE|silhouette of japan
|objects|🗿|U+1F5FF|\xF0\x9F\x97\xBF|moyai
|earth|🌍|U+1F30D|\xF0\x9F\x8C\x8D|earth globe europe-africa
|earth|🌎|U+1F30E|\xF0\x9F\x8C\x8E|earth globe americas
|earth|🌐|U+1F310|\xF0\x9F\x8C\x90|globe with meridians
|earth|🌒|U+1F312|\xF0\x9F\x8C\x92|waxing crescent moon symbol
|earth|🌖|U+1F316|\xF0\x9F\x8C\x96|waning gibbous moon symbol
|earth|🌗|U+1F317|\xF0\x9F\x8C\x97|last quarter moon symbol
|earth|🌘|U+1F318|\xF0\x9F\x8C\x98|waning crescent moon symbol
|earth|🌚|U+1F31A|\xF0\x9F\x8C\x9A|new moon with face
|earth|🌜|U+1F31C|\xF0\x9F\x8C\x9C|last quarter moon with face
|earth|🌝|U+1F31D|\xF0\x9F\x8C\x9D|full moon with face
|earth|🌞|U+1F31E|\xF0\x9F\x8C\x9E|sun with face
|earth|🌲|U+1F332|\xF0\x9F\x8C\xB2|evergreen tree
|earth|🌳|U+1F333|\xF0\x9F\x8C\xB3|deciduous tree
|fruits|🍋|U+1F34B|\xF0\x9F\x8D\x8B|lemon
|fruits|🍐|U+1F350|\xF0\x9F\x8D\x90|pear
|objects|🍼|U+1F37C|\xF0\x9F\x8D\xBC|baby bottle
|objects|🏇|U+1F3C7|\xF0\x9F\x8F\x87|horse racing
|symbols|🏉|U+1F3C9|\xF0\x9F\x8F\x89|rugby football
|buildlings|🏤|U+1F3E4|\xF0\x9F\x8F\xA4|european post office
|animals|🐀|U+1F400|\xF0\x9F\x90\x80|rat
|animals|🐁|U+1F401|\xF0\x9F\x90\x81|mouse
|animals|🐂|U+1F402|\xF0\x9F\x90\x82|ox
|animals|🐃|U+1F403|\xF0\x9F\x90\x83|water buffalo
|animals|🐄|U+1F404|\xF0\x9F\x90\x84|cow
|animals|🐅|U+1F405|\xF0\x9F\x90\x85|tiger
|animals|🐆|U+1F406|\xF0\x9F\x90\x86|leopard
|animals|🐇|U+1F407|\xF0\x9F\x90\x87|rabbit
|animals|🐈|U+1F408|\xF0\x9F\x90\x88|cat
|animals|🐉|U+1F409|\xF0\x9F\x90\x89|dragon
|animals|🐊|U+1F40A|\xF0\x9F\x90\x8A|crocodile
|animals|🐋|U+1F40B|\xF0\x9F\x90\x8B|whale
|animals|🐏|U+1F40F|\xF0\x9F\x90\x8F|ram
|animals|🐐|U+1F410|\xF0\x9F\x90\x90|goat
|animals|🐓|U+1F413|\xF0\x9F\x90\x93|rooster
|animals|🐕|U+1F415|\xF0\x9F\x90\x95|dog
|animals|🐖|U+1F416|\xF0\x9F\x90\x96|pig
|animals|🐪|U+1F42A|\xF0\x9F\x90\xAA|dromedary camel
|objects|👥|U+1F465|\xF0\x9F\x91\xA5|busts in silhouette
|objects|👬|U+1F46C|\xF0\x9F\x91\xAC|two men holding hands
|objects|👭|U+1F46D|\xF0\x9F\x91\xAD|two women holding hands
|objects|💭|U+1F4AD|\xF0\x9F\x92\xAD|thought balloon
|objects|💶|U+1F4B6|\xF0\x9F\x92\xB6|banknote with euro sign
|objects|💷|U+1F4B7|\xF0\x9F\x92\xB7|banknote with pound sign
|objects|📬|U+1F4EC|\xF0\x9F\x93\xAC|open mailbox with raised flag
|objects|📭|U+1F4ED|\xF0\x9F\x93\xAD|open mailbox with lowered flag
|objects|📯|U+1F4EF|\xF0\x9F\x93\xAF|postal horn
|marks|📵|U+1F4F5|\xF0\x9F\x93\xB5|no mobile phones
|marks|🔀|U+1F500|\xF0\x9F\x94\x80|twisted rightwards arrows
|marks|🔁|U+1F501|\xF0\x9F\x94\x81|clockwise rightwards and leftwards open circle arrows
|marks|🔂|U+1F502|\xF0\x9F\x94\x82|clockwise rightwards and leftwards open circle arrows with circled one overlay
|marks|🔄|U+1F504|\xF0\x9F\x94\x84|anticlockwise downwards and upwards open circle arrows
|earth|🔅|U+1F505|\xF0\x9F\x94\x85|low brightness symbol
|earth|🔆|U+1F506|\xF0\x9F\x94\x86|high brightness symbol
|marks|🔇|U+1F507|\xF0\x9F\x94\x87|speaker with cancellation stroke
|objects|🔉|U+1F509|\xF0\x9F\x94\x89|speaker with one sound wave
|marks|🔕|U+1F515|\xF0\x9F\x94\x95|bell with cancellation stroke
|objects|🔬|U+1F52C|\xF0\x9F\x94\xAC|microscope
|objects|🔭|U+1F52D|\xF0\x9F\x94\xAD|telescope
