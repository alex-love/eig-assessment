class ImageStore {
  constructor(){
    this._data = [];
  }

  add(item){
    this._data.push(item);
  }

  get(id){
    return this._data.find(d => d.id === id);
  }
  getAll() {
    return this._data;
  }
}

const instance = new ImageStore();
Object.freeze(instance);

export default instance;