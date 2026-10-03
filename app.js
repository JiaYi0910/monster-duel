/* ================= 1. 幻獸資料庫 (全 34 隻圖鑑) ================= */
const MONSTER_DB = [
  { id: 1, name: "青芽草泥球", rarity: "N", element: "grass", cost: 1, baseAtk: 14, baseHp: 28, desc: "未受傷時自我修復 8 點生命", faIcon: "fa-seedling", evolvableTo: 101 },
  { id: 2, name: "赤耳火狐", rarity: "N", element: "fire", cost: 1, baseAtk: 18, baseHp: 18, desc: "【突襲】登場可立即發動攻擊", faIcon: "fa-fire", evolvableTo: 102 },
  { id: 3, name: "藍泡小靈龜", rarity: "N", element: "water", cost: 1, baseAtk: 12, baseHp: 36, desc: "【硬殼】首次受傷降低 10 點", faIcon: "fa-shield-heart", evolvableTo: 103 },
  { id: 4, name: "棘刺花仙", rarity: "R", element: "grass", cost: 2, baseAtk: 22, baseHp: 32, desc: "進場時抽 1 張手牌", faIcon: "fa-spa", evolvableTo: 104 },
  { id: 5, name: "熔岩獵爪豺", rarity: "R", element: "fire", cost: 2, baseAtk: 28, baseHp: 24, desc: "進場對敵方隨機噴吐 12 點火傷", faIcon: "fa-paw", evolvableTo: 105 },
  { id: 6, name: "霜角企鵝巫", rarity: "R", element: "water", cost: 2, baseAtk: 20, baseHp: 35, desc: "攻擊時削弱目標 6 點攻擊力", faIcon: "fa-snowflake", evolvableTo: 106 },
  { id: 7, name: "世界樹巨鹿", rarity: "SR", element: "grass", cost: 4, baseAtk: 32, baseHp: 55, desc: "友方小怪受傷減少 6 點", faIcon: "fa-tree", evolvableTo: 107 },
  { id: 8, name: "焚天魔炎龍", rarity: "SR", element: "fire", cost: 4, baseAtk: 45, baseHp: 40, desc: "【貫通】溢出傷害直擊敵方Boss", faIcon: "fa-dragon", evolvableTo: 108 },
  { id: 9, name: "深淵幻潮鯨", rarity: "SR", element: "water", cost: 4, baseAtk: 26, baseHp: 68, desc: "【嘲諷】敵方必須優先鎖定攻擊牠", faIcon: "fa-water", evolvableTo: 109 },
  { id: 10, name: "星穹噬光獸", rarity: "SSR", element: "void", cost: 6, baseAtk: 52, baseHp: 60, desc: "登場隨機秒殺一隻敵方怪獸！", faIcon: "fa-meteor", evolvableTo: 110 },
  { id: 11, name: "起源白晝鹿", rarity: "SSR", element: "light", cost: 6, baseAtk: 40, baseHp: 75, desc: "每回合開始恢復主角 15 點生命", faIcon: "fa-sun", evolvableTo: 111 },
  { id: 12, name: "閃電跳跳鼠", rarity: "N", element: "light", cost: 1, baseAtk: 16, baseHp: 16, desc: "進場時為我方魔力水晶 +1", faIcon: "fa-bolt-lightning", evolvableTo: 112 },
  { id: 13, name: "幽火浮游鬼", rarity: "R", element: "fire", cost: 2, baseAtk: 24, baseHp: 22, desc: "亡語：對敵方造成 15 點同歸傷害", faIcon: "fa-ghost", evolvableTo: 113 },
  { id: 14, name: "冰霜水晶蝶", rarity: "R", element: "water", cost: 2, baseAtk: 18, baseHp: 28, desc: "進場時凍結敵方攻擊力最高的小怪", faIcon: "fa-icicles", evolvableTo: 114 },
  { id: 15, name: "岩甲穿山獸", rarity: "N", element: "grass", cost: 1, baseAtk: 10, baseHp: 38, desc: "自身防禦抵禦首次普通攻擊", faIcon: "fa-shield-halved", evolvableTo: 115 },
  { id: 16, name: "雷雲狂風隼", rarity: "SR", element: "light", cost: 4, baseAtk: 36, baseHp: 44, desc: "【連擊】每回合發起兩次閃電打擊", faIcon: "fa-feather-pointed", evolvableTo: 116 },
  { id: 17, name: "萬物創生龍", rarity: "SSR", element: "void", cost: 7, baseAtk: 60, baseHp: 80, desc: "登場直接抽滿手牌，全場友軍攻擊+10", faIcon: "fa-ring", evolvableTo: 117 },
  { id: 101, name: "繁花霸王蔓", rarity: "SR", element: "grass", cost: 3, baseAtk: 38, baseHp: 62, desc: "【覺醒】回合結束修復全隊 10 點生命", faIcon: "fa-clover", evolvableTo: null },
  { id: 102, name: "九霄熾焰狐", rarity: "SR", element: "fire", cost: 3, baseAtk: 46, baseHp: 45, desc: "【覺醒突襲】登場直接對敵全體噴火 15 傷", faIcon: "fa-fire-flame-curved", evolvableTo: null },
  { id: 103, name: "鎮海玄冰神龜", rarity: "SR", element: "water", cost: 3, baseAtk: 30, baseHp: 85, desc: "【覺醒護甲】受到的所有傷害減免 30%", faIcon: "fa-shield", evolvableTo: null },
  { id: 104, name: "萬藤幻夜花妖", rarity: "SR", element: "grass", cost: 3, baseAtk: 36, baseHp: 58, desc: "【覺醒吸血】每次攻擊轉化 50% 傷害為生命", faIcon: "fa-feather", evolvableTo: null },
  { id: 105, name: "炎獄狂骨豺", rarity: "SR", element: "fire", cost: 3, baseAtk: 48, baseHp: 42, desc: "【暴怒】進場連續引爆兩次 12 點火焰衝擊", faIcon: "fa-skull-crossbones", evolvableTo: null },
  { id: 106, name: "冰皇法老企鵝", rarity: "SR", element: "water", cost: 3, baseAtk: 34, baseHp: 65, desc: "【絕對零度】攻擊時使目標直接凍結停頓", faIcon: "fa-crown", evolvableTo: null },
  { id: 107, name: "原初森羅古神鹿", rarity: "SSR", element: "grass", cost: 5, baseAtk: 46, baseHp: 88, desc: "【全域庇護】全體友方受傷減免 10 點", faIcon: "fa-leaf", evolvableTo: null },
  { id: 108, name: "劫燼滅世天龍", rarity: "SSR", element: "fire", cost: 5, baseAtk: 65, baseHp: 60, desc: "【毀滅貫通】溢出傷害雙倍痛擊敵方首領", faIcon: "fa-volcano", evolvableTo: null },
  { id: 109, name: "蒼洋吞界鯤", rarity: "SSR", element: "water", cost: 5, baseAtk: 38, baseHp: 110, desc: "【至尊嘲諷】每次受擊直接抽 1 張牌", faIcon: "fa-wind", evolvableTo: null },
  { id: 110, name: "終焉黑洞吞噬者", rarity: "SSR", element: "void", cost: 7, baseAtk: 72, baseHp: 80, desc: "【萬象歸虛】登場消滅兩名敵方怪獸", faIcon: "fa-circle-notch", evolvableTo: null },
  { id: 111, name: "創世極晝天鹿", rarity: "SSR", element: "light", cost: 7, baseAtk: 58, baseHp: 105, desc: "【聖光普照】每回合開始全隊恢復 25 點生命", faIcon: "fa-star-of-david", evolvableTo: null },
  { id: 112, name: "雷霆轟鳴巨魔鼠", rarity: "SR", element: "light", cost: 3, baseAtk: 42, baseHp: 48, desc: "【超能充電】每回合魔力上限額外永久 +1", faIcon: "fa-bolt", evolvableTo: null },
  { id: 113, name: "冥府幽靈主宰", rarity: "SR", element: "fire", cost: 3, baseAtk: 44, baseHp: 52, desc: "【冥火索命】擊殺敵怪直接復活為我方傀儡", faIcon: "fa-biohazard", evolvableTo: null },
  { id: 114, name: "極寒永凍冰晶凰", rarity: "SR", element: "water", cost: 4, baseAtk: 40, baseHp: 64, desc: "【暴風雪】登場對全體敵方怪獸造成 18 點凍結傷害", faIcon: "fa-certificate", evolvableTo: null },
  { id: 115, name: "泰坦崩岩撼地巨獸", rarity: "SR", element: "grass", cost: 3, baseAtk: 32, baseHp: 90, desc: "【鋼岩之軀】反彈所受傷害的 40%", faIcon: "fa-cubes", evolvableTo: null },
  { id: 116, name: "掣電神風天鵰", rarity: "SSR", element: "light", cost: 6, baseAtk: 62, baseHp: 68, desc: "【雷暴神罰】攻擊直擊後排首領並附帶麻痺", faIcon: "fa-plane-tail", evolvableTo: null },
  { id: 117, name: "太古虛空終焉帝", rarity: "SSR", element: "void", cost: 8, baseAtk: 88, baseHp: 95, desc: "【神話威壓】雙方所有打出的卡牌消耗翻倍", faIcon: "fa-infinity", evolvableTo: null }
];

