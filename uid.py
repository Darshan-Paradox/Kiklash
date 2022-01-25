from datetime import date

branches = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9",
            "AA", "AB",
            "B1", "B2", "B3", "B4", "B5",
            "PS", "TS"]

def get_year(uid):
    year = int(uid[:4])
    if date.today().month > 6:
        return (date.today().year - year + 1)
    else:
        return (date.today().year - year)

def get_branch(uid):
    return [uid[4:6], uid[6:8]]

def get_campus(uid):
    if uid[-1] == 'H' or uid[-1] == 'G' or uid[-1] == 'P':
        return uid[-1]
    else:
        return 0

def validate(uid):
    if get_year(uid) <= 5 or get_year(uid) > 0:
        if get_branch(uid)[0] in branches and get_branch(uid)[1] in branches:
            if get_campus(uid):
                return 1
            else:
                return 0
        else:
            return 0
    else:
        return 0
