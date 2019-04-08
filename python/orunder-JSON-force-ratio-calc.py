#!/usr/bin/env python3

# Calculate role-playing game dice rolls using a Force Ratio mechanic.
# "n" players (excluding GM), where {n∈ℤ|1≤n≤8}
# Each player rolls a dice with the same number of sides "s",
# to meet or beat target number "t".
# Force Ratio "f" given by (we)/(they)
# Map Force Ratio to probability and display nearest dice probability,
# in three domains low, med and high:
# "fl" < 1, and 1 ≤ "fm" ≤ 2, and "fh" > 2.
# "fl" maps to probability "pl" in the range {0≤"pl"≤0.5} and
# "fm" maps to probability "pm" in the range {0.5≤"pm"≤0.75} and
# "fh" maps to probability "ph" in the range {0.75≤"ph"≤1} via
# pl = fl/2
# pm = (fm+1)/4
# ph = 1 - (1/(2*fh))
#
# Dice Probabilities
# d20, d12, d8 and d6 in reverse order of preference.
# p = p(any_passes) = 1 - p(all_fails)
#
# When rolling low succeeds, 
# chances of failing by rolling over target number t
# on a dice with s sides is (s-t)/s
# thus p(fail) = ((s-t)/s)
# and with "n" players all rolling the same type of polyhedral dice,
# p(fail) = (((s-t)/s)**n)
# p(any_passes) = 1 - (((s-t)/s)**n)
#
# When rolling high succeeds,
# chances of failing by rolling under target number t
# on a dice with s sides is (t-1)/s
# thus p(fail) = ((t-1)/s)
# and with "n" players all rolling the same type of polyhedral dice,
# p(fail) = (((t-1)/s)**n)
# p(any_passes) = 1 - (((t-1)/s)**n)


import math
from fractions import Fraction
from sys import exit


# Function defining successful dice roll as either high or low.
def general_dice_mechanic():
    """User picks dice mechanic as either rolling high or low to succeed."""
    prompt = "Please type 'low' (or press enter) "\
    "to use a dice mechanic where rolling low succeeds.\n"\
    "Or use a dice mechanic where rolling high succeeds by typing 'high': "
    while True:
        candidate_string = input(prompt)
        candidate_lower_case_string = candidate_string.lower()
        if len(candidate_string)==0 or candidate_lower_case_string.startswith('l'):
            print("Rolling LOW succeeds.")
            return False
        else:
            print("Rolling HIGH succeeds.")
            return True
        break

# Simple line to help reading by breaking up text
def visual_separator():
    """Simple line assisting legibility."""
    print("----")

# Function defining number of players "n" as positive integer inputted by user.
def nbr_of_players():
    """Prompt user for integer number of players."""
    prompt = "(Pressing 'enter' key defaults to 3 players.)\n"\
    "Excluding the Games Moderator (GM), please input the"\
    " number of players in your game: "
    while True:
        candidate_string = input(prompt)
        # Defaulting to 3.
        if len(candidate_string)==0:
            candidate_int = 3
            break
        else:
            try:
                candidate_int = abs(int(candidate_string))
                break
            except ValueError:
                print("Please enter a numeric whole number.")
    print("Excluding the GM, your game has", candidate_int, "players.")
    return Fraction(candidate_int, 1)

# Functions of Force Ratio mapping probabilities to either high, medium or low.
def probability_as_a_function_of_force_ratio(force_ratio):
    """Calculate probability of success as function of force_ratio."""

    # Map Force Ratios fh>2 to higher probabilities ph>0.75
    if force_ratio > 2:
        return 1-(1/(2*force_ratio))

    # Map Force Ratios 1≤fm≤2 to medium probabilities 0.5≤pm≤0.75
    elif force_ratio >= 1 and force_ratio <= 2:
        return (force_ratio + 1)/4

    # Map Force Ratios fl≤1 to lower probabilities pl<0.5
    else:
        return force_ratio/2