/* ================= 2. 戰役章節資料庫 (8 大戰役) ================= */
const STAGES_DB = [
  { id: 1, title: "第 1 區：微光森林外圍", desc: "草水小怪出沒，掉落蒼翠靈石與強化石。", bossName: "森林巨蜂王", bossElement: "grass", bossHp: 70, bossIcon: "fa-bug", rewardGold: 220, rewardExp: 60, dropStone: 3, dropMaterial: "grass_stone", deck: [1, 3, 4] },
  { id: 2, title: "第 2 區：灼熱焦土裂谷", desc: "烈焰怪獸攻勢兇猛，掉落烈焰結晶！", bossName: "熔岩魔石像", bossElement: "fire", bossHp: 110, bossIcon: "fa-mountain", rewardGold: 380, rewardExp: 90, dropStone: 4, dropMaterial: "fire_stone", deck: [2, 5, 8] },
  { id: 3, title: "第 3 區：深淵海溝神殿", desc: "沉睡水系巨獸，掉落深海秘珠！", bossName: "幻海利維坦", bossElement: "water", bossHp: 150, bossIcon: "fa-anchor", rewardGold: 550, rewardExp: 140, dropStone: 5, dropMaterial: "water_stone", deck: [3, 6, 9] },
  { id: 4, title: "第 4 區：星辰遠古祭壇", desc: "虛空裂隙打開之地，掉落頂級虛空星核！", bossName: "混沌終焉核心", bossElement: "void", bossHp: 200, bossIcon: "fa-eye", rewardGold: 1100, rewardExp: 220, dropStone: 8, dropMaterial: "void_stone", deck: [7, 8, 9, 10, 11] },
  { id: 5, title: "第 5 區：暴怒雷鳴尖塔", desc: "雷電狂轟的高塔，強大電系生物把守！", bossName: "蒼穹雷霆天馬", bossElement: "light", bossHp: 260, bossIcon: "fa-cloud-bolt", rewardGold: 1400, rewardExp: 280, dropStone: 10, dropMaterial: "void_stone", deck: [12, 16, 11] },
  { id: 6, title: "第 6 區：極北永凍冰原", desc: "零下千度的極寒冰封世界，水系強敵盤踞！", bossName: "霜骸遠古魔像", bossElement: "water", bossHp: 320, bossIcon: "fa-snowflake", rewardGold: 1800, rewardExp: 350, dropStone: 12, dropMaterial: "water_stone", deck: [6, 14, 109] },
  { id: 7, title: "第 7 區：暗黑幽冥煉獄", desc: "冥火燃燒的靈魂歸處，挑戰地獄領主！", bossName: "幽冥黃泉收割者", bossElement: "fire", bossHp: 390, bossIcon: "fa-skull-crossbones", rewardGold: 2300, rewardExp: 420, dropStone: 15, dropMaterial: "fire_stone", deck: [5, 13, 108] },
  { id: 8, title: "第 8 區：創世神域巔峰", desc: "宇宙誕生最初之地，挑戰萬物創世龍神！", bossName: "原初創世主宰", bossElement: "void", bossHp: 480, bossIcon: "fa-sun", rewardGold: 3500, rewardExp: 600, dropStone: 20, dropMaterial: "void_stone", deck: [10, 11, 16, 17] }
];

/* ================= 3. 成就資料庫 ================= */
const ACHIEVEMENTS_DB = [
  { id: "stage_1", title: "微光破曉", desc: "成功通關第 1 區「微光森林外圍」", rewardGold: 300, rewardStone: 5, rewardTitle: null, check: p => p.clearedStages >= 1 },
  { id: "stage_4", title: "星界征服者", desc: "擊破第 4 區「星辰遠古祭壇」", rewardGold: 1200, rewardStone: 15, rewardTitle: "星界征服者", check: p => p.clearedStages >= 4 },
  { id: "stage_8", title: "神域創世者", desc: "平定全部 8 大戰役，擊敗原初創世主宰", rewardGold: 5000, rewardStone: 40, rewardTitle: "神域弒神者", check: p => p.clearedStages >= 8 },
  { id: "collect_8", title: "初具規模", desc: "幻獸圖鑑累計收集達到 8 隻", rewardGold: 500, rewardStone: 8, rewardTitle: null, check: p => p.collection.length >= 8 },
  { id: "collect_all", title: "全圖鑑制霸", desc: "解鎖圖鑑中全部 34 隻幻獸", rewardGold: 5000, rewardStone: 50, rewardTitle: "全圖鑑大師", check: p => p.collection.length >= 34 },
  { id: "level_5", title: "初露崢嶸", desc: "召喚師等級提升至 5 級", rewardGold: 600, rewardStone: 6, rewardTitle: "資深召喚師", check: p => p.level >= 5 },
  { id: "level_10", title: "超凡入聖", desc: "召喚師等級突破 10 級", rewardGold: 2000, rewardStone: 20, rewardTitle: "傳奇天尊", check: p => p.level >= 10 },
  { id: "upgrade_max", title: "極限突破", desc: "將任意一隻幻獸強化至滿等 (Lv.5)", rewardGold: 800, rewardStone: 10, rewardTitle: null, check: p => Object.values(p.cardLevels || {}).some(lv => lv >= 5) },
  { id: "friend_3", title: "四海皆兄弟", desc: "成功結交 3 位以上的冒險者好友", rewardGold: 400, rewardStone: 5, rewardTitle: null, check: p => (p.friends || []).length >= 3 }
];

/* ================= 4. 背包材料資料庫 ================= */
const MATERIAL_DB = {
  upgradeStone: { name: "幻獸強化石", icon: "fa-gem", rarity: "R", desc: "蘊含濃郁靈力的打磨晶石，可用於提升幻獸等級與戰鬥數值。" },
  grass_stone: { name: "蒼翠靈石", icon: "fa-leaf", rarity: "SR", desc: "森林深處吸納百年月光的翡翠精魄，草系滿等怪獸進化專用素材。" },
  fire_stone: { name: "烈焰結晶", icon: "fa-fire", rarity: "SR", desc: "地心熔岩淬鍊而成的滾燙結晶，火系滿等怪獸覺醒進化專用。" },
  water_stone: { name: "深海秘珠", icon: "fa-droplet", rarity: "SR", desc: "深淵巨蚌孕育千年的湛藍寶珠，水系滿等怪獸蛻變進化必備。" },
  void_stone: { name: "虛空星核", icon: "fa-circle-dot", rarity: "SSR", desc: "天外隕落的微型黑洞殘核，具備扭曲現實的神秘威能。" }
};

/* ================= 5. 新手教學資料 ================= */
let currentTutorialStep = 0;
const TUTORIAL_STEPS = [
  { icon: "fa-dragon", title: "召喚之陣與出征", desc: "歡迎來到幻獸大陸！你可以從祭壇召喚專屬幻獸，並在「牌組」頁面挑選 4~6 隻獨特幻獸組合出征。" },
  { icon: "fa-burst", title: "自動突襲與屬性", desc: "戰鬥中打出怪獸會立即自動發動衝擊！火克草、草克水、水克火，抓住剋制倍率打出巨大暴擊！" },
  { icon: "fa-star", title: "升級成長與生命", desc: "戰鬥獲取召喚師經驗。每升 1 級最大生命值永久 +20，怪獸滿等 Lv.5 後更可消耗靈石覺醒為究極神話形態！" }
];

/* ================= 6. 核心變數與狀態 ================= */
let currentAccount = null;
let player = null;
let selectedUpgradeCardId = null;
let isShowingCompletedAchievements = false;
let staminaInterval = null;
let nextUid = 1;

let battleState = {
  activeStage: null,
  turn: 1,
  isPlayerTurn: true,
  playerHp: 80,
  playerMaxHp: 80,
  enemyHp: 80,
  enemyMaxHp: 80,
  playerMana: 2,
  playerMaxMana: 2,
  playerHand: [],
  enemyHand: [],
  playerDeck: [],
  enemyDeck: [],
  playerBoard: [],
  enemyBoard: [],
  isAnimating: false,
  autoTurnTimer: null
};

/* ================= 7. 等級模型與體力恢復 ================= */
function getMaxExpForLevel(lvl) {
  return lvl * 100;
}

function getPlayerMaxHp(lvl) {
  return 80 + (lvl - 1) * 20;
}

function addPlayerExp(amount) {
  if (!player) return;
  player.exp = (player.exp || 0) + amount;
  let leveledUp = false;

  while (player.exp >= getMaxExpForLevel(player.level)) {
    player.exp -= getMaxExpForLevel(player.level);
    player.level += 1;
    leveledUp = true;
    player.stamina = 5;
    player.gold += 200;
    player.inventory.upgradeStone = (player.inventory.upgradeStone || 0) + 3;
  }

  saveCurrentPlayerData();
  if (leveledUp) {
    showLevelUpModal(player.level);
  }
}

function showLevelUpModal(newLevel) {
  document.getElementById('levelup-new-lvl').innerText = newLevel;
  document.getElementById('modal-level-up').classList.remove('hidden');
}

function closeLevelUpModal() {
  document.getElementById('modal-level-up').classList.add('hidden');
}

/* ================= 8. 存檔與玩家管理 (LocalStorage) ================= */
function getAllAccounts() {
  const data = localStorage.getItem('monster_game_accounts');
  return data ? JSON.parse(data) : {};
}

function saveAllAccounts(accs) {
  localStorage.setItem('monster_game_accounts', JSON.stringify(accs));
}

function saveCurrentPlayerData() {
  if (!currentAccount || !player) return;
  const accs = getAllAccounts();
  if (accs[currentAccount]) {
    accs[currentAccount].playerData = player;
    saveAllAccounts(accs);
  }
  updateTopBar();
  updateHomeView();
}

/* 核心登入與註冊入口 (修復點擊無反應的核心) */
function handleAuth(isLoginMode) {
  const user = document.getElementById('login-username').value.trim();
  const pass = document.getElementById('login-password').value.trim();
  if (!user || !pass) {
    alert("請輸入冒險者帳號與密碼！");
    return;
  }
  const accs = getAllAccounts();

  if (isLoginMode) {
    if (!accs[user] || accs[user].password !== pass) {
      alert("帳號不存在或密碼錯誤！若未註冊請點擊「註冊新帳號」");
      return;
    }
    currentAccount = user;
    player = accs[user].playerData;
    ensurePlayerSchema();
    enterGameWorld();
  } else {
    if (accs[user]) {
      alert("此帳號名稱已被註冊，請換一個或直接登入！");
      return;
    }
    const generatedId = "#" + Math.floor(1000 + Math.random() * 9000);
    accs[user] = {
      password: pass,
      playerData: {
        id: generatedId,
        name: user,
        title: "初心召喚師",
        unlockedTitles: ["初心召喚師"],
        level: 1,
        exp: 0,
        stamina: 5,
        lastStaminaUpdate: Date.now(),
        gold: 800,
        clearedStages: 0,
        collection: [1, 2, 3, 4, 5],
        deck: [1, 2, 3, 4, 5],
        cardLevels: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 },
        inventory: { upgradeStone: 6, grass_stone: 1, fire_stone: 1, water_stone: 1, void_stone: 0 },
        claimedAchievements: [],
        friends: [],
        friendRequests: [],
        hasCompletedTutorial: false
      }
    };
    saveAllAccounts(accs);
    currentAccount = user;
    player = accs[user].playerData;
    enterGameWorld();
  }
}

