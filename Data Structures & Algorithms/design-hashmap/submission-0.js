class MyHashMap {
    constructor() {
        this.hashMap = [];
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.hashMap[key] = value;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
       return this.hashMap[key] ?? -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.hashMap[key] = -1;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
