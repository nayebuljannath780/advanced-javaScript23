const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part1 = nums.slice(2, 5); // index hishab kore starting & ending point slice korbe
// console.log(part1);

const removed = nums.splice(2, 3, 60, 70); // 1st ta koto tele start hobe, sheta & 2nd ta hocche koyta removed korbe sheta. tarpore items a kuno new items removed place e add korte chaile add kora
// console.log(removed);
// console.log(nums);

const together = nums.join(", ");
console.log(together);