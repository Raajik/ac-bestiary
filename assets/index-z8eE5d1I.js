(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function Df(e){const t=new DataView(e),n=t.getUint32(0,!0),i=new Map;let s=4;for(let a=0;a<n;a++){const r=t.getUint32(s,!0),o=t.getUint32(s+4,!0);s+=8,i.set(r,new Uint8Array(e,s,o)),s+=o}return i}const yf=new Map([[8364,128],[8218,130],[402,131],[8222,132],[8230,133],[8224,134],[8225,135],[710,136],[8240,137],[352,138],[8249,139],[338,140],[381,142],[8216,145],[8217,146],[8220,147],[8221,148],[8226,149],[8211,150],[8212,151],[732,152],[8482,153],[353,154],[8250,155],[339,156],[382,158],[376,159]]),Uf=(()=>{const e=new Array(32);for(let t=0;t<32;t++)e[t]=-1;for(const[t,n]of yf)n>=128&&n<=159&&(e[n-128]=t);return e})();function br(e){let t="";for(let n=0;n<e.length;n++){const i=e[n];if(i<128||i>=160)t+=String.fromCharCode(i);else{const s=Uf[i-128];t+=s>=0?String.fromCharCode(s):"�"}}return t}var ke=(e=>(e[e.Undef=0]="Undef",e[e.ItemType=1]="ItemType",e[e.CreatureType=2]="CreatureType",e[e.PaletteTemplate=3]="PaletteTemplate",e[e.ClothingPriority=4]="ClothingPriority",e[e.EncumbranceVal=5]="EncumbranceVal",e[e.ItemsCapacity=6]="ItemsCapacity",e[e.ContainersCapacity=7]="ContainersCapacity",e[e.Mass=8]="Mass",e[e.ValidLocations=9]="ValidLocations",e[e.CurrentWieldedLocation=10]="CurrentWieldedLocation",e[e.MaxStackSize=11]="MaxStackSize",e[e.StackSize=12]="StackSize",e[e.StackUnitEncumbrance=13]="StackUnitEncumbrance",e[e.StackUnitMass=14]="StackUnitMass",e[e.StackUnitValue=15]="StackUnitValue",e[e.ItemUseable=16]="ItemUseable",e[e.RareId=17]="RareId",e[e.UiEffects=18]="UiEffects",e[e.Value=19]="Value",e[e.CoinValue=20]="CoinValue",e[e.TotalExperience=21]="TotalExperience",e[e.AvailableCharacter=22]="AvailableCharacter",e[e.TotalSkillCredits=23]="TotalSkillCredits",e[e.AvailableSkillCredits=24]="AvailableSkillCredits",e[e.Level=25]="Level",e[e.AccountRequirements=26]="AccountRequirements",e[e.ArmorType=27]="ArmorType",e[e.ArmorLevel=28]="ArmorLevel",e[e.AllegianceCpPool=29]="AllegianceCpPool",e[e.AllegianceRank=30]="AllegianceRank",e[e.ChannelsAllowed=31]="ChannelsAllowed",e[e.ChannelsActive=32]="ChannelsActive",e[e.Bonded=33]="Bonded",e[e.MonarchsRank=34]="MonarchsRank",e[e.AllegianceFollowers=35]="AllegianceFollowers",e[e.ResistMagic=36]="ResistMagic",e[e.ResistItemAppraisal=37]="ResistItemAppraisal",e[e.ResistLockpick=38]="ResistLockpick",e[e.DeprecatedResistRepair=39]="DeprecatedResistRepair",e[e.CombatMode=40]="CombatMode",e[e.CurrentAttackHeight=41]="CurrentAttackHeight",e[e.CombatCollisions=42]="CombatCollisions",e[e.NumDeaths=43]="NumDeaths",e[e.Damage=44]="Damage",e[e.DamageType=45]="DamageType",e[e.DefaultCombatStyle=46]="DefaultCombatStyle",e[e.AttackType=47]="AttackType",e[e.WeaponSkill=48]="WeaponSkill",e[e.WeaponTime=49]="WeaponTime",e[e.AmmoType=50]="AmmoType",e[e.CombatUse=51]="CombatUse",e[e.ParentLocation=52]="ParentLocation",e[e.PlacementPosition=53]="PlacementPosition",e[e.WeaponEncumbrance=54]="WeaponEncumbrance",e[e.WeaponMass=55]="WeaponMass",e[e.ShieldValue=56]="ShieldValue",e[e.ShieldEncumbrance=57]="ShieldEncumbrance",e[e.MissileInventoryLocation=58]="MissileInventoryLocation",e[e.FullDamageType=59]="FullDamageType",e[e.WeaponRange=60]="WeaponRange",e[e.AttackersSkill=61]="AttackersSkill",e[e.DefendersSkill=62]="DefendersSkill",e[e.AttackersSkillValue=63]="AttackersSkillValue",e[e.AttackersClass=64]="AttackersClass",e[e.Placement=65]="Placement",e[e.CheckpointStatus=66]="CheckpointStatus",e[e.Tolerance=67]="Tolerance",e[e.TargetingTactic=68]="TargetingTactic",e[e.CombatTactic=69]="CombatTactic",e[e.HomesickTargetingTactic=70]="HomesickTargetingTactic",e[e.NumFollowFailures=71]="NumFollowFailures",e[e.FriendType=72]="FriendType",e[e.FoeType=73]="FoeType",e[e.MerchandiseItemTypes=74]="MerchandiseItemTypes",e[e.MerchandiseMinValue=75]="MerchandiseMinValue",e[e.MerchandiseMaxValue=76]="MerchandiseMaxValue",e[e.NumItemsSold=77]="NumItemsSold",e[e.NumItemsBought=78]="NumItemsBought",e[e.MoneyIncome=79]="MoneyIncome",e[e.MoneyOutflow=80]="MoneyOutflow",e[e.MaxGeneratedObjects=81]="MaxGeneratedObjects",e[e.InitGeneratedObjects=82]="InitGeneratedObjects",e[e.ActivationResponse=83]="ActivationResponse",e[e.OriginalValue=84]="OriginalValue",e[e.NumMoveFailures=85]="NumMoveFailures",e[e.MinLevel=86]="MinLevel",e[e.MaxLevel=87]="MaxLevel",e[e.LockpickMod=88]="LockpickMod",e[e.BoosterEnum=89]="BoosterEnum",e[e.BoostValue=90]="BoostValue",e[e.MaxStructure=91]="MaxStructure",e[e.Structure=92]="Structure",e[e.PhysicsState=93]="PhysicsState",e[e.TargetType=94]="TargetType",e[e.RadarBlipColor=95]="RadarBlipColor",e[e.EncumbranceCapacity=96]="EncumbranceCapacity",e[e.LoginTimestamp=97]="LoginTimestamp",e[e.CreationTimestamp=98]="CreationTimestamp",e[e.PkLevelModifier=99]="PkLevelModifier",e[e.GeneratorType=100]="GeneratorType",e[e.AiAllowedCombatStyle=101]="AiAllowedCombatStyle",e[e.LogoffTimestamp=102]="LogoffTimestamp",e[e.GeneratorDestructionType=103]="GeneratorDestructionType",e[e.ActivationCreateClass=104]="ActivationCreateClass",e[e.ItemWorkmanship=105]="ItemWorkmanship",e[e.ItemSpellcraft=106]="ItemSpellcraft",e[e.ItemCurMana=107]="ItemCurMana",e[e.ItemMaxMana=108]="ItemMaxMana",e[e.ItemDifficulty=109]="ItemDifficulty",e[e.ItemAllegianceRankLimit=110]="ItemAllegianceRankLimit",e[e.PortalBitmask=111]="PortalBitmask",e[e.AdvocateLevel=112]="AdvocateLevel",e[e.Gender=113]="Gender",e[e.Attuned=114]="Attuned",e[e.ItemSkillLevelLimit=115]="ItemSkillLevelLimit",e[e.GateLogic=116]="GateLogic",e[e.ItemManaCost=117]="ItemManaCost",e[e.Logoff=118]="Logoff",e[e.Active=119]="Active",e[e.AttackHeight=120]="AttackHeight",e[e.NumAttackFailures=121]="NumAttackFailures",e[e.AiCpThreshold=122]="AiCpThreshold",e[e.AiAdvancementStrategy=123]="AiAdvancementStrategy",e[e.Version=124]="Version",e[e.Age=125]="Age",e[e.VendorHappyMean=126]="VendorHappyMean",e[e.VendorHappyVariance=127]="VendorHappyVariance",e[e.CloakStatus=128]="CloakStatus",e[e.VitaeCpPool=129]="VitaeCpPool",e[e.NumServicesSold=130]="NumServicesSold",e[e.MaterialType=131]="MaterialType",e[e.NumAllegianceBreaks=132]="NumAllegianceBreaks",e[e.ShowableOnRadar=133]="ShowableOnRadar",e[e.PlayerKillerStatus=134]="PlayerKillerStatus",e[e.VendorHappyMaxItems=135]="VendorHappyMaxItems",e[e.ScorePageNum=136]="ScorePageNum",e[e.ScoreConfigNum=137]="ScoreConfigNum",e[e.ScoreNumScores=138]="ScoreNumScores",e[e.DeathLevel=139]="DeathLevel",e[e.AiOptions=140]="AiOptions",e[e.OpenToEveryone=141]="OpenToEveryone",e[e.GeneratorTimeType=142]="GeneratorTimeType",e[e.GeneratorStartTime=143]="GeneratorStartTime",e[e.GeneratorEndTime=144]="GeneratorEndTime",e[e.GeneratorEndDestructionType=145]="GeneratorEndDestructionType",e[e.XpOverride=146]="XpOverride",e[e.NumCrashAndTurns=147]="NumCrashAndTurns",e[e.ComponentWarningThreshold=148]="ComponentWarningThreshold",e[e.HouseStatus=149]="HouseStatus",e[e.HookPlacement=150]="HookPlacement",e[e.HookType=151]="HookType",e[e.HookItemType=152]="HookItemType",e[e.AiPpThreshold=153]="AiPpThreshold",e[e.GeneratorVersion=154]="GeneratorVersion",e[e.HouseType=155]="HouseType",e[e.PickupEmoteOffset=156]="PickupEmoteOffset",e[e.WeenieIteration=157]="WeenieIteration",e[e.WieldRequirements=158]="WieldRequirements",e[e.WieldSkillType=159]="WieldSkillType",e[e.WieldDifficulty=160]="WieldDifficulty",e[e.HouseMaxHooksUsable=161]="HouseMaxHooksUsable",e[e.HouseCurrentHooksUsable=162]="HouseCurrentHooksUsable",e[e.AllegianceMinLevel=163]="AllegianceMinLevel",e[e.AllegianceMaxLevel=164]="AllegianceMaxLevel",e[e.HouseRelinkHookCount=165]="HouseRelinkHookCount",e[e.SlayerCreatureType=166]="SlayerCreatureType",e[e.ConfirmationInProgress=167]="ConfirmationInProgress",e[e.ConfirmationTypeInProgress=168]="ConfirmationTypeInProgress",e[e.TsysMutationData=169]="TsysMutationData",e[e.NumItemsInMaterial=170]="NumItemsInMaterial",e[e.NumTimesTinkered=171]="NumTimesTinkered",e[e.AppraisalLongDescDecoration=172]="AppraisalLongDescDecoration",e[e.AppraisalLockpickSuccessPercent=173]="AppraisalLockpickSuccessPercent",e[e.AppraisalPages=174]="AppraisalPages",e[e.AppraisalMaxPages=175]="AppraisalMaxPages",e[e.AppraisalItemSkill=176]="AppraisalItemSkill",e[e.GemCount=177]="GemCount",e[e.GemType=178]="GemType",e[e.ImbuedEffect=179]="ImbuedEffect",e[e.AttackersRawSkillValue=180]="AttackersRawSkillValue",e[e.ChessRank=181]="ChessRank",e[e.ChessTotalGames=182]="ChessTotalGames",e[e.ChessGamesWon=183]="ChessGamesWon",e[e.ChessGamesLost=184]="ChessGamesLost",e[e.TypeOfAlteration=185]="TypeOfAlteration",e[e.SkillToBeAltered=186]="SkillToBeAltered",e[e.SkillAlterationCount=187]="SkillAlterationCount",e[e.HeritageGroup=188]="HeritageGroup",e[e.TransferFromAttribute=189]="TransferFromAttribute",e[e.TransferToAttribute=190]="TransferToAttribute",e[e.AttributeTransferCount=191]="AttributeTransferCount",e[e.FakeFishingSkill=192]="FakeFishingSkill",e[e.NumKeys=193]="NumKeys",e[e.DeathTimestamp=194]="DeathTimestamp",e[e.PkTimestamp=195]="PkTimestamp",e[e.VictimTimestamp=196]="VictimTimestamp",e[e.HookGroup=197]="HookGroup",e[e.AllegianceSwearTimestamp=198]="AllegianceSwearTimestamp",e[e.HousePurchaseTimestamp=199]="HousePurchaseTimestamp",e[e.RedirectableEquippedArmorCount=200]="RedirectableEquippedArmorCount",e[e.MeleeDefenseImbuedEffectTypeCache=201]="MeleeDefenseImbuedEffectTypeCache",e[e.MissileDefenseImbuedEffectTypeCache=202]="MissileDefenseImbuedEffectTypeCache",e[e.MagicDefenseImbuedEffectTypeCache=203]="MagicDefenseImbuedEffectTypeCache",e[e.ElementalDamageBonus=204]="ElementalDamageBonus",e[e.ImbueAttempts=205]="ImbueAttempts",e[e.ImbueSuccesses=206]="ImbueSuccesses",e[e.CreatureKills=207]="CreatureKills",e[e.PlayerKillsPk=208]="PlayerKillsPk",e[e.PlayerKillsPkl=209]="PlayerKillsPkl",e[e.RaresTierOne=210]="RaresTierOne",e[e.RaresTierTwo=211]="RaresTierTwo",e[e.RaresTierThree=212]="RaresTierThree",e[e.RaresTierFour=213]="RaresTierFour",e[e.RaresTierFive=214]="RaresTierFive",e[e.AugmentationStat=215]="AugmentationStat",e[e.AugmentationFamilyStat=216]="AugmentationFamilyStat",e[e.AugmentationInnateFamily=217]="AugmentationInnateFamily",e[e.AugmentationInnateStrength=218]="AugmentationInnateStrength",e[e.AugmentationInnateEndurance=219]="AugmentationInnateEndurance",e[e.AugmentationInnateCoordination=220]="AugmentationInnateCoordination",e[e.AugmentationInnateQuickness=221]="AugmentationInnateQuickness",e[e.AugmentationInnateFocus=222]="AugmentationInnateFocus",e[e.AugmentationInnateSelf=223]="AugmentationInnateSelf",e[e.AugmentationSpecializeSalvaging=224]="AugmentationSpecializeSalvaging",e[e.AugmentationSpecializeItemTinkering=225]="AugmentationSpecializeItemTinkering",e[e.AugmentationSpecializeArmorTinkering=226]="AugmentationSpecializeArmorTinkering",e[e.AugmentationSpecializeMagicItemTinkering=227]="AugmentationSpecializeMagicItemTinkering",e[e.AugmentationSpecializeWeaponTinkering=228]="AugmentationSpecializeWeaponTinkering",e[e.AugmentationExtraPackSlot=229]="AugmentationExtraPackSlot",e[e.AugmentationIncreasedCarryingCapacity=230]="AugmentationIncreasedCarryingCapacity",e[e.AugmentationLessDeathItemLoss=231]="AugmentationLessDeathItemLoss",e[e.AugmentationSpellsRemainPastDeath=232]="AugmentationSpellsRemainPastDeath",e[e.AugmentationCriticalDefense=233]="AugmentationCriticalDefense",e[e.AugmentationBonusXp=234]="AugmentationBonusXp",e[e.AugmentationBonusSalvage=235]="AugmentationBonusSalvage",e[e.AugmentationBonusImbueChance=236]="AugmentationBonusImbueChance",e[e.AugmentationFasterRegen=237]="AugmentationFasterRegen",e[e.AugmentationIncreasedSpellDuration=238]="AugmentationIncreasedSpellDuration",e[e.AugmentationResistanceFamily=239]="AugmentationResistanceFamily",e[e.AugmentationResistanceSlash=240]="AugmentationResistanceSlash",e[e.AugmentationResistancePierce=241]="AugmentationResistancePierce",e[e.AugmentationResistanceBlunt=242]="AugmentationResistanceBlunt",e[e.AugmentationResistanceAcid=243]="AugmentationResistanceAcid",e[e.AugmentationResistanceFire=244]="AugmentationResistanceFire",e[e.AugmentationResistanceFrost=245]="AugmentationResistanceFrost",e[e.AugmentationResistanceLightning=246]="AugmentationResistanceLightning",e[e.RaresTierOneLogin=247]="RaresTierOneLogin",e[e.RaresTierTwoLogin=248]="RaresTierTwoLogin",e[e.RaresTierThreeLogin=249]="RaresTierThreeLogin",e[e.RaresTierFourLogin=250]="RaresTierFourLogin",e[e.RaresTierFiveLogin=251]="RaresTierFiveLogin",e[e.RaresLoginTimestamp=252]="RaresLoginTimestamp",e[e.RaresTierSix=253]="RaresTierSix",e[e.RaresTierSeven=254]="RaresTierSeven",e[e.RaresTierSixLogin=255]="RaresTierSixLogin",e[e.RaresTierSevenLogin=256]="RaresTierSevenLogin",e[e.ItemAttributeLimit=257]="ItemAttributeLimit",e[e.ItemAttributeLevelLimit=258]="ItemAttributeLevelLimit",e[e.ItemAttribute2ndLimit=259]="ItemAttribute2ndLimit",e[e.ItemAttribute2ndLevelLimit=260]="ItemAttribute2ndLevelLimit",e[e.CharacterTitleId=261]="CharacterTitleId",e[e.NumCharacterTitles=262]="NumCharacterTitles",e[e.ResistanceModifierType=263]="ResistanceModifierType",e[e.FreeTinkersBitfield=264]="FreeTinkersBitfield",e[e.EquipmentSetId=265]="EquipmentSetId",e[e.PetClass=266]="PetClass",e[e.Lifespan=267]="Lifespan",e[e.RemainingLifespan=268]="RemainingLifespan",e[e.UseCreateQuantity=269]="UseCreateQuantity",e[e.WieldRequirements2=270]="WieldRequirements2",e[e.WieldSkillType2=271]="WieldSkillType2",e[e.WieldDifficulty2=272]="WieldDifficulty2",e[e.WieldRequirements3=273]="WieldRequirements3",e[e.WieldSkillType3=274]="WieldSkillType3",e[e.WieldDifficulty3=275]="WieldDifficulty3",e[e.WieldRequirements4=276]="WieldRequirements4",e[e.WieldSkillType4=277]="WieldSkillType4",e[e.WieldDifficulty4=278]="WieldDifficulty4",e[e.Unique=279]="Unique",e[e.SharedCooldown=280]="SharedCooldown",e[e.Faction1Bits=281]="Faction1Bits",e[e.Faction2Bits=282]="Faction2Bits",e[e.Faction3Bits=283]="Faction3Bits",e[e.Hatred1Bits=284]="Hatred1Bits",e[e.Hatred2Bits=285]="Hatred2Bits",e[e.Hatred3Bits=286]="Hatred3Bits",e[e.SocietyRankCelhan=287]="SocietyRankCelhan",e[e.SocietyRankEldweb=288]="SocietyRankEldweb",e[e.SocietyRankRadblo=289]="SocietyRankRadblo",e[e.HearLocalSignals=290]="HearLocalSignals",e[e.HearLocalSignalsRadius=291]="HearLocalSignalsRadius",e[e.Cleaving=292]="Cleaving",e[e.AugmentationSpecializeGearcraft=293]="AugmentationSpecializeGearcraft",e[e.AugmentationInfusedCreatureMagic=294]="AugmentationInfusedCreatureMagic",e[e.AugmentationInfusedItemMagic=295]="AugmentationInfusedItemMagic",e[e.AugmentationInfusedLifeMagic=296]="AugmentationInfusedLifeMagic",e[e.AugmentationInfusedWarMagic=297]="AugmentationInfusedWarMagic",e[e.AugmentationCriticalExpertise=298]="AugmentationCriticalExpertise",e[e.AugmentationCriticalPower=299]="AugmentationCriticalPower",e[e.AugmentationSkilledMelee=300]="AugmentationSkilledMelee",e[e.AugmentationSkilledMissile=301]="AugmentationSkilledMissile",e[e.AugmentationSkilledMagic=302]="AugmentationSkilledMagic",e[e.ImbuedEffect2=303]="ImbuedEffect2",e[e.ImbuedEffect3=304]="ImbuedEffect3",e[e.ImbuedEffect4=305]="ImbuedEffect4",e[e.ImbuedEffect5=306]="ImbuedEffect5",e[e.DamageRating=307]="DamageRating",e[e.DamageResistRating=308]="DamageResistRating",e[e.AugmentationDamageBonus=309]="AugmentationDamageBonus",e[e.AugmentationDamageReduction=310]="AugmentationDamageReduction",e[e.ImbueStackingBits=311]="ImbueStackingBits",e[e.HealOverTime=312]="HealOverTime",e[e.CritRating=313]="CritRating",e[e.CritDamageRating=314]="CritDamageRating",e[e.CritResistRating=315]="CritResistRating",e[e.CritDamageResistRating=316]="CritDamageResistRating",e[e.HealingResistRating=317]="HealingResistRating",e[e.DamageOverTime=318]="DamageOverTime",e[e.ItemMaxLevel=319]="ItemMaxLevel",e[e.ItemXpStyle=320]="ItemXpStyle",e[e.EquipmentSetExtra=321]="EquipmentSetExtra",e[e.AetheriaBitfield=322]="AetheriaBitfield",e[e.HealingBoostRating=323]="HealingBoostRating",e[e.HeritageSpecificArmor=324]="HeritageSpecificArmor",e[e.AlternateRacialSkills=325]="AlternateRacialSkills",e[e.AugmentationJackOfAllTrades=326]="AugmentationJackOfAllTrades",e[e.AugmentationResistanceNether=327]="AugmentationResistanceNether",e[e.AugmentationInfusedVoidMagic=328]="AugmentationInfusedVoidMagic",e[e.WeaknessRating=329]="WeaknessRating",e[e.NetherOverTime=330]="NetherOverTime",e[e.NetherResistRating=331]="NetherResistRating",e[e.LuminanceAward=332]="LuminanceAward",e[e.LumAugDamageRating=333]="LumAugDamageRating",e[e.LumAugDamageReductionRating=334]="LumAugDamageReductionRating",e[e.LumAugCritDamageRating=335]="LumAugCritDamageRating",e[e.LumAugCritReductionRating=336]="LumAugCritReductionRating",e[e.LumAugSurgeEffectRating=337]="LumAugSurgeEffectRating",e[e.LumAugSurgeChanceRating=338]="LumAugSurgeChanceRating",e[e.LumAugItemManaUsage=339]="LumAugItemManaUsage",e[e.LumAugItemManaGain=340]="LumAugItemManaGain",e[e.LumAugVitality=341]="LumAugVitality",e[e.LumAugHealingRating=342]="LumAugHealingRating",e[e.LumAugSkilledCraft=343]="LumAugSkilledCraft",e[e.LumAugSkilledSpec=344]="LumAugSkilledSpec",e[e.LumAugNoDestroyCraft=345]="LumAugNoDestroyCraft",e[e.RestrictInteraction=346]="RestrictInteraction",e[e.OlthoiLootTimestamp=347]="OlthoiLootTimestamp",e[e.OlthoiLootStep=348]="OlthoiLootStep",e[e.UseCreatesContractId=349]="UseCreatesContractId",e[e.DotResistRating=350]="DotResistRating",e[e.LifeResistRating=351]="LifeResistRating",e[e.CloakWeaveProc=352]="CloakWeaveProc",e[e.WeaponType=353]="WeaponType",e[e.MeleeMastery=354]="MeleeMastery",e[e.RangedMastery=355]="RangedMastery",e[e.SneakAttackRating=356]="SneakAttackRating",e[e.RecklessnessRating=357]="RecklessnessRating",e[e.DeceptionRating=358]="DeceptionRating",e[e.CombatPetRange=359]="CombatPetRange",e[e.WeaponAuraDamage=360]="WeaponAuraDamage",e[e.WeaponAuraSpeed=361]="WeaponAuraSpeed",e[e.SummoningMastery=362]="SummoningMastery",e[e.HeartbeatLifespan=363]="HeartbeatLifespan",e[e.UseLevelRequirement=364]="UseLevelRequirement",e[e.LumAugAllSkills=365]="LumAugAllSkills",e[e.UseRequiresSkill=366]="UseRequiresSkill",e[e.UseRequiresSkillLevel=367]="UseRequiresSkillLevel",e[e.UseRequiresSkillSpec=368]="UseRequiresSkillSpec",e[e.UseRequiresLevel=369]="UseRequiresLevel",e[e.GearDamage=370]="GearDamage",e[e.GearDamageResist=371]="GearDamageResist",e[e.GearCrit=372]="GearCrit",e[e.GearCritResist=373]="GearCritResist",e[e.GearCritDamage=374]="GearCritDamage",e[e.GearCritDamageResist=375]="GearCritDamageResist",e[e.GearHealingBoost=376]="GearHealingBoost",e[e.GearNetherResist=377]="GearNetherResist",e[e.GearLifeResist=378]="GearLifeResist",e[e.GearMaxHealth=379]="GearMaxHealth",e[e.Unknown380=380]="Unknown380",e[e.PKDamageRating=381]="PKDamageRating",e[e.PKDamageResistRating=382]="PKDamageResistRating",e[e.GearPKDamageRating=383]="GearPKDamageRating",e[e.GearPKDamageResistRating=384]="GearPKDamageResistRating",e[e.Unknown385=385]="Unknown385",e[e.Overpower=386]="Overpower",e[e.OverpowerResist=387]="OverpowerResist",e[e.GearOverpower=388]="GearOverpower",e[e.GearOverpowerResist=389]="GearOverpowerResist",e[e.Enlightenment=390]="Enlightenment",e[e.PCAPRecordedAutonomousMovement=8007]="PCAPRecordedAutonomousMovement",e[e.PCAPRecordedMaxVelocityEstimated=8030]="PCAPRecordedMaxVelocityEstimated",e[e.PCAPRecordedPlacement=8041]="PCAPRecordedPlacement",e[e.PCAPRecordedAppraisalPages=8042]="PCAPRecordedAppraisalPages",e[e.PCAPRecordedAppraisalMaxPages=8043]="PCAPRecordedAppraisalMaxPages",e[e.CurrentLoyaltyAtLastLogoff=9008]="CurrentLoyaltyAtLastLogoff",e[e.CurrentLeadershipAtLastLogoff=9009]="CurrentLeadershipAtLastLogoff",e[e.AllegianceOfficerRank=9010]="AllegianceOfficerRank",e[e.HouseRentTimestamp=9011]="HouseRentTimestamp",e[e.Hairstyle=9012]="Hairstyle",e[e.VisualClothingPriority=9013]="VisualClothingPriority",e[e.SquelchGlobal=9014]="SquelchGlobal",e[e.InventoryOrder=9015]="InventoryOrder",e))(ke||{}),zu=(e=>(e[e.Undef=0]="Undef",e[e.Stuck=1]="Stuck",e[e.Open=2]="Open",e[e.Locked=3]="Locked",e[e.RotProof=4]="RotProof",e[e.AllegianceUpdateRequest=5]="AllegianceUpdateRequest",e[e.AiUsesMana=6]="AiUsesMana",e[e.AiUseHumanMagicAnimations=7]="AiUseHumanMagicAnimations",e[e.AllowGive=8]="AllowGive",e[e.CurrentlyAttacking=9]="CurrentlyAttacking",e[e.AttackerAi=10]="AttackerAi",e[e.IgnoreCollisions=11]="IgnoreCollisions",e[e.ReportCollisions=12]="ReportCollisions",e[e.Ethereal=13]="Ethereal",e[e.GravityStatus=14]="GravityStatus",e[e.LightsStatus=15]="LightsStatus",e[e.ScriptedCollision=16]="ScriptedCollision",e[e.Inelastic=17]="Inelastic",e[e.Visibility=18]="Visibility",e[e.Attackable=19]="Attackable",e[e.SafeSpellComponents=20]="SafeSpellComponents",e[e.AdvocateState=21]="AdvocateState",e[e.Inscribable=22]="Inscribable",e[e.DestroyOnSell=23]="DestroyOnSell",e[e.UiHidden=24]="UiHidden",e[e.IgnoreHouseBarriers=25]="IgnoreHouseBarriers",e[e.HiddenAdmin=26]="HiddenAdmin",e[e.PkWounder=27]="PkWounder",e[e.PkKiller=28]="PkKiller",e[e.NoCorpse=29]="NoCorpse",e[e.UnderLifestoneProtection=30]="UnderLifestoneProtection",e[e.ItemManaUpdatePending=31]="ItemManaUpdatePending",e[e.GeneratorStatus=32]="GeneratorStatus",e[e.ResetMessagePending=33]="ResetMessagePending",e[e.DefaultOpen=34]="DefaultOpen",e[e.DefaultLocked=35]="DefaultLocked",e[e.DefaultOn=36]="DefaultOn",e[e.OpenForBusiness=37]="OpenForBusiness",e[e.IsFrozen=38]="IsFrozen",e[e.DealMagicalItems=39]="DealMagicalItems",e[e.LogoffImDead=40]="LogoffImDead",e[e.ReportCollisionsAsEnvironment=41]="ReportCollisionsAsEnvironment",e[e.AllowEdgeSlide=42]="AllowEdgeSlide",e[e.AdvocateQuest=43]="AdvocateQuest",e[e.IsAdmin=44]="IsAdmin",e[e.IsArch=45]="IsArch",e[e.IsSentinel=46]="IsSentinel",e[e.IsAdvocate=47]="IsAdvocate",e[e.CurrentlyPoweringUp=48]="CurrentlyPoweringUp",e[e.GeneratorEnteredWorld=49]="GeneratorEnteredWorld",e[e.NeverFailCasting=50]="NeverFailCasting",e[e.VendorService=51]="VendorService",e[e.AiImmobile=52]="AiImmobile",e[e.DamagedByCollisions=53]="DamagedByCollisions",e[e.IsDynamic=54]="IsDynamic",e[e.IsHot=55]="IsHot",e[e.IsAffecting=56]="IsAffecting",e[e.AffectsAis=57]="AffectsAis",e[e.SpellQueueActive=58]="SpellQueueActive",e[e.GeneratorDisabled=59]="GeneratorDisabled",e[e.IsAcceptingTells=60]="IsAcceptingTells",e[e.LoggingChannel=61]="LoggingChannel",e[e.OpensAnyLock=62]="OpensAnyLock",e[e.UnlimitedUse=63]="UnlimitedUse",e[e.GeneratedTreasureItem=64]="GeneratedTreasureItem",e[e.IgnoreMagicResist=65]="IgnoreMagicResist",e[e.IgnoreMagicArmor=66]="IgnoreMagicArmor",e[e.AiAllowTrade=67]="AiAllowTrade",e[e.SpellComponentsRequired=68]="SpellComponentsRequired",e[e.IsSellable=69]="IsSellable",e[e.IgnoreShieldsBySkill=70]="IgnoreShieldsBySkill",e[e.NoDraw=71]="NoDraw",e[e.ActivationUntargeted=72]="ActivationUntargeted",e[e.HouseHasGottenPriorityBootPos=73]="HouseHasGottenPriorityBootPos",e[e.GeneratorAutomaticDestruction=74]="GeneratorAutomaticDestruction",e[e.HouseHooksVisible=75]="HouseHooksVisible",e[e.HouseRequiresMonarch=76]="HouseRequiresMonarch",e[e.HouseHooksEnabled=77]="HouseHooksEnabled",e[e.HouseNotifiedHudOfHookCount=78]="HouseNotifiedHudOfHookCount",e[e.AiAcceptEverything=79]="AiAcceptEverything",e[e.IgnorePortalRestrictions=80]="IgnorePortalRestrictions",e[e.RequiresBackpackSlot=81]="RequiresBackpackSlot",e[e.DontTurnOrMoveWhenGiving=82]="DontTurnOrMoveWhenGiving",e[e.NpcLooksLikeObject=83]="NpcLooksLikeObject",e[e.IgnoreCloIcons=84]="IgnoreCloIcons",e[e.AppraisalHasAllowedWielder=85]="AppraisalHasAllowedWielder",e[e.ChestRegenOnClose=86]="ChestRegenOnClose",e[e.LogoffInMinigame=87]="LogoffInMinigame",e[e.PortalShowDestination=88]="PortalShowDestination",e[e.PortalIgnoresPkAttackTimer=89]="PortalIgnoresPkAttackTimer",e[e.NpcInteractsSilently=90]="NpcInteractsSilently",e[e.Retained=91]="Retained",e[e.IgnoreAuthor=92]="IgnoreAuthor",e[e.Limbo=93]="Limbo",e[e.AppraisalHasAllowedActivator=94]="AppraisalHasAllowedActivator",e[e.ExistedBeforeAllegianceXpChanges=95]="ExistedBeforeAllegianceXpChanges",e[e.IsDeaf=96]="IsDeaf",e[e.IsPsr=97]="IsPsr",e[e.Invincible=98]="Invincible",e[e.Ivoryable=99]="Ivoryable",e[e.Dyable=100]="Dyable",e[e.CanGenerateRare=101]="CanGenerateRare",e[e.CorpseGeneratedRare=102]="CorpseGeneratedRare",e[e.NonProjectileMagicImmune=103]="NonProjectileMagicImmune",e[e.ActdReceivedItems=104]="ActdReceivedItems",e[e.Unknown105=105]="Unknown105",e[e.FirstEnterWorldDone=106]="FirstEnterWorldDone",e[e.RecallsDisabled=107]="RecallsDisabled",e[e.RareUsesTimer=108]="RareUsesTimer",e[e.ActdPreorderReceivedItems=109]="ActdPreorderReceivedItems",e[e.Afk=110]="Afk",e[e.IsGagged=111]="IsGagged",e[e.ProcSpellSelfTargeted=112]="ProcSpellSelfTargeted",e[e.IsAllegianceGagged=113]="IsAllegianceGagged",e[e.EquipmentSetTriggerPiece=114]="EquipmentSetTriggerPiece",e[e.Uninscribe=115]="Uninscribe",e[e.WieldOnUse=116]="WieldOnUse",e[e.ChestClearedWhenClosed=117]="ChestClearedWhenClosed",e[e.NeverAttack=118]="NeverAttack",e[e.SuppressGenerateEffect=119]="SuppressGenerateEffect",e[e.TreasureCorpse=120]="TreasureCorpse",e[e.EquipmentSetAddLevel=121]="EquipmentSetAddLevel",e[e.BarberActive=122]="BarberActive",e[e.TopLayerPriority=123]="TopLayerPriority",e[e.NoHeldItemShown=124]="NoHeldItemShown",e[e.LoginAtLifestone=125]="LoginAtLifestone",e[e.OlthoiPk=126]="OlthoiPk",e[e.Account15Days=127]="Account15Days",e[e.HadNoVitae=128]="HadNoVitae",e[e.NoOlthoiTalk=129]="NoOlthoiTalk",e[e.AutowieldLeft=130]="AutowieldLeft",e[e.LinkedPortalOneSummon=9001]="LinkedPortalOneSummon",e[e.LinkedPortalTwoSummon=9002]="LinkedPortalTwoSummon",e[e.HouseEvicted=9003]="HouseEvicted",e[e.UntrainedSkills=9004]="UntrainedSkills",e[e.IsEnvoy=9005]="IsEnvoy",e[e.UnspecializedSkills=9006]="UnspecializedSkills",e[e.FreeSkillResetRenewed=9007]="FreeSkillResetRenewed",e[e.FreeAttributeResetRenewed=9008]="FreeAttributeResetRenewed",e[e.SkillTemplesTimerReset=9009]="SkillTemplesTimerReset",e[e.FreeMasteryResetRenewed=9010]="FreeMasteryResetRenewed",e))(zu||{}),ct=(e=>(e[e.Undef=0]="Undef",e[e.HeartbeatInterval=1]="HeartbeatInterval",e[e.HeartbeatTimestamp=2]="HeartbeatTimestamp",e[e.HealthRate=3]="HealthRate",e[e.StaminaRate=4]="StaminaRate",e[e.ManaRate=5]="ManaRate",e[e.HealthUponResurrection=6]="HealthUponResurrection",e[e.StaminaUponResurrection=7]="StaminaUponResurrection",e[e.ManaUponResurrection=8]="ManaUponResurrection",e[e.StartTime=9]="StartTime",e[e.StopTime=10]="StopTime",e[e.ResetInterval=11]="ResetInterval",e[e.Shade=12]="Shade",e[e.ArmorModVsSlash=13]="ArmorModVsSlash",e[e.ArmorModVsPierce=14]="ArmorModVsPierce",e[e.ArmorModVsBludgeon=15]="ArmorModVsBludgeon",e[e.ArmorModVsCold=16]="ArmorModVsCold",e[e.ArmorModVsFire=17]="ArmorModVsFire",e[e.ArmorModVsAcid=18]="ArmorModVsAcid",e[e.ArmorModVsElectric=19]="ArmorModVsElectric",e[e.CombatSpeed=20]="CombatSpeed",e[e.WeaponLength=21]="WeaponLength",e[e.DamageVariance=22]="DamageVariance",e[e.CurrentPowerMod=23]="CurrentPowerMod",e[e.AccuracyMod=24]="AccuracyMod",e[e.StrengthMod=25]="StrengthMod",e[e.MaximumVelocity=26]="MaximumVelocity",e[e.RotationSpeed=27]="RotationSpeed",e[e.MotionTimestamp=28]="MotionTimestamp",e[e.WeaponDefense=29]="WeaponDefense",e[e.WimpyLevel=30]="WimpyLevel",e[e.VisualAwarenessRange=31]="VisualAwarenessRange",e[e.AuralAwarenessRange=32]="AuralAwarenessRange",e[e.PerceptionLevel=33]="PerceptionLevel",e[e.PowerupTime=34]="PowerupTime",e[e.MaxChargeDistance=35]="MaxChargeDistance",e[e.ChargeSpeed=36]="ChargeSpeed",e[e.BuyPrice=37]="BuyPrice",e[e.SellPrice=38]="SellPrice",e[e.DefaultScale=39]="DefaultScale",e[e.LockpickMod=40]="LockpickMod",e[e.RegenerationInterval=41]="RegenerationInterval",e[e.RegenerationTimestamp=42]="RegenerationTimestamp",e[e.GeneratorRadius=43]="GeneratorRadius",e[e.TimeToRot=44]="TimeToRot",e[e.DeathTimestamp=45]="DeathTimestamp",e[e.PkTimestamp=46]="PkTimestamp",e[e.VictimTimestamp=47]="VictimTimestamp",e[e.LoginTimestamp=48]="LoginTimestamp",e[e.CreationTimestamp=49]="CreationTimestamp",e[e.MinimumTimeSincePk=50]="MinimumTimeSincePk",e[e.DeprecatedHousekeepingPriority=51]="DeprecatedHousekeepingPriority",e[e.AbuseLoggingTimestamp=52]="AbuseLoggingTimestamp",e[e.LastPortalTeleportTimestamp=53]="LastPortalTeleportTimestamp",e[e.UseRadius=54]="UseRadius",e[e.HomeRadius=55]="HomeRadius",e[e.ReleasedTimestamp=56]="ReleasedTimestamp",e[e.MinHomeRadius=57]="MinHomeRadius",e[e.Facing=58]="Facing",e[e.ResetTimestamp=59]="ResetTimestamp",e[e.LogoffTimestamp=60]="LogoffTimestamp",e[e.EconRecoveryInterval=61]="EconRecoveryInterval",e[e.WeaponOffense=62]="WeaponOffense",e[e.DamageMod=63]="DamageMod",e[e.ResistSlash=64]="ResistSlash",e[e.ResistPierce=65]="ResistPierce",e[e.ResistBludgeon=66]="ResistBludgeon",e[e.ResistFire=67]="ResistFire",e[e.ResistCold=68]="ResistCold",e[e.ResistAcid=69]="ResistAcid",e[e.ResistElectric=70]="ResistElectric",e[e.ResistHealthBoost=71]="ResistHealthBoost",e[e.ResistStaminaDrain=72]="ResistStaminaDrain",e[e.ResistStaminaBoost=73]="ResistStaminaBoost",e[e.ResistManaDrain=74]="ResistManaDrain",e[e.ResistManaBoost=75]="ResistManaBoost",e[e.Translucency=76]="Translucency",e[e.PhysicsScriptIntensity=77]="PhysicsScriptIntensity",e[e.Friction=78]="Friction",e[e.Elasticity=79]="Elasticity",e[e.AiUseMagicDelay=80]="AiUseMagicDelay",e[e.ItemMinSpellcraftMod=81]="ItemMinSpellcraftMod",e[e.ItemMaxSpellcraftMod=82]="ItemMaxSpellcraftMod",e[e.ItemRankProbability=83]="ItemRankProbability",e[e.Shade2=84]="Shade2",e[e.Shade3=85]="Shade3",e[e.Shade4=86]="Shade4",e[e.ItemEfficiency=87]="ItemEfficiency",e[e.ItemManaUpdateTimestamp=88]="ItemManaUpdateTimestamp",e[e.SpellGestureSpeedMod=89]="SpellGestureSpeedMod",e[e.SpellStanceSpeedMod=90]="SpellStanceSpeedMod",e[e.AllegianceAppraisalTimestamp=91]="AllegianceAppraisalTimestamp",e[e.PowerLevel=92]="PowerLevel",e[e.AccuracyLevel=93]="AccuracyLevel",e[e.AttackAngle=94]="AttackAngle",e[e.AttackTimestamp=95]="AttackTimestamp",e[e.CheckpointTimestamp=96]="CheckpointTimestamp",e[e.SoldTimestamp=97]="SoldTimestamp",e[e.UseTimestamp=98]="UseTimestamp",e[e.UseLockTimestamp=99]="UseLockTimestamp",e[e.HealkitMod=100]="HealkitMod",e[e.FrozenTimestamp=101]="FrozenTimestamp",e[e.HealthRateMod=102]="HealthRateMod",e[e.AllegianceSwearTimestamp=103]="AllegianceSwearTimestamp",e[e.ObviousRadarRange=104]="ObviousRadarRange",e[e.HotspotCycleTime=105]="HotspotCycleTime",e[e.HotspotCycleTimeVariance=106]="HotspotCycleTimeVariance",e[e.SpamTimestamp=107]="SpamTimestamp",e[e.SpamRate=108]="SpamRate",e[e.BondWieldedTreasure=109]="BondWieldedTreasure",e[e.BulkMod=110]="BulkMod",e[e.SizeMod=111]="SizeMod",e[e.GagTimestamp=112]="GagTimestamp",e[e.GeneratorUpdateTimestamp=113]="GeneratorUpdateTimestamp",e[e.DeathSpamTimestamp=114]="DeathSpamTimestamp",e[e.DeathSpamRate=115]="DeathSpamRate",e[e.WildAttackProbability=116]="WildAttackProbability",e[e.FocusedProbability=117]="FocusedProbability",e[e.CrashAndTurnProbability=118]="CrashAndTurnProbability",e[e.CrashAndTurnRadius=119]="CrashAndTurnRadius",e[e.CrashAndTurnBias=120]="CrashAndTurnBias",e[e.GeneratorInitialDelay=121]="GeneratorInitialDelay",e[e.AiAcquireHealth=122]="AiAcquireHealth",e[e.AiAcquireStamina=123]="AiAcquireStamina",e[e.AiAcquireMana=124]="AiAcquireMana",e[e.ResistHealthDrain=125]="ResistHealthDrain",e[e.LifestoneProtectionTimestamp=126]="LifestoneProtectionTimestamp",e[e.AiCounteractEnchantment=127]="AiCounteractEnchantment",e[e.AiDispelEnchantment=128]="AiDispelEnchantment",e[e.TradeTimestamp=129]="TradeTimestamp",e[e.AiTargetedDetectionRadius=130]="AiTargetedDetectionRadius",e[e.EmotePriority=131]="EmotePriority",e[e.LastTeleportStartTimestamp=132]="LastTeleportStartTimestamp",e[e.EventSpamTimestamp=133]="EventSpamTimestamp",e[e.EventSpamRate=134]="EventSpamRate",e[e.InventoryOffset=135]="InventoryOffset",e[e.CriticalMultiplier=136]="CriticalMultiplier",e[e.ManaStoneDestroyChance=137]="ManaStoneDestroyChance",e[e.SlayerDamageBonus=138]="SlayerDamageBonus",e[e.AllegianceInfoSpamTimestamp=139]="AllegianceInfoSpamTimestamp",e[e.AllegianceInfoSpamRate=140]="AllegianceInfoSpamRate",e[e.NextSpellcastTimestamp=141]="NextSpellcastTimestamp",e[e.AppraisalRequestedTimestamp=142]="AppraisalRequestedTimestamp",e[e.AppraisalHeartbeatDueTimestamp=143]="AppraisalHeartbeatDueTimestamp",e[e.ManaConversionMod=144]="ManaConversionMod",e[e.LastPkAttackTimestamp=145]="LastPkAttackTimestamp",e[e.FellowshipUpdateTimestamp=146]="FellowshipUpdateTimestamp",e[e.CriticalFrequency=147]="CriticalFrequency",e[e.LimboStartTimestamp=148]="LimboStartTimestamp",e[e.WeaponMissileDefense=149]="WeaponMissileDefense",e[e.WeaponMagicDefense=150]="WeaponMagicDefense",e[e.IgnoreShield=151]="IgnoreShield",e[e.ElementalDamageMod=152]="ElementalDamageMod",e[e.StartMissileAttackTimestamp=153]="StartMissileAttackTimestamp",e[e.LastRareUsedTimestamp=154]="LastRareUsedTimestamp",e[e.IgnoreArmor=155]="IgnoreArmor",e[e.ProcSpellRate=156]="ProcSpellRate",e[e.ResistanceModifier=157]="ResistanceModifier",e[e.AllegianceGagTimestamp=158]="AllegianceGagTimestamp",e[e.AbsorbMagicDamage=159]="AbsorbMagicDamage",e[e.CachedMaxAbsorbMagicDamage=160]="CachedMaxAbsorbMagicDamage",e[e.GagDuration=161]="GagDuration",e[e.AllegianceGagDuration=162]="AllegianceGagDuration",e[e.GlobalXpMod=163]="GlobalXpMod",e[e.HealingModifier=164]="HealingModifier",e[e.ArmorModVsNether=165]="ArmorModVsNether",e[e.ResistNether=166]="ResistNether",e[e.CooldownDuration=167]="CooldownDuration",e[e.WeaponAuraOffense=168]="WeaponAuraOffense",e[e.WeaponAuraDefense=169]="WeaponAuraDefense",e[e.WeaponAuraElemental=170]="WeaponAuraElemental",e[e.WeaponAuraManaConv=171]="WeaponAuraManaConv",e[e.PCAPRecordedWorkmanship=8004]="PCAPRecordedWorkmanship",e[e.PCAPRecordedVelocityX=8010]="PCAPRecordedVelocityX",e[e.PCAPRecordedVelocityY=8011]="PCAPRecordedVelocityY",e[e.PCAPRecordedVelocityZ=8012]="PCAPRecordedVelocityZ",e[e.PCAPRecordedAccelerationX=8013]="PCAPRecordedAccelerationX",e[e.PCAPRecordedAccelerationY=8014]="PCAPRecordedAccelerationY",e[e.PCAPRecordedAccelerationZ=8015]="PCAPRecordedAccelerationZ",e[e.PCAPRecordeOmegaX=8016]="PCAPRecordeOmegaX",e[e.PCAPRecordeOmegaY=8017]="PCAPRecordeOmegaY",e[e.PCAPRecordeOmegaZ=8018]="PCAPRecordeOmegaZ",e))(ct||{}),Wu=(e=>(e[e.Undef=0]="Undef",e[e.Name=1]="Name",e[e.Title=2]="Title",e[e.Sex=3]="Sex",e[e.HeritageGroup=4]="HeritageGroup",e[e.Template=5]="Template",e[e.AttackersName=6]="AttackersName",e[e.Inscription=7]="Inscription",e[e.ScribeName=8]="ScribeName",e[e.VendorsName=9]="VendorsName",e[e.Fellowship=10]="Fellowship",e[e.MonarchsName=11]="MonarchsName",e[e.LockCode=12]="LockCode",e[e.KeyCode=13]="KeyCode",e[e.Use=14]="Use",e[e.ShortDesc=15]="ShortDesc",e[e.LongDesc=16]="LongDesc",e[e.ActivationTalk=17]="ActivationTalk",e[e.UseMessage=18]="UseMessage",e[e.ItemHeritageGroupRestriction=19]="ItemHeritageGroupRestriction",e[e.PluralName=20]="PluralName",e[e.MonarchsTitle=21]="MonarchsTitle",e[e.ActivationFailure=22]="ActivationFailure",e[e.ScribeAccount=23]="ScribeAccount",e[e.TownName=24]="TownName",e[e.CraftsmanName=25]="CraftsmanName",e[e.UsePkServerError=26]="UsePkServerError",e[e.ScoreCachedText=27]="ScoreCachedText",e[e.ScoreDefaultEntryFormat=28]="ScoreDefaultEntryFormat",e[e.ScoreFirstEntryFormat=29]="ScoreFirstEntryFormat",e[e.ScoreLastEntryFormat=30]="ScoreLastEntryFormat",e[e.ScoreOnlyEntryFormat=31]="ScoreOnlyEntryFormat",e[e.ScoreNoEntry=32]="ScoreNoEntry",e[e.Quest=33]="Quest",e[e.GeneratorEvent=34]="GeneratorEvent",e[e.PatronsTitle=35]="PatronsTitle",e[e.HouseOwnerName=36]="HouseOwnerName",e[e.QuestRestriction=37]="QuestRestriction",e[e.AppraisalPortalDestination=38]="AppraisalPortalDestination",e[e.TinkerName=39]="TinkerName",e[e.ImbuerName=40]="ImbuerName",e[e.HouseOwnerAccount=41]="HouseOwnerAccount",e[e.DisplayName=42]="DisplayName",e[e.DateOfBirth=43]="DateOfBirth",e[e.ThirdPartyApi=44]="ThirdPartyApi",e[e.KillQuest=45]="KillQuest",e[e.Afk=46]="Afk",e[e.AllegianceName=47]="AllegianceName",e[e.AugmentationAddQuest=48]="AugmentationAddQuest",e[e.KillQuest2=49]="KillQuest2",e[e.KillQuest3=50]="KillQuest3",e[e.UseSendsSignal=51]="UseSendsSignal",e[e.GearPlatingName=52]="GearPlatingName",e[e.PCAPRecordedCurrentMotionState=8006]="PCAPRecordedCurrentMotionState",e[e.PCAPRecordedServerName=8031]="PCAPRecordedServerName",e[e.PCAPRecordedCharacterName=8032]="PCAPRecordedCharacterName",e[e.AllegianceMotd=9001]="AllegianceMotd",e[e.AllegianceMotdSetBy=9002]="AllegianceMotdSetBy",e[e.AllegianceSpeakerTitle=9003]="AllegianceSpeakerTitle",e[e.AllegianceSeneschalTitle=9004]="AllegianceSeneschalTitle",e[e.AllegianceCastellanTitle=9005]="AllegianceCastellanTitle",e[e.GodState=9006]="GodState",e[e.TinkerLog=9007]="TinkerLog",e))(Wu||{}),Xu=(e=>(e[e.Undef=0]="Undef",e[e.Setup=1]="Setup",e[e.MotionTable=2]="MotionTable",e[e.SoundTable=3]="SoundTable",e[e.CombatTable=4]="CombatTable",e[e.QualityFilter=5]="QualityFilter",e[e.PaletteBase=6]="PaletteBase",e[e.ClothingBase=7]="ClothingBase",e[e.Icon=8]="Icon",e[e.EyesTexture=9]="EyesTexture",e[e.NoseTexture=10]="NoseTexture",e[e.MouthTexture=11]="MouthTexture",e[e.DefaultEyesTexture=12]="DefaultEyesTexture",e[e.DefaultNoseTexture=13]="DefaultNoseTexture",e[e.DefaultMouthTexture=14]="DefaultMouthTexture",e[e.HairPalette=15]="HairPalette",e[e.EyesPalette=16]="EyesPalette",e[e.SkinPalette=17]="SkinPalette",e[e.HeadObject=18]="HeadObject",e[e.ActivationAnimation=19]="ActivationAnimation",e[e.InitMotion=20]="InitMotion",e[e.ActivationSound=21]="ActivationSound",e[e.PhysicsEffectTable=22]="PhysicsEffectTable",e[e.UseSound=23]="UseSound",e[e.UseTargetAnimation=24]="UseTargetAnimation",e[e.UseTargetSuccessAnimation=25]="UseTargetSuccessAnimation",e[e.UseTargetFailureAnimation=26]="UseTargetFailureAnimation",e[e.UseUserAnimation=27]="UseUserAnimation",e[e.Spell=28]="Spell",e[e.SpellComponent=29]="SpellComponent",e[e.PhysicsScript=30]="PhysicsScript",e[e.LinkedPortalOne=31]="LinkedPortalOne",e[e.WieldedTreasureType=32]="WieldedTreasureType",e[e.InventoryTreasureType=33]="InventoryTreasureType",e[e.ShopTreasureType=34]="ShopTreasureType",e[e.DeathTreasureType=35]="DeathTreasureType",e[e.MutateFilter=36]="MutateFilter",e[e.ItemSkillLimit=37]="ItemSkillLimit",e[e.UseCreateItem=38]="UseCreateItem",e[e.DeathSpell=39]="DeathSpell",e[e.VendorsClassId=40]="VendorsClassId",e[e.ItemSpecializedOnly=41]="ItemSpecializedOnly",e[e.HouseId=42]="HouseId",e[e.AccountHouseId=43]="AccountHouseId",e[e.RestrictionEffect=44]="RestrictionEffect",e[e.CreationMutationFilter=45]="CreationMutationFilter",e[e.TsysMutationFilter=46]="TsysMutationFilter",e[e.LastPortal=47]="LastPortal",e[e.LinkedPortalTwo=48]="LinkedPortalTwo",e[e.OriginalPortal=49]="OriginalPortal",e[e.IconOverlay=50]="IconOverlay",e[e.IconOverlaySecondary=51]="IconOverlaySecondary",e[e.IconUnderlay=52]="IconUnderlay",e[e.AugmentationMutationFilter=53]="AugmentationMutationFilter",e[e.AugmentationEffect=54]="AugmentationEffect",e[e.ProcSpell=55]="ProcSpell",e[e.AugmentationCreateItem=56]="AugmentationCreateItem",e[e.AlternateCurrency=57]="AlternateCurrency",e[e.BlueSurgeSpell=58]="BlueSurgeSpell",e[e.YellowSurgeSpell=59]="YellowSurgeSpell",e[e.RedSurgeSpell=60]="RedSurgeSpell",e[e.OlthoiDeathTreasureType=61]="OlthoiDeathTreasureType",e[e.PCAPRecordedWeenieHeader=8001]="PCAPRecordedWeenieHeader",e[e.PCAPRecordedWeenieHeader2=8002]="PCAPRecordedWeenieHeader2",e[e.PCAPRecordedObjectDesc=8003]="PCAPRecordedObjectDesc",e[e.PCAPRecordedPhysicsDesc=8005]="PCAPRecordedPhysicsDesc",e[e.PCAPRecordedParentLocation=8009]="PCAPRecordedParentLocation",e[e.PCAPRecordedDefaultScript=8019]="PCAPRecordedDefaultScript",e[e.PCAPRecordedTimestamp0=8020]="PCAPRecordedTimestamp0",e[e.PCAPRecordedTimestamp1=8021]="PCAPRecordedTimestamp1",e[e.PCAPRecordedTimestamp2=8022]="PCAPRecordedTimestamp2",e[e.PCAPRecordedTimestamp3=8023]="PCAPRecordedTimestamp3",e[e.PCAPRecordedTimestamp4=8024]="PCAPRecordedTimestamp4",e[e.PCAPRecordedTimestamp5=8025]="PCAPRecordedTimestamp5",e[e.PCAPRecordedTimestamp6=8026]="PCAPRecordedTimestamp6",e[e.PCAPRecordedTimestamp7=8027]="PCAPRecordedTimestamp7",e[e.PCAPRecordedTimestamp8=8028]="PCAPRecordedTimestamp8",e[e.PCAPRecordedTimestamp9=8029]="PCAPRecordedTimestamp9",e[e.PCAPRecordedMaxVelocityEstimated=8030]="PCAPRecordedMaxVelocityEstimated",e[e.PCAPPhysicsDIDDataTemplatedFrom=8044]="PCAPPhysicsDIDDataTemplatedFrom",e))(Xu||{}),At=(e=>(e[e.None=0]="None",e[e.HeadWear=1]="HeadWear",e[e.ChestWear=2]="ChestWear",e[e.AbdomenWear=4]="AbdomenWear",e[e.UpperArmWear=8]="UpperArmWear",e[e.LowerArmWear=16]="LowerArmWear",e[e.HandWear=32]="HandWear",e[e.UpperLegWear=64]="UpperLegWear",e[e.LowerLegWear=128]="LowerLegWear",e[e.FootWear=256]="FootWear",e[e.ChestArmor=512]="ChestArmor",e[e.AbdomenArmor=1024]="AbdomenArmor",e[e.UpperArmArmor=2048]="UpperArmArmor",e[e.LowerArmArmor=4096]="LowerArmArmor",e[e.UpperLegArmor=8192]="UpperLegArmor",e[e.LowerLegArmor=16384]="LowerLegArmor",e[e.NeckWear=32768]="NeckWear",e[e.WristWearLeft=65536]="WristWearLeft",e[e.WristWearRight=131072]="WristWearRight",e[e.FingerWearLeft=262144]="FingerWearLeft",e[e.FingerWearRight=524288]="FingerWearRight",e[e.MeleeWeapon=1048576]="MeleeWeapon",e[e.Shield=2097152]="Shield",e[e.MissileWeapon=4194304]="MissileWeapon",e[e.MissileAmmo=8388608]="MissileAmmo",e[e.Held=16777216]="Held",e[e.TwoHanded=33554432]="TwoHanded",e[e.TrinketOne=67108864]="TrinketOne",e[e.Cloak=134217728]="Cloak",e[e.SigilOne=268435456]="SigilOne",e[e.SigilTwo=536870912]="SigilTwo",e[e.SigilThree=1073741824]="SigilThree",e[e.Clothing=2147484159]="Clothing",e[e.All=2147483647]="All",e[e.CanGoInReadySlot=2147483647]="CanGoInReadySlot",e))(At||{}),Fn=(e=>(e[e.Undef=0]="Undef",e[e.Slash=1]="Slash",e[e.Pierce=2]="Pierce",e[e.Bludgeon=4]="Bludgeon",e[e.Cold=8]="Cold",e[e.Fire=16]="Fire",e[e.Acid=32]="Acid",e[e.Electric=64]="Electric",e[e.Health=128]="Health",e[e.Stamina=256]="Stamina",e[e.Mana=512]="Mana",e[e.Nether=1024]="Nether",e[e.Base=268435456]="Base",e))(Fn||{}),Oe=(e=>(e[e.None=0]="None",e[e.Axe=1]="Axe",e[e.Bow=2]="Bow",e[e.Crossbow=3]="Crossbow",e[e.Dagger=4]="Dagger",e[e.Mace=5]="Mace",e[e.MeleeDefense=6]="MeleeDefense",e[e.MissileDefense=7]="MissileDefense",e[e.Sling=8]="Sling",e[e.Spear=9]="Spear",e[e.Staff=10]="Staff",e[e.Sword=11]="Sword",e[e.ThrownWeapon=12]="ThrownWeapon",e[e.UnarmedCombat=13]="UnarmedCombat",e[e.ArcaneLore=14]="ArcaneLore",e[e.MagicDefense=15]="MagicDefense",e[e.ManaConversion=16]="ManaConversion",e[e.Spellcraft=17]="Spellcraft",e[e.ItemTinkering=18]="ItemTinkering",e[e.AssessPerson=19]="AssessPerson",e[e.Deception=20]="Deception",e[e.Healing=21]="Healing",e[e.Jump=22]="Jump",e[e.Lockpick=23]="Lockpick",e[e.Run=24]="Run",e[e.Awareness=25]="Awareness",e[e.ArmsAndArmorRepair=26]="ArmsAndArmorRepair",e[e.AssessCreature=27]="AssessCreature",e[e.WeaponTinkering=28]="WeaponTinkering",e[e.ArmorTinkering=29]="ArmorTinkering",e[e.MagicItemTinkering=30]="MagicItemTinkering",e[e.CreatureEnchantment=31]="CreatureEnchantment",e[e.ItemEnchantment=32]="ItemEnchantment",e[e.LifeMagic=33]="LifeMagic",e[e.WarMagic=34]="WarMagic",e[e.Leadership=35]="Leadership",e[e.Loyalty=36]="Loyalty",e[e.Fletching=37]="Fletching",e[e.Alchemy=38]="Alchemy",e[e.Cooking=39]="Cooking",e[e.Salvaging=40]="Salvaging",e[e.TwoHandedCombat=41]="TwoHandedCombat",e[e.Gearcraft=42]="Gearcraft",e[e.VoidMagic=43]="VoidMagic",e[e.HeavyWeapons=44]="HeavyWeapons",e[e.LightWeapons=45]="LightWeapons",e[e.FinesseWeapons=46]="FinesseWeapons",e[e.MissileWeapons=47]="MissileWeapons",e[e.Shield=48]="Shield",e[e.DualWield=49]="DualWield",e[e.Recklessness=50]="Recklessness",e[e.SneakAttack=51]="SneakAttack",e[e.DirtyFighting=52]="DirtyFighting",e[e.Challenge=53]="Challenge",e[e.Summoning=54]="Summoning",e))(Oe||{});const Nf=Object.freeze([1,4,5,9,10,11,13]),Of=Object.freeze([2,3,8,12]);Object.freeze([...Nf,...Of]);var $u=(e=>(e[e.Default=0]="Default",e[e.RightHandCombat=1]="RightHandCombat",e[e.RightHandNonCombat=2]="RightHandNonCombat",e[e.LeftHand=3]="LeftHand",e[e.Belt=4]="Belt",e[e.Quiver=5]="Quiver",e[e.Shield=6]="Shield",e[e.LeftWeapon=7]="LeftWeapon",e[e.LeftUnarmed=8]="LeftUnarmed",e[e.SpecialCrowssbowBolt=51]="SpecialCrowssbowBolt",e[e.MissileFlight=52]="MissileFlight",e[e.Resting=101]="Resting",e[e.Other=102]="Other",e[e.Hook=103]="Hook",e[e.Random1=121]="Random1",e[e.Random2=122]="Random2",e[e.Random3=123]="Random3",e[e.Random4=124]="Random4",e[e.Random5=125]="Random5",e[e.Random6=126]="Random6",e[e.Random7=127]="Random7",e[e.Random8=128]="Random8",e[e.Random9=129]="Random9",e[e.Random10=130]="Random10",e[e.XXXUnknownA=10]="XXXUnknownA",e[e.XXXUnknownF=15]="XXXUnknownF",e[e.XXXUnknown14=20]="XXXUnknown14",e[e.XXXUnknown1E=30]="XXXUnknown1E",e[e.XXXUnknown20=32]="XXXUnknown20",e[e.XXXUnknown3C=60]="XXXUnknown3C",e[e.XXXUnknown63=99]="XXXUnknown63",e[e.XXXUnknown68=104]="XXXUnknown68",e[e.XXXUnknown69=105]="XXXUnknown69",e[e.XXXUnknown6A=106]="XXXUnknown6A",e[e.XXXUnknown78=120]="XXXUnknown78",e[e.XXXUnknown84=132]="XXXUnknown84",e[e.XXXUnknownF0=240]="XXXUnknownF0",e[e.XXXUnknown3F2=1010]="XXXUnknown3F2",e))($u||{}),Pa=(e=>(e[e.Undef=0]="Undef",e[e.Unarmed=1]="Unarmed",e[e.OneHanded=2]="OneHanded",e[e.OneHandedAndShield=4]="OneHandedAndShield",e[e.TwoHanded=8]="TwoHanded",e[e.Bow=16]="Bow",e[e.Crossbow=32]="Crossbow",e[e.Sling=64]="Sling",e[e.ThrownWeapon=128]="ThrownWeapon",e[e.DualWield=256]="DualWield",e[e.Magic=512]="Magic",e[e.Atlatl=1024]="Atlatl",e[e.ThrownShield=2048]="ThrownShield",e[e.Reserved1=4096]="Reserved1",e[e.Reserved2=8192]="Reserved2",e[e.Reserved3=16384]="Reserved3",e[e.Reserved4=32768]="Reserved4",e[e.StubbornMagic=65536]="StubbornMagic",e[e.StubbornProjectile=131072]="StubbornProjectile",e[e.StubbornMelee=262144]="StubbornMelee",e[e.StubbornMissile=524288]="StubbornMissile",e[e.All=65535]="All",e))(Pa||{}),gn=(e=>(e[e.Invalid=0]="Invalid",e[e.Aluvian=1]="Aluvian",e[e.Gharundim=2]="Gharundim",e[e.Sho=3]="Sho",e[e.Viamontian=4]="Viamontian",e[e.Shadowbound=5]="Shadowbound",e[e.Gearknight=6]="Gearknight",e[e.Tumerok=7]="Tumerok",e[e.Lugian=8]="Lugian",e[e.Empyrean=9]="Empyrean",e[e.Penumbraen=10]="Penumbraen",e[e.Undead=11]="Undead",e[e.Olthoi=12]="Olthoi",e[e.OlthoiAcid=13]="OlthoiAcid",e))(gn||{}),Ui=(e=>(e[e.Strength=1]="Strength",e[e.Endurance=2]="Endurance",e[e.Quickness=3]="Quickness",e[e.Coordination=4]="Coordination",e[e.Focus=5]="Focus",e[e.Self=6]="Self",e))(Ui||{});Ui.Strength,Ui.Endurance,Ui.Quickness,Ui.Coordination,Ui.Focus,Ui.Self;Oe.LightWeapons,Oe.HeavyWeapons,Oe.FinesseWeapons,Oe.DualWield,Oe.TwoHandedCombat,Oe.Axe,Oe.Dagger,Oe.Mace,Oe.Spear,Oe.Staff,Oe.Sword,Oe.UnarmedCombat;Oe.MissileWeapons,Oe.Bow,Oe.Crossbow,Oe.Sling,Oe.ThrownWeapon;Oe.CreatureEnchantment,Oe.ItemEnchantment,Oe.LifeMagic,Oe.VoidMagic,Oe.WarMagic;At.TrinketOne,At.Cloak,At.SigilOne,At.SigilTwo,At.SigilThree,At.HeadWear,At.ChestArmor,At.AbdomenArmor,At.UpperArmArmor,At.LowerArmArmor,At.HandWear,At.UpperLegArmor,At.LowerLegArmor,At.FootWear;At.MeleeWeapon|At.MissileWeapon|At.Held|At.TwoHanded;At.MeleeWeapon|At.MissileWeapon|At.TwoHanded;Pa.Bow|Pa.Crossbow|Pa.Atlatl;Fn.Slash+"",Fn.Pierce+"",Fn.Bludgeon+"",Fn.Fire+"",Fn.Cold+"",Fn.Acid+"",Fn.Electric+"",Fn.Health+"",Fn.Nether+"";var qt=(e=>(e[e.None=0]="None",e[e.WarMagic=1]="WarMagic",e[e.LifeMagic=2]="LifeMagic",e[e.ItemEnchantment=3]="ItemEnchantment",e[e.CreatureEnchantment=4]="CreatureEnchantment",e[e.VoidMagic=5]="VoidMagic",e))(qt||{});qt.WarMagic+"",qt.LifeMagic+"",qt.ItemEnchantment+"",qt.CreatureEnchantment+"",qt.VoidMagic+"";qt.WarMagic+"",qt.LifeMagic+"",qt.ItemEnchantment+"",qt.CreatureEnchantment+"",qt.VoidMagic+"";qt.WarMagic+"",qt.LifeMagic+"",qt.ItemEnchantment+"",qt.CreatureEnchantment+"",qt.VoidMagic+"";Oe.Axe,Oe.Bow,Oe.Crossbow,Oe.Dagger,Oe.Mace,Oe.Sling,Oe.Spear,Oe.Staff,Oe.Sword,Oe.ThrownWeapon,Oe.UnarmedCombat,Oe.FinesseWeapons,Oe.HeavyWeapons,Oe.LightWeapons,Oe.MissileWeapons,Oe.TwoHandedCombat,Oe.WarMagic,Oe.LifeMagic,Oe.VoidMagic,Oe.DualWield;Oe.MeleeDefense,Oe.MissileDefense,Oe.MagicDefense,Oe.Shield;gn.Aluvian+"",gn.Gharundim+"",gn.Sho+"",gn.Viamontian+"",gn.Shadowbound+"",gn.Penumbraen+"",gn.Gearknight+"",gn.Tumerok+"",gn.Lugian+"",gn.Empyrean+"",gn.Undead+"";var bt=(e=>(e[e.Invalid=0]="Invalid",e[e.Speak1=1]="Speak1",e[e.Random=2]="Random",e[e.Attack1=3]="Attack1",e[e.Attack2=4]="Attack2",e[e.Attack3=5]="Attack3",e[e.SpecialAttack1=6]="SpecialAttack1",e[e.SpecialAttack2=7]="SpecialAttack2",e[e.SpecialAttack3=8]="SpecialAttack3",e[e.Damage1=9]="Damage1",e[e.Damage2=10]="Damage2",e[e.Damage3=11]="Damage3",e[e.Wound1=12]="Wound1",e[e.Wound2=13]="Wound2",e[e.Wound3=14]="Wound3",e[e.Death1=15]="Death1",e[e.Death2=16]="Death2",e[e.Death3=17]="Death3",e[e.Grunt1=18]="Grunt1",e[e.Grunt2=19]="Grunt2",e[e.Grunt3=20]="Grunt3",e[e.Oh1=21]="Oh1",e[e.Oh2=22]="Oh2",e[e.Oh3=23]="Oh3",e[e.Heave1=24]="Heave1",e[e.Heave2=25]="Heave2",e[e.Heave3=26]="Heave3",e[e.Knockdown1=27]="Knockdown1",e[e.Knockdown2=28]="Knockdown2",e[e.Knockdown3=29]="Knockdown3",e[e.Swoosh1=30]="Swoosh1",e[e.Swoosh2=31]="Swoosh2",e[e.Swoosh3=32]="Swoosh3",e[e.Thump1=33]="Thump1",e[e.Smash1=34]="Smash1",e[e.Scratch1=35]="Scratch1",e[e.Spear=36]="Spear",e[e.Sling=37]="Sling",e[e.Dagger=38]="Dagger",e[e.ArrowWhiz1=39]="ArrowWhiz1",e[e.ArrowWhiz2=40]="ArrowWhiz2",e[e.CrossbowPull=41]="CrossbowPull",e[e.CrossbowRelease=42]="CrossbowRelease",e[e.BowPull=43]="BowPull",e[e.BowRelease=44]="BowRelease",e[e.ThrownWeaponRelease1=45]="ThrownWeaponRelease1",e[e.ArrowLand=46]="ArrowLand",e[e.Collision=47]="Collision",e[e.HitFlesh1=48]="HitFlesh1",e[e.HitLeather1=49]="HitLeather1",e[e.HitChain1=50]="HitChain1",e[e.HitPlate1=51]="HitPlate1",e[e.HitMissile1=52]="HitMissile1",e[e.HitMissile2=53]="HitMissile2",e[e.HitMissile3=54]="HitMissile3",e[e.Footstep1=55]="Footstep1",e[e.Footstep2=56]="Footstep2",e[e.Walk1=57]="Walk1",e[e.Dance1=58]="Dance1",e[e.Dance2=59]="Dance2",e[e.Dance3=60]="Dance3",e[e.Hidden1=61]="Hidden1",e[e.Hidden2=62]="Hidden2",e[e.Hidden3=63]="Hidden3",e[e.Eat1=64]="Eat1",e[e.Drink1=65]="Drink1",e[e.Open=66]="Open",e[e.Close=67]="Close",e[e.OpenSlam=68]="OpenSlam",e[e.CloseSlam=69]="CloseSlam",e[e.Ambient1=70]="Ambient1",e[e.Ambient2=71]="Ambient2",e[e.Ambient3=72]="Ambient3",e[e.Ambient4=73]="Ambient4",e[e.Ambient5=74]="Ambient5",e[e.Ambient6=75]="Ambient6",e[e.Ambient7=76]="Ambient7",e[e.Ambient8=77]="Ambient8",e[e.Waterfall=78]="Waterfall",e[e.LogOut=79]="LogOut",e[e.LogIn=80]="LogIn",e[e.LifestoneOn=81]="LifestoneOn",e[e.AttribUp=82]="AttribUp",e[e.AttribDown=83]="AttribDown",e[e.SkillUp=84]="SkillUp",e[e.SkillDown=85]="SkillDown",e[e.HealthUp=86]="HealthUp",e[e.HealthDown=87]="HealthDown",e[e.ShieldUp=88]="ShieldUp",e[e.ShieldDown=89]="ShieldDown",e[e.EnchantUp=90]="EnchantUp",e[e.EnchantDown=91]="EnchantDown",e[e.VisionUp=92]="VisionUp",e[e.VisionDown=93]="VisionDown",e[e.Fizzle=94]="Fizzle",e[e.Launch=95]="Launch",e[e.Explode=96]="Explode",e[e.TransUp=97]="TransUp",e[e.TransDown=98]="TransDown",e[e.BreatheFlaem=99]="BreatheFlaem",e[e.BreatheAcid=100]="BreatheAcid",e[e.BreatheFrost=101]="BreatheFrost",e[e.BreatheLightning=102]="BreatheLightning",e[e.Create=103]="Create",e[e.Destroy=104]="Destroy",e[e.Lockpicking=105]="Lockpicking",e[e.UI_EnterPortal=106]="UI_EnterPortal",e[e.UI_ExitPortal=107]="UI_ExitPortal",e[e.UI_GeneralQuery=108]="UI_GeneralQuery",e[e.UI_GeneralError=109]="UI_GeneralError",e[e.UI_TransientMessage=110]="UI_TransientMessage",e[e.UI_IconPickUp=111]="UI_IconPickUp",e[e.UI_IconSuccessfulDrop=112]="UI_IconSuccessfulDrop",e[e.UI_IconInvalid_Drop=113]="UI_IconInvalid_Drop",e[e.UI_ButtonPress=114]="UI_ButtonPress",e[e.UI_GrabSlider=115]="UI_GrabSlider",e[e.UI_ReleaseSlider=116]="UI_ReleaseSlider",e[e.UI_NewTargetSelected=117]="UI_NewTargetSelected",e[e.UI_Roar=118]="UI_Roar",e[e.UI_Bell=119]="UI_Bell",e[e.UI_Chant1=120]="UI_Chant1",e[e.UI_Chant2=121]="UI_Chant2",e[e.UI_DarkWhispers1=122]="UI_DarkWhispers1",e[e.UI_DarkWhispers2=123]="UI_DarkWhispers2",e[e.UI_DarkLaugh=124]="UI_DarkLaugh",e[e.UI_DarkWind=125]="UI_DarkWind",e[e.UI_DarkSpeech=126]="UI_DarkSpeech",e[e.UI_Drums=127]="UI_Drums",e[e.UI_GhostSpeak=128]="UI_GhostSpeak",e[e.UI_Breathing=129]="UI_Breathing",e[e.UI_Howl=130]="UI_Howl",e[e.UI_LostSouls=131]="UI_LostSouls",e[e.UI_Squeal=132]="UI_Squeal",e[e.UI_Thunder1=133]="UI_Thunder1",e[e.UI_Thunder2=134]="UI_Thunder2",e[e.UI_Thunder3=135]="UI_Thunder3",e[e.UI_Thunder4=136]="UI_Thunder4",e[e.UI_Thunder5=137]="UI_Thunder5",e[e.UI_Thunder6=138]="UI_Thunder6",e[e.RaiseTrait=139]="RaiseTrait",e[e.WieldObject=140]="WieldObject",e[e.UnwieldObject=141]="UnwieldObject",e[e.ReceiveItem=142]="ReceiveItem",e[e.PickUpItem=143]="PickUpItem",e[e.DropItem=144]="DropItem",e[e.ResistSpell=145]="ResistSpell",e[e.PicklockFail=146]="PicklockFail",e[e.LockSuccess=147]="LockSuccess",e[e.OpenFailDueToLock=148]="OpenFailDueToLock",e[e.TriggerActivated=149]="TriggerActivated",e[e.SpellExpire=150]="SpellExpire",e[e.ItemManaDepleted=151]="ItemManaDepleted",e[e.TriggerActivated1=152]="TriggerActivated1",e[e.TriggerActivated2=153]="TriggerActivated2",e[e.TriggerActivated3=154]="TriggerActivated3",e[e.TriggerActivated4=155]="TriggerActivated4",e[e.TriggerActivated5=156]="TriggerActivated5",e[e.TriggerActivated6=157]="TriggerActivated6",e[e.TriggerActivated7=158]="TriggerActivated7",e[e.TriggerActivated8=159]="TriggerActivated8",e[e.TriggerActivated9=160]="TriggerActivated9",e[e.TriggerActivated10=161]="TriggerActivated10",e[e.TriggerActivated11=162]="TriggerActivated11",e[e.TriggerActivated12=163]="TriggerActivated12",e[e.TriggerActivated13=164]="TriggerActivated13",e[e.TriggerActivated14=165]="TriggerActivated14",e[e.TriggerActivated15=166]="TriggerActivated15",e[e.TriggerActivated16=167]="TriggerActivated16",e[e.TriggerActivated17=168]="TriggerActivated17",e[e.TriggerActivated18=169]="TriggerActivated18",e[e.TriggerActivated19=170]="TriggerActivated19",e[e.TriggerActivated20=171]="TriggerActivated20",e[e.TriggerActivated21=172]="TriggerActivated21",e[e.TriggerActivated22=173]="TriggerActivated22",e[e.TriggerActivated23=174]="TriggerActivated23",e[e.TriggerActivated24=175]="TriggerActivated24",e[e.TriggerActivated25=176]="TriggerActivated25",e[e.TriggerActivated26=177]="TriggerActivated26",e[e.TriggerActivated27=178]="TriggerActivated27",e[e.TriggerActivated28=179]="TriggerActivated28",e[e.TriggerActivated29=180]="TriggerActivated29",e[e.TriggerActivated30=181]="TriggerActivated30",e[e.TriggerActivated31=182]="TriggerActivated31",e[e.TriggerActivated32=183]="TriggerActivated32",e[e.TriggerActivated33=184]="TriggerActivated33",e[e.TriggerActivated34=185]="TriggerActivated34",e[e.TriggerActivated35=186]="TriggerActivated35",e[e.TriggerActivated36=187]="TriggerActivated36",e[e.TriggerActivated37=188]="TriggerActivated37",e[e.TriggerActivated38=189]="TriggerActivated38",e[e.TriggerActivated39=190]="TriggerActivated39",e[e.TriggerActivated40=191]="TriggerActivated40",e[e.TriggerActivated41=192]="TriggerActivated41",e[e.TriggerActivated42=193]="TriggerActivated42",e[e.TriggerActivated43=194]="TriggerActivated43",e[e.TriggerActivated44=195]="TriggerActivated44",e[e.TriggerActivated45=196]="TriggerActivated45",e[e.TriggerActivated46=197]="TriggerActivated46",e[e.TriggerActivated47=198]="TriggerActivated47",e[e.TriggerActivated48=199]="TriggerActivated48",e[e.TriggerActivated49=200]="TriggerActivated49",e[e.TriggerActivated50=201]="TriggerActivated50",e[e.HealthDownVoid=202]="HealthDownVoid",e[e.RegenDownVoid=203]="RegenDownVoid",e[e.SkillDownVoid=204]="SkillDownVoid",e))(bt||{});bt.UI_Roar,bt.UI_Bell,bt.UI_Chant1,bt.UI_Chant2,bt.UI_DarkWhispers1,bt.UI_DarkWhispers2,bt.UI_DarkLaugh,bt.UI_DarkWind,bt.UI_DarkSpeech,bt.UI_Drums,bt.UI_GhostSpeak,bt.UI_Breathing,bt.UI_Howl,bt.UI_LostSouls,bt.UI_Squeal,bt.UI_Thunder1,bt.UI_Thunder2,bt.UI_Thunder3,bt.UI_Thunder4,bt.UI_Thunder5,bt.UI_Thunder6;const If={green:"#80ff7f",white:"#ffffff",grey:"#d2d2c8",yellow:"#ffff3f",tan:"#d2d264",pink:"#ff9696",orange:"#ee921e",blueGrey:"#b4dcf0",darkRed:"#ff3f3f",lightRed:"#f57572",lightBlue:"#3fbfff",cyan:"#3fdcdc",brightPurple:"#ff7fff",brightRed:"#ff0000"},Ff=34;function kf(){const e=If,t=new Array(Ff).fill(e.green),n=(i,s)=>{for(const a of s)t[a]=i};return n(e.white,[2]),n(e.grey,[12]),n(e.yellow,[3,31,10,19]),n(e.tan,[4,11]),n(e.pink,[8,9]),n(e.orange,[18,33]),n(e.blueGrey,[27,28,29,30,32,14]),n(e.darkRed,[15,6,21]),n(e.lightRed,[22]),n(e.lightBlue,[7,17]),n(e.cyan,[13]),n(e.brightPurple,[5]),n(e.brightRed,[26]),t}kf();const X=(e,t,n,i,s={})=>({name:e,kind:t,default:n,group:i,...s}),rn=e=>Math.round(e*240*1e3)/1e3,Bf=[X("EnableMeta","bool",!0,"Misc",{label:"Enable Meta",help:"Enables meta",engine:!0}),X("AutoCram","bool",!1,"Misc",{label:"Enable Autocram",help:"Moves items from the main pack to side packs",engine:!0}),X("AutoStack","bool",!0,"Misc",{label:"Enable Autostack",help:"Stacks items towards the bottom-most item in the pack, and into side packs",engine:!0}),X("RandomHelperBuffs","bool",!1,"Misc",{help:"Now and then casts a random protection or regeneration spell on a player near you",engine:!0}),X("RandomHelperIntervalSeconds","float",5,"Misc",{engine:!0}),X("IdlePeaceMode","bool",!1,"Misc",{label:"Peace Mode When Idle",help:"Loots, navigates, and salvages in peace mode",engine:!0}),X("StopMacroOnDeath","bool",!0,"Misc",{help:"Causes the macro to become disabled when the character dies",engine:!0}),X("RefillWornMana","bool",!0,"Misc",{help:"Uses mana charge types specified in the Consumables panel to refill worn items",engine:!0}),X("RefillWornMana-Item-ManaPercent","int",33,"Misc",{engine:!0}),X("ManaStoneLootCount","int",4,"Misc",{help:"How many of the Consumables tab's mana stones looting keeps",engine:!0}),X("ManaTankMinimumMana","int",1e3,"Misc",{help:"Least mana an item must hold to be looted and drained into an empty stone",engine:!0}),X("ManaChargesWhenOff","bool",!0,"Misc",{label:"M. Charges When Off",engine:!0}),X("AutoFellowManagement","bool",!0,"Misc",{label:"Auto Fellow Mgmt.",engine:!0}),X("DeleteGhostMonsters","bool",!0,"Misc",{help:"Sets aside a monster that never answers spells (a ghost the server has dropped)",engine:!0}),X("GhostMonsterSpellAttemptCount","int",200,"Misc",{engine:!0}),X("WhoYouGonnaCall","bool",!0,"Misc"),X("BlacklistMonsterAttemptCount","int",4,"Misc",{help:"Attempts in a row that don't reach a monster before it is ignored for a while",engine:!0}),X("BlacklistMonsterTimeoutSeconds","int",120,"Misc",{engine:!0}),X("DeleteGhostMonstersByHPTracker","bool",!0,"Misc",{aliases:["DeleteGhostMonsterByHPTracker"],help:"Sets aside a monster whose health doesn't change while you fight it",engine:!0}),X("GhostDeleteHPTrackerSeconds","int",30,"Misc",{engine:!0}),X("GoToPeaceModeToUseKits","bool",!1,"Misc",{engine:!0}),X("DropToPeaceModeRetryCount","int",34,"Misc",{help:"Failed tries to drop to peace mode before the macro wields a wand to clear a stuck combat state",engine:!0}),X("BlacklistCorpseOpenAttemptCount","int",30,"Misc",{help:"Failed opens before a corpse is skipped",engine:!0}),X("BlacklistCorpseOpenTimeoutSeconds","int",200,"Misc",{help:"How long a skipped corpse is left alone",engine:!0}),X("Recharge-Norm-HitP","int",75,"Recharge",{label:"Heal at:",engine:!0}),X("Recharge-Norm-Stam","int",50,"Recharge",{label:"Restam at:",engine:!0}),X("Recharge-Norm-Mana","int",50,"Recharge",{label:"Get Mana at:",engine:!0}),X("Recharge-NoTarg-HitP","int",1,"Recharge",{label:"Top-off HP:",engine:!0}),X("Recharge-NoTarg-Stam","int",1,"Recharge",{label:"Top-off Stam:",engine:!0}),X("Recharge-NoTarg-Mana","int",1,"Recharge",{label:"Top-off Mana:",engine:!0}),X("Recharge-Helper-HitP","int",20,"Recharge",{label:"Heal others at:",engine:!0}),X("Recharge-Helper-Stam","int",1,"Recharge",{label:"Restam others",engine:!0}),X("Recharge-Helper-Mana","int",1,"Recharge",{label:"Infuse others",engine:!0}),X("DoHelp","bool",!0,"Recharge",{engine:!0}),X("HelperDistanceHitP","range",rn(.310416666666667),"Recharge",{engine:!0}),X("HelperDistanceStam","range",rn(.310416666666667),"Recharge",{engine:!0}),X("HelperDistanceMana","range",rn(.166666666666667),"Recharge",{engine:!0}),X("CastDispelSelf","bool",!1,"Recharge",{label:"Cast Dispel Self",engine:!0}),X("UseDispelItems","bool",!1,"Recharge",{label:"Use Dispel Items",engine:!0}),X("UseDispelDrum","bool",!1,"Recharge"),X("UseHealersHeart","bool",!0,"Recharge",{engine:!0}),X("JumpOutWandCasting","bool",!1,"Recharge",{engine:!0}),X("RechargeBoostTimeSeconds","float",5,"Recharge",{help:"Maximum time for the recharge boost effect to last. Boost causes the macro to prefer to recharge once it switches to magic mode to recharge",engine:!0}),X("RechargeBoostAmount","int",40,"Recharge",{help:"Number of h/s/m points used for recharge boost",engine:!0}),X("MinimumHealKitSuccessChance","int",95,"Recharge",{engine:!0}),X("UseKitsInMagicMode","bool",!0,"Recharge",{engine:!0}),X("StaminaToHealthMultiplier","float",1.9,"Recharge",{engine:!0}),X("ManaToHealthMultiplier","float",2.8,"Recharge",{engine:!0}),X("ClearLevelBoostFlagOnCast","bool",!0,"Recharge",{help:"When true, RechargeBoost only applies to the first spell cast after switching to magic mode",engine:!0}),X("EnableCombat","bool",!0,"Melee Combat",{label:"Enable Combat",help:"Enable/Disable Combat",engine:!0}),X("DefaultMeleeAttackHeight","enum",2,"Melee Combat",{values:{1:"High",2:"Medium",3:"Low"},engine:!0}),X("TargetLock","bool",!1,"Melee Combat",{engine:!0}),X("TargetSelectMethod","enum",3,"Melee Combat",{values:{1:"By Range",2:"By Angle",3:"Both"},engine:!0}),X("TargetSelectAngleRange","range",rn(.0208333),"Melee Combat",{engine:!0}),X("DebuffEachFirst","enum",1,"Melee Combat",{values:{1:"One",2:"Priority",3:"All"},engine:!0}),X("AutoAttackPower","bool",!0,"Melee Combat",{engine:!0}),X("DebuffSelectionMethod","enum",2,"Melee Combat",{values:{1:"Spell Level",2:"Skill"},engine:!0}),X("UseRecklessness","bool",!0,"Melee Combat",{engine:!0}),X("SpellDiffExcessThreshold-Hunt","int",25,"Spell Combat",{engine:!0}),X("MinimumRingTargets","int",4,"Spell Combat",{engine:!0}),X("SwitchWandsToDebuff","bool",!1,"Spell Combat",{aliases:["SwitchWandToDebuff"],engine:!0}),X("DoJiggle","bool",!1,"Spell Combat"),X("UseArcs","enum",1,"Spell Combat",{values:{1:"No",2:"At Range",3:"Yes"},engine:!0}),X("ArcRange","range",rn(.0208333),"Spell Combat",{engine:!0}),X("DebuffPrecastSeconds","int",5,"Spell Combat",{engine:!0}),X("SummonPets","bool",!0,"Spell Combat",{label:"Summon Pets",engine:!0}),X("PetRangeMode","enum",0,"Spell Combat",{label:"Custom Pet Range:",values:{0:"AttackDistance",1:"PetCustomRange"},engine:!0}),X("PetCustomRange","range",rn(.0208333),"Spell Combat",{engine:!0}),X("PetRefillCount-Idle","int",3,"Spell Combat",{engine:!0}),X("PetRefillCount-Normal","int",1,"Spell Combat",{engine:!0}),X("PetMonsterDensity","int",1,"Spell Combat",{label:"Pet Min. Monsters:",engine:!0}),X("UseBreakableTurnTo","bool",!0,"Spell Combat",{engine:!0}),X("UseProjectileAwareness","bool",!0,"Spell Combat",{engine:!0}),X("CollisionProjectileRadius","float",.4,"Spell Combat"),X("CollisionStepDistance","float",.7,"Spell Combat"),X("ShowCollisionDebug","bool",!1,"Spell Combat"),X("MaximumCollisionChecksPerTick","int",500,"Spell Combat"),X("SpellRangeFudge","float",1,"Spell Combat",{help:"Metres taken off a debuff's range, as positions are not exact",engine:!0}),X("AllowDebuffFallback","bool",!1,"Spell Combat",{engine:!0}),X("AttackDistance","range",rn(.0208333),"Ranges",{label:"Monster Range:",help:"The maximum range at which the macro will attempt to engage targets",engine:!0}),X("AttackMinimumDistance","range",0,"Ranges",{engine:!0}),X("ApproachDistance","range",0,"Ranges",{label:"Approach",help:"With navigation on, run toward a monster within this range until it is within Monster Range",engine:!0}),X("RingDistance","range",rn(.0208333),"Ranges",{label:"Ring Range:",engine:!0}),X("CorpseApproachRange-Max","range",0,"Ranges",{help:"How far the macro walks to a corpse (beyond arm's reach); the Approach box sets it too",engine:!0}),X("CorpseApproachRange-Min","range",rn(.014),"Ranges",{aliases:["CorpeApproachRange-Min"],help:"How near the macro walks before opening a corpse",engine:!0}),X("NavCloseStopRange","range",rn(.0083333),"Ranges",{label:"Follow/Nav Min",help:"How near a waypoint counts as reaching it",engine:!0}),X("NavFarStopRange","range",999999*240,"Ranges",{engine:!0}),X("UsePortalDistance","range",rn(.0166667),"Ranges",{engine:!0}),X("DoorIDRange","range",rn(.0833333),"Ranges",{help:"The range at which the macro will ID doors, when opening.",engine:!0}),X("DoorOpenRange","range",rn(.0166667),"Ranges",{help:"The range at which the macro will attempt to open a door.",engine:!0}),X("EnableNav","bool",!1,"Navigation",{label:"Enable Navigation",help:"Enable/Disable Navigation",engine:!0}),X("NavPriorityBoost","bool",!1,"Navigation",{label:"Boost Nav. Priority",help:"Navigate before attacking",engine:!0}),X("CorpseCacheTimeoutMinutes","float",60,"Navigation",{help:"How long what is known about a corpse out of sight is kept",engine:!0}),X("OpenDoors","bool",!1,"Navigation",{engine:!0}),X("DoorLockpickDiffExcessThreshold","int",-50,"Navigation",{help:"The number of lockpick skill points above a door's pick difficulty that is required for a door to be considered pickable.",engine:!0}),X("FollowAroundCorners","bool",!0,"Navigation",{help:"Follow routes run the leader's own path, corner by corner (off: straight at them)",engine:!0}),X("ShowNavLines","bool",!1,"Navigation",{label:"Show Nav Lines",help:"Draws the loaded route in the world",engine:!0}),X("EnableBuffing","bool",!0,"Buffing",{label:"Enable Buffing",engine:!0}),X("SpellDiffExcessThreshold-Buff","int",5,"Buffing",{engine:!0}),X("IdleBuffTopoff","bool",!1,"Buffing",{label:"Rebuff When Idle",aliases:["IdleBuffTOpoff"],engine:!0}),X("IdleBuffTopoffTimeSeconds","int",1200,"Buffing",{engine:!0}),X("RebuffTimeRemainingSeconds","int",300,"Buffing",{engine:!0}),X("BuffProfile-Prots","string","ALFCBPS","Buffing",{engine:!0}),X("BuffProfile-Banes","string","ALFCBPS","Buffing",{engine:!0}),X("BuffProfile_Prots","enum",2,"Buffing",{values:{1:"Custom",2:"All",3:"None",4:"B",5:"BPS",6:"BPSA",7:"ALFC",8:"BPSAC"},engine:!0}),X("BuffProfile_Banes","enum",2,"Buffing",{values:{1:"Custom",2:"All",3:"None",4:"B",5:"BPS",6:"BPSA",7:"BPSAC",8:"ALFC"},engine:!0}),X("BuffCastRecast_Seconds","int",30,"Buffing",{engine:!0}),X("BuffCastRecastReset_Seconds","int",30,"Buffing",{engine:!0}),X("FastCastBuffs","bool",!1,"Buffing",{help:"Moves you backwards during casting, use with caution",engine:!0}),X("BuffWithUntrained-Item","int",80,"Buffing",{engine:!0}),X("BuffWithUntrained-Creature","int",80,"Buffing",{engine:!0}),X("BuffWithUntrained-Life","int",80,"Buffing",{engine:!0}),X("ArrowheadFletchDiffExcessThreshold","int",10,"Crafting",{aliases:["ArrowheadFletchDiffExcessTheshold"],engine:!0}),X("AutoCraftItems","bool",!0,"Crafting",{engine:!0}),X("SplitPeas","bool",!0,"Crafting",{help:"Splits peas to keep the spell components in the Consumables panel supplied",engine:!0}),X("SpellCompMin-Critical","int",4,"Crafting",{help:"Fewer of a component than this: split a pea before healing",engine:!0}),X("SpellCompMin-Normal","int",20,"Crafting",{help:"Fewer than this: split a pea after normal buffing",engine:!0}),X("SpellCompMin-Idle","int",20,"Crafting",{help:"Fewer than this: split a pea when idle",engine:!0}),X("UseSpecialAmmo","enum",0,"Crafting",{values:{0:"None",1:"Raider",2:"SCurrency",3:"Both"},engine:!0}),X("IdleCraftCount_HealthKits","int",2,"Crafting",{engine:!0}),X("IdleCraftCount_StamKits","int",2,"Crafting",{engine:!0}),X("IdleCraftCount_ManaKits","int",2,"Crafting",{engine:!0}),X("IdleCraftCount_HealthFood","int",15,"Crafting",{engine:!0}),X("IdleCraftCount_StamFood","int",15,"Crafting",{engine:!0}),X("IdleCraftCount_ManaFood","int",15,"Crafting",{engine:!0}),X("BlacklistedSpellComps","string","","Crafting"),X("EnableLooting","bool",!1,"Looting",{label:"Enable Looting",help:"Loots corpses with the loot profile",engine:!0}),X("ReadUnknownScrolls","bool",!0,"Looting",{help:"Loots and reads scrolls of spells you can learn",engine:!0}),X("LootAllCorpses","bool",!1,"Looting",{help:"Also loots others' corpses, 100 s after they appear",engine:!0}),X("LootFellowCorpses","bool",!1,"Looting",{help:"Also loots fellows' kills (at once when they share loot, else after 100 s)",engine:!0}),X("LootPriorityBoost","bool",!1,"Looting",{label:"Boost Loot Priority",help:"Loots corpses before attacking the next monster",engine:!0}),X("LootOnlyRareCorpses","bool",!1,"Looting",{label:"Loot Only Rare Corpses",engine:!0}),X("CorpseItemAppearanceTimeoutSeconds","float",6,"Looting",{help:"How long an opened corpse waits for its items before it counts as empty",engine:!0}),X("CorpseItemIDTimeoutSeconds","float",60,"Looting",{help:"How long an item on a corpse waits for its examination",engine:!0}),X("CorpseOpenTimeoutSeconds","float",1.5,"Looting",{help:"How long an open may take before it counts as a failed attempt",engine:!0}),X("CorpseLootItemMaxAttempts","int",20,"Looting",{help:"Picks of one item before it is left on the corpse",engine:!0}),X("CombineSalvage","bool",!0,"Looting",{label:"Combine Salvage",help:"Combines partial salvage bags of one material by the loot profile's workmanship bands",engine:!0})],Zl=new Map;for(const e of Bf){Zl.set(e.name.toLowerCase(),e);for(const t of e.aliases??[])Zl.set(t.toLowerCase(),e)}const Yu={48:"Primary Portal Recall",2647:"Secondary Portal Recall",1635:"Lifestone Recall",1636:"Lifestone Sending",2645:"Portal Recall",2931:"Recall Aphus Lassel",2023:"Recall the Sanctuary",2943:"Recall to the Singularity Caul",3865:"Glenden Wood Recall",2041:"Aerlinthe Recall",2813:"Mount Lethe Recall",2941:"Ulgrim's Recall",4084:"Bur Recall",4198:"Paradox-touched Olthoi Infested Area Recall",4128:"Call of the Mhoire Forge",4213:"Colosseum Recall",5175:"Facility Hub Recall",5330:"Gear Knight Invasion Area Camp Recall",5541:"Lost City of Neftet Recall",4214:"Return to the Keep",6150:"Rynthid Recall",6321:"Viridian Rise Recall",6322:"Viridian Rise Great Tree Recall",6325:"Celestial Hand Stronghold Recall",6327:"Radiant Blood Stronghold Recall",6326:"Eldrytch Web Stronghold Recall"},Hf={1:"Melee Weapon",2:"Armor",3:"Clothing",4:"Jewelry",6:"Food",7:"Money",8:"Misc",9:"Missile Weapon",10:"Container",11:"Gem",12:"Spell Components",13:"Key",14:"Portal",15:"Promissory Note",16:"Mana Stone",31:"Caster",39:"Tinkering Material"},Gf={29:65536,30:131072,33:256},Pf={"Amuli Coat (Chest)":[0],"Amuli Coat (Collar/Shoulder)":[1,2],"Amuli Coat (Arms/Trim)":[3,4,5,6,7],"Amuli Legs (Base)":[0,1],"Amuli Legs (Trim)":[2,3],"Celdon (Base)":[0],"Celdon (Veins)":[1,2],"Chiran Coat (Base/Arms)":[0,1],"Chiran Coat (Stripes)":[2,3,4],"Chiran Legs (Girth)":[1],"Chiran Legs (Legs)":[2,3],"Chiran Legs (Trim)":[0],"Chiran Helm (Horns)":[0],"Chiran Helm (Base)":[1],"Haebrean BP (Chest) *":[0],"Haebrean BP (Ornaments)":[1],"Haebrean BP (Trim)":[2],"Haebrean Girth (Base) *":[0],"Haebrean Girth (Belt/Scales)":[1,2],"Haebrean Helm (Base)":[0],"Haebrean Helm (Mask)":[1],"Haebrean Pauldrons (Base) *":[0],"Haebrean Pauldrons (Ornaments)":[1],"Lorica BP (Veins)":[0,1],"Lorica BP (Base)":[2,3],"Lorica BP (Neck/Trim) *":[4],"Lorica Legs (Base)":[0],"Lorica Legs (Knees/Belt/Crotch) *":[1,2],"Lorica Legs (Legs) *":[3],"Nariyid BP (Circle/Lines)":[0,1],"Nariyid BP (Base)":[2],"Nariyid BP (Shoulders)":[3],"Nariyid Girth (Base) *":[0],"Nariyid Girth (Belt/Lines)":[2],"Nariyid Girth (Ornaments)":[3],"Nariyid Sleeves (Shoulders)":[0],"Nariyid Sleeves (Upper Arm)":[1,2],"Nariyid Sleeves (Lower Arm)":[3],"Olthoi BP (Base)":[0],"Olthoi BP (Veins)":[1],"Olthoi Alduressa Legs (Girth: Base)":[0,1,2],"Olthoi Alduressa Legs (Girth: Lines)":[3],"Olthoi Alduressa Legs (Legs: Lines)":[4,5],"Olthoi Amuli Coat (Base) *":[0,1],"Olthoi Amuli Coat (Trim)":[2],"Olthoi Amuli Coat (Shoulders)":[3],"Olthoi Amuli Legs (Trim)":[6,7,8],"Olthoi Koujia Kabuton (Base)":[0],"Olthoi Koujia Kabuton (Horns)":[1],"Olthoi Koujia Legs (Base)":[0,1,2],"Olthoi Koujia Legs (Sides/Shins)":[3,4,5],"Scalemail Cuirass (Base)":[0],"Scalemail Cuirass (Bumps)":[1],"Scalemail Cuirass (Belt)":[2],"Tenassa Legs (Line at Side)":[0],"Tenassa Legs (Base)":[1],"Tenassa Legs (Hilight)":[2],"Tenassa BP (Shoulders)":[0],"Tenassa BP (Base)":[1],"Yoroi Cuirass (Base)":[0,1],"Yoroi Cuirass (Belt)":[2],"Yoroi Girth (Base)":[0],"Yoroi Girth (Belt)":[1]},Vf={218103814:{kind:"int",key:12},218103842:{kind:"int",key:44},218103850:{kind:"did",key:52},218103808:{kind:"int",key:1},218103821:{kind:"int",key:4},218103822:{kind:"int",key:9},218103841:{kind:"int",key:45},218103809:{kind:"did",key:8},218103849:{kind:"did",key:50}},zf={167772160:{kind:"float",key:13},167772161:{kind:"float",key:14},167772162:{kind:"float",key:15},167772163:{kind:"float",key:18},167772164:{kind:"float",key:19},167772165:{kind:"float",key:17},167772166:{kind:"float",key:16},167772169:{kind:"int",key:105},167772171:{kind:"float",key:22},167772172:{kind:"float",key:62},167772174:{kind:"float",key:63}};class ii extends Error{constructor(t,n=-1){super(n>=0?`${t} (at ${n})`:t),this.pos=n,this.name="ExprError"}}const Jl=new Set("[](),;+*/%^#=!<>&|{}:$`"),Wf=/^[A-Za-z_][A-Za-z0-9_]*$/,Xf=/^(?:0[xX][0-9A-Fa-f]+|(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)/;class $f{constructor(t,n){this.s=t,this.strict=n}i=0;fail(t,n=this.i){throw new ii(t,n)}ws(){for(;this.i<this.s.length&&/\s/.test(this.s[this.i]);)this.i++}peek(t=0){return this.s[this.i+t]??""}eof(){return this.i>=this.s.length}parseAll(){if(this.ws(),this.eof())return{type:"str",value:"",pos:0};const t=this.seq();if(this.ws(),!this.strict)for(;this.peek()==="]";)this.i++,this.ws();return this.eof()||this.fail(`unexpected '${this.peek()}'`),t}seq(){const t=this.i,n=[this.binary(0)];for(;this.ws(),!(this.peek()!==";"||(this.i++,this.ws(),this.eof()||this.peek()===")"||this.peek()==="]"));)n.push(this.binary(0));return n.length===1?n[0]:{type:"seq",items:n,pos:t}}op(t){const n=this.peek(),i=this.peek(1);switch(t){case 0:return n==="|"&&i==="|"?"||":null;case 1:return n==="&"&&i==="&"?"&&":null;case 2:return n==="|"&&i!=="|"?"|":null;case 3:return n==="&"&&i!=="&"?"&":null;case 4:return n==="="&&i==="="?"==":n==="!"&&i==="="?"!=":n==="#"?"#":null;case 5:return n==="<"?i==="="?"<=":"<":n===">"?i==="="?">=":">":null;case 6:return n==="+"||n==="-"?n:null;case 7:return n==="*"||n==="/"||n==="%"?n:null;default:return null}}binary(t){if(t>7)return this.power();let n=this.binary(t+1);for(;;){this.ws();const i=this.op(t);if(!i)return n;const s=this.i;this.i+=i.length;const a=this.binary(t+1);n={type:"binary",op:i,left:n,right:a,pos:s}}}power(){const t=this.unary();if(this.ws(),this.peek()!=="^")return t;const n=this.i++;return{type:"binary",op:"^",left:t,right:this.power(),pos:n}}unary(){this.ws();const t=this.peek();if((t==="-"||t==="!")&&this.peek(1)!=="="){const n=this.i++;return{type:"unary",op:t,arg:this.unary(),pos:n}}return this.postfix(this.primary())}postfix(t){for(;;){if(this.peek()!=="{")return t;const n=this.i++;this.ws();let i=null;if(this.peek()!==":"&&(i=this.seq()),this.ws(),this.peek()===":"){this.i++,this.ws();const s=this.peek()==="}"?null:this.seq();this.ws(),this.expect("}"),t={type:"slice",target:t,start:i,end:s,pos:n}}else this.expect("}"),t={type:"index",target:t,index:i,pos:n}}}expect(t){this.ws(),this.peek()!==t&&this.fail(this.eof()?`expected '${t}' before end of expression`:`expected '${t}', found '${this.peek()}'`),this.i++}primary(){this.ws();const t=this.i,n=this.peek();if(this.eof()&&this.fail("expected a value before end of expression"),n==="("){this.i++;const s=this.seq();return this.expect(")"),s}if(n==="`"||n==="'"){const s=this.s.indexOf(n,this.i+1);return s<0&&this.fail(`unterminated ${n==="`"?"backtick":"quoted"} string`,t),this.i=s+1,{type:"str",value:this.s.slice(t+1,s),pos:t}}if(n==="$"){this.i++;const s=/^[A-Za-z0-9_]+/.exec(this.s.slice(this.i));return s||this.fail("expected a variable name after '$'",t),this.i+=s[0].length,{type:"var",name:s[0],pos:t}}const i=Xf.exec(this.s.slice(this.i));return i&&!/^[ \t]*[A-Za-z_\\]|^\./.test(this.s.slice(this.i+i[0].length,this.i+i[0].length+64))?(this.i+=i[0].length,{type:"num",value:i[0].length>2&&/^0x/i.test(i[0])?parseInt(i[0],16):Number(i[0]),pos:t}):(Jl.has(n)&&n!=="/"&&this.fail(`unexpected '${n}'`),this.word(t))}word(t){let n="",i=0,s=!1;for(this.peek()==="/"&&(n="/",i=1,this.i++);!this.eof();){const l=this.peek();if(l==="\\"){this.i+1>=this.s.length&&this.fail("dangling escape at end of expression"),n+=this.s[this.i+1],i=n.length,s=!0,this.i+=2;continue}if(Jl.has(l)&&!(l==="!"&&this.peek(1)!=="="))break;n+=l,/\s/.test(l)||(i=n.length),this.i++}this.ws();const r=this.eof()||"]),};".includes(this.peek())?n.slice(0,i):n,o=n.slice(0,i);return!s&&Wf.test(o)&&this.peek()==="["?this.call(o,t):!s&&/^(true|false)$/i.test(o)?{type:"num",value:o.toLowerCase()==="true"?1:0,pos:t}:!s&&/^[-+]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?$/.test(o)?{type:"num",value:Number(o),pos:t}:{type:"str",value:r,pos:t}}call(t,n){this.i++;const i=[];if(this.ws(),this.peek()==="]")return this.i++,{type:"call",name:t.toLowerCase(),args:i,pos:n};for(;;){if(this.ws(),this.peek()===","||this.peek()==="]")i.push({type:"str",value:"",pos:this.i});else{if(this.eof()&&!this.strict)break;i.push(this.seq())}if(this.ws(),this.peek()===","){this.i++;continue}if(this.peek()==="]"){this.i++;break}if(this.eof()&&!this.strict)break;this.fail(this.eof()?`expected ']' to close ${t}[ before end of expression`:`expected ',' or ']' in ${t}[, found '${this.peek()}'`)}return{type:"call",name:t.toLowerCase(),args:i,pos:n}}}function Yf(e,t={}){return new $f(e,t.strict===!0).parseAll()}const oa=new Map;function ml(e){let t=oa.get(e);return t||(t=Yf(e),oa.size>500&&oa.clear(),oa.set(e,t)),t}const Yt=e=>typeof e=="object"&&e!==null;function tn(e){return e===null?!1:typeof e=="number"?e!==0&&!Number.isNaN(e):typeof e=="string"?e!==""&&e!=="0"&&e.toLowerCase()!=="false":e.kind==="list"?e.items.length>0:e.kind==="dict"?e.map.size>0:!0}const Ce=e=>e?1:0;function er(e){return Number.isInteger(e)&&Math.abs(e)<1e15?String(e):Number.isFinite(e)?String(Number(e.toPrecision(15))):Number.isNaN(e)?"NaN":e>0?"Infinity":"-Infinity"}function qu(e){return`${Math.abs(e.ns).toFixed(2)}${e.ns>=0?"N":"S"}, ${Math.abs(e.ew).toFixed(2)}${e.ew>=0?"E":"W"}, ${e.z.toFixed(2)}Z`}function _o(e){if(e===null)return"";if(typeof e=="number")return er(e);if(typeof e=="string")return e;switch(e.kind){case"list":return`[${e.items.map(_o).join(",")}]`;case"dict":return`{${[...e.map].map(([t,n])=>`${t}:${_o(n)}`).join(",")}}`;case"wobject":return e.name;case"coords":return qu(e);case"stopwatch":return`stopwatch[${e.startedAt===null?"stopped":"running"}]`;case"viewcontrol":return`${e.view}.${e.control}`}}const qf=/^\s*[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?\s*$/;function Pi(e){return qf.test(e)?Number(e):/^\s*0[xX][0-9A-Fa-f]+\s*$/.test(e)?parseInt(e.trim(),16):/^\s*true\s*$/i.test(e)?1:/^\s*false\s*$/i.test(e)?0:null}function fs(e,t){if(typeof e=="number"&&typeof t=="number"||typeof e=="string"&&typeof t=="string")return e===t;if(typeof e=="number"&&typeof t=="string"){const n=Pi(t);return n!==null&&n===e}if(typeof e=="string"&&typeof t=="number"){const n=Pi(e);return n!==null&&n===t}return e===null||t===null?e===t:Yt(e)&&Yt(t)?e.kind==="wobject"&&t.kind==="wobject"?e.id===t.id:e.kind==="coords"&&t.kind==="coords"?e.ns===t.ns&&e.ew===t.ew&&e.z===t.z:e.kind==="viewcontrol"&&t.kind==="viewcontrol"?e.view===t.view&&e.control===t.control:e===t:!1}const la=new Map;function vi(e,t=-1){let n=la.get(e);if(n)return n;let i=e,s="";const a=/^\(\?([imsx]+)\)/.exec(i);a&&(i=i.slice(a[0].length),s=[...new Set(a[1].replace("x",""))].join(""));try{n=new RegExp(i,s)}catch(r){throw new ii(`bad regex '${e}': ${r.message}`,t)}return la.size>500&&la.clear(),la.set(e,n),n}function Kf(e){const t=Math.floor(e),n=e-t;return n>.5?t+1:n<.5||t%2===0?t:t+1}function Ku(e,t){const n=/^([FfNnGgDdXxPpEe])(\d*)$/.exec(t.trim()),i=a=>{const[r,o]=a.split("."),l=r.replace(/\B(?=(\d{3})+(?!\d))/g,",");return o!==void 0?`${l}.${o}`:l};if(n){const a=n[2]===""?null:Number(n[2]);switch(n[1].toUpperCase()){case"F":return e.toFixed(a??2);case"N":return i(e.toFixed(a??2));case"G":return a?String(Number(e.toPrecision(a))):er(e);case"D":{const r=String(Math.abs(Math.trunc(e))).padStart(a??0,"0");return e<0?`-${r}`:r}case"X":{const r=(Math.trunc(e)>>>0).toString(16).padStart(a??0,"0");return n[1]==="X"?r.toUpperCase():r}case"P":return`${i((e*100).toFixed(a??2))} %`;case"E":{const[r,o]=e.toExponential(a??6).split("e"),l=Number(o);return`${r}${n[1]}${l<0?"-":"+"}${String(Math.abs(l)).padStart(3,"0")}`}}}const s=/^([#0,]*)(?:\.([#0]+))?$/.exec(t.trim());if(s&&t.trim()!==""){const a=s[2]??"",r=a.replace(/#/g,"").length;let o=e.toFixed(a.length);a.length>r&&(o=o.replace(new RegExp(`0{0,${a.length-r}}$`),"").replace(/\.$/,""));const l=(s[1]??"").replace(/[#,]/g,"").length,[c,u]=o.replace("-","").split(".");let f=c.padStart(l,"0");return l===0&&f==="0"&&u&&(f=""),(s[1]??"").includes(",")&&(f=i(f)),`${e<0?"-":""}${f}${u?`.${u}`:""}`}return er(e)}const Ql=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],jl=["January","February","March","April","May","June","July","August","September","October","November","December"],Zf={d:"MM/dd/yyyy",D:"dddd, dd MMMM yyyy",f:"dddd, dd MMMM yyyy HH:mm",F:"dddd, dd MMMM yyyy HH:mm:ss",g:"MM/dd/yyyy HH:mm",G:"MM/dd/yyyy HH:mm:ss",m:"MMMM dd",M:"MMMM dd",o:"yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffffffK",O:"yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffffffK",r:"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",R:"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",s:"yyyy'-'MM'-'dd'T'HH':'mm':'ss",t:"HH:mm",T:"HH:mm:ss",u:"yyyy'-'MM'-'dd HH':'mm':'ss'Z'",U:"dddd, dd MMMM yyyy HH:mm:ss",y:"yyyy MMMM",Y:"yyyy MMMM"};function Jf(e,t,n){const i=t.length===1?Zf[t]??(()=>{throw new Error(`Input string was not in a correct format: '${t}'`)})():t,s=n||t==="r"||t==="R"||t==="u",a=s?e.getUTCFullYear():e.getFullYear(),r=s?e.getUTCMonth():e.getMonth(),o=s?e.getUTCDate():e.getDate(),l=s?e.getUTCDay():e.getDay(),c=s?e.getUTCHours():e.getHours(),u=s?e.getUTCMinutes():e.getMinutes(),f=s?e.getUTCSeconds():e.getSeconds(),h=s?e.getUTCMilliseconds():e.getMilliseconds(),p=s?0:-e.getTimezoneOffset(),_=(d,A)=>String(d).padStart(A,"0"),S=d=>{const A=p<0?"-":"+",R=Math.floor(Math.abs(p)/60),M=Math.abs(p)%60;return d===1?`${A}${R}`:d===2?`${A}${_(R,2)}`:`${A}${_(R,2)}:${_(M,2)}`};let m="";for(let d=0;d<i.length;){const A=i[d];if(A==="'"||A==='"'){const M=i.indexOf(A,d+1);m+=i.slice(d+1,M<0?i.length:M),d=M<0?i.length:M+1;continue}if(A==="\\"){m+=i[d+1]??"",d+=2;continue}if(A==="%"&&d+1<i.length){d++;continue}let R=1;for(;i[d+R]===A;)R++;switch(d+=R,A){case"d":m+=R===1?o:R===2?_(o,2):R===3?Ql[l].slice(0,3):Ql[l];break;case"M":m+=R===1?r+1:R===2?_(r+1,2):R===3?jl[r].slice(0,3):jl[r];break;case"y":m+=R===1?a%100:R===2?_(a%100,2):_(a,R);break;case"h":m+=R===1?c%12||12:_(c%12||12,2);break;case"H":m+=R===1?c:_(c,2);break;case"m":m+=R===1?u:_(u,2);break;case"s":m+=R===1?f:_(f,2);break;case"f":case"F":{let M=_(h,3).padEnd(Math.max(3,R),"0").slice(0,R);A==="F"&&(M=M.replace(/0+$/,"")),m+=M,A==="F"&&M===""&&m.endsWith(".")&&(m=m.slice(0,-1));break}case"t":m+=R===1?c<12?"A":"P":c<12?"AM":"PM";break;case"z":m+=S(Math.min(R,3));break;case"K":m+=s?"Z":S(3);break;case"g":m+="A.D.";break;default:m+=A.repeat(R)}}return m}function Qf(e){const t=s=>Ku(Math.round(s),"N0"),n=s=>e.seconds>0?s*3600/e.seconds:0;let i=`${t(e.xp)} XP`;return e.lum&&(i+=` and ${t(e.lum)} LUM`),i+=`, ${t(e.seconds)}s, ${t(n(e.xp))} XP/hr`,e.lum&&(i+=` and ${t(n(e.lum))} LUM/hr`),i}const Ws=7620,dr=Ws/16,Zu=210+dr*8,jf=Zu+Ws*359,ed=["Darktide","Darktide-and-Half","Foredawn","Foredawn-and-Half","Dawnsong","Dawnsong-and-Half","Morntide","Morntide-and-Half","Midsong","Midsong-and-Half","Warmtide","Warmtide-and-Half","Evensong","Evensong-and-Half","Gloaming","Gloaming-and-Half"],td=["Morningthaw","Solclaim","Seedsow","Leafdawning","Verdantine","Thistledown","Harvestgain","Leafcull","Frostfell","Snowreap","Coldeve","Wintersebb"],Xs=(e,t)=>(e%t+t)%t;function ei(e){const t=Xs(e-Zu,Ws),n=Math.floor((e-jf)/Ws),i=Xs(n,360);return{year:11+Math.floor(n/360),month:Math.floor(i/30)+1,day:i%30+1,hour:Math.floor(t/dr)+1,secondsIntoDay:t}}const nd=dr*4,id=dr*12;function ec(e,t){return Xs(t-ei(e).secondsIntoDay,Ws)/60}const pt=(e,t)=>{throw new ii(`${e.name}: ${t}`,e.pos)};function se(e,t){const n=e.host[t];if(typeof n!="function")throw new ii(`unsupported function ${e.name}`,e.pos);return n.bind(e.host)}function xt(e,t,n="a number"){if(typeof e=="number")return e;if(typeof e=="string"){const i=Pi(e);if(i!==null)return i}return pt(t,`expected ${n}, got ${Vn(e)}`)}const ye=(e,t)=>Math.trunc(xt(e,t,"an integer")),_e=e=>_o(e);function Vn(e){return e===null?"none":typeof e=="number"?`number ${er(e)}`:typeof e=="string"?`string '${e}'`:e.kind}function kt(e,t){return Yt(e)&&e.kind==="list"?e:pt(t,`expected a list, got ${Vn(e)}`)}function Yn(e,t){return Yt(e)&&e.kind==="dict"?e:pt(t,`expected a dictionary, got ${Vn(e)}`)}function fi(e,t){return Yt(e)&&e.kind==="coords"?e:pt(t,`expected coordinates, got ${Vn(e)}`)}function Ar(e,t){return Yt(e)&&e.kind==="stopwatch"?e:pt(t,`expected a stopwatch, got ${Vn(e)}`)}function Ze(e,t){return Yt(e)&&e.kind==="wobject"?e.id:typeof e=="number"&&e!==0?e:pt(t,`expected a world object, got ${Vn(e)}`)}const Xt=e=>e===null||e===0||e==="";function ki(e){return{kind:"wobject",id:e.id,name:e.name,objectClass:e.objectClass,templateType:e.templateType??0}}const yt=e=>({kind:"list",items:e});function Cs(e){const t=e.host;if(!t.objects&&!t.inventory)throw new ii(`unsupported function ${e.name}`,e.pos);return[...t.objects?.()??[],...t.inventory?.()??[]]}const us=e=>se(e,"objects")(),hn=e=>se(e,"inventory")();function ti(e,t){const n=e.host;if(n.objectById)return n.objectById(t);const i=n.player?.();if(i&&i.id===t)return i;if(!n.objects&&!n.inventory&&!n.player)throw new ii(`unsupported function ${e.name}`,e.pos);return(n.objects?.()??[]).find(s=>s.id===t)??(n.inventory?.()??[]).find(s=>s.id===t)??null}function ca(e,t){return ti(t,Ze(e,t))??pt(t,`object ${Ze(e,t)} is not valid`)}function vo(e){return e.host.playerCoords?e.host.playerCoords():se(e,"player")().coords??pt(e,"player position unknown")}function Ju(e,t){return Math.hypot(e.ns-t.ns,e.ew-t.ew,e.z-t.z)*240}function ws(e,t){const n=vo(e),i=e.host.player?.().id;let s=null,a=1/0;for(const r of us(e)){if(!r.coords||r.id===i||!t(r))continue;const o=Ju(n,r.coords);o<a&&(a=o,s=r)}return s?ki(s):null}const Tr=(e,t)=>{const n=e.find(t);return n?ki(n):null},on=(e,t)=>yt(e.filter(t).map(ki)),Er=(e,t)=>e.filter(t).reduce((n,i)=>n+(i.stack??1),0);function Qu(e,t,n){const i=e.host.getVar(t,n);return i===void 0?0:i}function ua(e,t,n,i){const s=e.host,a=t.map((l,c)=>String(c+1)),r=a.map(l=>s.getVar("var",l)),o=ml(n);try{return i(()=>$t(o,s))}finally{a.forEach((l,c)=>r[c]===void 0?s.clearVar("var",l):s.setVar("var",l,r[c]))}}function ha(e,t){t.forEach((n,i)=>e.host.setVar("var",String(i+1),n))}function hs(e,t,n){const i=t<0?e.items.length+t:t;return(i<0||i>=e.items.length)&&pt(n,`index ${t} out of range (count ${e.items.length})`),i}function Rr(e,t){return{[`test${t}`]:{min:1,max:1,fn:(n,i)=>Ce(i.host.getVar(e,_e(n[0]))!==void 0)},[`get${t}`]:{min:1,max:1,fn:(n,i)=>Qu(i,e,_e(n[0]))},[`set${t}`]:{min:2,max:2,fn:(n,i)=>(i.host.setVar(e,_e(n[0]),n[1]),n[1])},[`clear${t}`]:{min:1,max:1,fn:(n,i)=>Ce(i.host.clearVar(e,_e(n[0])))},[`touch${t}`]:{min:1,max:1,fn:(n,i)=>{const s=_e(n[0]);return i.host.getVar(e,s)!==void 0?1:(i.host.setVar(e,s,0),0)}},[`clearall${t}s`]:{min:0,max:0,fn:(n,i)=>(i.host.clearAllVars(e),1)}}}const Ls=e=>(t,n)=>se(n,"charProp")(e,ye(t[0],n))??(e==="string"?"":0),fa=e=>(t,n)=>se(n,"objectProp")(Ze(t[0],n),e,ye(t[1],n))??(e==="string"?"":0),tc=new WeakMap;function nc(e){let t=tc.get(e);return t||(t={next:1,live:new Set},tc.set(e,t)),t}const sd=[[4194304,"Missile"],[16777216,"Wand"],[1048576,"Melee"],[33554432,"Melee"]];function ic(e,t,n){const i=se(t,"containerCapacity"),s=e.length&&!Xt(e[0])?Ze(e[0],t):se(t,"player")().id,a=i(s);if(!a)return-1;const r=l=>l.objectClass===10||l.objectClass===38,o=hn(t).filter(l=>l.containerId===s&&!l.equipMask&&r(l)===n).length;return Math.max(0,(n?a.containers:a.items)-o)}function sc(e,t,n){const i=new Date(e.host.wallClock?.()??Date.now());try{return Jf(i,t.length?_e(t[0]):"hh:mm:ss tt",n)}catch(s){return e.host.echo(s.message),""}}function ju(e){return[...se(e,"characterNames")()].sort((t,n)=>t.toLowerCase().localeCompare(n.toLowerCase()))}function ad(e,t){const n=ju(e);if(!n.length)return null;const i=typeof t=="number"?t:Pi(_e(t));if(i===null){const a=_e(t).trim().toLowerCase();return n.find(r=>r.toLowerCase()===a)??null}const s=n.findIndex(a=>a.toLowerCase()===(e.host.player?.().name??"").toLowerCase());return n[Xs((s<0?0:s)+Math.trunc(i),n.length)]}function ln(e){return se(e,"fellowship")()}function ac(e){return e.host.player?.().id}function da(e,t){return se(t,"quest")(_e(e[0]))}function qn(e){return se(e,"gameTicks")()}const eh={...Rr("var","var"),...Rr("gvar","gvar"),...Rr("pvar","pvar"),getcharintprop:{min:1,max:1,fn:Ls("int")},getchardoubleprop:{min:1,max:1,fn:Ls("double")},getcharboolprop:{min:1,max:1,fn:Ls("bool")},getcharquadprop:{min:1,max:1,fn:Ls("quad")},getcharstringprop:{min:1,max:1,fn:Ls("string")},getcharvital_base:{min:1,max:1,fn:(e,t)=>se(t,"vital")(ye(e[0],t))?.base??0},getcharvital_current:{min:1,max:1,fn:(e,t)=>se(t,"vital")(ye(e[0],t))?.current??0},getcharvital_buffedmax:{min:1,max:1,fn:(e,t)=>se(t,"vital")(ye(e[0],t))?.buffedMax??0},getcharskill_base:{min:1,max:1,fn:(e,t)=>se(t,"skill")(ye(e[0],t))?.base??0},getcharskill_buffed:{min:1,max:1,fn:(e,t)=>se(t,"skill")(ye(e[0],t))?.buffed??0},getcharskill_traininglevel:{min:1,max:1,fn:(e,t)=>se(t,"skill")(ye(e[0],t))?.training??0},getcharattribute_base:{min:1,max:1,fn:(e,t)=>se(t,"attribute")(ye(e[0],t))?.base??0},getcharattribute_buffed:{min:1,max:1,fn:(e,t)=>se(t,"attribute")(ye(e[0],t))?.buffed??0},getcharburden:{min:0,max:0,fn:(e,t)=>se(t,"burden")()},vitae:{min:0,max:0,fn:(e,t)=>se(t,"vitae")()},getplayerlandcell:{min:0,max:0,fn:(e,t)=>se(t,"playerLandcell")()},getplayerlandblock:{min:0,max:0,fn:(e,t)=>(se(t,"playerLandcell")()&4294901760)>>>0},getplayercoordinates:{min:0,max:0,fn:(e,t)=>({...vo(t)})},wobjectgetplayer:{min:0,max:0,fn:(e,t)=>ki(se(t,"player")())},isportaling:{min:0,max:0,fn:(e,t)=>Ce(se(t,"isPortaling")())},getbusystate:{min:0,max:0,fn:(e,t)=>se(t,"busyState")()},getcombatstate:{min:0,max:0,fn:(e,t)=>se(t,"combatState")()},setcombatstate:{min:1,max:1,fn:(e,t)=>Ce(se(t,"setCombatState")(_e(e[0])))},getworldname:{min:0,max:0,fn:(e,t)=>se(t,"worldName")()},getisspellknown:{min:1,max:1,fn:(e,t)=>Ce(se(t,"spellKnown")(ye(e[0],t)))},getcancastspell_hunt:{min:1,max:1,fn:(e,t)=>Ce(se(t,"canCastSpell")(ye(e[0],t),"hunt"))},getcancastspell_buff:{min:1,max:1,fn:(e,t)=>Ce(se(t,"canCastSpell")(ye(e[0],t),"buff"))},actiontryequipanywand:{min:0,max:0,fn:(e,t)=>Ce(se(t,"equipAnyWand")())},actiontrycastbyid:{min:1,max:1,fn:(e,t)=>Ce(se(t,"castSpell")(ye(e[0],t)))},actiontrycastbyidontarget:{min:2,max:2,fn:(e,t)=>{const n=se(t,"castSpell");return Xt(e[1])?0:Ce(n(ye(e[0],t),Ze(e[1],t)))}},spellname:{min:1,max:1,fn:(e,t)=>se(t,"spellName")(ye(e[0],t))},componentname:{min:1,max:1,fn:(e,t)=>se(t,"componentName")(ye(e[0],t))},getknownspells:{min:0,max:0,fn:(e,t)=>yt(se(t,"knownSpells")())},getspellexpiration:{min:1,max:1,fn:(e,t)=>se(t,"spellExpiration")(ye(e[0],t))},getspellexpirationbyname:{min:1,max:1,fn:(e,t)=>se(t,"spellExpirationByName")(_e(e[0]))},wobjectfindininventorybytemplatetype:{min:1,max:1,fn:(e,t)=>{const n=ye(e[0],t);return Tr(hn(t),i=>i.templateType===n)}},wobjectfindininventorybyname:{min:1,max:1,fn:(e,t)=>{const n=_e(e[0]);return Tr(hn(t),i=>i.name===n)}},wobjectfindininventorybynamerx:{min:1,max:1,fn:(e,t)=>{const n=vi(_e(e[0]),t.pos);return Tr(hn(t),i=>n.test(i.name))}},getitemcountininventorybyname:{min:1,max:1,fn:(e,t)=>{const n=_e(e[0]);return Er(hn(t),i=>i.name===n)}},getitemcountininventorybynamerx:{min:1,max:1,fn:(e,t)=>{const n=vi(_e(e[0]),t.pos);return Er(hn(t),i=>n.test(i.name))}},getinventorycountbytemplatetype:{min:1,max:1,fn:(e,t)=>{const n=ye(e[0],t);return Er(hn(t),i=>i.templateType===n)}},getcontaineritemcount:{min:0,max:1,fn:(e,t)=>{const n=e.length?Ze(e[0],t):se(t,"player")().id;return hn(t).filter(i=>i.containerId===n).length}},coordinategetns:{min:1,max:1,fn:(e,t)=>fi(e[0],t).ns},coordinategetwe:{min:1,max:1,fn:(e,t)=>fi(e[0],t).ew},coordinategetz:{min:1,max:1,fn:(e,t)=>fi(e[0],t).z},coordinatetostring:{min:1,max:1,fn:(e,t)=>qu(fi(e[0],t))},coordinateparse:{min:1,max:1,fn:e=>od(_e(e[0]))},coordinatedistancewithz:{min:2,max:2,fn:(e,t)=>Ju(fi(e[0],t),fi(e[1],t))},coordinatedistanceflat:{min:2,max:2,fn:(e,t)=>{const n=fi(e[0],t),i=fi(e[1],t);return Math.hypot(n.ns-i.ns,n.ew-i.ew)*240}},wobjectgetphysicscoordinates:{min:1,max:1,fn:(e,t)=>{const n=ca(e[0],t);return n.coords?{...n.coords}:null}},getheadingto:{min:1,max:1,fn:(e,t)=>{const n=ca(e[0],t).coords??pt(t,"object has no position"),i=vo(t);return Xs(Math.atan2(n.ew-i.ew,n.ns-i.ns)*180/Math.PI,360)}},getheading:{min:1,max:1,fn:(e,t)=>ca(e[0],t).heading??pt(t,"heading unknown")},wobjectgetselection:{min:0,max:0,fn:(e,t)=>{const n=se(t,"selectionId")(),i=n?ti(t,n):null;return i?ki(i):null}},wobjectgetopencontainer:{min:0,max:0,fn:(e,t)=>{const n=se(t,"openContainerId")(),i=n?ti(t,n):null;return i?ki(i):null}},wobjectgetname:{min:1,max:1,fn:(e,t)=>{const n=e[0];return ti(t,Ze(n,t))?.name??(Yt(n)&&n.kind==="wobject"?n.name:"")}},wobjectgetobjectclass:{min:1,max:1,fn:(e,t)=>{const n=e[0];return ti(t,Ze(n,t))?.objectClass??(Yt(n)&&n.kind==="wobject"?n.objectClass:0)}},wobjectgettemplatetype:{min:1,max:1,fn:(e,t)=>{const n=e[0];return ti(t,Ze(n,t))?.templateType??(Yt(n)&&n.kind==="wobject"?n.templateType:0)}},wobjectgetid:{min:1,max:1,fn:(e,t)=>Ze(e[0],t)},wobjectisvalid:{min:1,max:1,fn:(e,t)=>{const n=e[0];return Yt(n)&&n.kind==="wobject"?Ce(ti(t,n.id)!==null):0}},wobjectfindbyid:{min:1,max:1,fn:(e,t)=>{const n=ti(t,ye(e[0],t));return n?ki(n):null}},wobjectgetisdooropen:{min:1,max:1,fn:(e,t)=>Ce(ca(e[0],t).isDoorOpen===!0)},wobjectfindnearestmonster:{min:0,max:0,fn:(e,t)=>ws(t,n=>n.objectClass===5)},wobjectfindnearestdoor:{min:0,max:0,fn:(e,t)=>ws(t,n=>n.objectClass===26)},wobjectfindnearestbyobjectclass:{min:1,max:1,fn:(e,t)=>{const n=ye(e[0],t);return ws(t,i=>i.objectClass===n)}},wobjectfindnearestbytemplatetype:{min:1,max:1,fn:(e,t)=>{const n=ye(e[0],t);return ws(t,i=>i.templateType===n)}},wobjectfindnearestbynameandobjectclass:{min:2,max:2,fn:(e,t)=>{const n=ye(e[0],t),i=vi(_e(e[1]),t.pos);return ws(t,s=>s.objectClass===n&&i.test(s.name))}},wobjectgetintprop:{min:2,max:2,fn:fa("int")},wobjectgetdoubleprop:{min:2,max:2,fn:fa("double")},wobjectgetboolprop:{min:2,max:2,fn:fa("bool")},wobjectgetstringprop:{min:2,max:2,fn:fa("string")},wobjectgethealth:{min:1,max:1,fn:(e,t)=>se(t,"objectHealth")(Ze(e[0],t))},wobjecthasdata:{min:1,max:1,fn:(e,t)=>Ce(se(t,"objectHasData")(Ze(e[0],t)))},wobjectrequestdata:{min:1,max:1,fn:(e,t)=>(se(t,"requestObjectData")(Ze(e[0],t)),1)},wobjectlastidtime:{min:1,max:1,fn:(e,t)=>se(t,"objectLastIdTime")(Ze(e[0],t))},wobjectgetspellids:{min:1,max:1,fn:(e,t)=>yt(se(t,"objectSpellIds")(Ze(e[0],t),!1))},wobjectgetactivespellids:{min:1,max:1,fn:(e,t)=>yt(se(t,"objectSpellIds")(Ze(e[0],t),!0))},wobjectfindall:{min:0,max:0,fn:(e,t)=>on(Cs(t),()=>!0)},wobjectfindallinventory:{min:0,max:0,fn:(e,t)=>on(hn(t),()=>!0)},wobjectfindalllandscape:{min:0,max:0,fn:(e,t)=>on(us(t),()=>!0)},wobjectfindallbyobjectclass:{min:1,max:1,fn:(e,t)=>{const n=ye(e[0],t);return on(Cs(t),i=>i.objectClass===n)}},wobjectfindallinventorybyobjectclass:{min:1,max:1,fn:(e,t)=>{const n=ye(e[0],t);return on(hn(t),i=>i.objectClass===n)}},wobjectfindalllandscapebyobjectclass:{min:1,max:1,fn:(e,t)=>{const n=ye(e[0],t);return on(us(t),i=>i.objectClass===n)}},wobjectfindallbytemplatetype:{min:1,max:1,fn:(e,t)=>{const n=ye(e[0],t);return on(Cs(t),i=>i.templateType===n)}},wobjectfindallinventorybytemplatetype:{min:1,max:1,fn:(e,t)=>{const n=ye(e[0],t);return on(hn(t),i=>i.templateType===n)}},wobjectfindalllandscapebytemplatetype:{min:1,max:1,fn:(e,t)=>{const n=ye(e[0],t);return on(us(t),i=>i.templateType===n)}},wobjectfindallbynamerx:{min:1,max:1,fn:(e,t)=>{const n=vi(_e(e[0]),t.pos);return on(Cs(t),i=>n.test(i.name))}},wobjectfindallinventorybynamerx:{min:1,max:1,fn:(e,t)=>{const n=vi(_e(e[0]),t.pos);return on(hn(t),i=>n.test(i.name))}},wobjectfindalllandscapebynamerx:{min:1,max:1,fn:(e,t)=>{const n=vi(_e(e[0]),t.pos);return on(us(t),i=>n.test(i.name))}},wobjectfindallbycontainer:{min:1,max:1,fn:(e,t)=>{const n=Ze(e[0],t);return on(Cs(t),i=>i.containerId===n)}},getobjectinternaltype:{min:1,max:1,fn:e=>ld(e[0])},wobjectgetinternaltype:{min:1,max:1,fn:(e,t)=>Xt(e[0])?0:ti(t,Ze(e[0],t))?.itemType??0},wobjectgethealthvalue:{min:1,max:1,fn:(e,t)=>se(t,"objectVital")(Ze(e[0],t),1)??0},wobjectgetstaminavalue:{min:1,max:1,fn:(e,t)=>se(t,"objectVital")(Ze(e[0],t),2)??0},wobjectgetmanavalue:{min:1,max:1,fn:(e,t)=>se(t,"objectVital")(Ze(e[0],t),3)??0},getfreeitemslots:{min:0,max:1,fn:(e,t)=>ic(e,t,!1)},getfreecontainerslots:{min:0,max:1,fn:(e,t)=>ic(e,t,!0)},getequippedweapontype:{min:0,max:0,fn:(e,t)=>{const n=hn(t).filter(i=>i.equipMask);for(const[i,s]of sd)if(n.some(a=>((a.equipMask??0)&i)!==0))return s;return"None"}},getcooldownexpiration:{min:1,max:1,fn:(e,t)=>se(t,"cooldownRemaining")(ye(e[0],t))},getcorpsesunopenedbyme:{min:0,max:0,fn:(e,t)=>{const n=se(t,"corpseOpenedByMe");return yt(us(t).filter(i=>i.objectClass===27&&!n(i.id)).map(i=>i.id))}},hascorpsebeenopenedbyme:{min:1,max:1,fn:(e,t)=>{const n=se(t,"corpseOpenedByMe");return Xt(e[0])?0:Ce(n(Ze(e[0],t)))}},actiontryselect:{min:1,max:1,fn:(e,t)=>{const n=se(t,"select");return Xt(e[0])?0:Ce(n(Ze(e[0],t)))}},actiontryuseitem:{min:1,max:1,fn:(e,t)=>{const n=se(t,"useItem");return Xt(e[0])?0:Ce(n(Ze(e[0],t)))}},actiontryapplyitem:{min:2,max:2,fn:(e,t)=>{const n=se(t,"applyItem");return Xt(e[0])||Xt(e[1])?0:Ce(n(Ze(e[0],t),Ze(e[1],t)))}},actiontrygiveitem:{min:2,max:2,fn:(e,t)=>{const n=se(t,"giveItem");return Xt(e[0])||Xt(e[1])?0:Ce(n(Ze(e[0],t),Ze(e[1],t)))}},actiontrygiveprofile:{min:2,max:2,fn:(e,t)=>{const n=se(t,"giveProfile");return Xt(e[1])?0:Ce(n(_e(e[0]),Ze(e[1],t)))}},setmotion:{min:2,max:2,fn:(e,t)=>(se(t,"setMotion")(_e(e[0]),tn(e[1])),1)},getmotion:{min:1,max:1,fn:(e,t)=>Ce(se(t,"getMotion")(_e(e[0])))},clearmotion:{min:0,max:0,fn:(e,t)=>(se(t,"clearMotion")(),1)},actiontrydrop:{min:1,max:1,fn:(e,t)=>{const n=se(t,"dropItem");return Xt(e[0])?0:Ce(n(Ze(e[0],t)))}},actiontrymove:{min:2,max:4,fn:(e,t)=>{const n=se(t,"moveItem");return Xt(e[0])||Xt(e[1])?0:Ce(n(Ze(e[0],t),Ze(e[1],t),e.length>2?ye(e[2],t):0,null,e.length<4||tn(e[3])))}},actiontrysplit:{min:2,max:5,fn:(e,t)=>{const n=se(t,"moveItem");if(Xt(e[0]))return 0;const i=Ze(e[0],t),s=ye(e[1],t),a=e.length>2&&!Xt(e[2])?Ze(e[2],t):se(t,"player")().id;return(t.host.busyState?.()??0)!==0?0:(t.host.select?.(i),n(i,a,e.length>3?ye(e[3],t):0,s,e.length>4&&tn(e[4])),1)}},chatbox:{min:1,max:1,fn:(e,t)=>{const n=_e(e[0]);return se(t,"chatbox")(n),n}},chatboxpaste:{min:1,max:1,fn:(e,t)=>{const n=_e(e[0]);return se(t,"chatboxPaste")(n),n}},echo:{min:1,max:2,fn:(e,t)=>{const n=_e(e[0]);return t.host.echo(n,e.length>1?ye(e[1],t):void 0),n}},statushud:{min:2,max:2,fn:(e,t)=>(se(t,"statusHud")(_e(e[0]),_e(e[1])),1)},statushudcolored:{min:3,max:3,fn:(e,t)=>(se(t,"statusHud")(_e(e[0]),_e(e[1]),ye(e[2],t)),1)},uigetcontrol:{min:2,max:2,fn:(e,t)=>{const n=_e(e[0]),i=_e(e[1]);return se(t,"viewControl")(n,i)?{kind:"viewcontrol",view:n,control:i}:null}},uisetlabel:{min:2,max:2,fn:(e,t)=>{const n=e[0];return!Yt(n)||n.kind!=="viewcontrol"?pt(t,"expects a view control (uigetcontrol[window, control])"):Ce(se(t,"setViewLabel")(n.view,n.control,_e(e[1])))}},uisetvisible:{min:2,max:2,fn:(e,t)=>{const n=e[0];return!Yt(n)||n.kind!=="viewcontrol"?pt(t,"expects a view control (uigetcontrol[window, control])"):(se(t,"setViewVisible")(n.view,n.control,tn(e[1])),e[1])}},uiviewvisible:{min:1,max:1,fn:(e,t)=>Ce(se(t,"viewVisible")(_e(e[0])))},uiviewexists:{min:1,max:1,fn:(e,t)=>Ce(se(t,"viewExists")(_e(e[0])))},xpreset:{min:0,max:0,fn:(e,t)=>(se(t,"xpReset")(),1)},xpmeter:{min:0,max:0,fn:(e,t)=>Qf(se(t,"xpMeter")())},xpduration:{min:0,max:0,fn:(e,t)=>se(t,"xpMeter")().seconds},xptotal:{min:0,max:0,fn:(e,t)=>se(t,"xpMeter")().xp},xpavg:{min:0,max:0,fn:(e,t)=>{const n=se(t,"xpMeter")();return n.seconds>0?n.xp*3600/n.seconds:0}},lumtotal:{min:0,max:0,fn:(e,t)=>se(t,"xpMeter")().lum},lumavg:{min:0,max:0,fn:(e,t)=>{const n=se(t,"xpMeter")();return n.seconds>0?n.lum*3600/n.seconds:0}},getcharacterindex:{min:1,max:1,fn:(e,t)=>{const n=(_e(e[0]).trim()||(t.host.player?.().name??"")).toLowerCase();return ju(t).findIndex(i=>i.toLowerCase()===n)}},setnextlogin:{min:1,max:1,fn:(e,t)=>{const n=se(t,"setNextLogin"),i=ad(t,e[0]);return i?Ce(n(i)):0}},clearnextlogin:{min:0,max:0,fn:(e,t)=>Ce(se(t,"setNextLogin")(null))},iif:{min:3,max:3,fn:e=>tn(e[0])?e[1]:e[2]},istrue:{min:1,max:1,fn:e=>Ce(tn(e[0]))},isfalse:{min:1,max:1,fn:e=>Ce(!tn(e[0]))},ifthen:{min:2,max:3,fn:(e,t)=>{const n=tn(e[0])?e[1]:e.length>2?e[2]:null;return n===null?0:Cr(_e(n),t.host)}},exec:{min:1,max:1,fn:(e,t)=>Cr(_e(e[0]),t.host)},delayexec:{min:2,max:2,fn:(e,t)=>{const n=_e(e[1]);ml(n);const i=se(t,"schedule"),s=nc(t.host),a=s.next++;return s.live.add(a),i(Math.max(0,xt(e[0],t)),()=>{s.live.delete(a)&&Cr(n,t.host)}),a}},clearexec:{min:1,max:1,fn:(e,t)=>Ce(nc(t.host).live.delete(ye(e[0],t)))},randint:{min:2,max:2,fn:(e,t)=>{const n=ye(e[0],t),i=ye(e[1],t),s=t.host.random?.()??Math.random();return i<=n?n:n+Math.floor(s*(i-n))}},round:{min:1,max:1,fn:(e,t)=>Kf(xt(e[0],t))},floor:{min:1,max:1,fn:(e,t)=>Math.floor(xt(e[0],t))},ceiling:{min:1,max:1,fn:(e,t)=>Math.ceil(xt(e[0],t))},abs:{min:1,max:1,fn:(e,t)=>Math.abs(xt(e[0],t))},sqrt:{min:1,max:1,fn:(e,t)=>Math.sqrt(xt(e[0],t))},sin:{min:1,max:1,fn:(e,t)=>Math.sin(xt(e[0],t))},cos:{min:1,max:1,fn:(e,t)=>Math.cos(xt(e[0],t))},tan:{min:1,max:1,fn:(e,t)=>Math.tan(xt(e[0],t))},asin:{min:1,max:1,fn:(e,t)=>Math.asin(xt(e[0],t))},acos:{min:1,max:1,fn:(e,t)=>Math.acos(xt(e[0],t))},atan:{min:1,max:1,fn:(e,t)=>Math.atan(xt(e[0],t))},atan2:{min:2,max:2,fn:(e,t)=>Math.atan2(xt(e[0],t),xt(e[1],t))},sinh:{min:1,max:1,fn:(e,t)=>Math.sinh(xt(e[0],t))},cosh:{min:1,max:1,fn:(e,t)=>Math.cosh(xt(e[0],t))},tanh:{min:1,max:1,fn:(e,t)=>Math.tanh(xt(e[0],t))},cstr:{min:1,max:1,fn:e=>_e(e[0])},tostring:{min:1,max:1,fn:e=>_e(e[0])},cstrf:{min:2,max:2,fn:(e,t)=>Ku(xt(e[0],t),_e(e[1]))},cnumber:{min:1,max:1,fn:e=>typeof e[0]=="number"?e[0]:Pi(_e(e[0]))??0},strlen:{min:1,max:1,fn:e=>_e(e[0]).length},getregexmatch:{min:2,max:2,fn:(e,t)=>vi(_e(e[1]),t.pos).exec(_e(e[0]))?.[0]??""},hexstr:{min:1,max:1,fn:(e,t)=>`0x${(ye(e[0],t)>>>0).toString(16).toUpperCase()}`},chr:{min:1,max:1,fn:(e,t)=>String.fromCharCode(ye(e[0],t))},ord:{min:1,max:1,fn:(e,t)=>{const n=_e(e[0]);return n.length?n.charCodeAt(0):pt(t,"empty string")}},stopwatchcreate:{min:0,max:0,fn:()=>({kind:"stopwatch",startedAt:null,accumulatedMs:0})},stopwatchstart:{min:1,max:1,fn:(e,t)=>{const n=Ar(e[0],t);return n.startedAt===null&&(n.startedAt=t.host.now()),n}},stopwatchstop:{min:1,max:1,fn:(e,t)=>{const n=Ar(e[0],t);return n.startedAt!==null&&(n.accumulatedMs+=t.host.now()-n.startedAt,n.startedAt=null),n}},stopwatchelapsedseconds:{min:1,max:1,fn:(e,t)=>{const n=Ar(e[0],t);return(n.accumulatedMs+(n.startedAt===null?0:t.host.now()-n.startedAt))/1e3}},getunixtime:{min:0,max:0,fn:(e,t)=>(t.host.wallClock?.()??Date.now())/1e3},getdatetimelocal:{min:0,max:1,fn:(e,t)=>sc(t,e,!1)},getdatetimeutc:{min:0,max:1,fn:(e,t)=>sc(t,e,!0)},getgameticks:{min:0,max:0,fn:(e,t)=>qn(t)},getgameyear:{min:0,max:0,fn:(e,t)=>ei(qn(t)).year},getgamemonth:{min:0,max:0,fn:(e,t)=>ei(qn(t)).month},getgameday:{min:0,max:0,fn:(e,t)=>ei(qn(t)).day},getgamehour:{min:0,max:0,fn:(e,t)=>ei(qn(t)).hour},getgamehourname:{min:1,max:1,fn:(e,t)=>ed[ye(e[0],t)-1]??pt(t,"hour must be 1..16")},getgamemonthname:{min:1,max:1,fn:(e,t)=>td[ye(e[0],t)-1]??pt(t,"month must be 1..12")},getisday:{min:0,max:0,fn:(e,t)=>{const n=ei(qn(t)).hour;return Ce(n>=5&&n<=12)}},getisnight:{min:0,max:0,fn:(e,t)=>{const n=ei(qn(t)).hour;return Ce(n<5||n>12)}},getminutesuntilday:{min:0,max:0,fn:(e,t)=>{const n=qn(t),i=ei(n).hour;return i>=5&&i<=12?0:ec(n,nd)}},getminutesuntilnight:{min:0,max:0,fn:(e,t)=>{const n=qn(t),i=ei(n).hour;return i<5||i>12?0:ec(n,id)}},vtgetsetting:{min:1,max:1,fn:(e,t)=>se(t,"vtGetSetting")(_e(e[0]))},vtsetsetting:{min:2,max:2,fn:(e,t)=>Ce(se(t,"vtSetSetting")(_e(e[0]),_e(e[1])))},uboptget:{min:1,max:1,fn:(e,t)=>se(t,"ubGetOption")(_e(e[0]))},uboptset:{min:2,max:2,fn:(e,t)=>Ce(se(t,"ubSetOption")(_e(e[0]),e[1]))},vtgetmetastate:{min:0,max:0,fn:(e,t)=>se(t,"getMetaState")()},vtsetmetastate:{min:1,max:1,fn:(e,t)=>(se(t,"setMetaState")(_e(e[0])),1)},vtgetmeta:{min:0,max:0,fn:(e,t)=>se(t,"metaName")()},vtmacroenabled:{min:0,max:0,fn:(e,t)=>Ce(se(t,"macroEnabled")())},getfellowshipstatus:{min:0,max:0,fn:(e,t)=>Ce(ln(t)!==null)},getfellowshipname:{min:0,max:0,fn:(e,t)=>ln(t)?.name??""},getfellowshipcount:{min:0,max:0,fn:(e,t)=>ln(t)?.members.length??0},getfellownames:{min:0,max:0,fn:(e,t)=>yt((ln(t)?.members??[]).map(n=>n.name))},getfellowids:{min:0,max:0,fn:(e,t)=>yt((ln(t)?.members??[]).map(n=>n.id))},getfellowname:{min:1,max:1,fn:(e,t)=>{const n=ln(t)?.members??[];return n[hs(yt(n.map(i=>i.name)),ye(e[0],t),t)].name}},getfellowid:{min:1,max:1,fn:(e,t)=>{const n=ln(t)?.members??[];return n[hs(yt(n.map(i=>i.id)),ye(e[0],t),t)].id}},getfellowshipleaderid:{min:0,max:0,fn:(e,t)=>ln(t)?.leaderId??0},getfellowshipisleader:{min:0,max:0,fn:(e,t)=>{const n=ln(t);return Ce(n!==null&&n.leaderId!==void 0&&n.leaderId===ac(t))}},getfellowshipisopen:{min:0,max:0,fn:(e,t)=>Ce(ln(t)?.open===!0)},getfellowshiplocked:{min:0,max:0,fn:(e,t)=>Ce(ln(t)?.locked===!0)},getfellowshipisfull:{min:0,max:0,fn:(e,t)=>Ce((ln(t)?.members.length??0)>=9)},getfellowshipcanrecruit:{min:0,max:0,fn:(e,t)=>{const n=ln(t);return Ce(n!==null&&n.members.length<9&&(n.open===!0||n.leaderId!==void 0&&n.leaderId===ac(t)))}},getqueststatus:{min:1,max:1,fn:(e,t)=>{const n=da(e,t);return Ce(n===null||n.ready)}},testquestflag:{min:1,max:1,fn:(e,t)=>Ce(da(e,t)!==null)},getquestktprogress:{min:1,max:1,fn:(e,t)=>da(e,t)?.solves??0},getquestktrequired:{min:1,max:1,fn:(e,t)=>da(e,t)?.maxSolves??0},isrefreshingquests:{min:0,max:0,fn:(e,t)=>Ce(se(t,"isRefreshingQuests")())},listcreate:{min:0,max:1/0,fn:e=>yt([...e])},listadd:{min:2,max:2,fn:(e,t)=>{const n=kt(e[0],t);return n.items.push(e[1]),n}},listinsert:{min:3,max:3,fn:(e,t)=>{const n=kt(e[0],t),i=ye(e[2],t);return(i<0||i>n.items.length)&&pt(t,`index ${i} out of range`),n.items.splice(i,0,e[1]),n}},listremove:{min:2,max:2,fn:(e,t)=>{const n=kt(e[0],t),i=n.items.findIndex(s=>fs(s,e[1]));return i>=0&&n.items.splice(i,1),n}},listremoveat:{min:2,max:2,fn:(e,t)=>{const n=kt(e[0],t);return n.items.splice(hs(n,ye(e[1],t),t),1),n}},listpop:{min:1,max:2,fn:(e,t)=>{const n=kt(e[0],t);n.items.length||pt(t,"list is empty");const i=hs(n,e.length>1?ye(e[1],t):-1,t);return n.items.splice(i,1)[0]}},listgetitem:{min:2,max:2,fn:(e,t)=>{const n=kt(e[0],t);return n.items[hs(n,ye(e[1],t),t)]}},listcontains:{min:2,max:2,fn:(e,t)=>Ce(kt(e[0],t).items.some(n=>fs(n,e[1])))},listindexof:{min:2,max:2,fn:(e,t)=>kt(e[0],t).items.findIndex(n=>fs(n,e[1]))},listlastindexof:{min:2,max:2,fn:(e,t)=>{const n=kt(e[0],t).items;for(let i=n.length-1;i>=0;i--)if(fs(n[i],e[1]))return i;return-1}},listcount:{min:1,max:1,fn:(e,t)=>kt(e[0],t).items.length},listclear:{min:1,max:1,fn:(e,t)=>{const n=kt(e[0],t);return n.items.length=0,n}},listcopy:{min:1,max:1,fn:(e,t)=>yt([...kt(e[0],t).items])},listreverse:{min:1,max:1,fn:(e,t)=>yt([...kt(e[0],t).items].reverse())},listfromrange:{min:2,max:2,fn:(e,t)=>{const n=ye(e[0],t),i=ye(e[1],t),s=[],a=i>=n?1:-1;for(let r=n;a>0?r<=i:r>=i;r+=a)s.push(r);return yt(s)}},listfilter:{min:2,max:2,fn:(e,t)=>{const n=kt(e[0],t);return ua(t,[0],_e(e[1]),i=>yt(n.items.filter(s=>(ha(t,[s]),tn(i())))))}},listmap:{min:2,max:2,fn:(e,t)=>{const n=kt(e[0],t);return ua(t,[0],_e(e[1]),i=>yt(n.items.map(s=>(ha(t,[s]),i()))))}},listreduce:{min:2,max:2,fn:(e,t)=>{const n=kt(e[0],t);return ua(t,[0,0],_e(e[1]),i=>n.items.reduce((s,a)=>(ha(t,[a,s]),i()),0))}},listsort:{min:2,max:2,fn:(e,t)=>{const n=kt(e[0],t);return ua(t,[0,0],_e(e[1]),i=>yt([...n.items].sort((s,a)=>(ha(t,[s,a]),xt(i(),t)))))}},dictcreate:{min:0,max:1/0,fn:(e,t)=>{e.length%2&&pt(t,"needs key,value pairs");const n=new Map;for(let i=0;i<e.length;i+=2)n.set(_e(e[i]),e[i+1]);return{kind:"dict",map:n}}},dictgetitem:{min:2,max:2,fn:(e,t)=>{const n=Yn(e[0],t).map.get(_e(e[1]));return n===void 0?0:n}},dicthaskey:{min:2,max:2,fn:(e,t)=>Ce(Yn(e[0],t).map.has(_e(e[1])))},dictadditem:{min:3,max:3,fn:(e,t)=>{const n=Yn(e[0],t);return n.map.set(_e(e[1]),e[2]),n}},dictremovekey:{min:2,max:2,fn:(e,t)=>Ce(Yn(e[0],t).map.delete(_e(e[1])))},dictkeys:{min:1,max:1,fn:(e,t)=>yt([...Yn(e[0],t).map.keys()])},dictvalues:{min:1,max:1,fn:(e,t)=>yt([...Yn(e[0],t).map.values()])},dictsize:{min:1,max:1,fn:(e,t)=>Yn(e[0],t).map.size},dictclear:{min:1,max:1,fn:(e,t)=>{const n=Yn(e[0],t);return n.map.clear(),n}},dictcopy:{min:1,max:1,fn:(e,t)=>({kind:"dict",map:new Map(Yn(e[0],t).map)})}},rd=["ustadd","ustopen","ustsalvage","netclients","getaccounthash","spelldata","componentdata"];Object.keys(eh).sort();function od(e){const t=/^\s*(\d+(?:\.\d+)?)\s*([NnSs])[\s,]+(\d+(?:\.\d+)?)\s*([EeWw])(?:[\s,]+(-?\d+(?:\.\d+)?)\s*[Zz])?\s*$/.exec(e);if(!t)return null;const n=Number(t[1])*(/[Ss]/.test(t[2])?-1:1),i=Number(t[3])*(/[Ww]/.test(t[4])?-1:1);return{kind:"coords",ns:n,ew:i,z:t[5]?Number(t[5]):0}}function ld(e){return e===null?0:typeof e=="number"?1:typeof e=="string"?3:7}function cd(e,t,n,i){if(e==="+"&&(typeof t=="string"||typeof n=="string"))return _e(t)+_e(n);const s=xt(t,i),a=xt(n,i);if((e==="&"||e==="|")&&!(Number.isFinite(s)&&Number.isFinite(a)))return pt(i,"bitwise operands must be finite numbers");switch(e){case"+":return s+a;case"-":return s-a;case"*":return s*a;case"/":return s/a;case"%":return s%a;case"^":return s**a;case"&":return Number(BigInt.asIntN(64,BigInt(Math.trunc(s))&BigInt(Math.trunc(a))));case"|":return Number(BigInt.asIntN(64,BigInt(Math.trunc(s))|BigInt(Math.trunc(a))));default:return pt(i,`bad operator ${e}`)}}function ma(e,t,n){const i=typeof e=="number"?e:typeof e=="string"?Pi(e):null,s=typeof t=="number"?t:typeof t=="string"?Pi(t):null;return i!==null&&s!==null?i-s:typeof e=="string"&&typeof t=="string"?e<t?-1:e>t?1:0:pt(n,`can't compare ${Vn(e)} with ${Vn(t)}`)}function ud(e,t,n){if(Yt(e)&&e.kind==="dict"){const i=e.map.get(_e(t));return i===void 0?0:i}if(Yt(e)&&e.kind==="list")return e.items[hs(e,ye(t,n),n)];if(typeof e=="string"){const i=ye(t,n),s=i<0?e.length+i:i;return(s<0||s>=e.length)&&pt(n,`index ${i} out of range (length ${e.length})`),e[s]}return pt(n,`can't index ${Vn(e)}`)}function hd(e,t,n,i){const s=typeof e=="string"?e.length:Yt(e)&&e.kind==="list"?e.items.length:pt(i,`can't slice ${Vn(e)}`),a=(l,c)=>{if(l===null)return c;const u=ye(l,i);return Math.max(0,Math.min(s,u<0?s+u:u))},r=a(t,0),o=a(n,s);return typeof e=="string"?e.slice(r,o):yt(e.items.slice(r,o))}function $t(e,t){const n={host:t,pos:e.pos,name:""};switch(e.type){case"num":return e.value;case"str":return e.value;case"var":return Qu(n,"var",e.name);case"seq":{let i=0;for(const s of e.items)i=$t(s,t);return i}case"unary":{const i=$t(e.arg,t);return e.op==="!"?Ce(!tn(i)):-xt(i,{...n,name:"-"})}case"index":return ud($t(e.target,t),$t(e.index,t),{...n,name:"{}"});case"slice":return hd($t(e.target,t),e.start?$t(e.start,t):null,e.end?$t(e.end,t):null,{...n,name:"{:}"});case"binary":{const i={...n,name:e.op};if(e.op==="&&")return Ce(tn($t(e.left,t))&&tn($t(e.right,t)));if(e.op==="||")return Ce(tn($t(e.left,t))||tn($t(e.right,t)));const s=$t(e.left,t),a=$t(e.right,t);switch(e.op){case"==":return Ce(fs(s,a));case"!=":return Ce(!fs(s,a));case"#":return Ce(vi(_e(a),e.pos).test(_e(s)));case"<":return Ce(ma(s,a,i)<0);case">":return Ce(ma(s,a,i)>0);case"<=":return Ce(ma(s,a,i)<=0);case">=":return Ce(ma(s,a,i)>=0);default:return cd(e.op,s,a,i)}}case"call":{const i=eh[e.name];if(!i)throw rd.includes(e.name)?new ii(`unsupported function ${e.name}`,e.pos):new ii(`unknown function ${e.name}`,e.pos);const s={host:t,pos:e.pos,name:e.name};if(e.args.length<i.min||e.args.length>i.max){const a=i.min===i.max?`${i.min}`:i.max===1/0?`at least ${i.min}`:`${i.min}-${i.max}`;throw new ii(`${e.name} takes ${a} argument${a==="1"?"":"s"}, got ${e.args.length}`,e.pos)}return i.fn(e.args.map(a=>$t(a,t)),s)}}}function Cr(e,t){return $t(ml(e),t)}const fd=[10,14,16,17,18,19,22,25,29,30,36,37,41,47,35,27,26,21,15,13,50,49,34,52,51];Object.freeze({default:"1-6, 7-8, 9, 10",materials:Object.freeze(Object.fromEntries(fd.map(e=>[String(e),"1-10"])))});Object.fromEntries(Object.entries(Yu).map(([e,t])=>[t.toLowerCase(),Number(e)]));Object.fromEntries(Object.entries(Hf).map(([e,t])=>[t.toLowerCase(),Number(e)]));Object.entries(Gf).map(([e,t])=>[t,Number(e)]);Object.fromEntries(Object.entries(Vf).filter(([,e])=>e.kind==="did").map(([e,t])=>[t.key,Number(e)]));Object.fromEntries(Object.entries(zf).filter(([,e])=>e.kind==="float").map(([e,t])=>[t.key,Number(e)]));const tr={Name:1,Title:5,Inscription:7,InscribedBy:8,FellowshipName:10,UsageInstructions:14,SimpleDescription:15,FullDescription:16,MonarchName:21,OnlyActivatedBy:25,Patron:35,PortalDestination:38,LastTinkeredBy:39,ImbuedBy:40,DateBorn:43,SecondaryName:184549376},$s={Species:2,Burden:5,EquippedSlots:10,RareId:17,Value:19,TotalValue:20,SkillCreditsAvail:24,CreatureLevel:25,RestrictedToToD:26,ArmorLevel:28,Rank:30,Bonded:33,NumberFollowers:35,Unenchantable:36,LockpickDifficulty:38,Deaths:43,WandElemDmgType:45,MinLevelRestrict:86,MaxLevelRestrict:87,LockpickSkillBonus:88,AffectsVitalId:89,AffectsVitalAmt:90,UsesTotal:91,UsesRemaining:92,DateOfBirth:98,Workmanship:105,Spellcraft:106,CurrentMana:107,MaximumMana:108,LoreRequirement:109,RankRequirement:110,PortalRestrictions:111,Gender:113,Attuned:114,SkillLevelReq:115,ManaCost:117,Age:125,XPForVPReduction:129,Material:131,WieldReqType:158,WieldReqAttribute:159,WieldReqValue:160,SlayerSpecies:166,CooldownSeconds:167,NumberItemsSalvagedFrom:170,NumberTimesTinkered:171,DescriptionFormat:172,PagesUsed:174,PagesTotal:175,ActivationReqSkillId:176,GemSettingQty:177,GemSettingType:178,Imbued:179,Heritage:188,FishingSkill:192,KeysHeld:193,ElementalDmgBonus:204,ArmorSetID:265,ItemMaxLevel:319,CloakChanceType:352,WeaponMasteryCategory:353,SummoningGemBuffedSkillReq:367,SummoningGemLevelReq:369,DamRating:370,DamResistRating:371,CritRating:372,CritResistRating:373,CritDamRating:374,CritDamResistRating:375,HealBoostRating:376,VitalityRating:379,Type:218103808,Icon:218103809,Container:218103810,Landblock:218103811,ItemSlots:218103812,PackSlots:218103813,StackCount:218103814,StackMax:218103815,AssociatedSpell:218103816,Slot:218103817,Wielder:218103818,WieldingSlot:218103819,Monarch:218103820,Coverage:218103821,EquipableSlots:218103822,EquipType:218103823,IconOutline:218103824,MissileType:218103825,UsageMask:218103826,HouseOwner:218103827,HookMask:218103828,HookType:218103829,Model:218103830,Flags:218103831,CreateFlags1:218103832,CreateFlags2:218103833,Category:218103834,Behavior:218103835,MagicDef:218103836,SpecialProps:218103837,SpellCount:218103838,WeapSpeed:218103839,EquipSkill:218103840,DamageType:218103841,MaxDamage:218103842,Unknown10:218103843,Unknown100000:218103844,Unknown800000:218103845,Unknown8000000:218103846,PhysicsDataFlags:218103847,ActiveSpellCount:218103848,IconOverlay:218103849,IconUnderlay:218103850},Ys={ManaRateOfChange:5,MeleeDefenseBonus:29,ManaTransferEfficiency:87,HealingKitRestoreBonus:100,ManaStoneChanceDestruct:137,ManaCBonus:144,MissileDBonus:149,MagicDBonus:150,ElementalDamageVersusMonsters:152,SlashProt:167772160,PierceProt:167772161,BludgeonProt:167772162,AcidProt:167772163,LightningProt:167772164,FireProt:167772165,ColdProt:167772166,Heading:167772167,ApproachDistance:167772168,SalvageWorkmanship:167772169,Scale:167772170,Variance:167772171,AttackBonus:167772172,Range:167772173,DamageBonus:167772174},rc={Unknown:0,MeleeWeapon:1,Armor:2,Clothing:3,Jewelry:4,Monster:5,Food:6,Money:7,Misc:8,MissileWeapon:9,Container:10,Gem:11,SpellComponent:12,Key:13,Portal:14,TradeNote:15,ManaStone:16,Plant:17,BaseCooking:18,BaseAlchemy:19,BaseFletching:20,CraftedCooking:21,CraftedAlchemy:22,CraftedFletching:23,Player:24,Vendor:25,Door:26,Corpse:27,Lifestone:28,HealingKit:29,Lockpick:30,WandStaffOrb:31,Bundle:32,Book:33,Journal:34,Sign:35,Housing:36,Npc:37,Foci:38,Salvage:39,Ust:40,Services:41,Scroll:42},pa={Axe:1,Bow:2,Crossbow:3,Dagger:4,Mace:5,MeleeDefense:6,MissileDefense:7,Spear:9,Staff:10,Sword:11,ThrownWeapons:12,Unarmed:13,ArcaneLore:14,MagicDefense:15,ManaConversion:16,ItemTinkering:18,AssessPerson:19,Deception:20,Healing:21,Jump:22,Lockpick:23,Run:24,AssessCreature:27,WeaponTinkering:28,ArmorTinkering:29,MagicItemTinkering:30,CreatureEnchantment:31,ItemEnchantment:32,LifeMagic:33,WarMagic:34,Leadership:35,Loyalty:36,Fletching:37,Alchemy:38,Cooking:39,Salvaging:40,TwoHandedCombat:41,Gearcraft:42,Void:43,HeavyWeapons:44,LightWeapons:45,FinesseWeapons:46,MissileWeapons:47,Shield:48,DualWield:49,Recklessness:50,SneakAttack:51,DirtyFighting:52,Summoning:54},dd={Agate:10,Alabaster:66,Amber:11,Amethyst:12,Aquamarine:13,"Armoredillo Hide":53,Azurite:14,"Black Garnet":15,"Black Opal":16,Bloodstone:17,Brass:57,Bronze:58,Carnelian:18,Ceramic:1,Citrine:19,Copper:59,Diamond:20,Ebony:73,Emerald:21,"Fire Opal":22,Gold:60,Granite:67,"Green Garnet":23,"Green Jade":24,"Gromnie Hide":54,Hematite:25,"Imperial Topaz":26,Iron:61,Ivory:51,Jet:27,"Lapis Lazuli":28,"Lavender Jade":29,Leather:52,Linen:4,Mahogany:74,Malachite:30,Marble:68,Moonstone:31,Oak:75,Obsidian:69,Onyx:32,Opal:33,Peridot:34,Pine:76,Porcelain:2,Pyreal:62,"Red Garnet":35,"Red Jade":36,"Reed Shark Hide":55,"Rose Quartz":37,Ruby:38,Sandstone:70,Sapphire:39,Satin:5,Serpentine:71,Silk:6,Silver:63,"Smokey Quartz":40,Steel:64,Sunstone:41,Teak:77,"Tiger Eye":42,Tourmaline:43,Turquoise:44,Velvet:7,"White Jade":45,"White Quartz":46,"White Sapphire":47,Wool:8,"Yellow Garnet":48,"Yellow Topaz":49,Zircon:50},md={"Axe (DEPRECEATED)":1,"Bow (DEPRECEATED)":2,"Crossbow (DEPRECEATED)":3,"Dagger (DEPRECEATED)":4,"Mace (DEPRECEATED)":5,MeleeD:6,MissileD:7,"Spear (DEPRECEATED)":9,"Staff (DEPRECEATED)":10,"Sword (DEPRECEATED)":11,"Thrown Weapons (DEPRECEATED)":12,"Unarmed Combat (DEPRECEATED)":13,MagicD:15,ManaCon:16,Creature:31,Item:32,Life:33,War:34,"Two-Handed Combat":41,Void:43,"Heavy Weapons":44,"Light Weapons":45,"Finesse Weapons":46,"Missile Weapons":47,Shield:48,"Dual Wield":49,Recklessness:50,"Sneak Attack":51,"Dirty Fighting":52,Summoning:54};Object.fromEntries(["Protective Clothing","Gladiatorial Clothing","Dedication","Lightning Proof","Cold Proof","Acid Proof","Flame Proof","Interlocking","Reinforced","Hardenend","Swift","Wise","Dexterous","Hearty","Crafter's","Tinker's","Defender's","Archer's","Adept's","Soldier's","Leggings of Perfect Light","Coat of the Perfect Light","Arm, Mind, Heart","Empyrean Rings","Shou-jen","Relic Alduressa","Ancient Relic","Noble Relic"].map((e,t)=>[e,32-t]));const pd={"Unarmed Weapon":1,Sword:2,Axe:3,Mace:4,Spear:5,Dagger:6,Staff:7,Bow:8,Crossbow:9,Thrown:10,"Two Handed Combat":11},pl=(e,t)=>e.localeCompare(t,"en"),wr=e=>Object.keys(e).sort(pl),ni=(e,t)=>Object.keys(e).find(n=>e[n]===t)??String(t),gd=(e,t)=>Object.keys(e).sort(pl).find(n=>e[n]===t);function ga(e){try{return new RegExp(e),e}catch{return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}const bn=e=>{const t=e.trim();return/^[-+]?\d+$/.test(t)&&Number.isSafeInteger(Number(t))?String(Number(t)):"0"},Ni=e=>{const t=Number(e.trim().replace(",","."));return e.trim()!==""&&Number.isFinite(t)?String(t):"0"},Ut=e=>{const t=Number(String(e??"0").replace(",","."));return Number.isFinite(t)?String(t):"0"},th=e=>{const t=e.trim();return/^[0-9a-f]+$/i.test(t)?parseInt(t,16)&16777215:0},ds=(e,t,n)=>({label:e,options:()=>wr(t),get:i=>wr(t).findIndex(s=>t[s]===Number(i[n])),set:(i,s)=>{const a=wr(t)[s],r=[...i];return a!==void 0&&(r[n]=String(t[a])),r}}),_n=(e,t,n)=>({label:e,get:i=>i[t]??"",set:(i,s)=>{const a=[...i];return a[t]=n(s),a}}),bi=(e,t)=>({label:e,get:n=>Ut(n[t]),set:(n,i)=>{const s=[...n];return s[t]=Ni(i),s}}),_d=new Set(["CreateFlags1","Type","Icon","Category","Behavior","CreateFlags2","IconUnderlay","ItemSlots","PackSlots","MissileType","Value","UsageMask","IconOutline","EquipType","UsesRemaining","UsesTotal","StackCount","StackMax","Container","Slot","EquipableSlots","EquippedSlots","Coverage","Unknown8000000","Monarch","HookMask","IconOverlay","Material"].map(e=>$s[e])),vd=new Set([tr.Name,tr.SecondaryName]),xd=new Set([Ys.ApproachDistance,Ys.SalvageWorkmanship]);function Md(e,t){const n=Number(t),i=e===131?dd:e===159?md:e===353?pd:null,s=i?gd(i,n):void 0;return s?` (${s})`:""}const Ds=(e,t)=>({name:e,make:()=>["0","176"],actsOn:ds("Acts on",$s,1),values:{1:_n("Long Value",0,bn)},display:n=>`${ni($s,Number(n[1]))} ${t} ${n[0]}${Md(Number(n[1]),n[0])}`,needsId:n=>!_d.has(Number(n[1]))}),oc=(e,t)=>({name:e,make:()=>["0","167772163"],actsOn:ds("Acts on",Ys,1),values:{1:bi("Double Value",0)},display:n=>`${ni(Ys,Number(n[1]))} ${t} ${Ut(n[0])}`,needsId:n=>!xd.has(Number(n[1]))}),Un=(e,t,n,i,s)=>({name:e,make:()=>["0"],values:{1:_n(t,0,i)},display:a=>n(a[0]??"0"),needsId:()=>s}),Sd={label:"RGB color value (hex)",get:e=>((Number(e[0])&255)<<16|(Number(e[1])&255)<<8|Number(e[2])&255).toString(16).toUpperCase(),set:(e,t)=>{const n=th(t),i=[...e];return i[0]=String(n>>16&255),i[1]=String(n>>8&255),i[2]=String(n&255),i}},Lr=e=>`Color [A=255, R=${e[0]}, G=${e[1]}, B=${e[2]}]`,Dr={1:Sd,2:bi("Max diff (Hue 0-255)",3),3:bi("Max diff (S/V 0-1)",4)},yr=e=>[Number(e[0])&255,Number(e[1])&255,Number(e[2])&255],_a=()=>Object.keys(Pf),nh=[[0,{name:"Spell Name Match",make:()=>[""],values:{1:_n("Spell Name Pattern",0,ga)},display:e=>`SpellNameMatch: ${e[0]??""}`,needsId:()=>!0}],[1,{name:"String Value Match",make:()=>["","16"],actsOn:ds("Acts on",tr,1),values:{1:_n("String Value Pattern",0,ga)},display:e=>`${ni(tr,Number(e[1]))} matches: ${e[0]??""}`,needsId:e=>!vd.has(Number(e[1]))}],[2,Ds("Long Value Key <=","<=")],[3,Ds("Long Value Key >=",">=")],[4,oc("Double Value Key <=","<=")],[5,oc("Double Value Key >=",">=")],[6,Un("Damage Percentage >=","Damage Percent",e=>`DamagePercentGE >= ${Ut(e)}`,Ni,!1)],[7,{name:"ObjectClass",make:()=>["2"],actsOn:ds("ObjectClass is",rc,0),values:{},display:e=>`ObjectClass = ${ni(rc,Number(e[0]))}`,needsId:()=>!1}],[8,Un("Spell Count >=","Spell Count",e=>`SpellCount >= ${e}`,bn,!0)],[9,{name:"Spell Match and Count",make:()=>["","","1"],values:{1:_n("Does Match",0,ga),2:_n("Does NOT Match",1,ga),3:_n("Minimum spells that match",2,bn)},display:e=>(e[1]??"").trim()===""?`SpellMatch: ${e[0]??""} [${e[2]??"1"} times]`:`SpellMatch: ${e[0]??""}, but not ${e[1]} [${e[2]??"1"} times]`,needsId:()=>!0}],[10,Un("Minimum Damage >=","Minimum Damage",e=>`MinDamage >= ${Ut(e)}`,Ni,!0)],[11,{...Ds("Long Value Key Has Flags",""),display:e=>`${ni($s,Number(e[1]))} has flags ${e[0]} (0x${(Number(e[0])>>>0).toString(16).toUpperCase()})`}],[12,Ds("Long Value Key ==","==")],[13,Ds("Long Value Key !=","!=")],[14,{name:"One Similar Color",make:()=>["255","255","255","10","0.1"],values:Dr,display:e=>`Any Color ${Lr(e)}: ${Ut(e[3])}, ${Ut(e[4])}`,needsId:()=>!1,colour:yr}],[15,{name:"Armor Type Similar Color",make:()=>["255","255","255","10","0.1",_a()[0]],actsOn:{label:"Armor Type/Color Region",options:_a,get:e=>_a().indexOf(e[5]??""),set:(e,t)=>{const n=[...e];return n[5]=_a()[t]??n[5],n}},values:Dr,display:e=>`${e[5]??""}: ${Lr(e)}, ${Ut(e[3])}, ${Ut(e[4])}`,needsId:()=>!1,colour:yr}],[16,{name:"Slot Similar Color",make:()=>["255","255","255","10","0.1","0"],values:{...Dr,4:_n("Palette Entry #",5,bn)},display:e=>`Slot ${e[5]??"0"} Color ${Lr(e)}: ${Ut(e[3])}, ${Ut(e[4])}`,needsId:()=>!1,colour:yr}],[17,{name:"Slot Exact Palette",make:()=>["0","0"],values:{1:_n("Palette Entry #",0,bn),2:{label:"Palette ID",get:e=>(Number(e[1])&16777215).toString(16).toUpperCase(),set:(e,t)=>{const n=[...e];return n[1]=String(th(t)),n}}},display:e=>`Slot ${e[0]??"0"} Palette 0x${(Number(e[1])>>>0).toString(16).toUpperCase()}`,needsId:()=>!1}],[1e3,{name:"Character Buffed Skill >=",make:()=>["0","38"],actsOn:ds("Acts on",pa,1),values:{1:_n("Buffed Skill Value",0,bn)},display:e=>`Buffed ${ni(pa,Number(e[1]))} >= ${e[0]}`,needsId:()=>!1}],[1001,Un("Free Main Pack Slots >=","Empty Slots",e=>`Main pack slots >= ${e}`,bn,!1)],[1002,Un("Character Level >=","Character Level",e=>`Char Level >= ${e}`,bn,!1)],[1003,Un("Character Level <=","Character Level",e=>`Char Level <= ${e}`,bn,!1)],[1004,{name:"Base Skill Range",make:()=>["38","0","999"],actsOn:ds("Acts on",pa,0),values:{1:_n("Minimum Base Skill",1,bn),2:_n("Maximum Base Skill",2,bn)},display:e=>`Base ${ni(pa,Number(e[0]))} [${e[1]}-${e[2]}]`,needsId:()=>!1}],[2e3,Un("Calced Buffed Median Damage >=","Calced Buffed Median Damage",e=>`Buffed Median Damage >= ${Ut(e)}`,Ni,!0)],[2001,Un("Calced Buffed Missile Damage >=","Calced Buffed Missile Damage",e=>`Buffed Missile Damage >= ${Ut(e)}`,Ni,!0)],[2003,{name:"Buffed Long Value Key >=",make:()=>["0","218103842"],actsOn:{label:"Acts on",options:()=>["ArmorLevel","MaxDamage"],get:e=>[28,218103842].indexOf(Number(e[1])),set:(e,t)=>{const n=[...e];return n[1]=String([28,218103842][t]??n[1]),n}},values:{1:bi("Buffed Long Value",0)},display:e=>`Buffed ${ni($s,Number(e[1]))} >= ${Ut(e[0])}`,needsId:()=>!0}],[2005,{name:"Buffed Double Value Key >=",make:()=>["0","167772172"],actsOn:{label:"Acts on",options:()=>["AttackBonus","ElementalDamageVersusMonsters","ManaCBonus","MeleeDefenseBonus"],get:e=>[167772172,152,144,29].indexOf(Number(e[1])),set:(e,t)=>{const n=[...e];return n[1]=String([167772172,152,144,29][t]??n[1]),n}},values:{1:bi("Buffed Double Value",0)},display:e=>`Buffed ${ni(Ys,Number(e[1]))} >= ${Ut(e[0])}`,needsId:()=>!0}],[2006,Un("Calced Buffed Tinked Dmg >=","Calced Buffed Tinked Damage",e=>`Calced Buffed Tinked Dmg >= ${Ut(e)}`,Ni,!0)],[2007,Un("Calced Total Ratings >=","Calced Total Ratings",e=>`Calced Total Ratings >= ${Ut(e)}`,Ni,!0)],[2008,{name:"Calced Buffed Tinked Target Melee",make:()=>["0","0","0"],values:{1:bi("Target Calced Buffed Tinked DoT",0),2:bi("Target Buffed Melee Defense Bonus",1),3:bi("Target Buffed Attack Bonus",2)},display:e=>`Melee Target: ${Ut(e[0])} DoT: ${Ut(e[1])} md, ${Ut(e[2])} a`,needsId:()=>!0}],[9999,{name:"Enable/Disable",make:()=>["true"],actsOn:{label:"Status",options:()=>["Disabled","Enabled"],get:e=>e[0]==="true"?0:1,set:(e,t)=>[t<1?"true":"false"]},values:{},display:e=>e[0]==="true"?"This rule is currently disabled":"This rule is active",needsId:()=>!1}]].map(([e,t])=>({type:e,...t})),bd=e=>nh.find(t=>t.type===e);[bd(9999),...nh.filter(e=>e.type!==9999).sort((e,t)=>pl(e.name,t.name))];const Ad=[["Imperil","I"],["Vuln","V"],["Yield","Y"],["GravityW","G"],["Attack","A"],["Ring","R"],["Broadside","B"],["Fester","F"],["WeakeningCurse","WC"],["FesteringCurse","FC"],["Corruption","Cp"],["DestructiveCurse","DC"],["Corrosion","Cs"],["Streak","S"]];[...Ad.map(([e])=>e)];const Td={Never:0,Always:1,All:2,Any:3,ChatMatch:4,MainSlotsLE:5,SecsInStateGE:6,NavEmpty:7,Death:8,VendorOpen:9,VendorClosed:10,ItemCountLE:11,ItemCountGE:12,MobsInDist_Name:13,MobsInDist_Priority:14,NeedToBuff:15,NoMobsInDist:16,BlockE:17,CellE:18,IntoPortal:19,ExitPortal:20,Not:21,PSecsInStateGE:22,SecsOnSpellGE:23,BuPercentGE:24,DistToRteGE:25,Expr:26,ChatCapture:28},Ed={None:0,SetState:1,Chat:2,DoAll:3,EmbedNav:4,CallState:5,Return:6,DoExpr:7,ChatExpr:8,SetWatchdog:9,ClearWatchdog:10,GetOpt:11,SetOpt:12,CreateView:13,DestroyView:14,DestroyAllViews:15};Object.fromEntries(Object.entries(Td).map(([e,t])=>[t,e]));Object.fromEntries(Object.entries(Ed).map(([e,t])=>[t,e]));const Rd={pnt:0,prt:1,rcl:2,pau:3,cht:4,vnd:5,ptl:6,tlk:7,chk:8,jmp:9};Object.fromEntries(Object.entries(Rd).map(([e,t])=>[t,e]));new Map(Object.entries(Yu).map(([e,t])=>[t.toLowerCase(),Number(e)]));const ih=45696,sh=2147483647,Cd=new Map([[0,{name:"Unknown",icon:100667624}],[1,{name:"Allegiance Hall",icon:100671513}],[2,{name:"Allegiance Bindstone",icon:100671884}],[4,{name:"Dungeon",icon:100667499}],[8,{name:"Landmark",icon:100674308}],[16,{name:"Lifestone",icon:100672737}],[32,{name:"NPC",icon:100667446}],[64,{name:"Outpost",icon:100668115}],[128,{name:"Portal",icon:100674029}],[256,{name:"Portal Hub",icon:100686622}],[512,{name:"Settlement Portal",icon:100674029}],[1024,{name:"Settlement",icon:100671873}],[2048,{name:"Town",icon:100674412}],[4096,{name:"Town Portal",icon:100674029}],[8192,{name:"Underground Portal",icon:100674029}],[16384,{name:"Vendor",icon:100667446}],[32768,{name:"Wilderness Portal",icon:100674029}],[134217728,{name:"Portal Device",icon:100675779}],[268435456,{name:"Custom",icon:100671368}],[536870912,{name:"Start Point",icon:100669661}],[1073741824,{name:"End Point",icon:100669660}],[sh,{name:"Any",icon:100667624}],[ih,{name:"Any Portal",icon:100674029}]]);function wd(e){return Cd.get(e)?.name??"Unknown"}[sh,ih,1,2,4,8,16,32,64,256,512,1024,2048,4096,8192,16384,32768,268435456].map(e=>({label:wd(e),type:e}));ke.EncumbranceVal,ke.ItemsCapacity,ke.ContainersCapacity,ke.ValidLocations,ke.CurrentWieldedLocation,ke.MaxStackSize,ke.StackSize,ke.Value,ke.ArmorLevel,ke.ResistMagic,ke.BoostValue,ke.Structure,ke.ItemWorkmanship,ke.ItemCurMana,ke.ItemMaxMana,ke.ItemDifficulty,ke.ItemSkillLevelLimit,ke.MaterialType,ke.WieldRequirements,ke.WieldSkillType,ke.WieldDifficulty,ke.NumTimesTinkered,ke.AppraisalItemSkill,ke.ImbuedEffect,ke.NumKeys,ke.ElementalDamageBonus,ke.EquipmentSetId,ke.WeaponType,ke.UseRequiresSkill,ke.UseRequiresSkillLevel,ke.UseRequiresSkillSpec,ke.UseRequiresLevel,ke.GearDamage,ke.GearDamageResist,ke.GearCrit,ke.GearCritResist,ke.GearCritDamage,ke.GearCritDamageResist,ke.GearHealingBoost,ke.GearMaxHealth,ke.Damage,ct.ManaRate,ct.DamageVariance,ct.WeaponDefense,ct.WeaponOffense,ct.DamageMod,ct.ManaConversionMod,ct.WeaponMissileDefense,ct.WeaponMagicDefense,ct.ElementalDamageMod,ct.ArmorModVsSlash,ct.ArmorModVsPierce,ct.ArmorModVsBludgeon,ct.ArmorModVsCold,ct.ArmorModVsFire,ct.ArmorModVsAcid,ct.ArmorModVsElectric,Wu.LongDesc,zu.Retained,Xu.Spell;(()=>{const e={2:"Test",4:"Carraida's Benediction",5:"Noble Relic Set",6:"Ancient Relic Set",7:"Relic Alduressa Set",8:"Shou-jen Set",9:"Empyrean Rings Set",10:"Arm, Mind, Heart Set",11:"Coat of the Perfect Light Set",12:"Leggings of Perfect Light Set",13:"Soldier's Set",14:"Adept's Set",15:"Archer's Set",16:"Defender's Set",17:"Tinker's Set",18:"Crafter's Set",19:"Hearty Set",20:"Dexterous Set",21:"Wise Set",22:"Swift Set",23:"Hardenend Set",24:"Reinforced Set",25:"Interlocking Set",26:"Flame Proof Set",27:"Acid Proof Set",28:"Cold Proof Set",29:"Lightning Proof Set",30:"Dedication Set",31:"Gladiatorial Clothing Set",32:"Ceremonial Clothing",33:"Protective Clothing",34:"Noobie Armor",35:"Sigil of Defense",36:"Sigil of Destruction",37:"Sigil of Fury",38:"Sigil of Growth",39:"Sigil of Vigor",40:"Heroic Protector Set",41:"Heroic Destroyer Set",42:"Olthoi Armor D Red",43:"Olthoi Armor C Rat",44:"Olthoi Armor C Red",45:"Olthoi Armor D Rat",46:"Upgraded Relic Alduressa Set",47:"Upgraded Ancient Relic Set",48:"Upgraded Noble Relic Set",49:"Weave of Alchemy",50:"Weave of Arcane Lore",51:"Weave of Armor Tinkering",52:"Weave of Assess Person",54:"Weave of Missile Weapons",55:"Weave of Cooking",56:"Weave of Creature Enchantment",57:"Weave of Missile Weapons",58:"Weave of Finesse",59:"Weave of Deception",60:"Weave of Fletching",61:"Weave of Healing",62:"Weave of Item Enchantment",63:"Weave of Item Tinkering",64:"Weave of Leadership",65:"Weave of Life Magic",66:"Weave of Loyalty",68:"Weave of Magic Defense",69:"Weave of Magic Item Tinkering",70:"Weave of Mana Conversion",71:"Weave of Melee Defense",72:"Weave of Missile Defense",73:"Weave of Salvaging",76:"Weave of Heavy Weapons",77:"Weave of Missile Weapons",78:"Weave of Two Handed Combat",80:"Weave of Void Magic",81:"Weave of War Magic",82:"Weave of Weapon Tinkering",83:"Weave of Assess Creature ",84:"Weave of Dirty Fighting",85:"Weave of Dual Wield",86:"Weave of Recklessness",87:"Weave of Shield",88:"Weave of Sneak Attack",89:"Ninja_New",90:"Weave of Summoning",91:"Shrouded Soul",92:"Darkened Mind",93:"Clouded Spirit",130:"Shimmering Shadows",131:"Brown Society Locket",132:"Yellow Society Locket",133:"Red Society Band",134:"Green Society Band",135:"Purple Society Band",136:"Blue Society Band",137:"Gauntlet Garb",138:"UNKNOWN_138",139:"UNKNOWN_139",140:"UNKNOWN_140"};for(const n of[53,67,74,75,79])e[n]="Weave of Light Weapons";let t=94;for(const n of["Minor","Major","Blackfire"])for(const i of["Shrouded Soul","Darkened Mind","Clouded Spirit"])for(const s of["Stinging","Sparking","Smoldering","Shivering"])e[t++]=`${n} ${s} ${i}`;return e})();ke.Damage;ke.ArmorLevel;ct.ElementalDamageMod;ct.WeaponOffense;ct.WeaponDefense;ct.ManaConversionMod;ct.DamageMod,ct.ElementalDamageMod,ct.WeaponOffense,ct.WeaponDefense,ct.WeaponMagicDefense,ct.WeaponMissileDefense;const Ve=(e,t,n,i,s,a={})=>({path:e,label:t,type:"bool",default:n,tab:i,scope:"global",status:s,...a}),Ld=[Ve("ItemInfoOnIdent.Enabled","Show Item Info On Ident",!0,"Misc/Options","build"),Ve("ItemInfoOnIdent.ShowBuffedValues","- Show Item Info Buffed* Values",!0,"Misc/Options","build",{parent:"ItemInfoOnIdent.Enabled"}),Ve("ItemInfoOnIdent.ShowValueAndBurden","- Show Value and Burden",!1,"Misc/Options","build",{parent:"ItemInfoOnIdent.Enabled"}),Ve("ItemInfoOnIdent.LeftClickIdent","- Ident Items on Left Click",!1,"Misc/Options","build",{parent:"ItemInfoOnIdent.Enabled"}),Ve("ItemInfoOnIdent.AutoClipboard","- Clipboard Item Info On Ident",!1,"Misc/Options","build",{parent:"ItemInfoOnIdent.Enabled"}),Ve("AutoBuySell.Enabled","Auto Buy/Sell Enabled",!0,"Misc/Options","covered"),Ve("AutoBuySell.TestMode","- Auto Buy/Sell Test Mode",!1,"Misc/Options","covered",{parent:"AutoBuySell.Enabled"}),Ve("AutoTradeAdd.Enabled","Auto Add To Trade Enabled",!1,"Misc/Options","build"),Ve("AutoTradeAccept.Enabled","Auto Trade Accept Enabled",!1,"Misc/Options","build"),Ve("Looting.AutoLootChests","Auto Loot Chests",!0,"Misc/Options","covered"),Ve("Looting.AutoLootCorpses","Auto Loot Corpses",!0,"Misc/Options","covered"),Ve("Looting.AutoLootMyCorpses","Auto Loot My Corpses",!0,"Misc/Options","covered",{xpath:"Looting/AutoLootMyCorpse"}),Ve("Looting.LootSalvage","Auto Loot Salvage",!1,"Misc/Options","covered"),Ve("Tinkering.AutoClickYes","Auto Click Yes on 100%",!1,"Misc/Options","build"),Ve("InventoryManagement.InventoryLogger","Inventory Logger Enabled",!1,"Misc/Options","optional"),Ve("InventoryManagement.AetheriaRevealer","Auto Reveal Aetheria",!0,"Misc/Options","build"),Ve("InventoryManagement.HeartCarver","Auto Carve Hearts",!1,"Misc/Options","build"),Ve("InventoryManagement.ShatteredKeyFixer","Auto Fix Shattered Keys",!1,"Misc/Options","build"),Ve("InventoryManagement.KeyRinger","Auto Ring Keys",!1,"Misc/Options","build"),Ve("InventoryManagement.KeyDeringer","Auto Dering Keys",!1,"Misc/Options","build"),Ve("Misc.OpenMainPackOnLogin","Open Main Pack On Login",!0,"Misc/Options","build"),Ve("Misc.MaximizeChatOnLogin","Maximize Chat On Login",!1,"Misc/Options","dead"),Ve("Misc.LogOutOnDeath","Log Out on Death",!1,"Misc/Options","build"),Ve("Misc.DebuggingEnabled","Debugging Enabled",!0,"Misc/Options","optional"),Ve("Misc.VerboseDebuggingEnabled","Verbose Debugging Enabled",!1,"Misc/Options","optional"),{path:"Misc.OutputTargetWindow",label:"Target Output Window:",type:"int",default:1,tab:"Misc/Options",scope:"global",status:"build"}],Dd=[["AttackEvades","Attack Evades"],["DefenseEvades","Defense Evades"],["AttackResists","Attack Resists"],["DefenseResists","Defense Resists"],["NPKFails","NPK Fails"],["DirtyFighting","Dirty Fighting"],["MonsterDeaths","Monster Deaths"],["SpellCastingMine","Spell Casting - Mine"],["SpellCastingOthers","Spell Casting - Others"],["SpellCastFizzles","Spell Cast Fizzles"],["CompUsage","Comp Usage"],["SpellExpires","Spell Expires"],["HealingKitSuccess","Healing Kit Success"],["HealingKitFail","Healing Kit Fail"],["Salvaging","Salvaging"],["SalvagingFails","Salvaging Fails"],["AuraOfCraftman","Aura Of Craftman Spam"],["ManaStoneUsage","Mana Stone Usage"],["TradeBuffBotSpam","Trade/Buff Bot Spam"],["FailedAssess","Someone failed to assess you"],["KillTaskComplete","Kill Task Complete"],["VendorTells","Vendor Tells"],["MonsterTell","Monster Tells"],["NpcChatter","NPC Chatter"],["MasterArbitratorSpam","Master Arbitrator Spam"],["AllMasterArbitratorChat","All Master Arbitrator Chat"],["StatusTextYoureTooBusy","Status Text: You're too busy!"],["StatusTextCasting","Status Text: Casting ..."],["StatusTextAll","Status Text: All"]].map(([e,t])=>Ve(`Filters.${e}`,t,!1,"Misc/Filters","build",e==="NpcChatter"?{xpath:"Filters/NPCChatter"}:{})),yd=[Ve("ManaManagement.AutoRecharge","Recharge",!0,"Trackers/Mana","covered",{description:"Auto Recharge Mana"}),Ve("CombatTracker.Persistent","Keep Persistent Stats",!0,"Trackers/Combat/Options","build",{description:"Keep Stats Persistent"}),Ve("CombatTracker.ExportOnLogOff","Export Current Stats On LogOff",!1,"Trackers/Combat/Options","build",{description:"Export Stats on LogOff"}),Ve("CombatTracker.SortAlphabetically","Sort Alphabetically",!1,"Trackers/Combat/Options","build"),Ve("CorpseTracker.Enabled","Corpse Tracker Enabled",!0,"Trackers/Corpse/Options","build"),Ve("CorpseTracker.Persistent","Keep Persistent Stats",!0,"Trackers/Corpse/Options","build",{description:"Keep Stats Persistent"}),Ve("CorpseTracker.TrackAllCorpses","Track All Corpses",!1,"Trackers/Corpse/Options","build"),Ve("CorpseTracker.TrackFellowCorpses","Track Fellow Corpses",!1,"Trackers/Corpse/Options","build"),Ve("CorpseTracker.TrackPermittedCorpses","Track Permitted Corpses",!0,"Trackers/Corpse/Options","build"),Ve("PlayerTracker.Enabled","Player Tracker Enabled",!1,"Trackers/Player/Options","build"),Ve("PlayerTracker.Persistent","Keep Persistent Stats",!1,"Trackers/Player/Options","build",{description:"Keep Stats Persistent"}),Ve("ChatLogger.Persistent","Keep Persistent Logs",!0,"Loggers/Options","build",{description:"Keep Logs Persistent"}),Ve("Misc.RemoveWindowFrame","Remove Window Frame",!1,"Misc/Client","dead"),{path:"Misc.NoFocusFPS",label:"No Focus FPS",type:"int",default:10,tab:"Misc/Client",scope:"global",status:"dead"},{path:"Misc.MaxFPS",label:"Max FPS",type:"int",default:0,tab:"Misc/Client",scope:"global",status:"dead"}],Ud=[...Ld,...Dd,...yd];new Map(Ud.map(e=>[e.path.toLowerCase(),e]));const Nd=["You split {0} apart!","You cleave {0} in twain!","{0} is torn to ribbons by your assault!","Your killing blow nearly turns {0} inside-out!","You run {0} through!","{0} is fatally punctured!","{0}'s perforated corpse falls before you!","{0}'s death is preceded by a sharp, stabbing pain!","You beat {0} to a lifeless pulp!","{0} is shattered by your assault!","You flatten {0}'s body with the force of your assault!","The thunder of crushing {0} is followed by the deafening silence of death!","You bring {0} to a fiery end!","{0} is reduced to cinders!","{0} is incinerated by your assault!","{0}'s seared corpse smolders before you!","Your attack stops {0} cold!","Your assault sends {0} to an icy death!","{0} suffers a frozen fate!","{0} is liquified by your attack!","{0}'s last strength dissolves before you!","You reduce {0} to a sizzling, oozing mass!","Blistered by lightning, {0} falls!","Electricity tears {0} apart!","Your lightning coruscates over {0}'s mortal remains!","{0} is dessicated by your attack!","{0}'s last strength withers before you!","You reduce {0} to a drained, twisted corpse!","You obliterate {0}!","You smite {0} mightily!","You knock {0} into next Morningthaw!","{0} is utterly destroyed by your attack!","{0} catches your attack, with dire consequences!","You slay {0} viciously enough to impart death several times over!","The deadly force of your attack is so strong that {0}'s ancestors feel it!","You send {0} to death so violently that even the lifestone flinches!","You killed {0}!"],Od=["{0} is utterly destroyed by your attack!","You knock {0} into next Morningthaw!","You obliterate {0}!","You slay {0} viciously enough to impart death several times over!","{0} catches your attack, with dire consequences!","You smite {0} mightily!","You send {0} to death so violently that even the lifestone flinches!","The deadly force of your attack is so strong that {0}'s ancestors feel it!","{0}'s body is shattered by your assault!","You flatten {0}'s body with the force of your assault!","You beat {0} to a lifeless pulp!","The thunder of crushing {0} is followed by the deafening silence of death!","{0}'s seared corpse smolders before you!","You bring {0} to a fiery end!","You reduced {0} to cinders!","{0} is incinerated by your assault!","{0}'s perforated corpse falls before you!","{0}'s death is preceded by a sharp, stabbing pain!","{0} is fatally punctured!","You run {0} through!","You split {0} apart!","You cleave {0} in twain!","{0} is torn to ribbons by your assault!","Your killing blow nearly turns {0} inside-out!","You reduce {0} to a drained, twisted corpse!","{0} is dessicated by your attack!","{0}'s last strength withers before you!","You reduce {0} to a sizzling, oozing mass!","{0}'s last strength dissolves before you!","{0} is liquified by your attack!","Your attack stops {0} cold!","Your assault sends {0} to an icy death!","{0} suffers a frozen fate!","Your lightning coruscates over {0}'s mortal remains!","Blistered by lightning, {0} falls!","Electricity tears {0} apart!","You killed {0}!"];[...new Set([...Nd,...Od])];class Ht{view;buffer;offset;constructor(t,n=0){this.buffer=t,this.view=new DataView(t),this.offset=n}get position(){return this.offset}set position(t){this.offset=t}get remaining(){return this.buffer.byteLength-this.offset}get length(){return this.buffer.byteLength}readUInt8(){const t=this.view.getUint8(this.offset);return this.offset+=1,t}readInt8(){const t=this.view.getInt8(this.offset);return this.offset+=1,t}readUInt16(){const t=this.view.getUint16(this.offset,!0);return this.offset+=2,t}readInt16(){const t=this.view.getInt16(this.offset,!0);return this.offset+=2,t}readUInt32(){const t=this.view.getUint32(this.offset,!0);return this.offset+=4,t>>>0}readInt32(){const t=this.view.getInt32(this.offset,!0);return this.offset+=4,t}readFloat32(){const t=this.view.getFloat32(this.offset,!0);return this.offset+=4,t}readFloat64(){const t=this.view.getFloat64(this.offset,!0);return this.offset+=8,t}readBytes(t){const n=new Uint8Array(this.buffer,this.offset,t);return this.offset+=t,new Uint8Array(n)}readCompressedUInt32(){const t=this.readUInt8();if((t&128)===0)return t;const n=this.readUInt8();if((t&64)===0)return(t&127)<<8|n;const i=this.readUInt16();return((t&63)<<8|n)<<16|i}readDataIdOfKnownType(t){const n=this.readUInt16();if((n&32768)!==0){const i=this.readUInt16(),s=(n&16383)<<16;return t+(s|i)>>>0}return t+n>>>0}readString(){const t=this.read7BitEncodedInt();if(t===0)return"";const n=this.readBytes(t);return br(n)}read7BitEncodedInt(){let t=0,n=0,i;do i=this.readUInt8(),t|=(i&127)<<n,n+=7;while(i&128);return t}readPString(t=2){let n;t===1?n=this.readUInt8():n=this.readUInt16();const i=this.readBytes(n);return br(i)}readObfuscatedString(){const t=this.readUInt16(),n=this.readBytes(t);for(let i=0;i<t;i++)n[i]=(n[i]>>4|n[i]<<4)&255;return br(n)}readUnicodeString(){const t=this.readCompressedUInt32();let n="";for(let i=0;i<t;i++)n+=String.fromCharCode(this.readUInt16());return n}seek(t){this.offset=t}skip(t){this.offset+=t}align(t=4){const n=this.offset%t;n!==0&&(this.offset+=t-n)}slice(t){const n=this.buffer.slice(this.offset,this.offset+t);return this.offset+=t,n}readList(t){const n=this.readUInt32(),i=[];for(let s=0;s<n;s++)i.push(t());return i}readListWithCount(t,n){const i=[];for(let s=0;s<t;s++)i.push(n());return i}readVector3(){return{x:this.readFloat32(),y:this.readFloat32(),z:this.readFloat32()}}readQuaternion(){return{w:this.readFloat32(),x:this.readFloat32(),y:this.readFloat32(),z:this.readFloat32()}}}function Id(e){return{oldTexture:e.readUInt32(),newTexture:e.readUInt32()}}function Fd(e){const t=e.readUInt32(),n=e.readUInt32(),i=e.readUInt32(),s=[];for(let a=0;a<i;a++)s.push(Id(e));return{index:t,modelId:n,cloTextureEffects:s}}function kd(e){const t=e.readUInt32(),n=[];for(let i=0;i<t;i++)n.push(Fd(e));return{cloObjectEffects:n}}function Bd(e){return{offset:e.readUInt32(),numColors:e.readUInt32()}}function Hd(e){const t=e.readUInt32(),n=[];for(let s=0;s<t;s++)n.push(Bd(e));const i=e.readUInt32();return{ranges:n,paletteSet:i}}function Gd(e){const t=e.readUInt32(),n=e.readUInt32(),i=[];for(let s=0;s<n;s++)i.push(Hd(e));return{icon:t,cloSubPalettes:i}}class lc{id=0;clothingBaseEffects=new Map;clothingSubPalEffects=new Map;constructor(t){this.id=t.readUInt32();const n=t.readUInt16();t.readUInt16();for(let s=0;s<n;s++){const a=t.readUInt32();this.clothingBaseEffects.set(a,kd(t))}const i=t.readUInt16();t.readUInt16();for(let s=0;s<i;s++){const a=t.readUInt32();this.clothingSubPalEffects.set(a,Gd(t))}}}class mr{id=0;colors=[];static read(t){const n=new mr;n.id=t.readUInt32();const i=t.readInt32();for(let s=0;s<i;s++)n.colors.push(t.readUInt32());return n}}class Pd{id=0;paletteList=[];constructor(t){this.id=t.readUInt32();const n=t.readInt32();for(let i=0;i<n;i++)this.paletteList.push(t.readUInt32())}getPaletteId(t){if(this.paletteList.length===0||t<0||t>1)return 0;let n=Math.floor((this.paletteList.length-1e-6)*t);return n<0&&(n=0),n>this.paletteList.length-1&&(n=this.paletteList.length-1),this.paletteList[n]}}class Vd{constructor(t){this.files=t}getFileData(t){return this.files.get(t>>>0)??null}hasFile(t){return this.files.has(t>>>0)}get fileIds(){return[...this.files.keys()]}}function zd(e){return{animId:e.readUInt32(),lowFrame:e.readInt32(),highFrame:e.readInt32(),framerate:e.readFloat32()}}function Ur(e){const t=e.readUInt8(),n=e.readUInt8(),i=e.readUInt8();e.align(4);const s=[];for(let r=0;r<t;r++)s.push(zd(e));const a={numAnims:t,bitfield:n,flags:i,anims:s};return(i&1)!==0&&(a.velocity=e.readVector3()),(i&2)!==0&&(a.omega=e.readVector3()),a}class Wd{id=0;defaultStyle=0;styleDefaults=new Map;cycles=new Map;modifiers=new Map;links=new Map;constructor(t){this.id=t.readUInt32(),this.defaultStyle=t.readUInt32();const n=t.readUInt32();for(let i=0;i<n;i++)this.styleDefaults.set(t.readUInt32(),t.readUInt32());{const i=t.readUInt32();for(let s=0;s<i;s++){const a=t.readUInt32();this.cycles.set(a,Ur(t))}}{const i=t.readUInt32();for(let s=0;s<i;s++){const a=t.readUInt32();this.modifiers.set(a,Ur(t))}}{const i=t.readUInt32();for(let s=0;s<i;s++){const a=t.readUInt32(),r=new Map,o=t.readUInt32();for(let l=0;l<o;l++){const c=t.readUInt32();r.set(c,Ur(t))}this.links.set(a,r)}}}}function na(e){const t=e.readVector3(),n=e.readFloat32(),i=e.readFloat32(),s=e.readFloat32(),a=e.readFloat32();return{origin:t,orientation:{w:n,x:i,y:s,z:a}}}var xo=(e=>(e[e.NoOp=0]="NoOp",e[e.Sound=1]="Sound",e[e.SoundTable=2]="SoundTable",e[e.Attack=3]="Attack",e[e.AnimationDone=4]="AnimationDone",e[e.ReplaceObject=5]="ReplaceObject",e[e.Ethereal=6]="Ethereal",e[e.TransparentPart=7]="TransparentPart",e[e.Luminous=8]="Luminous",e[e.LuminousPart=9]="LuminousPart",e[e.Diffuse=10]="Diffuse",e[e.DiffusePart=11]="DiffusePart",e[e.Scale=12]="Scale",e[e.CreateParticle=13]="CreateParticle",e[e.DestroyParticle=14]="DestroyParticle",e[e.StopParticle=15]="StopParticle",e[e.NoDraw=16]="NoDraw",e[e.DefaultScript=17]="DefaultScript",e[e.DefaultScriptPart=18]="DefaultScriptPart",e[e.CallPES=19]="CallPES",e[e.Transparent=20]="Transparent",e[e.SoundTweaked=21]="SoundTweaked",e[e.SetOmega=22]="SetOmega",e[e.TextureVelocity=23]="TextureVelocity",e[e.TextureVelocityPart=24]="TextureVelocityPart",e[e.SetLight=25]="SetLight",e[e.CreateBlockingParticle=26]="CreateBlockingParticle",e))(xo||{});function Xd(e){const t=e.readUInt32(),n=e.readInt32(),i={hookType:t,direction:n};switch(t){case 1:return{...i,soundId:e.readUInt32()};case 2:return{...i,soundType:e.readUInt32()};case 3:{const s=e.readUInt32(),a=e.readFloat32(),r=e.readFloat32(),o=e.readFloat32(),l=e.readFloat32(),c=e.readFloat32(),u=e.readFloat32();return{...i,partIndex:s,leftX:a,leftY:r,rightX:o,rightY:l,radius:c,height:u}}case 5:{const s=e.readUInt16()&255,a=e.readDataIdOfKnownType(16777216);return{...i,partIndex:s,partId:a}}case 6:return{...i,ethereal:e.readInt32()};case 7:return{...i,part:e.readUInt32(),start:e.readFloat32(),end:e.readFloat32(),time:e.readFloat32()};case 8:return{...i,start:e.readFloat32(),end:e.readFloat32(),time:e.readFloat32()};case 9:return{...i,part:e.readUInt32(),start:e.readFloat32(),end:e.readFloat32(),time:e.readFloat32()};case 10:return{...i,start:e.readFloat32(),end:e.readFloat32(),time:e.readFloat32()};case 11:return{...i,part:e.readUInt32(),start:e.readFloat32(),end:e.readFloat32(),time:e.readFloat32()};case 12:return{...i,end:e.readFloat32(),time:e.readFloat32()};case 13:case 26:{const s=e.readUInt32(),a=e.readUInt32(),r=na(e),o=e.readUInt32();return{...i,emitterInfoId:s,partIndex:a,offset:r,emitterId:o}}case 14:return{...i,emitterId:e.readUInt32()};case 15:return{...i,emitterId:e.readUInt32()};case 16:return{...i,noDraw:e.readUInt32()};case 18:return{...i,partIndex:e.readUInt32()};case 19:return{...i,pes:e.readUInt32(),pause:e.readFloat32()};case 20:return{...i,start:e.readFloat32(),end:e.readFloat32(),time:e.readFloat32()};case 21:{const s=e.readUInt32(),a=e.readFloat32(),r=e.readFloat32();return{...i,soundId:s,priority:r,probability:a,volume:e.readFloat32()}}case 22:return{...i,axis:e.readVector3()};case 23:return{...i,uSpeed:e.readFloat32(),vSpeed:e.readFloat32()};case 24:return{...i,partIndex:e.readUInt32(),uSpeed:e.readFloat32(),vSpeed:e.readFloat32()};case 25:return{...i,lightsOn:e.readInt32()};case 4:case 17:case 0:default:return i}}function ah(e,t){const n=[];for(let a=0;a<t;a++)n.push(na(e));const i=e.readUInt32(),s=[];for(let a=0;a<i;a++)s.push(Xd(e));return{frames:n,hooks:s}}class rh{id=0;flags=0;numParts=0;numFrames=0;posFrames=[];partFrames=[];constructor(t){if(this.id=t.readUInt32(),this.flags=t.readUInt32(),this.numParts=t.readUInt32(),this.numFrames=t.readUInt32(),(this.flags&1)!==0)for(let n=0;n<this.numFrames;n++)this.posFrames.push(na(t));for(let n=0;n<this.numFrames;n++)this.partFrames.push(ah(t,this.numParts))}}const cc=2e-4;function gl(e,t){return{w:e.w*t.w-e.x*t.x-e.y*t.y-e.z*t.z,x:e.w*t.x+e.x*t.w+e.y*t.z-e.z*t.y,y:e.w*t.y-e.x*t.z+e.y*t.w+e.z*t.x,z:e.w*t.z+e.x*t.y-e.y*t.x+e.z*t.w}}function _l(e){const t=Math.hypot(e.w,e.x,e.y,e.z);return t<1e-12?{w:1,x:0,y:0,z:0}:{w:e.w/t,x:e.x/t,y:e.y/t,z:e.z/t}}function oh(e,t){const{w:n,x:i,y:s,z:a}=e,r=2*(s*t.z-a*t.y),o=2*(a*t.x-i*t.z),l=2*(i*t.y-s*t.x);return{x:t.x+n*r+(s*l-a*o),y:t.y+n*o+(a*r-i*l),z:t.z+n*l+(i*o-s*r)}}function $d(e,t){const n=oh(e.orientation,t.origin);e.origin={x:e.origin.x+n.x,y:e.origin.y+n.y,z:e.origin.z+n.z},e.orientation=_l(gl(e.orientation,t.orientation))}function Yd(e,t){const n=t.orientation;e.orientation=_l(gl(e.orientation,{w:n.w,x:-n.x,y:-n.y,z:-n.z}));const i=oh(e.orientation,t.origin);e.origin={x:e.origin.x-i.x,y:e.origin.y-i.y,z:e.origin.z-i.z}}function qd(e,t){const n=t.x*t.x+t.y*t.y+t.z*t.z;if(n<cc*cc)return;const i=Math.sqrt(n),s=Math.sin(i*.5)/i;e.orientation=_l(gl(e.orientation,{w:Math.cos(i*.5),x:t.x*s,y:t.y*s,z:t.z*s}))}function uc(e,t,n,i){const s=i<0?-Math.abs(n):Math.abs(n),a=t.velocity;e.origin={x:e.origin.x+a.x*s,y:e.origin.y+a.y*s,z:e.origin.z+a.z*s};const r=t.omega;qd(e,{x:r.x*s,y:r.y*s,z:r.z*s})}const Oi=2e-4,Kd=-1,Zd=0,Jd=1;class Qd{animation=null;lowFrame=0;highFrame=0;framerate=30;speed=1;frameNumber=0;playing=!1;looping=!0;hookListeners=[];completeCallback=null;overshoot=0;steps=0;epoch=0;get nodeEpoch(){return this.epoch}play(t,n=0,i=-1,s=30,a=1,r=!0,o){this.animation=t,this.lowFrame=n,this.highFrame=i<0?t.numFrames-1:i,this.framerate=s,this.speed=a,this.looping=r,this.playing=!0,this.completeCallback=o??null,this.overshoot=0,this.frameNumber=this.startingFrame(),this.epoch++}pause(){this.playing=!1}resume(){this.animation&&(this.playing=!0)}stop(){this.playing=!1,this.animation=null,this.frameNumber=0,this.overshoot=0,this.completeCallback=null}get isPlaying(){return this.playing}get currentAnimation(){return this.animation}get playbackSpeed(){return this.speed}setSpeed(t){this.speed=t}get leftoverTime(){return this.overshoot}onHook(t){this.hookListeners.push(t)}offHook(t){const n=this.hookListeners.indexOf(t);n>=0&&this.hookListeners.splice(n,1)}update(t,n){if(!this.playing||!this.animation)return;let i=t;for(let s=0;s<1e4;s++){const a=this.framerate*this.speed;if(!(i>0))return;if(a===0){n&&Math.abs(i)>Oi&&uc(n.frame,n,i,i);return}const r=Math.floor(this.frameNumber);this.frameNumber+=a*i;let o=!1,l=0;if(a>0){if(Math.floor(this.frameNumber)>this.highFrame){const c=Math.max(this.frameNumber-this.highFrame-1,0);l=Math.abs(a)>Oi?c/a:0,this.frameNumber=this.highFrame,o=!0}for(let c=r;c<Math.floor(this.frameNumber);c++)n&&this.stepMotion(n,c,a,i,!1),this.executeHooks(c,Jd)}else{if(Math.floor(this.frameNumber)<this.lowFrame){const c=Math.min(this.frameNumber-this.lowFrame,0);l=Math.abs(a)>Oi?c/a:0,this.frameNumber=this.lowFrame,o=!0}for(let c=r;c>Math.floor(this.frameNumber);c--)n&&this.stepMotion(n,c,a,i,!0),this.executeHooks(c,Kd)}if(!o)return;if(n&&a<0&&this.stepMotion(n,this.lowFrame,a,i,!0),!this.looping){this.playing=!1,this.overshoot=l;const c=this.completeCallback;this.completeCallback=null,c?.();return}this.frameNumber=this.startingFrame(),n&&this.enterNode(n),i=l}}enterNode(t){if(!this.animation)return;const n=this.framerate*this.speed;n>0&&this.stepMotion(t,Math.floor(this.frameNumber),n,1,!1)}get currentFrame(){return this.animation?this.frameNumber-this.lowFrame:0}get currentFrameIndex(){const t=Math.floor(this.frameNumber);return Math.min(Math.max(t,this.lowFrame),this.highFrame)}getPartTransforms(){if(!this.animation||this.animation.numFrames===0)return[];const t=this.animation.partFrames[this.currentFrameIndex];return t?t.frames.slice():[]}getRootMotion(){if(!this.animation||this.animation.posFrames.length===0)return null;const t=this.animation.posFrames[this.currentFrameIndex];return t?{...t}:null}takeSteps(){const t=this.steps;return this.steps=0,t}get stepPhase(){if(!this.playing||!this.animation)return null;const t=this.framerate*this.speed;if(t===0||!Number.isFinite(t))return null;const n=this.frameNumber-Math.floor(this.frameNumber);return t>0?n:Math.min(1-n,1-1e-9)}stepMotion(t,n,i,s,a){this.steps++;const r=this.animation?.posFrames[n];r&&(a?Yd(t.frame,r):$d(t.frame,r)),Math.abs(i)>Oi&&uc(t.frame,t,1/i,s)}startingFrame(){return this.framerate*this.speed>=0?this.lowFrame:this.highFrame+1-Oi}executeHooks(t,n){if(!(!this.animation||this.hookListeners.length===0)&&!(t<0||t>=this.animation.partFrames.length)){for(const i of this.animation.partFrames[t].hooks)if(!(i.direction!==Zd&&i.direction!==n))for(const s of this.hookListeners)s(i,t)}}}const Lt={Invalid:0,HoldRun:2231369729,HoldSidestep:2231369730,Ready:1090519043,Stop:1073741828,WalkForward:1157627909,WalkBackwards:1157627910,RunForward:1140850695,Fallen:1073741832,Interpolating:1073741833,Hover:1073741834,On:1073741835,Off:1073741836,TurnRight:1694498829,TurnLeft:1694498830,SideStepRight:1694498831,SideStepLeft:1694498832,Dead:1073741841,Crouch:1090519058,Sitting:1090519059,Sleeping:1090519060,Falling:1073741845,Reload:1073741846,Unload:1073741847,Pickup:1073741848,StoreInBackpack:1073741849,Eat:1073741850,Drink:1073741851,Reading:1073741852,JumpCharging:1073741853,AimLevel:1073741854,AimHigh15:1073741855,AimHigh30:1073741856,AimHigh45:1073741857,AimHigh60:1073741858,AimHigh75:1073741859,AimHigh90:1073741860,AimLow15:1073741861,AimLow30:1073741862,AimLow45:1073741863,AimLow60:1073741864,AimLow75:1073741865,AimLow90:1073741866,MagicBlast:1073741867,MagicSelfHead:1073741868,MagicSelfHeart:1073741869,MagicBonus:1073741870,MagicClap:1073741871,MagicHarm:1073741872,MagicHeal:1073741873,MagicThrowMissile:1073741874,MagicRecoilMissile:1073741875,MagicPenalty:1073741876,MagicTransfer:1073741877,MagicVision:1073741878,MagicEnchantItem:1073741879,MagicPortal:1073741880,MagicPray:1073741881,StopTurning:536870970,Jump:620757051,HandCombat:2147483708,NonCombat:2147483709,SwordCombat:2147483710,BowCombat:2147483711,SwordShieldCombat:2147483712,CrossbowCombat:2147483713,UnusedCombat:2147483714,SlingCombat:2147483715,TwoHandedSwordCombat:2147483716,TwoHandedStaffCombat:2147483717,DualWieldCombat:2147483718,ThrownWeaponCombat:2147483719,Graze:2147483720,Magic:2147483721,Hop:268435530,Jumpup:268435531,Cheer:318767180,ChestBeat:268435533,TippedLeft:268435534,TippedRight:268435535,FallDown:268435536,Twitch1:268435537,Twitch2:268435538,Twitch3:268435539,Twitch4:268435540,StaggerBackward:268435541,StaggerForward:268435542,Sanctuary:268435543,ThrustMed:268435544,ThrustLow:268435545,ThrustHigh:268435546,SlashHigh:268435547,SlashMed:268435548,SlashLow:268435549,BackhandHigh:268435550,BackhandMed:268435551,BackhandLow:268435552,Shoot:268435553,AttackHigh1:268435554,AttackMed1:268435555,AttackLow1:268435556,AttackHigh2:268435557,AttackMed2:268435558,AttackLow2:268435559,AttackHigh3:268435560,AttackMed3:268435561,AttackLow3:268435562,HeadThrow:268435563,FistSlam:268435564,BreatheFlame:268435565,SpinAttack:268435566,MagicPowerUp01:268435567,MagicPowerUp02:268435568,MagicPowerUp03:268435569,MagicPowerUp04:268435570,MagicPowerUp05:268435571,MagicPowerUp06:268435572,MagicPowerUp07:268435573,MagicPowerUp08:268435574,MagicPowerUp09:268435575,MagicPowerUp10:268435576,ShakeFist:318767225,Beckon:318767226,BeSeeingYou:318767227,BlowKiss:318767228,BowDeep:318767229,ClapHands:318767230,Cry:318767231,Laugh:318767232,MimeEat:318767233,MimeDrink:318767234,Nod:318767235,Point:318767236,ShakeHead:318767237,Shrug:318767238,Wave:318767239,Akimbo:318767240,HeartyLaugh:318767241,Salute:318767242,ScratchHead:318767243,SmackHead:318767244,TapFoot:318767245,WaveHigh:318767246,WaveLow:318767247,YawnStretch:318767248,Cringe:318767249,Kneel:318767250,Plead:318767251,Shiver:318767252,Shoo:318767253,Slouch:318767254,Spit:318767255,Surrender:318767256,Woah:318767257,Winded:318767258,YMCA:301990043,EnterGame:268435612,ExitGame:268435613,OnCreation:268435614,OnDestruction:268435615,EnterPortal:268435616,ExitPortal:268435617,Cancel:134217890,UseSelected:150995107,AutosortSelected:150995108,DropSelected:150995109,GiveSelected:150995110,SplitSelected:150995111,ExamineSelected:150995112,CreateShortcutToSelected:134217897,PreviousCompassItem:150995114,NextCompassItem:150995115,ClosestCompassItem:150995116,PreviousSelection:150995117,LastAttacker:150995118,PreviousFellow:150995119,NextFellow:150995120,ToggleCombat:150995121,HighAttack:218103986,MediumAttack:218103987,LowAttack:218103988,EnterChat:134217909,ToggleChat:134217910,SavePosition:134217911,OptionsPanel:150995128,ResetView:150995129,CameraLeftRotate:218103994,CameraRightRotate:218103995,CameraRaise:218103996,CameraLower:218103997,CameraCloser:218103998,CameraFarther:218103999,FloorView:150995136,MouseLook:201326785,PreviousItem:150995138,NextItem:150995139,ClosestItem:150995140,ShiftView:218104005,MapView:150995142,AutoRun:150995143,DecreasePowerSetting:150995144,IncreasePowerSetting:150995145,Pray:318767306,Mock:318767307,Teapot:318767308,SpecialAttack1:268435661,SpecialAttack2:268435662,SpecialAttack3:268435663,MissileAttack1:268435664,MissileAttack2:268435665,MissileAttack3:268435666,CastSpell:1073742035,Flatulence:301990100,FirstPersonView:150995157,AllegiancePanel:150995158,FellowshipPanel:150995159,SpellbookPanel:150995160,SpellComponentsPanel:150995161,HousePanel:150995162,AttributesPanel:150995163,SkillsPanel:150995164,MapPanel:150995165,InventoryPanel:150995166,Demonet:301990111,UseMagicStaff:1073742048,UseMagicWand:1073742049,Blink:268435682,Bite:268435683,TwitchSubstate1:1073742052,TwitchSubstate2:1073742053,TwitchSubstate3:1073742054,CaptureScreenshotToFile:150995175,BowNoAmmo:2147483880,CrossBowNoAmmo:2147483881,ShakeFistState:1124073706,PrayState:1124073707,BowDeepState:1124073708,ClapHandsState:1124073709,CrossArmsState:1124073710,ShiverState:1124073711,PointState:1124073712,WaveState:1124073713,AkimboState:1124073714,SaluteState:1124073715,ScratchHeadState:1124073716,TapFootState:1124073717,LeanState:1124073718,KneelState:1124073719,PleadState:1124073720,ATOYOT:1107296505,SlouchState:1124073722,SurrenderState:1124073723,WoahState:1124073724,WindedState:1124073725,AutoCreateShortcuts:150995198,AutoRepeatAttacks:150995199,AutoTarget:150995200,AdvancedCombatInterface:150995201,IgnoreAllegianceRequests:150995202,IgnoreFellowshipRequests:150995203,InvertMouseLook:150995204,LetPlayersGiveYouItems:150995205,AutoTrackCombatTargets:150995206,DisplayTooltips:150995207,AttemptToDeceivePlayers:150995208,RunAsDefaultMovement:150995209,StayInChatModeAfterSend:150995210,RightClickToMouseLook:150995211,VividTargetIndicator:150995212,SelectSelf:150995213,SkillHealSelf:268435726,SkillHealOther:268435727,PreviousMonster:150995216,ClosestMonster:150995217,NextPlayer:150995218,PreviousPlayer:150995219,ClosestPlayer:150995220,SnowAngelState:1124073752,WarmHands:318767385,CurtseyState:1124073754,AFKState:1124073755,MeditateState:1124073756,TradePanel:150995229,LogOut:268435742,DoubleSlashLow:268435743,DoubleSlashMed:268435744,DoubleSlashHigh:268435745,TripleSlashLow:268435746,TripleSlashMed:268435747,TripleSlashHigh:268435748,DoubleThrustLow:268435749,DoubleThrustMed:268435750,DoubleThrustHigh:268435751,TripleThrustLow:268435752,TripleThrustMed:268435753,TripleThrustHigh:268435754,MagicPowerUp01Purple:268435755,MagicPowerUp02Purple:268435756,MagicPowerUp03Purple:268435757,MagicPowerUp04Purple:268435758,MagicPowerUp05Purple:268435759,MagicPowerUp06Purple:268435760,MagicPowerUp07Purple:268435761,MagicPowerUp08Purple:268435762,MagicPowerUp09Purple:268435763,MagicPowerUp10Purple:268435764,Helper:318767413,Pickup5:1073742134,Pickup10:1073742135,Pickup15:1073742136,Pickup20:1073742137,HouseRecall:268435770,AtlatlCombat:2147483963,ThrownShieldCombat:2147483964,SitState:1124073789,SitCrossleggedState:1124073790,SitBackState:1124073791,PointLeftState:1124073792,PointRightState:1124073793,TalktotheHandState:1124073794,PointDownState:1124073795,DrudgeDanceState:1124073796,PossumState:1124073797,ReadState:1124073798,ThinkerState:1124073799,HaveASeatState:1124073800,AtEaseState:1124073801,NudgeLeft:318767434,NudgeRight:318767435,PointLeft:318767436,PointRight:318767437,PointDown:318767438,Knock:318767439,ScanHorizon:318767440,DrudgeDance:318767441,HaveASeat:318767442,LifestoneRecall:268435795,CharacterOptionsPanel:150995284,SoundAndGraphicsPanel:150995285,HelpfulSpellsPanel:150995286,HarmfulSpellsPanel:150995287,CharacterInformationPanel:150995288,LinkStatusPanel:150995289,VitaePanel:150995290,ShareFellowshipXP:150995291,ShareFellowshipLoot:150995292,AcceptCorpseLooting:150995293,IgnoreTradeRequests:150995294,DisableWeather:150995295,DisableHouseEffect:150995296,SideBySideVitals:150995297,ShowRadarCoordinates:150995298,ShowSpellDurations:150995299,MuteOnLosingFocus:150995300,Fishing:268435813,MarketplaceRecall:268435814,EnterPKLite:268435815,AllegianceChat:150995304,AutomaticallyAcceptFellowshipRequests:150995305,Reply:150995306,MonarchReply:150995307,PatronReply:150995308,ToggleCraftingChanceOfSuccessDialog:150995309,UseClosestUnopenedCorpse:150995310,UseNextUnopenedCorpse:150995311,IssueSlashCommand:150995312,AllegianceHometownRecall:268435825,PKArenaRecall:268435826,OffhandSlashHigh:268435827,OffhandSlashMed:268435828,OffhandSlashLow:268435829,OffhandThrustHigh:268435830,OffhandThrustMed:268435831,OffhandThrustLow:268435832,OffhandDoubleSlashLow:268435833,OffhandDoubleSlashMed:268435834,OffhandDoubleSlashHigh:268435835,OffhandTripleSlashLow:268435836,OffhandTripleSlashMed:268435837,OffhandTripleSlashHigh:268435838,OffhandDoubleThrustLow:268435839,OffhandDoubleThrustMed:268435840,OffhandDoubleThrustHigh:268435841,OffhandTripleThrustLow:268435842,OffhandTripleThrustMed:268435843,OffhandTripleThrustHigh:268435844,OffhandKick:268435845,AttackHigh4:268435846,AttackMed4:268435847,AttackLow4:268435848,AttackHigh5:268435849,AttackMed5:268435850,AttackLow5:268435851,AttackHigh6:268435852,AttackMed6:268435853,AttackLow6:268435854,PunchFastHigh:268435855,PunchFastMed:268435856,PunchFastLow:268435857,PunchSlowHigh:268435858,PunchSlowMed:268435859,PunchSlowLow:268435860,OffhandPunchFastHigh:268435861,OffhandPunchFastMed:268435862,OffhandPunchFastLow:268435863,OffhandPunchSlowHigh:268435864,OffhandPunchSlowMed:268435865,OffhandPunchSlowLow:268435866,WoahDuplicate2:268435867},hc={SubState:1073741824,Action:268435456},ys={WalkAnimSpeed:3.12,SidestepAnimSpeed:1.25,SidestepFactor:.5,MaxSidestepAnimRate:3,RunTurnFactor:1.5},jd=new Map(Object.values(Lt).filter(e=>e!==0).map(e=>[e&65535,e>>>0]));function em(e){return jd.get(e&65535)}function tm(e){return(e&hc.Action)!==0&&(e&hc.SubState)===0}class nm{constructor(t=null){this.fetch=t}asked=new Set;wave(t){if(!this.fetch)return;const n=t>>>0;n>>>24!==10||this.asked.has(n)||(this.asked.add(n),this.fetch(n))}table(t){if(this.fetch)for(const n of t.values())for(const i of n.data)this.wave(i.soundId)}hooks(t){if(this.fetch)for(const n of t)for(const i of n.hooks)(i.hookType===xo.Sound||i.hookType===xo.SoundTweaked)&&this.wave(i.soundId)}get requested(){return this.asked.size}}let im=new nm;function lh(){return im}function va(e,t){return e>=0?t>=0:t<0}class An{portalDb;motionTable=null;player;currentStance=0;currentMotion=0;currentSubstateSpeed=1;actionQueue=[];nodeSeq=null;animationCache=new Map;playingAction=!1;linkQueue=[];chainKind=null;_currentStyleId=0;_isDead=!1;_deathCycleKey=0;_animationMissed=!1;constructor(t){this.portalDb=t,this.player=new Qd}get animationPlayer(){return this.player}get activeMotionTable(){return this.motionTable}get stance(){return this.currentStance}get motion(){return this.currentMotion}get currentStyleId(){return this._currentStyleId}get styleKey(){return this._currentStyleId&65535}overrideStyleId(t){this._currentStyleId=t}motionTableState=null;get isPlayingAction(){return this.playingAction}get motionsPending(){return this.playingAction||this.actionQueue.length>0}get isPlayingSubstateLink(){return this.playingAction&&this.chainKind==="substate"}get isDead(){return this._isDead}loadMotionTable(t){const n=this.portalDb.getFileData(t);return n?(this.motionTable=new Wd(new Ht(n)),this.motionTable):null}setMotionTable(t){this.motionTable=t}loadAnimation(t){const n=this.animationCache.get(t);if(n)return n;const i=this.portalDb.getFileData(t);if(!i)return null;const s=new rh(new Ht(i));return this.animationCache.set(t,s),lh().hooks(s.partFrames),s}static compositeKey(t,n){return(t&65535)<<16|n&1048575}get stateStyle(){return this._currentStyleId||(2147483648|this.currentStance>>>16)>>>0}findLink(t){return this.getLink(this.stateStyle,this.currentStance&65535,this.currentSubstateSpeed,t,1)}substateLinks(t,n){const i=this.motionTable;if(!i)return[];const s=this.stateStyle,a=this.currentStance&65535,r=this.currentSubstateSpeed;let o=this.getLink(s,a,r,t,n),l=null;if(!o||!va(n,r)){const u=i.styleDefaults.get(s)??0;o=this.getLink(s,a,r,u,1),l=this.getLink(s,u,1,t,n)}const c=[];return l?(o&&c.push({data:o,speed:r}),c.push({data:l,speed:n})):o&&c.push({data:o,speed:r<0&&n>0?-n:n}),c.filter(u=>u.data.anims.length>0)}playChain(t,n){const i=t[0];return i?(this.playingAction=!0,this.chainKind=n,this.linkQueue=t.slice(1),this.playMotionData(i.data,i.speed,!1,i.onComplete)):!1}changeCycleSpeed(t){const n=this.currentSubstateSpeed;this.currentSubstateSpeed=t;let i=null;Math.abs(n)>Oi?i=t/n:Math.abs(t)<Oi&&(i=0),!(i===null||this.playingAction||!this.nodeSeq)&&(this.nodeSeq.speed*=i,this.player.setSpeed(this.player.playbackSpeed*i))}revive(){this._isDead=!1,this._deathCycleKey=0}playDeath(t,n=1){if(!this.motionTable)return!1;const s=An.compositeKey(this._currentStyleId,t);if(this._isDead&&this.currentStance===s&&va(n,this.currentSubstateSpeed))return this.changeCycleSpeed(n),!0;const a=this.substateCycle(s),r=a?this.substateLinks(t,n):[];return this._isDead=!0,this._deathCycleKey=s,this.actionQueue.length=0,this._styleTransitionActive=!1,this.currentStance=s,this.currentMotion=s,this.currentSubstateSpeed=n,this.playChain(r,"death")?!0:(this.playingAction=!1,this.chainKind=null,this.linkQueue=[],a?this.playMotionData(a,n,!0):!1)}static adjustMotion(t,n,i,s=1){if(t===Lt.RunForward)return{motion:t,speed:n};let a=t,r=n;return a===Lt.WalkBackwards&&(a=Lt.WalkForward,r*=-.65),a===Lt.TurnLeft&&(a=Lt.TurnRight,r*=-1),a===Lt.SideStepLeft&&(a=Lt.SideStepRight,r*=-1),a===Lt.SideStepRight&&(r*=ys.SidestepFactor*(ys.WalkAnimSpeed/ys.SidestepAnimSpeed)),i&&(a===Lt.WalkForward?(r>0&&(a=Lt.RunForward),r*=s):a===Lt.TurnRight?r*=ys.RunTurnFactor:a===Lt.SideStepRight&&(r=Math.min(Math.abs(r)*s,ys.MaxSidestepAnimRate)*Math.sign(r||1))),{motion:a,speed:r}}setStanceFromId(t,n=1){if(!this.motionTable)return!1;this._currentStyleId=t;const i=this.motionTable.styleDefaults.get(t);if(i===void 0)return this.setDefaultStance(n);const s=An.compositeKey(t,i);return this.setStance(s,n)}changeStyle(t,n=1){const i=this.motionTable;if(!i)return!1;const s=this._currentStyleId;if(s===t)return!0;const a=i.styleDefaults.get(s);if(!s||a===void 0)return this.setStanceFromId(t,n);const r=An.compositeKey(t,a),o=i.cycles.get(r);if(!o||o.anims.length===0)return this.setStanceFromId(t,n);const l=this.currentSubstateSpeed,c=this.currentStance&65535,u=c!==(a&65535)?this.getLink(s,c,l,a,n):null;let f=this.getLink(s,a,l,t,n),h=null;if(!f){const _=i.defaultStyle,S=i.styleDefaults.get(_);f=this.getLink(s,a,1,_,1),h=S!==void 0?this.getLink(_,S,1,t,1):null}this._currentStyleId=t,this.currentStance=r,this.currentMotion=r,this.currentSubstateSpeed=n,this.actionQueue.length=0;const p=[u,f,h].filter(_=>!!_&&_.anims.length>0).map(_=>({data:_,speed:n}));return p.length===0?this.setStance(r,n):(this._styleTransitionActive=!0,this.playChain(p,"style"))}getLink(t,n,i,s,a){const r=this.motionTable;if(!r)return null;const o=(l,c)=>{const u=r.links.get(l>>>0);if(!u)return null;for(const[f,h]of u)if((f&65535)===(c&65535))return h;return null};if(a<0||i<0){const l=o(An.compositeKey(t,s),n);if(l)return l;const c=r.styleDefaults.get(t);return c===void 0?null:o(An.compositeKey(t,n),c)}return o(An.compositeKey(t,n),s)??o((t&65535)<<16,s)}get isChangingStyle(){return this._styleTransitionActive}_styleTransitionActive=!1;setStance(t,n=1){if(!this.motionTable)return!1;const i=this.motionTable.cycles.get(t);return!i||i.anims.length===0?!1:(this.currentStance=t,this.currentMotion=t,this.currentSubstateSpeed=n,this.playingAction=!1,this.chainKind=null,this.actionQueue.length=0,this.linkQueue=[],this._styleTransitionActive=!1,this.playMotionData(i,n,!0))}setDefaultStance(t=1){if(!this.motionTable)return!1;const n=this.motionTable.defaultStyle;this._currentStyleId=n;const i=this.motionTable.styleDefaults.get(n);if(i===void 0)return!1;const s=An.compositeKey(n,i);return this.setStance(s,t)}queueAction(t,n=1,i){this.actionQueue.push({motionId:t,speed:n,onComplete:i}),this.playingAction||this.playNextAction()}setForwardMotion(t,n=1){if(!this.motionTable)return!1;const i=t&65535,s=em(i);return s!==void 0&&tm(s)?(this.queueAction(t,n),!0):this.playingAction&&!this._isDead?(this.actionQueue.push({motionId:t,speed:n,substate:!0}),!0):this.applySubstate(t,n)}get targetSubstate(){for(let t=this.actionQueue.length-1;t>=0;t--)if(this.actionQueue[t].substate)return this.actionQueue[t].motionId;return this.currentStance}applySubstate(t,n){if(!this.motionTable)return!1;const s=this.substateCycle(t);if(!s||s.anims.length===0)return this.requestMotion(t,n);if(t===this.currentStance&&va(n,this.currentSubstateSpeed)&&this.player.currentAnimation)return this.changeCycleSpeed(n),!0;const a=this.substateLinks(t&65535,n);return this.currentStance=t,this.currentMotion=t,this.currentSubstateSpeed=n,this.playChain(a,"substate")?!0:(this.playingAction=!1,this.chainKind=null,this.linkQueue=[],this.playMotionData(s,n,!0))}requestMotion(t,n=1){if(!this.motionTable)return!1;const i=this.substateCycle(t);if(i&&i.anims.length>0)return this.currentMotion=t,this._isDead||(this.currentStance=t,this.currentSubstateSpeed=n),this.playingAction=!1,this.chainKind=null,this.linkQueue=[],this._styleTransitionActive=!1,this.playMotionData(i,n,!0);const s=t&65535;for(const[r,o]of this.motionTable.modifiers)if((r&65535)===s&&o.anims.length>0)return this.currentMotion=t,this.playMotionData(o,n,!1);const a=this.findLink(s);return a&&a.anims.length>0?(this.playingAction=!0,this.chainKind="action",this.linkQueue=[],this.currentMotion=t,this.playMotionData(a,n,!1)):!1}onHook(t){this.player.onHook(t)}update(t,n){this.player.update(t,n);for(let i=0;i<16;i++){if(this.player.isPlaying)return;const s=this.player.leftoverTime;if(this.advanceFinishedNode(),!this.player.isPlaying||(n&&this.player.enterNode(n),!(s>0)))return;this.player.update(s,n)}}advanceWithinMotionData(){const t=this.nodeSeq;return t?t.index+1<t.data.anims.length?this.playNode(t.index+1):t.looping&&t.data.anims.length>1?this.playNode(0):!1:!1}advanceFinishedNode(){if(!this.player.isPlaying&&this.advanceWithinMotionData()||!this.playingAction||this.player.isPlaying)return;const t=this.linkQueue.shift();if(t){this.playMotionData(t.data,t.speed,!1,t.onComplete);return}if(this.chainKind=null,this._isDead){this.playingAction=!1;const n=this.substateCycle(this._deathCycleKey);n&&this.playMotionData(n,this.currentSubstateSpeed,!0);return}this._styleTransitionActive=!1,this.playingAction=!1,this.actionQueue.length>0?this.playNextAction():this.setStance(this.currentStance,this.currentSubstateSpeed)}getPartTransforms(){return this.player.getPartTransforms()}getVelocity(){return this.motionTable?this.substateCycle(this.currentMotion)?.velocity??null:null}getCycleLength(t){if(!this.motionTable)return 0;const n=this.motionTable.cycles.get(t);if(!n)return 0;let i=0;for(const s of n.anims){const a=this.loadAnimation(s.animId);if(!a)continue;let r=s.highFrame;r===-1&&(r=a.numFrames),r>a.numFrames&&(r=a.numFrames);const o=r-s.lowFrame;i+=o/Math.abs(s.framerate)}return i}playMotionData(t,n,i,s){return t.anims.length===0?!1:(this.nodeSeq={data:t,speed:n,looping:i,index:0,onComplete:s},this.playNode(0))}playNode(t){const n=this.nodeSeq;if(!n)return!1;n.index=t;const i=n.data.anims.length,s=n.data.anims[t];if(!s)return!1;const a=n.speed,r=n.looping&&i===1,o=t===i-1?n.onComplete:void 0,l=this.loadAnimation(s.animId);if(!l)return this._animationMissed=!0,!1;this._animationMissed=!1;const c=Math.abs(s.framerate),u=s.framerate<0?-1:1;let f=s.lowFrame>=0?s.lowFrame:0,h=s.highFrame>=0?s.highFrame:l.numFrames-1;return f>=l.numFrames&&(f=l.numFrames-1),h>=l.numFrames&&(h=l.numFrames-1),f>h&&(h=f),this.player.play(l,f,h,c,a*u,r,o),!0}playNextAction(){for(;this.actionQueue.length>0&&this.motionTable;){const t=this.actionQueue.shift();if(t.substate){if(t.motionId===this.currentStance&&va(t.speed,this.currentSubstateSpeed)?(this.currentSubstateSpeed=t.speed,this.resumeSubstateCycle()):this.applySubstate(t.motionId,t.speed),this.playingAction)return;continue}if(this.startAction(t))return}!this.playingAction&&!this.player.isPlaying&&this.resumeSubstateCycle()}removeLinkAnimations(){if(!this.playingAction||this._isDead||!this.motionTable)return;let t=this.currentStance,n=this.currentSubstateSpeed;for(const i of this.actionQueue)i.substate&&(t=i.motionId,n=i.speed);this.actionQueue=[],this.linkQueue=[],this.playingAction=!1,this.chainKind=null,this._styleTransitionActive=!1,this.currentStance=t,this.currentSubstateSpeed=n,this.resumeSubstateCycle()}removeAllLinkAnimations(){if(!this.playingAction||!this.motionTable)return;if(!this._isDead){this.removeLinkAnimations();return}this.actionQueue=[],this.linkQueue=[],this.playingAction=!1,this.chainKind=null,this._styleTransitionActive=!1;const t=this.substateCycle(this._deathCycleKey);t&&t.anims.length>0&&(this.currentMotion=this._deathCycleKey,this.playMotionData(t,this.currentSubstateSpeed,!0))}substateCycle(t){const n=this.motionTable;if(!n)return;const i=n.cycles.get(t);return i||n.cycles.get(An.compositeKey(n.defaultStyle,t&65535))}get animationMissed(){return this._animationMissed}retryMissedAnimation(){if(!this._animationMissed||!this.motionTable||this.playingAction)return!1;const t=this._isDead?this._deathCycleKey:this.currentStance,n=this.substateCycle(t);return!n||n.anims.length===0?!1:(this._styleTransitionActive=!1,this.currentMotion=t,this.playMotionData(n,this.currentSubstateSpeed,!0))}resumeSubstateCycle(){const t=this.substateCycle(this.currentStance);!t||t.anims.length===0||(this.currentMotion=this.currentStance,this.playMotionData(t,this.currentSubstateSpeed,!0))}startAction(t){const n=this.motionTable;if(!n)return!1;const i=t.motionId&65535,s=this.stateStyle,a=this.currentStance&65535,r=this.currentSubstateSpeed,o=this.getLink(s,a,r,i,t.speed);if(o&&o.anims.length>0)return this.currentMotion=t.motionId,this.playChain([{data:o,speed:t.speed,onComplete:t.onComplete}],"action")||this.dropAction(t);if(!o&&n.cycles.has(this.currentStance)){const c=n.styleDefaults.get(s),u=c!==void 0?this.getLink(s,a,r,c,1):null,f=u&&c!==void 0?this.getLink(s,c,1,i,t.speed):null;if(u&&f&&f.anims.length>0&&c!==void 0){const h=this.getLink(s,c,1,a,r),p=[{data:u,speed:1},{data:f,speed:t.speed,onComplete:t.onComplete}];return h&&p.push({data:h,speed:1}),this.currentMotion=t.motionId,this.playChain(p.filter(_=>_.data.anims.length>0),"action")||this.dropAction(t)}}for(const[c,u]of n.modifiers)if((c&65535)===i&&u.anims.length>0)return this.playingAction=!0,this.chainKind="action",this.linkQueue=[],this.currentMotion=t.motionId,this.playMotionData(u,t.speed,!1,t.onComplete)||this.dropAction(t);const l=n.cycles.get(t.motionId);return l&&l.anims.length>0?(this.playingAction=!0,this.chainKind="action",this.linkQueue=[],this.currentMotion=t.motionId,this.playMotionData(l,t.speed,!1,t.onComplete)||this.dropAction(t)):(console.warn(`[Motion] No animation found for action 0x${t.motionId.toString(16)} from stance 0x${this.currentStance.toString(16)}`),this.dropAction(t))}dropAction(t){return this.playingAction=!1,this.chainKind=null,this.linkQueue=[],t.onComplete?.(),!1}clearCache(){this.animationCache.clear()}}function sm(e){const t=new Map;let n=-1;for(const s of e.children){const a=s.name.match(/^part_(\d+)$/);if(a){const r=parseInt(a[1],10);t.set(r,s),r>n&&(n=r)}}const i=[];for(let s=0;s<=n;s++)i.push(t.get(s)??null);return i}function am(e,t){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const s=e[i],a=t[i];!s||!a||(s.position.set(a.origin.x,a.origin.z,a.origin.y),s.quaternion.set(-a.orientation.x,-a.orientation.z,-a.orientation.y,a.orientation.w))}}class rm{group;motionManager;partObjects=[];constructor(t,n){this.group=t,this.motionManager=new An(n),this.collectParts()}initFromMotionTable(t){return!t||!this.motionManager.loadMotionTable(t)?!1:this.motionManager.setDefaultStance(1)}update(t,n){this.motionManager.update(t,n);const i=this.motionManager.getPartTransforms();i.length!==0&&this.applyPartTransforms(i)}applyPartTransforms(t){am(this.partObjects,t)}refreshParts(){this.collectParts()}rebind(t){this.group=t,this.collectParts()}collectParts(){this.partObjects=sm(this.group).map(t=>t??null)}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vl="186",om=0,fc=1,lm=2,Va=1,cm=2,Gs=3,oi=0,an=1,Tn=2,si=0,Gi=1,Mo=2,dc=3,mc=4,ch=5,Ii=100,um=101,hm=102,fm=103,dm=104,uh=200,hh=201,mm=202,pm=203,xl=204,Ml=205,gm=206,_m=207,vm=208,xm=209,Mm=210,Sm=211,bm=212,Am=213,Tm=214,So=0,bo=1,nr=2,qs=3,Ao=4,To=5,Eo=6,Ro=7,Sl=0,Em=1,Rm=2,Pn=0,fh=1,dh=2,mh=3,ph=4,gh=5,_h=6,vh=7,xh=300,Vi=301,Ss=302,Nr=303,Or=304,pr=306,ir=1e3,Bn=1001,Co=1002,Gt=1003,Cm=1004,xa=1005,Et=1006,za=1007,Rn=1008,fn=1009,Mh=1010,Sh=1011,Ks=1012,bl=1013,zn=1014,Hn=1015,Wn=1016,Al=1017,Tl=1018,Zs=1020,bh=35902,Ah=35899,Th=1021,Eh=1022,dn=1023,li=1026,Bi=1027,Rh=1028,El=1029,zi=1030,Rl=1031,Cl=1033,Wa=33776,Xa=33777,$a=33778,Ya=33779,wo=35840,Lo=35841,Do=35842,yo=35843,Uo=36196,No=37492,Oo=37496,Io=37488,Fo=37489,sr=37490,ko=37491,Bo=37808,Ho=37809,Go=37810,Po=37811,Vo=37812,zo=37813,Wo=37814,Xo=37815,$o=37816,Yo=37817,qo=37818,Ko=37819,Zo=37820,Jo=37821,Qo=36492,jo=36494,el=36495,tl=36283,nl=36284,ar=36285,il=36286,wm=3200,sl=0,Lm=1,Ai="",nn="srgb",rr="srgb-linear",or="linear",rt="srgb",Ir=7680,Dm=519,ym=512,Um=513,Nm=514,wl=515,Om=516,Im=517,Ll=518,Fm=519,km=35044,pc="300 es",Gn=2e3,Js=2001;function Bm(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function lr(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Hm(){const e=lr("canvas");return e.style.display="block",e}const gc={};function _c(...e){const t="THREE."+e.shift();console.log(t,...e)}function Ch(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ie(...e){e=Ch(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function tt(...e){e=Ch(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function xs(...e){const t=e.join(" ");t in gc||(gc[t]=!0,Ie(...e))}function Gm(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}const Pm={[So]:bo,[nr]:Eo,[Ao]:Ro,[qs]:To,[bo]:So,[Eo]:nr,[Ro]:Ao,[To]:qs};class Wi{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,al=180/Math.PI;function ia(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[e&255]+zt[e>>8&255]+zt[e>>16&255]+zt[e>>24&255]+"-"+zt[t&255]+zt[t>>8&255]+"-"+zt[t>>16&15|64]+zt[t>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function qe(e,t,n){return Math.max(t,Math.min(n,e))}function Vm(e,t){return(e%t+t)%t}function kr(e,t,n){return(1-n)*e+n*t}function Us(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class Qe{static{Qe.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=qe(this.x,t.x,n.x),this.y=qe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=qe(this.x,t,n),this.y=qe(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ts{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=a[r+0],p=a[r+1],_=a[r+2],S=a[r+3];if(f!==S||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+f*S;m<0&&(h=-h,p=-p,_=-_,S=-S,m=-m);let d=1-o;if(m<.9995){const A=Math.acos(m),R=Math.sin(A);d=Math.sin(d*A)/R,o=Math.sin(o*A)/R,l=l*d+h*o,c=c*d+p*o,u=u*d+_*o,f=f*d+S*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+_*o,f=f*d+S*o;const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=f}static multiplyQuaternionsFlat(t,n,i,s,a,r){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=a[r],h=a[r+1],p=a[r+2],_=a[r+3];return t[n]=o*_+u*f+l*p-c*h,t[n+1]=l*_+u*h+c*f-o*p,t[n+2]=c*_+u*p+o*h-l*f,t[n+3]=u*_-o*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(a/2),h=l(i/2),p=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{static{V.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(vc.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),f=2*(a*i-r*n);return this.x=n+l*c+r*f-o*u,this.y=i+l*u+o*c-a*f,this.z=s+l*f+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=qe(this.x,t.x,n.x),this.y=qe(this.y,t.y,n.y),this.z=qe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=qe(this.x,t,n),this.y=qe(this.y,t,n),this.z=qe(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Br.copy(this).projectOnVector(t),this.sub(Br)}reflect(t){return this.sub(Br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new V,vc=new Ts;class Be{static{Be.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],S=s[0],m=s[3],d=s[6],A=s[1],R=s[4],M=s[7],T=s[2],E=s[5],w=s[8];return a[0]=r*S+o*A+l*T,a[3]=r*m+o*R+l*E,a[6]=r*d+o*M+l*w,a[1]=c*S+u*A+f*T,a[4]=c*m+u*R+f*E,a[7]=c*d+u*M+f*w,a[2]=h*S+p*A+_*T,a[5]=h*m+p*R+_*E,a[8]=h*d+p*M+_*w,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*r-o*c,h=o*l-u*a,p=c*a-r*l,_=n*f+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=f*S,t[1]=(s*c-u*i)*S,t[2]=(o*i-s*r)*S,t[3]=h*S,t[4]=(u*n-s*l)*S,t[5]=(s*a-o*n)*S,t[6]=p*S,t[7]=(i*l-c*n)*S,t[8]=(r*n-i*a)*S,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hr.makeScale(t,n)),this}rotate(t){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hr.makeRotation(-t)),this}translate(t,n){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hr.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new Be,xc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zm(){const e={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===rt&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===rt&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[rr]:{primaries:t,whitePoint:i,transfer:or,toXYZ:xc,fromXYZ:Mc,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:i,transfer:rt,toXYZ:xc,fromXYZ:Mc,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),e}const Ye=zm();function ai(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ms(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let qi;class Wm{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{qi===void 0&&(qi=lr("canvas")),qi.width=t.width,qi.height=t.height;const s=qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=qi}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=lr("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ai(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ai(n[i]/255)*255):n[i]=ai(n[i]);return{data:n,width:t.width,height:t.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xm=0;class gr{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=ia(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Gr(s[r].image)):a.push(Gr(s[r]))}else a=Gr(s);i.url=a}return n||(t.images[this.uuid]=i),i}}function Gr(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Wm.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let $m=0;const Pr=new V;let Ln=class qa extends Wi{constructor(t=qa.DEFAULT_IMAGE,n=qa.DEFAULT_MAPPING,i=Bn,s=Bn,a=Et,r=Rn,o=dn,l=fn,c=qa.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=ia(),this.name="",this.source=new gr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pr).x}get height(){return this.source.getSize(Pr).y}get depth(){return this.source.getSize(Pr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case Co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case Co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=xh;Ln.DEFAULT_ANISOTROPY=1;class St{static{St.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(c+1)/2,M=(p+1)/2,T=(d+1)/2,E=(u+h)/4,w=(f+S)/4,v=(_+m)/4;return R>M&&R>T?R<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(R),s=E/i,a=w/i):M>T?M<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),i=E/s,a=v/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=w/a,s=v/a),this.set(i,s,a,n),this}let A=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-S)/A,this.z=(h-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=qe(this.x,t.x,n.x),this.y=qe(this.y,t.y,n.y),this.z=qe(this.z,t.z,n.z),this.w=qe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=qe(this.x,t,n),this.y=qe(this.y,t,n),this.z=qe(this.z,t,n),this.w=qe(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ym extends Wi{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,t,n),this.scissorTest=!1,this.viewport=new St(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:i.depth},a=new Ln(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new gr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Ym{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class wh extends Ln{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qm extends Ln{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class _t{static{_t.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,u,f,h,p,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,f,h,p,_,S,m)}set(t,n,i,s,a,r,o,l,c,u,f,h,p,_,S,m){const d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=s,d[1]=a,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,i=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),a=1/Ki.setFromMatrixColumn(t,1).length(),r=1/Ki.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const h=r*u,p=r*f,_=o*u,S=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-S*c,n[9]=-o*l,n[2]=S-h*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){const h=l*u,p=l*f,_=c*u,S=c*f;n[0]=h+S*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*f,n[5]=r*u,n[9]=-o,n[2]=p*o-_,n[6]=S+h*o,n[10]=r*l}else if(t.order==="ZXY"){const h=l*u,p=l*f,_=c*u,S=c*f;n[0]=h-S*o,n[4]=-r*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*u,n[9]=S-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const h=r*u,p=r*f,_=o*u,S=o*f;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+S,n[1]=l*f,n[5]=S*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const h=r*l,p=r*c,_=o*l,S=o*c;n[0]=l*u,n[4]=S-h*f,n[8]=_*f+p,n[1]=f,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+_,n[10]=h-S*f}else if(t.order==="XZY"){const h=r*l,p=r*c,_=o*l,S=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+S,n[5]=r*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*u,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Km,t,Zm)}lookAt(t,n,i){const s=this.elements;return cn.subVectors(t,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),di.crossVectors(i,cn),di.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),di.crossVectors(i,cn)),di.normalize(),Ma.crossVectors(cn,di),s[0]=di.x,s[4]=Ma.x,s[8]=cn.x,s[1]=di.y,s[5]=Ma.y,s[9]=cn.y,s[2]=di.z,s[6]=Ma.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],S=i[6],m=i[10],d=i[14],A=i[3],R=i[7],M=i[11],T=i[15],E=s[0],w=s[4],v=s[8],b=s[12],L=s[1],D=s[5],O=s[9],G=s[13],I=s[2],H=s[6],J=s[10],W=s[14],ie=s[3],Y=s[7],ee=s[11],ne=s[15];return a[0]=r*E+o*L+l*I+c*ie,a[4]=r*w+o*D+l*H+c*Y,a[8]=r*v+o*O+l*J+c*ee,a[12]=r*b+o*G+l*W+c*ne,a[1]=u*E+f*L+h*I+p*ie,a[5]=u*w+f*D+h*H+p*Y,a[9]=u*v+f*O+h*J+p*ee,a[13]=u*b+f*G+h*W+p*ne,a[2]=_*E+S*L+m*I+d*ie,a[6]=_*w+S*D+m*H+d*Y,a[10]=_*v+S*O+m*J+d*ee,a[14]=_*b+S*G+m*W+d*ne,a[3]=A*E+R*L+M*I+T*ie,a[7]=A*w+R*D+M*H+T*Y,a[11]=A*v+R*O+M*J+T*ee,a[15]=A*b+R*G+M*W+T*ne,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],_=t[3],S=t[7],m=t[11],d=t[15],A=l*p-c*h,R=o*p-c*f,M=o*h-l*f,T=r*p-c*u,E=r*h-l*u,w=r*f-o*u;return n*(S*A-m*R+d*M)-i*(_*A-m*T+d*E)+s*(_*R-S*T+d*w)-a*(_*M-S*E+m*w)}determinantAffine(){const t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return n*(r*u-o*c)-i*(a*u-o*l)+s*(a*c-r*l)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],_=t[12],S=t[13],m=t[14],d=t[15],A=n*o-i*r,R=n*l-s*r,M=n*c-a*r,T=i*l-s*o,E=i*c-a*o,w=s*c-a*l,v=u*S-f*_,b=u*m-h*_,L=u*d-p*_,D=f*m-h*S,O=f*d-p*S,G=h*d-p*m,I=A*G-R*O+M*D+T*L-E*b+w*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return t[0]=(o*G-l*O+c*D)*H,t[1]=(s*O-i*G-a*D)*H,t[2]=(S*w-m*E+d*T)*H,t[3]=(h*E-f*w-p*T)*H,t[4]=(l*L-r*G-c*b)*H,t[5]=(n*G-s*L+a*b)*H,t[6]=(m*M-_*w-d*R)*H,t[7]=(u*w-h*M+p*R)*H,t[8]=(r*O-o*L+c*v)*H,t[9]=(i*L-n*O-a*v)*H,t[10]=(_*E-S*M+d*A)*H,t[11]=(f*M-u*E-p*A)*H,t[12]=(o*b-r*D-l*v)*H,t[13]=(n*D-i*b+s*v)*H,t[14]=(S*R-_*T-m*A)*H,t[15]=(u*T-f*R+h*A)*H,this}scale(t){const n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,f=o+o,h=a*c,p=a*u,_=a*f,S=r*u,m=r*f,d=o*f,A=l*c,R=l*u,M=l*f,T=i.x,E=i.y,w=i.z;return s[0]=(1-(S+d))*T,s[1]=(p+M)*T,s[2]=(_-R)*T,s[3]=0,s[4]=(p-M)*E,s[5]=(1-(h+d))*E,s[6]=(m+A)*E,s[7]=0,s[8]=(_+R)*w,s[9]=(m-A)*w,s[10]=(1-(h+S))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Ki.set(s[0],s[1],s[2]).length();const o=Ki.set(s[4],s[5],s[6]).length(),l=Ki.set(s[8],s[9],s[10]).length();a<0&&(r=-r),xn.copy(this);const c=1/r,u=1/o,f=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,n.setFromRotationMatrix(xn),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Gn,l=!1){const c=this.elements,u=2*a/(n-t),f=2*a/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s);let _,S;if(l)_=a/(r-a),S=r*a/(r-a);else if(o===Gn)_=-(r+a)/(r-a),S=-2*r*a/(r-a);else if(o===Js)_=-r/(r-a),S=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Gn,l=!1){const c=this.elements,u=2/(n-t),f=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s);let _,S;if(l)_=1/(r-a),S=r/(r-a);else if(o===Gn)_=-2/(r-a),S=-(r+a)/(r-a);else if(o===Js)_=-1/(r-a),S=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Ki=new V,xn=new _t,Km=new V(0,0,0),Zm=new V(1,1,1),di=new V,Ma=new V,cn=new V,Sc=new _t,bc=new Ts;class Ti{constructor(t=0,n=0,i=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sc,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return bc.setFromEuler(this),this.setFromQuaternion(bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jm=0;const Ac=new V,Zi=new Ts,Kn=new _t,Sa=new V,Ns=new V,Qm=new V,jm=new Ts,Tc=new V(1,0,0),Ec=new V(0,1,0),Rc=new V(0,0,1),Cc={type:"added"},ep={type:"removed"},Ji={type:"childadded",child:null},Vr={type:"childremoved",child:null};class Zt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const t=new V,n=new Ti,i=new Ts,s=new V(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Be}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Zi.setFromAxisAngle(t,n),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,n){return Zi.setFromAxisAngle(t,n),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(Ec,t)}rotateZ(t){return this.rotateOnAxis(Rc,t)}translateOnAxis(t,n){return Ac.copy(t).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(Ec,t)}translateZ(t){return this.translateOnAxis(Rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Sa.copy(t):Sa.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Ns,Sa,this.up):Kn.lookAt(Sa,Ns,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Kn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(tt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(ep),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,Qm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,jm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(t.shapes,f)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),f=r(t.shapes),h=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.DEFAULT_UP=new V(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ms extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tp={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const S of t.hand.values()){const m=n.getJointPose(S,i),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new ms;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Wr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Je{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Ye.workingColorSpace){return this.r=t,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Ye.workingColorSpace){if(t=Vm(t,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Wr(r,a,t+1/3),this.g=Wr(r,a,t),this.b=Wr(r,a,t-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(t,n=nn){function i(a){a!==void 0&&parseFloat(a)<1&&Ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=nn){const i=Dh[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Ye.workingToColorSpace(Wt.copy(this),t),Math.round(qe(Wt.r*255,0,255))*65536+Math.round(qe(Wt.g*255,0,255))*256+Math.round(qe(Wt.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ye.workingColorSpace){Ye.workingToColorSpace(Wt.copy(this),n);const i=Wt.r,s=Wt.g,a=Wt.b,r=Math.max(i,s,a),o=Math.min(i,s,a);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=u<=.5?f/(r+o):f/(2-r-o),r){case i:l=(s-a)/f+(s<a?6:0);break;case s:l=(a-i)/f+2;break;case a:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=Ye.workingColorSpace){return Ye.workingToColorSpace(Wt.copy(this),n),t.r=Wt.r,t.g=Wt.g,t.b=Wt.b,t}getStyle(t=nn){Ye.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,s=Wt.b;return t!==nn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+n,mi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(mi),t.getHSL(ba);const i=kr(mi.h,ba.h,n),s=kr(mi.s,ba.s,n),a=kr(mi.l,ba.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Je;Je.NAMES=Dh;class yh extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Mn=new V,Zn=new V,Xr=new V,Jn=new V,Qi=new V,ji=new V,wc=new V,$r=new V,Yr=new V,qr=new V,Kr=new St,Zr=new St,Jr=new St;class En{constructor(t=new V,n=new V,i=new V){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Mn.subVectors(t,n),s.cross(Mn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Mn.subVectors(s,n),Zn.subVectors(i,n),Xr.subVectors(t,n);const r=Mn.dot(Mn),o=Mn.dot(Zn),l=Mn.dot(Xr),c=Zn.dot(Zn),u=Zn.dot(Xr),f=r*c-o*o;if(f===0)return a.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,_=(r*u-o*l)*h;return a.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Jn.x),l.addScaledVector(r,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Kr.setScalar(0),Zr.setScalar(0),Jr.setScalar(0),Kr.fromBufferAttribute(t,n),Zr.fromBufferAttribute(t,i),Jr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Kr,a.x),r.addScaledVector(Zr,a.y),r.addScaledVector(Jr,a.z),r}static isFrontFacing(t,n,i,s){return Mn.subVectors(i,n),Zn.subVectors(t,n),Mn.cross(Zn).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Mn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return En.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return En.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,a=this.c;let r,o;Qi.subVectors(s,i),ji.subVectors(a,i),$r.subVectors(t,i);const l=Qi.dot($r),c=ji.dot($r);if(l<=0&&c<=0)return n.copy(i);Yr.subVectors(t,s);const u=Qi.dot(Yr),f=ji.dot(Yr);if(u>=0&&f<=u)return n.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(Qi,r);qr.subVectors(t,a);const p=Qi.dot(qr),_=ji.dot(qr);if(_>=0&&p<=_)return n.copy(a);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(ji,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return wc.subVectors(a,s),o=(f-u)/(f-u+(p-_)),n.copy(s).addScaledVector(wc,o);const d=1/(m+S+h);return r=S*d,o=h*d,n.copy(i).addScaledVector(Qi,r).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Es{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Sn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Sn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Sn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Sn):Sn.fromBufferAttribute(a,r),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Ta.subVectors(this.max,Os),es.subVectors(t.a,Os),ts.subVectors(t.b,Os),ns.subVectors(t.c,Os),pi.subVectors(ts,es),gi.subVectors(ns,ts),Ri.subVectors(es,ns);let n=[0,-pi.z,pi.y,0,-gi.z,gi.y,0,-Ri.z,Ri.y,pi.z,0,-pi.x,gi.z,0,-gi.x,Ri.z,0,-Ri.x,-pi.y,pi.x,0,-gi.y,gi.x,0,-Ri.y,Ri.x,0];return!Qr(n,es,ts,ns,Ta)||(n=[1,0,0,0,1,0,0,0,1],!Qr(n,es,ts,ns,Ta))?!1:(Ea.crossVectors(pi,gi),n=[Ea.x,Ea.y,Ea.z],Qr(n,es,ts,ns,Ta))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qn=[new V,new V,new V,new V,new V,new V,new V,new V],Sn=new V,Aa=new Es,es=new V,ts=new V,ns=new V,pi=new V,gi=new V,Ri=new V,Os=new V,Ta=new V,Ea=new V,Ci=new V;function Qr(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Ci.fromArray(e,a);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=n.dot(Ci),u=i.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wt=new V,Ra=new Qe;let np=0;class Bt extends Wi{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:np++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=km,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ra.fromBufferAttribute(this,n),Ra.applyMatrix3(t),this.setXY(n,Ra.x,Ra.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(t),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(t),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(t),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(t),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Us(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Us(n,this.array)),n}setX(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Us(n,this.array)),n}setY(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Us(n,this.array)),n}setZ(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Us(n,this.array)),n}setW(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),s=en(s,this.array),a=en(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Uh extends Bt{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Nh extends Bt{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class ri extends Bt{constructor(t,n,i){super(new Float32Array(t),n,i)}}const ip=new Es,Is=new V,jr=new V;class Dl{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):ip.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const n=Is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Is,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(jr)),this.expandByPoint(Is.copy(t.center).sub(jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let sp=0;const pn=new _t,eo=new Zt,is=new V,un=new Es,Fs=new Es,Ft=new V;class wn extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bm(t)?Nh:Uh)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Be().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,n,i){return pn.makeTranslation(t,n,i),this.applyMatrix4(pn),this}scale(t,n,i){return pn.makeScale(t,n,i),this.applyMatrix4(pn),this}lookAt(t){return eo.lookAt(t),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ri(i,3))}else{const i=Math.min(t.length,n.count);for(let s=0;s<i;s++){const a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const a=n[i];un.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const o=n[a];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(un.min,Fs.min),un.expandByPoint(Ft),Ft.addVectors(un.max,Fs.max),un.expandByPoint(Ft)):(un.expandByPoint(Fs.min),un.expandByPoint(Fs.max))}un.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)Ft.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Ft));if(n)for(let a=0,r=n.length;a<r;a++){const o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(t,c),Ft.add(is)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,a=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Bt(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new V,l[v]=new V;const c=new V,u=new V,f=new V,h=new Qe,p=new Qe,_=new Qe,S=new V,m=new V;function d(v,b,L){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,L),h.fromBufferAttribute(a,v),p.fromBufferAttribute(a,b),_.fromBufferAttribute(a,L),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),o[v].add(S),o[b].add(S),o[L].add(S),l[v].add(m),l[b].add(m),l[L].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let v=0,b=A.length;v<b;++v){const L=A[v],D=L.start,O=L.count;for(let G=D,I=D+O;G<I;G+=3)d(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const R=new V,M=new V,T=new V,E=new V;function w(v){T.fromBufferAttribute(s,v),E.copy(T);const b=o[v];R.copy(b),R.sub(T.multiplyScalar(T.dot(b))).normalize(),M.crossVectors(E,b);const D=M.dot(l[v])<0?-1:1;r.setXYZW(v,R.x,R.y,R.z,D)}for(let v=0,b=A.length;v<b;++v){const L=A[v],D=L.start,O=L.count;for(let G=D,I=D+O;G<I;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Bt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new V,a=new V,r=new V,o=new V,l=new V,c=new V,u=new V,f=new V;if(t)for(let h=0,p=t.count;h<p;h+=3){const _=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,S),r.fromBufferAttribute(n,m),u.subVectors(r,a),f.subVectors(s,a),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),u.subVectors(r,a),f.subVectors(s,a),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ft.fromBufferAttribute(t,n),Ft.normalize(),t.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Bt(h,u,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);n.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const a=t.morphAttributes;for(const c in a){const u=[],f=a[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const to=new V,ap=new V,rp=new Be;class xi{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=to.subVectors(i,n).cross(ap.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const s=t.delta(to),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||rp.getNormalMatrix(t),s=this.coplanarPoint(to).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let op=0;class Xi extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=Gi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=Ml,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(n){const a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new xi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qe().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const jn=new V,no=new V,Ca=new V,wa=new V;class lp{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=jn.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,n),jn.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){no.copy(t).add(n).multiplyScalar(.5),Ca.copy(n).sub(t).normalize(),wa.copy(this.origin).sub(no);const a=t.distanceTo(n)*.5,r=-this.direction.dot(Ca),o=wa.dot(this.direction),l=-wa.dot(Ca),c=wa.lengthSq(),u=Math.abs(1-r*r);let f,h,p,_;if(u>0)if(f=r*l-o,h=r*o-l,_=a*u,f>=0)if(h>=-_)if(h<=_){const S=1/u;f*=S,h*=S,p=f*(f+r*h+2*o)+h*(r*f+h+2*l)+c}else h=a,f=Math.max(0,-(r*h+o)),p=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(r*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-r*a+o)),h=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(f=Math.max(0,-(r*a+o)),h=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+c);else h=r>0?-a:a,f=Math.max(0,-(r*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(no).addScaledVector(Ca,h),p}intersectSphere(t,n){if(t.radius<0)return null;jn.subVectors(t.center,this.origin);const i=jn.dot(this.direction),s=jn.dot(jn)-i*i,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(a=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(a=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,n,i,s,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-r.x,h=t.y-r.y,p=t.z-r.z,_=n.x-r.x,S=n.y-r.y,m=n.z-r.z,d=i.x-r.x,A=i.y-r.y,R=i.z-r.z,M=Math.abs(l),T=Math.abs(c),E=Math.abs(u);let w,v,b,L,D,O,G,I,H,J,W,ie;if(M>=T&&M>=E?(b=l,O=f,H=_,ie=d,l>=0?(w=c,v=u,L=h,D=p,G=S,I=m,J=A,W=R):(w=u,v=c,L=p,D=h,G=m,I=S,J=R,W=A)):T>=E?(b=c,O=h,H=S,ie=A,c>=0?(w=u,v=l,L=p,D=f,G=m,I=_,J=R,W=d):(w=l,v=u,L=f,D=p,G=_,I=m,J=d,W=R)):(b=u,O=p,H=m,ie=R,u>=0?(w=l,v=c,L=f,D=h,G=_,I=S,J=d,W=A):(w=c,v=l,L=h,D=f,G=S,I=_,J=A,W=d)),b===0)return null;const Y=w/b,ee=v/b,ne=1/b,Ue=L-Y*O,we=D-ee*O,ut=G-Y*H,Ke=I-ee*H,nt=J-Y*ie,q=W-ee*ie,j=nt*Ke-q*ut,Me=Ue*q-we*nt,Fe=ut*we-Ke*Ue;if(s){if(j<0||Me<0||Fe<0)return null}else if((j<0||Me<0||Fe<0)&&(j>0||Me>0||Fe>0))return null;const ve=j+Me+Fe;if(ve===0)return null;const ze=ne*(j*O+Me*H+Fe*ie);return(ve>0?ze<0:ze>0)?null:this.at(ze/ve,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yl extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Lc=new _t,wi=new lp,La=new Dl,Dc=new V,Da=new V,ya=new V,Ua=new V,io=new V,Na=new V,yc=new V,Oa=new V;class Xn extends Zt{constructor(t=new wn,n=new yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){Na.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],f=a[l];u!==0&&(io.fromBufferAttribute(f,t),r?Na.addScaledVector(io,u):Na.addScaledVector(io.sub(n),u))}n.add(Na)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(a),wi.copy(t.ray).recast(t.near),!(La.containsPoint(wi.origin)===!1&&(wi.intersectSphere(La,Dc)===null||wi.origin.distanceToSquared(Dc)>(t.far-t.near)**2))&&(Lc.copy(a).invert(),wi.copy(t.ray).applyMatrix4(Lc),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,wi)))}_computeIntersections(t,n,i){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=r[m.materialIndex],A=Math.max(m.start,p.start),R=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,T=R;M<T;M+=3){const E=o.getX(M),w=o.getX(M+1),v=o.getX(M+2);s=Ia(this,d,t,i,c,u,f,E,w,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const A=o.getX(m),R=o.getX(m+1),M=o.getX(m+2);s=Ia(this,r,t,i,c,u,f,A,R,M),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=r[m.materialIndex],A=Math.max(m.start,p.start),R=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,T=R;M<T;M+=3){const E=M,w=M+1,v=M+2;s=Ia(this,d,t,i,c,u,f,E,w,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const A=m,R=m+1,M=m+2;s=Ia(this,r,t,i,c,u,f,A,R,M),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function cp(e,t,n,i,s,a,r,o){let l;if(t.side===an?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===oi,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Oa);return c<n.near||c>n.far?null:{distance:c,point:Oa.clone(),object:e}}function Ia(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Da),e.getVertexPosition(l,ya),e.getVertexPosition(c,Ua);const u=cp(e,t,n,i,Da,ya,Ua,yc);if(u){const f=new V;En.getBarycoord(yc,Da,ya,Ua,f),s&&(u.uv=En.getInterpolatedAttribute(s,o,l,c,f,new Qe)),a&&(u.uv1=En.getInterpolatedAttribute(a,o,l,c,f,new Qe)),r&&(u.normal=En.getInterpolatedAttribute(r,o,l,c,f,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new V,materialIndex:0};En.getNormal(Da,ya,Ua,h.normal),u.face=h,u.barycoord=f}return u}class rl extends Ln{constructor(t=null,n=1,i=1,s,a,r,o,l,c=Gt,u=Gt,f,h){super(null,r,o,l,c,u,s,a,f,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Li=new Dl,up=new Qe(.5,.5),Fa=new V;class Ul{constructor(t=new xi,n=new xi,i=new xi,s=new xi,a=new xi,r=new xi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Gn,i=!1){const s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],f=a[5],h=a[6],p=a[7],_=a[8],S=a[9],m=a[10],d=a[11],A=a[12],R=a[13],M=a[14],T=a[15];if(s[0].setComponents(c-r,p-u,d-_,T-A).normalize(),s[1].setComponents(c+r,p+u,d+_,T+A).normalize(),s[2].setComponents(c+o,p+f,d+S,T+R).normalize(),s[3].setComponents(c-o,p-f,d-S,T-R).normalize(),i)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,p-h,d-m,T-M).normalize();else if(s[4].setComponents(c-l,p-h,d-m,T-M).normalize(),n===Gn)s[5].setComponents(c+l,p+h,d+m,T+M).normalize();else if(n===Js)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Li.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);const n=up.distanceTo(t.center);return Li.radius=.7071067811865476+n,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Fa.x=s.normal.x>0?t.max.x:t.min.x,Fa.y=s.normal.y>0?t.max.y:t.min.y,Fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Oh extends Ln{constructor(t=[],n=Vi,i,s,a,r,o,l,c,u){super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qs extends Ln{constructor(t,n,i=zn,s,a,r,o=Gt,l=Gt,c,u=li,f=1){if(u!==li&&u!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:n,depth:f};super(h,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}}class hp extends Qs{constructor(t,n=zn,i=Vi,s,a,r=Gt,o=Gt,l,c=li){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,n,i,s,a,r,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ih extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sa extends wn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(f,2));function _(S,m,d,A,R,M,T,E,w,v,b){const L=M/w,D=T/v,O=M/2,G=T/2,I=E/2,H=w+1,J=v+1;let W=0,ie=0;const Y=new V;for(let ee=0;ee<J;ee++){const ne=ee*D-G;for(let Ue=0;Ue<H;Ue++){const we=Ue*L-O;Y[S]=we*A,Y[m]=ne*R,Y[d]=I,c.push(Y.x,Y.y,Y.z),Y[S]=0,Y[m]=0,Y[d]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(Ue/w),f.push(1-ee/v),W+=1}}for(let ee=0;ee<v;ee++)for(let ne=0;ne<w;ne++){const Ue=h+ne+H*ee,we=h+ne+H*(ee+1),ut=h+(ne+1)+H*(ee+1),Ke=h+(ne+1)+H*ee;l.push(Ue,we,Ke),l.push(we,ut,Ke),ie+=6}o.addGroup(p,ie,b),p+=ie,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class _r extends wn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=n/l,p=[],_=[],S=[],m=[];for(let d=0;d<u;d++){const A=d*h-r;for(let R=0;R<c;R++){const M=R*f-a;_.push(M,-A,0),S.push(0,0,1),m.push(R/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const R=A+c*d,M=A+c*(d+1),T=A+1+c*(d+1),E=A+1+c*d;p.push(R,M,E),p.push(M,T,E)}this.setIndex(p),this.setAttribute("position",new ri(_,3)),this.setAttribute("normal",new ri(S,3)),this.setAttribute("uv",new ri(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.width,t.height,t.widthSegments,t.heightSegments)}}function bs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];if(Uc(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(Uc(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Qt(e){const t={};for(let n=0;n<e.length;n++){const i=bs(e[n]);for(const s in i)t[s]=i[s]}return t}function Uc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function fp(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Fh(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ye.workingColorSpace}const dp={clone:bs,merge:Qt};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(s.value);break;case"v2":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new St().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class gp extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vs extends Xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Sl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _p extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vp extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class kh extends Zt{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const so=new _t,Nc=new V,Oc=new V;class xp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera;Nc.setFromMatrixPosition(t.matrixWorld),n.position.copy(Nc),Oc.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Oc),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){so.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(so,t.coordinateSystem,t.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===Js||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ka=new V,Ba=new Ts,Nn=new V;class Bh extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ka,Ba,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ba,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(ka,Ba,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ba,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _i=new V,Ic=new Qe,Fc=new Qe;class sn extends Bh{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=al*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return al*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,n){return this.getViewBounds(t,Ic,Fc),n.subVectors(Fc,Ic)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Nl extends Bh{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Mp extends xp{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sp extends kh{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Mp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class bp extends kh{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ss=-90,as=1;class Ap extends Zt{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(ss,as,t,n);s.layers=this.layers,this.add(s);const a=new sn(ss,as,t,n);a.layers=this.layers,this.add(a);const r=new sn(ss,as,t,n);r.layers=this.layers,this.add(r);const o=new sn(ss,as,t,n);o.layers=this.layers,this.add(o);const l=new sn(ss,as,t,n);l.layers=this.layers,this.add(l);const c=new sn(ss,as,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(const c of n)this.remove(c);if(t===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(f,h,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Tp extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Hh{static{Hh.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){const a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}}function kc(e,t,n,i){const s=Ep(i);switch(n){case Th:return e*t;case Rh:return e*t/s.components*s.byteLength;case El:return e*t/s.components*s.byteLength;case zi:return e*t*2/s.components*s.byteLength;case Rl:return e*t*2/s.components*s.byteLength;case Eh:return e*t*3/s.components*s.byteLength;case dn:return e*t*4/s.components*s.byteLength;case Cl:return e*t*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $a:case Ya:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Lo:case yo:return Math.max(e,16)*Math.max(t,8)/4;case wo:case Do:return Math.max(e,8)*Math.max(t,8)/2;case Uo:case No:case Io:case Fo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Oo:case sr:case ko:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Go:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Po:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case $o:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Qo:case jo:case el:return Math.ceil(e/4)*Math.ceil(t/4)*16;case tl:case nl:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ar:case il:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ep(e){switch(e){case fn:case Mh:return{byteLength:1,components:1};case Ks:case Sh:case Wn:return{byteLength:2,components:1};case Al:case Tl:return{byteLength:2,components:4};case zn:case bl:case Hn:return{byteLength:4,components:1};case bh:case Ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gh(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function Rp(e){const t=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(e.bindBuffer(c,o),f.length===0)e.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const S=f[p];e.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ip=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,xg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Eg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,O0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Q0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Cp,alphahash_pars_fragment:wp,alphamap_fragment:Lp,alphamap_pars_fragment:Dp,alphatest_fragment:yp,alphatest_pars_fragment:Up,aomap_fragment:Np,aomap_pars_fragment:Op,batching_pars_vertex:Ip,batching_vertex:Fp,begin_vertex:kp,beginnormal_vertex:Bp,bsdfs:Hp,iridescence_fragment:Gp,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:$p,color_pars_fragment:Yp,color_pars_vertex:qp,color_vertex:Kp,common:Zp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:jp,displacementmap_vertex:eg,emissivemap_fragment:tg,emissivemap_pars_fragment:ng,colorspace_fragment:ig,colorspace_pars_fragment:sg,envmap_fragment:ag,envmap_common_pars_fragment:rg,envmap_pars_fragment:og,envmap_pars_vertex:lg,envmap_physical_pars_fragment:xg,envmap_vertex:cg,fog_vertex:ug,fog_pars_vertex:hg,fog_fragment:fg,fog_pars_fragment:dg,gradientmap_pars_fragment:mg,lightmap_pars_fragment:pg,lights_lambert_fragment:gg,lights_lambert_pars_fragment:_g,lights_pars_begin:vg,lights_toon_fragment:Mg,lights_toon_pars_fragment:Sg,lights_phong_fragment:bg,lights_phong_pars_fragment:Ag,lights_physical_fragment:Tg,lights_physical_pars_fragment:Eg,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:wg,lightprobes_pars_fragment:Lg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Ng,map_fragment:Og,map_pars_fragment:Ig,map_particle_fragment:Fg,map_particle_pars_fragment:kg,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:Hg,morphinstance_vertex:Gg,morphcolor_vertex:Pg,morphnormal_vertex:Vg,morphtarget_pars_vertex:zg,morphtarget_vertex:Wg,normal_fragment_begin:Xg,normal_fragment_maps:$g,normal_pars_fragment:Yg,normal_pars_vertex:qg,normal_vertex:Kg,normalmap_pars_fragment:Zg,clearcoat_normal_fragment_begin:Jg,clearcoat_normal_fragment_maps:Qg,clearcoat_pars_fragment:jg,iridescence_pars_fragment:e0,opaque_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:a0,dithering_pars_fragment:r0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:u0,shadowmap_vertex:h0,shadowmask_pars_fragment:f0,skinbase_vertex:d0,skinning_pars_vertex:m0,skinning_vertex:p0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:v0,tonemapping_fragment:x0,tonemapping_pars_fragment:M0,transmission_fragment:S0,transmission_pars_fragment:b0,uv_pars_fragment:A0,uv_pars_vertex:T0,uv_vertex:E0,worldpos_vertex:R0,background_vert:C0,background_frag:w0,backgroundCube_vert:L0,backgroundCube_frag:D0,cube_vert:y0,cube_frag:U0,depth_vert:N0,depth_frag:O0,distance_vert:I0,distance_frag:F0,equirect_vert:k0,equirect_frag:B0,linedashed_vert:H0,linedashed_frag:G0,meshbasic_vert:P0,meshbasic_frag:V0,meshlambert_vert:z0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:$0,meshnormal_vert:Y0,meshnormal_frag:q0,meshphong_vert:K0,meshphong_frag:Z0,meshphysical_vert:J0,meshphysical_frag:Q0,meshtoon_vert:j0,meshtoon_frag:e_,points_vert:t_,points_frag:n_,shadow_vert:i_,shadow_frag:s_,sprite_vert:a_,sprite_frag:r_},fe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},kn={basic:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Qt([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Qt([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Qt([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Qt([fe.common,fe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Qt([fe.lights,fe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};kn.physical={uniforms:Qt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ha={r:0,b:0,g:0},o_=new _t,Ph=new Be;Ph.set(-1,0,0,0,1,0,0,0,1);function l_(e,t,n,i,s,a){const r=new Je(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){const M=A.backgroundBlurriness>0;R=t.get(R,M)}return R}function _(A){let R=!1;const M=p(A);M===null?m(r,o):M&&M.isColor&&(m(M,1),R=!0);const T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function S(A,R){const M=p(R);M&&(M.isCubeTexture||M.mapping===pr)?(c===void 0&&(c=new Xn(new sa(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:bs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(o_.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ph),c.material.toneMapped=Ye.getTransfer(M.colorSpace)!==rt,(u!==M||f!==M.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=e.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Xn(new _r(2,2),new $n({name:"BackgroundMaterial",uniforms:bs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=e.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,R){A.getRGB(Ha,Fh(e)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,R,a)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(A,R=1){r.set(A),o=R,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(r,o)},render:_,addToRenderList:S,dispose:d}}function c_(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null);let a=s,r=!1;function o(D,O,G,I,H){let J=!1;const W=f(D,I,G,O);a!==W&&(a=W,c(a.object)),J=p(D,I,G,H),J&&_(D,I,G,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,M(D,O,G,I),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function u(D){return e.deleteVertexArray(D)}function f(D,O,G,I){const H=I.wireframe===!0;let J=i[O.id];J===void 0&&(J={},i[O.id]=J);const W=D.isInstancedMesh===!0?D.id:0;let ie=J[W];ie===void 0&&(ie={},J[W]=ie);let Y=ie[G.id];Y===void 0&&(Y={},ie[G.id]=Y);let ee=Y[H];return ee===void 0&&(ee=h(l()),Y[H]=ee),ee}function h(D){const O=[],G=[],I=[];for(let H=0;H<n;H++)O[H]=0,G[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:I,object:D,attributes:{},index:null}}function p(D,O,G,I){const H=a.attributes,J=O.attributes;let W=0;const ie=G.getAttributes();for(const Y in ie)if(ie[Y].location>=0){const ne=H[Y];let Ue=J[Y];if(Ue===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(Ue=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(Ue=D.instanceColor)),ne===void 0||ne.attribute!==Ue||Ue&&ne.data!==Ue.data)return!0;W++}return a.attributesNum!==W||a.index!==I}function _(D,O,G,I){const H={},J=O.attributes;let W=0;const ie=G.getAttributes();for(const Y in ie)if(ie[Y].location>=0){let ne=J[Y];ne===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));const Ue={};Ue.attribute=ne,ne&&ne.data&&(Ue.data=ne.data),H[Y]=Ue,W++}a.attributes=H,a.attributesNum=W,a.index=I}function S(){const D=a.newAttributes;for(let O=0,G=D.length;O<G;O++)D[O]=0}function m(D){d(D,0)}function d(D,O){const G=a.newAttributes,I=a.enabledAttributes,H=a.attributeDivisors;G[D]=1,I[D]===0&&(e.enableVertexAttribArray(D),I[D]=1),H[D]!==O&&(e.vertexAttribDivisor(D,O),H[D]=O)}function A(){const D=a.newAttributes,O=a.enabledAttributes;for(let G=0,I=O.length;G<I;G++)O[G]!==D[G]&&(e.disableVertexAttribArray(G),O[G]=0)}function R(D,O,G,I,H,J,W){W===!0?e.vertexAttribIPointer(D,O,G,H,J):e.vertexAttribPointer(D,O,G,I,H,J)}function M(D,O,G,I){S();const H=I.attributes,J=G.getAttributes(),W=O.defaultAttributeValues;for(const ie in J){const Y=J[ie];if(Y.location>=0){let ee=H[ie];if(ee===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const ne=ee.normalized,Ue=ee.itemSize,we=t.get(ee);if(we===void 0)continue;const ut=we.buffer,Ke=we.type,nt=we.bytesPerElement,q=Ke===e.INT||Ke===e.UNSIGNED_INT||ee.gpuType===bl;if(ee.isInterleavedBufferAttribute){const j=ee.data,Me=j.stride,Fe=ee.offset;if(j.isInstancedInterleavedBuffer){for(let ve=0;ve<Y.locationSize;ve++)d(Y.location+ve,j.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ve=0;ve<Y.locationSize;ve++)m(Y.location+ve);e.bindBuffer(e.ARRAY_BUFFER,ut);for(let ve=0;ve<Y.locationSize;ve++)R(Y.location+ve,Ue/Y.locationSize,Ke,ne,Me*nt,(Fe+Ue/Y.locationSize*ve)*nt,q)}else{if(ee.isInstancedBufferAttribute){for(let j=0;j<Y.locationSize;j++)d(Y.location+j,ee.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let j=0;j<Y.locationSize;j++)m(Y.location+j);e.bindBuffer(e.ARRAY_BUFFER,ut);for(let j=0;j<Y.locationSize;j++)R(Y.location+j,Ue/Y.locationSize,Ke,ne,Ue*nt,Ue/Y.locationSize*j*nt,q)}}else if(W!==void 0){const ne=W[ie];if(ne!==void 0)switch(ne.length){case 2:e.vertexAttrib2fv(Y.location,ne);break;case 3:e.vertexAttrib3fv(Y.location,ne);break;case 4:e.vertexAttrib4fv(Y.location,ne);break;default:e.vertexAttrib1fv(Y.location,ne)}}}}A()}function T(){b();for(const D in i){const O=i[D];for(const G in O){const I=O[G];for(const H in I){const J=I[H];for(const W in J)u(J[W].object),delete J[W];delete I[H]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const G in O){const I=O[G];for(const H in I){const J=I[H];for(const W in J)u(J[W].object),delete J[W];delete I[H]}}delete i[D.id]}function w(D){for(const O in i){const G=i[O];for(const I in G){const H=G[I];if(H[D.id]===void 0)continue;const J=H[D.id];for(const W in J)u(J[W].object),delete J[W];delete H[D.id]}}}function v(D){for(const O in i){const G=i[O],I=D.isInstancedMesh===!0?D.id:0,H=G[I];if(H!==void 0){for(const J in H){const W=H[J];for(const ie in W)u(W[ie].object),delete W[ie];delete H[J]}delete G[I],Object.keys(G).length===0&&delete i[O]}}}function b(){L(),r=!0,a!==s&&(a=s,c(a.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function u_(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,u){u!==0&&(e.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];n.update(h,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function h_(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==dn&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const v=w===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==fn&&w!==Hn&&!v&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:M,maxSamples:T,samples:E}}function f_(e){const t=this;let n=null,i=0,s=!1,a=!1;const r=new xi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=e.get(f);if(!s||_===null||_.length===0||a&&!m)a?u(null):c();else{const A=a?0:i,R=A*4;let M=d.clippingState||null;l.value=M,M=u(_,h,R,p);for(let T=0;T!==R;++T)M[T]=n[T];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const d=p+S*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let R=0,M=p;R!==S;++R,M+=4)r.copy(f[R]).applyMatrix4(A,o),r.normal.toArray(m,M),m[M+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const ps=4,d_=6,m_=20,p_=256,ks=new Nl,Bc=new Je;let ao=null,ro=0,oo=0,lo=!1;const g_=new V,Di=new V;class Hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){const{size:r=256,position:o=g_}=a;ao=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ao,ro,oo),this._renderer.xr.enabled=lo,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Vi||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ao=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Wn,format:dn,colorSpace:rr,depthBuffer:!1},s=Gc(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(t,n,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=__(a)),this._blurMaterial=x_(a,t,n),this._ggxMaterial=v_(a,t,n)}return s}_compileMaterial(t){const n=new Xn(new wn,t);this._renderer.compile(n,ks)}_sceneToCubeUV(t,n,i,s,a){const l=new sn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Bc),f.toneMapping=Pn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xn(new sa,new yl({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let d=!1;const A=t.background;A?A.isColor&&(m.color.copy(A),t.background=null,d=!0):(m.color.copy(Bc),d=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[R],a.y,a.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[R],a.z)):(l.up.set(0,c[R],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[R]));const T=this._cubeSize;rs(s,M*T,R>2?T:0,T,T),f.setRenderTarget(s),d&&f.render(S,l),f.render(t,l)}f.toneMapping=p,f.autoClear=h,t.background=A}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===Vi||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;rs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,ks)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){const s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:_}=this,S=this._sizeLods[i],m=3*S*(i>_-ps?i-_+ps:0),d=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-n,rs(a,m,d,3*S,2*S),s.setRenderTarget(a),s.render(o,ks),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-i,rs(t,m,d,3*S,2*S),s.setRenderTarget(t),s.render(o,ks)}_blur(t,n,i,s){const a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,n,i,r),this._blurPass(a,t,i,i,r)}_blurPass(t,n,i,s,a){const r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-ps?s-this._lodMax+ps:0),h=4*(this._cubeSize-u);rs(n,f,h,3*u,2*u),r.setRenderTarget(n),r.render(l,ks)}}function __(e){const t=[],n=[];let i=e;const s=e-ps+1+d_;for(let a=0;a<s;a++){const r=Math.pow(2,i);t.push(r);const o=1/(r-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,_=new Float32Array(p*h*f),S=new Float32Array(p*h*f);for(let d=0;d<f;d++){const A=d%3*2/3-1,R=d>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];_.set(M,p*h*d);for(let T=0;T<h;T++){const E=u[T*2]*2-1,w=u[T*2+1]*2-1;d===0?Di.set(1,w,E):d===1?Di.set(-E,1,-w):d===2?Di.set(-E,w,1):d===3?Di.set(-1,w,-E):d===4?Di.set(-E,-1,w):Di.set(E,w,-1),Di.toArray(S,(d*h+T)*p)}}const m=new wn;m.setAttribute("position",new Bt(_,p)),m.setAttribute("outputDirection",new Bt(S,p)),n.push(new Xn(m,null)),i>ps&&i--}return{lodMeshes:n,sizeLods:t}}function Gc(e,t,n){const i=new Cn(e,t,n);return i.texture.mapping=pr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function v_(e,t,n){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function x_(e,t,n){return new $n({name:"SphericalGaussianBlur",defines:{SAMPLES:m_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Pc(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Vc(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function vr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Vh extends Cn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Oh(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new sa(5,5,5),a=new $n({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:si});a.uniforms.tEquirect.value=n;const r=new Xn(s,a),o=n.minFilter;return n.minFilter===Rn&&(n.minFilter=Et),new Ap(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}}function M_(e){let t=new WeakMap,n=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?r(h):a(h)}function a(h){if(h&&h.isTexture){const p=h.mapping;if(p===Nr||p===Or)if(t.has(h)){const _=t.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new Vh(_.height);return S.fromEquirectangularTexture(e,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){const p=h.mapping,_=p===Nr||p===Or,S=p===Vi||p===Ss;if(_||S){let m=n.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Hc(e)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{const A=h.image;return _&&A&&A.height>0||S&&A&&l(A)?(i===null&&(i=new Hc(e)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Nr?h.mapping=Vi:p===Or&&(h.mapping=Ss),h}function l(h){let p=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&p++;return p===_}function c(h){const p=h.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function f(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function S_(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&xs("WebGLRenderer: "+i+" extension not supported."),s}}}function b_(e,t,n,i){const s={},a=new WeakMap;function r(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",r),delete s[h.id];const p=a.get(h);p&&(t.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(p!==null){const A=p.array;S=p.version;for(let R=0,M=A.length;R<M;R+=3){const T=A[R+0],E=A[R+1],w=A[R+2];h.push(T,E,E,w,w,T)}}else{const A=_.array;S=_.version;for(let R=0,M=A.length/3-1;R<M;R+=3){const T=R+0,E=R+1,w=R+2;h.push(T,E,E,w,w,T)}}const m=new(_.count>=65535?Nh:Uh)(h,1);m.version=S;const d=a.get(f);d&&t.remove(d),a.set(f,m)}function u(f){const h=a.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function A_(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,h){e.drawElements(i,h,a,f*r),n.update(h,i,1)}function c(f,h,p){p!==0&&(e.drawElementsInstanced(i,h,a,f*r,p),n.update(h,i,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,f,0,p);let S=0;for(let m=0;m<p;m++)S+=h[m];n.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function T_(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:tt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function E_(e,t,n){const i=new WeakMap,s=new St;function a(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let L=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),m===!0&&(M=3);let T=o.attributes.position.count*M,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*E*4*f),v=new wh(w,T,E,f);v.type=Hn,v.needsUpdate=!0;const b=M*4;for(let D=0;D<f;D++){const O=d[D],G=A[D],I=R[D],H=T*E*4*D;for(let J=0;J<O.count;J++){const W=J*b;_===!0&&(s.fromBufferAttribute(O,J),w[H+W+0]=s.x,w[H+W+1]=s.y,w[H+W+2]=s.z,w[H+W+3]=0),S===!0&&(s.fromBufferAttribute(G,J),w[H+W+4]=s.x,w[H+W+5]=s.y,w[H+W+6]=s.z,w[H+W+7]=0),m===!0&&(s.fromBufferAttribute(I,J),w[H+W+8]=s.x,w[H+W+9]=s.y,w[H+W+10]=s.z,w[H+W+11]=I.itemSize===4?s.w:1)}}h={count:f,texture:v,size:new Qe(T,E)},i.set(o,h),o.addEventListener("dispose",L)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(e,"morphTargetBaseInfluence",S),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function R_(e,t,n,i,s){let a=new WeakMap;function r(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(a.get(h)!==u&&(t.update(h),a.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;a.get(p)!==u&&(p.update(),a.set(p,u))}return h}function o(){a=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:r,dispose:o}}const C_={[fh]:"LINEAR_TONE_MAPPING",[dh]:"REINHARD_TONE_MAPPING",[mh]:"CINEON_TONE_MAPPING",[ph]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[vh]:"NEUTRAL_TONE_MAPPING",[gh]:"CUSTOM_TONE_MAPPING"};function w_(e,t,n,i,s,a){const r=new Cn(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new wn;c.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ri([0,2,0,0,2,0],2));const u=new gp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Xn(c,u),h=new Nl(-1,1,1,-1,0,1);let p=null,_=null,S=!1,m,d=null,A=[],R=!1;this.setSize=function(M,T){r.setSize(M,T),o!==null&&o.setSize(M,T),l!==null&&l.setSize(M,T);for(let E=0;E<A.length;E++){const w=A[E];w.setSize&&w.setSize(M,T)}},this.setEffects=function(M){A=M,R=A.length>0&&A[0].isRenderPass===!0;const T=r.width,E=r.height;A.length>0&&o===null&&(o=new Cn(T,E,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new Cn(T,E,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<A.length;w++){const v=A[w];v.setSize&&v.setSize(T,E)}},this.begin=function(M,T){if(S||M.toneMapping===Pn&&A.length===0)return!1;if(d=T,T!==null){const E=T.width,w=T.height;(r.width!==E||r.height!==w)&&this.setSize(E,w)}return R===!1&&M.setRenderTarget(r),m=M.toneMapping,M.toneMapping=Pn,!0},this.hasRenderPass=function(){return R},this.end=function(M,T){M.toneMapping=m,S=!0;let E=r,w=o;for(let v=0;v<A.length;v++){const b=A[v];b.enabled!==!1&&(b.render(M,w,E,T),b.needsSwap!==!1&&(E=w,w=w===o?l:o))}if(p!==M.outputColorSpace||_!==M.toneMapping){p=M.outputColorSpace,_=M.toneMapping,u.defines={},Ye.getTransfer(p)===rt&&(u.defines.SRGB_TRANSFER="");const v=C_[_];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(d),M.render(f,h),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const zh=new Ln,ol=new Qs(1,1),Wh=new wh,Xh=new qm,$h=new Oh,zc=[],Wc=[],Xc=new Float32Array(16),$c=new Float32Array(9),Yc=new Float32Array(4);function Rs(e,t,n){const i=e[0];if(i<=0||i>0)return e;const s=t*n;let a=zc[s];if(a===void 0&&(a=new Float32Array(s),zc[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Nt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ot(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function xr(e,t){let n=Wc[t];n===void 0&&(n=new Int32Array(t),Wc[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function L_(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function D_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nt(n,t))return;e.uniform2fv(this.addr,t),Ot(n,t)}}function y_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Nt(n,t))return;e.uniform3fv(this.addr,t),Ot(n,t)}}function U_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nt(n,t))return;e.uniform4fv(this.addr,t),Ot(n,t)}}function N_(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Nt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ot(n,t)}else{if(Nt(n,i))return;Yc.set(i),e.uniformMatrix2fv(this.addr,!1,Yc),Ot(n,i)}}function O_(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Nt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ot(n,t)}else{if(Nt(n,i))return;$c.set(i),e.uniformMatrix3fv(this.addr,!1,$c),Ot(n,i)}}function I_(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Nt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ot(n,t)}else{if(Nt(n,i))return;Xc.set(i),e.uniformMatrix4fv(this.addr,!1,Xc),Ot(n,i)}}function F_(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function k_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nt(n,t))return;e.uniform2iv(this.addr,t),Ot(n,t)}}function B_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nt(n,t))return;e.uniform3iv(this.addr,t),Ot(n,t)}}function H_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nt(n,t))return;e.uniform4iv(this.addr,t),Ot(n,t)}}function G_(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function P_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nt(n,t))return;e.uniform2uiv(this.addr,t),Ot(n,t)}}function V_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nt(n,t))return;e.uniform3uiv(this.addr,t),Ot(n,t)}}function z_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nt(n,t))return;e.uniform4uiv(this.addr,t),Ot(n,t)}}function W_(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(ol.compareFunction=n.isReversedDepthBuffer()?Ll:wl,a=ol):a=zh,n.setTexture2D(t||a,s)}function X_(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Xh,s)}function $_(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||$h,s)}function Y_(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Wh,s)}function q_(e){switch(e){case 5126:return L_;case 35664:return D_;case 35665:return y_;case 35666:return U_;case 35674:return N_;case 35675:return O_;case 35676:return I_;case 5124:case 35670:return F_;case 35667:case 35671:return k_;case 35668:case 35672:return B_;case 35669:case 35673:return H_;case 5125:return G_;case 36294:return P_;case 36295:return V_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Y_}}function K_(e,t){e.uniform1fv(this.addr,t)}function Z_(e,t){const n=Rs(t,this.size,2);e.uniform2fv(this.addr,n)}function J_(e,t){const n=Rs(t,this.size,3);e.uniform3fv(this.addr,n)}function Q_(e,t){const n=Rs(t,this.size,4);e.uniform4fv(this.addr,n)}function j_(e,t){const n=Rs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ev(e,t){const n=Rs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function tv(e,t){const n=Rs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function nv(e,t){e.uniform1iv(this.addr,t)}function iv(e,t){e.uniform2iv(this.addr,t)}function sv(e,t){e.uniform3iv(this.addr,t)}function av(e,t){e.uniform4iv(this.addr,t)}function rv(e,t){e.uniform1uiv(this.addr,t)}function ov(e,t){e.uniform2uiv(this.addr,t)}function lv(e,t){e.uniform3uiv(this.addr,t)}function cv(e,t){e.uniform4uiv(this.addr,t)}function uv(e,t,n){const i=this.cache,s=t.length,a=xr(n,s);Nt(i,a)||(e.uniform1iv(this.addr,a),Ot(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=ol:r=zh;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function hv(e,t,n){const i=this.cache,s=t.length,a=xr(n,s);Nt(i,a)||(e.uniform1iv(this.addr,a),Ot(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Xh,a[r])}function fv(e,t,n){const i=this.cache,s=t.length,a=xr(n,s);Nt(i,a)||(e.uniform1iv(this.addr,a),Ot(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||$h,a[r])}function dv(e,t,n){const i=this.cache,s=t.length,a=xr(n,s);Nt(i,a)||(e.uniform1iv(this.addr,a),Ot(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Wh,a[r])}function mv(e){switch(e){case 5126:return K_;case 35664:return Z_;case 35665:return J_;case 35666:return Q_;case 35674:return j_;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return av;case 5125:return rv;case 36294:return ov;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}class pv{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=q_(n.type)}}class gv{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mv(n.type)}}class _v{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,n[o.id],i)}}}const co=/(\w+)(\])?(\[|\.)?/g;function qc(e,t){e.seq.push(t),e.map[t.id]=t}function vv(e,t,n){const i=e.name,s=i.length;for(co.lastIndex=0;;){const a=co.exec(i),r=co.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){qc(n,c===void 0?new pv(o,e,t):new gv(o,e,t));break}else{let f=n.map[o];f===void 0&&(f=new _v(o),qc(n,f)),n=f}}}class Ka{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);vv(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){const a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in n&&i.push(r)}return i}}function Kc(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const xv=37297;let Mv=0;function Sv(e,t){const n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const Zc=new Be;function bv(e){Ye._getMatrix(Zc,Ye.workingColorSpace,e);const t=`mat3( ${Zc.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(e)){case or:return[t,"LinearTransferOETF"];case rt:return[t,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Jc(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+Sv(e.getShaderSource(t),o)}else return a}function Av(e,t){const n=bv(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Tv={[fh]:"Linear",[dh]:"Reinhard",[mh]:"Cineon",[ph]:"ACESFilmic",[_h]:"AgX",[vh]:"Neutral",[gh]:"Custom"};function Ev(e,t){const n=Tv[t];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ga=new V;function Rv(){Ye.getLuminanceCoefficients(Ga);const e=Ga.x.toFixed(4),t=Ga.y.toFixed(4),n=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cv(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function wv(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Lv(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=e.getActiveAttrib(t,s),r=a.name;let o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Ps(e){return e!==""}function Qc(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(e){return e.replace(Dv,Uv)}const yv=new Map;function Uv(e,t){let n=Ge[t];if(n===void 0){const i=yv.get(t);if(i!==void 0)n=Ge[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ll(n)}const Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(e){return e.replace(Nv,Ov)}function Ov(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function tu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Iv={[Va]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function Fv(e){return Iv[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kv={[Vi]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE_UV"};function Bv(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":kv[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const Hv={[Ss]:"ENVMAP_MODE_REFRACTION"};function Gv(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Hv[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pv={[Sl]:"ENVMAP_BLENDING_MULTIPLY",[Em]:"ENVMAP_BLENDING_MIX",[Rm]:"ENVMAP_BLENDING_ADD"};function Vv(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Pv[e.combine]||"ENVMAP_BLENDING_NONE"}function zv(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Wv(e,t,n,i){const s=e.getContext(),a=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=Fv(n),c=Bv(n),u=Gv(n),f=Vv(n),h=zv(n),p=Cv(n),_=wv(a),S=s.createProgram();let m,d,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ps).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ps).join(`
`),d.length>0&&(d+=`
`)):(m=[tu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),d=[tu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pn?"#define TONE_MAPPING":"",n.toneMapping!==Pn?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Pn?Ev("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Av("linearToOutputTexel",n.outputColorSpace),Rv(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ps).join(`
`)),r=ll(r),r=Qc(r,n),r=jc(r,n),o=ll(o),o=Qc(o,n),o=jc(o,n),r=eu(r),o=eu(o),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const R=A+m+r,M=A+d+o,T=Kc(s,s.VERTEX_SHADER,R),E=Kc(s,s.FRAGMENT_SHADER,M);s.attachShader(S,T),s.attachShader(S,E),n.index0AttributeName!==void 0?s.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function w(D){if(e.debug.checkShaderErrors){const O=s.getProgramInfoLog(S)||"",G=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(E)||"",H=O.trim(),J=G.trim(),W=I.trim();let ie=!0,Y=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ie=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,S,T,E);else{const ee=Jc(s,T,"vertex"),ne=Jc(s,E,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+ee+`
`+ne)}else H!==""?Ie("WebGLProgram: Program Info Log:",H):(J===""||W==="")&&(Y=!1);Y&&(D.diagnostics={runnable:ie,programLog:H,vertexShader:{log:J,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(T),s.deleteShader(E),v=new Ka(s,S),b=Lv(s,S)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(S,xv)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Mv++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=E,this}let Xv=0;class $v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){const s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new Yv(t),n.set(t,i)),i}}class Yv{constructor(t){this.id=Xv++,this.code=t,this.usedTimes=0}}function qv(e){return e===zi||e===sr||e===ar}function Kv(e,t,n,i,s,a){const r=new Lh,o=new $v,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,b,L,D,O,G){const I=D.fog,H=O.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=t.get(v.envMap||J,W),Y=ie&&ie.mapping===pr?ie.image.height:null,ee=p[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ue=ne!==void 0?ne.length:0;let we=0;H.morphAttributes.position!==void 0&&(we=1),H.morphAttributes.normal!==void 0&&(we=2),H.morphAttributes.color!==void 0&&(we=3);let ut,Ke,nt,q;if(ee){const ft=kn[ee];ut=ft.vertexShader,Ke=ft.fragmentShader}else{ut=v.vertexShader,Ke=v.fragmentShader;const ft=o.getVertexShaderStage(v),it=o.getFragmentShaderStage(v);o.update(v,ft,it),nt=ft.id,q=it.id}const j=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,ve=O.isBatchedMesh===!0,ze=!!v.map,Dt=!!v.matcap,We=!!ie,et=!!v.aoMap,ht=!!v.lightMap,$e=!!v.bumpMap&&v.wireframe===!1,gt=!!v.normalMap,It=!!v.displacementMap,jt=!!v.emissiveMap,vt=!!v.metalnessMap,Rt=!!v.roughnessMap,N=v.anisotropy>0,Pt=v.clearcoat>0,at=v.dispersion>0,C=v.retroreflectivity>0,g=v.iridescence>0,F=v.sheen>0,P=v.transmission>0,$=N&&!!v.anisotropyMap,ae=Pt&&!!v.clearcoatMap,re=Pt&&!!v.clearcoatNormalMap,K=Pt&&!!v.clearcoatRoughnessMap,Q=g&&!!v.iridescenceMap,oe=g&&!!v.iridescenceThicknessMap,Ee=F&&!!v.sheenColorMap,he=F&&!!v.sheenRoughnessMap,le=!!v.specularMap,Re=!!v.specularColorMap,Ne=!!v.specularIntensityMap,He=P&&!!v.transmissionMap,U=P&&!!v.thicknessMap,ce=!!v.gradientMap,Z=!!v.alphaMap,ue=v.alphaTest>0,pe=!!v.alphaHash,te=!!v.extensions;let Le=Pn;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Le=e.toneMapping);const Ae={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:ut,fragmentShader:Ke,defines:v.defines,customVertexShaderID:nt,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:ve,batchingColor:ve&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ze,matcap:Dt,envMap:We,envMapMode:We&&ie.mapping,envMapCubeUVHeight:Y,aoMap:et,lightMap:ht,bumpMap:$e,normalMap:gt,displacementMap:It,emissiveMap:jt,normalMapObjectSpace:gt&&v.normalMapType===Lm,normalMapTangentSpace:gt&&v.normalMapType===sl,packedNormalMap:gt&&v.normalMapType===sl&&qv(v.normalMap.format),metalnessMap:vt,roughnessMap:Rt,anisotropy:N,anisotropyMap:$,clearcoat:Pt,clearcoatMap:ae,clearcoatNormalMap:re,clearcoatRoughnessMap:K,dispersion:at,retroreflection:C,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:oe,sheen:F,sheenColorMap:Ee,sheenRoughnessMap:he,specularMap:le,specularColorMap:Re,specularIntensityMap:Ne,transmission:P,transmissionMap:He,thicknessMap:U,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Gi&&v.alphaToCoverage===!1,alphaMap:Z,alphaTest:ue,alphaHash:pe,combine:v.combine,mapUv:ze&&_(v.map.channel),aoMapUv:et&&_(v.aoMap.channel),lightMapUv:ht&&_(v.lightMap.channel),bumpMapUv:$e&&_(v.bumpMap.channel),normalMapUv:gt&&_(v.normalMap.channel),displacementMapUv:It&&_(v.displacementMap.channel),emissiveMapUv:jt&&_(v.emissiveMap.channel),metalnessMapUv:vt&&_(v.metalnessMap.channel),roughnessMapUv:Rt&&_(v.roughnessMap.channel),anisotropyMapUv:$&&_(v.anisotropyMap.channel),clearcoatMapUv:ae&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:he&&_(v.sheenRoughnessMap.channel),specularMapUv:le&&_(v.specularMap.channel),specularColorMapUv:Re&&_(v.specularColorMap.channel),specularIntensityMapUv:Ne&&_(v.specularIntensityMap.channel),transmissionMapUv:He&&_(v.transmissionMap.channel),thicknessMapUv:U&&_(v.thicknessMap.channel),alphaMapUv:Z&&_(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(gt||N),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(ze||Z),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&gt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:we,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:ze&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)===rt,decodeVideoTextureEmissive:jt&&v.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(v.emissiveMap.colorSpace)===rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Tn,flipSided:v.side===an,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:te&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&v.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function m(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)b.push(L),b.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(d(b,v),A(b,v),b.push(e.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function d(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function A(v,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.retroreflection&&r.enable(24),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function R(v){const b=p[v.type];let L;if(b){const D=kn[b];L=dp.clone(D.uniforms)}else L=v.uniforms;return L}function M(v,b){let L=u.get(b);return L!==void 0?++L.usedTimes:(L=new Wv(e,b,v,s),c.push(L),u.set(b,L)),L}function T(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:R,acquireProgram:M,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:w}}function Zv(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function Jv(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function nu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function iu(){const e=[];let t=0;const n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,S,m,d){let A=e[t];return A===void 0?(A={id:h.id,object:h,geometry:p,material:_,materialVariant:r(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:d},e[t]=A):(A.id=h.id,A.object=h,A.geometry=p,A.material=_,A.materialVariant=r(h),A.groupOrder=S,A.renderOrder=h.renderOrder,A.z=m,A.group=d),t++,A}function l(h,p,_,S,m,d,A){A.reversedDepth===!0&&(m=-m);const R=o(h,p,_,S,m,d);_.transmission>0?i.push(R):_.transparent===!0?s.push(R):n.push(R)}function c(h,p,_,S,m,d){const A=o(h,p,_,S,m,d);_.transmission>0?i.unshift(A):_.transparent===!0?s.unshift(A):n.unshift(A)}function u(h,p){n.length>1&&n.sort(h||Jv),i.length>1&&i.sort(p||nu),s.length>1&&s.sort(p||nu)}function f(){for(let h=t,p=e.length;h<p;h++){const _=e[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:f,sort:u}}function Qv(){let e=new WeakMap;function t(i,s){const a=e.get(i);let r;return a===void 0?(r=new iu,e.set(i,[r])):s>=a.length?(r=new iu,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function jv(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new V,color:new Je};break;case"SpotLight":n={position:new V,direction:new V,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function ex(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let tx=0;function nx(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ix(e){const t=new jv,n=ex(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,a=new _t,r=new _t;function o(c){let u=0,f=0,h=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,_=0,S=0,m=0,d=0,A=0,R=0,M=0,T=0,E=0,w=0,v=0,b=0,L=0;c.sort(nx);for(let O=0,G=c.length;O<G;O++){const I=c[O],H=I.color,J=I.intensity,W=I.distance;let ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===zi?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=H.r*J,f+=H.g*J,h+=H.b*J;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],J);L++}else if(I.isSunLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,ne=n.get(I);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[_]=ne,i.sunShadowMap[_]=ie;const Ue=ee.getViewportCount();for(let we=0;we<Ue;we++)i.sunShadowMatrix[S+we]=ee.getMatrix(we),i.sunShadowCascade[S+we]=ee._cascadeData[we];S+=Ue,_++}i.sun[p]=Y,p++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,ne=n.get(I);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=Y,m++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(H).multiplyScalar(J),Y.distance=W,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[A]=Y;const ee=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,ee.updateMatrices(I),I.castShadow&&b++),i.spotLightMatrix[A]=ee.matrix,I.castShadow){const ne=n.get(I);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[A]=ne,i.spotShadowMap[A]=ie,w++}A++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(H).multiplyScalar(J),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[R]=Y,R++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const ee=I.shadow,ne=n.get(I);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[d]=ne,i.pointShadowMap[d]=ie,i.pointShadowMatrix[d]=I.shadow.matrix,E++}i.point[d]=Y,d++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(J),Y.groundColor.copy(I.groundColor).multiplyScalar(J),i.hemi[M]=Y,M++}}R>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==d||D.spotLength!==A||D.rectAreaLength!==R||D.hemiLength!==M||D.numSunShadows!==_||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==w||D.numSpotMaps!==v||D.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=m,i.spot.length=A,i.rectArea.length=R,i.point.length=d,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+v-b,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=L,D.sunLength=p,D.directionalLength=m,D.pointLength=d,D.spotLength=A,D.rectAreaLength=R,D.hemiLength=M,D.numSunShadows=_,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=w,D.numSpotMaps=v,D.numLightProbes=L,i.version=tx++)}function l(c,u){let f=0,h=0,p=0,_=0,S=0,m=0;const d=u.matrixWorldInverse;for(let A=0,R=c.length;A<R;A++){const M=c[A];if(M.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),f++}else if(M.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),h++}else if(M.isSpotLight){const T=i.spot[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),_++}else if(M.isRectAreaLight){const T=i.rectArea[S];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),r.identity(),a.copy(M.matrixWorld),a.premultiply(d),r.extractRotation(a),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),S++}else if(M.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),p++}else if(M.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:i}}function su(e){const t=new ix(e),n=[],i=[],s=[];function a(h){f.camera=h,n.length=0,i.length=0,s.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(n)}function u(h){t.setupView(n,h)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function sx(e){let t=new WeakMap;function n(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new su(e),t.set(s,[o])):a>=r.length?(o=new su(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ox=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],lx=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],au=new _t,Bs=new V,uo=new V;function cx(e,t,n){let i=new Ul;const s=new Qe,a=new Qe,r=new St,o=new _p,l=new vp,c={},u=n.maxTextureSize,f={[oi]:an,[an]:oi,[Tn]:Tn},h=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:ax,fragmentShader:rx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new wn;_.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Xn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va;let d=this.type;this.render=function(E,w,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===cm&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Va);const b=e.getRenderTarget(),L=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),O=e.state;O.setBlending(si),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=d!==this.type;G&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=E.length;I<H;I++){const J=E[I],W=J.shadow;if(W===void 0){Ie("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ie=W.getFrameExtents();s.multiply(ie),a.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/ie.x),s.x=a.x*ie.x,W.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/ie.y),s.y=a.y*ie.y,W.mapSize.y=a.y));const Y=e.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Gs){if(J.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Cn(s.x,s.y,{format:zi,type:Wn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),W.map.texture.name=J.name+".shadowMap",W.map.depthTexture=new Qs(s.x,s.y,Hn),W.map.depthTexture.name=J.name+".shadowMapDepth",W.map.depthTexture.format=li,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Gt,W.map.depthTexture.magFilter=Gt}else J.isPointLight?(W.map=new Vh(s.x),W.map.depthTexture=new hp(s.x,zn)):(W.map=new Cn(s.x,s.y),W.map.depthTexture=new Qs(s.x,s.y,zn)),W.map.depthTexture.name=J.name+".shadowMap",W.map.depthTexture.format=li,this.type===Va?(W.map.depthTexture.compareFunction=Y?Ll:wl,W.map.depthTexture.minFilter=Et,W.map.depthTexture.magFilter=Et):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Gt,W.map.depthTexture.magFilter=Gt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const ee=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();J.isPointLight!==!0&&W.updateMatrices(J,v);for(let ne=0;ne<ee;ne++){const Ue=W.getCamera(ne);if(J.isPointLight){const we=W.camera,ut=W.matrix,Ke=J.distance||we.far;Ke!==we.far&&(we.far=Ke,we.updateProjectionMatrix()),Bs.setFromMatrixPosition(J.matrixWorld),we.position.copy(Bs),uo.copy(we.position),uo.add(ox[ne]),we.up.copy(lx[ne]),we.lookAt(uo),we.updateMatrixWorld(),ut.makeTranslation(-Bs.x,-Bs.y,-Bs.z),au.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),W._frustum.setFromProjectionMatrix(au,we.coordinateSystem,we.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)e.setRenderTarget(W.map,ne),e.clear();else{ne===0&&(e.setRenderTarget(W.map),e.clear());const we=W.getViewport(ne);r.set(a.x*we.x,a.y*we.y,a.x*we.z,a.y*we.w),O.viewport(r)}i=W.getFrustum(ne),M(w,v,Ue,J,this.type)}W.isPointLightShadow!==!0&&this.type===Gs&&A(W,v),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(b,L,D)};function A(E,w){const v=t.update(S);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new Cn(s.x,s.y,{format:zi,type:Wn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(w,null,v,h,S,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(w,null,v,p,S,null)}function R(E,w,v,b){let L=null;const D=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)L=D;else if(L=v.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=L.uuid,G=w.uuid;let I=c[O];I===void 0&&(I={},c[O]=I);let H=I[G];H===void 0&&(H=L.clone(),I[G]=H,w.addEventListener("dispose",T)),L=H}if(L.visible=w.visible,L.wireframe=w.wireframe,b===Gs?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:f[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const O=e.properties.get(L);O.light=v}return L}function M(E,w,v,b,L){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Gs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const G=t.update(E),I=E.material;if(Array.isArray(I)){const H=G.groups;for(let J=0,W=H.length;J<W;J++){const ie=H[J],Y=I[ie.materialIndex];if(Y&&Y.visible){const ee=R(E,Y,b,L);E.onBeforeShadow(e,E,w,v,G,ee,ie),e.renderBufferDirect(v,null,G,ee,E,ie),E.onAfterShadow(e,E,w,v,G,ee,ie)}}}else if(I.visible){const H=R(E,I,b,L);E.onBeforeShadow(e,E,w,v,G,H,null),e.renderBufferDirect(v,null,G,H,E,null),E.onAfterShadow(e,E,w,v,G,H,null)}}const O=E.children;for(let G=0,I=O.length;G<I;G++)M(O[G],w,v,b,L)}function T(E){E.target.removeEventListener("dispose",T);for(const v in c){const b=c[v],L=E.target.uuid;L in b&&(b[L].dispose(),delete b[L])}}}function ux(e,t){function n(){let U=!1;const ce=new St;let Z=null;const ue=new St(0,0,0,0);return{setMask:function(pe){Z!==pe&&!U&&(e.colorMask(pe,pe,pe,pe),Z=pe)},setLocked:function(pe){U=pe},setClear:function(pe,te,Le,Ae,ft){ft===!0&&(pe*=Ae,te*=Ae,Le*=Ae),ce.set(pe,te,Le,Ae),ue.equals(ce)===!1&&(e.clearColor(pe,te,Le,Ae),ue.copy(ce))},reset:function(){U=!1,Z=null,ue.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,Z=null,ue=null,pe=null;return{setReversed:function(te){if(ce!==te){const Le=t.get("EXT_clip_control");te?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Ae=pe;pe=null,this.setClear(Ae)}},getReversed:function(){return ce},setTest:function(te){te?j(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(te){Z!==te&&!U&&(e.depthMask(te),Z=te)},setFunc:function(te){if(ce&&(te=Pm[te]),ue!==te){switch(te){case So:e.depthFunc(e.NEVER);break;case bo:e.depthFunc(e.ALWAYS);break;case nr:e.depthFunc(e.LESS);break;case qs:e.depthFunc(e.LEQUAL);break;case Ao:e.depthFunc(e.EQUAL);break;case To:e.depthFunc(e.GEQUAL);break;case Eo:e.depthFunc(e.GREATER);break;case Ro:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ue=te}},setLocked:function(te){U=te},setClear:function(te){pe!==te&&(pe=te,ce&&(te=1-te),e.clearDepth(te))},reset:function(){U=!1,Z=null,ue=null,pe=null,ce=!1}}}function s(){let U=!1,ce=null,Z=null,ue=null,pe=null,te=null,Le=null,Ae=null,ft=null;return{setTest:function(it){U||(it?j(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(it){ce!==it&&!U&&(e.stencilMask(it),ce=it)},setFunc:function(it,vn,Dn){(Z!==it||ue!==vn||pe!==Dn)&&(e.stencilFunc(it,vn,Dn),Z=it,ue=vn,pe=Dn)},setOp:function(it,vn,Dn){(te!==it||Le!==vn||Ae!==Dn)&&(e.stencilOp(it,vn,Dn),te=it,Le=vn,Ae=Dn)},setLocked:function(it){U=it},setClear:function(it){ft!==it&&(e.clearStencil(it),ft=it)},reset:function(){U=!1,ce=null,Z=null,ue=null,pe=null,te=null,Le=null,Ae=null,ft=null}}}const a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},p=new WeakMap,_=[],S=null,m=!1,d=null,A=null,R=null,M=null,T=null,E=null,w=null,v=new Je(0,0,0),b=0,L=!1,D=null,O=null,G=null,I=null,H=null;const J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=ie>=2);let ee=null,ne={};const Ue=e.getParameter(e.SCISSOR_BOX),we=e.getParameter(e.VIEWPORT),ut=new St().fromArray(Ue),Ke=new St().fromArray(we);function nt(U,ce,Z,ue){const pe=new Uint8Array(4),te=e.createTexture();e.bindTexture(U,te),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Le=0;Le<Z;Le++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(ce,0,e.RGBA,1,1,ue,0,e.RGBA,e.UNSIGNED_BYTE,pe):e.texImage2D(ce+Le,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,pe);return te}const q={};q[e.TEXTURE_2D]=nt(e.TEXTURE_2D,e.TEXTURE_2D,1),q[e.TEXTURE_CUBE_MAP]=nt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[e.TEXTURE_2D_ARRAY]=nt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),q[e.TEXTURE_3D]=nt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),j(e.DEPTH_TEST),r.setFunc(qs),$e(!1),gt(fc),j(e.CULL_FACE),et(si);function j(U){u[U]!==!0&&(e.enable(U),u[U]=!0)}function Me(U){u[U]!==!1&&(e.disable(U),u[U]=!1)}function Fe(U,ce){return h[U]!==ce?(e.bindFramebuffer(U,ce),h[U]=ce,U===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=ce),U===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=ce),!0):!1}function ve(U,ce){let Z=_,ue=!1;if(U){Z=p.get(ce),Z===void 0&&(Z=[],p.set(ce,Z));const pe=U.textures;if(Z.length!==pe.length||Z[0]!==e.COLOR_ATTACHMENT0){for(let te=0,Le=pe.length;te<Le;te++)Z[te]=e.COLOR_ATTACHMENT0+te;Z.length=pe.length,ue=!0}}else Z[0]!==e.BACK&&(Z[0]=e.BACK,ue=!0);ue&&e.drawBuffers(Z)}function ze(U){return S!==U?(e.useProgram(U),S=U,!0):!1}const Dt={[Ii]:e.FUNC_ADD,[um]:e.FUNC_SUBTRACT,[hm]:e.FUNC_REVERSE_SUBTRACT};Dt[fm]=e.MIN,Dt[dm]=e.MAX;const We={[uh]:e.ZERO,[hh]:e.ONE,[mm]:e.SRC_COLOR,[xl]:e.SRC_ALPHA,[Mm]:e.SRC_ALPHA_SATURATE,[vm]:e.DST_COLOR,[gm]:e.DST_ALPHA,[pm]:e.ONE_MINUS_SRC_COLOR,[Ml]:e.ONE_MINUS_SRC_ALPHA,[xm]:e.ONE_MINUS_DST_COLOR,[_m]:e.ONE_MINUS_DST_ALPHA,[Sm]:e.CONSTANT_COLOR,[bm]:e.ONE_MINUS_CONSTANT_COLOR,[Am]:e.CONSTANT_ALPHA,[Tm]:e.ONE_MINUS_CONSTANT_ALPHA};function et(U,ce,Z,ue,pe,te,Le,Ae,ft,it){if(U===si){m===!0&&(Me(e.BLEND),m=!1);return}if(m===!1&&(j(e.BLEND),m=!0),U!==ch){if(U!==d||it!==L){if((A!==Ii||T!==Ii)&&(e.blendEquation(e.FUNC_ADD),A=Ii,T=Ii),it)switch(U){case Gi:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Mo:e.blendFunc(e.ONE,e.ONE);break;case dc:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case mc:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:tt("WebGLState: Invalid blending: ",U);break}else switch(U){case Gi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Mo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case dc:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",U);break}R=null,M=null,E=null,w=null,v.set(0,0,0),b=0,d=U,L=it}return}pe=pe||ce,te=te||Z,Le=Le||ue,(ce!==A||pe!==T)&&(e.blendEquationSeparate(Dt[ce],Dt[pe]),A=ce,T=pe),(Z!==R||ue!==M||te!==E||Le!==w)&&(e.blendFuncSeparate(We[Z],We[ue],We[te],We[Le]),R=Z,M=ue,E=te,w=Le),(Ae.equals(v)===!1||ft!==b)&&(e.blendColor(Ae.r,Ae.g,Ae.b,ft),v.copy(Ae),b=ft),d=U,L=!1}function ht(U,ce){U.side===Tn?Me(e.CULL_FACE):j(e.CULL_FACE);let Z=U.side===an;ce&&(Z=!Z),$e(Z),U.blending===Gi&&U.transparent===!1?et(si):et(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);const ue=U.stencilWrite;o.setTest(ue),ue&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),jt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){D!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),D=U)}function gt(U){U!==om?(j(e.CULL_FACE),U!==O&&(U===fc?e.cullFace(e.BACK):U===lm?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Me(e.CULL_FACE),O=U}function It(U){U!==G&&(W&&e.lineWidth(U),G=U)}function jt(U,ce,Z){U?(j(e.POLYGON_OFFSET_FILL),(I!==ce||H!==Z)&&(I=ce,H=Z,r.getReversed()&&(ce=-ce),e.polygonOffset(ce,Z))):Me(e.POLYGON_OFFSET_FILL)}function vt(U){U?j(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function Rt(U){U===void 0&&(U=e.TEXTURE0+J-1),ee!==U&&(e.activeTexture(U),ee=U)}function N(U,ce,Z){Z===void 0&&(ee===null?Z=e.TEXTURE0+J-1:Z=ee);let ue=ne[Z];ue===void 0&&(ue={type:void 0,texture:void 0},ne[Z]=ue),(ue.type!==U||ue.texture!==ce)&&(ee!==Z&&(e.activeTexture(Z),ee=Z),e.bindTexture(U,ce||q[U]),ue.type=U,ue.texture=ce)}function Pt(){const U=ne[ee];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function at(){try{e.compressedTexImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function g(){try{e.texSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function F(){try{e.texSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function P(){try{e.compressedTexSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function $(){try{e.compressedTexSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function ae(){try{e.texStorage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function re(){try{e.texStorage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function K(){try{e.texImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function Q(){try{e.texImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function oe(U){return f[U]!==void 0?f[U]:e.getParameter(U)}function Ee(U,ce){f[U]!==ce&&(e.pixelStorei(U,ce),f[U]=ce)}function he(U){ut.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),ut.copy(U))}function le(U){Ke.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Ke.copy(U))}function Re(U,ce){let Z=c.get(ce);Z===void 0&&(Z=new WeakMap,c.set(ce,Z));let ue=Z.get(U);ue===void 0&&(ue=e.getUniformBlockIndex(ce,U.name),Z.set(U,ue))}function Ne(U,ce){const ue=c.get(ce).get(U);l.get(ce)!==ue&&(e.uniformBlockBinding(ce,ue,U.__bindingPointIndex),l.set(ce,ue))}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},f={},ee=null,ne={},h={},p=new WeakMap,_=[],S=null,m=!1,d=null,A=null,R=null,M=null,T=null,E=null,w=null,v=new Je(0,0,0),b=0,L=!1,D=null,O=null,G=null,I=null,H=null,ut.set(0,0,e.canvas.width,e.canvas.height),Ke.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:j,disable:Me,bindFramebuffer:Fe,drawBuffers:ve,useProgram:ze,setBlending:et,setMaterial:ht,setFlipSided:$e,setCullFace:gt,setLineWidth:It,setPolygonOffset:jt,setScissorTest:vt,activeTexture:Rt,bindTexture:N,unbindTexture:Pt,compressedTexImage2D:at,compressedTexImage3D:C,texImage2D:K,texImage3D:Q,pixelStorei:Ee,getParameter:oe,updateUBOMapping:Re,uniformBlockBinding:Ne,texStorage2D:ae,texStorage3D:re,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:P,compressedTexSubImage3D:$,scissor:he,viewport:le,reset:He}}function hx(e,t,n,i,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,g){return _?new OffscreenCanvas(C,g):lr("canvas")}function m(C,g,F){let P=1;const $=at(C);if(($.width>F||$.height>F)&&(P=F/Math.max($.width,$.height)),P<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ae=Math.floor(P*$.width),re=Math.floor(P*$.height);h===void 0&&(h=S(ae,re));const K=g?S(ae,re):h;return K.width=ae,K.height=re,K.getContext("2d").drawImage(C,0,0,ae,re),Ie("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ae+"x"+re+")."),K}else return"data"in C&&Ie("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function d(C){return C.generateMipmaps}function A(C){e.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(C,g,F,P,$,ae=!1){if(C!==null){if(e[C]!==void 0)return e[C];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re;P&&(re=t.get("EXT_texture_norm16"),re||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===e.RED&&(F===e.FLOAT&&(K=e.R32F),F===e.HALF_FLOAT&&(K=e.R16F),F===e.UNSIGNED_BYTE&&(K=e.R8),F===e.UNSIGNED_SHORT&&re&&(K=re.R16_EXT),F===e.SHORT&&re&&(K=re.R16_SNORM_EXT)),g===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.R8UI),F===e.UNSIGNED_SHORT&&(K=e.R16UI),F===e.UNSIGNED_INT&&(K=e.R32UI),F===e.BYTE&&(K=e.R8I),F===e.SHORT&&(K=e.R16I),F===e.INT&&(K=e.R32I)),g===e.RG&&(F===e.FLOAT&&(K=e.RG32F),F===e.HALF_FLOAT&&(K=e.RG16F),F===e.UNSIGNED_BYTE&&(K=e.RG8),F===e.UNSIGNED_SHORT&&re&&(K=re.RG16_EXT),F===e.SHORT&&re&&(K=re.RG16_SNORM_EXT)),g===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RG8UI),F===e.UNSIGNED_SHORT&&(K=e.RG16UI),F===e.UNSIGNED_INT&&(K=e.RG32UI),F===e.BYTE&&(K=e.RG8I),F===e.SHORT&&(K=e.RG16I),F===e.INT&&(K=e.RG32I)),g===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RGB8UI),F===e.UNSIGNED_SHORT&&(K=e.RGB16UI),F===e.UNSIGNED_INT&&(K=e.RGB32UI),F===e.BYTE&&(K=e.RGB8I),F===e.SHORT&&(K=e.RGB16I),F===e.INT&&(K=e.RGB32I)),g===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),F===e.UNSIGNED_INT&&(K=e.RGBA32UI),F===e.BYTE&&(K=e.RGBA8I),F===e.SHORT&&(K=e.RGBA16I),F===e.INT&&(K=e.RGBA32I)),g===e.RGB&&(F===e.UNSIGNED_SHORT&&re&&(K=re.RGB16_EXT),F===e.SHORT&&re&&(K=re.RGB16_SNORM_EXT),F===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(K=e.R11F_G11F_B10F)),g===e.RGBA){const Q=ae?or:Ye.getTransfer($);F===e.FLOAT&&(K=e.RGBA32F),F===e.HALF_FLOAT&&(K=e.RGBA16F),F===e.UNSIGNED_BYTE&&(K=Q===rt?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT&&re&&(K=re.RGBA16_EXT),F===e.SHORT&&re&&(K=re.RGBA16_SNORM_EXT),F===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function T(C,g){let F;return C?g===null||g===zn||g===Zs?F=e.DEPTH24_STENCIL8:g===Hn?F=e.DEPTH32F_STENCIL8:g===Ks&&(F=e.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===zn||g===Zs?F=e.DEPTH_COMPONENT24:g===Hn?F=e.DEPTH_COMPONENT32F:g===Ks&&(F=e.DEPTH_COMPONENT16),F}function E(C,g){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==Et?Math.log2(Math.max(g.width,g.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?g.mipmaps.length:1}function w(C){const g=C.target;g.removeEventListener("dispose",w),b(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function v(C){const g=C.target;g.removeEventListener("dispose",v),D(g)}function b(C){const g=i.get(C);if(g.__webglInit===void 0)return;const F=C.source,P=p.get(F);if(P){const $=P[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&L(C),Object.keys(P).length===0&&p.delete(F)}i.remove(C)}function L(C){const g=i.get(C);e.deleteTexture(g.__webglTexture);const F=C.source,P=p.get(F);delete P[g.__cacheKey],r.memory.textures--}function D(C){const g=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(g.__webglFramebuffer[P]))for(let $=0;$<g.__webglFramebuffer[P].length;$++)e.deleteFramebuffer(g.__webglFramebuffer[P][$]);else e.deleteFramebuffer(g.__webglFramebuffer[P]);g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer[P])}else{if(Array.isArray(g.__webglFramebuffer))for(let P=0;P<g.__webglFramebuffer.length;P++)e.deleteFramebuffer(g.__webglFramebuffer[P]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&e.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let P=0;P<g.__webglColorRenderbuffer.length;P++)g.__webglColorRenderbuffer[P]&&e.deleteRenderbuffer(g.__webglColorRenderbuffer[P]);g.__webglDepthRenderbuffer&&e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=C.textures;for(let P=0,$=F.length;P<$;P++){const ae=i.get(F[P]);ae.__webglTexture&&(e.deleteTexture(ae.__webglTexture),r.memory.textures--),i.remove(F[P])}i.remove(C)}let O=0;function G(){O=0}function I(){return O}function H(C){O=C}function J(){const C=O;return C>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function W(C){const g=[];return g.push(C.wrapS),g.push(C.wrapT),g.push(C.wrapR||0),g.push(C.magFilter),g.push(C.minFilter),g.push(C.anisotropy),g.push(C.internalFormat),g.push(C.format),g.push(C.type),g.push(C.generateMipmaps),g.push(C.premultiplyAlpha),g.push(C.flipY),g.push(C.unpackAlignment),g.push(C.colorSpace),g.join()}function ie(C,g){const F=i.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const P=C.image;if(P===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(F,C,g);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+g)}function Y(C,g){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){Me(F,C,g);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+g)}function ee(C,g){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){Me(F,C,g);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+g)}function ne(C,g){const F=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&F.__version!==C.version){Fe(F,C,g);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+g)}const Ue={[ir]:e.REPEAT,[Bn]:e.CLAMP_TO_EDGE,[Co]:e.MIRRORED_REPEAT},we={[Gt]:e.NEAREST,[Cm]:e.NEAREST_MIPMAP_NEAREST,[xa]:e.NEAREST_MIPMAP_LINEAR,[Et]:e.LINEAR,[za]:e.LINEAR_MIPMAP_NEAREST,[Rn]:e.LINEAR_MIPMAP_LINEAR},ut={[ym]:e.NEVER,[Fm]:e.ALWAYS,[Um]:e.LESS,[wl]:e.LEQUAL,[Nm]:e.EQUAL,[Ll]:e.GEQUAL,[Om]:e.GREATER,[Im]:e.NOTEQUAL};function Ke(C,g){if(g.type===Hn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Et||g.magFilter===za||g.magFilter===xa||g.magFilter===Rn||g.minFilter===Et||g.minFilter===za||g.minFilter===xa||g.minFilter===Rn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,Ue[g.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,Ue[g.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,Ue[g.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,we[g.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,we[g.minFilter]),g.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,ut[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Gt||g.minFilter!==xa&&g.minFilter!==Rn||g.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function nt(C,g){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,g.addEventListener("dispose",w));const P=g.source;let $=p.get(P);$===void 0&&($={},p.set(P,$));const ae=W(g);if(ae!==C.__cacheKey){$[ae]===void 0&&($[ae]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),$[ae].usedTimes++;const re=$[C.__cacheKey];re!==void 0&&($[C.__cacheKey].usedTimes--,re.usedTimes===0&&L(g)),C.__cacheKey=ae,C.__webglTexture=$[ae].texture}return F}function q(C,g,F){return Math.floor(Math.floor(C/F)/g)}function j(C,g,F,P){const ae=C.updateRanges;if(ae.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,g.width,g.height,F,P,g.data);else{ae.sort((Ee,he)=>Ee.start-he.start);let re=0;for(let Ee=1;Ee<ae.length;Ee++){const he=ae[re],le=ae[Ee],Re=he.start+he.count,Ne=q(le.start,g.width,4),He=q(he.start,g.width,4);le.start<=Re+1&&Ne===He&&q(le.start+le.count-1,g.width,4)===Ne?he.count=Math.max(he.count,le.start+le.count-he.start):(++re,ae[re]=le)}ae.length=re+1;const K=n.getParameter(e.UNPACK_ROW_LENGTH),Q=n.getParameter(e.UNPACK_SKIP_PIXELS),oe=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,g.width);for(let Ee=0,he=ae.length;Ee<he;Ee++){const le=ae[Ee],Re=Math.floor(le.start/4),Ne=Math.ceil(le.count/4),He=Re%g.width,U=Math.floor(Re/g.width),ce=Ne,Z=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,He),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,He,U,ce,Z,F,P,g.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,K),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(e.UNPACK_SKIP_ROWS,oe)}}function Me(C,g,F){let P=e.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(P=e.TEXTURE_2D_ARRAY),g.isData3DTexture&&(P=e.TEXTURE_3D);const $=nt(C,g),ae=g.source;n.bindTexture(P,C.__webglTexture,e.TEXTURE0+F);const re=i.get(ae);if(ae.version!==re.__version||$===!0){if(n.activeTexture(e.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Z=Ye.getPrimaries(Ye.workingColorSpace),ue=g.colorSpace===Ai?null:Ye.getPrimaries(g.colorSpace),pe=g.colorSpace===Ai||Z===ue?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}n.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=m(g.image,!1,s.maxTextureSize);Q=Pt(g,Q);const oe=a.convert(g.format,g.colorSpace),Ee=a.convert(g.type);let he=M(g.internalFormat,oe,Ee,g.normalized,g.colorSpace,g.isVideoTexture);Ke(P,g);let le;const Re=g.mipmaps,Ne=g.isVideoTexture!==!0,He=re.__version===void 0||$===!0,U=ae.dataReady,ce=E(g,Q);if(g.isDepthTexture)he=T(g.format===Bi,g.type),He&&(Ne?n.texStorage2D(e.TEXTURE_2D,1,he,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,he,Q.width,Q.height,0,oe,Ee,null));else if(g.isDataTexture)if(Re.length>0){Ne&&He&&n.texStorage2D(e.TEXTURE_2D,ce,he,Re[0].width,Re[0].height);for(let Z=0,ue=Re.length;Z<ue;Z++)le=Re[Z],Ne?U&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,le.width,le.height,oe,Ee,le.data):n.texImage2D(e.TEXTURE_2D,Z,he,le.width,le.height,0,oe,Ee,le.data);g.generateMipmaps=!1}else Ne?(He&&n.texStorage2D(e.TEXTURE_2D,ce,he,Q.width,Q.height),U&&j(g,Q,oe,Ee)):n.texImage2D(e.TEXTURE_2D,0,he,Q.width,Q.height,0,oe,Ee,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ne&&He&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ce,he,Re[0].width,Re[0].height,Q.depth);for(let Z=0,ue=Re.length;Z<ue;Z++)if(le=Re[Z],g.format!==dn)if(oe!==null)if(Ne){if(U)if(g.layerUpdates.size>0){const pe=kc(le.width,le.height,g.format,g.type);for(const te of g.layerUpdates){const Le=le.data.subarray(te*pe/le.data.BYTES_PER_ELEMENT,(te+1)*pe/le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,te,le.width,le.height,1,oe,Le)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,Q.depth,oe,le.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,he,le.width,le.height,Q.depth,0,le.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,Q.depth,oe,Ee,le.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Z,he,le.width,le.height,Q.depth,0,oe,Ee,le.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ne&&He&&n.texStorage2D(e.TEXTURE_2D,ce,he,Re[0].width,Re[0].height);for(let Z=0,ue=Re.length;Z<ue;Z++)le=Re[Z],g.format!==dn?oe!==null?Ne?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,le.width,le.height,oe,le.data):n.compressedTexImage2D(e.TEXTURE_2D,Z,he,le.width,le.height,0,le.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?U&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,le.width,le.height,oe,Ee,le.data):n.texImage2D(e.TEXTURE_2D,Z,he,le.width,le.height,0,oe,Ee,le.data)}else if(g.isDataArrayTexture)if(Ne){if(He&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ce,he,Q.width,Q.height,Q.depth),U)if(g.layerUpdates.size>0){const Z=kc(Q.width,Q.height,g.format,g.type);for(const ue of g.layerUpdates){const pe=Q.data.subarray(ue*Z/Q.data.BYTES_PER_ELEMENT,(ue+1)*Z/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ue,Q.width,Q.height,1,oe,Ee,pe)}g.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,Ee,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,he,Q.width,Q.height,Q.depth,0,oe,Ee,Q.data);else if(g.isData3DTexture)Ne?(He&&n.texStorage3D(e.TEXTURE_3D,ce,he,Q.width,Q.height,Q.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,Ee,Q.data)):n.texImage3D(e.TEXTURE_3D,0,he,Q.width,Q.height,Q.depth,0,oe,Ee,Q.data);else if(g.isFramebufferTexture){if(He)if(Ne)n.texStorage2D(e.TEXTURE_2D,ce,he,Q.width,Q.height);else{let Z=Q.width,ue=Q.height;for(let pe=0;pe<ce;pe++)n.texImage2D(e.TEXTURE_2D,pe,he,Z,ue,0,oe,Ee,null),Z>>=1,ue>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in e){const Z=e.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),Q.parentNode!==Z){Z.appendChild(Q),f.add(g),Z.onpaint=ue=>{const pe=ue.changedElements;for(const te of f)pe.includes(te.image)&&(te.needsUpdate=!0)},Z.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Q);else{const pe=e.RGBA,te=e.RGBA,Le=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,pe,te,Le,Q)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ne&&He){const Z=at(Re[0]);n.texStorage2D(e.TEXTURE_2D,ce,he,Z.width,Z.height)}for(let Z=0,ue=Re.length;Z<ue;Z++)le=Re[Z],Ne?U&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,oe,Ee,le):n.texImage2D(e.TEXTURE_2D,Z,he,oe,Ee,le);g.generateMipmaps=!1}else if(Ne){if(He){const Z=at(Q);n.texStorage2D(e.TEXTURE_2D,ce,he,Z.width,Z.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,Ee,Q)}else n.texImage2D(e.TEXTURE_2D,0,he,oe,Ee,Q);d(g)&&A(P),re.__version=ae.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function Fe(C,g,F){if(g.image.length!==6)return;const P=nt(C,g),$=g.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+F);const ae=i.get($);if($.version!==ae.__version||P===!0){n.activeTexture(e.TEXTURE0+F);const re=Ye.getPrimaries(Ye.workingColorSpace),K=g.colorSpace===Ai?null:Ye.getPrimaries(g.colorSpace),Q=g.colorSpace===Ai||re===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const oe=g.isCompressedTexture||g.image[0].isCompressedTexture,Ee=g.image[0]&&g.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!oe&&!Ee?he[te]=m(g.image[te],!0,s.maxCubemapSize):he[te]=Ee?g.image[te].image:g.image[te],he[te]=Pt(g,he[te]);const le=he[0],Re=a.convert(g.format,g.colorSpace),Ne=a.convert(g.type),He=M(g.internalFormat,Re,Ne,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,ce=ae.__version===void 0||P===!0,Z=$.dataReady;let ue=E(g,le);Ke(e.TEXTURE_CUBE_MAP,g);let pe;if(oe){U&&ce&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ue,He,le.width,le.height);for(let te=0;te<6;te++){pe=he[te].mipmaps;for(let Le=0;Le<pe.length;Le++){const Ae=pe[Le];g.format!==dn?Re!==null?U?Z&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,0,0,Ae.width,Ae.height,Re,Ae.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,He,Ae.width,Ae.height,0,Ae.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,0,0,Ae.width,Ae.height,Re,Ne,Ae.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,He,Ae.width,Ae.height,0,Re,Ne,Ae.data)}}}else{if(pe=g.mipmaps,U&&ce){pe.length>0&&ue++;const te=at(he[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ue,He,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){U?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,Re,Ne,he[te].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,he[te].width,he[te].height,0,Re,Ne,he[te].data);for(let Le=0;Le<pe.length;Le++){const ft=pe[Le].image[te].image;U?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,0,0,ft.width,ft.height,Re,Ne,ft.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,He,ft.width,ft.height,0,Re,Ne,ft.data)}}else{U?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Re,Ne,he[te]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,Re,Ne,he[te]);for(let Le=0;Le<pe.length;Le++){const Ae=pe[Le];U?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,0,0,Re,Ne,Ae.image[te]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,He,Re,Ne,Ae.image[te])}}}d(g)&&A(e.TEXTURE_CUBE_MAP),ae.__version=$.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function ve(C,g,F,P,$,ae){const re=a.convert(F.format,F.colorSpace),K=a.convert(F.type),Q=M(F.internalFormat,re,K,F.normalized,F.colorSpace),oe=i.get(g),Ee=i.get(F);if(Ee.__renderTarget=g,!oe.__hasExternalTextures){const he=Math.max(1,g.width>>ae),le=Math.max(1,g.height>>ae);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,ae,Q,he,le,g.depth,0,re,K,null):n.texImage2D($,ae,Q,he,le,0,re,K,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Rt(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,P,$,Ee.__webglTexture,0,vt(g)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,P,$,Ee.__webglTexture,ae),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ze(C,g,F){if(e.bindRenderbuffer(e.RENDERBUFFER,C),g.depthBuffer){const P=g.depthTexture,$=P&&P.isDepthTexture?P.type:null,ae=T(g.stencilBuffer,$),re=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Rt(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,vt(g),ae,g.width,g.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,vt(g),ae,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,ae,g.width,g.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,C)}else{const P=g.textures;for(let $=0;$<P.length;$++){const ae=P[$],re=a.convert(ae.format,ae.colorSpace),K=a.convert(ae.type),Q=M(ae.internalFormat,re,K,ae.normalized,ae.colorSpace);Rt(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,vt(g),Q,g.width,g.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,vt(g),Q,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,Q,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Dt(C,g,F){const P=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(g.depthTexture);if($.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),P){if($.__webglInit===void 0&&($.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),Ke(e.TEXTURE_CUBE_MAP,g.depthTexture);const oe=a.convert(g.depthTexture.format),Ee=a.convert(g.depthTexture.type);let he;g.depthTexture.format===li?he=e.DEPTH_COMPONENT24:g.depthTexture.format===Bi&&(he=e.DEPTH24_STENCIL8);for(let le=0;le<6;le++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,g.width,g.height,0,oe,Ee,null)}}else ie(g.depthTexture,0);const ae=$.__webglTexture,re=vt(g),K=P?e.TEXTURE_CUBE_MAP_POSITIVE_X+F:e.TEXTURE_2D,Q=g.depthTexture.format===Bi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(g.depthTexture.format===li)Rt(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,K,ae,0,re):e.framebufferTexture2D(e.FRAMEBUFFER,Q,K,ae,0);else if(g.depthTexture.format===Bi)Rt(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,K,ae,0,re):e.framebufferTexture2D(e.FRAMEBUFFER,Q,K,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(C){const g=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==C.depthTexture){const P=C.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),P){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,P.removeEventListener("dispose",$)};P.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=P}if(C.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let P=0;P<6;P++)Dt(g.__webglFramebuffer[P],C,P);else{const P=C.texture.mipmaps;P&&P.length>0?Dt(g.__webglFramebuffer[0],C,0):Dt(g.__webglFramebuffer,C,0)}else if(F){g.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[P]),g.__webglDepthbuffer[P]===void 0)g.__webglDepthbuffer[P]=e.createRenderbuffer(),ze(g.__webglDepthbuffer[P],C,!1);else{const $=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer[P];e.bindRenderbuffer(e.RENDERBUFFER,ae),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,ae)}}else{const P=C.texture.mipmaps;if(P&&P.length>0?n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),ze(g.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ae),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,ae)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function et(C,g,F){const P=i.get(C);g!==void 0&&ve(P.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&We(C)}function ht(C){const g=C.texture,F=i.get(C),P=i.get(g);C.addEventListener("dispose",v);const $=C.textures,ae=C.isWebGLCubeRenderTarget===!0,re=$.length>1;if(re||(P.__webglTexture===void 0&&(P.__webglTexture=e.createTexture()),P.__version=g.version,r.memory.textures++),ae){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let Q=0;Q<g.mipmaps.length;Q++)F.__webglFramebuffer[K][Q]=e.createFramebuffer()}else F.__webglFramebuffer[K]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)F.__webglFramebuffer[K]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(re)for(let K=0,Q=$.length;K<Q;K++){const oe=i.get($[K]);oe.__webglTexture===void 0&&(oe.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Rt(C)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){const Q=$[K];F.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[K]);const oe=a.convert(Q.format,Q.colorSpace),Ee=a.convert(Q.type),he=M(Q.internalFormat,oe,Ee,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),le=vt(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,le,he,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,F.__webglColorRenderbuffer[K])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),ze(F.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ae){n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture),Ke(e.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ve(F.__webglFramebuffer[K][Q],C,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else ve(F.__webglFramebuffer[K],C,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);d(g)&&A(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){for(let K=0,Q=$.length;K<Q;K++){const oe=$[K],Ee=i.get(oe);let he=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(he,Ee.__webglTexture),Ke(he,oe),ve(F.__webglFramebuffer,C,oe,e.COLOR_ATTACHMENT0+K,he,0),d(oe)&&A(he)}n.unbindTexture()}else{let K=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(K,P.__webglTexture),Ke(K,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ve(F.__webglFramebuffer[Q],C,g,e.COLOR_ATTACHMENT0,K,Q);else ve(F.__webglFramebuffer,C,g,e.COLOR_ATTACHMENT0,K,0);d(g)&&A(K),n.unbindTexture()}C.depthBuffer&&We(C)}function $e(C){const g=C.textures;for(let F=0,P=g.length;F<P;F++){const $=g[F];if(d($)){const ae=R(C),re=i.get($).__webglTexture;n.bindTexture(ae,re),A(ae),n.unbindTexture()}}}const gt=[],It=[];function jt(C){if(C.samples>0){if(Rt(C)===!1){const g=C.textures,F=C.width,P=C.height;let $=e.COLOR_BUFFER_BIT;const ae=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=i.get(C),K=g.length>1;if(K)for(let oe=0;oe<g.length;oe++)n.bindFramebuffer(e.FRAMEBUFFER,re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+oe,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+oe,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const Q=C.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let oe=0;oe<g.length;oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);const Ee=i.get(g[oe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ee,0)}e.blitFramebuffer(0,0,F,P,0,0,F,P,$,e.NEAREST),l===!0&&(gt.length=0,It.length=0,gt.push(e.COLOR_ATTACHMENT0+oe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(gt.push(ae),It.push(ae),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,It)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,gt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let oe=0;oe<g.length;oe++){n.bindFramebuffer(e.FRAMEBUFFER,re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+oe,e.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);const Ee=i.get(g[oe]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+oe,e.TEXTURE_2D,Ee,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const g=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function vt(C){return Math.min(s.maxSamples,C.samples)}function Rt(C){const g=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function N(C){const g=r.render.frame;u.get(C)!==g&&(u.set(C,g),C.update())}function Pt(C,g){const F=C.colorSpace,P=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==rr&&F!==Ai&&(Ye.getTransfer(F)===rt?(P!==dn||$!==fn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",F)),g}function at(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=G,this.getTextureUnits=I,this.setTextureUnits=H,this.setTexture2D=ie,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=et,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function fx(e,t){function n(i,s=Ai){let a;const r=Ye.getTransfer(s);if(i===fn)return e.UNSIGNED_BYTE;if(i===Al)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return e.UNSIGNED_SHORT_5_5_5_1;if(i===bh)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ah)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mh)return e.BYTE;if(i===Sh)return e.SHORT;if(i===Ks)return e.UNSIGNED_SHORT;if(i===bl)return e.INT;if(i===zn)return e.UNSIGNED_INT;if(i===Hn)return e.FLOAT;if(i===Wn)return e.HALF_FLOAT;if(i===Th)return e.ALPHA;if(i===Eh)return e.RGB;if(i===dn)return e.RGBA;if(i===li)return e.DEPTH_COMPONENT;if(i===Bi)return e.DEPTH_STENCIL;if(i===Rh)return e.RED;if(i===El)return e.RED_INTEGER;if(i===zi)return e.RG;if(i===Rl)return e.RG_INTEGER;if(i===Cl)return e.RGBA_INTEGER;if(i===Wa||i===Xa||i===$a||i===Ya)if(r===rt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$a)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wo||i===Lo||i===Do||i===yo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===wo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Do)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uo||i===No||i===Oo||i===Io||i===Fo||i===sr||i===ko)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Uo||i===No)return r===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Oo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Io)return a.COMPRESSED_R11_EAC;if(i===Fo)return a.COMPRESSED_SIGNED_R11_EAC;if(i===sr)return a.COMPRESSED_RG11_EAC;if(i===ko)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bo||i===Ho||i===Go||i===Po||i===Vo||i===zo||i===Wo||i===Xo||i===$o||i===Yo||i===qo||i===Ko||i===Zo||i===Jo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Bo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ho)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Go)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Po)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$o)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ko)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===jo||i===el)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Qo)return r===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===el)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tl||i===nl||i===ar||i===il)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===tl)return a.COMPRESSED_RED_RGTC1_EXT;if(i===nl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ar)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===il)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class px{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new Ih(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new $n({vertexShader:dx,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xn(new _r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gx extends Wi{constructor(t,n){super();const i=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new px,d={},A=n.getContextAttributes();let R=null,M=null;const T=[],E=[],w=new Qe;let v=null,b=null;const L=new sn;L.viewport=new St;const D=new sn;D.viewport=new St;const O=[L,D],G=new Tp;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=T[q];return j===void 0&&(j=new zr,T[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=T[q];return j===void 0&&(j=new zr,T[q]=j),j.getGripSpace()},this.getHand=function(q){let j=T[q];return j===void 0&&(j=new zr,T[q]=j),j.getHandSpace()};function J(q){const j=E.indexOf(q.inputSource);if(j===-1)return;const Me=T[j];Me!==void 0&&(Me.update(q.inputSource,q.frame,c||r),Me.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ie);for(let q=0;q<T.length;q++){const j=E[q];j!==null&&(E[q]=null,T[q].disconnect(j))}I=null,H=null,m.reset();for(const q in d)delete d[q];if(t.setRenderTarget(R),p=null,h=null,f=null,s=null,M=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(w.width,w.height,!1),b!==null){const q=b.camera;q.fov=b.fov,q.zoom=b.zoom,q.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ie),A.xrCompatible!==!0&&await n.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Fe=null,ve=null;A.depth&&(ve=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=A.stencil?Bi:li,Fe=A.stencil?Zs:zn);const ze={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:a};f=this.getBinding(),h=f.createProjectionLayer(ze),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new Cn(h.textureWidth,h.textureHeight,{format:dn,type:fn,depthTexture:new Qs(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,Me),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Cn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(q){for(let j=0;j<q.removed.length;j++){const Me=q.removed[j],Fe=E.indexOf(Me);Fe>=0&&(E[Fe]=null,T[Fe].disconnect(Me))}for(let j=0;j<q.added.length;j++){const Me=q.added[j];let Fe=E.indexOf(Me);if(Fe===-1){for(let ze=0;ze<T.length;ze++)if(ze>=E.length){E.push(Me),Fe=ze;break}else if(E[ze]===null){E[ze]=Me,Fe=ze;break}if(Fe===-1)break}const ve=T[Fe];ve&&ve.connect(Me)}}const Y=new V,ee=new V;function ne(q,j,Me){Y.setFromMatrixPosition(j.matrixWorld),ee.setFromMatrixPosition(Me.matrixWorld);const Fe=Y.distanceTo(ee),ve=j.projectionMatrix.elements,ze=Me.projectionMatrix.elements,Dt=ve[14]/(ve[10]-1),We=ve[14]/(ve[10]+1),et=(ve[9]+1)/ve[5],ht=(ve[9]-1)/ve[5],$e=(ve[8]-1)/ve[0],gt=(ze[8]+1)/ze[0],It=Dt*$e,jt=Dt*gt,vt=Fe/(-$e+gt),Rt=vt*-$e;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Rt),q.translateZ(vt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ve[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const N=Dt+vt,Pt=We+vt,at=It-Rt,C=jt+(Fe-Rt),g=et*We/Pt*N,F=ht*We/Pt*N;q.projectionMatrix.makePerspective(at,C,g,F,N,Pt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ue(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,Me=q.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),G.near=D.near=L.near=j,G.far=D.far=L.far=Me,(I!==G.near||H!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,H=G.far),G.layers.mask=q.layers.mask|6,L.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;const Fe=q.parent,ve=G.cameras;Ue(G,Fe);for(let ze=0;ze<ve.length;ze++)Ue(ve[ze],Fe);ve.length===2?ne(G,L,D):G.projectionMatrix.copy(L.projectionMatrix),b===null&&q.isPerspectiveCamera&&(b={camera:q,fov:q.fov,zoom:q.zoom}),we(q,G,Fe)};function we(q,j,Me){Me===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(Me.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=al*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(q){return d[q]};let ut=null;function Ke(q,j){if(u=j.getViewerPose(c||r),_=j,u!==null){const Me=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Fe=!1;Me.length!==G.cameras.length&&(G.cameras.length=0,Fe=!0);for(let We=0;We<Me.length;We++){const et=Me[We];let ht=null;if(p!==null)ht=p.getViewport(et);else{const gt=f.getViewSubImage(h,et);ht=gt.viewport,We===0&&(t.setRenderTargetTextures(M,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(M))}let $e=O[We];$e===void 0&&($e=new sn,$e.layers.enable(We),$e.viewport=new St,O[We]=$e),$e.matrix.fromArray(et.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(et.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ht.x,ht.y,ht.width,ht.height),We===0&&(G.matrix.copy($e.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Fe===!0&&G.cameras.push($e)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const We=f.getDepthInformation(Me[0]);We&&We.isValid&&We.texture&&m.init(We,s.renderState)}if(ve&&ve.includes("camera-access")&&S){t.state.unbindTexture(),f=i.getBinding();for(let We=0;We<Me.length;We++){const et=Me[We].camera;if(et){let ht=d[et];ht||(ht=new Ih,d[et]=ht);const $e=f.getCameraImage(et);ht.sourceTexture=$e}}}}for(let Me=0;Me<T.length;Me++){const Fe=E[Me],ve=T[Me];Fe!==null&&ve!==void 0&&ve.update(Fe,j,c||r)}ut&&ut(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const nt=new Gh;nt.setAnimationLoop(Ke),this.setAnimationLoop=function(q){ut=q},this.dispose=function(){}}}const _x=new _t,Yh=new Be;Yh.set(-1,0,0,0,1,0,0,0,1);function vx(e,t){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Fh(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,R,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?a(m,d):d.isMeshLambertMaterial?(a(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(a(m,d),f(m,d)):d.isMeshPhongMaterial?(a(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(a(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(a(m,d),_(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),S(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,R):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===an&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===an&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=t.get(d),R=A.envMap,M=A.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(_x.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yh),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,R){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=R*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xx(e,t,n,i){let s={},a={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const E=T.program;i.uniformBlockBinding(M,E)}function c(M,T){let E=s[M.id];E===void 0&&(m(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",A));const w=T.program;i.updateUBOMapping(M,w);const v=t.render.frame;a[M.id]!==v&&(h(M),a[M.id]=v)}function u(M){const T=f();M.__bindingPointIndex=T;const E=e.createBuffer(),w=M.__size,v=M.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,w,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,E),E}function f(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const T=s[M.id],E=M.uniforms,w=M.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let v=0,b=E.length;v<b;v++){const L=E[v];if(Array.isArray(L))for(let D=0,O=L.length;D<O;D++)p(L[D],v,D,w);else p(L,v,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(M,T,E,w){if(S(M,T,E,w)===!0){const v=M.__offset,b=M.value;if(Array.isArray(b)){let L=0;for(let D=0;D<b.length;D++){const O=b[D],G=d(O);_(O,M.__data,L),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,M.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,v,M.__data)}}function _(M,T,E){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,E)}function S(M,T,E,w){const v=M.value,b=T+"_"+E;if(w[b]===void 0)return typeof v=="number"||typeof v=="boolean"?w[b]=v:ArrayBuffer.isView(v)?w[b]=v.slice():w[b]=v.clone(),!0;{const L=w[b];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return w[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function m(M){const T=M.uniforms;let E=0;const w=16;for(let b=0,L=T.length;b<L;b++){const D=Array.isArray(T[b])?T[b]:[T[b]];for(let O=0,G=D.length;O<G;O++){const I=D[O],H=Array.isArray(I.value)?I.value:[I.value];for(let J=0,W=H.length;J<W;J++){const ie=H[J],Y=d(ie),ee=E%w,ne=ee%Y.boundary,Ue=ee+ne;E+=ne,Ue!==0&&w-Ue<Y.storage&&(E+=w-Ue),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=Y.storage}}}const v=E%w;return v>0&&(E+=w-v),M.__size=E,M.__cache={},this}function d(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",M),T}function A(M){const T=M.target;T.removeEventListener("dispose",A);const E=r.indexOf(T.__bindingPointIndex);r.splice(E,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete a[T.id]}function R(){for(const M in s)e.deleteBuffer(s[M]);r=[],s={},a={}}return{bind:l,update:c,dispose:R}}const Mx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function Sx(){return On===null&&(On=new rl(Mx,16,16,zi,Wn),On.name="DFG_LUT",On.minFilter=Et,On.magFilter=Et,On.wrapS=Bn,On.wrapT=Bn,On.generateMipmaps=!1,On.needsUpdate=!0),On}class bx{constructor(t={}){const{canvas:n=Hm(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=fn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;const S=p,m=new Set([Cl,Rl,El]),d=new Set([fn,zn,Ks,Zs,Al,Tl]),A=new Uint32Array(4),R=new Int32Array(4),M=new V;let T=null,E=null;const w=[],v=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,O=null,G=null,I=null,H=null;this._outputColorSpace=nn;let J=0,W=0,ie=null,Y=-1,ee=null;const ne=new St,Ue=new St;let we=null;const ut=new Je(0);let Ke=0,nt=n.width,q=n.height,j=1,Me=null,Fe=null;const ve=new St(0,0,nt,q),ze=new St(0,0,nt,q);let Dt=!1;const We=new Ul;let et=!1,ht=!1;const $e=new _t,gt=new V,It=new St,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Rt(){return ie===null?j:1}let N=i;function Pt(x,y){return n.getContext(x,y)}let at,C,g,F,P,$,ae,re,K,Q,oe,Ee,he,le,Re,Ne,He,U,ce,Z,ue,pe,te;try{const x={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vl}`),n.addEventListener("webglcontextlost",ft,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",vn,!1),N===null){const y="webgl2";if(N=Pt(y,x),N===null)throw Pt(y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(x){throw n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",vn,!1),tt("WebGLRenderer: "+x.message),x}function Le(){at=new S_(N),at.init(),ue=new fx(N,at),C=new h_(N,at,t,ue),g=new ux(N,at),C.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),G=N.createFramebuffer(),I=N.createFramebuffer(),H=N.createFramebuffer(),F=new T_(N),P=new Zv,$=new hx(N,at,g,P,C,ue,F),ae=new M_(L),re=new Rp(N),pe=new c_(N,re),K=new b_(N,re,F,pe),Q=new R_(N,K,re,pe,F),U=new E_(N,C,$),Re=new f_(P),oe=new Kv(L,ae,at,C,pe,Re),Ee=new vx(L,P),he=new Qv,le=new sx(at),He=new l_(L,ae,g,Q,_,l),Ne=new cx(L,Q,C),te=new xx(N,F,C,g),ce=new u_(N,at,F),Z=new A_(N,at,F),F.programs=oe.programs,L.capabilities=C,L.extensions=at,L.properties=P,L.renderLists=he,L.shadowMap=Ne,L.state=g,L.info=F}S!==fn&&(b=new w_(S,n.width,n.height,o,s,a));const Ae=new gx(L,N);this.xr=Ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=at.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=at.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(nt,q,!1))},this.getSize=function(x){return x.set(nt,q)},this.setSize=function(x,y,z=!0){if(Ae.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=x,q=y,n.width=Math.floor(x*j),n.height=Math.floor(y*j),z===!0&&(n.style.width=x+"px",n.style.height=y+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,x,y)},this.getDrawingBufferSize=function(x){return x.set(nt*j,q*j).floor()},this.setDrawingBufferSize=function(x,y,z){nt=x,q=y,j=z,n.width=Math.floor(x*z),n.height=Math.floor(y*z),this.setViewport(0,0,x,y)},this.setEffects=function(x){if(S===fn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let y=0;y<x.length;y++)if(x[y].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(ve)},this.setViewport=function(x,y,z,k){x.isVector4?ve.set(x.x,x.y,x.z,x.w):ve.set(x,y,z,k),g.viewport(ne.copy(ve).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(ze)},this.setScissor=function(x,y,z,k){x.isVector4?ze.set(x.x,x.y,x.z,x.w):ze.set(x,y,z,k),g.scissor(Ue.copy(ze).multiplyScalar(j).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(x){g.setScissorTest(Dt=x)},this.setOpaqueSort=function(x){Me=x},this.setTransparentSort=function(x){Fe=x},this.getClearColor=function(x){return x.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(x=!0,y=!0,z=!0){let k=0;if(x){let B=!1;if(ie!==null){const me=ie.texture.format;B=m.has(me)}if(B){const me=ie.texture.type,xe=d.has(me),de=He.getClearColor(),Se=He.getClearAlpha(),Te=de.r,Pe=de.g,Xe=de.b;xe?(A[0]=Te,A[1]=Pe,A[2]=Xe,A[3]=Se,N.clearBufferuiv(N.COLOR,0,A)):(R[0]=Te,R[1]=Pe,R[2]=Xe,R[3]=Se,N.clearBufferiv(N.COLOR,0,R))}else k|=N.COLOR_BUFFER_BIT}y&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",vn,!1),He.dispose(),he.dispose(),le.dispose(),P.dispose(),ae.dispose(),Q.dispose(),pe.dispose(),te.dispose(),oe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Pl),Ae.removeEventListener("sessionend",Vl),Ei.stop()};function ft(x){x.preventDefault(),_c("WebGLRenderer: Context Lost."),D=!0}function it(){_c("WebGLRenderer: Context Restored."),D=!1;const x=F.autoReset,y=Ne.enabled,z=Ne.autoUpdate,k=Ne.needsUpdate,B=Ne.type;Le(),F.autoReset=x,Ne.enabled=y,Ne.autoUpdate=z,Ne.needsUpdate=k,Ne.type=B}function vn(x){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Dn(x){const y=x.target;y.removeEventListener("dispose",Dn),Af(y)}function Af(x){Tf(x),P.remove(x)}function Tf(x){const y=P.get(x).programs;y!==void 0&&(y.forEach(function(z){oe.releaseProgram(z)}),x.isShaderMaterial&&oe.releaseShaderCache(x))}this.renderBufferDirect=function(x,y,z,k,B,me){y===null&&(y=jt);const xe=B.isMesh&&B.matrixWorld.determinantAffine()<0,de=Cf(x,y,z,k,B);g.setMaterial(k,xe);let Se=z.index,Te=1;if(k.wireframe===!0){if(Se=K.getWireframeAttribute(z),Se===void 0)return;Te=2}const Pe=z.drawRange,Xe=z.attributes.position;let be=Pe.start*Te,st=(Pe.start+Pe.count)*Te;me!==null&&(be=Math.max(be,me.start*Te),st=Math.min(st,(me.start+me.count)*Te)),Se!==null?(be=Math.max(be,0),st=Math.min(st,Se.count)):Xe!=null&&(be=Math.max(be,0),st=Math.min(st,Xe.count));const Ct=st-be;if(Ct<0||Ct===1/0)return;pe.setup(B,k,de,z,Se);let mt,lt=ce;if(Se!==null&&(mt=re.get(Se),lt=Z,lt.setIndex(mt)),B.isMesh)k.wireframe===!0?(g.setLineWidth(k.wireframeLinewidth*Rt()),lt.setMode(N.LINES)):lt.setMode(N.TRIANGLES);else if(B.isLine){let Vt=k.linewidth;Vt===void 0&&(Vt=1),g.setLineWidth(Vt*Rt()),B.isLineSegments?lt.setMode(N.LINES):B.isLineLoop?lt.setMode(N.LINE_LOOP):lt.setMode(N.LINE_STRIP)}else B.isPoints?lt.setMode(N.POINTS):B.isSprite&&lt.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(at.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Vt=B._multiDrawStarts,ge=B._multiDrawCounts,Jt=B._multiDrawCount,je=Se?re.get(Se).bytesPerElement:1,mn=P.get(k).currentProgram.getUniforms();for(let yn=0;yn<Jt;yn++)mn.setValue(N,"_gl_DrawID",yn),lt.render(Vt[yn]/je,ge[yn])}else if(B.isInstancedMesh)lt.renderInstances(be,Ct,B.count);else if(z.isInstancedBufferGeometry){const Vt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ge=Math.min(z.instanceCount,Vt);lt.renderInstances(be,Ct,ge)}else lt.render(be,Ct)};function Gl(x,y,z,k){O!==null&&x.isNodeMaterial&&O.setObject(k,x),et===!0&&Re.setState(x,z,!1),x.transparent===!0&&x.side===Tn&&x.forceSinglePass===!1?(x.side=an,x.needsUpdate=!0,ra(x,y,k),x.side=oi,x.needsUpdate=!0,ra(x,y,k),x.side=Tn):ra(x,y,k)}this.compile=function(x,y,z=null){z===null&&(z=x),O!==null&&O.renderStart(x,y,z),E=le.get(z),E.init(y),v.push(E),z.traverseVisible(function(B){B.isLight&&B.layers.test(y.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),x!==z&&x.traverseVisible(function(B){B.isLight&&B.layers.test(y.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),ht=this.localClippingEnabled,et=Re.init(this.clippingPlanes,ht),et===!0&&Re.setGlobalState(this.clippingPlanes,y),O!==null&&Ne.render(E.state.shadowsArray,z,y);const k=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const me=B.material;if(me)if(Array.isArray(me))for(let xe=0;xe<me.length;xe++){const de=me[xe];Gl(de,z,y,B),k.add(de)}else Gl(me,z,y,B),k.add(me)}),E=v.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(x,y,z=null){const k=this.compile(x,y,z);return new Promise(B=>{function me(){if(k.forEach(function(xe){const Se=P.get(xe).currentProgram;(Se===void 0||Se.isReady())&&k.delete(xe)}),k.size===0){B(x);return}setTimeout(me,10)}at.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Mr=null;function Ef(x){Mr&&Mr(x)}function Pl(){Ei.stop()}function Vl(){Ei.start()}const Ei=new Gh;Ei.setAnimationLoop(Ef),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(x){Mr=x,Ae.setAnimationLoop(x),x===null?Ei.stop():Ei.start()},Ae.addEventListener("sessionstart",Pl),Ae.addEventListener("sessionend",Vl),this.render=function(x,y){if(y!==void 0&&y.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(x,y);const z=Ae.enabled===!0&&Ae.isPresenting===!0,k=b!==null&&(ie===null||z)&&b.begin(L,ie);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(y),y=Ae.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,y,ie),E=le.get(x,v.length),E.init(y),E.state.textureUnits=$.getTextureUnits(),v.push(E),$e.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),We.setFromProjectionMatrix($e,Gn,y.reversedDepth),ht=this.localClippingEnabled,et=Re.init(this.clippingPlanes,ht),T=he.get(x,w.length),T.init(),w.push(T),Ae.enabled===!0&&Ae.isPresenting===!0){const xe=L.xr.getDepthSensingMesh();xe!==null&&Sr(xe,y,-1/0,L.sortObjects)}Sr(x,y,0,L.sortObjects),T.finish(),O!==null&&O.updateLights(E.state.lightsArray),L.sortObjects===!0&&T.sort(Me,Fe),vt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,vt&&He.addToRenderList(T,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Re.beginShadows();const B=E.state.shadowsArray;if(Ne.render(B,x,y),et===!0&&Re.endShadows(),(k&&b.hasRenderPass())===!1){const xe=T.opaque,de=T.transmissive;if(E.setupLights(),y.isArrayCamera){const Se=y.cameras;if(de.length>0)for(let Te=0,Pe=Se.length;Te<Pe;Te++){const Xe=Se[Te];Wl(xe,de,x,Xe)}vt&&He.render(x);for(let Te=0,Pe=Se.length;Te<Pe;Te++){const Xe=Se[Te];zl(T,x,Xe,Xe.viewport)}}else de.length>0&&Wl(xe,de,x,y),vt&&He.render(x),zl(T,x,y)}ie!==null&&W===0&&($.updateMultisampleRenderTarget(ie),$.updateRenderTargetMipmap(ie)),k&&b.end(L),x.isScene===!0&&x.onAfterRender(L,x,y),pe.resetDefaultState(),Y=-1,ee=null,v.pop(),v.length>0?(E=v[v.length-1],$.setTextureUnits(E.state.textureUnits),et===!0&&Re.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,O!==null&&O.renderEnd()};function Sr(x,y,z,k){if(x.visible===!1)return;if(x.layers.test(y.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(y);else if(x.isLightProbeGrid)E.pushLightProbeGrid(x);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(We)){k&&It.setFromMatrixPosition(x.matrixWorld).applyMatrix4($e);const xe=Q.update(x),de=x.material;de.visible&&T.push(x,xe,de,z,It.z,null,y)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(We))){const xe=Q.update(x),de=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),It.copy(x.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),It.copy(xe.boundingSphere.center)),It.applyMatrix4(x.matrixWorld).applyMatrix4($e)),Array.isArray(de)){const Se=xe.groups;for(let Te=0,Pe=Se.length;Te<Pe;Te++){const Xe=Se[Te],be=de[Xe.materialIndex];be&&be.visible&&T.push(x,xe,be,z,It.z,Xe,y)}}else de.visible&&T.push(x,xe,de,z,It.z,null,y)}}const me=x.children;for(let xe=0,de=me.length;xe<de;xe++)Sr(me[xe],y,z,k)}function zl(x,y,z,k){const{opaque:B,transmissive:me,transparent:xe}=x;E.setupLightsView(z),et===!0&&Re.setGlobalState(L.clippingPlanes,z),k&&g.viewport(ne.copy(k)),B.length>0&&aa(B,y,z),me.length>0&&aa(me,y,z),xe.length>0&&aa(xe,y,z),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Wl(x,y,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const be=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Cn(1,1,{generateMipmaps:!0,type:be?Wn:fn,minFilter:Rn,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const me=E.state.transmissionRenderTarget[k.id],xe=k.viewport||ne;me.setSize(xe.z*L.transmissionResolutionScale,xe.w*L.transmissionResolutionScale);const de=L.getRenderTarget(),Se=L.getActiveCubeFace(),Te=L.getActiveMipmapLevel();L.setRenderTarget(me),L.getClearColor(ut),Ke=L.getClearAlpha(),Ke<1&&L.setClearColor(16777215,.5),L.clear(),vt&&He.render(z);const Pe=L.toneMapping;L.toneMapping=Pn;const Xe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),et===!0&&Re.setGlobalState(L.clippingPlanes,k),aa(x,z,k),$.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me),at.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let st=0,Ct=y.length;st<Ct;st++){const mt=y[st],{object:lt,geometry:Vt,material:ge,group:Jt}=mt;if(ge.side===Tn&&lt.layers.test(k.layers)){const je=ge.side;ge.side=an,ge.needsUpdate=!0,Xl(lt,z,k,Vt,ge,Jt),ge.side=je,ge.needsUpdate=!0,be=!0}}be===!0&&($.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me))}L.setRenderTarget(de,Se,Te),L.setClearColor(ut,Ke),Xe!==void 0&&(k.viewport=Xe),L.toneMapping=Pe}function aa(x,y,z){const k=y.isScene===!0?y.overrideMaterial:null;for(let B=0,me=x.length;B<me;B++){const xe=x[B],{object:de,geometry:Se,group:Te}=xe;let Pe=xe.material;Pe.allowOverride===!0&&k!==null&&(Pe=k),de.layers.test(z.layers)&&Xl(de,y,z,Se,Pe,Te)}}function Xl(x,y,z,k,B,me){O!==null&&B.isNodeMaterial&&O.setObject(x,B),x.onBeforeRender(L,y,z,k,B,me),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(L,y,z,k,x,me),B.transparent===!0&&B.side===Tn&&B.forceSinglePass===!1?(B.side=an,B.needsUpdate=!0,L.renderBufferDirect(z,y,k,B,x,me),B.side=oi,B.needsUpdate=!0,L.renderBufferDirect(z,y,k,B,x,me),B.side=Tn):L.renderBufferDirect(z,y,k,B,x,me),x.onAfterRender(L,y,z,k,B,me)}function ra(x,y,z){y.isScene!==!0&&(y=jt);const k=P.get(x),B=E.state.lights,me=E.state.shadowsArray,xe=B.state.version,de=oe.getParameters(x,B.state,me,y,z,E.state.lightProbeGridArray),Se=oe.getProgramCacheKey(de);let Te=k.programs;k.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?y.environment:null,k.fog=y.fog;const Pe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;k.envMap=ae.get(x.envMap||k.environment,Pe),k.envMapRotation=k.environment!==null&&x.envMap===null?y.environmentRotation:x.envMapRotation,Te===void 0&&(x.addEventListener("dispose",Dn),Te=new Map,k.programs=Te);let Xe=Te.get(Se);if(Xe!==void 0){if(k.currentProgram===Xe&&k.lightsStateVersion===xe)return Yl(x,de),Xe}else de.uniforms=oe.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,z,de),x.onBeforeCompile(de,L),Xe=oe.acquireProgram(de,Se),Te.set(Se,Xe),k.uniforms=de.uniforms;const be=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=Re.uniform),Yl(x,de),k.needsLights=Lf(x),k.lightsStateVersion=xe,k.needsLights&&(be.ambientLightColor.value=B.state.ambient,be.lightProbe.value=B.state.probe,be.sunLights.value=B.state.sun,be.sunLightShadows.value=B.state.sunShadow,be.directionalLights.value=B.state.directional,be.directionalLightShadows.value=B.state.directionalShadow,be.spotLights.value=B.state.spot,be.spotLightShadows.value=B.state.spotShadow,be.rectAreaLights.value=B.state.rectArea,be.ltc_1.value=B.state.rectAreaLTC1,be.ltc_2.value=B.state.rectAreaLTC2,be.pointLights.value=B.state.point,be.pointLightShadows.value=B.state.pointShadow,be.hemisphereLights.value=B.state.hemi,be.sunShadowMatrix.value=B.state.sunShadowMatrix,be.sunShadowCascade.value=B.state.sunShadowCascade,be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,be.spotLightMatrix.value=B.state.spotLightMatrix,be.spotLightMap.value=B.state.spotLightMap,be.pointShadowMatrix.value=B.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=Xe,k.uniformsList=null,Xe}function $l(x){if(x.uniformsList===null){const y=x.currentProgram.getUniforms();x.uniformsList=Ka.seqWithValue(y.seq,x.uniforms)}return x.uniformsList}function Yl(x,y){const z=P.get(x);z.outputColorSpace=y.outputColorSpace,z.batching=y.batching,z.batchingColor=y.batchingColor,z.instancing=y.instancing,z.instancingColor=y.instancingColor,z.instancingMorph=y.instancingMorph,z.skinning=y.skinning,z.morphTargets=y.morphTargets,z.morphNormals=y.morphNormals,z.morphColors=y.morphColors,z.morphTargetsCount=y.morphTargetsCount,z.numClippingPlanes=y.numClippingPlanes,z.numIntersection=y.numClipIntersection,z.vertexAlphas=y.vertexAlphas,z.vertexTangents=y.vertexTangents,z.toneMapping=y.toneMapping}function Rf(x,y){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(y.matrixWorld);for(let z=0,k=x.length;z<k;z++){const B=x[z];if(B.texture!==null&&B.boundingBox.containsPoint(M))return B}return null}function Cf(x,y,z,k,B){y.isScene!==!0&&(y=jt),$.resetTextureUnits();const me=y.fog,xe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?y.environment:null,de=ie===null?L.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ye.workingColorSpace,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Te=ae.get(k.envMap||xe,Se),Pe=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Xe=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),be=!!z.morphAttributes.position,st=!!z.morphAttributes.normal,Ct=!!z.morphAttributes.color;let mt=Pn;k.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(mt=L.toneMapping);const lt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Vt=lt!==void 0?lt.length:0,ge=P.get(k),Jt=E.state.lights;if(et===!0&&(ht===!0||x!==ee)){const dt=x===ee&&k.id===Y;Re.setState(k,x,dt)}let je=!1;k.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Jt.state.version||ge.outputColorSpace!==de||B.isBatchedMesh&&ge.batching===!1||!B.isBatchedMesh&&ge.batching===!0||B.isBatchedMesh&&ge.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&ge.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&ge.instancing===!1||!B.isInstancedMesh&&ge.instancing===!0||B.isSkinnedMesh&&ge.skinning===!1||!B.isSkinnedMesh&&ge.skinning===!0||B.isInstancedMesh&&ge.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ge.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ge.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ge.instancingMorph===!1&&B.morphTexture!==null||ge.envMap!==Te||k.fog===!0&&ge.fog!==me||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Re.numPlanes||ge.numIntersection!==Re.numIntersection)||ge.vertexAlphas!==Pe||ge.vertexTangents!==Xe||ge.morphTargets!==be||ge.morphNormals!==st||ge.morphColors!==Ct||ge.toneMapping!==mt||ge.morphTargetsCount!==Vt||!!ge.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,ge.__version=k.version);let mn=ge.currentProgram;je===!0&&(mn=ra(k,y,B),O&&k.isNodeMaterial&&O.onUpdateProgram(k,mn,ge));let yn=!1,ci=!1,$i=!1;const ot=mn.getUniforms(),Tt=ge.uniforms;if(g.useProgram(mn.program)&&(yn=!0,ci=!0,$i=!0),k.id!==Y&&(Y=k.id,ci=!0),ge.needsLights){const dt=Rf(E.state.lightProbeGridArray,B);ge.lightProbeGrid!==dt&&(ge.lightProbeGrid=dt,ci=!0)}if(yn||ee!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ot.setValue(N,"projectionMatrix",x.projectionMatrix),ot.setValue(N,"viewMatrix",x.matrixWorldInverse);const hi=ot.map.cameraPosition;hi!==void 0&&hi.setValue(N,gt.setFromMatrixPosition(x.matrixWorld)),C.logarithmicDepthBuffer&&ot.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ot.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),ee!==x&&(ee=x,ci=!0,$i=!0)}if(ge.needsLights&&(Jt.state.sunShadowMap.length>0&&ot.setValue(N,"sunShadowMap",Jt.state.sunShadowMap,$),Jt.state.directionalShadowMap.length>0&&ot.setValue(N,"directionalShadowMap",Jt.state.directionalShadowMap,$),Jt.state.spotShadowMap.length>0&&ot.setValue(N,"spotShadowMap",Jt.state.spotShadowMap,$),Jt.state.pointShadowMap.length>0&&ot.setValue(N,"pointShadowMap",Jt.state.pointShadowMap,$)),B.isSkinnedMesh){ot.setOptional(N,B,"bindMatrix"),ot.setOptional(N,B,"bindMatrixInverse");const dt=B.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ot.setValue(N,"boneTexture",dt.boneTexture,$))}B.isBatchedMesh&&(ot.setOptional(N,B,"batchingTexture"),ot.setValue(N,"batchingTexture",B._matricesTexture,$),ot.setOptional(N,B,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",B._indirectTexture,$),ot.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&ot.setValue(N,"batchingColorTexture",B._colorsTexture,$));const ui=z.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&U.update(B,z,mn),(ci||ge.receiveShadow!==B.receiveShadow)&&(ge.receiveShadow=B.receiveShadow,ot.setValue(N,"receiveShadow",B.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&y.environment!==null&&(Tt.envMapIntensity.value=y.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=Sx()),ci){if(ot.setValue(N,"toneMappingExposure",L.toneMappingExposure),ge.needsLights&&wf(Tt,$i),me&&k.fog===!0&&Ee.refreshFogUniforms(Tt,me),Ee.refreshMaterialUniforms(Tt,k,j,q,E.state.transmissionRenderTarget[x.id]),ge.needsLights&&ge.lightProbeGrid){const dt=ge.lightProbeGrid;Tt.probesSH.value=dt.texture,Tt.probesMin.value.copy(dt.boundingBox.min),Tt.probesMax.value.copy(dt.boundingBox.max),Tt.probesResolution.value.copy(dt.resolution)}Ka.upload(N,$l(ge),Tt,$)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ka.upload(N,$l(ge),Tt,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ot.setValue(N,"center",B.center),ot.setValue(N,"modelViewMatrix",B.modelViewMatrix),ot.setValue(N,"normalMatrix",B.normalMatrix),ot.setValue(N,"modelMatrix",B.matrixWorld),k.uniformsGroups!==void 0){const dt=k.uniformsGroups;for(let hi=0,Yi=dt.length;hi<Yi;hi++){const Kl=dt[hi];te.update(Kl,mn),te.bind(Kl,mn)}}return mn}function wf(x,y){x.ambientLightColor.needsUpdate=y,x.lightProbe.needsUpdate=y,x.sunLights.needsUpdate=y,x.sunLightShadows.needsUpdate=y,x.directionalLights.needsUpdate=y,x.directionalLightShadows.needsUpdate=y,x.pointLights.needsUpdate=y,x.pointLightShadows.needsUpdate=y,x.spotLights.needsUpdate=y,x.spotLightShadows.needsUpdate=y,x.rectAreaLights.needsUpdate=y,x.hemisphereLights.needsUpdate=y}function Lf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(x,y,z){const k=P.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),P.get(x.texture).__webglTexture=y,P.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,y){const z=P.get(x);z.__webglFramebuffer=y,z.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(x,y=0,z=0){ie=x,J=y,W=z;let k=null,B=!1,me=!1;if(x){const de=P.get(x);if(de.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(N.FRAMEBUFFER,de.__webglFramebuffer),ne.copy(x.viewport),Ue.copy(x.scissor),we=x.scissorTest,g.viewport(ne),g.scissor(Ue),g.setScissorTest(we),Y=-1;return}else if(de.__webglFramebuffer===void 0)$.setupRenderTarget(x);else if(de.__hasExternalTextures)$.rebindTextures(x,P.get(x.texture).__webglTexture,P.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Pe=x.depthTexture;if(de.__boundDepthTexture!==Pe){if(Pe!==null&&P.has(Pe)&&(x.width!==Pe.image.width||x.height!==Pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(x)}}const Se=x.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);const Te=P.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Te[y])?k=Te[y][z]:k=Te[y],B=!0):x.samples>0&&$.useMultisampledRTT(x)===!1?k=P.get(x).__webglMultisampledFramebuffer:Array.isArray(Te)?k=Te[z]:k=Te,ne.copy(x.viewport),Ue.copy(x.scissor),we=x.scissorTest}else ne.copy(ve).multiplyScalar(j).floor(),Ue.copy(ze).multiplyScalar(j).floor(),we=Dt;if(z!==0&&(k=G),g.bindFramebuffer(N.FRAMEBUFFER,k)&&g.drawBuffers(x,k),g.viewport(ne),g.scissor(Ue),g.setScissorTest(we),B){const de=P.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+y,de.__webglTexture,z)}else if(me){const de=y;for(let Se=0;Se<x.textures.length;Se++){const Te=P.get(x.textures[Se]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Se,Te.__webglTexture,z,de)}}else if(x!==null&&z!==0){const de=P.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,de.__webglTexture,z)}Y=-1};function ql(x){const y=P.get(x);return(y.__readFormat!==x.format||y.__readType!==x.type)&&(y.__readFormat=x.format,y.__readType=x.type,y.__formatReadable=C.textureFormatReadable(x.format),y.__typeReadable=C.textureTypeReadable(x.type)),y}this.readRenderTargetPixels=function(x,y,z,k,B,me,xe,de=0){if(!(x&&x.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=P.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){g.bindFramebuffer(N.FRAMEBUFFER,Se);try{const Te=x.textures[de],Pe=Te.format,Xe=Te.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de);const be=ql(Te);if(be.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=x.width-k&&z>=0&&z<=x.height-B&&N.readPixels(y,z,k,B,ue.convert(Pe),ue.convert(Xe),me)}finally{const Te=ie!==null?P.get(ie).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(x,y,z,k,B,me,xe,de=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=P.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(y>=0&&y<=x.width-k&&z>=0&&z<=x.height-B){g.bindFramebuffer(N.FRAMEBUFFER,Se);const Te=x.textures[de],Pe=Te.format,Xe=Te.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de);const be=ql(Te);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,st),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(y,z,k,B,ue.convert(Pe),ue.convert(Xe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Ct=ie!==null?P.get(ie).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,Ct);const mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Gm(N,mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,st),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(st),N.deleteSync(mt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,y=null,z=0){const k=Math.pow(2,-z),B=Math.floor(x.image.width*k),me=Math.floor(x.image.height*k),xe=y!==null?y.x:0,de=y!==null?y.y:0;$.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,xe,de,B,me),g.unbindTexture()},this.copyTextureToTexture=function(x,y,z=null,k=null,B=0,me=0){let xe,de,Se,Te,Pe,Xe,be,st,Ct;const mt=x.isCompressedTexture?x.mipmaps[me]:x.image;if(z!==null)xe=z.max.x-z.min.x,de=z.max.y-z.min.y,Se=z.isBox3?z.max.z-z.min.z:1,Te=z.min.x,Pe=z.min.y,Xe=z.isBox3?z.min.z:0;else{const Tt=Math.pow(2,-B);xe=Math.floor(mt.width*Tt),de=Math.floor(mt.height*Tt),x.isDataArrayTexture?Se=mt.depth:x.isData3DTexture?Se=Math.floor(mt.depth*Tt):Se=1,Te=0,Pe=0,Xe=0}k!==null?(be=k.x,st=k.y,Ct=k.z):(be=0,st=0,Ct=0);const lt=ue.convert(y.format),Vt=ue.convert(y.type);let ge;y.isData3DTexture?($.setTexture3D(y,0),ge=N.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?($.setTexture2DArray(y,0),ge=N.TEXTURE_2D_ARRAY):($.setTexture2D(y,0),ge=N.TEXTURE_2D),g.activeTexture(N.TEXTURE0),g.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,y.flipY),g.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),g.pixelStorei(N.UNPACK_ALIGNMENT,y.unpackAlignment);const Jt=g.getParameter(N.UNPACK_ROW_LENGTH),je=g.getParameter(N.UNPACK_IMAGE_HEIGHT),mn=g.getParameter(N.UNPACK_SKIP_PIXELS),yn=g.getParameter(N.UNPACK_SKIP_ROWS),ci=g.getParameter(N.UNPACK_SKIP_IMAGES);g.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),g.pixelStorei(N.UNPACK_SKIP_PIXELS,Te),g.pixelStorei(N.UNPACK_SKIP_ROWS,Pe),g.pixelStorei(N.UNPACK_SKIP_IMAGES,Xe);const $i=x.isDataArrayTexture||x.isData3DTexture,ot=y.isDataArrayTexture||y.isData3DTexture;if(x.isDepthTexture){const Tt=P.get(x),ui=P.get(y),dt=P.get(Tt.__renderTarget),hi=P.get(ui.__renderTarget);g.bindFramebuffer(N.READ_FRAMEBUFFER,dt.__webglFramebuffer),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Yi=0;Yi<Se;Yi++)$i&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,P.get(x).__webglTexture,B,Xe+Yi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,P.get(y).__webglTexture,me,Ct+Yi)),N.blitFramebuffer(Te,Pe,xe,de,be,st,xe,de,N.DEPTH_BUFFER_BIT,N.NEAREST);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||P.has(x)){const Tt=P.get(x),ui=P.get(y);g.bindFramebuffer(N.READ_FRAMEBUFFER,I),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let dt=0;dt<Se;dt++)$i?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.__webglTexture,B,Xe+dt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tt.__webglTexture,B),ot?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ui.__webglTexture,me,Ct+dt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ui.__webglTexture,me),B!==0?N.blitFramebuffer(Te,Pe,xe,de,be,st,xe,de,N.COLOR_BUFFER_BIT,N.NEAREST):ot?N.copyTexSubImage3D(ge,me,be,st,Ct+dt,Te,Pe,xe,de):N.copyTexSubImage2D(ge,me,be,st,Te,Pe,xe,de);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ot?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(ge,me,be,st,Ct,xe,de,Se,lt,Vt,mt.data):y.isCompressedArrayTexture?N.compressedTexSubImage3D(ge,me,be,st,Ct,xe,de,Se,lt,mt.data):N.texSubImage3D(ge,me,be,st,Ct,xe,de,Se,lt,Vt,mt):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,me,be,st,xe,de,lt,Vt,mt.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,me,be,st,mt.width,mt.height,lt,mt.data):N.texSubImage2D(N.TEXTURE_2D,me,be,st,xe,de,lt,Vt,mt);g.pixelStorei(N.UNPACK_ROW_LENGTH,Jt),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,je),g.pixelStorei(N.UNPACK_SKIP_PIXELS,mn),g.pixelStorei(N.UNPACK_SKIP_ROWS,yn),g.pixelStorei(N.UNPACK_SKIP_IMAGES,ci),me===0&&y.generateMipmaps&&N.generateMipmap(ge),g.unbindTexture()},this.initRenderTarget=function(x){P.get(x).__webglFramebuffer===void 0&&$.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?$.setTextureCube(x,0):x.isData3DTexture?$.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?$.setTexture2DArray(x,0):$.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){J=0,W=0,ie=null,g.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ye._getUnpackColorSpace()}}var Kt=(e=>(e[e.Base1Solid=1]="Base1Solid",e[e.Base1Image=2]="Base1Image",e[e.Base1ClipMap=4]="Base1ClipMap",e[e.Translucent=16]="Translucent",e[e.Diffuse=32]="Diffuse",e[e.Luminous=64]="Luminous",e[e.Alpha=256]="Alpha",e[e.InvAlpha=512]="InvAlpha",e[e.Additive=65536]="Additive",e[e.Detail=131072]="Detail",e[e.Gouraud=268435456]="Gouraud",e[e.Stippled=1073741824]="Stippled",e[e.Perspective=2147483648]="Perspective",e))(Kt||{});class Ol{type=0;origTextureId=0;origPaletteId=0;colorValue=0;translucency=0;luminosity=0;diffuse=0;static read(t){const n=new Ol;return n.type=t.readUInt32(),(n.type&2)!==0||(n.type&4)!==0?(n.origTextureId=t.readUInt32(),n.origPaletteId=t.readUInt32()):n.colorValue=t.readUInt32(),n.translucency=t.readFloat32(),n.luminosity=t.readFloat32(),n.diffuse=t.readFloat32(),n}}let qh=0;function Mi(){return qh}function Si(e){return qh===e}const ru=new Set;function Ax(e){return ru.add(e),()=>{ru.delete(e)}}const gs={BILINEAR:0,TRILINEAR:1,SHARP:2,ANISOTROPIC:3},Tx=[4,3,2,1,0],Kh=1,ou=2,cl=1,Ex=-1.4,cr=8,lu=[0,1,2,4,8],Rx=0,Zh=1024;function Cx(e){return typeof e=="number"&&Number.isInteger(e)&&e>=0&&e<=3?e:Kh}function cu(e,t){return typeof e=="number"&&Tx.includes(e)?e:t}function Jh(e){return e===0?0:e-1}function uu(e){return Jh(e)}function Qh(e){const t=Jh(e);return lu[Math.min(t,lu.length-1)]}function wx(e){return Math.max(0,uu(e)-uu(cl))}function hu(e,t=Zh){const n=t>>Qh(e);return n<cr?cr:n}function ul(e,t){return Math.min(e,t)}function fu(e,t){return e/ul(e,t)}function ur(e,t,n=cr){if(t<=0||e<=0)return e;const i=Math.max(1,e>>t);return i>=n?i:Math.min(e,n)}function Lx(e,t){const n=Math.max(1,Math.floor(t));switch(e){case gs.BILINEAR:return{minFilter:za,magFilter:Et,anisotropy:1};case gs.ANISOTROPIC:return{minFilter:Rn,magFilter:Et,anisotropy:n};case gs.SHARP:case gs.TRILINEAR:default:return{minFilter:Rn,magFilter:Et,anisotropy:1}}}function du(e){return e===gs.SHARP?Ex:0}function Dx(e,t,n){if(t=Math.max(1,Math.floor(t)),n=Math.max(1,Math.floor(n)),t===1&&n===1)return e;const i=e.width,s=e.height,a=Math.max(1,Math.floor(i/t)),r=Math.max(1,Math.floor(s/n)),o=new Uint8Array(a*r*4),l=t*n,c=l>>1;for(let u=0;u<r;u++)for(let f=0;f<a;f++){let h=0,p=0,_=0,S=0;for(let d=0;d<n;d++){const A=Math.min(s-1,u*n+d);for(let R=0;R<t;R++){const M=Math.min(i-1,f*t+R),T=(A*i+M)*4;h+=e.data[T],p+=e.data[T+1],_+=e.data[T+2],S+=e.data[T+3]}}const m=(u*a+f)*4;o[m]=(h+c)/l|0,o[m+1]=(p+c)/l|0,o[m+2]=(_+c)/l|0,o[m+3]=(S+c)/l|0}return{data:o,width:a,height:r}}function yx(e,t,n=cr){const i=ur(e.width,t,n),s=ur(e.height,t,n);return i===e.width&&s===e.height?e:Dx(e,e.width/i,e.height/s)}function Ux(e,t,n){if(t=Math.max(1,Math.min(e.width,Math.floor(t))),n=Math.max(1,Math.min(e.height,Math.floor(n))),t===e.width&&n===e.height)return e;const i=new Uint8Array(t*n*4);for(let s=0;s<n;s++)i.set(e.data.subarray(s*e.width*4,(s*e.width+t)*4),s*t*4);return{data:i,width:t,height:n}}function Nx(e,t,n){if(t=Math.max(1,Math.min(e.width,Math.floor(t))),n=Math.max(1,Math.min(e.height,Math.floor(n))),t===e.width&&n===e.height)return e;const i=Math.floor(e.width/t),s=Math.floor(e.height/n),a=new Uint8Array(t*n*4);for(let r=0;r<n;r++){const o=r*s*e.width;for(let l=0;l<t;l++){const c=(o+l*i)*4,u=(r*t+l)*4;a[u]=e.data[c],a[u+1]=e.data[c+1],a[u+2]=e.data[c+2],a[u+3]=e.data[c+3]}}return{data:a,width:t,height:n}}const Il={value:0},_s="acMipBias",jh="acSamplerBias",mu="#include <map_fragment>",Ox="#include <alphamap_fragment>",pu="texture2D( map, vMapUv )",gu="texture2D( alphaMap, vAlphaMapUv )";function ef(e){if(e.includes(`uniform float ${_s};`))return e;const t=Ge.map_fragment,n=Ge.alphamap_fragment;if(!t.includes(pu))throw new Error("TextureSamplerPrefs: map_fragment lost its texture2D anchor");if(!n.includes(gu))throw new Error("TextureSamplerPrefs: alphamap_fragment lost its texture2D anchor");if(!e.includes(mu))throw new Error("TextureSamplerPrefs: fragment shader has no map_fragment include");const i=t.split(pu).join(`texture2D( map, vMapUv, ${_s} )`),s=n.split(gu).join(`texture2D( alphaMap, vAlphaMapUv, ${_s} )`);return`uniform float ${_s};
`+e.replace(mu,i).replace(Ox,s)}const hl=new WeakSet;function tf(e){if(hl.has(e)||e.isShaderMaterial)return e;const t=e.customProgramCacheKey;e.onBeforeCompile=i=>{i.uniforms[_s]=Il,i.fragmentShader=ef(i.fragmentShader)};const n=typeof t=="function"&&t!==Xi.prototype.customProgramCacheKey?t.call(e):"";return e.customProgramCacheKey=()=>`${n}|${jh}`,e.needsUpdate=!0,hl.add(e),e}function Ix(e){hl.add(e)}const nf=new WeakSet;function _u(e){return nf.add(e),e}function sf(e){return!!e&&nf.has(e)}class Fx{filtering=Kh;landscapeDetail=ou;environmentDetail=cl;maxAnisotropy=1;hiFiMounted=!1;registry=new Map;hiResPending=new Set;unsubscribeArrival=null;bias;constructor(t=Il){this.bias=t,this.bias.value=du(this.filtering)}get values(){return{textureFiltering:this.filtering,landscapeTextureDetail:this.landscapeDetail,environmentTextureDetail:this.environmentDetail}}get textureFiltering(){return this.filtering}get landscapeTextureDetail(){return this.landscapeDetail}get environmentTextureDetail(){return this.environmentDetail}get registeredCount(){return this.registry.size}get mipLodBias(){return this.bias.value}setMaxAnisotropy(t){const n=Math.max(1,Math.floor(t));if(n!==this.maxAnisotropy&&(this.maxAnisotropy=n,this.filtering===gs.ANISOTROPIC))for(const i of this.registry.keys())this.applyTo(i)}getMaxAnisotropy(){return this.maxAnisotropy}get highResMounted(){return this.hiFiMounted}setHighResMounted(t){if(t===this.hiFiMounted)return!1;this.hiFiMounted=t;const n=new Map;for(const i of this.registry.keys())this.applyTo(i,n);return!0}usesHighResLevel(t){return t==="environment"&&this.environmentDetail===Rx&&this.hiFiMounted}shiftFor(t){return t==="environment"?wx(this.environmentDetail):Qh(this.landscapeDetail)}landscapeMergedSize(t=Zh){return hu(this.landscapeDetail,t)}set(t){const n={textureFiltering:"textureFiltering"in t?Cx(t.textureFiltering):this.filtering,landscapeTextureDetail:"landscapeTextureDetail"in t?cu(t.landscapeTextureDetail,ou):this.landscapeDetail,environmentTextureDetail:"environmentTextureDetail"in t?cu(t.environmentTextureDetail,cl):this.environmentDetail};if(!(n.textureFiltering!==this.filtering||n.landscapeTextureDetail!==this.landscapeDetail||n.environmentTextureDetail!==this.environmentDetail))return!1;this.filtering=n.textureFiltering,this.landscapeDetail=n.landscapeTextureDetail,this.environmentDetail=n.environmentTextureDetail,this.bias.value=du(this.filtering);const s=new Map;for(const a of this.registry.keys())this.applyTo(a,s);return!0}register(t,n,i,s={}){const a=t.image,r=this.registry.get(t),o=i??r?.fullRes??{data:a.data,width:a.width,height:a.height},l=s.hiRes??r?.hiRes,c=s.landscape??r?.landscape;if(s.builtFromHiRes)this.registry.set(t,{kind:n,fullRes:o,state:0,hiRes:l,atHiRes:!0,landscape:c,hiResImage:s.hiResImage??{data:a.data,width:a.width,height:a.height}});else{const u=a.width===o.width&&a.height===o.height;this.registry.set(t,{kind:n,fullRes:o,state:-1,landscape:c,hiRes:l,hiResImage:r?.hiResImage,atHiRes:u?!1:r?.atHiRes??!1})}return this.applyTo(t),t}unregister(t){this.registry.delete(t),this.hiResPending.delete(t)}get pendingHighResCount(){return this.hiResPending.size}retryPendingHighRes(){const t=[...this.hiResPending];this.hiResPending.clear();const n=new Map;for(const i of t)this.applyTo(i,n);this.hiResPending.size===0&&(this.unsubscribeArrival?.(),this.unsubscribeArrival=null)}isRegistered(t){return this.registry.has(t)}kindOf(t){return this.registry.get(t)?.kind??null}fullResOf(t){return this.registry.get(t)?.fullRes??null}isAtHighRes(t){return this.registry.get(t)?.atHiRes??!1}hasHighResLevel(t){return this.registry.get(t)?.hiRes!==void 0}census(){const t={landscape:{count:0,sizes:{},minFilters:[],magFilters:[],anisotropy:[],withHiRes:0,atHiRes:0},landscapeAlpha:{count:0,sizes:{},minFilters:[],magFilters:[],anisotropy:[],withHiRes:0,atHiRes:0},environment:{count:0,sizes:{},minFilters:[],magFilters:[],anisotropy:[],withHiRes:0,atHiRes:0}};for(const[n,i]of this.registry){const s=t[i.kind],a=n.image,r=`${a.width}x${a.height}`;s.count++,s.sizes[r]=(s.sizes[r]??0)+1,i.hiRes&&s.withHiRes++,i.atHiRes&&s.atHiRes++,s.minFilters.includes(n.minFilter)||s.minFilters.push(n.minFilter),s.magFilters.includes(n.magFilter)||s.magFilters.push(n.magFilter),s.anisotropy.includes(n.anisotropy)||s.anisotropy.push(n.anisotropy)}return t}applyTo(t,n=new Map){const i=this.registry.get(t);if(!i)return;let s=!1;const a=Lx(this.filtering,this.maxAnisotropy);t.minFilter!==a.minFilter&&(t.minFilter=a.minFilter,s=!0),t.magFilter!==a.magFilter&&(t.magFilter=a.magFilter,s=!0),t.anisotropy!==a.anisotropy&&(t.anisotropy=a.anisotropy,s=!0);let r=null;if(i.hiRes&&this.usesHighResLevel(i.kind)){if(i.hiResImage===void 0){const p=Mi(),_=i.hiRes();Si(p)?i.hiResImage=_:(this.hiResPending.add(t),this.unsubscribeArrival??=Ax(()=>this.retryPendingHighRes()))}r=i.hiResImage??null}const o=r!==null,l=r??i.fullRes;t.userData.acPaletted=sf(l);let c,u,f,h;if(i.kind==="environment"){const p=r?0:this.shiftFor(i.kind);c=p,u=ur(l.width,p),f=ur(l.height,p),h=()=>yx(l,p)}else{const p=hu(this.landscapeDetail,i.landscape?.baseTexSize);if(c=p,u=ul(p,l.width),f=ul(p,l.height),h=i.kind==="landscape"?()=>Ux(l,u,f):()=>Nx(l,u,f),i.kind==="landscape"&&i.landscape){const _=i.landscape.uvCells*fu(p,l.width),S=i.landscape.uvCells*fu(p,l.height);(t.repeat.x!==_||t.repeat.y!==S)&&t.repeat.set(_,S)}}if(c!==i.state||o!==i.atHiRes){const p=t.image;if(o!==i.atHiRes||p.width!==u||p.height!==f){const _=n.get(t.source),S=_??new gr(h());_||n.set(t.source,S),t.dispose(),t.source=S,s=!0}i.state=c,i.atHiRes=o}s&&(t.needsUpdate=!0)}}const os=new Fx,kx="	vec3 outgoingLight = acSRGBToLinear( acTexel * acLight );",af=1.5,Bx=2e-4,Za="acPartSphere",Hx="acDrawingSphere",Gx=1.3,vu=.75,Px=Gx/af,Vx="acRetailLighting";function zx(e){return`${Vx}:${e}`}const rf={value:1},xu=new WeakMap;function Wx(){return rf.value}const of="AC_LANDSCAPE",Fl="AC_ENVCELL",js="AC_CELLOBJECT",lf="AC_SKY",Mu="acSkyDiffuse",zs="vAcLight",hr="vAcLightBack",Xx="AC_CULL_NONE",cf=`( defined( DOUBLE_SIDED ) && !defined( ${of} ) && !defined( ${Xx} ) )`,uf={landscape:`#define ${of}
`,object:"",envcell:`#define ${Fl}
`,cellobject:`#define ${js}
`,sky:`#define ${lf}
`},hf=`( defined( ${Fl} ) || defined( ${js} ) )`,$x=`#if ( NUM_DIR_LIGHTS > 0 ) && !${hf}`,Yx=`#if ( NUM_POINT_LIGHTS > 0 ) && ${hf}`,Hs=e=>Number.isInteger(e)?`${e}.0`:`${e}`,qx=`uniform float acAmbientScale;
varying vec3 ${zs};
#if ${cf}
	#define AC_BACK_LIGHT
	varying vec3 ${hr};
#endif
#ifdef ${lf}
	uniform float ${Mu};
	#define AC_SUN_DIFFUSE ${Mu}
#else
	#define AC_SUN_DIFFUSE 1.0
#endif
uniform vec3 ambientLightColor;
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	#ifdef ${js}
	// Render::minimize_object_lighting @ 0054d480: a point light reaches a part only when
	// |light − centre|² − ( falloff + radius )² < F_EPSILON, centre/radius = the part's
	// drawing sphere (viewconeCheck: local_object_radius = object_scale · radius).
	uniform vec4 ${Za};
	bool acPartLit( const in PointLight light, const in vec3 c, const in float r ) {
		if ( r < 0.0 ) return true;
		float falloff = light.distance / ${Hs(af)};
		vec3 dc = light.position - c;
		return dot( dc, dc ) - ( falloff + r ) * ( falloff + r ) < ${Hs(Bx)};
	}
	#endif
	vec3 acPointLight( const in PointLight light, const in vec3 p, const in vec3 n ) {
		vec3 lv = light.position - p;
		float d = max( length( lv ), 1e-4 );
		// D3DLIGHT9.Range / calc_point_light: nothing beyond the range — a hard cutoff.
		if ( d >= light.distance ) return vec3( 0.0 );
		#ifdef ${Fl}
		if ( light.decay < 0.0 ) {
			// D3DPolyRender::SetStaticLightingVertexColors -> calc_point_light @ 0059c8b0
			float intensity = - light.decay;
			float range = light.distance * ${Hs(Px)};
			if ( d >= range ) return vec3( 0.0 );
			float wrap = ( dot( n, lv ) / d + ${Hs(2*vu-1)} ) / ${Hs(2*vu)};
			if ( wrap <= 0.0 ) return vec3( 0.0 );
			float f = ( 1.0 - d / range ) * intensity * wrap / ( d > 1.0 ? d * d : 1.0 );
			return ( light.color / intensity ) * min( f, 1.0 );
		}
		#endif
		// PrimD3DRender::config_hardware_light: Diffuse * max( 0, N.L ) * 1 / ( 0 + 1 * d + 0 * d * d )
		return light.color * saturate( dot( n, lv ) / d ) / d;
	}
#endif
`,Kx=`
	vec3 acN = normalize( transformedNormal );
	vec3 acSum = ambientLightColor * acAmbientScale;
	#ifdef AC_BACK_LIGHT
	vec3 acSumBack = acSum;
	#endif
	// CORE.17.q.b — the sun is active only in the landscape pass (useSunlightSet(1)):
	// PView::DrawCells draws every env cell and the objects in it under useSunlightSet(0).
	${$x}
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
			acSum += AC_SUN_DIFFUSE * directionalLights[ i ].color * saturate( dot( acN, directionalLights[ i ].direction ) );
			#ifdef AC_BACK_LIGHT
			acSumBack += AC_SUN_DIFFUSE * directionalLights[ i ].color * saturate( dot( - acN, directionalLights[ i ].direction ) );
			#endif
		}
		#pragma unroll_loop_end
	#endif
	// … and the pool lights reach only that useSunlightSet(0) span: DrawMeshInternal runs
	// minimize_object_lighting when useSunlight == 0, the landscape pass has the sun alone.
	${Yx}
		#ifdef ${js}
		// The part's drawing sphere in view space (through the instance matrix when batched).
		vec4 acPartC = vec4( ${Za}.xyz, 1.0 );
		float acPartScale = length( modelMatrix[ 0 ].xyz );
		#ifdef USE_INSTANCING
		acPartC = instanceMatrix * acPartC;
		acPartScale *= length( instanceMatrix[ 0 ].xyz );
		#endif
		acPartC = modelViewMatrix * acPartC;
		float acPartR = ${Za}.w < 0.0 ? -1.0 : ${Za}.w * acPartScale;
		#endif
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
			#ifdef ${js}
			if ( acPartLit( pointLights[ i ], acPartC.xyz, acPartR ) )
			#endif
			{
				acSum += acPointLight( pointLights[ i ], mvPosition.xyz, acN );
				#ifdef AC_BACK_LIGHT
				acSumBack += acPointLight( pointLights[ i ], mvPosition.xyz, - acN );
				#endif
			}
		}
		#pragma unroll_loop_end
	#endif
	${zs} = clamp( acSum, 0.0, 1.0 );
	#ifdef AC_BACK_LIGHT
	${hr} = clamp( acSumBack, 0.0, 1.0 );
	#endif`,Zx=`varying vec3 ${zs};
#if ${cf}
	varying vec3 ${hr};
	#define AC_VERTEX_LIGHT ( gl_FrontFacing ? ${zs} : ${hr} )
#else
	#define AC_VERTEX_LIGHT ${zs}
#endif
vec3 acSRGBToLinear( in vec3 c ) {
	return mix( c / 12.92, pow( ( c + 0.055 ) / 1.055, vec3( 2.4 ) ), step( 0.04045, c ) );
}
`,ho="#include <common>",fo="#include <project_vertex>",Jx="#include <defaultnormal_vertex>",Qx="varying vec3 vViewPosition;",Su="vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;",bu=["#include <lights_pars_begin>","#include <lights_lambert_fragment>","#include <lights_fragment_begin>","#include <lights_fragment_maps>","#include <lights_fragment_end>"],jx="vec3 acLight = clamp( AC_VERTEX_LIGHT + totalEmissiveRadiance, 0.0, 1.0 );";function e1(e,t="object"){if(!e.includes(ho)||!e.includes(Jx)||!e.includes(fo)||!e.includes(Qx))throw new Error("RetailLighting: not a MeshLambertMaterial vertex shader (missing common/defaultnormal/project/vViewPosition anchors)");return uf[t]+e.replace(ho,`${ho}
${qx}`).replace(fo,`${fo}${Kx}`)}function t1(e,t="object"){for(const s of bu)if(!e.includes(s))throw new Error(`RetailLighting: not a MeshLambertMaterial fragment shader (missing ${s} anchor)`);if(!e.includes(Su))throw new Error("RetailLighting: not a MeshLambertMaterial fragment shader (missing outgoingLight anchor)");const n=[jx,"	vec3 acTexel = sRGBTransferOETF( vec4( diffuseColor.rgb, 1.0 ) ).rgb;",kx].join(`
`);let i=e;for(const s of bu)i=i.replace(s,"");return uf[t]+Zx+i.replace(Su,n)}function mo(e,t,n){if(e.forceSinglePass=!0,!(e instanceof Vs))return tf(e);if(xu.has(e))return e;const i=rf;e.onBeforeCompile=a=>{a.uniforms.acAmbientScale=i,a.uniforms[_s]=Il,a.vertexShader=e1(a.vertexShader,t),a.fragmentShader=ef(t1(a.fragmentShader,t))};const s=`${zx(t)}|${jh}`;return e.customProgramCacheKey=()=>s,e.needsUpdate=!0,xu.set(e,t),Ix(e),e}const n1=new WeakMap,ff="acClipList";function df(e){return Array.isArray(e)?e.map(t=>df(t)):n1.get(e)??e}const Au="acInCell";function i1(e,t,n=!1){const i=e.userData??(e.userData={});!n&&i[Au]===t||(i[Au]=t,e.traverse(s=>{const a=s;if(!a.isMesh||!a.material)return;const r=a.material,o=df(r);o!==r&&(Array.isArray(r)?r.forEach((l,c)=>Eu(l,o[c])):Eu(r,o),a.material=o)}))}const Tu="acScriptMaterial";function Eu(e,t){const n=e.userData?.[Tu];!n||!t||t===e||(n.luminous!==void 0&&t instanceof Vs&&a1(t,n.luminous),n.diffuse!==void 0&&"color"in t&&t.color.setScalar(n.diffuse),t.userData[Tu]={...n})}const mf="acSurfaceLuminosity";function s1(e){const t=e.userData?.[mf];return typeof t=="number"&&t>0?t:0}function a1(e,t){const n=s1(e);e.emissive.setScalar(n>0?n:t),e.emissiveIntensity=1}const r1=new WeakSet;function o1(e){return r1.add(e),e}const Mt={Zero:1,One:2,SrcAlpha:5,InvSrcAlpha:6},l1=100,c1=200;function u1(e){const t=(e&Kt.Additive)!==0;let n,i,s;(e&Kt.Alpha)!==0?(n=Mt.SrcAlpha,i=t?Mt.One:Mt.InvSrcAlpha,s=!0):(e&Kt.InvAlpha)===0?(n=Mt.One,t?(i=Mt.One,s=!0):(i=Mt.Zero,s=!1)):(n=Mt.InvSrcAlpha,i=t?Mt.One:Mt.SrcAlpha,s=!0);let a=!1;return(e&Kt.Base1ClipMap)!==0&&(s||(n=Mt.One,i=Mt.InvSrcAlpha),s=!0,a=!0),(e&Kt.Translucent)!==0&&(!s||a)&&(n=Mt.SrcAlpha,i=Mt.InvSrcAlpha,s=!0,a=!1),{blend:s,src:n,dst:i,alphaTest:a,depthWrite:a||!s,fog:!t}}function pf(e){return(e?.userData?.acPaletted===!0?l1:c1)/255}const Ru={[Mt.Zero]:uh,[Mt.One]:hh,[Mt.SrcAlpha]:xl,[Mt.InvSrcAlpha]:Ml};function h1(e){return(e&(Kt.Alpha|Kt.InvAlpha|Kt.Additive))!==0?"alpha":(e&Kt.Base1ClipMap)!==0?"clip":(e&Kt.Translucent)!==0?"alpha":"none"}const f1=-.5,gf="acAutoAlphaRef";function Cu(e,t,n,i=!1){let s=u1(e);i&&(s=s.blend&&!s.alphaTest?{...s,depthWrite:!1}:{...s,blend:!0,src:Mt.SrcAlpha,dst:Mt.InvSrcAlpha,alphaTest:!1,depthWrite:!1});const a={transparent:s.blend,depthWrite:s.depthWrite,depthFunc:nr,alphaTest:s.alphaTest&&n?pf(n):0,blending:Gi,forceSinglePass:!0,clipList:!i&&h1(e)==="clip"};return(e&Kt.Translucent)!==0&&(a.opacity=1-t),s.blend&&(s.src===Mt.SrcAlpha&&s.dst===Mt.InvSrcAlpha?a.blending=Gi:s.src===Mt.SrcAlpha&&s.dst===Mt.One?a.blending=Mo:(a.blending=ch,a.blendSrc=Ru[s.src],a.blendDst=Ru[s.dst],a.blendEquation=Ii)),a}function wu(e,t){e.transparent=t.transparent,e.depthWrite=t.depthWrite,e.depthFunc=t.depthFunc,e.alphaTest=t.alphaTest,e.blending=t.blending,t.blendSrc!==void 0&&(e.blendSrc=t.blendSrc),t.blendDst!==void 0&&(e.blendDst=t.blendDst),t.blendEquation!==void 0&&(e.blendEquation=t.blendEquation),t.opacity!==void 0&&(e.opacity=t.opacity),e.forceSinglePass=t.forceSinglePass,t.clipList&&(e.userData[ff]=!0),t.alphaTest>0&&(e.userData[gf]=!0)}function d1(e){if(e.alphaTest<=0||!e.userData?.[gf])return;const t=pf(e.map??null);e.alphaTest!==t&&(e.alphaTest=t)}const Lu=Symbol.for("acjs.surfaceAlphaRefHook");{const e=Xi.prototype;if(!e[Lu]){const t=e.onBeforeRender;e.onBeforeRender=function(...n){d1(this),t.apply(this,n)},e[Lu]=!0}}function m1(e,t=0){(Array.isArray(e.material)?e.material:[e.material]).some(i=>i?.userData?.[ff])?e.renderOrder=f1+t:t!==0&&(e.renderOrder=t)}class p1{portalDb;textureManager;materialCache=new Map;constructor(t,n){this.portalDb=t,this.textureManager=n}getMaterial(t,n,i,s,a=!1,r=!1){if(i||s){const h=this.loadSurface(t);return h?this.createMaterialFromSurface(h,n,i,s,a,r):mo(new Vs({color:16711935}),"object")}const o=`${t}:${n??0}${a?":f":""}${r?":c":""}`,l=this.materialCache.get(o);if(l)return l;const c=Mi(),u=this.loadSurface(t),f=u?this.createMaterialFromSurface(u,n,void 0,void 0,a,r):mo(new Vs({color:16711935}),"object");return Si(c)&&this.cacheShared(o,f),f}sweep(t){let n=0;for(const[i,s]of[...this.materialCache])t.has(s)||(this.materialCache.delete(i),s.dispose(),n++);return n}cacheShared(t,n){o1(n),this.materialCache.set(t,n);const i=()=>{n.removeEventListener("dispose",i),this.materialCache.get(t)===n&&this.materialCache.delete(t)};n.addEventListener("dispose",i)}getSurface(t){try{return this.loadSurface(t)}catch{return null}}loadSurface(t){const n=this.portalDb.getFileData(t);return n?Ol.read(new Ht(n)):null}createMaterialFromSurface(t,n,i,s,a=!1,r=!1){const o=(t.type&Kt.Base1ClipMap)!==0,l=(t.type&Kt.Base1Image)!==0||o,c=(t.type&Kt.Additive)!==0,u=(t.type&Kt.Luminous)!==0;let f=null;if(l&&t.origTextureId){let S=t.origTextureId;if(i?.has(S)&&(S=i.get(S)),s)f=this.textureManager.getTextureWithPalette(S,s,o,r);else{const m=n??t.origPaletteId;f=this.textureManager.getTexture(S,m||void 0,o,"environment",r)}}if(u||c){const S={};f?S.map=f:S.color=t.colorValue||16777215,c&&(S.fog=!1),S.side=a?oi:Tn;const m=new yl(S);return wu(m,Cu(t.type,t.translucency,f)),tf(m)}const h={};f?h.map=f:h.color=t.colorValue||13421772;const p=t.luminosity>0?t.luminosity:0;p>0&&(h.emissive=new Je(p,p,p)),h.side=a?oi:Tn;const _=new Vs(h);return wu(_,Cu(t.type,t.translucency,f)),p>0&&(_.userData[mf]=p),mo(_,"object")}get cacheSize(){return this.materialCache.size}clear(){for(const t of[...this.materialCache.values()])t.dispose();this.materialCache.clear()}}function g1(e){const t=e.readUInt16(),n=e.readVector3(),i=e.readVector3(),s=[];for(let a=0;a<t;a++)s.push({u:e.readFloat32(),v:e.readFloat32()});return{origin:n,normal:i,uvs:s}}function _1(e){const t=e.readInt32(),n=e.readUInt32(),i=new Map;for(let s=0;s<n;s++){const a=e.readUInt16();i.set(a,g1(e))}return{vertexType:t,vertices:i}}function Du(e){const t=e.readUInt8(),n=e.readUInt8(),i=e.readInt32(),s=e.readInt16(),a=e.readInt16(),r=[];for(let f=0;f<t;f++)r.push(e.readInt16());const o=[];if((n&4)===0)for(let f=0;f<t;f++)o.push(e.readUInt8());let l=[];if(i===2&&(n&8)===0)for(let f=0;f<t;f++)l.push(e.readUInt8());return{numPts:t,stippling:n,sidesType:i,posSurface:s,negSurface:i===1?s:a,vertexIndices:r,posUVIndices:o,negUVIndices:i===1?o:l}}var fl=(e=>(e[e.Drawing=0]="Drawing",e[e.Physics=1]="Physics",e[e.Cell=2]="Cell",e))(fl||{});function _f(e){return{normal:e.readVector3(),distance:e.readFloat32()}}function kl(e){return{origin:e.readVector3(),radius:e.readFloat32()}}function v1(e){const t=e.readUInt8(),n=e.readUInt8(),i=e.readUInt8(),s=e.readUInt8();return String.fromCharCode(s,i,n,t)}function Hi(e,t){const n=v1(e);if(n==="LEAF")return x1(e,t);if(n==="PORT")return M1(e,t);const i={type:n,splittingPlane:_f(e)};switch(n){case"BPnn":case"BPIn":i.posNode=Hi(e,t);break;case"BpIN":case"BpnN":i.negNode=Hi(e,t);break;case"BPIN":case"BPnN":i.posNode=Hi(e,t),i.negNode=Hi(e,t);break}if(t===2||(i.sphere=kl(e),t===1))return i;const s=e.readUInt32();i.inPolys=[];for(let a=0;a<s;a++)i.inPolys.push(e.readUInt16());return i}function x1(e,t){const n={type:"LEAF",leafIndex:e.readInt32()};if(t===1){n.solid=e.readInt32(),n.sphere=kl(e);const i=e.readUInt32();n.inPolys=[];for(let s=0;s<i;s++)n.inPolys.push(e.readUInt16())}return n}function M1(e,t){const n=_f(e),i=Hi(e,t),s=Hi(e,t),a={type:"PORT",splittingPlane:n,posNode:i,negNode:s};if(t===0){a.sphere=kl(e);const r=e.readUInt32(),o=e.readUInt32();a.inPolys=[];for(let l=0;l<r;l++)a.inPolys.push(e.readUInt16());a.inPortals=[];for(let l=0;l<o;l++)a.inPortals.push({portalIndex:e.readInt16(),polygonId:e.readInt16()})}return a}function yu(e,t){return{rootNode:Hi(e,t)}}class S1{id=0;flags=0;surfaces=[];vertexArray=null;physicsPolygons=new Map;physicsBSP=null;sortCenter={x:0,y:0,z:0};polygons=[];polygonMap=new Map;drawingBSP=null;didDegrade=0;vertices=[];constructor(t){this.id=t.readUInt32(),this.flags=t.readUInt32();const n=t.readCompressedUInt32();for(let i=0;i<n;i++)this.surfaces.push(t.readUInt32());if(this.vertexArray=_1(t),this.vertices=Array.from(this.vertexArray.vertices.values()),(this.flags&1)!==0){const i=t.readCompressedUInt32();for(let s=0;s<i;s++){const a=t.readUInt16();this.physicsPolygons.set(a,Du(t))}this.physicsBSP=yu(t,fl.Physics)}if(this.sortCenter=t.readVector3(),(this.flags&2)!==0){const i=t.readCompressedUInt32();for(let s=0;s<i;s++){const a=t.readUInt16(),r=Du(t);this.polygonMap.set(a,r),this.polygons.push(r)}this.drawingBSP=yu(t,fl.Drawing)}(this.flags&8)!==0&&(this.didDegrade=t.readUInt32())}}const b1=1,A1=2;function T1(e){const t=new Set;for(const n of e){const i=n.stippling&255;i>0&&i<128&&t.add(n.posSurface)}return n=>!t.has(n)}function E1(e){const t=e.vertexArray;if(!t)return{positions:new Float32Array(0),normals:new Float32Array(0),uvs:new Float32Array(0),indices:new Uint16Array(0),surfaceIndices:[],doubleSided:[],clampUV:[],batchOrdered:!1};const n=t.vertices,i=Array.from(n.keys()).sort((R,M)=>R-M),s=new Map,a=[],r=[],o=[];let l=0;for(const R of i){const M=n.get(R),T=Math.max(1,M.uvs.length);for(let E=0;E<T;E++)s.set(`${R}:${E}`,l),a.push(M.origin.x,M.origin.z,M.origin.y),r.push(M.normal.x,M.normal.z,M.normal.y),E<M.uvs.length?o.push(M.uvs[E].u,M.uvs[E].v):o.push(0,0),l++}const c=new Map,u=(R,M)=>{const T=`${R}:${M}`,E=c.get(T);if(E!==void 0)return E;const w=n.get(R);if(!w)return;const v=w.uvs[M]??w.uvs[0];return a.push(w.origin.x,w.origin.z,w.origin.y),r.push(-w.normal.x,-w.normal.z,-w.normal.y),o.push(v?v.u:0,v?v.v:0),c.set(T,l),l++},f=[],h=[],p=[],_=[];let S=!1;const m=e.polygons,d=T1(m),A=(R,M,T,E)=>{let w=-1,v=-1;for(let b=0;b<R.length;b++){const L=M(b,R[b]&65535);L!==void 0&&(b===0?w=L:b>=2&&(f.push(w,L,v),h.push(T),p.push(E),_.push(d(T))),v=L)}};for(const R of m){const M=R.vertexIndices;M.length<3||(A(M,(T,E)=>{const w=T<R.posUVIndices.length?R.posUVIndices[T]:0;return s.get(`${E}:${w}`)??s.get(`${E}:0`)},R.posSurface,R.sidesType===b1),R.sidesType===A1&&(R.negSurface!==R.posSurface&&(S=!0),A(M,(T,E)=>u(E,T<R.negUVIndices.length?R.negUVIndices[T]:0),R.negSurface,!1)))}return{positions:new Float32Array(a),normals:new Float32Array(r),uvs:new Float32Array(o),indices:new Uint16Array(f),surfaceIndices:h,doubleSided:p,clampUV:_,batchOrdered:S}}class ea{map=new Map;capacity;onEvict;constructor(t,n){if(!Number.isInteger(t)||t<0)throw new RangeError(`LruMap capacity must be a non-negative integer, got ${t}`);this.capacity=t,this.onEvict=n}get size(){return this.map.size}get(t){if(!this.map.has(t))return;const n=this.map.get(t);return this.map.delete(t),this.map.set(t,n),n}peek(t){return this.map.get(t)}has(t){return this.map.has(t)}set(t,n){for(this.map.has(t)&&this.map.delete(t),this.map.set(t,n);this.map.size>this.capacity;){const i=this.map.keys().next().value,s=this.map.get(i);this.map.delete(i),this.onEvict?.(i,s)}return this}delete(t){return this.map.delete(t)}clear(){this.map.clear()}keys(){return this.map.keys()}values(){return this.map.values()}entries(){return this.map.entries()}[Symbol.iterator](){return this.map.entries()}}class R1{portalDb;materialFactory;geometryCache=new ea(4096);constructor(t,n){this.portalDb=t,this.materialFactory=n}loadGfxObj(t){const n=this.portalDb.getFileData(t);return n?new S1(new Ht(n)):null}getGeometry(t){const n=this.geometryCache.get(t);if(n)return n;const i=this.loadGfxObj(t);if(!i)return null;const s=E1(i);return this.geometryCache.set(t,s),s}createMesh(t,n,i,s=!1){const a=this.loadGfxObj(t);if(!a)return null;const r=this.getGeometry(t);if(!r||r.indices.length===0)return null;const o=new ms;o.name=`gfxobj_${t.toString(16).padStart(8,"0")}`;const l=new Map,c=new Map,u=r.surfaceIndices.length;for(let p=0;p<u;p++){const _=r.surfaceIndices[p],m=(a.surfaces[_]??0)*4+(r.clampUV[p]?2:0)+(r.doubleSided[p]?1:0);let d=l.get(m);d||(d=[],l.set(m,d));const A=c.get(m);(A===void 0||_<A)&&c.set(m,_);const R=p*3;d.push(r.indices[R],r.indices[R+1],r.indices[R+2])}const f=a.drawingBSP?.rootNode?.sphere,h=f?[f.origin.x,f.origin.z,f.origin.y,f.radius]:void 0;for(const[p,_]of l){const S=Math.floor(p/4);if(s&&!w1(this.materialFactory.getSurface(S)))continue;const m=p%2===1,d=p%4>=2,A=new wn;h&&(A.userData[Hx]=h),A.setAttribute("position",new Bt(r.positions,3)),A.setAttribute("normal",new Bt(r.normals,3)),A.setAttribute("uv",new Bt(r.uvs,2)),A.setIndex(new Bt(new Uint16Array(_),1));const R=this.materialFactory.getMaterial(S,void 0,n,i,!m,d),M=new Xn(A,R);M.userData.surfaceId=S,m1(M,r.batchOrdered?C1*(c.get(p)??0):0),o.add(M)}return o}getSurface(t){return this.materialFactory.getSurface(t)}createBufferGeometry(t){const n=this.getGeometry(t);if(!n||n.indices.length===0)return null;const i=new wn;return i.setAttribute("position",new Bt(n.positions,3)),i.setAttribute("normal",new Bt(n.normals,3)),i.setAttribute("uv",new Bt(n.uvs,2)),i.setIndex(new Bt(n.indices,1)),i}placeModel(t,n,i){const s=this.createMesh(t);return s?(s.position.set(n.x,n.z,n.y),i&&s.quaternion.set(-i.x,-i.z,-i.y,i.w),s):null}get cacheSize(){return this.geometryCache.size}clear(){this.geometryCache.clear()}}const C1=1e-4;function w1(e){return!e||(e.type&6)!==0}function po(e){return{origin:e.readVector3(),radius:e.readFloat32()}}function L1(e){return{origin:e.readVector3(),radius:e.readFloat32(),height:e.readFloat32()}}function Uu(e){return{partId:e.readInt32(),frame:na(e)}}function D1(e){return{viewerSpaceLocation:na(e),color:e.readUInt32(),intensity:e.readFloat32(),falloff:e.readFloat32(),coneAngle:e.readFloat32()}}class y1{id=0;flags=0;allowFreeHeading=!1;hasPhysicsBSP=!1;parts=[];parentIndex=[];defaultScale=[];holdingLocations=new Map;connectionPoints=new Map;placementFrames=new Map;cylSpheres=[];spheres=[];height=0;radius=0;stepUpHeight=0;stepDownHeight=0;sortingSphere={origin:{x:0,y:0,z:0},radius:0};selectionSphere={origin:{x:0,y:0,z:0},radius:0};lights=new Map;defaultAnimation=0;defaultScript=0;defaultMotionTable=0;defaultSoundTable=0;defaultScriptTable=0;constructor(t){this.id=t.readUInt32(),this.flags=t.readUInt32(),this.allowFreeHeading=(this.flags&4)!==0,this.hasPhysicsBSP=(this.flags&8)!==0;const n=t.readUInt32();for(let i=0;i<n;i++)this.parts.push(t.readUInt32());if((this.flags&1)!==0)for(let i=0;i<n;i++)this.parentIndex.push(t.readUInt32());if((this.flags&2)!==0)for(let i=0;i<n;i++)this.defaultScale.push(t.readVector3());{const i=t.readInt32();for(let s=0;s<i;s++){const a=t.readInt32();this.holdingLocations.set(a,Uu(t))}}{const i=t.readInt32();for(let s=0;s<i;s++){const a=t.readInt32();this.connectionPoints.set(a,Uu(t))}}{const i=t.readInt32();for(let s=0;s<i;s++){const a=t.readInt32();this.placementFrames.set(a,ah(t,n))}}{const i=t.readUInt32();for(let s=0;s<i;s++)this.cylSpheres.push(L1(t))}{const i=t.readUInt32();for(let s=0;s<i;s++)this.spheres.push(po(t))}this.height=t.readFloat32(),this.radius=t.readFloat32(),this.stepUpHeight=t.readFloat32(),this.stepDownHeight=t.readFloat32(),this.sortingSphere=po(t),this.selectionSphere=po(t);{const i=t.readInt32();for(let s=0;s<i;s++){const a=t.readInt32();this.lights.set(a,D1(t))}}this.defaultAnimation=t.readUInt32(),this.defaultScript=t.readUInt32(),this.defaultMotionTable=t.readUInt32(),this.defaultSoundTable=t.readUInt32(),this.defaultScriptTable=t.readUInt32()}}const ta=$u.Resting;function U1(e,t=ta){return e.placementFrames.get(t)??e.placementFrames.get(0)}function Nu(e,t=ta){const n=[],i=U1(e,t);for(let s=0;s<e.parts.length;s++){const a={partIndex:s,gfxObjId:e.parts[s],frame:i?.frames[s]??{origin:{x:0,y:0,z:0},orientation:{w:1,x:0,y:0,z:0}}};e.defaultScale.length>s&&(a.scale=e.defaultScale[s]),e.parentIndex.length>s&&(a.parentIndex=e.parentIndex[s]),n.push(a)}return n}function Ou(e,t){e.position.set(t.origin.x,t.origin.z,t.origin.y),e.quaternion.set(-t.orientation.x,-t.orientation.z,-t.orientation.y,t.orientation.w)}class N1{portalDb;modelRenderer;setupCache=new ea(2048);animationCache=new ea(512);degradeLod=null;constructor(t,n){this.portalDb=t,this.modelRenderer=n}setDegradeLod(t){this.degradeLod=t}loadSetupModel(t){const n=this.setupCache.get(t);if(n)return n;const i=this.portalDb.getFileData(t);if(!i)return null;const s=new y1(new Ht(i));return this.setupCache.set(t,s),s}loadAnimation(t){const n=this.animationCache.get(t);if(n)return n;const i=this.portalDb.getFileData(t);if(!i)return null;const s=new rh(new Ht(i));return this.animationCache.set(t,s),lh().hooks(s.partFrames),s}createSetupMesh(t,n=ta,i=!1){return this.createSetupMeshWithOverrides(t,n,void 0,void 0,void 0,i)}createSetupMeshWithOverrides(t,n=ta,i,s,a,r=!1){const o=this.loadSetupModel(t);if(!o||o.parts.length===0)return null;const l=Nu(o,n),c=new ms;c.name=`setup_${t.toString(16).padStart(8,"0")}`;const u=[];for(const f of l){const h=i?.get(f.partIndex)??f.gfxObjId,p=s?.get(f.partIndex),_=this.modelRenderer.createMesh(h,p,a,r);if(!_){u.push(null);continue}_.name=`part_${f.partIndex}`,_.userData.gfxObjId=h,this.degradeLod&&this.degradeLod.attachPart(_,h,S=>this.modelRenderer.createMesh(S,p,a,r)),Ou(_,f.frame),f.scale&&_.scale.set(f.scale.x,f.scale.z,f.scale.y),u.push(_)}for(let f=0;f<u.length;f++){const h=u[f];h&&c.add(h)}return c}posePlacement(t,n,i){const s=this.loadSetupModel(n);if(!s)return!1;for(const a of Nu(s,i)){const r=t.getObjectByName(`part_${a.partIndex}`);r&&r.parent===t&&Ou(r,a.frame)}return!0}get cacheSize(){return this.setupCache.size}clear(){this.setupCache.clear()}}function As(e){let t;t=(e>>11)*255+16;const n=(t/32+t)/32|0;t=((e&2016)>>5)*255+32;const i=(t/64+t)/64|0;t=(e&31)*255+16;const s=(t/32+t)/32|0;return[n,i,s]}function O1(e,t,n,i,s,a,r){const o=e.getUint16(t,!0),l=e.getUint16(t+2,!0);t+=4;const[c,u,f]=As(o),[h,p,_]=As(l),S=e.getUint32(t,!0);t+=4;for(let m=0;m<4;m++)for(let d=0;d<4;d++){let A=0,R=0,M=0,T=255;const E=S>>2*(4*m+d)&3;if(o>l)switch(E){case 0:A=c,R=u,M=f;break;case 1:A=h,R=p,M=_;break;case 2:A=(2*c+h)/3|0,R=(2*u+p)/3|0,M=(2*f+_)/3|0;break;case 3:A=(c+2*h)/3|0,R=(u+2*p)/3|0,M=(f+2*_)/3|0;break}else switch(E){case 0:A=c,R=u,M=f;break;case 1:A=h,R=p,M=_;break;case 2:A=(c+h)/2|0,R=(u+p)/2|0,M=(f+_)/2|0;break;case 3:A=0,R=0,M=0,T=0;break}const w=(n<<2)+d,v=(i<<2)+m;if(w<s&&v<a){const b=v*s+w<<2;r[b]=A,r[b+1]=R,r[b+2]=M,r[b+3]=T}}return t}function I1(e,t,n,i,s,a,r){const o=[];for(let A=0;A<8;A++)o.push(e.getUint8(t++));const l=e.getUint16(t,!0),c=e.getUint16(t+2,!0);t+=4;const[u,f,h]=As(l),[p,_,S]=As(c),m=e.getUint32(t,!0);t+=4;let d=0;for(let A=0;A<4;A++)for(let R=0;R<4;R++){let M=0,T=0,E=0,w=0;const v=m>>2*(4*A+R)&3,b=d>>1;switch((d&1)===0?w=o[b]&15|(o[b]&15)<<4:w=o[b]&240|(o[b]&240)>>4,d++,v){case 0:M=u,T=f,E=h;break;case 1:M=p,T=_,E=S;break;case 2:M=(2*u+p)/3|0,T=(2*f+_)/3|0,E=(2*h+S)/3|0;break;case 3:M=(u+2*p)/3|0,T=(f+2*_)/3|0,E=(h+2*S)/3|0;break}const L=(n<<2)+R,D=(i<<2)+A;if(L<s&&D<a){const O=D*s+L<<2;r[O]=M,r[O+1]=T,r[O+2]=E,r[O+3]=w}}return t}function F1(e,t,n,i,s,a,r){const o=e.getUint8(t++),l=e.getUint8(t++);let c=0n;for(let R=0;R<6;R++)c+=BigInt(e.getUint8(t++))<<BigInt(R*8);const u=e.getUint16(t,!0),f=e.getUint16(t+2,!0);t+=4;const[h,p,_]=As(u),[S,m,d]=As(f),A=e.getUint32(t,!0);t+=4;for(let R=0;R<4;R++)for(let M=0;M<4;M++){let T=0,E=0,w=0,v=255;const b=A>>2*(4*R+M)&3,L=Number(c>>BigInt(3*(4*R+M))&0x07n);switch(L===0?v=o:L===1?v=l:o>l?v=((8-L)*o+(L-1)*l)/7|0:L===6?v=0:L===7?v=255:v=((6-L)*o+(L-1)*l)/5|0,b){case 0:T=h,E=p,w=_;break;case 1:T=S,E=m,w=d;break;case 2:T=(2*h+S)/3|0,E=(2*p+m)/3|0,w=(2*_+d)/3|0;break;case 3:T=(h+2*S)/3|0,E=(p+2*m)/3|0,w=(_+2*d)/3|0;break}const D=(n<<2)+M,O=(i<<2)+R;if(D<s&&O<a){const G=O*s+D<<2;r[G]=T,r[G+1]=E,r[G+2]=w,r[G+3]=v}}return t}class go{static decompressDxt1(t,n,i){const s=new Uint8Array(n*i*4),a=new DataView(t.buffer,t.byteOffset,t.byteLength),r=(n+3)/4|0,o=(i+3)/4|0;let l=0;for(let c=0;c<o;c++)for(let u=0;u<r;u++)l=O1(a,l,u,c,n,i,s);return s}static decompressDxt3(t,n,i){const s=new Uint8Array(n*i*4),a=new DataView(t.buffer,t.byteOffset,t.byteLength),r=(n+3)/4|0,o=(i+3)/4|0;let l=0;for(let c=0;c<o;c++)for(let u=0;u<r;u++)l=I1(a,l,u,c,n,i,s);return s}static decompressDxt5(t,n,i){const s=new Uint8Array(n*i*4),a=new DataView(t.buffer,t.byteOffset,t.byteLength),r=(n+3)/4|0,o=(i+3)/4|0;let l=0;for(let c=0;c<o;c++)for(let u=0;u<r;u++)l=F1(a,l,u,c,n,i,s);return s}}class Fi{id=0;unknown=0;width=0;height=0;format=0;length=0;sourceData=new Uint8Array(0);defaultPaletteId=null;static read(t){const n=new Fi;return n.id=t.readUInt32(),n.unknown=t.readInt32(),n.width=t.readInt32(),n.height=t.readInt32(),n.format=t.readUInt32(),n.length=t.readInt32(),n.sourceData=t.readBytes(n.length),(n.format===101||n.format===41)&&(n.defaultPaletteId=t.readUInt32()),n}toRGBA(){const t=this.width,n=this.height,i=t*n,s=new Uint8Array(i*4);if(this.length===0)return{width:t,height:n,data:s};switch(this.format){case 827611204:{const a=go.decompressDxt1(this.sourceData,t,n);s.set(a);break}case 861165636:{const a=go.decompressDxt3(this.sourceData,t,n);s.set(a);break}case 894720068:{const a=go.decompressDxt5(this.sourceData,t,n);s.set(a);break}case 21:{const a=this.sourceData;for(let r=0;r<i;r++){const o=r*4,l=r*4;s[l]=a[o+2],s[l+1]=a[o+1],s[l+2]=a[o],s[l+3]=a[o+3]}break}case 20:{const a=this.sourceData;for(let r=0;r<i;r++){const o=r*3,l=r*4;s[l]=a[o+2],s[l+1]=a[o+1],s[l+2]=a[o],s[l+3]=255}break}case 243:{const a=this.sourceData;for(let r=0;r<i;r++){const o=r*3,l=r*4;s[l]=a[o],s[l+1]=a[o+1],s[l+2]=a[o+2],s[l+3]=255}break}case 23:{const a=new DataView(this.sourceData.buffer,this.sourceData.byteOffset,this.sourceData.byteLength);for(let r=0;r<i;r++){const o=a.getUint16(r*2,!0),l=r*4,c=(o&63488)>>11,u=(o&2016)>>5,f=o&31;s[l]=c<<3|c>>2,s[l+1]=u<<2|u>>4,s[l+2]=f<<3|f>>2,s[l+3]=255}break}case 26:{const a=new DataView(this.sourceData.buffer,this.sourceData.byteOffset,this.sourceData.byteLength);for(let r=0;r<i;r++){const o=a.getUint16(r*2,!0),l=r*4;s[l]=(o>>8&15)*17,s[l+1]=(o>>4&15)*17,s[l+2]=(o&15)*17,s[l+3]=(o>>12&15)*17}break}case 28:case 244:{const a=this.sourceData;for(let r=0;r<i;r++){const o=r*4;s[o]=255,s[o+1]=255,s[o+2]=255,s[o+3]=a[r]}break}case 41:{const a=this.sourceData;for(let r=0;r<i;r++){const o=r*4;s[o]=a[r],s[o+1]=a[r],s[o+2]=a[r],s[o+3]=255}break}case 101:{const a=new DataView(this.sourceData.buffer,this.sourceData.byteOffset,this.sourceData.byteLength);for(let r=0;r<i;r++){const o=a.getUint16(r*2,!0)&255,l=r*4;s[l]=o,s[l+1]=o,s[l+2]=o,s[l+3]=255}break}case 240:{s.set(this.sourceData.subarray(0,i*4));break}case 241:{const a=this.sourceData;for(let r=0;r<i;r++){const o=r*4,l=r*4;s[l]=a[o+3],s[l+1]=a[o+2],s[l+2]=a[o+1],s[l+3]=a[o]}break}case 242:{const a=this.sourceData;for(let r=0;r<i;r++){const o=r*3,l=r*4;s[l]=a[o+2],s[l+1]=a[o+1],s[l+2]=a[o],s[l+3]=255}break}case 500:return{width:0,height:0,data:new Uint8Array(0)}}return{width:t,height:n,data:s}}get isJPEG(){return this.format===500}getJPEGDataURL(){if(!this.isJPEG||this.sourceData.length===0)return null;let t="";const n=this.sourceData;for(let i=0;i<n.length;i++)t+=String.fromCharCode(n[i]);return`data:image/jpeg;base64,${btoa(t)}`}async toRGBAAsync(){if(!this.isJPEG)return this.toRGBA();if(this.sourceData.length===0)return{width:0,height:0,data:new Uint8Array(0)};const t=this.sourceData.slice(),n=new Blob([t.buffer],{type:"image/jpeg"}),i=await createImageBitmap(n),s=document.createElement("canvas");s.width=i.width,s.height=i.height;const a=s.getContext("2d");a.drawImage(i,0,0);const r=a.getImageData(0,0,i.width,i.height);return i.close(),{width:i.width,height:i.height,data:new Uint8Array(r.data.buffer)}}toRGBAWithPalette(t,n=!1){const i=this.width,s=this.height,a=i*s,r=new Uint8Array(a*4);if(this.length===0)return{width:i,height:s,data:r};if(this.format===41){const o=this.sourceData;for(let l=0;l<a;l++){const c=o[l],u=l*4;if(n&&c<8){r[u]=r[u+1]=r[u+2]=r[u+3]=0;continue}const f=t[c]??0;r[u]=f>>16&255,r[u+1]=f>>8&255,r[u+2]=f&255,r[u+3]=f>>>24&255}}else if(this.format===101){const o=new DataView(this.sourceData.buffer,this.sourceData.byteOffset,this.sourceData.byteLength);for(let l=0;l<a;l++){const c=o.getInt16(l*2,!0),u=l*4;if(n&&c<8){r[u]=r[u+1]=r[u+2]=r[u+3]=0;continue}const f=t[c]??0;r[u]=f>>16&255,r[u+1]=f>>8&255,r[u+2]=f&255,r[u+3]=f>>>24&255}}else return this.toRGBA();return{width:i,height:s,data:r}}}class Bl{id=0;unknown=0;unknownByte=0;textures=[];static read(t){const n=new Bl;n.id=t.readUInt32(),n.unknown=t.readInt32(),n.unknownByte=t.readUInt8();const i=t.readInt32();for(let s=0;s<i;s++)n.textures.push(t.readUInt32());return n}}var Ja=(e=>(e[e.GraphicsObject=1]="GraphicsObject",e[e.Setup=2]="Setup",e[e.Animation=3]="Animation",e[e.Palette=4]="Palette",e[e.SurfaceTexture=5]="SurfaceTexture",e[e.Texture=6]="Texture",e[e.Surface=8]="Surface",e[e.MotionTable=9]="MotionTable",e[e.Wave=10]="Wave",e[e.Environment=13]="Environment",e[e.PaletteSet=15]="PaletteSet",e[e.Clothing=16]="Clothing",e[e.DegradeInfo=17]="DegradeInfo",e[e.Scene=18]="Scene",e[e.Region=19]="Region",e[e.KeyMap=20]="KeyMap",e[e.RenderTexture=21]="RenderTexture",e[e.RenderMaterial=22]="RenderMaterial",e[e.MaterialModifier=23]="MaterialModifier",e[e.MaterialInstance=24]="MaterialInstance",e[e.SoundTable=32]="SoundTable",e[e.EnumMapper=34]="EnumMapper",e[e.DidMapper=37]="DidMapper",e[e.ActionMap=38]="ActionMap",e[e.DualDidMapper=39]="DualDidMapper",e[e.CombatTable=48]="CombatTable",e[e.String=49]="String",e[e.ParticleEmitter=50]="ParticleEmitter",e[e.PhysicsScript=51]="PhysicsScript",e[e.PhysicsScriptTable=52]="PhysicsScriptTable",e[e.MasterProperty=57]="MasterProperty",e[e.Font=64]="Font",e[e.DbProperties=120]="DbProperties",e))(Ja||{});function k1(e){let t=2166136261,n=3421674724;for(let i=0;i<e.length;i++){const s=e[i]>>>0;t=Math.imul(t^s&65535,16777619),t=Math.imul(t^s>>>16,16777619),n=Math.imul(n^s>>>16,16777619),n=Math.imul(n^s&65535,16777619)}return`${(t>>>0).toString(36)}.${(n>>>0).toString(36)}.${e.length}`}class Hl{portalDb;highResDb=null;textureCache=new Map;clampedTextureCache=new Map;surfaceLevelCache=new Map;paletteCache=new ea(512);paletteTextureCache=new ea(1024);owned=new Set;rgbaCache=new Map;maxTextureEntries;maxRgbaEntries;constructor(t,n=2048,i=4096,s=null){this.portalDb=t,this.highResDb=s,this.maxTextureEntries=n,this.maxRgbaEntries=i}setHighResDb(t){this.highResDb=t}get highRes(){return this.highResDb}readTextureFile(t){return this.portalDb.getFileData(t)??this.highResDb?.getFileData(t)??null}getSurfaceTextureLevels(t){const n=this.surfaceLevelCache.get(t);if(n!==void 0)return n;const i=Mi(),s=this.portalDb.getFileData(t),a=s?Bl.read(new Ht(s)).textures:null;return Si(i)&&this.surfaceLevelCache.set(t,a),a}resolveLevelTextureId(t,n){const i=this.getSurfaceTextureLevels(t);if(!i||i.length===0)return null;if(n==="portal")return i[i.length-1];if(i.length<2)return null;const s=i[0];return this.portalDb.hasFile(s)||(this.highResDb?.hasFile(s)??!1)?s:null}hasHighResLevel(t){return this.resolveLevelTextureId(t,"hires")!==null}hiResSourceFor(t,n){const i=this.getSurfaceTextureLevels(t);if(!(!i||i.length<2))return n}touchRgba(t){const n=this.rgbaCache.get(t);n!==void 0&&(this.rgbaCache.delete(t),this.rgbaCache.set(t,n))}sweep(t){for(const[i,s]of[...this.textureCache])t.has(s)||this.textureCache.delete(i);for(const[i,s]of[...this.clampedTextureCache])t.has(s)||this.clampedTextureCache.delete(i);for(const[i,s]of[...this.paletteTextureCache.entries()])t.has(s)||this.paletteTextureCache.delete(i);let n=0;for(const i of[...this.owned])t.has(i)||(this.owned.delete(i),os.unregister(i),i.dispose(),n++);return n}get ownedCount(){return this.owned.size}evictTextures(){if(!(this.maxTextureEntries<=0))for(const t of[this.textureCache,this.clampedTextureCache])for(;t.size>this.maxTextureEntries;){const n=t.keys().next().value;t.delete(n)}}evictRgba(){if(!(this.maxRgbaEntries<=0))for(;this.rgbaCache.size>this.maxRgbaEntries;)this.rgbaCache.delete(this.rgbaCache.keys().next().value)}getTexture(t,n,i=!1,s="environment",a=!1){const r=(n?t^n<<8:t)^(i?2147483648:0)^(s==="landscape"?1073741824:0),o=a?this.clampedTextureCache:this.textureCache,l=o.get(r);if(l)return Iu(o,r),l;const c=Mi(),u=this.getRGBA(t,n,i);if(!u)return null;const f=this.hiResSourceFor(t,()=>this.getRGBA(t,n,i,"hires")),h=f&&os.usesHighResLevel(s)?f():null,p=h??u,_=new rl(new Uint8Array(p.data.buffer,p.data.byteOffset,p.data.byteLength),p.width,p.height,dn);return _.colorSpace=nn,_.needsUpdate=!0,Fu(_,a,u),_.magFilter=Et,_.minFilter=Rn,_.generateMipmaps=!0,os.register(_,s,u,{hiRes:f,builtFromHiRes:h!==null,hiResImage:h??void 0}),this.owned.add(_),Si(c)&&(o.set(r,_),Iu(o,r),this.evictTextures()),_}getTextureWithPalette(t,n,i=!1,s=!1){const a=`${t}:${k1(n)}:${i?"c":"n"}${s?":clamp":""}`,r=this.paletteTextureCache.get(a);if(r)return r;const o=Mi(),l=this.getRGBAWithPalette(t,n,i);if(!l)return null;const c=this.hiResSourceFor(t,()=>this.getRGBAWithPalette(t,n,i,"hires")),u=c&&os.usesHighResLevel("environment")?c():null,f=u??l,h=new rl(new Uint8Array(f.data.buffer,f.data.byteOffset,f.data.byteLength),f.width,f.height,dn);return h.colorSpace=nn,h.needsUpdate=!0,Fu(h,s,l),h.magFilter=Et,h.minFilter=Rn,h.generateMipmaps=!0,os.register(h,"environment",l,{hiRes:c,builtFromHiRes:u!==null,hiResImage:u??void 0}),this.owned.add(h),Si(o)&&this.paletteTextureCache.set(a,h),h}getRGBAWithPalette(t,n,i=!1,s="portal"){const a=this.resolveLevelTextureId(t,s);if(a===null)return null;const r=this.readTextureFile(a);if(!r)return null;const o=Fi.read(new Ht(r));return o.defaultPaletteId!==null?_u(o.toRGBAWithPalette(n,i)):o.toRGBA()}getRGBA(t,n,i=!1,s="portal"){const a=`${t}:${n??0}:${i?"c":"n"}${s==="hires"?":h":""}`,r=this.rgbaCache.get(a);if(r)return this.touchRgba(a),r;const o=this.resolveLevelTextureId(t,s);if(o===null)return null;const l=Mi(),c=this.readTextureFile(o);if(!c)return null;const u=Fi.read(new Ht(c));let f;if(n&&u.defaultPaletteId!==null){const h=this.getPaletteColors(n);h?f=u.toRGBAWithPalette(h,i):f=u.toRGBA()}else if(u.defaultPaletteId!==null){const h=this.getPaletteColors(u.defaultPaletteId);h?f=u.toRGBAWithPalette(h,i):f=u.toRGBA()}else f=u.toRGBA();return u.defaultPaletteId!==null&&_u(f),Si(l)&&(this.rgbaCache.set(a,f),this.touchRgba(a),this.evictRgba()),f}getPaletteColors(t){const n=this.paletteCache.get(t);if(n)return n;const i=this.portalDb.getFileData(t);if(!i)return null;const s=mr.read(new Ht(i));return this.paletteCache.set(t,s.colors),s.colors}getHighResRGBA(t,n,i=!1){return this.getRGBA(t,n,i,"hires")}getDirectRGBA(t,n){const i=`direct:${t}:${n??0}`,s=this.rgbaCache.get(i);if(s)return this.touchRgba(i),s;const a=Mi(),r=this.readTextureFile(t);if(!r)return null;const o=Fi.read(new Ht(r));let l;if(n&&o.defaultPaletteId!==null){const c=this.getPaletteColors(n);l=c?o.toRGBAWithPalette(c):o.toRGBA()}else if(o.defaultPaletteId!==null){const c=this.getPaletteColors(o.defaultPaletteId);l=c?o.toRGBAWithPalette(c):o.toRGBA()}else l=o.toRGBA();return Si(a)&&(this.rgbaCache.set(i,l),this.touchRgba(i),this.evictRgba()),l}getIconRGBA(t,n){const i=t>>24&255;if(i===Ja.SurfaceTexture)return this.getRGBA(t,n);if(i===Ja.Texture)return this.getDirectRGBA(t,n);{const s=this.getRGBA(t,n);return s||this.getDirectRGBA(t,n)}}getIconDataURL(t,n){const i=this.getIconRGBA(t,n);return i?Hl.rgbaToDataURL(i.width,i.height,i.data):null}getJPEGDataURL(t){const n=this.portalDb.getFileData(t);if(!n)return null;const i=Fi.read(new Ht(n));return i.isJPEG?i.getJPEGDataURL():null}async getDirectRGBAAsync(t,n){const i=`direct:${t}:${n??0}`,s=this.rgbaCache.get(i);if(s)return this.touchRgba(i),s;const a=Mi(),r=this.readTextureFile(t);if(!r)return null;const o=Fi.read(new Ht(r));let l;if(o.isJPEG)l=await o.toRGBAAsync();else if(n&&o.defaultPaletteId!==null){const c=this.getPaletteColors(n);l=c?o.toRGBAWithPalette(c):o.toRGBA()}else if(o.defaultPaletteId!==null){const c=this.getPaletteColors(o.defaultPaletteId);l=c?o.toRGBAWithPalette(c):o.toRGBA()}else l=o.toRGBA();return Si(a)&&(this.rgbaCache.set(i,l),this.touchRgba(i),this.evictRgba()),l}async getIconRGBAAsync(t,n){return(t>>24&255)===Ja.Texture?this.getDirectRGBAAsync(t,n):this.getIconRGBA(t,n)}static rgbaToDataURL(t,n,i){const s=document.createElement("canvas");s.width=t,s.height=n;const a=s.getContext("2d"),r=a.createImageData(t,n);return r.data.set(i),a.putImageData(r,0,0),s.toDataURL("image/png")}get cacheSize(){return this.textureCache.size}clear(){for(const t of this.owned)os.unregister(t),t.dispose();this.owned.clear(),this.textureCache.clear(),this.clampedTextureCache.clear(),this.paletteTextureCache.clear(),this.paletteCache.clear(),this.rgbaCache.clear(),this.surfaceLevelCache.clear()}get estimatedMemoryBytes(){let t=0;for(const n of this.rgbaCache.values())t+=n.data.byteLength;return t}get stats(){return{textures:this.textureCache.size,paletteTextures:this.paletteTextureCache.size,rgbaEntries:this.rgbaCache.size,palettes:this.paletteCache.size,estimatedMB:Math.round(this.estimatedMemoryBytes/(1024*1024)*10)/10,highResMounted:this.highResDb!==null}}}function Iu(e,t){const n=e.get(t);n!==void 0&&(e.delete(t),e.set(t,n))}function Fu(e,t,n){const i=t?Bn:ir;e.wrapS=i,e.wrapT=i,e.userData.acPaletted=sf(n)}class B1{files;textures;materials;models;setups;constructor(t){const n=new Map;for(const[s,a]of t)n.set(s,a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength));this.files=new Vd(n);const i=this.files;this.textures=new Hl(this.files),this.materials=new p1(i,this.textures),this.models=new R1(i,this.materials),this.setups=new N1(i,this.models)}paletteColors(t){if(!t)return;const n=this.files.getFileData(t);if(n)return mr.read(new Ht(n)).colors}compositePalette(t){const n=this.paletteColors(t.paletteId);if(!n)return;if(!t.clothingTableId)return n;const i=this.files.getFileData(t.clothingTableId);if(!i)return n;const s=new lc(new Ht(i));if(s.clothingSubPalEffects.size===0)return n;const a=t.paletteTemplate??0,r=s.clothingSubPalEffects.get(a)??s.clothingSubPalEffects.values().next().value;if(!r)return n;const o=[...n],l=t.shade??0;for(const c of r.cloSubPalettes){const u=this.files.getFileData(c.paletteSet);if(!u)continue;const f=new Pd(new Ht(u)),h=this.paletteColors(f.getPaletteId(l));if(h)for(const p of c.ranges){const _=p.offset/8,S=p.numColors/8;for(let m=0;m<S&&_+m<o.length;m++)_+m<h.length&&(o[_+m]=h[_+m])}}return o}clothingOverrides(t,n){if(!t)return{};const i=this.files.getFileData(t);if(!i)return{};const a=new lc(new Ht(i)).clothingBaseEffects.get(n);if(!a)return{};const r=new Map;for(const o of a.cloObjectEffects){if(o.cloTextureEffects.length===0)continue;const l=new Map;for(const c of o.cloTextureEffects)l.set(c.oldTexture,c.newTexture);r.set(o.index,l)}return{perPartTextureOverrides:r.size?r:void 0}}animate(t,n){if(!n.motionTableId)return null;const i=this.files,s=new rm(t,i);return s.initFromMotionTable(n.motionTableId),s}build(t){const n=this.clothingOverrides(t.clothingTableId,t.setupId);return this.setups.createSetupMeshWithOverrides(t.setupId,ta,void 0,n.perPartTextureOverrides,this.compositePalette(t))}}function fr(e){return e.variants.find(n=>n.classId===e.defaultVariant)??e.variants[0]}function H1(e,t){const n=t.search.trim().toLowerCase(),i=e.filter(s=>!(n&&!s.name.toLowerCase().includes(n)||(t.minLevel!==null||t.maxLevel!==null)&&!s.variants.some(r=>!(t.minLevel!==null&&r.level<t.minLevel||t.maxLevel!==null&&r.level>t.maxLevel))||t.trophyOnly&&!s.variants.some(r=>r.trophies.length>0)));return i.sort((s,a)=>{const r=fr(s),o=fr(a);return t.sort==="name"?s.name.localeCompare(a.name):t.sort==="health"?o.health-r.health||s.name.localeCompare(a.name):r.level-o.level||s.name.localeCompare(a.name)}),i}function G1(e){const t=i=>(e.querySelector(`#${i}`)?.value??"").trim(),n=i=>{const s=t(i);if(s==="")return null;const a=Number(s);return Number.isFinite(a)?a:null};return{search:t("search"),minLevel:n("level-min"),maxLevel:n("level-max"),trophyOnly:e.querySelector("#trophy-only")?.checked??!1,sort:e.querySelector("#sort")?.value??"level"}}function P1(e,t,n){e.textContent="";for(const i of t){const s=fr(i),a=document.createElement("button");a.type="button",a.className="tile";const r=document.createElement("img");r.src=`stills/${s.classId}.png`,r.alt=i.name,r.loading="lazy",a.append(r);const o=document.createElement("div");if(o.className="tile-name",o.textContent=i.name,i.subclassed){const c=document.createElement("span");c.className="tile-badge",c.textContent="SUBCLASSED",o.append(c)}a.append(o);const l=document.createElement("div");l.className="tile-level",l.textContent=`Level ${s.level}`,a.append(l),a.addEventListener("click",()=>n(i)),e.append(a)}}const vs=.03,ku=.07;function Bu(e,t,n=vs){const i=Math.log(t/(1-t));return e+i/n}function ls(e,t=vs){return{even:Math.round(Bu(e,.5,t)),high:Math.round(Bu(e,.9,t))}}const V1=[["strength","Strength"],["endurance","Endurance"],["coordination","Coordination"],["quickness","Quickness"],["focus","Focus"],["self","Self"]],z1=[["slash","Slash"],["pierce","Pierce"],["bludgeon","Bludgeon"],["fire","Fire"],["cold","Cold"],["acid","Acid"],["electric","Electric"],["nether","Nether"]],W1=[["warMagic","War Magic","War Magic"],["voidMagic","Void Magic","Void Magic"],["lifeMagic","Life Magic","Life Magic"],["creatureMagic","Creature Magic","Creature Magic"]];function De(e,t,n){const i=document.createElement(e);return t&&(i.className=t),n!==void 0&&(i.textContent=n),i}function yi(e,t,n){const i=De("dt",void 0,t),s=De("dd");typeof n=="string"?s.textContent=n:s.append(n),e.append(i,s)}function cs(e,t,n,i,s){const a=De("div","skill"),r=De("div","skill-head"),o=De("span","skill-name",e);if(t){const l=De("small",void 0,` (${t})`);o.append(l)}if(r.append(o,De("span","skill-value",String(n))),a.append(r),i.length>0){const l=De("div","skill-targets");for(const c of i){const u=De("span",void 0,`${c.label}: ${c.value}`);l.append(u)}a.append(l)}if(s.length>0){const l=De("ul","spells");for(const c of s){const u=De("li"),f=document.createElement("a");f.href=`https://acpedia.org/wiki/${c.name.replace(/ /g,"_")}`,f.textContent=c.name,f.rel="noreferrer",u.append(f),l.append(u)}a.append(l)}return a}function X1(e,t,n,i){e.textContent="";const s=De("div","appraisal");s.append(De("h2",void 0,t.name)),s.append(De("div","level",`Level ${n.level}${t.subclassed?" · subclassed as a Tusker":""}`));const a=De("div","bars");for(const[v,b,L]of[["health","Health",n.health],["stamina","Stamina",n.stamina],["mana","Mana",n.mana]]){const D=De("div",`bar ${v}`),O=De("div","track"),G=De("div","fill");G.style.width="100%",O.append(G),D.append(De("span",void 0,b),O,De("b",void 0,String(L))),a.append(D)}s.append(a);const r=De("div","tabs"),o=De("div","tab-bodies"),l=De("div","tab-body"),c=De("div","tab-body");c.hidden=!0;const u=De("dl","rows");for(const[v,b]of V1){const L=n.attributes[v];L!==void 0&&yi(u,b,String(L))}l.append(u);const f=n.skills,h=n.skillNames,p=De("div","skill-group");if(p.append(De("h4",void 0,"Attack")),f.meleeAttack!==void 0){const{even:v,high:b}=ls(f.meleeAttack,vs),L=[{label:"Evade 50%",value:v},{label:"Evade 90%",value:b}];p.append(cs("Melee",h.meleeAttack,f.meleeAttack,L,[]))}if(f.missileAttack!==void 0){const{even:v,high:b}=ls(f.missileAttack,vs),L=[{label:"Evade 50%",value:v},{label:"Evade 90%",value:b}];p.append(cs("Missile",h.missileAttack,f.missileAttack,L,[]))}for(const[v,b,L]of W1){const D=f[v];if(D===void 0)continue;const{even:O,high:G}=ls(D,ku),I=[{label:"Resist 50%",value:O},{label:"Resist 90%",value:G}],H=n.spells.filter(J=>J.school===L).map(J=>({name:J.name,acpedia:J.acpedia}));p.append(cs(b,void 0,D,I,H))}c.append(p);const _=De("div","skill-group");if(_.append(De("h4",void 0,"Defense")),f.meleeDefense!==void 0){const{even:v,high:b}=ls(f.meleeDefense,vs),L=[{label:"Hit 50%",value:v},{label:"Hit 90%",value:b}];_.append(cs("Melee Defense",void 0,f.meleeDefense,L,[]))}if(f.missileDefense!==void 0){const{even:v,high:b}=ls(f.missileDefense,vs),L=[{label:"Hit 50%",value:v},{label:"Hit 90%",value:b}];_.append(cs("Missile Defense",void 0,f.missileDefense,L,[]))}if(f.magicDefense!==void 0){const{even:v,high:b}=ls(f.magicDefense,ku),L=[{label:"Land 50%",value:v},{label:"Land 90%",value:b}];_.append(cs("Magic Defense",void 0,f.magicDefense,L,[]))}c.append(_);const S=[{id:"attributes",label:"Attributes",body:l},{id:"skills",label:"Skills",body:c}];for(const[v,b]of S.entries()){const L=De("button","tab",b.label);L.type="button",L.setAttribute("aria-selected",v===0?"true":"false"),L.addEventListener("click",()=>{for(const D of S)r.querySelector(`[data-tab="${D.id}"]`)?.setAttribute("aria-selected",D.id===b.id?"true":"false"),D.body.hidden=D.id!==b.id}),L.dataset.tab=b.id,r.append(L)}if(o.append(l,c),s.append(r,o),t.variants.length>1){const v=De("div","section");v.append(De("h3",void 0,"Variants"));const b=De("div","variants");for(const L of t.variants){const D=De("button","variant");D.type="button",L.classId===n.classId&&D.setAttribute("aria-current","true"),D.append(De("span",void 0,`Level ${L.level}`),De("span",void 0,`Health ${L.health}`),De("span","class-id",`class ${L.classId}`),De("span",void 0,"Show")),D.addEventListener("click",()=>i(L)),b.append(D)}v.append(b),s.append(v)}const m=De("div","section");m.append(De("h3",void 0,"Armor"));const d=De("dl","rows");yi(d,"Armor level",String(n.armorLevel)),m.append(d);const A=De("div","resistances");for(const[v,b]of z1){const L=n.resistances[v];if(L===void 0)continue;const D=De("div","resistance"),O=De("b",void 0,`${Math.round(L*100)}%`);D.append(De("span",void 0,b),O),A.append(D)}m.append(A),s.append(m);const R=De("div","section wiki");R.append(De("h3",void 0,"Wiki"));const M=De("dl","rows");yi(M,"XP award",String(n.xp)),t.acpediaXp!==null&&t.acpediaXp!==n.xp&&yi(M,"XP award on ACPedia",String(t.acpediaXp)),t.acpediaHealth!==null&&t.acpediaHealth!==n.health&&yi(M,"Health on ACPedia",String(t.acpediaHealth)),t.acpediaLevel!==null&&t.acpediaLevel!==n.level&&yi(M,"Level on ACPedia",String(t.acpediaLevel));const T=De("dl","rows"),E=document.createElement("a");E.href=t.acpedia,E.rel="noreferrer",E.textContent=t.name,yi(T,"ACPedia page",E),R.append(M,T),s.append(R);const w=De("div","section");if(w.append(De("h3",void 0,"Trophies")),n.trophies.length===0)w.append(De("p","empty","This variant drops no trophy."));else{const v=De("div","trophies");for(const b of n.trophies){const L=De("div","trophy"),D=document.createElement("img");D.src=`icons/${b.classId}.png`,D.alt=b.name,D.loading="lazy",L.append(D);const O=document.createElement("a");O.href=b.acpedia,O.rel="noreferrer",O.textContent=b.name,O.className="trophy-name",L.append(O);const G=De("span","trophy-chance",`${(b.chance*100).toFixed(1)}%`);L.append(G),v.append(L)}w.append(v)}s.append(w),e.append(s)}const $1=new _t().makeScale(-1,1,1),vf="acMirrorX";function xf(e){return!!e&&e.userData?.[vf]===!0}function Y1(e){if(xf(e))return e;e.userData[vf]=!0;const t=sn.prototype.updateProjectionMatrix;return e.updateProjectionMatrix=function(){t.call(this),this.projectionMatrix.premultiply($1),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},e.updateProjectionMatrix(),e}const Hu=Symbol("acMirrorCulling");function q1(e){const t=e;if(t[Hu])return;t[Hu]=!0;let n=!1;const i=new WeakSet,s=()=>{const r=e.state;if(!r||i.has(r))return;i.add(r);const o=r.setMaterial.bind(r);r.setMaterial=(l,c)=>{o(l,n?!c:c)}};s();const a=e.renderBufferDirect.bind(e);e.renderBufferDirect=(r,o,l,c,u,f)=>{s(),n=xf(r);try{a(r,o,l,c,u,f)}finally{n=!1}}}const dl=45,K1=.1;function Mf(e){return[e[0],e[2],e[1]]}function Z1(e){return e*Math.PI/180}function J1(e,t,n,i){Y1(e);const[s,a,r]=Mf(t);return e.fov=n,e.aspect=i,e.up.set(0,1,0),e.position.set(s,a,r),e.lookAt(s,a,r+1),e.updateMatrixWorld(!0),e.updateProjectionMatrix(),e}function Q1(e,t,n,i=dl,s=100){const a=new sn(i,t/n,K1,s);return J1(a,e,i,t/n)}function j1(e){const[t,n,i]=Mf(e),s=1/Math.sqrt(t*t+n*n+i*i);return[-t*s,-n*s,-i*s]}const eM=191.3679,tM=2,nM=[.3,1.9,.65],iM=1.2071068;function sM(e,t,n,i){const s=t[0]-e[0],a=t[1]-e[1];let r=t[2]-e[2];const o=i/n;r/s<o&&(r=s*o);const l=r*iM,c=(e[0]+t[0])/2,u=(e[1]+t[1])/2,f=(e[2]+t[2])/2;return[c,u-(l+a*.5),f]}function aM(e){return{min:[e.min.x,e.min.z,e.min.y],max:[e.max.x,e.max.z,e.max.y]}}(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++){const n=t/255,i=n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055;e[t]=Math.round(Math.min(1,Math.max(0,i))*255)}return e})();const rM={rotateClockwise:{elementId:268436259,x:0,y:0,width:60,height:54,media:{1:100683089,2:100683090,6:100687271,7:100687271},tooltipStringId:114607413},rotateCounterClockwise:{elementId:268436260,x:122,y:0,width:60,height:54,media:{1:100683091,2:100683092,6:100687272,7:100687272},tooltipStringId:90764629},zoomIn:{elementId:268436261,x:53,y:18,width:81,height:38,media:{1:100683093,2:100687267,6:100683094,7:100683094},tooltipStringId:5889070},zoomOut:{elementId:268436262,x:53,y:55,width:81,height:43,media:{1:100683095,2:100687268,6:100683096,7:100683096},tooltipStringId:94231492}};Array.from(new Set(Object.values(rM).flatMap(e=>Object.values(e.media))));const oM=.3;function lM(e,t,n){const i=new yh;i.background=null;const s=Wx();i.add(new bp(16777215,oM/(s>0?s:1)));const a=new Sp(16777215,n),r=j1(t);return a.position.set(r[0],r[1],r[2]),a.target.position.set(0,0,0),i.add(a),i.add(a.target),i.add(e),i}const Gu=Lt.WalkForward,Pu=Lt.RunForward,Vu=Lt.Dead;function Sf(e){return e&65535}const cM=Object.entries(Lt).filter(([e])=>e.startsWith("Attack")).map(([,e])=>e).sort((e,t)=>e-t);function uM(e){return 2147483648|e>>>16}function Qa(e,t){const n=Sf(t);for(const i of e.cycles.keys())if((i&65535)===n)return!0;return!1}function ja(e,t){const n=Sf(t);for(const[i,s]of e.links)for(const a of s.keys())if((a&65535)===n)return uM(i);return null}function bf(e){for(const t of cM){const n=ja(e,t);if(n!==null)return{command:t,style:n};if(Qa(e,t))return{command:t,style:e.defaultStyle}}return null}function hM(e){if(!e)return[];const t=[{name:"idle",label:"Idle"}];return(Qa(e,Gu)||ja(e,Gu)!==null)&&t.push({name:"walk",label:"Walk"}),(Qa(e,Pu)||ja(e,Pu)!==null)&&t.push({name:"run",label:"Run"}),bf(e)&&t.push({name:"attack",label:"Attack"}),(Qa(e,Vu)||ja(e,Vu)!==null)&&t.push({name:"death",label:"Death"}),t}const fM=.12;class dM{canvas;renderer;scene=new yh;camera=new sn(dl,1,.1,200);model=null;entity=null;buttons=[];playing="idle";dragging=!1;lastX=0;frame=0;lastTime=0;constructor(t){this.canvas=t,this.renderer=new bx({canvas:t,antialias:!0,alpha:!0}),q1(this.renderer),this.scene.background=null,t.addEventListener("pointerdown",i=>{this.dragging=!0,this.lastX=i.clientX,t.setPointerCapture(i.pointerId)}),t.addEventListener("pointermove",i=>{!this.dragging||!this.model||(this.model.rotation.y-=(i.clientX-this.lastX)*.01,this.lastX=i.clientX)});const n=i=>{this.dragging=!1,t.hasPointerCapture(i.pointerId)&&t.releasePointerCapture(i.pointerId)};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n)}setModel(t){this.model=t,t&&(i1(t,!1,!0),t.rotation.set(0,Z1(eM),0),t.updateMatrixWorld(!0),this.scene=lM(t,nM,tM),this.scene.background=null)}setCreature(t,n){const i=t.build(n);this.setModel(i),this.entity=i?t.animate(i,n):null,this.buttons=hM(this.entity?.motionManager.activeMotionTable??null),this.playing="idle",this.entity?.update(0),this.frameModel()}get motionButtonList(){return this.buttons}get currentMotion(){return this.playing}playMotion(t){const n=this.entity?.motionManager,i=n?.activeMotionTable;if(!(!n||!i)&&(this.playing=t,n.revive(),n.overrideStyleId(i.defaultStyle),n.setDefaultStance(1),t!=="idle"))if(t==="walk"||t==="run"){const s=t==="walk"?Lt.WalkForward:Lt.RunForward;n.setForwardMotion(An.compositeKey(i.defaultStyle,s&1048575),1)}else if(t==="attack"){const s=bf(i);if(!s)return;const a=()=>{this.playing==="attack"&&(n.overrideStyleId(s.style),n.queueAction(s.command,1,a))};a()}else n.playDeath(Lt.Dead&65535,1)}frameModel(){if(!this.model)return;const t=this.canvas.width,n=this.canvas.height,i=new Es().setFromObject(this.model).expandByPoint(new V(0,0,0));i.expandByVector(i.getSize(new V).multiplyScalar(fM));const{min:s,max:a}=aM(i);this.camera=Q1(sM(s,a,t,n),t,n,dl,200)}resize(){const t=this.canvas.getBoundingClientRect(),n=Math.min(2,window.devicePixelRatio||1),i=Math.max(1,Math.round(t.width*n)),s=Math.max(1,Math.round(t.height*n));(this.canvas.width!==i||this.canvas.height!==s)&&(this.canvas.width=i,this.canvas.height=s,this.renderer.setSize(i,s,!1)),this.frameModel()}draw(){this.model&&(this.renderer.setClearAlpha(0),this.renderer.clear(),this.renderer.render(this.scene,this.camera))}start(){this.lastTime=performance.now();const t=()=>{this.frame=requestAnimationFrame(t);const n=performance.now(),i=Math.min((n-this.lastTime)/1e3,.1);this.lastTime=n,this.entity?.update(i),this.draw()};this.frame=requestAnimationFrame(t)}stop(){this.frame&&cancelAnimationFrame(this.frame),this.frame=0}}function In(e){const t=document.querySelector(e);if(!t)throw new Error(`missing element ${e}`);return t}async function mM(){const t=await(await fetch("data.json")).json(),n=In("#grid"),i=In("#filters"),s=In("#count"),a=In("#detail"),r=In("#panel"),o=In("#model-canvas"),l=In("#close"),c=new dM(o),u=fetch("models.bin").then(m=>m.arrayBuffer()).then(m=>new B1(Df(m)));function f(m,d){X1(r,m,d,R=>f(m,R));const A=In(".detail-inner");A.scrollTop=0,u.then(R=>{c.resize(),c.setCreature(R,{setupId:d.setup,clothingTableId:d.clothing||void 0,paletteId:d.palette||void 0,paletteTemplate:d.paletteTemplate,shade:d.shade,motionTableId:d.motionTable||void 0}),h(),c.start()}).catch(R=>{In("#viewer-hint").textContent=`The model did not load: ${R}`})}function h(){const m=In("#motions");m.textContent="";for(const d of c.motionButtonList){const A=document.createElement("button");A.type="button",A.textContent=d.label,A.setAttribute("aria-pressed",String(d.name===c.currentMotion)),A.addEventListener("click",()=>{c.playMotion(d.name),h()}),m.append(A)}}function p(m){a.hidden=!1,f(m,fr(m))}function _(){a.hidden=!0,c.stop()}function S(){const m=H1(t.creatures,G1(i));P1(n,m,p),s.textContent=`${m.length} of ${t.creatures.length}`}i.addEventListener("input",S),i.addEventListener("submit",m=>m.preventDefault()),l.addEventListener("click",_),document.addEventListener("keydown",m=>{m.key==="Escape"&&!a.hidden&&_()}),S()}mM().catch(e=>{document.body.textContent=`The page did not load: ${e}`});