function ensurePlayerSchema() {
  if (!player.id) player.id = "#" + Math.floor(1000 + Math.random() * 9000);
  if (!player.title) player.title = "初心召喚師";
  if (!player.unlockedTitles) player.unlockedTitles = ["初心召喚師"];
  if (player.level === undefined) player.level = 1;
  if (player.exp === undefined) player.exp = 0;
  if (player.stamina === undefined) player.stamina = 5;
  if (!player.lastStaminaUpdate) player.lastStaminaUpdate = Date.now();
  if (!player.cardLevels) player.cardLevels = {};
  if (!player.claimedAchievements) player.claimedAchievements = [];
  if (!player.friends) player.friends = [];
  if (!player.friendRequests) player.friendRequests = [];
  if (player.hasCompletedTutorial === undefined) player.hasCompletedTutorial = true;
  player.friends = player.friends.filter(f => !String(f.id).startsWith("npc_"));
  if (!player.inventory) {
    player.inventory = { upgradeStone: 5, grass_stone: 1, fire_stone: 1, water_stone: 1, void_stone: 0 };
  }
  player.collection.forEach(id => {
    if (!player.cardLevels[id]) player.cardLevels[id] = 1;
  });
  calculateStaminaRecovery();
}

function calculateStaminaRecovery() {
  if (player.stamina >= 5) {
    player.lastStaminaUpdate = Date.now();
    return;
  }
  const now = Date.now();
  const elapsedMs = now - player.lastStaminaUpdate;
  const fiveMinMs = 5 * 60 * 1000;
  const recovered = Math.floor(elapsedMs / fiveMinMs);
  if (recovered > 0) {
    player.stamina = Math.min(5, player.stamina + recovered);
    player.lastStaminaUpdate = now - (elapsedMs % fiveMinMs);
    saveCurrentPlayerData();
  }
}

function startStaminaTimer() {
  clearInterval(staminaInterval);
  staminaInterval = setInterval(() => {
    if (!player) return;
    calculateStaminaRecovery();
    updateTopBar();
    updateHomeView();
  }, 1000);
}

function enterGameWorld() {
  document.getElementById('view-login').classList.add('hidden');
  document.getElementById('top-bar').classList.remove('hidden');
  document.getElementById('bottom-nav').classList.remove('hidden');
  updateTopBar();
  startStaminaTimer();
  switchTab('home');
  checkAndShowTutorial();
}

function handleLogout() {
  clearInterval(staminaInterval);
  currentAccount = null;
  player = null;
  document.getElementById('top-bar').classList.add('hidden');
  document.getElementById('bottom-nav').classList.add('hidden');
  document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
  document.getElementById('view-login').classList.remove('hidden');
}

function updateTopBar() {
  if (!player) return;
  document.getElementById('user-name-display').innerText = player.name;
  document.getElementById('user-title-display').innerText = player.title || "初心召喚師";
  document.getElementById('user-level').innerText = player.level;
  document.getElementById('gold-display').innerText = player.gold;
  
  const maxExp = getMaxExpForLevel(player.level);
  const expPercent = Math.min(100, Math.max(0, ((player.exp || 0) / maxExp) * 100));
  const expBar = document.getElementById('user-exp-bar');
  if (expBar) expBar.style.width = expPercent + '%';

  const stamDisplay = document.getElementById('stamina-display');
  if (stamDisplay) stamDisplay.innerText = `${player.stamina}/5`;

  const timerEl = document.getElementById('stamina-timer');
  if (timerEl) {
    if (player.stamina < 5) {
      const remainingMs = Math.max(0, (5 * 60 * 1000) - (Date.now() - player.lastStaminaUpdate));
      const mins = Math.floor(remainingMs / 60000);
      const secs = Math.floor((remainingMs % 60000) / 1000);
      timerEl.innerText = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
      timerEl.classList.remove('hidden');
    } else {
      timerEl.classList.add('hidden');
    }
  }
}

function updateHomeView() {
  if (!player) return;
  document.getElementById('home-welcome-name').innerText = player.name;
  document.getElementById('home-deck-stat').innerText = `${player.deck.length} / 6 隻`;
  document.getElementById('home-stage-stat').innerText = `已征服第 ${player.clearedStages} 區`;

  document.getElementById('home-stamina-display').innerText = `${player.stamina}/5`;
  const homeTimer = document.getElementById('home-stamina-timer');
  if (player.stamina < 5) {
    const remainingMs = Math.max(0, (5 * 60 * 1000) - (Date.now() - player.lastStaminaUpdate));
    const mins = Math.floor(remainingMs / 60000);
    const secs = Math.floor((remainingMs % 60000) / 1000);
    homeTimer.innerText = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
    homeTimer.classList.remove('hidden');
  } else {
    homeTimer.classList.add('hidden');
  }

  if (player.deck.length > 0) {
    const bestMonster = player.deck.map(id => getMonsterStats(id)).sort((a,b) => b.atk - a.atk)[0];
    document.getElementById('home-pet-icon').innerHTML = `<i class="fa-solid ${bestMonster.faIcon}"></i>`;
    document.getElementById('home-pet-name').innerText = `${bestMonster.name} (Lv.${bestMonster.level})`;
  }
}

/* ================= 9. 新手教學控制 ================= */
function checkAndShowTutorial() {
  if (player && !player.hasCompletedTutorial) {
    currentTutorialStep = 0;
    showTutorialModal();
  }
}

function showTutorialModal() {
  const step = TUTORIAL_STEPS[currentTutorialStep];
  document.getElementById('tutorial-icon').innerHTML = `<i class="fa-solid ${step.icon}"></i>`;
  document.getElementById('tutorial-title').innerText = step.title;
  document.getElementById('tutorial-step-indicator').innerText = `步驟 ${currentTutorialStep + 1} / ${TUTORIAL_STEPS.length}`;
  document.getElementById('tutorial-desc').innerText = step.desc;

  const nextBtn = document.getElementById('tutorial-next-btn');
  if (currentTutorialStep === TUTORIAL_STEPS.length - 1) {
    nextBtn.innerText = "完成指引並領取啟程禮包";
  } else {
    nextBtn.innerText = "下一步";
  }

  document.getElementById('modal-tutorial').classList.remove('hidden');
}

function nextTutorialStep() {
  if (currentTutorialStep < TUTORIAL_STEPS.length - 1) {
    currentTutorialStep++;
    showTutorialModal();
  } else {
    player.hasCompletedTutorial = true;
    player.gold += 300;
    player.stamina = 5;
    saveCurrentPlayerData();
    document.getElementById('modal-tutorial').classList.add('hidden');
    alert("恭喜完成新手教學！已獲得 300 金幣啟程獎勵！");
    updateHomeView();
  }
}

/* ================= 10. 選單與分頁導覽 ================= */
function toggleDropdownMenu(e) {
  e.stopPropagation();
  const menu = document.getElementById('dropdown-menu');
  menu.classList.toggle('hidden');
}

function closeDropdownMenu(e) {
  const menu = document.getElementById('dropdown-menu');
  if (menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
}

function switchTab(tabId) {
  document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    if (btn.dataset.target === tabId) {
      btn.classList.add('text-amber-400');
      btn.classList.remove('text-slate-400');
    } else {
      btn.classList.remove('text-amber-400');
      btn.classList.add('text-slate-400');
    }
  });

  const target = document.getElementById(`view-${tabId}`);
  if (target) target.classList.remove('hidden');

  if (tabId === 'home') updateHomeView();
  if (tabId === 'stages') renderStages();
  if (tabId === 'codex') renderCodex();
  if (tabId === 'deck') renderDeckView();
}

/* ================= 11. 個人檔案、稱號與好友 ================= */
function openProfileModal() {
  document.getElementById('profile-my-id').innerText = player.id || "#8888";
  document.getElementById('profile-input-name').value = player.name;
  document.getElementById('profile-level-val').innerText = player.level;
  document.getElementById('profile-title-val').innerText = player.title || "初心召喚師";
  document.getElementById('profile-hp-val').innerText = `${getPlayerMaxHp(player.level)} HP`;

  const maxExp = getMaxExpForLevel(player.level);
  document.getElementById('profile-exp-text').innerText = `${player.exp || 0} / ${maxExp} EXP`;
  const expPct = Math.min(100, Math.max(0, ((player.exp || 0) / maxExp) * 100));
  document.getElementById('profile-exp-bar').style.width = expPct + '%';

  renderTitlesList();
  document.getElementById('modal-profile').classList.remove('hidden');
}
function closeProfileModal() { document.getElementById('modal-profile').classList.add('hidden'); }

function copyMyId() {
  navigator.clipboard.writeText(player.id || "#8888").then(() => {
    alert(`已複製召喚師 ID：${player.id}！分享給其他玩家申請好友！`);
  });
}

function saveProfileName() {
  const val = document.getElementById('profile-input-name').value.trim();
  if (!val) return;
  player.name = val;
  saveCurrentPlayerData();
  alert("名號修改成功！");
}

function renderTitlesList() {
  const container = document.getElementById('profile-titles-list');
  container.innerHTML = '';
  player.unlockedTitles.forEach(t => {
    const isCurrent = (player.title === t);
    const tag = document.createElement('button');
    tag.className = `px-2 py-1 rounded text-[11px] font-bold transition whitespace-nowrap ${isCurrent ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-300 hover:border-amber-400 border border-slate-700'}`;
    tag.innerText = t + (isCurrent ? ' (佩戴中)' : '');
    tag.onclick = () => {
      player.title = t;
      saveCurrentPlayerData();
      renderTitlesList();
      openProfileModal();
    };
    container.appendChild(tag);
  });
}

