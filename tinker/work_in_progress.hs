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

-- basic unit of dice instructions

instructions :: [Char]
instructions = "Roll 1d8 target 2"

-- lists must have all the same type SHITE

numerator, denominator :: Integer
numerator = 2
denominator = 8

us_vs_them = numerator : denominator : []
