// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class SLL {
     // constructor, other methods, removed for brevity
    addFront(value) {
            var newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
            return this;

    	
    }
}
 // Write a method to remove the head node and return the new list head node. If the list is empty, return null.

class SLL {
    
    removeFront() {
            if (this.head) {
        this.head=this.head.next;
        return this.head;


    	
    }
}





//Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

class SLL {

    // constructor, other methods, removed for brevity
     front() {
            if(this.head == null){
        return null;

    	
    }
 }