function openFriendsModal() {
  const menu = document.getElementById('dropdown-menu');
  if (menu) menu.classList.add('hidden');
  renderFriendRequests();
  renderFriendsList();
  document.getElementById('modal-friends').classList.remove('hidden');
}
function closeFriendsModal() { document.getElementById('modal-friends').classList.add('hidden'); }

function sendFriendRequest() {
  const targetId = document.getElementById('friend-input-target-id').value.trim();
  if (!targetId) { alert("請輸入對方的召喚師 ID！"); return; }
  if (targetId === player.id) { alert("不能向自己發送好友申請！"); return; }
  if (player.friends.some(f => f.id === targetId)) { alert("對方已在好友名單中！"); return; }

  document.getElementById('friend-input-target-id').value = '';
  alert(`已向召喚師【${targetId}】發送好友邀請！等待對方審核。`);

  setTimeout(() => {
    if (!player.friendRequests) player.friendRequests = [];
    player.friendRequests.push({
      id: targetId,
      name: "法師" + targetId.replace('#', '_'),
      title: "星界遊俠",
      level: Math.floor(Math.random() * 10) + 3
    });
    saveCurrentPlayerData();
    renderFriendRequests();
  }, 1500);
}

function renderFriendRequests() {
  const box = document.getElementById('friend-requests-box');
  const list = document.getElementById('friend-requests-list');
  list.innerHTML = '';

  if (!player.friendRequests || player.friendRequests.length === 0) {
    box.classList.add('hidden');
    return;
  }

  box.classList.remove('hidden');
  player.friendRequests.forEach((req, idx) => {
    const row = document.createElement('div');
    row.className = "flex items-center justify-between bg-slate-900/80 p-1.5 rounded-lg border border-slate-700 text-xs";
    row.innerHTML = `
      <div>
        <span class="font-bold text-white">${req.name}</span>
        <span class="text-[9px] text-amber-300">(${req.id})</span>
      </div>
      <div class="flex gap-1.5">
        <button onclick="acceptFriendRequest(${idx})" class="px-2 py-0.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[10px] font-bold whitespace-nowrap">同意</button>
        <button onclick="rejectFriendRequest(${idx})" class="px-2 py-0.5 bg-rose-700 hover:bg-rose-600 text-white rounded text-[10px] font-bold whitespace-nowrap">拒絕</button>
      </div>
    `;
    list.appendChild(row);
  });
}

function acceptFriendRequest(idx) {
  const req = player.friendRequests[idx];
  player.friends.push({
    id: req.id,
    name: req.name,
    title: req.title,
    level: req.level,
    giftSent: false
  });
  player.friendRequests.splice(idx, 1);
  saveCurrentPlayerData();
  renderFriendRequests();
  renderFriendsList();
  alert(`已同意申請！與【${req.name}】正式成為好友！`);
}

function rejectFriendRequest(idx) {
  player.friendRequests.splice(idx, 1);
  saveCurrentPlayerData();
  renderFriendRequests();
}

function renderFriendsList() {
  const listContainer = document.getElementById('friends-list-container');
  listContainer.innerHTML = '';
  document.getElementById('friends-count').innerText = (player.friends || []).length;

  if (!player.friends || player.friends.length === 0) {
    listContainer.innerHTML = `
      <div class="p-4 text-center text-xs text-slate-500 bg-slate-950/40 rounded-xl border border-slate-800">
        目前暫無好友。輸入上方 ID 結交新冒險者吧！
      </div>
    `;
    return;
  }

  player.friends.forEach((fr, idx) => {
    const row = document.createElement('div');
    row.className = "flex items-center justify-between p-2 rounded-lg bg-slate-800 border border-slate-700 text-xs";
    row.innerHTML = `
      <div class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-full bg-indigo-900 border border-indigo-400 flex items-center justify-center font-bold text-white text-[10px]">
          <i class="fa-solid fa-user"></i>
        </div>
        <div>
          <div class="font-bold text-white">${fr.name} <span class="text-[9px] text-amber-300">【${fr.title}】</span></div>
          <div class="text-[9px] text-slate-400">${fr.id} ｜ Lv.${fr.level}</div>
        </div>
      </div>
      <div class="flex items-center gap-1.5">
        <button onclick="sendFriendGift(${idx})" class="px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap ${fr.giftSent ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500 text-white'}">
          ${fr.giftSent ? '已贈禮' : '贈金幣'}
        </button>
        <button onclick="deleteFriend(${idx})" class="w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 transition shrink-0" title="刪除好友">
          <i class="fa-solid fa-trash-can text-xs"></i>
        </button>
      </div>
    `;
    listContainer.appendChild(row);
  });
}

function deleteFriend(idx) {
  const targetName = player.friends[idx].name;
  if (confirm(`確定要刪除好友【${targetName}】嗎？`)) {
    player.friends.splice(idx, 1);
    saveCurrentPlayerData();
    renderFriendsList();
  }
}

function sendFriendGift(idx) {
  if (player.friends[idx].giftSent) return;
  player.friends[idx].giftSent = true;
  player.gold += 50;
  saveCurrentPlayerData();
  renderFriendsList();
  alert(`已贈予好友禮物！好友回贈 50 金幣！`);
}

/* ================= 12. 成就系統 ================= */
function openAchievementsModal() {
  const menu = document.getElementById('dropdown-menu');
  if (menu) menu.classList.add('hidden');
  switchAchievementTab(false);
  document.getElementById('modal-achievements').classList.remove('hidden');
}
function closeAchievementsModal() { document.getElementById('modal-achievements').classList.add('hidden'); }

