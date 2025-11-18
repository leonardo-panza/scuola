
WIDTH  = 600
HEIGHT = 400

player = Actor("Player")
player.x = WIDTH / 2
player.y = HEIGHT - 50

def draw():
    screen.fill("black")
    player.draw()