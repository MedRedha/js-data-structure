import BSTreeBuilder from "./BSTreeBuilder";
import BSTreeBuilderRecursive from "./BSTreeBuilderRecursive";
import BSTreeBuilderIterative from "./BSTreeBuilderIterative";

const r_tree: BSTreeBuilder<number> = new BSTreeBuilderRecursive<number>();
// r_tree.insertNode(30);
// r_tree.insertNode(40);
// r_tree.insertNode(20);
// r_tree.insertNode(21);

// console.log(r_tree);

const i_tree: BSTreeBuilder<number> = new BSTreeBuilderIterative<number>();

// i_tree.insertNode(30);
// i_tree.insertNode(40);
// i_tree.insertNode(20);
// i_tree.insertNode(21);

// console.log(i_tree);
