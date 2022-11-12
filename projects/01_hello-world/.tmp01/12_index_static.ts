// Static members

class Ride {
  private static _activeRides: number = 0;
  public static get activeRides(): number {
    return Ride._activeRides;
  }

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);
console.log(Ride.activeRides);
