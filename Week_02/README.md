学习笔记

## 哈希表、映射、集合的实现与特性

### 哈希表 Hash table

哈希表（Hash table）也叫散列表，是根据关键码值（key,value）而直接进行访问的数据结构。它通过把关键码值映射到表中的一个位置来访问记录，以加快查找的速度。这个映射函数叫作散列函数（Hash Function），存放记录的数据叫作哈希表（或者散列表）
![image.png](https://cdn.nlark.com/yuque/0/2020/png/778875/1607506272172-c0464f22-acdf-4f89-9feb-9fac293a04cb.png#align=left&display=inline&height=254&margin=%5Bobject%20Object%5D&name=image.png&originHeight=507&originWidth=1357&size=156347&status=done&style=none&width=678.5)
lise 传给 hashing function 之后返回一个 index（数据存储的位置）

**哈希查询、添加、删除时间复杂度 O(1)**
**哈希碰撞 Hash Collisions O(n)**
同一个位置以链表形式存储-->拉链式解决冲突
**![image.png](https://cdn.nlark.com/yuque/0/2020/png/778875/1607506475724-42095acf-7fd5-4d84-a03d-91a5ec581ddb.png#align=left&display=inline&height=233&margin=%5Bobject%20Object%5D&name=image.png&originHeight=467&originWidth=1192&size=221976&status=done&style=none&width=596)**
**![image.png](https://cdn.nlark.com/yuque/0/2020/png/778875/1607506694238-0d8f20c5-9947-4f1f-9907-e78940ba6e35.png#align=left&display=inline&height=284&margin=%5Bobject%20Object%5D&name=image.png&originHeight=568&originWidth=1204&size=299482&status=done&style=none&width=602)**
![image.png](https://cdn.nlark.com/yuque/0/2020/png/778875/1607501125179-71f725cf-80bd-4aa7-9288-db6167a091d6.png#align=left&display=inline&height=312&margin=%5Bobject%20Object%5D&name=image.png&originHeight=624&originWidth=1195&size=773579&status=done&style=none&width=597.5)
**抽象出来的 API**

- Map: key-value 对，key 不重复
- Set: 不重复元素的集合

**例子：**
[242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)
[49. 字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/)
[1. 两数之和](https://leetcode-cn.com/problems/two-sum/description/)

### 映射

### 集合

## 树、二叉树、二叉搜索树的实现和特性

### 树

![image.png](https://cdn.nlark.com/yuque/0/2020/png/778875/1607579962652-b8f77586-5eaa-430f-821c-c766944cc58a.png#align=left&display=inline&height=336&margin=%5Bobject%20Object%5D&name=image.png&originHeight=671&originWidth=1182&size=246900&status=done&style=none&width=591)

### 二叉树

二叉树： 儿子节点只有两个
![image.png](https://cdn.nlark.com/yuque/0/2020/png/778875/1607580003776-5a2a3a34-7217-466c-a1a8-d323b807e1b2.png#align=left&display=inline&height=291&margin=%5Bobject%20Object%5D&name=image.png&originHeight=581&originWidth=1203&size=254708&status=done&style=none&width=601.5)
树和图最关键的差别：有没有环

- Linked List 是特殊化的 Tree
- Tree 是特殊化的 Graph

图：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/778875/1607580113345-af03e19a-9da1-4213-875a-78db18103948.png#align=left&display=inline&height=331&margin=%5Bobject%20Object%5D&name=image.png&originHeight=662&originWidth=1216&size=271227&status=done&style=none&width=608)

### 二叉搜索树 Binary Search Tree

#### 概念

二叉搜索树，也称为二叉排序树、有序二叉树（Order Binary Tree）、排序二叉树（Sorted Binary Tree）。是指一颗空树或者具有下列特性的二叉树：

1. 左子树上所有结点的值均小于它的根节点的值。
1. 右子树上所有结点的值均大于它的根节点的值。
1. 以此类推：左右子树也分别是二叉搜索树。

中序遍历：升序排列

#### 时间复杂度

1. 查询 O(logn)
1. 插入新节点 O(logn)
1. 删除 O(logn)

![image.png](https://cdn.nlark.com/yuque/0/2020/png/778875/1607586068516-e699aaf1-8d9b-461b-a254-95fe40f05725.png#align=left&display=inline&height=335&margin=%5Bobject%20Object%5D&name=image.png&originHeight=669&originWidth=1297&size=455764&status=done&style=none&width=648.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/778875/1607586068628-ab8b39ea-346d-445b-af80-f885d0af55b0.png#align=left&display=inline&height=348&margin=%5Bobject%20Object%5D&name=image.png&originHeight=695&originWidth=509&size=254664&status=done&style=none&width=254.5)

### 二叉树的中序遍历

1. 前序(Pre-order)： 根-左-右
1. 中序(In-order):左-根-右
1. 后序(Post-order):左-右-根

深度优先搜索算法 Depth First Search DFS
广度优先搜索算法 Breadth First Search BFS

## 堆 Heap

heap： 可以迅速找到一堆数中的最大或者最小的数据结构。
将根节点最大的堆叫大顶堆或者大根堆，根节点最小的堆叫作小顶堆或者小根堆。常见的堆有二叉堆、斐波那契堆等。

假设是大顶堆，则常见操作（API）:
find-max: O(1)
delete-max: O(logN)
insert(create): O(logN) or O(1)