# Function testing input for number of advantages.
def get_adv(prompt):
    """Prompt user for floating-point number for general advantages."""
    while True:
        try:
            user_input_string = input(prompt)
            if len(user_input_string) == 0:
                user_input_float = 0.0
            elif float(user_input_string) < 0:
                print("Please enter a non-negative number.")
                continue
            else:
                user_input_float = float(user_input_string)
            break
        except ValueError:
            print("Please enter numeric characters (eg 1, 2, 3, etc).")
            continue
    return Fraction.from_float(abs(user_input_float))

# Function factoring general advantages as general force multipliers.
def force_multiplier(nbr_of_adv):
    """"Calculating general force multiplier from number of advantages"""
    fm = (1 + ((math.log((nbr_of_adv + 1), 16))))
    return Fraction.from_float(fm)

# Function factoring force multiplying advantages for "Us".
def adv_us():
    """Converting advantages to force multipliers for 'Us'."""
    nbr_of_adv = abs(get_adv("Please input number of advantages for 'Us': "))
    if nbr_of_adv == 0:
        return Fraction(1, 1)
    else:
        return force_multiplier(nbr_of_adv)

# Function factoring force multiplying advantages for "Them".
def adv_them():
    """Converting advantages to force multipliers for 'Them'."""
    nbr_of_adv = abs(get_adv("Please input number of advantages for 'Them': "))
    if nbr_of_adv == 0:
        return Fraction(1, 1)
    else:
        return force_multiplier(nbr_of_adv)

# Function testing for positive floating-point numbers.
def get_positive_float(prompt):
    """Prompt user for floating-point number."""
    while True:
        try:
            user_input = float(input(prompt))
            if user_input <= 0:
                print("Please enter a positive numeric decimal.")
                continue
            else:
                break
        except ValueError:
            print("Please enter a numeric decimal number.")
            continue
    return abs(user_input)

# Principal function for Us vs Them dice roll mechanic.
def roll(roll_high_succeeds, dice_compendium):
    """Ask Us and Them levels to calculate Force Ratio and look up dictionary dice instructions."""

    # Input "Us" level.
    us_float = get_positive_float("Please enter the total level value for "\
    "'Us': ")
    us_raw = Fraction.from_float(us_float)

    # Input "Them" level.
    them_float = get_positive_float("Please enter the total level value for "\
    "'Them': ")
    them_raw = Fraction.from_float(them_float)

    # Visual section break.
    visual_separator()

    # Announcing advantages section.
    print("Please press 'enter' key to enter zero advantages.")

    # Calculate Force Ratio with modified "Us" and "Them".
    force_ratio = (us_raw * adv_us()) / (them_raw * adv_them())

    # Calculate probability "p" as a function of Force Ratio.
    prob_force_ratio = probability_as_a_function_of_force_ratio(force_ratio)

    # Double visual section break emphasising instructions.
    visual_separator()
    visual_separator()
    # Display conflict resolution.
    # Look up nearest dictionary key for this particular Force Ratio probability.
    if prob_force_ratio in dice_compendium:
        print(dice_compendium[prob_force_ratio])
    else:
        nearest_entry = dice_compendium.get(prob_force_ratio, 
        dice_compendium[min(dice_compendium.keys(), 
        key=lambda y: abs(y-prob_force_ratio))])
        print(nearest_entry)
    # Double visual section break underscoring target number or outcome.
    visual_separator()
    visual_separator()

