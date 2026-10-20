# Defense skills

How the page computes the defense skills of a creature, and how they compare
with the ACPedia page.

## How the page computes a defense skill

The AC Emulator computes the current skill of a creature. It adds the
attribute formula of the retail SkillTable to the skill of the weenie.

- **Verified** (ACE `ACE.Server/WorldObjects/Entity/CreatureSkill.cs`, the
  attribute formulas read from `client_portal.dat` SkillTable `0x0E000004`).
  The test `tests/defense-vs-acpedia.test.ts` checks the result.

The formula of a skill names two attributes and a divisor. Melee Defense uses
Quickness and Coordination divided by 3. Magic Defense uses Self and Focus
divided by 7.

In a skill check the difficulty is the defense skill alone. Armor does not add
to the defense. **Observed** (ACE `ACE.Server/WorldObjects/Creature_Combat.cs`,
`GetEffectiveDefenseSkill`).

The page shows the current skill, because that is the value a player meets in
a fight.

## The comparison with ACPedia

The ACPedia page is a second source, saved once at `~/wiki/raw/acpedia/Tusker.md`.
It lists a Melee, Missile and Magic Defense for some creatures.

**Observed** (the saved ACPedia page, 2026-10-20):

| Creature | Level | Health | Computed melee | ACPedia melee | Computed missile | ACPedia missile | Computed magic | ACPedia magic |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Male Tusker | 20 | 100 | 93 | 83 | 110 | 76 | 63 | 63 |
| Tusker Guard | 80 | 260 | 357 | 417 | 401 | 350 | 244 | 268 |

The Male Tusker and the Tusker Guard are the two creatures the spec names.

The values agree in part and not in the rest.

- The Male Tusker magic defense agrees, because both say 63.
- The Male Tusker melee and missile defense do not agree. The page gives 93
  and 110, ACPedia gives 83 and 76.
- The Tusker Guard does not agree at all. The ACPedia row also gives a health
  of 375, while the retail weenie has 260. The ACPedia row does not describe
  the same creature state as the emulator data.

## Why the values differ

The two sources are two snapshots of the retail data. The ACPedia numbers do
not follow the emulator skill model.

- The ACPedia health and level columns differ from the emulator data for many
  creatures. The ACPedia page gives the Tusker Guard 375 health, the emulator
  weenie has 260. The patch database of the emulator also changed the level of
  some creatures. The Painbringer went from 145 to 135, the Tuskie Gunner from
  85 to 80. **Observed** (the emulator weenie SQL and the saved ACPedia page).
- The magic defense agrees for some creatures and is near for the others. The
  difference is the size of the attribute sum the formula divides. The
  Devastator agrees at 388. The Female Tusker is 54 against 55, the Silver
  Tusker is 239 against 270. The cause is **Unknown**. Maybe the ACPedia
  source had different attribute values.
- The melee and missile defense of the Male Tusker are lower in ACPedia than
  the formula gives. The ACPedia missile defense of 76 is even below the
  missile defense skill of the weenie, which is 84. A current skill is never
  below its own skill value plus a positive attribute base. The ACPedia melee
  and missile numbers do not come from this model.

The page uses the emulator values, because the emulator is the only way to play
the game. The ACPedia values stay in the data file, so the page can show both.

## The full comparison

| Creature | Level | Health | Computed magic | ACPedia magic |
| --- | --- | --- | --- | --- |
| Armored Tusker | 100 | 435 | 275 | 284 |
| Assailer | 115 | 760 | 310 | 333 |
| Devastator | 145 | 1000 | 388 | 388 |
| Female Tusker | 15 | 95 | 54 | 55 |
| Goldenback Tusker | 30 | 130 | 103 | 108 |
| Male Tusker | 20 | 100 | 63 | 63 |
| Mowen Udaun | 900 | 8000 | 425 | 398 |
| Plated Tusker | 100 | 435 | 321 | 330 |
| Rampager | 100 | 435 | 251 | 280 |
| Silver Tusker | 80 | 400 | 239 | 270 |
| Tusker Crimsonback | 30 | 110 | 94 | 95 |
| Tusker Guard | 80 | 260 | 244 | 268 |
| Tusker Liberator | 60 | 250 | 203 | 210 |
| Tusker Redeemer | 60 | 250 | 171 | 178 |
| Tusker Slave | 80 | 400 | 219 | 239 |

The other creatures have no ACPedia defense value.
