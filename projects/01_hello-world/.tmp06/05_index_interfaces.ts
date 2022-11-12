interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}


interface User {
  username: string;
}

interface Product {
  title: string;
}

let result_user = fetch<User>('url');
let result_product = fetch<Product>('url');

console.log(`${result_user.data?.username} ${result_user.error}`);

console.log(`${result_product.data?.title} ${result_user.error}`);