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
        print(totalScore)
        totalScore = totalScore + compareThrow(game)
        
    print(totalScore)

# def compareThrow(choices):
#     equivilants = {
#         "A": "rock",
#         "X": "rock",
#         "B": "paper",
#         "Y": "paper",
#         "C": "scissors",
#         "Z": "scissors"
#     }
    
#     throwScore = {
#         "rock": 1,
#         "paper": 2,
#         "scissors": 3
#     }
    
#     choices = [equivilants[choice] for choice in choices]
    
#     if choices[0] == choices [1]:
#         return 3 + throwScore[choices[1]]
#     elif ((choices[1] == "rock" and choices[0] == "scissors") or 
#           (choices[1] == "scissors" and choices[0] == "paper") or
#           (choices[1] == "paper" and choices[0] == "rock")):
#         return 6 + throwScore[choices[1]]
#     else:
#         return throwScore[choices[1]]

def compareThrow(choices):
    equivilants = {
        "A": "rock",
        "X": "lose",
        "B": "paper",
        "Y": "draw",
        "C": "scissors",
        "Z": "win"
    }
    
    throwScore = {
        "rock": 1,
        "paper": 2,
        "scissors": 3
    }
    
    choices = [equivilants[choice] for choice in choices]
    
    if choices[1] == "draw":
        return 3 + throwScore[choices[0]]
    elif choices[1] == "win" and choices[0] == "rock":
        return 6 + throwScore["paper"]
    elif choices[1] == "win" and choices[0] == "paper":
        return 6 + throwScore["scissors"]
    elif choices[1] == "win" and choices[0] == "scissors":
        return 6 + throwScore["rock"]
    else:
        if choices[0] == "rock": return throwScore["scissors"]
        if choices[0] == "paper": return throwScore["rock"]
        if choices[0] == "scissors": return throwScore["paper"]
    
scoreGame()