function switchAchievementTab(showCompleted) {
  isShowingCompletedAchievements = showCompleted;
  const tabPen = document.getElementById('ach-tab-pending');
  const tabComp = document.getElementById('ach-tab-completed');

  if (!showCompleted) {
    tabPen.className = "flex-1 py-1.5 text-xs font-bold rounded-lg bg-amber-500 text-slate-950 transition whitespace-nowrap";
    tabComp.className = "flex-1 py-1.5 text-xs font-bold rounded-lg text-slate-400 hover:text-white transition whitespace-nowrap";
  } else {
    tabComp.className = "flex-1 py-1.5 text-xs font-bold rounded-lg bg-amber-500 text-slate-950 transition whitespace-nowrap";
    tabPen.className = "flex-1 py-1.5 text-xs font-bold rounded-lg text-slate-400 hover:text-white transition whitespace-nowrap";
  }

  const container = document.getElementById('achievements-list-container');
  container.innerHTML = '';

  const filtered = ACHIEVEMENTS_DB.filter(ach => {
    const isDone = ach.check(player);
    const isClaimed = player.claimedAchievements.includes(ach.id);
    return showCompleted ? isClaimed : !isClaimed;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="p-6 text-center text-xs text-slate-500">此分頁無對應項目</div>`;
    return;
  }

  filtered.forEach(ach => {
    const isDone = ach.check(player);
    const isClaimed = player.claimedAchievements.includes(ach.id);

    const card = document.createElement('div');
    card.className = `p-3 rounded-xl border flex items-center justify-between ${isClaimed ? 'bg-slate-950/40 border-slate-800 opacity-60' : isDone ? 'bg-slate-800/90 border-amber-500/80' : 'bg-slate-900 border-slate-800'}`;

    card.innerHTML = `
      <div>
        <div class="flex items-center gap-1.5">
          <span class="text-xs font-black ${isDone ? 'text-amber-400' : 'text-slate-300'}">${ach.title}</span>
          ${ach.rewardTitle ? `<span class="text-[9px] px-1.5 py-0.2 rounded bg-indigo-950 text-indigo-300 border border-indigo-700 whitespace-nowrap font-bold"><i class="fa-solid fa-crown text-[8px] mr-0.5"></i>稱號:${ach.rewardTitle}</span>` : ''}
        </div>
        <p class="text-[10px] text-slate-400 mt-0.5">${ach.desc}</p>
        <div class="text-[10px] text-amber-300 font-bold mt-1">獎勵: +${ach.rewardGold} 金幣 ｜ +${ach.rewardStone} 強化石</div>
      </div>
      <div>
        ${isClaimed 
          ? '<span class="text-[11px] text-slate-500 font-bold whitespace-nowrap">已領取</span>' 
          : isDone 
            ? `<button onclick="claimAchievement('${ach.id}')" class="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black rounded-lg shadow-md active:scale-95 whitespace-nowrap">領取</button>`
            : '<span class="text-[11px] text-slate-600 font-bold whitespace-nowrap">未達成</span>'}
      </div>
    `;
    container.appendChild(card);
  });
}

function claimAchievement(achId) {
  const ach = ACHIEVEMENTS_DB.find(a => a.id === achId);
  if (!ach || player.claimedAchievements.includes(achId)) return;

  player.claimedAchievements.push(achId);
  player.gold += ach.rewardGold;
  player.inventory.upgradeStone = (player.inventory.upgradeStone || 0) + ach.rewardStone;

  if (ach.rewardTitle && !player.unlockedTitles.includes(ach.rewardTitle)) {
    player.unlockedTitles.push(ach.rewardTitle);
    alert(`獲得專屬傳奇稱號【${ach.rewardTitle}】！可在個人檔案佩戴！`);
  }

  saveCurrentPlayerData();
  switchAchievementTab(isShowingCompletedAchievements);
}

/* ================= 13. 格子背包 (Item Grid) ================= */
function openInventoryModal() {
  const menu = document.getElementById('dropdown-menu');
  if (menu) menu.classList.add('hidden');

  const grid = document.getElementById('inventory-grid');
  grid.innerHTML = '';

  const existingItems = Object.keys(MATERIAL_DB).filter(k => (player.inventory[k] || 0) > 0);

  for (let i = 0; i < 12; i++) {
    const slot = document.createElement('div');
    const itemKey = existingItems[i];

    if (itemKey) {
      const info = MATERIAL_DB[itemKey];
      const count = player.inventory[itemKey];
      const rarityBorder = info.rarity === 'SSR' ? 'border-amber-400 glow-ssr' : info.rarity === 'SR' ? 'border-purple-400 glow-sr' : 'border-blue-400 glow-r';

      slot.className = `w-full aspect-square rounded-xl bg-slate-800 border-2 ${rarityBorder} flex flex-col items-center justify-center relative cursor-pointer hover:scale-105 active:scale-95 transition text-amber-300`;
      slot.innerHTML = `
        <div class="text-2xl"><i class="fa-solid ${info.icon}"></i></div>
        <div class="absolute bottom-1 right-1.5 text-[10px] font-black text-amber-300 drop-shadow">x${count}</div>
      `;
      slot.onclick = () => openItemDetail(itemKey);
    } else {
      slot.className = "w-full aspect-square rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-center text-slate-700 text-xs";
      slot.innerHTML = `<i class="fa-solid fa-plus opacity-20"></i>`;
    }
    grid.appendChild(slot);
  }

  document.getElementById('modal-inventory').classList.remove('hidden');
}
function closeInventoryModal() { document.getElementById('modal-inventory').classList.add('hidden'); }

function openItemDetail(itemKey) {
  const info = MATERIAL_DB[itemKey];
  const count = player.inventory[itemKey] || 0;
  document.getElementById('item-detail-icon').innerHTML = `<i class="fa-solid ${info.icon}"></i>`;
  document.getElementById('item-detail-name').innerText = info.name;
  document.getElementById('item-detail-count').innerText = `目前在庫數量: ${count}`;
  document.getElementById('item-detail-desc').innerText = info.desc;
  document.getElementById('modal-item-detail').classList.remove('hidden');
}
function closeItemDetailModal() { document.getElementById('modal-item-detail').classList.add('hidden'); }

/* ================= 14. 卡牌數值與升級進化 ================= */
function getMonsterStats(id) {
  const monster = MONSTER_DB.find(m => m.id === id);
  const level = (player && player.cardLevels && player.cardLevels[id]) || 1;
  const atkGrowth = 4 * (level - 1);
  const hpGrowth = 8 * (level - 1);
  return {
    ...monster,
    level,
    atk: monster.baseAtk + atkGrowth,
    hp: monster.baseHp + hpGrowth
  };
}

function openUpgradeModal(id) {
  selectedUpgradeCardId = id;
  const monster = getMonsterStats(id);

  document.getElementById('upgrade-card-icon').innerHTML = `<i class="fa-solid ${monster.faIcon}"></i>`;
  document.getElementById('upgrade-card-name').innerText = monster.name;
  document.getElementById('upgrade-card-level').innerText = `當前等級：Lv.${monster.level} / Lv.5 ${monster.level >= 5 ? '(滿等)' : ''}`;
  document.getElementById('upgrade-stat-atk').innerText = `${monster.atk} (每級 +4)`;
  document.getElementById('upgrade-stat-hp').innerText = `${monster.hp} (每級 +8)`;

  const upgradeBox = document.getElementById('upgrade-action-box');
  const evolveBox = document.getElementById('evolve-action-box');

  if (monster.level >= 5) {
    upgradeBox.classList.add('hidden');
    if (monster.evolvableTo) {
      evolveBox.classList.remove('hidden');
      const evoTarget = MONSTER_DB.find(m => m.id === monster.evolvableTo);
      let reqName = "蒼翠靈石";
      if (monster.element === 'fire') reqName = "烈焰結晶";
      if (monster.element === 'water') reqName = "深海秘珠";
      if (monster.element === 'void' || monster.element === 'light') reqName = "虛空星核";
      document.getElementById('evolve-cost-text').innerText = `進化目標：【${evoTarget.name}】\n消耗：1x ${reqName} ＋ 300 金幣`;
    } else {
      evolveBox.classList.add('hidden');
    }
  } else {
    upgradeBox.classList.remove('hidden');
    evolveBox.classList.add('hidden');
    const costGold = monster.level * 100;
    const costStone = monster.level * 2;
    document.getElementById('upgrade-cost-gold').innerText = `${costGold} 金幣`;
    document.getElementById('upgrade-cost-stone').innerText = `${costStone} 強化石`;
  }

  document.getElementById('modal-upgrade').classList.remove('hidden');
}
function closeUpgradeModal() {
  document.getElementById('modal-upgrade').classList.add('hidden');
  renderDeckView();
}

function executeUpgradeCard() {
  const id = selectedUpgradeCardId;
  const currentLv = player.cardLevels[id] || 1;
  if (currentLv >= 5) return;

  const costGold = currentLv * 100;
  const costStone = currentLv * 2;

  if (player.gold < costGold) { alert("金幣不足！"); return; }
  if ((player.inventory.upgradeStone || 0) < costStone) { alert("強化石不足！"); return; }

  player.gold -= costGold;
  player.inventory.upgradeStone -= costStone;
  player.cardLevels[id] = currentLv + 1;

  saveCurrentPlayerData();
  openUpgradeModal(id);
}

function executeEvolveCard() {
  const id = selectedUpgradeCardId;
  const monster = MONSTER_DB.find(m => m.id === id);
  if (!monster || !monster.evolvableTo) return;

  let reqMaterial = "grass_stone";
  if (monster.element === 'fire') reqMaterial = "fire_stone";
  if (monster.element === 'water') reqMaterial = "water_stone";
  if (monster.element === 'void' || monster.element === 'light') reqMaterial = "void_stone";

  if (player.gold < 300) { alert("金幣不足 300！"); return; }
  if ((player.inventory[reqMaterial] || 0) < 1) { alert("對應屬性進化靈石不足！"); return; }

  player.gold -= 300;
  player.inventory[reqMaterial] -= 1;

  const newId = monster.evolvableTo;
  player.collection = player.collection.map(cid => cid === id ? newId : cid);
  player.deck = player.deck.map(cid => cid === id ? newId : cid);
  player.cardLevels[newId] = 1;

  saveCurrentPlayerData();
  alert(`覺醒大成功！【${monster.name}】極限進化為【${MONSTER_DB.find(m => m.id === newId).name}】！`);
  closeUpgradeModal();
}

/* ================= 15. 戰鬥核心引擎 ================= */
function renderStages() {
  const container = document.getElementById('stages-container');
  container.innerHTML = '';

  STAGES_DB.forEach((stage, idx) => {
    const isLocked = idx > player.clearedStages;
    const card = document.createElement('div');
    card.className = `p-5 rounded-2xl border transition-all ${isLocked ? 'bg-slate-900/40 border-slate-800 opacity-60' : 'bg-slate-900/90 border-slate-700 hover:border-amber-500/80 shadow-xl'}`;

    card.innerHTML = `
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl text-amber-300">
            <i class="fa-solid ${stage.bossIcon}"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-slate-100">${stage.title}</h3>
            <span class="text-xs text-rose-400 font-bold">首領：${stage.bossName} (HP ${stage.bossHp})</span>
          </div>
        </div>
        ${isLocked ? '<i class="fa-solid fa-lock text-slate-600 text-lg"></i>' : '<span class="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">可挑戰</span>'}
      </div>
      <p class="text-xs text-slate-400 mt-2">${stage.desc}</p>
      <div class="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
        <div class="text-[11px] text-amber-300 font-bold flex flex-wrap gap-2">
          <span>消耗 1 體力</span>
          <span>+${stage.rewardExp} EXP</span>
          <span>+${stage.rewardGold} 金幣</span>
        </div>
        <button onclick="startBattle(${stage.id})" ${isLocked ? 'disabled' : ''} 
                class="px-4 py-1.5 rounded-lg text-xs font-black whitespace-nowrap ${isLocked ? 'bg-slate-800 text-slate-600' : 'bg-amber-500 hover:bg-amber-400 text-slate-950'} transition active:scale-95">
          ${isLocked ? '未解鎖' : '出征'}
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function startBattle(stageId) {
  if (player.stamina < 1) {
    alert("體力不足！每 5 分鐘恢復 1 點體力。");
    return;
  }
  player.stamina -= 1;
  saveCurrentPlayerData();

  const stage = STAGES_DB.find(s => s.id === stageId);
  if (!stage) return;

  const dynamicPlayerHp = getPlayerMaxHp(player.level);

  battleState.activeStage = stage;
  battleState.turn = 1;
  battleState.isPlayerTurn = true;
  battleState.playerHp = dynamicPlayerHp;
  battleState.playerMaxHp = dynamicPlayerHp;
  battleState.enemyHp = stage.bossHp;
  battleState.enemyMaxHp = stage.bossHp;
  battleState.playerMana = 2;
  battleState.playerMaxMana = 2;
  battleState.isAnimating = false;

  battleState.playerDeck = shuffle([...player.deck.map(id => getMonsterStats(id))]);
  battleState.enemyDeck = shuffle([...stage.deck.map(id => getMonsterStats(id))]);
  battleState.playerBoard = [];
  battleState.enemyBoard = [];

  battleState.playerHand = [battleState.playerDeck.pop(), battleState.playerDeck.pop(), battleState.playerDeck.pop()].filter(Boolean);
  battleState.enemyHand = [battleState.enemyDeck.pop(), battleState.enemyDeck.pop(), battleState.enemyDeck.pop()].filter(Boolean);

  if (battleState.playerHand.every(c => c.cost > 2)) {
    const cheapMonster = player.deck.map(id => getMonsterStats(id)).find(m => m.cost <= 2) || getMonsterStats(1);
    battleState.playerHand[0] = { ...cheapMonster };
  }

  document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
  document.getElementById('view-battle').classList.remove('hidden');
  document.getElementById('bottom-nav').classList.add('hidden');

  document.getElementById('enemy-name').innerText = stage.bossName;
  document.getElementById('enemy-avatar').innerHTML = `<i class="fa-solid ${stage.bossIcon}"></i>`;
  document.getElementById('battle-player-name').innerText = player.name;

  updateBattleUI();
  announce("戰鬥開始！你的回合");
  scheduleAutoTurn();
}

function retreatFromBattle() {
  if (confirm("確定要中途撤退離開戰鬥嗎？本次消耗的體力不會退還。")) {
    clearTimeout(battleState.autoTurnTimer);
    exitBattle();
  }
}

function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }
function announce(text) {
  const el = document.getElementById('battle-announcer');
  const txt = document.getElementById('announcer-text');
  txt.innerText = text;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 900);
}

function showFloatingDamage(targetElement, amount, isCritical = false) {
  if (!targetElement) return;
  const rect = targetElement.getBoundingClientRect();
  const pop = document.createElement('div');
  pop.className = 'damage-pop';
  pop.innerText = `-${amount}` + (isCritical ? ' 暴擊!' : '');
  pop.style.left = `${rect.left + rect.width / 2 - 25}px`;
  pop.style.top = `${rect.top + 10}px`;
  pop.style.color = isCritical ? '#facc15' : '#f87171';
  pop.style.fontSize = isCritical ? '24px' : '18px';

  document.body.appendChild(pop);
  setTimeout(() => pop.remove(), 800);
}

function updateBattleUI() {
  const pPct = Math.max(0, (battleState.playerHp / battleState.playerMaxHp) * 100);
  const ePct = Math.max(0, (battleState.enemyHp / battleState.enemyMaxHp) * 100);
  document.getElementById('player-hp-bar').style.width = pPct + '%';
  document.getElementById('player-hp-text').innerText = `${Math.max(0, battleState.playerHp)} / ${battleState.playerMaxHp}`;
  document.getElementById('enemy-hp-bar').style.width = ePct + '%';
  document.getElementById('enemy-hp-text').innerText = `${Math.max(0, battleState.enemyHp)} / ${battleState.enemyMaxHp}`;

  document.getElementById('player-mana-text').innerText = `${battleState.playerMana}/${battleState.playerMaxMana}`;
  const crystalContainer = document.getElementById('mana-crystals');
  crystalContainer.innerHTML = '';
  for (let i = 0; i < battleState.playerMaxMana; i++) {
    const dot = document.createElement('div');
    dot.className = `w-2.5 h-2.5 rounded-full ${i < battleState.playerMana ? 'bg-sky-400 shadow-[0_0_8px_#38bdf8]' : 'bg-slate-700'}`;
    crystalContainer.appendChild(dot);
  }

  const handContainer = document.getElementById('player-hand');
  handContainer.innerHTML = '';
  battleState.playerHand.forEach((card, idx) => {
    const canPlay = battleState.isPlayerTurn && battleState.playerMana >= card.cost && battleState.playerBoard.length < 3 && !battleState.isAnimating;
    const cardEl = document.createElement('div');
    cardEl.className = `w-20 md:w-24 h-28 bg-slate-800 rounded-xl border-2 p-1.5 flex flex-col justify-between select-none transition-all shrink-0 ${canPlay ? 'playable-card cursor-pointer' : 'border-slate-700 opacity-50'}`;
    cardEl.innerHTML = `
      <div class="flex justify-between items-center text-[10px] font-black">
        <span class="text-sky-400"><i class="fa-solid fa-bolt"></i> ${card.cost}</span>
        <span class="px-1 rounded bg-slate-700 text-slate-300">Lv.${card.level}</span>
      </div>
      <div class="text-center text-2xl my-0.5 text-amber-300"><i class="fa-solid ${card.faIcon}"></i></div>
      <div class="text-[10px] font-bold truncate text-slate-200 text-center">${card.name}</div>
      <div class="flex justify-between text-[11px] font-black">
        <span class="text-rose-400"><i class="fa-solid fa-burst text-[9px]"></i> ${card.atk}</span>
        <span class="text-emerald-400"><i class="fa-solid fa-heart text-[9px]"></i> ${card.hp}</span>
      </div>
    `;
    if (canPlay) cardEl.onclick = () => playCard(idx);
    handContainer.appendChild(cardEl);
  });

  renderPlayerBoard();
  renderEnemyBoard();
}

function renderPlayerBoard() {
  const container = document.getElementById('player-board');
  container.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const monster = battleState.playerBoard[i];
    const slot = document.createElement('div');
    if (monster) {
      slot.id = `p-monster-${i}`;
      slot.className = `w-24 md:w-28 h-32 rounded-xl border-2 border-slate-700 bg-slate-800 p-2 flex flex-col justify-between relative shadow-lg transition-transform`;
      slot.innerHTML = `
        <div class="flex justify-between items-center w-full text-[10px]">
          <span class="text-xs text-amber-300"><i class="fa-solid ${monster.faIcon}"></i></span>
          <span class="text-[9px] font-black text-emerald-400">已就位</span>
        </div>
        <div class="text-xs font-bold text-center truncate text-white">${monster.name}</div>
        <div class="text-[9px] text-slate-400 line-clamp-2 leading-tight">${monster.desc}</div>
        <div class="flex justify-between w-full text-xs font-black pt-1 border-t border-slate-700">
          <span class="text-rose-400"><i class="fa-solid fa-burst text-[9px]"></i> ${monster.currentAtk}</span>
          <span class="text-emerald-400"><i class="fa-solid fa-heart text-[9px]"></i> ${monster.currentHp}</span>
        </div>
      `;
    } else {
      slot.className = "w-24 md:w-28 h-32 rounded-xl border border-dashed border-slate-800 bg-slate-900/30 flex items-center justify-center";
      slot.innerHTML = `<span class="text-[10px] text-slate-600">空位</span>`;
    }
    container.appendChild(slot);
  }
}

