import { describe, it } from 'mocha'
import { expect } from 'chai'
import { SingleLinkedList } from '../src/single-linked-list'

describe('Single Linked List', function() {
    it('isEmpty returns false for a newly constructed list with items', function() {
        const list = new SingleLinkedList<number>([1,2,3,4,5])
        const isEmpty = list.isEmpty()
        expect(isEmpty).to.equal(false)
    });

    it('isEmpty returns true for a newly contructed list without items', function() {
        const list = new SingleLinkedList<number>([]);
        expect(list.isEmpty()).to.equal(true)
    });

    it('isEmpty returns true for a list whose contents have been deleted', function(){
        const list = new SingleLinkedList<number>([1, 2, 3, 4, 5])
        list.clear();
        expect(list.isEmpty()).to.equal(true)
    });
});