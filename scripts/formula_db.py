import json
import random

def get_random_f1_data():
    drivers = ["HAM", "VER", "LEC", "NOR", "ALO"]
    teams = ["Mercedes", "Red Bull Racing", "Ferrari", "McLaren", "Aston Martin"]
    
    data = []
    for _ in range(5):
        driver = random.choice(drivers)
        team = random.choice(teams)
        points = random.randint(0, 25)
        data.append({"driver": driver, "team": team, "points": points})
    
    return json.dumps(data)

if __name__ == "__main__":
    print(get_random_f1_data())

