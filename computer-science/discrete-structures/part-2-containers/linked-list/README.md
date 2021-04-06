# LINKED LIST

The first sequential data structure you're likely to learn about is just the regular array, or maybe a vector if you're in C++
land. These structures by themselves have a limitation in that they require a loop in order to insert elements anywhere in the 
sequence. A linked-list on the other hand, allows for O(1) insertion and deletion anywhere in the sequence. 

A linked list, then, is useful if there are many insertions and deletions into the data structures of your program since they 
can accomplish this motion in constant time. However, indexing into a linked list is O(n) whereas indexing into an array is O(1). 
Due to this, a linked list insertion which isn't at the beginning or end of the list is actually an O(n) operation because we must first index
the list to find that element. But, inserting into the head or tail (on a doubly linked list) is an O(1) operation because no indexing is necessary. 

There is still a slight advantage for indexing in the middle of a linked list over an array in that it's a guaranteed n operations for inserting into an array 
but in a linked list it would be n operations at worst case since we aren't forced to index through the entire list if the element to be inserted is in the middle.  

In a linked list, the items of the list are not defined by position in the list, but rather by their neighbors. Each node 
in the list maintains a link to the node before or behind them (in a singly-linked list) or to both (in a doubly linked list)
and when insertions at a location happen the only operations that need to take place happen within those two or three nodes, 
and no shifting of the entire list is necessary. 

