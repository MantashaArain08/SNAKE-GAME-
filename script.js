(function(){
  // ---- Localization (full translations) ----
  const LOCALES = {
    english: {
      menuSubtitle: 'Grow Big · Rule The Forest',
      menuFooter: 'A Battle In The Orchard',
      play: 'Play',
      levels: 'Levels',
      opponents: 'Opponents',
      chooseSnake: 'Choose Snake',
      achievements: 'Achievements',
      bestScore: 'Best Score',
      howToPlay: 'How To Play',
      settings: 'Settings',
      levelsTitle: 'Levels',
      opponentsTitle: 'Choose Opponents',
      pickerTitle: 'Choose Your Snake',
      achTitle: 'Achievements',
      howTitle: 'How To Play',
      bestTitle: 'Best Score',
      settingsTitle: 'Settings',
      startBattle: 'Start Battle',
      soundLabel: 'Sound',
      musicLabel: 'Music',
      volumeLabel: 'Master Volume',
      speedLabel: 'Game Speed',
      graphicsLabel: 'Graphics Quality',
      themeLabel: 'Theme',
      languageLabel: 'Language',
      fpsLabel: 'Show FPS',
      particlesLabel: 'Particle Effects',
      fruitLabel: 'Fruit',
      foesLabel: 'Foes Left',
      bestLabel: 'Best',
      nextLevel: 'Next Level',
      playAgain: 'Play Again',
      mainMenu: 'Main Menu',
      controlsHint: 'Use <b>arrow keys</b> or <b>WASD</b> to move. Press <b>space</b> to pause.',
      bestFruitLabel: 'Fruit Eaten (Best Run)',
      maxLevelLabel: 'Furthest Level Cleared',
      levelsProgress: (unlocked) => `${unlocked} levels unlocked so far`,
      achProgress: (unlocked, total) => `${unlocked} / ${total} unlocked`,
      rule1: '<b>Move</b> with arrow keys, WASD, or the on-screen pad. Swipe on touch screens.',
      rule2: '<b>Eat fruit</b> to grow longer and score points.',
      rule3: '<b>Avoid</b> the walls, your own body, and every other snake\'s body.',
      rule4: '<b>Battle</b> computer-controlled snakes hunting the same fruit. Pick how many from Opponents in the menu.',
      rule5: 'When any snake <b>dies</b>, its body turns into fruit for the survivors.',
      rule6: '<b>Win</b> a level by outlasting every opponent to unlock the next one. Levels go on forever, so keep climbing! Press space to pause.',
      gameOverTitle: 'Game Over',
      winTitle: 'You Cleared The Orchard!',
      winSub: (score, length) => `Every rival fell. You ate ${score} fruit and grew to ${length} segments.`,
      loseSub: (score, length) => `You ate ${score} fruit and grew to ${length} segments before going down.`,
      unlocked: 'Next level unlocked!',
      achUnlock: (names) => `Achievement unlocked: ${names.join(', ')}`,
      opponentOptions: [
        { count: 1, name: 'Solo Rival', desc: '1 computer snake' },
        { count: 2, name: 'Twin Rivals', desc: '2 computer snakes' },
        { count: 3, name: 'Triple Threat', desc: '3 computer snakes' },
        { count: 4, name: 'Full Pack', desc: '4 computer snakes' }
      ]
    },
    urdu: {
      menuSubtitle: 'بڑھو · جنگل پر حکومت کرو',
      menuFooter: 'باغ میں ایک جنگ',
      play: 'کھیلیں',
      levels: 'مراحل',
      opponents: 'مخالفین',
      chooseSnake: 'سانپ منتخب کریں',
      achievements: 'کارنامے',
      bestScore: 'بہترین سکور',
      howToPlay: 'کیسے کھیلیں',
      settings: 'ترتیبات',
      levelsTitle: 'مراحل',
      opponentsTitle: 'مخالفین منتخب کریں',
      pickerTitle: 'اپنا سانپ منتخب کریں',
      achTitle: 'کارنامے',
      howTitle: 'کیسے کھیلیں',
      bestTitle: 'بہترین سکور',
      settingsTitle: 'ترتیبات',
      startBattle: 'جنگ شروع کریں',
      soundLabel: 'آواز',
      musicLabel: 'موسیقی',
      volumeLabel: 'آواز کی سطح',
      speedLabel: 'رفتار',
      graphicsLabel: 'گرافکس کا معیار',
      themeLabel: 'تھیم',
      languageLabel: 'زبان',
      fpsLabel: 'ایف پی ایس دکھائیں',
      particlesLabel: 'ذرہ اثرات',
      fruitLabel: 'پھل',
      foesLabel: 'دشمن باقی',
      bestLabel: 'بہترین',
      nextLevel: 'اگلا مرحلہ',
      playAgain: 'دوبارہ کھیلیں',
      mainMenu: 'مرکزی مینو',
      controlsHint: 'حرکت کے لیے <b>تیر والے بٹن</b> یا <b>WASD</b> استعمال کریں۔ روکنے کے لیے <b>space</b> دبائیں۔',
      bestFruitLabel: 'کھائے گئے پھل (بہترین رن)',
      maxLevelLabel: 'زیادہ سے زیادہ سطح',
      levelsProgress: (unlocked) => `${unlocked} مراحل کھل چکے ہیں`,
      achProgress: (unlocked, total) => `${unlocked} / ${total} کھلے`,
      rule1: '<b>حرکت</b> تیر والے بٹن، WASD، یا آن-اسکرین پیڈ سے کریں۔ ٹچ اسکرین پر سوائپ کریں۔',
      rule2: '<b>پھل کھائیں</b> تاکہ لمبے ہوں اور پوائنٹس حاصل کریں۔',
      rule3: '<b>بچیں</b> دیواروں، اپنے جسم اور دوسرے سانپوں کے جسم سے۔',
      rule4: '<b>جنگ کریں</b> کمپیوٹر کے سانپوں کے خلاف جو ایک ہی پھل کا شکار کرتے ہیں۔ مینو میں مخالفین سے تعداد منتخب کریں۔',
      rule5: 'جب کوئی سانپ <b>مرتا</b> ہے تو اس کا جسم بچ جانے والوں کے لیے پھل بن جاتا ہے۔',
      rule6: '<b>مرحلہ جیتیں</b> ہر مخالف کو پیچھے چھوڑ کر اگلا مرحلہ کھولیں۔ مراحل لامحدود ہیں، چڑھتے رہیں! روکنے کے لیے space دبائیں۔',
      gameOverTitle: 'کھیل ختم',
      winTitle: 'آپ نے باغ صاف کر لیا!',
      winSub: (score, length) => `تمام مخالف ہار گئے۔ آپ نے ${score} پھل کھائے اور ${length} حصوں تک بڑھ گئے۔`,
      loseSub: (score, length) => `آپ نے ${score} پھل کھائے اور ${length} حصوں تک بڑھ گئے پھر ہار گئے۔`,
      unlocked: 'اگلا مرحلہ کھل گیا!',
      achUnlock: (names) => `کارنامہ کھل گیا: ${names.join(', ')}`,
      opponentOptions: [
        { count: 1, name: 'تنہا حریف', desc: '1 کمپیوٹر سانپ' },
        { count: 2, name: 'جڑواں حریف', desc: '2 کمپیوٹر سانپ' },
        { count: 3, name: 'تہرا خطرہ', desc: '3 کمپیوٹر سانپ' },
        { count: 4, name: 'مکمل پیک', desc: '4 کمپیوٹر سانپ' }
      ]
    },
    roman_urdu: {
      menuSubtitle: 'Barho · Jungle par hukumat karo',
      menuFooter: 'Bagh mein ek jung',
      play: 'Khelain',
      levels: 'Marahil',
      opponents: 'Mukhalifeen',
      chooseSnake: 'Saap muntakhab karein',
      achievements: 'Karnamay',
      bestScore: 'Behtareen score',
      howToPlay: 'Kaise khelain',
      settings: 'Tarteebat',
      levelsTitle: 'Marahil',
      opponentsTitle: 'Mukhalifeen muntakhab karein',
      pickerTitle: 'Apna saap muntakhab karein',
      achTitle: 'Karnamay',
      howTitle: 'Kaise khelain',
      bestTitle: 'Behtareen score',
      settingsTitle: 'Tarteebat',
      startBattle: 'Jung shuru karein',
      soundLabel: 'Aawaz',
      musicLabel: 'Mosiqi',
      volumeLabel: 'Aawaz ki satah',
      speedLabel: 'Raftar',
      graphicsLabel: 'Graphics ka mayar',
      themeLabel: 'Theme',
      languageLabel: 'Zaban',
      fpsLabel: 'FPS dikhayein',
      particlesLabel: 'Zarra asrat',
      fruitLabel: 'Phal',
      foesLabel: 'Dushman baqi',
      bestLabel: 'Behtareen',
      nextLevel: 'Agla marhala',
      playAgain: 'Dobara khelain',
      mainMenu: 'Markazi menu',
      controlsHint: 'Harkat ke liye <b>teer walay button</b> ya <b>WASD</b> istemal karein. Rokne ke liye <b>space</b> dabaayein.',
      bestFruitLabel: 'Khaye gaye phal (behtareen run)',
      maxLevelLabel: 'Zyada se zyada satah',
      levelsProgress: (unlocked) => `${unlocked} marahil khul chuke hain`,
      achProgress: (unlocked, total) => `${unlocked} / ${total} khulay`,
      rule1: '<b>Harkat</b> teer walay button, WASD, ya on-screen pad se karein. Touch screen par swipe karein.',
      rule2: '<b>Phal khayein</b> taake lambay hon aur points hasil karein.',
      rule3: '<b>Bachein</b> deewaron, apne jism aur doosre saapon ke jism se.',
      rule4: '<b>Jung karein</b> computer ke saapon ke khilaf jo ek hi phal ka shikaar karte hain. Menu mein mukhalifeen se tadad muntakhab karein.',
      rule5: 'Jab koi saap <b>marta</b> hai to uska jism bach janay walon ke liye phal ban jata hai.',
      rule6: '<b>Marhala jeetain</b> har mukhalif ko peeche chhor kar agla marhala kholain. Marahil la-mahdood hain, chartay rahein! Rokne ke liye space dabaayein.',
      gameOverTitle: 'Khel khatam',
      winTitle: 'Aap ne bagh saaf kar liya!',
      winSub: (score, length) => `Tamam mukhalif haar gaye. Aap ne ${score} phal khaye aur ${length} hisson tak barh gaye.`,
      loseSub: (score, length) => `Aap ne ${score} phal khaye aur ${length} hisson tak barh gaye phir haar gaye.`,
      unlocked: 'Agla marhala khul gaya!',
      achUnlock: (names) => `Karnama khul gaya: ${names.join(', ')}`,
      opponentOptions: [
        { count: 1, name: 'Tanha harif', desc: '1 computer saap' },
        { count: 2, name: 'Jarwan harif', desc: '2 computer saap' },
        { count: 3, name: 'Tehra khatra', desc: '3 computer saap' },
        { count: 4, name: 'Mukammal pack', desc: '4 computer saap' }
      ]
    },
    hindi: {
      menuSubtitle: 'बड़े बनो · जंगल पर राज करो',
      menuFooter: 'बाग़ में एक युद्ध',
      play: 'खेलें',
      levels: 'स्तर',
      opponents: 'प्रतिद्वंद्वी',
      chooseSnake: 'साँप चुनें',
      achievements: 'उपलब्धियाँ',
      bestScore: 'सर्वश्रेष्ठ स्कोर',
      howToPlay: 'कैसे खेलें',
      settings: 'सेटिंग्स',
      levelsTitle: 'स्तर',
      opponentsTitle: 'प्रतिद्वंद्वी चुनें',
      pickerTitle: 'अपना साँप चुनें',
      achTitle: 'उपलब्धियाँ',
      howTitle: 'कैसे खेलें',
      bestTitle: 'सर्वश्रेष्ठ स्कोर',
      settingsTitle: 'सेटिंग्स',
      startBattle: 'युद्ध शुरू करें',
      soundLabel: 'ध्वनि',
      musicLabel: 'संगीत',
      volumeLabel: 'मास्टर वॉल्यूम',
      speedLabel: 'गति',
      graphicsLabel: 'ग्राफिक्स गुणवत्ता',
      themeLabel: 'थीम',
      languageLabel: 'भाषा',
      fpsLabel: 'FPS दिखाएँ',
      particlesLabel: 'कण प्रभाव',
      fruitLabel: 'फल',
      foesLabel: 'शत्रु शेष',
      bestLabel: 'सर्वश्रेष्ठ',
      nextLevel: 'अगला स्तर',
      playAgain: 'फिर से खेलें',
      mainMenu: 'मुख्य मेनू',
      controlsHint: '<b>तीर कुंजी</b> या <b>WASD</b> का उपयोग करें। रोकने के लिए <b>space</b> दबाएँ।',
      bestFruitLabel: 'खाए गए फल (सर्वश्रेष्ठ रन)',
      maxLevelLabel: 'सबसे दूर का स्तर',
      levelsProgress: (unlocked) => `${unlocked} स्तर खुल चुके हैं`,
      achProgress: (unlocked, total) => `${unlocked} / ${total} खुले`,
      rule1: '<b>चलें</b> तीर कुंजी, WASD, या ऑन-स्क्रीन पैड से। टच स्क्रीन पर स्वाइप करें।',
      rule2: '<b>फल खाएँ</b> लंबे होने और अंक पाने के लिए।',
      rule3: '<b>बचें</b> दीवारों, अपने शरीर और अन्य साँपों के शरीर से।',
      rule4: '<b>युद्ध करें</b> कंप्यूटर-नियंत्रित साँपों के खिलाफ जो एक ही फल का शिकार करते हैं। मेनू में प्रतिद्वंद्वियों से संख्या चुनें।',
      rule5: 'जब कोई साँप <b>मरता</b> है, तो उसका शरीर बचे हुए लोगों के लिए फल बन जाता है।',
      rule6: '<b>स्तर जीतें</b> हर प्रतिद्वंद्वी को पीछे छोड़कर अगला स्तर खोलें। स्तर अनंत हैं, चढ़ते रहें! रोकने के लिए space दबाएँ।',
      gameOverTitle: 'खेल समाप्त',
      winTitle: 'आपने बाग़ साफ़ कर दिया!',
      winSub: (score, length) => `सभी प्रतिद्वंद्वी हार गए। आपने ${score} फल खाए और ${length} खंडों तक बढ़ गए।`,
      loseSub: (score, length) => `आपने ${score} फल खाए और ${length} खंडों तक बढ़े, फिर हार गए।`,
      unlocked: 'अगला स्तर खुल गया!',
      achUnlock: (names) => `उपलब्धि खुली: ${names.join(', ')}`,
      opponentOptions: [
        { count: 1, name: 'अकेला प्रतिद्वंद्वी', desc: '1 कंप्यूटर साँप' },
        { count: 2, name: 'जुड़वाँ प्रतिद्वंद्वी', desc: '2 कंप्यूटर साँप' },
        { count: 3, name: 'त्रिगुण खतरा', desc: '3 कंप्यूटर साँप' },
        { count: 4, name: 'पूरा पैक', desc: '4 कंप्यूटर साँप' }
      ]
    },
    arabic: {
      menuSubtitle: 'كبر · حكم الغابة',
      menuFooter: 'معركة في البستان',
      play: 'لعب',
      levels: 'المستويات',
      opponents: 'الخصوم',
      chooseSnake: 'اختر الثعبان',
      achievements: 'الإنجازات',
      bestScore: 'أفضل نتيجة',
      howToPlay: 'كيف تلعب',
      settings: 'الإعدادات',
      levelsTitle: 'المستويات',
      opponentsTitle: 'اختر الخصوم',
      pickerTitle: 'اختر ثعبانك',
      achTitle: 'الإنجازات',
      howTitle: 'كيف تلعب',
      bestTitle: 'أفضل نتيجة',
      settingsTitle: 'الإعدادات',
      startBattle: 'ابدأ المعركة',
      soundLabel: 'الصوت',
      musicLabel: 'الموسيقى',
      volumeLabel: 'مستوى الصوت',
      speedLabel: 'السرعة',
      graphicsLabel: 'جودة الرسومات',
      themeLabel: 'المظهر',
      languageLabel: 'اللغة',
      fpsLabel: 'إظهار FPS',
      particlesLabel: 'تأثيرات الجسيمات',
      fruitLabel: 'الفاكهة',
      foesLabel: 'الأعداء المتبقون',
      bestLabel: 'الأفضل',
      nextLevel: 'المستوى التالي',
      playAgain: 'لعب مرة أخرى',
      mainMenu: 'القائمة الرئيسية',
      controlsHint: 'استخدم <b>مفاتيح الأسهم</b> أو <b>WASD</b> للتحرك. اضغط <b>space</b> للإيقاف المؤقت.',
      bestFruitLabel: 'الفاكهة المأكولة (أفضل جولة)',
      maxLevelLabel: 'أبعد مستوى تم تجاوزه',
      levelsProgress: (unlocked) => `${unlocked} مستوى مفتوح`,
      achProgress: (unlocked, total) => `${unlocked} / ${total} مفتوحة`,
      rule1: '<b>تحرك</b> باستخدام مفاتيح الأسهم، WASD، أو لوحة اللمس على الشاشة. اسحب على شاشات اللمس.',
      rule2: '<b>أكل الفاكهة</b> لتطول وتسجيل النقاط.',
      rule3: '<b>تجنب</b> الجدران، جسمك، وأجسام الثعابين الأخرى.',
      rule4: '<b>قاتل</b> الثعابين التي يتحكم بها الكمبيوتر والتي تصطاد نفس الفاكهة. اختر العدد من الخصوم في القائمة.',
      rule5: 'عندما <b>يموت</b> أي ثعبان، يتحول جسده إلى فاكهة للناجين.',
      rule6: '<b>اربح</b> المستوى بتفوقك على كل خصم لفتح التالي. المستويات لا نهائية، استمر في الصعود! اضغط space للإيقاف المؤقت.',
      gameOverTitle: 'انتهت اللعبة',
      winTitle: 'لقد اجتزت البستان!',
      winSub: (score, length) => `سقط جميع الخصوم. أكلت ${score} فاكهة ونمت إلى ${length} قطعة.`,
      loseSub: (score, length) => `أكلت ${score} فاكهة ونمت إلى ${length} قطعة قبل أن تسقط.`,
      unlocked: 'تم فتح المستوى التالي!',
      achUnlock: (names) => `تم فتح إنجاز: ${names.join(', ')}`,
      opponentOptions: [
        { count: 1, name: 'خصم منفرد', desc: '1 ثعبان كمبيوتر' },
        { count: 2, name: 'خصمان توأم', desc: '2 ثعبان كمبيوتر' },
        { count: 3, name: 'تهديد ثلاثي', desc: '3 ثعبان كمبيوتر' },
        { count: 4, name: 'الحزمة الكاملة', desc: '4 ثعبان كمبيوتر' }
      ]
    },
    chinese: {
      menuSubtitle: '成长 · 统治森林',
      menuFooter: '果园之战',
      play: '开始',
      levels: '关卡',
      opponents: '对手',
      chooseSnake: '选择蛇',
      achievements: '成就',
      bestScore: '最高分',
      howToPlay: '玩法说明',
      settings: '设置',
      levelsTitle: '关卡',
      opponentsTitle: '选择对手',
      pickerTitle: '选择你的蛇',
      achTitle: '成就',
      howTitle: '玩法说明',
      bestTitle: '最高分',
      settingsTitle: '设置',
      startBattle: '开始战斗',
      soundLabel: '音效',
      musicLabel: '音乐',
      volumeLabel: '主音量',
      speedLabel: '游戏速度',
      graphicsLabel: '画质',
      themeLabel: '主题',
      languageLabel: '语言',
      fpsLabel: '显示FPS',
      particlesLabel: '粒子效果',
      fruitLabel: '果实',
      foesLabel: '剩余对手',
      bestLabel: '最佳',
      nextLevel: '下一关',
      playAgain: '再玩一次',
      mainMenu: '主菜单',
      controlsHint: '使用<b>方向键</b>或<b>WASD</b>移动。按<b>空格</b>暂停。',
      bestFruitLabel: '吃到的果实（最佳记录）',
      maxLevelLabel: '最远通关关卡',
      levelsProgress: (unlocked) => `已解锁 ${unlocked} 关`,
      achProgress: (unlocked, total) => `已解锁 ${unlocked} / ${total}`,
      rule1: '使用<b>方向键</b>、<b>WASD</b>或屏幕方向键移动。触屏设备可滑动操作。',
      rule2: '<b>吃果实</b>可以变长并得分。',
      rule3: '<b>避开</b>墙壁、自己的身体和其他蛇的身体。',
      rule4: '<b>战斗</b>由电脑控制的蛇，它们会争夺同一果实。在菜单的“对手”中可选择数量。',
      rule5: '当任何蛇<b>死亡</b>时，它的身体会变成果实供幸存者食用。',
      rule6: '<b>通关</b>关卡需要击败所有对手，解锁下一关。关卡无限，不断挑战吧！按空格可暂停。',
      gameOverTitle: '游戏结束',
      winTitle: '你清空了果园！',
      winSub: (score, length) => `所有对手都倒下了。你吃了 ${score} 个果实，长到了 ${length} 节。`,
      loseSub: (score, length) => `你吃了 ${score} 个果实，长到了 ${length} 节，然后倒下了。`,
      unlocked: '下一关已解锁！',
      achUnlock: (names) => `成就解锁：${names.join(', ')}`,
      opponentOptions: [
        { count: 1, name: '独行对手', desc: '1 条电脑蛇' },
        { count: 2, name: '双生对手', desc: '2 条电脑蛇' },
        { count: 3, name: '三重威胁', desc: '3 条电脑蛇' },
        { count: 4, name: '满编队伍', desc: '4 条电脑蛇' }
      ]
    }
  };

  // ---- particles ----
  const particlesEl = document.getElementById('particles');
  for(let i=0;i<45;i++){
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random()*2 + 1;
    s.style.width = size+'px'; s.style.height = size+'px';
    s.style.left = Math.random()*100+'%'; s.style.top = Math.random()*100+'%';
    s.style.animationDelay = (Math.random()*3.5)+'s';
    particlesEl.appendChild(s);
  }
  for(let i=0;i<8;i++){
    const f = document.createElement('div');
    f.className = 'firefly';
    const size = Math.random()*3 + 2;
    f.style.width = size+'px'; f.style.height = size+'px';
    f.style.left = Math.random()*100+'%'; f.style.top = Math.random()*100+'%';
    f.style.animationDelay = (Math.random()*6)+'s';
    f.style.animationDuration = (5+Math.random()*3)+'s';
    particlesEl.appendChild(f);
  }

  // ---- screen nav ----
  function showScreen(id){
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }
  document.querySelectorAll('[data-back]').forEach(btn => {
    btn.addEventListener('click', () => showScreen('screen-menu'));
  });

  // ---- persistent stats ----
  const DEFAULT_STATS = { totalFruit: 0, longestLength: 3, maxLevelCleared: 0, gamesWon: 0, wonFullPack: false, wonSolo: false, bestScore: 0 };
  let stats = Object.assign({}, DEFAULT_STATS, JSON.parse(localStorage.getItem('orchardSnakeStats') || '{}'));
  function saveStats(){ localStorage.setItem('orchardSnakeStats', JSON.stringify(stats)); }

  let maxUnlockedLevel = Number(localStorage.getItem('orchardSnakeMaxUnlocked') || 1);
  function saveUnlocked(){ localStorage.setItem('orchardSnakeMaxUnlocked', maxUnlockedLevel); }

  // ---- settings ----
  const DEFAULT_SETTINGS = {
    sound: true, music: true, volume: 70,
    gameSpeed: 'normal', graphics: 'high', theme: 'forest',
    language: 'english', showFPS: false, particles: true
  };
  let settings = Object.assign({}, DEFAULT_SETTINGS, JSON.parse(localStorage.getItem('orchardSnakeSettings') || '{}'));
  function saveSettings(){ localStorage.setItem('orchardSnakeSettings', JSON.stringify(settings)); }

  const GAME_SPEED_MULTIPLIERS = { easy: 1.35, normal: 1, hard: 0.82, extreme: 0.62 };
  const THEME_BOARD = {
    forest: { bg: '#12261D', grid: 'rgba(233,196,106,0.08)' },
    neon:   { bg: '#150726', grid: 'rgba(255,62,200,0.16)' },
    cloudy: { bg: '#232C3A', grid: 'rgba(255,255,255,0.12)' },
  };

  // ---- audio ----
  let audioCtx = null;
  function ensureAudioCtx(){
    if(!audioCtx){ audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    if(audioCtx.state === 'suspended'){ audioCtx.resume(); }
    return audioCtx;
  }
  function playTone(freq, duration, type, volMul){
    if(!settings.sound) return;
    const ac = ensureAudioCtx();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    gain.gain.value = (settings.volume/100) * (volMul != null ? volMul : 1);
    osc.connect(gain); gain.connect(ac.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + duration);
    osc.stop(ac.currentTime + duration);
  }
  function sfxEat(){ playTone(720, 0.10, 'triangle', 0.5); }
  function sfxDeath(){ playTone(140, 0.45, 'sawtooth', 0.55); }
  function sfxWin(){ playTone(880, 0.14, 'triangle', 0.5); setTimeout(() => playTone(1180, 0.22, 'triangle', 0.5), 130); }
  function sfxClick(){ playTone(600, 0.07, 'triangle', 0.35); }

  let musicNodes = null;
  function startMusic(){
    if(!settings.music || musicNodes) return;
    const ac = ensureAudioCtx();
    const osc1 = ac.createOscillator(); osc1.type = 'sine'; osc1.frequency.value = 110;
    const osc2 = ac.createOscillator(); osc2.type = 'sine'; osc2.frequency.value = 165;
    const lfo = ac.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = 0.15;
    const lfoGain = ac.createGain(); lfoGain.gain.value = 4;
    lfo.connect(lfoGain); lfoGain.connect(osc2.frequency);
    const gain = ac.createGain(); gain.gain.value = (settings.volume/100) * 0.12;
    osc1.connect(gain); osc2.connect(gain); gain.connect(ac.destination);
    osc1.start(); osc2.start(); lfo.start();
    musicNodes = { osc1, osc2, lfo, gain };
  }
  function stopMusic(){
    if(!musicNodes) return;
    musicNodes.osc1.stop(); musicNodes.osc2.stop(); musicNodes.lfo.stop();
    musicNodes = null;
  }

  // ---- apply settings ----
  function applyTheme(){
    document.documentElement.setAttribute('data-theme', settings.theme);
    const tb = THEME_BOARD[settings.theme] || THEME_BOARD.forest;
    canvas.style.background = tb.bg;
  }
  function applyGraphics(){
    document.body.classList.remove('gfx-low', 'gfx-medium', 'gfx-high');
    document.body.classList.add('gfx-' + settings.graphics);
  }
  function applyParticlesVisibility(){
    particlesEl.style.display = settings.particles ? '' : 'none';
  }
  function applyFPSVisibility(){
    fpsCounterEl.classList.toggle('hidden', !settings.showFPS);
  }
  function applyAllSettings(){
    applyTheme(); applyGraphics(); applyParticlesVisibility(); applyFPSVisibility();
    if(musicNodes) musicNodes.gain.gain.value = (settings.volume/100) * 0.12;
  }

  // ---- localization engine ----
  let currentLocale = settings.language;
  function t(key, ...args){
    const localeData = LOCALES[currentLocale] || LOCALES.english;
    let val = localeData[key];
    if(typeof val === 'function') return val(...args);
    return val || key;
  }

  function applyTranslations(){
    // Menu
    document.getElementById('menuSubtitle').textContent = t('menuSubtitle');
    document.getElementById('menuFooter').textContent = t('menuFooter');
    document.querySelectorAll('#menuButtons .menu-btn').forEach(btn => {
      const key = btn.dataset.key;
      if(key) btn.textContent = t(key);
    });
    // Sub screens
    document.getElementById('levelsTitle').textContent = t('levelsTitle');
    document.getElementById('opponentsTitle').textContent = t('opponentsTitle');
    document.getElementById('pickerTitle').textContent = t('pickerTitle');
    document.getElementById('achTitle').textContent = t('achTitle');
    document.getElementById('howTitle').textContent = t('howTitle');
    document.getElementById('bestTitle').textContent = t('bestTitle');
    document.getElementById('settingsTitle').textContent = t('settingsTitle');
    document.getElementById('startBattleBtn').textContent = t('startBattle');
    // Settings labels
    document.querySelectorAll('.sr-label').forEach(el => {
      const key = el.dataset.key;
      if(key) el.textContent = t(key);
    });
    // Best screen
    document.getElementById('bestFruitLabel').textContent = t('bestFruitLabel');
    document.getElementById('maxLevelLabel').textContent = t('maxLevelLabel');
    // Game HUD
    document.querySelectorAll('.hud .label').forEach(el => {
      const key = el.dataset.key;
      if(key) el.textContent = t(key);
    });
    // Overlay buttons
    document.getElementById('nextLevelBtn').textContent = t('nextLevel');
    document.getElementById('playAgainBtn').textContent = t('playAgain');
    document.getElementById('menuBtn').textContent = t('mainMenu');
    // Controls hint
    const hint = document.querySelector('.controls-hint');
    if(hint) hint.innerHTML = t('controlsHint');
    // Rules
    document.querySelectorAll('.rule-item').forEach(el => {
      const key = el.dataset.key;
      if(key) el.innerHTML = t(key);
    });
    // Opponents options
    renderOpponents();
    // Level progress
    updateLevelsProgress();
    // Achievements progress
    renderAchievements();
    // Level indicator
    updateLevelIndicator();
  }

  function updateLevelsProgress(){
    document.getElementById('levelsProgress').textContent = t('levelsProgress', maxUnlockedLevel);
  }

  // ---- game variables ----
  const canvas = document.getElementById('board');
  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('score');
  const bestEl = document.getElementById('best');
  const bestScoreNumEl = document.getElementById('bestScoreNum');
  const maxLevelNumEl = document.getElementById('maxLevelNum');
  const opponentsEl = document.getElementById('opponents');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlaySub = document.getElementById('overlaySub');
  const achToastEl = document.getElementById('achToast');
  const fpsCounterEl = document.getElementById('fpsCounter');

  const GRID = 20;
  const BASE_SIZE = 440;
  const DPR = Math.max(1, window.devicePixelRatio || 1);
  canvas.width = BASE_SIZE * DPR;
  canvas.height = BASE_SIZE * DPR;
  ctx.scale(DPR, DPR);
  const CELL = BASE_SIZE / GRID;
  const MIN_FRUIT = 5;
  const LEVELS_PER_ZONE = 10;
  const ZONE_NAMES = ['Sprout Grove','Whispering Woods','Wild Orchard','Mossy Hollow','Golden Thicket','Shadow Grove','Ember Woods','Frostbound Forest','Ancient Forest','Eternal Canopy'];

  function toRoman(num){
    const vals = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
    let n = num, out = '';
    for(const [v, sym] of vals){ while(n >= v){ out += sym; n -= v; } }
    return out || String(num);
  }
  function getZoneName(zoneIndex){
    const base = ZONE_NAMES[zoneIndex % ZONE_NAMES.length];
    const cycle = Math.floor(zoneIndex / ZONE_NAMES.length) + 1;
    return cycle > 1 ? base + ' ' + toRoman(cycle) : base;
  }

  const FRUIT_KINDS = [
    { color: '#E6543F', shine: '#ff8f7d' },
    { color: '#F2A238', shine: '#ffd08a' },
    { color: '#9569C7', shine: '#c9a8f2' },
    { color: '#8FC93A', shine: '#c8f27a' },
  ];

  const SNAKE_COLORS = [
    { name: 'lime',     body: '#8FC93A', bodyAlt: '#7DB92E', head: '#F2A238' },
    { name: 'citrus',   body: '#F2A238', bodyAlt: '#E08B1E', head: '#E6543F' },
    { name: 'grape',    body: '#9569C7', bodyAlt: '#7F52B3', head: '#F2A238' },
    { name: 'berry',    body: '#E6543F', bodyAlt: '#C93E2A', head: '#F2A238' },
    { name: 'sky',      body: '#4FB6C9', bodyAlt: '#3A98A9', head: '#F2A238' },
    { name: 'blossom',  body: '#E88BC6', bodyAlt: '#D06BAA', head: '#F2A238' },
    { name: 'crimson',  body: '#C93E4A', bodyAlt: '#A62E38', head: '#F6DFA0' },
    { name: 'ocean',    body: '#2E8FAE', bodyAlt: '#256F87', head: '#F6DFA0' },
    { name: 'violet',   body: '#7A5FD6', bodyAlt: '#6249B3', head: '#F6DFA0' },
    { name: 'gold',     body: '#E9C46A', bodyAlt: '#C9A24B', head: '#0A140F' },
    { name: 'ember',    body: '#D9622B', bodyAlt: '#B14F22', head: '#F6DFA0' },
    { name: 'frost',    body: '#BFE7DE', bodyAlt: '#9AD3C6', head: '#2E8FAE' },
  ];
  let selectedColor = SNAKE_COLORS[0];

  const AI_SPAWNS = [
    { x: 14, y: 5,  dx: 0,  dy: 1 },
    { x: 14, y: 15, dx: 0,  dy: -1 },
    { x: 16, y: 10, dx: -1, dy: 0 },
    { x: 4,  y: 3,  dx: 1,  dy: 0 },
  ];
  const OPPONENT_OPTIONS = [
    { count: 1, name: 'Solo Rival', desc: '1 computer snake' },
    { count: 2, name: 'Twin Rivals', desc: '2 computer snakes' },
    { count: 3, name: 'Triple Threat', desc: '3 computer snakes' },
    { count: 4, name: 'Full Pack', desc: '4 computer snakes' },
  ];

  function getLevelInfo(levelNumber){
    const zoneIndex = Math.floor((levelNumber - 1) / LEVELS_PER_ZONE);
    const speed = Math.max(60, Math.round(180 - (levelNumber - 1) * 1.2));
    return { levelNumber, zoneName: getZoneName(zoneIndex), speed };
  }

  // ---- achievements ----
  const ACHIEVEMENTS = [
    { id:'first_bite', name:'First Bite', icon:'&#127811;', desc:'Eat your first fruit', check: s => s.totalFruit >= 1, progress: s => Math.min(s.totalFruit,1)+' / 1' },
    { id:'fruit_fan', name:'Fruit Fan', icon:'&#127815;', desc:'Eat 25 fruit total', check: s => s.totalFruit >= 25, progress: s => Math.min(s.totalFruit,25)+' / 25' },
    { id:'fruit_frenzy', name:'Fruit Frenzy', icon:'&#127817;', desc:'Eat 100 fruit total', check: s => s.totalFruit >= 100, progress: s => Math.min(s.totalFruit,100)+' / 100' },
    { id:'century_club', name:'Century Club', icon:'&#127820;', desc:'Eat 250 fruit total', check: s => s.totalFruit >= 250, progress: s => Math.min(s.totalFruit,250)+' / 250' },
    { id:'growing_strong', name:'Growing Strong', icon:'&#128009;', desc:'Reach a length of 10', check: s => s.longestLength >= 10, progress: s => Math.min(s.longestLength,10)+' / 10' },
    { id:'giant_serpent', name:'Giant Serpent', icon:'&#128009;', desc:'Reach a length of 25', check: s => s.longestLength >= 25, progress: s => Math.min(s.longestLength,25)+' / 25' },
    { id:'orchard_champion', name:'Orchard Champion', icon:'&#127942;', desc:'Win your first battle', check: s => s.gamesWon >= 1, progress: s => Math.min(s.gamesWon,1)+' / 1' },
    { id:'seasoned_victor', name:'Seasoned Victor', icon:'&#127942;', desc:'Win 10 battles', check: s => s.gamesWon >= 10, progress: s => Math.min(s.gamesWon,10)+' / 10' },
    { id:'veteran_victor', name:'Veteran Victor', icon:'&#127942;', desc:'Win 50 battles', check: s => s.gamesWon >= 50, progress: s => Math.min(s.gamesWon,50)+' / 50' },
    { id:'level_10', name:'Grove Graduate', icon:'&#127793;', desc:'Clear level 10', check: s => s.maxLevelCleared >= 10, progress: s => Math.min(s.maxLevelCleared,10)+' / 10' },
    { id:'level_25', name:'Woodland Warden', icon:'&#127794;', desc:'Clear level 25', check: s => s.maxLevelCleared >= 25, progress: s => Math.min(s.maxLevelCleared,25)+' / 25' },
    { id:'level_50', name:'Halfway Hero', icon:'&#11088;', desc:'Clear level 50', check: s => s.maxLevelCleared >= 50, progress: s => Math.min(s.maxLevelCleared,50)+' / 50' },
    { id:'level_75', name:'Deep Forest Ranger', icon:'&#11088;', desc:'Clear level 75', check: s => s.maxLevelCleared >= 75, progress: s => Math.min(s.maxLevelCleared,75)+' / 75' },
    { id:'level_100', name:'Master Of The Forest', icon:'&#128081;', desc:'Clear level 100', check: s => s.maxLevelCleared >= 100, progress: s => Math.min(s.maxLevelCleared,100)+' / 100' },
    { id:'level_150', name:'Beyond The Map', icon:'&#127756;', desc:'Clear level 150', check: s => s.maxLevelCleared >= 150, progress: s => Math.min(s.maxLevelCleared,150)+' / 150' },
    { id:'level_200', name:'Twin Century', icon:'&#127756;', desc:'Clear level 200', check: s => s.maxLevelCleared >= 200, progress: s => Math.min(s.maxLevelCleared,200)+' / 200' },
    { id:'level_300', name:'Triple Canopy', icon:'&#127795;', desc:'Clear level 300', check: s => s.maxLevelCleared >= 300, progress: s => Math.min(s.maxLevelCleared,300)+' / 300' },
    { id:'level_500', name:'Ancient Wanderer', icon:'&#11088;', desc:'Clear level 500', check: s => s.maxLevelCleared >= 500, progress: s => Math.min(s.maxLevelCleared,500)+' / 500' },
    { id:'level_750', name:'Grove Immortal', icon:'&#11088;', desc:'Clear level 750', check: s => s.maxLevelCleared >= 750, progress: s => Math.min(s.maxLevelCleared,750)+' / 750' },
    { id:'level_1000', name:'Eternal Legend', icon:'&#128081;', desc:'Clear level 1000', check: s => s.maxLevelCleared >= 1000, progress: s => Math.min(s.maxLevelCleared,1000)+' / 1000' },
    { id:'full_pack', name:'Full Pack Tamer', icon:'&#128007;', desc:'Win a battle against 4 rivals', check: s => !!s.wonFullPack, progress: s => s.wonFullPack ? 'Done' : 'Not yet' },
    { id:'lone_hunter', name:'Lone Hunter', icon:'&#127884;', desc:'Win a battle with only 1 rival', check: s => !!s.wonSolo, progress: s => s.wonSolo ? 'Done' : 'Not yet' },
  ];

  function renderAchievements(){
    const list = document.getElementById('achList');
    list.innerHTML = '';
    let unlockedN = 0;
    ACHIEVEMENTS.forEach(a => {
      const unlocked = a.check(stats);
      if(unlocked) unlockedN++;
      const item = document.createElement('div');
      item.className = 'ach-item' + (unlocked ? ' unlocked' : '');
      item.innerHTML = `
        <div class="ach-icon">${unlocked ? a.icon : '&#128274;'}</div>
        <div class="ach-text">
          <span class="ach-name">${a.name}</span>
          <span class="ach-desc">${a.desc}</span>
        </div>
        <div class="ach-progress">${a.progress(stats)}</div>
      `;
      list.appendChild(item);
    });
    document.getElementById('achProgress').textContent = t('achProgress', unlockedN, ACHIEVEMENTS.length);
  }

  function checkNewAchievements(prevStatsSnapshot){
    const newlyUnlocked = ACHIEVEMENTS.filter(a => a.check(stats) && !a.check(prevStatsSnapshot));
    return newlyUnlocked;
  }

  let currentLevel = 1;
  let opponentCount = 2;

  const levelIndicatorEl = document.getElementById('levelIndicator');
  function updateLevelIndicator(){
    const info = getLevelInfo(currentLevel);
    const rivalWord = opponentCount === 1 ? 'Rival' : 'Rivals';
    levelIndicatorEl.textContent = 'Level ' + currentLevel + ' · ' + info.zoneName + ' · ' + opponentCount + ' ' + rivalWord;
  }
  updateLevelIndicator();

  function renderSwatches(){
    const container = document.getElementById('swatchesGrid');
    container.innerHTML = '';
    SNAKE_COLORS.forEach((c) => {
      const card = document.createElement('div');
      card.className = 'swatch-card' + (c === selectedColor ? ' selected' : '');
      card.innerHTML = `<div class="swatch-dot" style="background:${c.body}"></div><div class="swatch-name">${c.name}</div>`;
      card.addEventListener('click', () => { selectedColor = c; renderSwatches(); });
      container.appendChild(card);
    });
  }
  renderSwatches();

  function renderOpponents(){
    const container = document.getElementById('opponentsList');
    container.innerHTML = '';
    const opts = t('opponentOptions');
    opts.forEach((opt) => {
      const card = document.createElement('div');
      card.className = 'level-card' + (opt.count === opponentCount ? ' selected' : '');
      card.innerHTML = `
        <div class="lc-text"><span class="lc-name">${opt.name}</span><span class="lc-desc">${opt.desc}</span></div>
        <span class="lc-icon">${opt.count === opponentCount ? '&#10003;' : ''}</span>
      `;
      card.addEventListener('click', () => { opponentCount = opt.count; updateLevelIndicator(); renderOpponents(); });
      container.appendChild(card);
    });
  }

  let visibleZoneCount = 11;
  function renderLevels(){
    const container = document.getElementById('zonesContainer');
    container.innerHTML = '';
    updateLevelsProgress();

    const zonesNeeded = Math.ceil(maxUnlockedLevel / LEVELS_PER_ZONE) + 1;
    const zonesToShow = Math.max(visibleZoneCount, zonesNeeded);

    for(let zone = 0; zone < zonesToShow; zone++){
      const block = document.createElement('div');
      block.className = 'zone-block';
      const startLvl = zone*LEVELS_PER_ZONE + 1, endLvl = zone*LEVELS_PER_ZONE + LEVELS_PER_ZONE;
      block.innerHTML = `<div class="zone-title">${getZoneName(zone)} · ${startLvl}-${endLvl}</div>`;
      const grid = document.createElement('div');
      grid.className = 'level-grid';
      for(let lvl = startLvl; lvl <= endLvl; lvl++){
        const locked = lvl > maxUnlockedLevel;
        const cleared = lvl <= stats.maxLevelCleared;
        const badge = document.createElement('div');
        badge.className = 'level-badge' + (lvl === currentLevel ? ' selected' : '') + (locked ? ' locked' : '') + (cleared ? ' cleared' : '');
        badge.innerHTML = (locked ? '&#128274;' : lvl) + (cleared ? '<span class="lb-star">&#9733;</span>' : '');
        if(!locked){
          badge.addEventListener('click', () => { currentLevel = lvl; updateLevelIndicator(); renderLevels(); });
        }
        grid.appendChild(badge);
      }
      block.appendChild(grid);
      container.appendChild(block);
    }

    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.className = 'action-btn secondary';
    loadMoreBtn.style.marginTop = '6px';
    loadMoreBtn.style.marginBottom = '10px';
    loadMoreBtn.textContent = 'Show More Levels';
    loadMoreBtn.addEventListener('click', () => { visibleZoneCount = zonesToShow + 10; renderLevels(); });
    container.appendChild(loadMoreBtn);
  }

  let playerSnake, aiSnakes, fruits, score, best, gameLoop, running, paused, speed;

  best = stats.bestScore || 0;
  bestEl.textContent = best;
  bestScoreNumEl.textContent = best;
  maxLevelNumEl.textContent = stats.maxLevelCleared;

  function randomFruitKind(){ return FRUIT_KINDS[Math.floor(Math.random()*FRUIT_KINDS.length)]; }
  function cellKey(x,y){ return x + ',' + y; }

  function occupiedCells(){
    const set = new Set();
    [playerSnake, ...aiSnakes].forEach(s => {
      if(!s || !s.alive) return;
      s.segments.forEach(seg => set.add(cellKey(seg.x, seg.y)));
    });
    fruits.forEach(f => set.add(cellKey(f.x, f.y)));
    return set;
  }

  function randomEmptyCell(occupied){
    let pos, tries = 0;
    do {
      pos = { x: Math.floor(Math.random()*GRID), y: Math.floor(Math.random()*GRID) };
      tries++;
    } while (occupied.has(cellKey(pos.x, pos.y)) && tries < 200);
    return pos;
  }

  function ensureFruitCount(){
    while(fruits.length < MIN_FRUIT){
      const occ = occupiedCells();
      const pos = randomEmptyCell(occ);
      fruits.push({ ...pos, ...randomFruitKind(), bounce: 0 });
    }
  }

  function addFruitAt(x, y, kind){
    fruits = fruits.filter(f => !(f.x===x && f.y===y));
    fruits.push({ x, y, ...kind, bounce: 0 });
  }

  function makeSnake(startX, startY, dirX, dirY, color, isPlayer){
    const segments = [];
    for(let i=0;i<3;i++){ segments.push({ x: startX - dirX*i, y: startY - dirY*i }); }
    return { segments, dir: { x: dirX, y: dirY }, nextDir: { x: dirX, y: dirY }, color, alive: true, isPlayer: !!isPlayer };
  }

  function resetState(){
    const info = getLevelInfo(currentLevel);
    const aiColors = SNAKE_COLORS.filter(c => c !== selectedColor).slice(0, opponentCount);
    playerSnake = makeSnake(5, 10, 1, 0, selectedColor, true);
    aiSnakes = AI_SPAWNS.slice(0, opponentCount).map((sp, i) =>
      makeSnake(sp.x, sp.y, sp.dx, sp.dy, aiColors[i] || SNAKE_COLORS[(i+1) % SNAKE_COLORS.length], false)
    );
    fruits = [];
    score = 0;
    const speedMul = GAME_SPEED_MULTIPLIERS[settings.gameSpeed] || 1;
    speed = Math.max(40, Math.round(info.speed * speedMul));
    scoreEl.textContent = score;
    opponentsEl.textContent = aiSnakes.length;
    ensureFruitCount();
  }

  function drawBackground(){
    const tb = THEME_BOARD[settings.theme] || THEME_BOARD.forest;
    ctx.clearRect(0,0,BASE_SIZE, BASE_SIZE);
    ctx.fillStyle = tb.bg;
    ctx.fillRect(0,0,BASE_SIZE, BASE_SIZE);
    ctx.strokeStyle = tb.grid;
    ctx.lineWidth = 1;
    for(let i=0;i<=GRID;i++){
      ctx.beginPath(); ctx.moveTo(i*CELL, 0); ctx.lineTo(i*CELL, BASE_SIZE); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i*CELL); ctx.lineTo(BASE_SIZE, i*CELL); ctx.stroke();
    }
  }

  function drawFruits(){
    fruits.forEach(fruit => {
      const cx = fruit.x*CELL + CELL/2, cy = fruit.y*CELL + CELL/2, r = CELL*0.34;
      const grad = ctx.createRadialGradient(cx-r*0.3, cy-r*0.3, r*0.1, cx, cy, r);
      grad.addColorStop(0, fruit.shine); grad.addColorStop(1, fruit.color);
      ctx.beginPath(); ctx.fillStyle = grad; ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle = '#5B3A22'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(cx, cy - r); ctx.lineTo(cx + 2, cy - r - 5); ctx.stroke();
    });
  }

  function roundRect(x,y,w,h,r){
    ctx.beginPath();
    ctx.moveTo(x+r, y); ctx.arcTo(x+w, y, x+w, y+h, r); ctx.arcTo(x+w, y+h, x, y+h, r);
    ctx.arcTo(x, y+h, x, y, r); ctx.arcTo(x, y, x+w, y, r); ctx.closePath();
  }

  function drawSnake(s){
    if(!s.alive) return;
    s.segments.forEach((seg, i) => {
      const x = seg.x*CELL, y = seg.y*CELL;
      const isHead = i === 0;
      ctx.fillStyle = isHead ? s.color.head : (i % 2 === 0 ? s.color.body : s.color.bodyAlt);
      const pad = 2;
      roundRect(x+pad, y+pad, CELL-pad*2, CELL-pad*2, 6);
      ctx.fill();
      if(isHead){
        ctx.fillStyle = '#0A140F';
        const eyeOffsetX = s.dir.x !== 0 ? (s.dir.x>0? CELL*0.65 : CELL*0.15) : CELL*0.3;
        const eyeOffsetY = s.dir.y !== 0 ? (s.dir.y>0? CELL*0.65 : CELL*0.15) : CELL*0.3;
        ctx.beginPath(); ctx.arc(x + eyeOffsetX, y + eyeOffsetY, 2.2, 0, Math.PI*2); ctx.fill();
        const eyeOffsetX2 = s.dir.x !== 0 ? eyeOffsetX : CELL*0.7;
        const eyeOffsetY2 = s.dir.y !== 0 ? eyeOffsetY : CELL*0.3;
        ctx.beginPath(); ctx.arc(x + eyeOffsetX2, y + eyeOffsetY2, 2.2, 0, Math.PI*2); ctx.fill();
      }
    });
  }

  function render(){
    drawBackground();
    drawFruits();
    aiSnakes.forEach(drawSnake);
    drawSnake(playerSnake);
  }

  function nearestFruitDir(head){
    if(fruits.length === 0) return null;
    let bst = null, bestDist = Infinity;
    fruits.forEach(f => {
      const d = Math.abs(f.x-head.x) + Math.abs(f.y-head.y);
      if(d < bestDist){ bestDist = d; bst = f; }
    });
    return bst;
  }

  function decideAI(s){
    const head = s.segments[0];
    const opposite = { x: -s.dir.x, y: -s.dir.y };
    const dirsList = [{x:0,y:-1},{x:0,y:1},{x:-1,y:0},{x:1,y:0}];
    let candidates = dirsList.filter(d => !(d.x===opposite.x && d.y===opposite.y));

    const occupied = new Set();
    [playerSnake, ...aiSnakes].forEach(other => {
      if(!other.alive) return;
      const segs = other === s ? other.segments.slice(0, -1) : other.segments;
      segs.forEach(seg => occupied.add(cellKey(seg.x, seg.y)));
    });

    let safe = candidates.filter(d => {
      const nx = head.x+d.x, ny = head.y+d.y;
      if(nx<0||nx>=GRID||ny<0||ny>=GRID) return false;
      if(occupied.has(cellKey(nx, ny))) return false;
      return true;
    });
    if(safe.length === 0) safe = candidates;

    const target = nearestFruitDir(head);
    if(target){
      safe.sort((a,b) => {
        const da = Math.abs((head.x+a.x)-target.x) + Math.abs((head.y+a.y)-target.y);
        const db = Math.abs((head.x+b.x)-target.x) + Math.abs((head.y+b.y)-target.y);
        return da-db;
      });
    }
    s.dir = safe[0] || s.dir;
  }

  function step(){
    if(paused) return;

    playerSnake.dir = playerSnake.nextDir;
    aiSnakes.forEach(s => { if(s.alive) decideAI(s); });

    const alive = [playerSnake, ...aiSnakes].filter(s => s.alive);

    alive.forEach(s => { s.nextHead = { x: s.segments[0].x + s.dir.x, y: s.segments[0].y + s.dir.y }; });

    const claimedFruit = new Set();
    alive.forEach(s => {
      const f = fruits.find(fr => fr.x===s.nextHead.x && fr.y===s.nextHead.y && !claimedFruit.has(fr));
      if(f){ s.eating = f; claimedFruit.add(f); } else { s.eating = null; }
    });

    alive.forEach(s => {
      s.dead = false;
      if(s.nextHead.x<0 || s.nextHead.x>=GRID || s.nextHead.y<0 || s.nextHead.y>=GRID){ s.dead = true; }
    });
    alive.forEach(s => {
      if(s.dead) return;
      const ownBody = s.eating ? s.segments : s.segments.slice(0, -1);
      if(ownBody.some(seg => seg.x===s.nextHead.x && seg.y===s.nextHead.y)){ s.dead = true; return; }
      for(const other of alive){
        if(other === s) continue;
        const otherBody = other.eating ? other.segments : other.segments.slice(0, -1);
        if(otherBody.some(seg => seg.x===s.nextHead.x && seg.y===s.nextHead.y)){ s.dead = true; break; }
      }
    });
    for(let i=0;i<alive.length;i++){
      for(let j=i+1;j<alive.length;j++){
        const a = alive[i], b = alive[j];
        if(!a.dead && !b.dead && a.nextHead.x===b.nextHead.x && a.nextHead.y===b.nextHead.y){ a.dead = true; b.dead = true; }
      }
    }

    alive.forEach(s => {
      if(s.dead){
        s.alive = false;
        s.segments.forEach(seg => addFruitAt(seg.x, seg.y, randomFruitKind()));
      }
    });

    let playerAte = false;
    alive.forEach(s => {
      if(s.dead) return;
      s.segments.unshift(s.nextHead);
      if(s.eating){
        fruits = fruits.filter(f => f !== s.eating);
        if(s.isPlayer){ score++; scoreEl.textContent = score; playerAte = true; }
      } else {
        s.segments.pop();
      }
    });

    ensureFruitCount();
    opponentsEl.textContent = aiSnakes.filter(a => a.alive).length;

    if(playerAte){ sfxEat(); }
    if(playerAte && speed > 45){ speed -= 3; restartLoop(); }

    if(!playerSnake.alive){ render(); return gameOver(false); }
    if(aiSnakes.every(a => !a.alive)){ render(); return gameOver(true); }

    render();
  }

  function restartLoop(){ clearInterval(gameLoop); gameLoop = setInterval(step, speed); }

  function gameOver(won){
    running = false;
    clearInterval(gameLoop);
    stopMusic();
    if(won) sfxWin(); else sfxDeath();

    const prevStats = JSON.parse(JSON.stringify(stats));

    stats.totalFruit += score;
    stats.longestLength = Math.max(stats.longestLength, playerSnake.segments.length);
    if(score > stats.bestScore){
      stats.bestScore = score;
      best = score;
      bestEl.textContent = best;
      bestScoreNumEl.textContent = best;
    }

    const nextLevelBtn = document.getElementById('nextLevelBtn');

    if(won){
      stats.gamesWon += 1;
      stats.maxLevelCleared = Math.max(stats.maxLevelCleared, currentLevel);
      if(opponentCount === 4) stats.wonFullPack = true;
      if(opponentCount === 1) stats.wonSolo = true;
      maxLevelNumEl.textContent = stats.maxLevelCleared;

      overlayTitle.textContent = t('winTitle');
      overlaySub.textContent = t('winSub', score, playerSnake.segments.length);

      if(currentLevel + 1 > maxUnlockedLevel){
        maxUnlockedLevel = currentLevel + 1;
        saveUnlocked();
        overlaySub.textContent += ' ' + t('unlocked');
      }
      nextLevelBtn.style.display = 'inline-block';
    } else {
      overlayTitle.textContent = t('gameOverTitle');
      overlaySub.textContent = t('loseSub', score, playerSnake.segments.length);
      nextLevelBtn.style.display = 'none';
    }

    saveStats();

    const newAch = checkNewAchievements(prevStats);
    if(newAch.length > 0){
      achToastEl.textContent = t('achUnlock', newAch.map(a => a.name));
      achToastEl.classList.remove('hidden');
    } else {
      achToastEl.classList.add('hidden');
    }

    overlay.classList.remove('hidden');
  }

  function startGame(){
    ensureAudioCtx();
    resetState();
    running = true;
    paused = false;
    overlay.classList.add('hidden');
    showScreen('screen-game');
    applyTheme();
    render();
    restartLoop();
    startMusic();
  }

  function setDir(x, y){
    if(!running || !playerSnake) return;
    if(playerSnake.dir.x === -x && playerSnake.dir.y === -y) return;
    playerSnake.nextDir = { x, y };
  }

  window.addEventListener('keydown', (e) => {
    if(!document.getElementById('screen-game').classList.contains('active')) return;
    switch(e.key){
      case 'ArrowUp': case 'w': case 'W': setDir(0,-1); e.preventDefault(); break;
      case 'ArrowDown': case 's': case 'S': setDir(0,1); e.preventDefault(); break;
      case 'ArrowLeft': case 'a': case 'A': setDir(-1,0); e.preventDefault(); break;
      case 'ArrowRight': case 'd': case 'D': setDir(1,0); e.preventDefault(); break;
      case ' ': if(running){ paused = !paused; } e.preventDefault(); break;
    }
  });

  document.querySelectorAll('.dbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const d = btn.dataset.dir;
      if(d==='up') setDir(0,-1);
      if(d==='down') setDir(0,1);
      if(d==='left') setDir(-1,0);
      if(d==='right') setDir(1,0);
    });
  });

  let touchStart = null;
  canvas.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    touchStart = { x: t.clientX, y: t.clientY };
  }, {passive:true});
  canvas.addEventListener('touchend', (e) => {
    if(!touchStart) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.x, dy = t.clientY - touchStart.y;
    if(Math.abs(dx) > Math.abs(dy)){ setDir(dx > 0 ? 1 : -1, 0); } else { setDir(0, dy > 0 ? 1 : -1); }
    touchStart = null;
  }, {passive:true});

  // ---- menu wiring ----
  document.getElementById('btnPlay').addEventListener('click', startGame);
  document.getElementById('startBattleBtn').addEventListener('click', startGame);
  document.getElementById('btnLevels').addEventListener('click', () => { renderLevels(); showScreen('screen-levels'); });
  document.getElementById('btnOpponents').addEventListener('click', () => { renderOpponents(); showScreen('screen-opponents'); });
  document.getElementById('btnChoose').addEventListener('click', () => { renderSwatches(); showScreen('screen-picker'); });
  document.getElementById('btnAchievements').addEventListener('click', () => { renderAchievements(); showScreen('screen-achievements'); });
  document.getElementById('btnSettings').addEventListener('click', () => showScreen('screen-settings'));
  document.getElementById('btnHow').addEventListener('click', () => showScreen('screen-instructions'));
  document.getElementById('btnBest').addEventListener('click', () => {
    bestScoreNumEl.textContent = best;
    maxLevelNumEl.textContent = stats.maxLevelCleared;
    showScreen('screen-best');
  });

  document.getElementById('playAgainBtn').addEventListener('click', startGame);
  document.getElementById('nextLevelBtn').addEventListener('click', () => {
    currentLevel++; updateLevelIndicator();
    startGame();
  });
  document.getElementById('menuBtn').addEventListener('click', () => {
    running = false; clearInterval(gameLoop); stopMusic(); overlay.classList.add('hidden'); showScreen('screen-menu');
  });
  document.getElementById('quitBtn').addEventListener('click', () => {
    running = false; clearInterval(gameLoop); stopMusic(); overlay.classList.add('hidden'); showScreen('screen-menu');
  });

  // ---- settings UI ----
  function initSettingsUI(){
    document.querySelectorAll('.toggle').forEach(t => {
      const key = t.dataset.key;
      t.classList.toggle('on', !!settings[key]);
      t.addEventListener('click', () => {
        settings[key] = !settings[key];
        t.classList.toggle('on', settings[key]);
        saveSettings();
        if(key === 'particles') applyParticlesVisibility();
        if(key === 'showFPS') applyFPSVisibility();
        if(key === 'music'){ if(settings.music && running) startMusic(); else stopMusic(); }
        if(key === 'sound' && settings.sound){ sfxClick(); }
      });
    });

    const volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.value = settings.volume;
    volumeSlider.addEventListener('input', () => {
      settings.volume = Number(volumeSlider.value);
      if(musicNodes) musicNodes.gain.gain.value = (settings.volume/100) * 0.12;
    });
    volumeSlider.addEventListener('change', () => { saveSettings(); sfxClick(); });

    function wireSegGroup(id, key, onChange){
      const group = document.getElementById(id);
      Array.from(group.children).forEach(btn => {
        btn.classList.toggle('active', btn.dataset.value === settings[key]);
        btn.addEventListener('click', () => {
          settings[key] = btn.dataset.value;
          Array.from(group.children).forEach(b => b.classList.toggle('active', b === btn));
          saveSettings();
          sfxClick();
          if(onChange) onChange();
        });
      });
    }
    wireSegGroup('speedGroup', 'gameSpeed');
    wireSegGroup('graphicsGroup', 'graphics', applyGraphics);

    const themeSelect = document.getElementById('themeSelect');
    themeSelect.value = settings.theme;
    themeSelect.addEventListener('change', () => {
      settings.theme = themeSelect.value;
      saveSettings();
      applyTheme();
      drawBackground();
      render();
    });

    const languageSelect = document.getElementById('languageSelect');
    languageSelect.value = settings.language;
    languageSelect.addEventListener('change', () => {
      settings.language = languageSelect.value;
      currentLocale = settings.language;
      saveSettings();
      applyTranslations();
      sfxClick();
    });
  }
  initSettingsUI();
  applyAllSettings();
  applyTranslations();

  // ---- FPS ----
  let fpsLast = performance.now(), fpsFrames = 0;
  function fpsTick(now){
    fpsFrames++;
    if(now - fpsLast >= 500){
      const fps = Math.round((fpsFrames*1000)/(now-fpsLast));
      fpsFrames = 0; fpsLast = now;
      if(settings.showFPS) fpsCounterEl.textContent = fps + ' FPS';
    }
    requestAnimationFrame(fpsTick);
  }
  requestAnimationFrame(fpsTick);

  drawBackground();
})();
