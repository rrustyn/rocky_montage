const TrieNode = function () {
    this.isWord = false;
    this.children = {};
}

var Trie = function () {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    //starting at the root
    let curr = this.root;

    for (let i = 0; i < word.length; i++) {
        //check if the node has child with next letter in word
        //if node doesn't exist: create node then move to node
        //if node exists: move to node
        if (curr.children[word[i]] === undefined) {
            curr.children[word[i]] = new TrieNode();
            curr = curr.children[word[i]];
        } else {
            curr = curr.children[word[i]];
        }

        //when end of word is reached set isWord to true;
        if (i === word.length - 1) {
            curr.isWord = true;
        }
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    //start from root
    let curr = this.root;

    //follow trie down each letter in word
    //if letter isn't found, word isn't in trie
    for (let i = 0; i < word.length; i++) {
        if (curr.children[word[i]] === undefined) {
            return false
        }
        curr = curr.children[word[i]]
    }

    //if word reached a node, check if the node was set to isWord
    return curr.isWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    //start at root
    let curr = this.root;

    //follow nodes along letters in prefix
    //if a node is undefined: prefix isn't in trie
    for (let i = 0; i < prefix.length; i++) {
        if (curr.children[prefix[i]] === undefined) {
            return false
        }
        curr = curr.children[prefix[i]]
    }

    //successful for loop means prefix in trie
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */