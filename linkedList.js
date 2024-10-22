//Adding a Node at the End

function addNoteAtEnd(head,newData){
    let newNode = {data:newData,next:null};

    if(head === null){
        return newNode;
    }
    let currentNode = head;
    while(currentNode !== null){
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
}

function printLinkedList(head){
    let currentNode = head;
    while(currentNode !== null){
        console.log(currentNode.data);
        currentNode= currentNode.next;
    }
}

function removeNode(head,key){
    if(head === null){
        return null
    }
    if(head.data === key){
        return head.next;
    }
    let currentNode = head;
    while(currentNode.next !==null){
        if(currentNode.next.data === key){
            currentNode.next = currentNode.next.next;
            return head;
        }
        currentNode = currentNode.next;
    }
    return head;
}