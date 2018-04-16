{-
A player rolling equal to or under target number generates a hit
  as apposed to a miss.
Party succeeds if any player rolls a hit.

NEXT I want to define
sided as list
encounters as a list [force_ratio population sided target]

-}

-- NEED to define type dice these as functions operating on lists
force_ratio :: Double
population, sided, target :: Int
force_ratio = 0.5
population = 3
sided = 6
target = 17

-- basic unit of dice instructions
-- contentious actions generate usVsThem values approximated to a force_ratio
-- in a encounter list of
-- force_ratio, population, sided, target
-- as a MIX of Int and Double

encounter :: [Double]
encounter = [0.5, 3, 20, 17]
-- model of full range of force_ratio creates a list of list
model :: [[Double]]
model = [[0.5, 3, 20, 17], [0.75, 3, 20, 18]]

-- putStrLn "Hello" >> putStrLn "world!"
-- outputting strings
-- main :: IO ()
main = putStr "Roll under " >> print target
