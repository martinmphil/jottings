{-
Test file for learning functional programming;
pure, immutable and referentially transparent.
-}

-- define type dice roll meeting or beating taget t
t :: Int
t = 17

-- define type h as hit on a dice roll meeting or beating taget t


-- clause checked in order, and the first matching clause is chosen.

sumtorial :: Integer -> Integer
sumtorial 0 = 0
sumtorial n = n + sumtorial (n-1)

--guard tested in order for first match
hailstone :: Integer -> Integer
hailstone n
  | n `mod` 2 == 0 = n `div` 2
  | otherwise      = 3*n + 1

-- function definition
f :: Int -> Int -> Int -> Int
f x y z = x + y + z

holeScore :: Int -> Int -> String
holeScore strokes par
  | score < 0 = show (abs score) ++ " under par"
  | score == 0 = "level par"
  | otherwise = show(score) ++ " over par"
 where score = strokes-par

-- basic unit of dice instructions
