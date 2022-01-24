from datetime import date


for i in range()

def get_year(uid):
    year = int(uid[:4])
    if date.today().month > 6:
        return (date.today().year - year + 1)
    else:
        return (date.today().year - year)

def validate(uid):
    if get_year(uid) <= 5 or get_year(uid) > 0:
        do_something()
    else:
        return 0

parse_id("2020A8B52153H")
