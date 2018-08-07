const itemOperations = {
    itemArray:[],
    addItem(id , name, desc, price,color,date,url ){
        var itemObject = new Item(id , name, desc, price,color,date,url );
        this.itemArray.push(itemObject);
    },
    sort(key){
       return  this.itemArray.sort((firstObject, secondObject)=>firstObject[key]-secondObject[key]);
    },
    searchById(id){
        return this.itemArray.find(itemObject=>itemObject.id ==id);
    },
    deleteMark(){
        return this.itemArray = this.itemArray.filter(itemObject=>itemObject.markForDelete==false);
    },
    mark(id){
        var itemObject = this.searchById(id);
        itemObject.toggle();
    },
    countMark(){
        return this.itemArray.filter(itemObject=>itemObject.markForDelete).length;
    },
    getLast(){
        if(this.itemArray.length>0){
        return this.itemArray[this.itemArray.length-1];
        }
        return null;
    }
}