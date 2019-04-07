#!/usr/bin/env python3
# MartinMPhil@gmail.com

# ROLL LOW succeeds ie First Rate RPG.

##import json
from fractions import Fraction

# Main function
def main():
    # Number of sides on each different polyhedral dice excluding d4 and d10.
    n = 9
    polyhedrals = [20, 12, 8, 6]
    # Building dice probability dictionary
    # in reverse preference so better options can overwrite previous entries.
    dice_compendium = {}
    for s in polyhedrals:
        for t in range(1, s):
            dice_prob = (1 - ((Fraction((s-t), s))**n))

            if dice_prob > Fraction(3, 4):
                force_ratio = (Fraction(1, 2))*(Fraction(1, (1-dice_prob)))

            elif dice_prob < Fraction(1, 2):
                force_ratio = 2 * dice_prob

            else:
                force_ratio = (4 * dice_prob) - 1

            ix_code = "n{player_nbrs}d{sided_dice}t{target}"\
            .format(target=t, player_nbrs=n, sided_dice=s)

            fr = float(force_ratio * (10**6))

            dice_compendium[ix_code] = fr

    result = {}
    for key,value in dice_compendium.items():
        if value not in result.values():
            result[key] = value


    print (result)
 ##   with open('dictRl-progress.txt', 'a') as fp:
 ##       json.dump(result, fp)
    # End of main function.

# Invoke main function.
main()
# End of program.