# Main function
def main():
    """Main function for Force Ratio role-playing game mechanic."""

    # Start settings

    # Set "roll_high_succeeds" Boolean response.
    roll_high_succeeds = general_dice_mechanic()

    visual_separator()

    # Input number of players "n", or default 3.
    n = nbr_of_players()

    visual_separator()

    # Number of sides on each different polyhedral dice excluding d4 and d10.
    polyhedrals = [20, 12, 8, 6]

    # Building dice probability dictionary
    # in reverse preference so better options can overwrite previous entries.
    dice_compendium = {}
    if roll_high_succeeds == False:
        # Rolling low succeeds
        if n == 1:
            # One player
            for s in polyhedrals:
                for t in range(1, s):
                    dice_prob = (Fraction(t, s))
                    if t == 1:
                        dice_mission = "Success if you roll target number\n"\
                        "'{target}' on 1d{sided_dice}.".format(target=t, sided_dice=s)
                        dice_compendium[dice_prob] = dice_mission
                    else:
                        dice_mission = "Success if you roll less than or equal to target number\n"\
                        "'{target}' on 1d{sided_dice}.".format(target=t, sided_dice=s)
                        dice_compendium[dice_prob] = dice_mission
        else:
            # More than one player
            for s in polyhedrals:
                for t in range(1, s):
                    dice_prob = (1 - ((Fraction((s-t), s))**n))
                    if t == 1:
                        dice_mission = "Each player rolls a d{sided_dice}.\n"\
                        "Party succeeds if ANY player rolls a target number\n"\
                        "'{target}' from your combined {player_nbrs}d{sided_dice}."\
                        .format(target=t, player_nbrs=n, sided_dice=s)
                        dice_compendium[dice_prob] = dice_mission
                    else:
                        dice_mission = "Each player rolls a d{sided_dice}.\n"\
                        "Party succeeds if ANY player rolls less than or equal to target number\n"\
                        "'{target}' from your combined {player_nbrs}d{sided_dice}."\
                        .format(target=t, player_nbrs=n, sided_dice=s)
                        dice_compendium[dice_prob] = dice_mission
    else:
        # Rolling high succeeds
        if n == 1:
            # One player
            for s in polyhedrals:
                for t in range(2, (s+1)):
                    dice_prob = (Fraction((s-t+1), s))
                    if t == s:
                        dice_mission = "Success if you roll target number\n"\
                        "'{target}' on 1d{sided_dice}.".format(target=t, sided_dice=s)
                        dice_compendium[dice_prob] = dice_mission
                    else:
                        dice_mission = "Success if you roll higher than or equal to target number\n"\
                        "'{target}' on 1d{sided_dice}.".format(target=t, sided_dice=s)
                        dice_compendium[dice_prob] = dice_mission
        else:
            # More than one player
            for s in polyhedrals:
                for t in range(2, (s+1)):
                    dice_prob = (1 - ((Fraction((t-1), s))**n))
                    if t == s:
                        dice_mission = "Each player rolls a d{sided_dice}.\n"\
                        "Party succeeds if ANY player rolls target number\n"\
                        "'{target}' from your combined {player_nbrs}d{sided_dice}."\
                        .format(target=t, player_nbrs=n, sided_dice=s)
                        dice_compendium[dice_prob] = dice_mission
                    else:
                        dice_mission = "Each player rolls a d{sided_dice}.\n"\
                        "Party succeeds if ANY player rolls higher than or equal to target number\n"\
                        "'{target}' from your combined {player_nbrs}d{sided_dice}."\
                        .format(target=t, player_nbrs=n, sided_dice=s)
                        dice_compendium[dice_prob] = dice_mission

    visual_separator()

    # End settings


    # Loop repeatedly offering Us vs Them calculations
    while True:
        # Call principal function "roll" to display dice instructions.
        roll(roll_high_succeeds, dice_compendium)

        # Ask user to exit or go again.
        endings_string = input("Please press 'enter' key to go again, \nor type 'exit' to close the program: ")
        endings_lower_case_string = endings_string.lower()
        if endings_lower_case_string.startswith('e'):
            visual_separator()
            print ("End of program. Goodbye.")
            visual_separator()
            exit()
        else:
            visual_separator()
            visual_separator()
    # End of main function.


# Invoke main function.
main()
# End of program.
