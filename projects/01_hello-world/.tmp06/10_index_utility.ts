interface User {
  name: string;
  age: number;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  city?: string;
}

// Omit
type UserProfile = Omit<User, 'password' | 'email'>;
interface UserProfileInterface extends Omit<User, 'password' | 'email'> {}

// Pick

type UserProfilePick = Pick<User, 'phone' | 'name' | 'email'>;

// Patial

type UserPartial = Partial<User> & { name: string };
let user01: UserPartial = {
  name: 'Tom',
};
// Requared

type UserRequired = Required<User> & { city: string };

// Record<Key, Type>

interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
};

// const recordUsers: Record<string, {name: string}> = {
//   '1': {
//     name: 'Tom'
//   }
// };

// const data_01 = [
//   {
//     name: 'John',
//     age: 30,
//   },
//   {
//     name: 'Jane',
//     age: 25,
//   }
// ];

// const result_01 = data_01.reduce((acc: Record<string,{name: string, age: number}>,curr,index) => {
//   return acc[String(index)] = {
//     ...curr,
//   };
// }, {});

// console.log({result_01});
