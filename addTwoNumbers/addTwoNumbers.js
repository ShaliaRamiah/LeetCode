function addTwoNumbers(l1, l2) {
    // Initialize a dummy head for the result linked list.
    let dummyHead = new ListNode(0);
    // Use a pointer to traverse the result linked list.
    let current = dummyHead;
    // Initialize the carry to 0.
    let carry = 0;

    // Iterate through the linked lists until both are exhausted.
    while (l1 || l2 || carry) {
        // Extract values of the current nodes (if available).
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;

        // Calculate the sum and carry.
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);

        // Create a new node with the digit of the sum.
        current.next = new ListNode(sum % 10);
        current = current.next;

        // Move to the next nodes in the input lists (if available).
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    // Handle the final carry, if any.
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    // Return the next node after the dummy head, which is the start of the result.
    return dummyHead.next;
}
