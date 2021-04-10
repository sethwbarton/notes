import { describe, it } from 'mocha'
import { expect } from 'chai'
import { SingleLinkedList } from '../src/single-linked-list'

describe('clear', function() {
    it('calling isEmpty after clear returns true', function(){
        const list = new SingleLinkedList<number>([1, 2, 3, 4, 5])
        list.clear();
        expect(list.isEmpty()).to.equal(true)
    });
});

describe('isEmpty', function() {
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

describe('toString', function() {
    it('correctly stringifies a normal list', function() {
        const list = new SingleLinkedList<number>([1,2,3,4,5])
        const stringVersion = list.toString()
        expect(stringVersion).to.equal('1 2 3 4 5')
    });

    it('correctly stringifies an empty list', function() {
        const list = new SingleLinkedList<number>([])
        const stringVersion = list.toString()
        expect(stringVersion).to.equal('')
    })

    /*
    * So, I found out that this was actually a really interesting test because javaScript objects don't "stringify" the
    * JSON like I thought they did when you call toString. So, in order for you to get pretty printing, whatever you
    * pass into the function has to have a toString defined. I check for that in singlyLinkedList.toString.
    * */
    it('correctly stringifies a list of objects', function () {
        const list = new SingleLinkedList<any>([{myGreeting: "sup", myGoodbye: "bye", myNoise: "arooga", toString: () => { return 'sup bye arooga'}}])
        const stringVersion = list.toString()
        expect(stringVersion).to.equal('sup bye arooga')
    });
});

