class Hiker {
    int x;
    int y;
    int power;

    Hiker(int x, int y, int power) {
        this.x = x;
        this.y = y;
        this.power = power;
    }

    Hiker(int x, int y) {
        this.x = x;
        this.y = y;
        this.power = 0;
    }

    // (x, y)
    String get() {
        return "(" + this.x + ", " + this.y + ")";
    }

    @Override
    public String toString() {
        return "coordinates: (" + this.x + ", " + this.y + "), power: " + this.power;
    }

    int calculateDistanceBetween(Hiker hiker) {
        return (int) Math.sqrt(Math.pow(Math.abs(this.y - hiker.y), 2) + Math.pow(Math.abs(this.x - hiker.x), 2));
    }

    int calculateDistanceWithoutRootBetween(Hiker hiker) {
        return (int) (Math.pow(Math.abs(this.y - hiker.y), 2) + Math.pow(Math.abs(this.x - hiker.x), 2));
    }
}
