from functools import reduce

with open("day1.txt") as file:
    contents = file.read()
    contents = contents.split("\n\n")

# print(contents)

def maxCalories():
    inventories = [inventory.split("\n") for inventory in contents]
    totals = []
    
    for inventory in inventories:
        inventory = [int(item) for item in inventory]
        totals.append(reduce(lambda a,b:int(a)+int(b),inventory))
        
    sortedTotals = sorted(totals, reverse = True)
    
    print(sortedTotals[0:3])
    print(reduce(lambda a,b:a+b,sortedTotals[0:3]))
    
maxCalories()