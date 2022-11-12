// Indexed Signature


class SeatAssignment {
  // A1: string;
  // A2: string;

  // Indexed signature property
  [seatNumber: string]: string;
}


let seats = new SeatAssignment();
seats.A1 = 'Mosh';
seats['A1'] = 'Mosh';
seats.A2 = 'John';

class SeatAssignment2 {
  // Indexed signature property
  [seatNumber: number]: string;
}
let seats2 = new SeatAssignment2();


seats2[0]= 'Mosh';
seats2[2]= 'John';