function renderEnemyBoard() {
  const container = document.getElementById('enemy-board');
  container.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const monster = battleState.enemyBoard[i];
    const slot = document.createElement('div');
    if (monster) {
      slot.id = `e-monster-${i}`;
      slot.className = `w-24 md:w-28 h-32 rounded-xl border-2 border-slate-700 bg-slate-800 p-2 flex flex-col justify-between relative shadow-lg transition-transform`;
      slot.innerHTML = `
        <div class="flex justify-between items-center w-full text-[10px]">
          <span class="text-xs text-amber-300"><i class="fa-solid ${monster.faIcon}"></i></span>
          <span class="text-[9px] font-black text-rose-400">${monster.element.toUpperCase()}</span>
        </div>
        <div class="text-xs font-bold text-center truncate text-white">${monster.name}</div>
        <div class="text-[9px] text-slate-400 line-clamp-2 leading-tight">${monster.desc}</div>
        <div class="flex justify-between w-full text-xs font-black pt-1 border-t border-slate-700">
          <span class="text-rose-400"><i class="fa-solid fa-burst text-[9px]"></i> ${monster.currentAtk}</span>
          <span class="text-emerald-400"><i class="fa-solid fa-heart text-[9px]"></i> ${monster.currentHp}</span>
        </div>
      `;
    } else {
      slot.className = "w-24 md:w-28 h-32 rounded-xl border border-dashed border-slate-800 bg-slate-900/30 flex items-center justify-center";
      slot.innerHTML = `<span class="text-[10px] text-slate-600">空位</span>`;
    }
    container.appendChild(slot);
  }
}

function playCard(index) {
  if (!battleState.isPlayerTurn || battleState.isAnimating) return;
  const card = battleState.playerHand[index];
  if (battleState.playerMana < card.cost || battleState.playerBoard.length >= 3) return;

  battleState.playerMana -= card.cost;
  battleState.playerHand.splice(index, 1);

  const monsterInstance = {
    ...card,
    uid: nextUid++,
    currentAtk: card.atk,
    currentHp: card.hp
  };

  const boardIdx = battleState.playerBoard.length;
  battleState.playerBoard.push(monsterInstance);
  updateBattleUI();

  if (card.id === 5) {
    if (battleState.enemyBoard.length > 0) {
      battleState.enemyBoard[0].currentHp -= 12;
      showFloatingDamage(document.getElementById('e-monster-0'), 12, true);
    } else {
      battleState.enemyHp -= 12;
      showFloatingDamage(document.getElementById('enemy-hero-box'), 12, true);
    }
  } else if (card.id === 4) {
    if (battleState.playerDeck.length > 0) battleState.playerHand.push(battleState.playerDeck.pop());
  } else if (card.id === 10) {
    if (battleState.enemyBoard.length > 0) battleState.enemyBoard.splice(0, 1);
  } else if (card.id === 102) {
    battleState.enemyBoard.forEach(m => m.currentHp -= 15);
    battleState.enemyHp -= 15;
  }

  checkDeadMonsters();
  updateBattleUI();

  setTimeout(() => {
    executeSingleMonsterAttack(boardIdx, () => {
      scheduleAutoTurn();
    });
  }, 200);
}

function scheduleAutoTurn() {
  clearTimeout(battleState.autoTurnTimer);
  battleState.autoTurnTimer = setTimeout(() => {
    if (!battleState.isPlayerTurn || battleState.isAnimating) return;
    if (checkBattleOver()) return;

    const canPlayCard = battleState.playerBoard.length < 3 && battleState.playerHand.some(c => c.cost <= battleState.playerMana);
    if (!canPlayCard) {
      startEnemyTurnSequence();
    }
  }, 1000);
}

