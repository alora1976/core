//Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!

class SLL {
    // constructor, other methods, removed for brevity
    display() {
    var runner = this.head;
    var str = "";
    while (runner) {
        str += runner.value + " ";
        runner = runner.next;
    }

    	// neatly display nodes in my list
    }
 }

 SLL.prototype.display = function() {
    var runner = this.head;
    var str = "";
    while (runner) {
        str += runner.value + " ";
        runner = runner.next;
    }
    return str;
}



