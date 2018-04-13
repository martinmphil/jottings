{-
A player rolling equal to or under target number generates a hit
  as apposed to a miss.
Party succeeds if any player rolls a hit.

NEXT I want to define
sided as list
encounters as an array [force_ratio population sided target]

-}

-- NEED to define type dice these as functions operating on lists
force_ratio, population, sided, target :: Double
force_ratio = 0.5
population = 3
sided = 6
target = 17

-- define type h as hit on a dice roll meeting or beating taget t

-- basic unit of dice instructions
