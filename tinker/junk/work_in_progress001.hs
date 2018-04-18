{- martinmphil@gmail.com
Theoretical force_ratio is analogous to an Us-vs-Them ratio created by specific user scenarios.
Assuming: (i) the whole party succeeds if any player meets or beats a target number, and
(ii) every participating player rolls one dice each and these rolled dice all have equal number of sides,
derive force_ratio values for all possible dice combinations.

Given force-ratio "f" is a function of dice probability "p" in three domains
"low" (ie pl and fl), "medium" (ie pm and fm), and "high" (ie ph and fh),
"fl" is a function of "pl" in the domain {0≤"pl"≤0.5} and
"fm" is a function of "pm" in the domain {0.5≤"pm"≤0.75} and
"fh" is a function of "ph" in the domain {0.75≤"ph"≤1}
where ("fl" < 1), and (1 ≤ "fm" ≤ 2), and ("fh" > 2),
the following relationships apply:
fl = 2*fl
fm = (4*pm)-1
fh = 1/(2-2*ph)

Game probabilities follow
p(success) = 1 - p(all_miss)
with populations of "n" participating players {n∈ℤ|1≤n≤9}.

When rolling low succeeds,
chances of a miss by rolling over target number t
on a dice with s sides is (s-t)/s
thus p(miss) = ((s-t)/s)
and with "n" players all rolling the same type of polyhedral dice,
p(all_miss) = (((s-t)/s)**n)
therefore p(success) = 1 - (((s-t)/s)**n)

When rolling high succeeds,
chances of a miss by rolling under target number t
on a dice with s sides is (t-1)/s
thus p(miss) = ((t-1)/s)
and with "n" players all rolling the same type of polyhedral dice,
p(all_miss) = (((t-1)/s)**n)
therefore p(success) = 1 - (((t-1)/s)**n)
-}
-- encounters as a list [force_ratio populations sided target]
-- GOAL force_ratio :: Int -> Int -> Str

-- range of possible player populations
popGen :: Int -> [Int]
popGen maxPop = [1..maxPop]
populations :: [Int]
populations = popGen 9

polyhedral :: [Int]
polyhedral = [6, 8, 12, 20]

force_ratio :: Double
force_ratio = 0.5

sided  :: Int
sided = 6

target :: Int
target = 17


main = putStr "Roll under " >> print target
