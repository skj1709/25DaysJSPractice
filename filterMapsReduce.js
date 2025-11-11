const list = ["apple", "mango", "orange", "banana", "eggs", "bread"];

const fruitsInShop = ["kiwi", "pineapple", "apple", "mango"];

const groceryInShop = ["eggs", "biscuits", "milk", "bread"];

const basket = list.filter((w) => {
  if (fruitsInShop.includes(w) || groceryInShop.includes(w)) {
    return w;
  }
});
console.log(basket);
