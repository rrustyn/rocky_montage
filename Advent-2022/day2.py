# A X Rock 1pt
# B Y Paper 2pt
# C Z Scissors 3pt
#
# 0pt loss
# 3pt draw
# 6 pt win

with open("day2.txt") as file:
    contents = file.read()
    contents = contents.split("\n")
    
print(contents)

def scoreGame():
    games = [line.split() for line in contents]
    
    totalScore = 0
    
    for game in games:
        totalScore = totalScore + compareThrow(game)
        
    print(totalScore)

def compareThrow(choices):
    equivilants = {
        "A": "rock",
        "X": "rock",
        "B": "paper",
        "Y": "paper",
        "C": "scissors",
        "Z": "scissors"
    }
    
    throwScore = {
        "rock": 1,
        "paper": 2,
        "scissors": 3
    }
    
    choices = [equivilants[choice] for choice in choices]
    
    if choices[0] == choices [1]:
        return 3 + throwScore[choices[0]]
    elif ((choices[0] == "rock" and choices[1] == "scissors") or 
          (choices[0] == "scissors" and choices[1] == "paper") or
          (choices[0] == "paper" and choices[1] == "rock")):
        return 6 + throwScore[choices[0]]
    else:
        return throwScore[choices[0]]
    
scoreGame()