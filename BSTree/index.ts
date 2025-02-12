import BSTreeBuilder from "./BSTreeBuilder";
import BSTreeBuilderRecursive from "./BSTreeBuilderRecursive";
import BSTreeBuilderIterative from "./BSTreeBuilderIterative";

const r_tree: BSTreeBuilder<number> = new BSTreeBuilderRecursive<number>();
r_tree.insertNode(30);
r_tree.insertNode(40);
r_tree.insertNode(20);
r_tree.insertNode(21);
r_tree.insertNode(15);
r_tree.insertNode(35);
r_tree.insertNode(31);
r_tree.insertNode(17);

// console.log(r_tree.removeNode(100));
// console.log(r_tree.findNode(20));
console.log(r_tree.findParent(20));
// console.log(r_tree.getRoot());

// const i_tree: BSTreeBuilder<number> = new BSTreeBuilderIterative<number>();

// i_tree.insertNode(30);
// i_tree.insertNode(40);
// i_tree.insertNode(20);
// i_tree.insertNode(21);
// i_tree.insertNode(15);
// i_tree.insertNode(35);
// i_tree.insertNode(31);

// console.log(i_tree.removeNode(100));
// console.log(i_tree.findNode(20));
// console.log(i_tree.findParent(31));
// console.log(i_tree.getRoot());