function executeSingleMonsterAttack(attackerIdx, onComplete) {
  if (attackerIdx >= battleState.playerBoard.length) {
    if (onComplete) onComplete();
    return;
  }

  const attacker = battleState.playerBoard[attackerIdx];
  battleState.isAnimating = true;

  const attackerEl = document.getElementById(`p-monster-${attackerIdx}`);
  if (attackerEl) attackerEl.classList.add('anim-dash-up');

  setTimeout(() => {
    const tauntIndex = battleState.enemyBoard.findIndex(m => m.id === 9);
    const targetMonsterIdx = tauntIndex !== -1 ? tauntIndex : (battleState.enemyBoard.length > 0 ? 0 : -1);

    if (targetMonsterIdx !== -1) {
      const defender = battleState.enemyBoard[targetMonsterIdx];
      const mult = getElementMultiplier(attacker.element, defender.element);
      const isCrit = mult > 1.0;
      const dmg = Math.round(attacker.currentAtk * mult);

      defender.currentHp -= dmg;
      attacker.currentHp -= Math.round(defender.currentAtk * 0.4);

      const defEl = document.getElementById(`e-monster-${targetMonsterIdx}`);
      if (defEl) defEl.classList.add('anim-shake');
      showFloatingDamage(defEl, dmg, isCrit);
      setTimeout(() => defEl && defEl.classList.remove('anim-shake'), 400);

      if (attacker.id === 8 && defender.currentHp < 0) {
        battleState.enemyHp += defender.currentHp;
      }
    } else {
      const dmg = attacker.currentAtk;
      battleState.enemyHp -= dmg;
      const bossEl = document.getElementById('enemy-hero-box');
      if (bossEl) bossEl.classList.add('anim-shake');
      showFloatingDamage(bossEl, dmg, false);
      setTimeout(() => bossEl && bossEl.classList.remove('anim-shake'), 400);
    }

    setTimeout(() => {
      if (attackerEl) attackerEl.classList.remove('anim-dash-up');
      battleState.isAnimating = false;
      checkDeadMonsters();
      updateBattleUI();
      if (onComplete) onComplete();
    }, 150);
  }, 200);
}

function getElementMultiplier(attEl, defEl) {
  if (attEl === 'fire' && defEl === 'grass') return 1.35;
  if (attEl === 'grass' && defEl === 'water') return 1.35;
  if (attEl === 'water' && defEl === 'fire') return 1.35;
  if (attEl === 'light') return 1.25;
  return 1.0;
}

function startEnemyTurnSequence() {
  battleState.isPlayerTurn = false;
  updateBattleUI();
  announce("敵方回合");

  setTimeout(() => {
    if (battleState.enemyBoard.length < 3 && battleState.enemyHand.length > 0) {
      const card = battleState.enemyHand.pop();
      battleState.enemyBoard.push({
        ...card,
        uid: nextUid++,
        currentAtk: card.atk,
        currentHp: card.hp
      });
      updateBattleUI();
    }

    setTimeout(() => executeEnemyAttacksSequentially(0), 700);
  }, 800);
}

function executeEnemyAttacksSequentially(index) {
  if (index >= battleState.enemyBoard.length) {
    finishEnemyTurn();
    return;
  }

  const attacker = battleState.enemyBoard[index];
  const attackerEl = document.getElementById(`e-monster-${index}`);
  if (attackerEl) attackerEl.classList.add('anim-dash-down');

  setTimeout(() => {
    if (battleState.playerBoard.length > 0) {
      const defender = battleState.playerBoard[0];
      defender.currentHp -= attacker.currentAtk;
      attacker.currentHp -= Math.round(defender.currentAtk * 0.4);

      const defEl = document.getElementById('p-monster-0');
      if (defEl) defEl.classList.add('anim-shake');
      showFloatingDamage(defEl, attacker.currentAtk, false);
      setTimeout(() => defEl && defEl.classList.remove('anim-shake'), 400);
    } else {
      battleState.playerHp -= attacker.currentAtk;
      const pHero = document.getElementById('player-hp-bar');
      showFloatingDamage(pHero, attacker.currentAtk, false);
    }

    setTimeout(() => {
      if (attackerEl) attackerEl.classList.remove('anim-dash-down');
      checkDeadMonsters();
      updateBattleUI();

      if (checkBattleOver()) return;
      setTimeout(() => executeEnemyAttacksSequentially(index + 1), 500);
    }, 250);
  }, 200);
}

function finishEnemyTurn() {
  checkDeadMonsters();
  if (checkBattleOver()) return;

  battleState.turn++;
  battleState.playerMaxMana = Math.min(8, battleState.playerMaxMana + 1);
  battleState.playerMana = battleState.playerMaxMana;

  battleState.playerBoard.forEach(m => {
    if (m.id === 1) m.currentHp = Math.min(m.hp, m.currentHp + 8);
    if (m.id === 101) {
      battleState.playerBoard.forEach(f => f.currentHp = Math.min(f.hp, f.currentHp + 10));
    }
  });

  const holyDeer = battleState.playerBoard.find(m => m.id === 11 || m.id === 111);
  if (holyDeer) battleState.playerHp = Math.min(battleState.playerMaxHp, battleState.playerHp + 20);

  if (battleState.playerDeck.length > 0) battleState.playerHand.push(battleState.playerDeck.pop());
  if (battleState.enemyDeck.length > 0) battleState.enemyHand.push(battleState.enemyDeck.pop());

  battleState.isPlayerTurn = true;
  announce("你的回合");
  updateBattleUI();

  setTimeout(() => {
    if (battleState.playerBoard.length > 0) {
      executeBoardTurnStartAttacks(0);
    } else {
      scheduleAutoTurn();
    }
  }, 600);
}

function executeBoardTurnStartAttacks(idx) {
  if (idx >= battleState.playerBoard.length) {
    checkDeadMonsters();
    updateBattleUI();
    if (!checkBattleOver()) {
      scheduleAutoTurn();
    }
    return;
  }
  executeSingleMonsterAttack(idx, () => {
    executeBoardTurnStartAttacks(idx + 1);
  });
}

function checkDeadMonsters() {
  battleState.playerBoard = battleState.playerBoard.filter(m => m.currentHp > 0);
  battleState.enemyBoard = battleState.enemyBoard.filter(m => m.currentHp > 0);
}

function checkBattleOver() {
  if (battleState.enemyHp <= 0) {
    endBattle(true);
    return true;
  }
  if (battleState.playerHp <= 0) {
    endBattle(false);
    return true;
  }
  return false;
}

function endBattle(isVictory) {
  clearTimeout(battleState.autoTurnTimer);
  const modal = document.getElementById('modal-battle-result');
  const title = document.getElementById('battle-result-title');
  const desc = document.getElementById('battle-result-desc');
  const icon = document.getElementById('battle-result-icon');
  const rewards = document.getElementById('battle-rewards');

  modal.classList.remove('hidden');

  if (isVictory) {
    icon.innerHTML = `<i class="fa-solid fa-trophy text-amber-400"></i>`;
    title.innerText = "討伐大獲全勝！";
    title.className = "text-2xl font-black text-amber-400";
    desc.innerText = `成功擊潰首領 ${battleState.activeStage.bossName}！獲取戰利品：`;

    const goldEarned = battleState.activeStage.rewardGold;
    const expEarned = battleState.activeStage.rewardExp || 50;
    const stoneEarned = battleState.activeStage.dropStone;
    const materialKey = battleState.activeStage.dropMaterial;
    const matName = MATERIAL_DB[materialKey]?.name || "專屬靈石";

    player.gold += goldEarned;
    player.inventory.upgradeStone = (player.inventory.upgradeStone || 0) + stoneEarned;
    player.inventory[materialKey] = (player.inventory[materialKey] || 0) + 1;

    rewards.innerHTML = `
      <div class="text-sky-300"><i class="fa-solid fa-sparkles mr-1"></i>+${expEarned} EXP (召喚師經驗)</div>
      <div><i class="fa-solid fa-coins mr-1 text-amber-400"></i>+${goldEarned} 金幣</div>
      <div><i class="fa-solid fa-gem mr-1 text-sky-400"></i>+${stoneEarned} 幻獸強化石</div>
      <div><i class="fa-solid fa-scroll mr-1 text-emerald-400"></i>+1 ${matName}</div>
    `;

    if (battleState.activeStage.id > player.clearedStages) {
      player.clearedStages = battleState.activeStage.id;
    }

    addPlayerExp(expEarned);
  } else {
    icon.innerHTML = `<i class="fa-solid fa-skull text-rose-500"></i>`;
    title.innerText = "挑戰惜敗...";
    title.className = "text-2xl font-black text-rose-500";
    desc.innerText = "召喚師陣容被擊潰，強化牌組後再次挑戰！";
    rewards.innerHTML = `
      <div class="text-sky-300">+20 EXP (磨礪經驗)</div>
      <div>+50 撫恤金</div>
      <div>+1 強化石</div>
    `;
    player.gold += 50;
    player.inventory.upgradeStone = (player.inventory.upgradeStone || 0) + 1;
    addPlayerExp(20);
  }

  saveCurrentPlayerData();
}

function exitBattle() {
  clearTimeout(battleState.autoTurnTimer);
  document.getElementById('modal-battle-result').classList.add('hidden');
  document.getElementById('top-bar').classList.remove('hidden');
  document.getElementById('bottom-nav').classList.remove('hidden');
  switchTab('stages');
}

/* ================= 16. 牌組配置 ================= */
function renderDeckView() {
  player.deck = [...new Set(player.deck)];
  document.getElementById('deck-count').innerText = player.deck.length;

  const activeList = document.getElementById('deck-active-list');
  activeList.innerHTML = '';
  player.deck.forEach((id, idx) => {
    const monster = getMonsterStats(id);
    const el = document.createElement('div');
    el.className = "p-2.5 bg-slate-800 rounded-xl border border-indigo-500/50 flex items-center justify-between";
    el.innerHTML = `
      <div class="flex items-center gap-2 cursor-pointer" onclick="openUpgradeModal(${id})">
        <span class="text-xl text-amber-300"><i class="fa-solid ${monster.faIcon}"></i></span>
        <div>
          <div class="text-xs font-bold text-slate-100">${monster.name} <span class="text-[10px] text-amber-300">Lv.${monster.level}</span></div>
          <div class="text-[10px] text-rose-300"><i class="fa-solid fa-burst text-[8px]"></i> ${monster.atk} <i class="fa-solid fa-heart text-[8px] ml-1"></i> ${monster.hp}</div>
        </div>
      </div>
      <button onclick="removeCardFromDeck(${idx})" class="text-rose-400 hover:text-rose-300 text-sm px-2"><i class="fa-solid fa-trash-can"></i></button>
    `;
    activeList.appendChild(el);
  });

  const poolList = document.getElementById('deck-pool-list');
  poolList.innerHTML = '';
  player.collection.forEach(id => {
    const monster = getMonsterStats(id);
    const isEquipped = player.deck.includes(id);

    const el = document.createElement('div');
    el.className = `p-2.5 rounded-xl border text-center transition ${isEquipped ? 'bg-slate-900/40 border-slate-800 opacity-60' : 'bg-slate-900 border-slate-700 hover:border-amber-400'}`;
    el.innerHTML = `
      <div class="text-2xl text-amber-300"><i class="fa-solid ${monster.faIcon}"></i></div>
      <div class="text-xs font-bold text-white mt-1 truncate">${monster.name}</div>
      <div class="text-[10px] text-amber-300 font-bold">Lv.${monster.level}</div>
      <div class="text-[10px] text-slate-400"><i class="fa-solid fa-burst text-[8px]"></i> ${monster.atk} <i class="fa-solid fa-heart text-[8px] ml-1"></i> ${monster.hp}</div>
      <div class="flex gap-1 justify-center mt-2">
        <button onclick="openUpgradeModal(${id})" class="px-2 py-0.5 rounded bg-indigo-700 hover:bg-indigo-600 text-[10px] font-bold text-white">養成</button>
        ${!isEquipped ? `<button onclick="addCardToDeck(${id})" class="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-[10px] font-bold text-white">+出征</button>` : ''}
      </div>
    `;
    poolList.appendChild(el);
  });
}

