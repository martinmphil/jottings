{-
pure, immutable and
referentially transparent
-}

-- define type dice roll meeting or beating taget t
t :: Int
t = 17

-- define type h as hit on a dice roll meeting or beating taget t


main = putStrLn "Roll 3d20 target 17"


-- test
biggestInt, smallestInt :: Int
biggestInt  = maxBound
smallestInt = minBound
