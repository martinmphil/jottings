data Encounter = Rolls
  { s :: Int
  , t :: Int
  , n :: Int
  }

data Model = Probabilities
  { pop :: Int
  , force_ratio :: Double
  }

polyhedral :: [Int]
polyhedral = [6, 8, 12, 20]


main = putStrLn "Throw under " >> print polyhedral