function addCardToDeck(id) {
  if (player.deck.includes(id)) { alert("這隻怪獸已在陣容中！"); return; }
  if (player.deck.length >= 6) { alert("出征陣容上限為 6 隻幻獸！"); return; }
  player.deck.push(id);
  saveCurrentPlayerData();
  renderDeckView();
}

function removeCardFromDeck(idx) {
  if (player.deck.length <= 3) { alert("陣容至少需保留 3 隻幻獸！"); return; }
  player.deck.splice(idx, 1);
  saveCurrentPlayerData();
  renderDeckView();
}

function autoFillDeck() {
  const sorted = [...player.collection].map(id => getMonsterStats(id)).sort((a,b) => b.atk - a.atk);
  player.deck = [];
  for (let i = 0; i < Math.min(6, sorted.length); i++) {
    player.deck.push(sorted[i].id);
  }
  saveCurrentPlayerData();
  renderDeckView();
}

/* ================= 17. 召喚祭壇與圖鑑 (包含嚴格重複補償) ================= */
function drawGacha(times) {
  const cost = times === 1 ? 100 : 900;
  if (player.gold < cost) { alert("金幣不足！快去戰役關卡獲取賞金！"); return; }

  player.gold -= cost;
  const pulledCards = [];

  for (let i = 0; i < times; i++) {
    const isGuaranteed = (times === 10 && i === 9);
    pulledCards.push(getRandomMonster(isGuaranteed));
  }

  let extraGold = 0;
  let extraStones = 0;
  const processedResults = [];
  const ownedSet = new Set(player.collection);

  pulledCards.forEach(c => {
    if (!ownedSet.has(c.id)) {
      player.collection.push(c.id);
      player.cardLevels[c.id] = 1;
      ownedSet.add(c.id);
      processedResults.push({ card: c, isDuplicate: false });
    } else {
      extraGold += 50;
      extraStones += 2;
      processedResults.push({ card: c, isDuplicate: true });
    }
  });

  player.gold += extraGold;
  player.inventory.upgradeStone = (player.inventory.upgradeStone || 0) + extraStones;

  saveCurrentPlayerData();
  showGachaModal(processedResults, extraGold, extraStones);
}

function getRandomMonster(guaranteeR) {
  const rand = Math.random() * 100;
  let targetRarity = "N";

  if (guaranteeR) {
    if (rand < 10) targetRarity = "SSR";
    else if (rand < 40) targetRarity = "SR";
    else targetRarity = "R";
  } else {
    if (rand < 5) targetRarity = "SSR";
    else if (rand < 20) targetRarity = "SR";
    else if (rand < 55) targetRarity = "R";
    else targetRarity = "N";
  }

  const pool = MONSTER_DB.filter(m => m.id <= 17 && m.rarity === targetRarity);
  return pool[Math.floor(Math.random() * pool.length)];
}

function showGachaModal(results, extraGold, extraStones) {
  const modal = document.getElementById('modal-gacha-result');
  const container = document.getElementById('gacha-cards-container');
  container.innerHTML = '';

  results.forEach(res => {
    const card = res.card;
    const item = document.createElement('div');
    const glow = card.rarity === 'SSR' ? 'glow-ssr' : card.rarity === 'SR' ? 'glow-sr' : 'glow-r';
    item.className = `p-3 rounded-xl bg-slate-800 border-2 ${glow} flex flex-col items-center justify-between text-center relative`;
    
    item.innerHTML = `
      <div class="flex justify-between items-center w-full">
        <span class="text-xs font-bold text-amber-300">${card.rarity}</span>
        ${res.isDuplicate ? '<span class="text-[9px] px-1.5 py-0.2 bg-amber-950 text-amber-300 border border-amber-600/60 rounded font-bold">已擁有</span>' : '<span class="text-[9px] px-1.5 py-0.2 bg-emerald-950 text-emerald-300 border border-emerald-600/60 rounded font-bold">NEW</span>'}
      </div>
      <div class="text-3xl my-2 text-amber-400"><i class="fa-solid ${card.faIcon}"></i></div>
      <div class="text-xs font-black text-white truncate w-full">${card.name}</div>
      <div class="text-[10px] text-rose-300 font-bold mt-1">ATK ${card.baseAtk} ｜ HP ${card.baseHp}</div>
      ${res.isDuplicate ? '<div class="text-[9px] text-amber-400 font-bold mt-1 pt-1 border-t border-slate-700/60 w-full">+50🪙 +2💎</div>' : ''}
    `;
    container.appendChild(item);
  });

  const banner = document.getElementById('gacha-compensation-banner');
  const bannerText = document.getElementById('gacha-compensation-text');
  if (extraGold > 0 || extraStones > 0) {
    bannerText.innerHTML = `<i class="fa-solid fa-gift mr-1 text-amber-400"></i>獲得重複幻獸轉換補償：金幣 +${extraGold} 🪙 ｜ 幻獸強化石 +${extraStones} 💎`;
    banner.classList.remove('hidden');
  } else {
    banner.classList.add('hidden');
  }

  modal.classList.remove('hidden');
}

function closeGachaModal() { document.getElementById('modal-gacha-result').classList.add('hidden'); }

function renderCodex() {
  const container = document.getElementById('codex-grid');
  container.innerHTML = '';
  let unlockedCount = 0;

  MONSTER_DB.forEach(monster => {
    const isUnlocked = player.collection.includes(monster.id);
    if (isUnlocked) unlockedCount++;

    const card = document.createElement('div');
    const isEvo = monster.id > 100;
    card.className = `p-3 rounded-xl border flex flex-col items-center text-center transition ${isUnlocked ? 'bg-slate-900 border-slate-700 hover:border-amber-400' : 'bg-slate-950/60 border-slate-900 opacity-40'}`;

    card.innerHTML = `
      <div class="text-xs font-bold ${isUnlocked ? 'text-amber-400' : 'text-slate-600'}">
        ${isEvo ? '究極神話' : 'No.' + String(monster.id).padStart(3, '0')}
      </div>
      <div class="text-4xl my-3 text-amber-300 ${isUnlocked ? '' : 'filter brightness-0'}"><i class="fa-solid ${monster.faIcon}"></i></div>
      <div class="font-bold text-sm text-slate-100">${isUnlocked ? monster.name : '???'}</div>
      <div class="text-[10px] text-slate-400 mt-1">${isUnlocked ? monster.desc : '尚未發現此幻獸'}</div>
      ${isUnlocked ? `<div class="mt-2 text-xs font-black text-rose-400">ATK ${monster.baseAtk} ｜ HP ${monster.baseHp}</div>` : ''}
    `;
    container.appendChild(card);
  });

  document.getElementById('codex-progress').innerText = `${unlockedCount}/${MONSTER_DB.length}`;
}

/* ================= 18. 全域掛載保證 onclick 100% 能找到函式 ================= */
window.handleAuth = handleAuth;
window.handleLogout = handleLogout;
window.switchTab = switchTab;
window.toggleDropdownMenu = toggleDropdownMenu;
window.closeDropdownMenu = closeDropdownMenu;
window.openProfileModal = openProfileModal;
window.closeProfileModal = closeProfileModal;
window.saveProfileName = saveProfileName;
window.copyMyId = copyMyId;
window.openFriendsModal = openFriendsModal;
window.closeFriendsModal = closeFriendsModal;
window.sendFriendRequest = sendFriendRequest;
window.acceptFriendRequest = acceptFriendRequest;
window.rejectFriendRequest = rejectFriendRequest;
window.sendFriendGift = sendFriendGift;
window.deleteFriend = deleteFriend;
window.openInventoryModal = openInventoryModal;
window.closeInventoryModal = closeInventoryModal;
window.openItemDetail = openItemDetail;
window.closeItemDetailModal = closeItemDetailModal;
window.openAchievementsModal = openAchievementsModal;
window.closeAchievementsModal = closeAchievementsModal;
window.switchAchievementTab = switchAchievementTab;
window.claimAchievement = claimAchievement;
window.openGuideModal = openGuideModal;
window.closeGuideModal = closeGuideModal;
window.nextTutorialStep = nextTutorialStep;
window.openUpgradeModal = openUpgradeModal;
window.closeUpgradeModal = closeUpgradeModal;
window.executeUpgradeCard = executeUpgradeCard;
window.executeEvolveCard = executeEvolveCard;
window.startBattle = startBattle;
window.retreatFromBattle = retreatFromBattle;
window.playCard = playCard;
window.exitBattle = exitBattle;
window.addCardToDeck = addCardToDeck;
window.removeCardFromDeck = removeCardFromDeck;
window.autoFillDeck = autoFillDeck;
window.drawGacha = drawGacha;
window.closeGachaModal = closeGachaModal;
window.closeLevelUpModal = closeLevelUpModal;
